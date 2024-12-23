---
sidebar_position: 6
---

# 6. Moving and Manipulating Files

## 6.1 Move the files and folders

Now that we’ve got a few files, let’s look at the sort of day-to-day tasks you might need to perform on them. In practice you’ll still most likely use a graphical program when you want to move, rename or delete one or two files, but knowing how to do this using the command line can be useful for bulk changes, or when the files are spread amongst different folders. Plus, you’ll learn a few more things about the command line along the way.

Let’s begin by putting our **combined.txt** file into our **dir1** directory, using the `mv` (move) command:

```
mv combined.txt dir1
```

You can confirm that the job has been done by using `ls` to see that it’s missing from the working directory, then `cd dir1` to change into **dir1**, `ls` to see that it’s in there, then `cd ..` to move the working directory back again. Or you could save a lot of typing by passing a path directly to the `ls` command to get straight to the confirmation you’re looking for:

```
ls dir1
```

Now suppose it turns out that file shouldn’t be in **dir1** after all. Let’s move it back to the working directory. We could `cd` into **dir1** then use `mv combined.txt ..` to say “move combined.txt into the parent directory”. But we can use another path shortcut to avoid changing directory at all. In the same way that two dots (`..`) represents the parent directory, so a single dot (`.`) can be used to represent the current working directory. Because we know there’s only one file in **dir1** we can also just use “`*`” to match any filename in that directory, saving ourselves a few more keystrokes. Our command to move the file back into the working directory therefore becomes this (note the space before the dot, there are two parameters being passed to `mv`):

```
mv dir1/* .
```

The `mv` command also lets us move more than one file at a time. If you pass more than two arguments, the last one is taken to be the destination directory and the others are considered to be files (or directories) to move. Let’s use a single command to move **combined.txt**, all our **test_n.txt** files and **dir3** into **dir2**. There’s a bit more going on here, but if you look at each argument at a time you should be able to work out what’s happening:

```
mv combined.txt test_* dir3 dir2
ls
ls dir2
```

With **combined.txt** now moved into **dir2**, what happens if we decide it’s in the wrong place again? Instead of **dir2** it should have been put in **dir6**, which is the one that’s inside **dir5**, which is in **dir4**. With what we now know about paths, that’s no problem either:

```
mv dir2/combined.txt dir4/dir5/dir6
ls dir2
ls dir4/dir5/dir6
```

Notice how our `mv` command let us move the file from one directory into another, even though our working directory is something completely different. This is a powerful property of the command line: no matter where in the file system you are, it’s still possible to operate on files and folders in totally different locations.

Since we seem to be using (and moving) that file a lot, perhaps we should keep a copy of it in our working directory. Much as the mv command moves files, so the `cp` command copies them (again, note the space before the dot):

```
cp dir4/dir5/dir6/combined.txt .
ls dir4/dir5/dir6
ls
```

Great! Now let’s create another copy of the file, in our working directory but with a different name. We can use the `cp` command again, but instead of giving it a directory path as the last argument, we’ll give it a new file name instead:

```
cp combined.txt backup_combined.txt
ls
```

That’s good, but perhaps the choice of backup name could be better. Why not rename it so that it will always appear next to the original file in a sorted list. The traditional Unix command line handles a rename as though you’re **moving** the file from one name to another, so our old friend `mv` is the command to use. In this case you just specify two arguments: the file you want to rename, and the new name you wish to use.

```
mv backup_combined.txt combined_backup.txt
ls
```

This also works on directories, giving us a way to sort out those difficult ones with spaces in the name that we created earlier. To avoid re-typing each command after the first, use the **Up Arrow** to pull up the previous command in the history. You can then edit the command before you run it by moving the cursor left and right with the arrow keys, and removing the character to the left with **Backspace** or the one the cursor is on with **Delete**. Finally, type the new character in place, and press **Enter** or **Return** to run the command once you’re finished. Make sure you change both appearances of the number in each of these lines.

```
mv "folder 1" folder_1
mv "folder 2" folder_2
mv "folder 3" folder_3
mv "folder 4" folder_4
mv "folder 5" folder_5
mv "folder 6" folder_6
ls
```

## 6.2 Delete files and folders

Now we know how to move, copy and rename files and directories. Given that these are just test files, however, perhaps we don’t really need three different copies of **combined.txt** after all. Let’s tidy up a bit, using the `rm` (remove) command:

```
rm dir4/dir5/dir6/combined.txt combined_backup.txt
```

Perhaps we should remove some of those excess directories as well:

```
rm folder_*
```

![alt text](image-5.png)

What happened there? Well, it turns out that rm does have one little safety net. Sure, you can use it to delete every single file in a directory with a single command, accidentally wiping out thousands of files in an instant, with no means to recover them. But it won’t let you delete a directory. I suppose that does help prevent you accidentally deleting thousands more files, but it does seem a little petty for such a destructive command to balk at removing an empty directory. Luckily there’s an `rmdir` (remove directory) command that will do the job for us instead:

```
rmdir folder_*
```

![alt text](image-6.png)

Well that’s a little better, but there’s still an error. If you run `ls` you’ll see that most of the folders have gone, but folder_6 is still hanging around. As you may recall, folder_6 still has a folder 7 inside it, and `rmdir` will only delete empty folders. Again, it’s a small safety net to prevent you from accidentally deleting a folder full of files when you didn’t mean to.

In this case, however, we do mean to. The addition of options to our `rm` or `rmdir` commands will let us perform dangerous actions without the aid of a safety net! In the case of rmdir we can add a `-p` switch to tell it to also remove the parent directories. Think of it as the counterpoint to `mkdir -p`. So if you were to run rmdir -p dir1/dir2/dir3 it would first delete dir3, then dir2, then finally delete dir1. It still follows the normal `rmdir` rules of only deleting empty directories though, so if there was also a file in dir1, for example, only dir3 and dir2 would get removed.

A more common approach, when you’re really, really, really sure you want to delete a whole directory and anything within it, is to tell `rm` to work recursively by using the `-r` switch, in which case it will happily delete folders as well as files. With that in mind, here’s the command to get rid of that pesky folder_6 and the subdirectory within it:

```
rm -r folder_6
ls
```

Remember: although `rm -r` is quick and convenient, it’s also dangerous. It’s safest to explicitly delete files to clear out a directory, then `cd ..` to the parent before using rmdir to remove it.