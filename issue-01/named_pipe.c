// https://www.youtube.com/watch?v=CbbzmB8TPXk

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

#define FIFO_FILENAME "./testfifo"

static void print_usage(char *progname)
{
    printf("%s (s|w)\n", progname);
    return;
}

static int do_reader(void)
{
    int fd;
    char buf[128];

    fd = open(FIFO_FILENAME, O_RDONLY);
    if (fd < 0) {
        perror("open()");
        return -1;
    }

    read(fd, buf, sizeof(buf));
    printf("writer said... %s\n", buf);
    close(fd);

    return 0;
}

static int do_writer(void)
{
    int fd;
    char buf[128];

    unlink(FIFO_FILENAME);
    if (mkfifo(FIFO_FILENAME, 0644)) {
        perror("mkfifo()");
        return -1;
    }

    fd = open(FIFO_FILENAME, O_WRONLY); // blocking
    if (fd < 0) {
        perror("open()");
        return -1;
    }

    strncpy(buf, "hello", sizeof(buf));
    write(fd, buf, strlen(buf));
    close(fd);

    return 0;
}

int main(int argc, char **argv) {
    if (argc < 2) {
        print_usage(argv[0]);
        return -1;
    }

    if (!strcmp(agrv[1], "r")) {
        // reader
        do_reader();
    } else if (!strcmp(argv[1], "w")) {
        // writer
        do_writer();
    } else {
        print_usage(argv[0]);
        return -1;
    }

    return 0;
}