---
title: Configure DNS Records
description: Step-by-step guide for adding and managing DNS records
sidebar:
  order: 1
---

This guide shows you how to configure common DNS record types. Assumes basic DNS knowledge.

## Prerequisites

- Access to DNS management interface (cPanel, Cloudflare, etc.)
- Domain name ownership verified
- Basic understanding of DNS concepts

## Add an A Record

A records map domain names to IPv4 addresses.

1. Log in to your DNS management panel
2. Navigate to DNS settings
3. Click "Add Record"
4. Select record type: **A**
5. Enter details:
   - **Name**: `@` (for root domain) or `subdomain`
   - **Value**: Your server IP (e.g., `192.0.2.1`)
   - **TTL**: `3600` (1 hour)
6. Click "Save"

**Example**:
```
Type: A
Name: www
Value: 192.0.2.1
TTL: 3600
```

This makes `www.yourdomain.com` point to `192.0.2.1`.

## Add a CNAME Record

CNAME records create aliases pointing to other domain names.

1. Navigate to DNS settings
2. Click "Add Record"
3. Select type: **CNAME**
4. Enter details:
   - **Name**: Your subdomain (e.g., `blog`)
   - **Value**: Target domain (e.g., `yourblog.platform.com`)
   - **TTL**: `3600`
5. Save changes

**Example**:
```
Type: CNAME
Name: blog
Value: myblog.medium.com
TTL: 3600
```

:::caution
Cannot create CNAME at root domain (`@`). Use A record or ALIAS record instead.
:::

## Add MX Records

MX records direct email to mail servers.

1. Navigate to DNS settings
2. Click "Add Record"
3. Select type: **MX**
4. Enter details:
   - **Name**: `@` (root domain)
   - **Priority**: `10` (lower = higher priority)
   - **Value**: Mail server hostname
   - **TTL**: `3600`
5. Save

**Example for Google Workspace**:
```
Type: MX
Name: @
Priority: 1
Value: aspmx.l.google.com
TTL: 3600
```

Add additional MX records with priorities 5, 5, 10, 10 for backup servers.

## Add TXT Records

TXT records store text information, commonly for verification and email security.

### For Domain Verification

1. Navigate to DNS settings
2. Add TXT record:
   - **Name**: `@` or as specified by service
   - **Value**: Verification string from service
   - **TTL**: `3600`

**Example**:
```
Type: TXT
Name: @
Value: google-site-verification=abc123xyz789
TTL: 3600
```

### For SPF (Email Authentication)

```
Type: TXT
Name: @
Value: v=spf1 include:_spf.google.com ~all
TTL: 3600
```

### For DKIM

```
Type: TXT
Name: default._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSq...
TTL: 3600
```

## Verify DNS Changes

After adding records, verify they're working:

### Using Command Line

**Check A Record**:
```bash
dig yourdomain.com A
# or
nslookup yourdomain.com
```

**Check MX Record**:
```bash
dig yourdomain.com MX
```

**Check TXT Record**:
```bash
dig yourdomain.com TXT
```

### Using Online Tools

- [DNS Checker](https://dnschecker.org)
- [MX Toolbox](https://mxtoolbox.com)
- [What's My DNS](https://whatsmydns.net)

## Propagation Time

DNS changes take time to propagate globally:

- **Typical**: 1-4 hours
- **Maximum**: 24-48 hours
- **Depends on**: TTL settings

:::tip
Set low TTL (300) before making changes, then increase after confirming.
:::

## Common Issues

### Record Not Resolving

**Solutions**:
1. Wait for propagation (check TTL)
2. Clear local DNS cache:
   ```bash
   # macOS
   sudo dscacheutil -flushcache
   
   # Windows
   ipconfig /flushdns
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```
3. Verify record syntax
4. Check for conflicting records

### CNAME at Root Domain

**Problem**: Cannot create CNAME for `@` (root).

**Solution**: Use A record or ALIAS/ANAME record (if provider supports).

### Email Not Receiving

**Check**:
1. MX records exist and have correct priority
2. No typos in mail server hostnames
3. TXT records (SPF, DKIM) configured correctly

## Best Practices

- **Document changes**: Keep record of all DNS modifications
- **Use appropriate TTL**: Lower (300-600) for testing, higher (3600-86400) for production
- **Test before switching**: Verify new records resolve before changing live traffic
- **Backup records**: Export DNS zone before major changes
- **Monitor propagation**: Use multiple DNS checkers from different locations

## Related Guides

- [Understanding DNS Architecture](/docs/explanation/dns-architecture/)
- [Setting Up Email Authentication](/docs/guides/how-to/email-security/)
- [Troubleshooting DNS Issues](/docs/guides/how-to/dns-troubleshooting/)