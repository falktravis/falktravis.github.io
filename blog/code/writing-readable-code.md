---
title: "Writing Readable Code"
writedate: "10/25/2024"
timestamp: "1:25 PM"
description: "If you have ever tried to interpret another persons code, you know how tricky it is. You should also know, how important it can be to write code that is easily understandable. But how do we write readable code?"
length: "3 min read"
image: "/images/name-your-variables-img.jpg"
alt: "Code"
---

Being in college computer science classes, and working on extracurricular team projects, I spend a lot of time looking at other students code. Interpreting someone elses code is intensely difficult. Even with frequent comments, and perfect formatting, you often need to look through the block over and over again to determine what is going on. While this basic level of readability is fine, great developers write code that reads like english.

Writing readable code isn't just beneficial to developers working on a team. Even if working on a solo project there are many reasons to make the extra effort:
1. **Reusability:** I find myself pulling various blocks of code from my previous projects all the time. If you don't know what anything does, this becomes near impossible.
2. **Debugging:** Unless I am working on super deep projects that require me to look back at month old code, this generally doesn't cause much of an issue. However, it can always speed up the process.
3. **Development Speed:** One of the best arguments for writing readable code, is that it can help you make connections faster to increase productivity. I will explain this more later on.
4. **Transferability:** Nobody else can use your code unless they can read and understand it. Duh.

Now that you hopefully understand the significance of readability, here are my best tips for achieving it.

## Comments
Comments are the first thing that everyone thinks about when writing readable code, and for good reason. Keeping detailed comments for each block of code is a completely necessary to understand the flow of the project. However, comments can be slow. If you make a comment for every line of code, you are at least doubling your development time. Not only do you have to write each line of code, but then think about how to best articulate what it does.

We can always assume whoever is reading our code has a certain level of competency. That will vary from project to project but you need to keep it in mind when thinking about comments. I like to group certain lines of code under a generalized comment that explains its function. Some lines will require their own comments if they are isolated in their function. Every line should have a comment that you can reference to identify at least a generalized purpose.

It's not an exact science, but my point here is that comments are important, but don't overthink them. Do what feels right to you based on who is going to read your code.

## Naming Variables
This is one of the most important and overlooked part of readable code. All the time I see devs naming their variables *x* and *y*, this is a terrible practice. *i* can be fine if that means index to you, but I tend to shy away from that as well unless its something very basic. 

It is 100% worth the effort to think of, and type out a three word camel case name for each variable with an advanced purpose. Sometimes just having proper naming conventions will allow me to make fairly quick connections in my code that would have taken far more brain power otherwise. This is a little hard to articulate, but in most cases, I think that naming your variables properly, can be more important than comments.

## Functions
Functions are another tricky area. Of course you want to use functions for anything that you use more than once. But sometimes it can be a good practice to make a function when doing an isolated task that interrupts the flow of your code. For me, this generally happens when I need to run some operation in the middle of a different block of code, to return a value necessary for the more general purpose. When you can easily identify an algorithm within an algorithm, you probably want to make a separate function. 

>If this will only be used in the code once, it's important to position the declaration for this function just above the block of code where it is used.


Thanks for reading! I know this wasn't the most comprehensive guide, and I'm sure you can find more in depth resources online. But it's important not to spend to much effort on readability. Remember, while readable code is important, getting down the actual function in a timely manor is more important.