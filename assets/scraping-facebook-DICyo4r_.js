const e=`---\r
title: "Scraping Facebook"\r
writedate: "10/25/2024"\r
timestamp: "12:43 PM"\r
description: "Facebook is undoubtedly one of, if not the most, complex site on the internet. It is dense with protection, users, and most importantly data. Useful, valuable data. Here's how I was able to scrape this maze of a website..."\r
length: "7 min read"\r
image: "/images/facebookBlogPhoto.jpg"\r
alt: "Facebook Sign"\r
\r
---\r
\r
\r
**Preface:** I am no longer running this software in any capacity. Running this code is strictly against Facebook's terms of service. This was a personal project, although I did provide this as a service to a few users(15 at its peak), it was never meant to be a large scale operation.\r
\r
## The Problem\r
\r
In my Junior year of highschool, armed with my parents car and trailer, me and one of my friends started flipping couches on Facebook Marketplace. We realized it was a decent way to make some pocket cash. But instead of trying to expand this operation, like most flippers did, I realized that there was a serious bottleneck in the process, and went about fixing it. The first person to message someone with a descent couch, usually gets to buy it. We were essentially running a moving company, where marketing was done by messaging Facebook Marketplace owners. And to market effectively, everything depended on speed.\r
\r
But you had to get really lucky to message someone first, unless you were sitting there refreshing the page 12 hours a day. This is what I set out to fix. \r
\r
## The Solution\r
\r
My initial idea was to create a chrome web extension that could automate a browser tab for you. But quickly realized that you would have to be sitting at your computer for this to work. I then picked up a more aggressive browser automation style, using Nodejs and Puppeteer. With this, I would be able to simulate real user activity, and collect any information provided by Facebook.\r
\r
### Puppeteer\r
\r
Puppeteer is an extremely interesting technology. I was essentially able to create an army of headless, ghost browsers, using the cheapest VPS I could find(I have no affiliation with [this]() service, but I spent literal days finding the best deal, so I can at least share it here). By spending a couple months learning and developing with Puppeteer, I was able to get to a point where I could effectively mimic user activity to a deeply accurate level. I will not go into my techniques here, but all the code is public on my github if you can decipher it. :)\r
\r
### Discord.js\r
\r
Coming from the Shoe flipping/botting community(iykyk), I was very familiar with Discord and Discord Applications for serving information and user interactions. It was a very simple way to provide users with medium for receiving information on all of their devices, giving them a way to interact with each post, and also creating a small community in which I could survey user needs and bugs easily. \r
\r
### Node JS Workers\r
\r
By the nature of this product, I needed to run many processes simultaneously. There are a couple ways to do this with NodeJS, but the tactic I choose to employ was Node JS Workers. I would by lying if I said this wasn't a massive pain. Making sure workers start with the right information, pass info between the main script properly, and terminate at the correct time was an absolute nightmare.\r
\r
### MongoDB\r
\r
Although I had played around with MongoDB a little bit out of curiosity before this, it was my first time really applying it. And I have to say, I love MongoDB. It has an amazing free tier, that you can really use to learn how it works and most small applications can run simply on that. But even when I needed backups, I was totally happy to pay the couple bucks a month for the service. This is saying a lot coming from me, because I am usually incredibly stingy paying for any service. And even when forced to I resent it. Thanks MongoDB.\r
\r
## Feature Stories\r
\r
Any product/project can really be represented by a collection of core features. Here are some feature summaries that can give you an overview of my time working on it.\r
\r
### Core Functionality\r
\r
The base of the project, was based on a function I called "Tasks". Basically, you were alloted a set number of tasks, and were able to create and delete tasks as you pleased. Each task would be set with some base information about what kind of listings you wanted to purchase. Based on these parameters, the software would search Facebook and notify the user every 8-10 minutes if there was a new post they might want to take action on. It required a very deep knowledge of Facebook's site, and I spent many hours just snooping around Facebook's site to reverse engineer the rules, and any loopholes that could help me get the functionality I wanted.\r
\r
A good example of this was how I would refresh the results. Just refreshing the page didn't do it, because Facebook sometimes wouldn't give you new results. However, if you would change the search parameters at all, Facebook had to refresh the results. So, I would make users set a max price, and then change it around by small increments to force a refresh.\r
\r
### Auto Messaging\r
\r
The idea was that the bot would be able to sign into your Facebook account using cookies, and message the owner of a listing instantly. This did work, but It's pretty hard to convince Facebook you are real if you send messages to a bunch of people instantly after they list an item. \r
\r
To solve this, I added a button after each notification that would allow users to control which posts they wanted to message the owner of. With the hopes that it would solve the issue of mass instant messaging by reducing waste. However, this feature also never really took off, because users didn't want to give me access to their Facebook account(duh), and didn't understand the nature of cookies. Not to mention that it was risky to attach your main account to this because there was still a chance you would get a ban. Not all of your features can be a hit...\r
\r
### Website Interface\r
\r
Due to some changes in the project, as I will describe in the next section. I wanted to make the project feel more polished. The Discord interface was convenient and efficient, but it felt a little dingy and like it was just thrown together(it was). So I resolved to fix this issue by upgrading to a web interface, that would allow users to manipulate and display data better. I completed this project in a couple weeks with MongoDB applications, which made it pretty easy to keep all the data and display it in real time. Although this was never deployed to anyone, it was packaged and ready to go. Even deployed on my A2 Hosting servers, which might have been the hardest part of the whole thing.\r
\r
## The End\r
\r
A couple months into this project, I was contacted by a Large Heavy Machinery and Used Car Auction, and a Used Car Dealership Contractor. I had not gone looking for these people, they found my activity on some sub-reddits and through various discord communities. This started what almost turned into a bidding war, where they tried to convince me to turn my little project into a full fledged web spider that could scrape massive amounts of data from Facebook Marketplace and allow them, or the companies they served, to significantly increase their inventory. The Auction company, actually had such a need for this product, that they were employing teams of interns to scrape Facebook for them, and very inefficiently. Even more surprising was that janky solution was actually profitable.\r
\r
I looked into contracting for one of these places for a little while, but with some well timed advice from a third party, I was snapped back to reality that this needed to stay a personal project. It is very blatantly against Facebook's terms of service, and moreover, simply immoral.\r
\r
Thanks for reading! This project was my first really big undertaking, and I learned some really impossibly valuable skills from it. I hope it at least made for an interesting story...`;export{e as default};
