---
title: Command Reference
description: Complete reference for common Linux/Unix commands
sidebar:
  order: 1
---

Quick reference for essential command-line tools used in system administration and development.

## File Operations

### `ls` - List Directory Contents

```bash
ls [options] [path]
```

**Common Options**:
- `-l` - Long format with details
- `-a` - Show hidden files
- `-h` - Human-readable file sizes
- `-t` - Sort by modification time
- `-r` - Reverse order

**Examples**:
```bash
ls -la          # List all files with details
ls -lh /var/log # Show log files with readable sizes
ls -lt          # Sort by newest first
```

### `cp` - Copy Files

```bash
cp [options] source destination
```

**Options**:
- `-r` - Copy directories recursively
- `-p` - Preserve attributes
- `-v` - Verbose output
- `-i` - Prompt before overwrite

**Examples**:
```bash
cp file.txt backup.txt
cp -r dir1/ dir2/
cp -p *.conf /etc/backup/
```

### `mv` - Move/Rename Files

```bash
mv [options] source destination
```

**Examples**:
```bash
mv oldname.txt newname.txt
mv *.log /var/logs/
mv -i file.txt /backup/  # Prompt before overwrite
```

### `rm` - Remove Files

```bash
rm [options] file
```

**Options**:
- `-r` - Remove directories recursively
- `-f` - Force removal without prompts
- `-i` - Prompt before each removal
- `-v` - Verbose output

**Examples**:
```bash
rm file.txt
rm -rf directory/
rm -i *.tmp  # Prompt before deleting
```

:::danger[Warning]
`rm -rf` is destructive and cannot be undone. Always double-check paths.
:::

## Text Processing

### `grep` - Search Text

```bash
grep [options] pattern [files]
```

**Options**:
- `-i` - Case insensitive
- `-r` - Recursive search
- `-n` - Show line numbers
- `-v` - Invert match (show non-matching)
- `-c` - Count matches

**Examples**:
```bash
grep "error" logfile.txt
grep -i "warning" *.log
grep -rn "TODO" /project/
grep -v "^#" config.conf  # Exclude comments
```

### `sed` - Stream Editor

```bash
sed [options] 'command' file
```

**Common Commands**:
- `s/old/new/` - Substitute text
- `/pattern/d` - Delete matching lines
- `/pattern/p` - Print matching lines

**Examples**:
```bash
sed 's/foo/bar/' file.txt           # Replace first occurrence
sed 's/foo/bar/g' file.txt          # Replace all occurrences
sed -i 's/foo/bar/g' file.txt       # Edit file in-place
sed '/^#/d' file.txt                # Delete comment lines
sed -n '/error/p' log.txt           # Print only error lines
```

### `awk` - Text Processing

```bash
awk 'pattern {action}' file
```

**Examples**:
```bash
awk '{print $1}' file.txt           # Print first column
awk -F: '{print $1}' /etc/passwd    # Use : as delimiter
awk '$3 > 100' data.txt             # Print lines where column 3 > 100
awk '{sum+=$1} END {print sum}'     # Sum first column
```

## System Information

### `ps` - Process Status

```bash
ps [options]
```

**Options**:
- `aux` - All processes, user-oriented
- `-ef` - All processes, full format
- `-u username` - Processes for specific user

**Examples**:
```bash
ps aux
ps -ef | grep nginx
ps -u apache
```

### `top` - Monitor Processes

```bash
top [options]
```

**Interactive Commands** (while running):
- `q` - Quit
- `k` - Kill process
- `M` - Sort by memory
- `P` - Sort by CPU
- `u` - Filter by user

### `df` - Disk Space

```bash
df [options]
```

**Options**:
- `-h` - Human-readable sizes
- `-T` - Show filesystem type
- `-i` - Inode information

**Examples**:
```bash
df -h
df -hT /dev/sda1
```

### `du` - Disk Usage

```bash
du [options] [path]
```

**Options**:
- `-h` - Human-readable
- `-s` - Summary only
- `-a` - All files
- `--max-depth=N` - Limit directory depth

**Examples**:
```bash
du -h /var/log
du -sh /home/*
du -h --max-depth=1 /
```

## Network Commands

### `ping` - Test Connectivity

```bash
ping [options] hostname
```

**Options**:
- `-c N` - Send N packets
- `-i N` - Wait N seconds between packets
- `-s size` - Packet size

**Examples**:
```bash
ping google.com
ping -c 4 192.168.1.1
```

### `curl` - Transfer Data

```bash
curl [options] URL
```

**Options**:
- `-O` - Save with original filename
- `-o filename` - Save as filename
- `-X METHOD` - HTTP method
- `-H "Header"` - Add header
- `-d data` - POST data

**Examples**:
```bash
curl https://example.com
curl -O https://example.com/file.zip
curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' https://api.example.com
```

### `netstat` - Network Statistics

```bash
netstat [options]
```

**Options**:
- `-tuln` - Show listening TCP/UDP ports with numbers
- `-r` - Show routing table
- `-i` - Show network interfaces

**Examples**:
```bash
netstat -tuln
netstat -r
netstat -i
```

## File Permissions

### `chmod` - Change Permissions

```bash
chmod [options] mode file
```

**Numeric Mode**:
- 4 = read (r)
- 2 = write (w)
- 1 = execute (x)

**Examples**:
```bash
chmod 755 script.sh     # rwxr-xr-x
chmod 644 file.txt      # rw-r--r--
chmod +x script.sh      # Add execute
chmod -w file.txt       # Remove write
```

### `chown` - Change Owner

```bash
chown [options] owner[:group] file
```

**Examples**:
```bash
chown user file.txt
chown user:group file.txt
chown -R user:group directory/
```

## Compression

### `tar` - Archive Files

```bash
tar [options] archive files
```

**Common Options**:
- `-c` - Create archive
- `-x` - Extract archive
- `-v` - Verbose
- `-f` - File name
- `-z` - Gzip compression
- `-j` - Bzip2 compression

**Examples**:
```bash
tar -czf archive.tar.gz directory/      # Create compressed
tar -xzf archive.tar.gz                 # Extract compressed
tar -tvf archive.tar                    # List contents
```

### `gzip` / `gunzip` - Compress Files

```bash
gzip [options] file
gunzip [options] file.gz
```

**Examples**:
```bash
gzip file.txt           # Creates file.txt.gz
gunzip file.txt.gz      # Extracts to file.txt
gzip -k file.txt        # Keep original
```

## See Also

- [Bash Scripting Guide](/docs/guides/tutorials/bash-scripting/)
- [System Administration Best Practices](/docs/explanation/sysadmin-practices/)
- [Troubleshooting Commands](/docs/guides/how-to/troubleshooting/)