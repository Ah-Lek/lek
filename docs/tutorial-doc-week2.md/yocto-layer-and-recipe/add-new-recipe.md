---
sidebar_position: 3
---

# 3. Add New Recipe

In yocto projects, it is often necessary to add customized functions. In this tutorial, a new recipe needs to be added. The recipe needs to include a ".c file" and a ".bb file". Here is the example you can be follow.

In the file `meta-lek/cof/layer.comf`:

```
BBPATH .= ":${LAYERDIR}"
BBFILES += "${LAYERDIR}/recipes-*/*/*.bb \
            ${LAYERDIR}/recipes-*/*/*.bbappend \
           "

BBFILE_COLLECTIONS += "lek"
BBFILE_PATTERN_lek := "^${LAYERDIR}/"
BBFILE_PRIORITY_lek = "5"
```

In the file `meta-lek/recipes-app/hello/files/hello.c`:

```
#include <stdio.h>

int main(void) {
        printf("Hello World!!\n");

        return 0;
}
```

In the file `meta-lek/recipes-app/hello/src/hello_1.0.bb.c`:

```
SUMMARY = "Simple Hello World Application"
DESCRIPTION = "A test application to demonstrate how to create a recipe \
              by directly compiling C files with BitBake."

# a category this package belong to
SECTION = "examples"
# this package is optional, lacking of it doesn't cause error
PRIORITY = "optional"

LICENSE = "MIT"
LIC_FILES_CHKSUM = "\
    file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"
    
FILESEXTRAPATHS_prepend := "${THISDIR}/src:"
do_package_qa[noexec] = "1"

SRC = "${WORKDIR}/hello-1.0"

SRC_URI = "file://hello-1.0.tar.gz"

S = "${WORKDIR}"

# fix WARN_QA error
TARGET_CC_ARCH += " ${CFLAGS} ${LDFLAGS}"

do_compile() {
    ${CC} -c ${SRC}/helloprint.c
    ${CC} -c ${SRC}/hello.c
    ${CC} -o hello hello.o helloprint.o
}

do_install() {
    install -d ${D}${bindir}
    install -m 0755 ${WORKDIR}/hello ${D}${bindir}
    install -m 0755 ${SRC}/moil_coffee ${D}${bindir}
    install -m 0755 ${SRC}/q563_rzgpio ${D}${bindir}
}
```