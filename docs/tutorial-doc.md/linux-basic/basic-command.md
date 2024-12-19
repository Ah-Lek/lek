---
sidebar_position: 3
---

# 3. Basic Commands

Learning some common Linux commands is essential for using the system effectively. Here are some basic commands:

## 3.1 File and Directory Operations

- `pwd`: Displays the full path of the current directory.
- `ls`: Lists files and directories in the current directory.
    - `ls -l`: Lists files in detailed format.
    - `ls -a`: Lists all files, including hidden files (those starting with `.`).
- `cd <path>`: Changes the current directory to `<path>`. For example, `cd /home/username`.
    - `cd ..`: Moves up one directory level.
    - `cd ~`: Moves to the user's home directory.
- `mkdir <directory>`: Creates a new directory.
- `rmdir <directory>`: Removes an empty directory.
- `rm <file>`: Deletes a file.
    - `rm -r <directory>`: Deletes a non-empty directory and its contents.
    - `rm -f <file>`: Forces deletion of a file, ignoring errors.

## 3.2 Viewing and Manipulating File Contents
- `cat <file>`: Displays the contents of a file.
- `less <file>`: Displays the contents of a file one page at a time, allowing scrolling.
- `head <file>`: Displays the first few lines of a file.
- `tail <file>`: Displays the last few lines of a file.
- `grep <pattern> <file>`: Searches for a pattern (string) in a file.

## 3.3 Package Management
In Linux, software is often managed through package managers, which vary by distribution. Common package managers are apt (Ubuntu/Debian), yum (CentOS/RHEL), and dnf (Fedora).

Ubuntu/Debian (APT):
- `sudo apt update`: Updates the package database.
- `sudo apt upgrade`: Upgrades installed packages.
- `sudo apt install <package>`: Installs a package.
- `sudo apt remove <package>`: Removes a package.

Let’s look at the 60 most commonly used Linux commands and their examples for system administration. In this tutorial, we will explain 60 essential Linux commands for various purposes, from navigation to software management. Download this Linux command cheat sheet from the link below to access the information offline. 

- Click [HERE](https://www.hostinger.com/tutorials/linux-commands)!!