---
sidebar_position: 5
---

# 5. Linux Post-Intallation for Docker Engine

The Docker daemon binds to a Unix socket, not a TCP port. By default it's the `root` user that owns the Unix socket, and other users can only access it using `sudo`. The Docker daemon always runs as the root user.

If you don't want to preface the `docker` command with `sudo`, create a Unix group called docker and add users to it. When the Docker daemon starts, it creates a Unix socket accessible by members of the docker group. On some Linux distributions, the system automatically creates this group when installing Docker Engine using a package manager. In that case, there is no need for you to manually create the group.

To create the docker group and add your user:

First, create the docker group.

```
sudo groupadd docker
```

Add your user to the docker group.
```
sudo usermod -aG docker $USER
```
Log out and log back in so that your group membership is re-evaluated. You can also run the following command to activate the changes to groups:

```
newgrp docker
```

Verify that you can run docker commands without sudo.

```
docker run hello-world
```

This command downloads a test image and runs it in a container. When the container runs, it prints a message and exits.

