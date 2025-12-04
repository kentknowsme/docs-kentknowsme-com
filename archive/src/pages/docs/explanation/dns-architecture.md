---
title: Understanding DNS Architecture
description: Deep dive into how DNS works and why it's designed this way
sidebar:
  order: 1
---

This guide explains DNS (Domain Name System) architecture, design decisions, and how different components work together.

## What is DNS?

DNS translates human-readable domain names (like `example.com`) into IP addresses (like `192.0.2.1`) that computers use to communicate. It's essentially the internet's phone book.

## Why DNS Exists

### The Problem

In the early internet, hosts maintained local files mapping names to addresses. This approach had critical limitations:

- **Scalability**: Manual updates couldn't keep pace with growth
- **Consistency**: No central coordination meant conflicting data
- **Distribution**: Changes took days or weeks to propagate

### The Solution

DNS introduced a distributed, hierarchical database system that:

- Scales to billions of domains
- Updates propagate in hours
- Allows decentralized management
- Provides redundancy and fault tolerance

## DNS Hierarchy

DNS uses a tree structure with multiple levels:

```
                    . (root)
                    |
        ┌───────────┼───────────┐
        |           |           |
       com         org         net
        |           |           |
    ┌───┴───┐   ┌───┴───┐   example
    |       |   |       |
 example  google |    wikipedia
            |   |
           www  |
              blog
```

### Root Level

The root zone (represented by `.`) is the top of the hierarchy. 13 root server clusters (A through M) handle queries for top-level domains.

**Why 13?** Historical limitation of UDP packet size (512 bytes) for DNS responses.

### Top-Level Domains (TLDs)

TLDs come in several categories:

- **Generic** (gTLD): `.com`, `.org`, `.net`
- **Country Code** (ccTLD): `.uk`, `.jp`, `.de`
- **Sponsored**: `.gov`, `.edu`, `.mil`
- **New**: `.tech`, `.app`, `.dev`

Each TLD has authoritative name servers managing that zone.

### Second-Level Domains

These are the domains you register (like `example.com`). You control the authoritative name servers for your domain.

### Subdomains

Any domains under your control (`www.example.com`, `blog.example.com`). You can delegate these to other name servers if needed.

## DNS Resolution Process

Understanding the complete resolution process:

### 1. Recursive Query

User types `www.example.com` in browser:

```
User → Resolver: "What's www.example.com?"
```

### 2. Cache Check

Resolver checks its cache:

```
IF cached AND not expired:
    Return cached answer
ELSE:
    Continue resolution
```

### 3. Root Server Query

If not cached, query root servers:

```
Resolver → Root Server: "Who handles .com?"
Root Server → Resolver: "Ask TLD servers at [addresses]"
```

### 4. TLD Server Query

Query TLD servers:

```
Resolver → TLD Server: "Who handles example.com?"
TLD Server → Resolver: "Ask example.com's name servers"
```

### 5. Authoritative Query

Query authoritative name servers:

```
Resolver → Auth Server: "What's www.example.com?"
Auth Server → Resolver: "192.0.2.1"
```

### 6. Return to User

```
Resolver → User: "192.0.2.1"
```

Total: 4 queries (if nothing cached)

## Caching and TTL

### Time To Live (TTL)

Every DNS record has a TTL specifying how long it can be cached:

```
example.com.  3600  IN  A  192.0.2.1
              ^TTL
```

This record can be cached for 3600 seconds (1 hour).

### Why Caching Matters

**Without caching**:
- Millions of queries hit root/TLD servers constantly
- Resolution takes longer
- System doesn't scale

**With caching**:
- Most queries answered immediately
- Reduced load on infrastructure
- Faster user experience

### TTL Trade-offs

**Low TTL (300-600)**:
- ✅ Changes propagate quickly
- ❌ More queries to authoritative servers
- **Use when**: Testing or expecting changes

**High TTL (3600-86400)**:
- ✅ Reduced server load
- ✅ Faster resolution
- ❌ Slower change propagation
- **Use when**: Stable configuration

## Record Types and Their Purpose

### A / AAAA Records

Map names to IP addresses:

```
example.com.       A     192.0.2.1       # IPv4
example.com.       AAAA  2001:db8::1     # IPv6
```

**Design decision**: Separate record types for IPv4/IPv6 maintains backward compatibility.

### CNAME Records

Create aliases:

```
www.example.com.   CNAME  example.com.
```

**Why not A record?** CNAME allows changing the target without updating all aliases.

**Limitation**: Cannot exist at zone apex (root domain) because it conflicts with SOA and NS records.

### MX Records

Direct email delivery:

```
example.com.  MX  10  mail.example.com.
example.com.  MX  20  backup.example.com.
```

**Priority**: Lower numbers = higher priority. Allows fallback servers.

### NS Records

Delegate authority:

```
example.com.       NS  ns1.provider.com.
example.com.       NS  ns2.provider.com.
```

**Multiple servers**: Provides redundancy. If one fails, others answer queries.

### TXT Records

Store arbitrary text, commonly used for:

- Domain verification
- Email authentication (SPF, DKIM, DMARC)
- Site configuration

## Authoritative vs Recursive Servers

### Authoritative Name Servers

- Own the zone data
- Respond with definitive answers
- Don't cache or forward
- Examples: Your registrar's name servers

### Recursive Resolvers

- Accept queries from clients
- Perform full resolution process
- Cache responses
- Examples: Google (8.8.8.8), Cloudflare (1.1.1.1)

**Why separate?** Division of concerns:
- Authoritative servers focus on accurate zone data
- Recursive servers focus on fast, cached responses

## DNS Security

### Vulnerabilities

**Cache Poisoning**: Attacker inserts false data into resolver cache.

**Solution**: DNSSEC (DNS Security Extensions) cryptographically signs records.

**DDoS Attacks**: Overwhelming servers with queries.

**Solutions**:
- Anycast routing distributes load
- Rate limiting
- Response Rate Limiting (RRL)

### DNSSEC

Adds cryptographic signatures to DNS:

```
example.com.  RRSIG  A  [signature]
example.com.  DNSKEY  [public key]
```

**Trade-off**: Increased complexity and record size for improved security.

## Design Principles

### Distribution

No single point of failure. Multiple root servers, TLD servers, and resolver networks ensure availability.

### Hierarchy

Tree structure enables efficient delegation and scaling. Each level handles its responsibility without global coordination.

### Caching

Reduces load and improves performance. TTL mechanism balances freshness with efficiency.

### Extensibility

New record types can be added without breaking existing infrastructure (TXT, SRV, CAA).

## Real-World Considerations

### Propagation Delay

DNS changes don't take effect instantly:

1. Update authoritative server (seconds)
2. Wait for cached records to expire (up to TTL)
3. Wait for client cache (varies)

**Total time**: Typically 1-24 hours depending on TTL.

### Redundancy Best Practices

- Use multiple authoritative name servers
- Place servers in different geographic locations
- Different networks/ASNs
- Different providers (avoid single point of failure)

### Monitoring

Track DNS health:
- Query response times
- Authoritative server availability
- Zone transfer success
- DNSSEC validation

## Related Topics

- [Configure DNS Records](/docs/guides/how-to/dns-setup/)
- [DNS Commands Reference](/docs/reference/dns-commands/)
- [Troubleshooting DNS](/docs/guides/how-to/dns-troubleshooting/)