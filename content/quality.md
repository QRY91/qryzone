+++
title = "The cost/benefit of being thorough"
description = "Why understanding what we build matters"
date = 2023-08-02
draft = false
slug = "understanding-cost"

[taxonomies]
categories = ["meta"]
tags = ["education"]

[extra]
comments = false 
+++

Typical advice would tell you to specialize, which makes sense. But what if doing one thing and one thing only is not an option for you? What if variety is not simply a luxury, but a necessity to maintain motivation and interest? 

My approach is that of variety within a carefully selected set of interests. One of the major advantages of specializing is time efficiency. After all, we only have so much time in our lives, so many of us would naturally prefer to get really good at one thing, rather than simply okay at a couple of things.

The issue I take with that perspective is that it seems to communicate the following: Expertise is the most valuable. Accomplishment is the measure of a person's success in life. Examination and analysis must serve towards reaching these goals, and serve no other purpose.

In many ways, this is the mantra of the go-getter. Do stuff, then do some more stuff. Don't stop and think too much, just get started and figure it out as you go. A few key advantages of this school of thought: No time is wasted on analysis beyond what is immediately relevant. There is always something being produced, and progress can be measured directly by checking the completion status via milestones or performance metrics.

In other words, this logic is great at getting things done. But it's awful at helping us understand what we are doing. We ask ourselves *when*, and *what* in great detail, but we rarely consider *how* or *why* with the same level of careful consideration, because they are not imperative in getting the product shipped. Why? "To make bank." How? "Does not matter, as long as it works."

So why is this a problem? In a business context, companies make money by shipping product. Anything taking time away from this is unnecessary cost. A waste of time, right? That is, until something breaks and needs fixing. Suddenly, "how" we built it becomes immediately relevant to how we can approach fixing the issue. "Why" we built it informs what could be considered a valid solution. 

If you've ever attended a stressful debugging meeting after a launch gone south, you have some idea of what I'm trying to say. Suddenly, rushing a product out the door that is full of barely understood external libraries and tooling becomes a nightmare. We didn't take the time to dive into the documentation before implementing anything, of course. We skimmed the Getting Started section, copy/pasted some sample code, and hacked it to pieces until it "works". We don't know how it works, but hey, ship it. We made great time on implementing this, so we even get a congratulatory pat on the back from management.

Time is money, after all. If we spend it on properly understanding what we're building before we ship it, odds are we will have nothing to show us that it was worth it. Because, you know, it just works without issue. So did we even need to spend that extra day testing and studying? Imagine **the savings** if we hadn't!

Imagine **the costs** when we don't, though. Now, granted, this supposes that something does go wrong, which often isn't the case. Or when it does, it's often difficult to trace back to single decision, so it gets filed under "shit happens". But even if nothing went wrong at all, that still doesn't mean it was a **good** idea. Shocking, I know! For the sake of argument, let's say some of our corner-cutting did land us in hot water. Something broke in production, everybody's hair is on fire, and it's time for action. What is it going to cost us?

Firstly, the most obvious: time/money. The development team has to divert time from building new features into hotfixing the previous feature. Not only did we invest the initial cost of development, we get to spend even more on doing what we intended in the first place. But hey, shit happens, right? Even with the most rigourous testing and technical analysis, unforeseen problems will occasionally present themselves. We took a risk in cutting time in order to make more profit, and it backfired. Such is the nature of taking risks, no big deal, it's only money. We can always make some more.

Secondly, the most valuable: trust. Our users trust us to ship a functioning product, that will improve their lives in some limited capacity. When we ship a broken mess, we cut into our own profits, sure. But more importantly, we wasted the time of the people that were willing to invest in us and our product. We may even have caused them to lose or impede progress on work they were doing in their own professional lives. Imagine buying something that you think will make your work easier and save you time, only for it to introduce new problems and slow you down instead. And you paid money for the privilege? I'd be irate!

Thirdly, the most dangerous: morale. Software engineers are, by and large, motivated and passionate professionals who take pride in their work. We stake our reputation on the software we produce, meaning we want to make sure we did a good job to avoid embarrassing ourselves. When a cost-saving measure ends up making us look incompetent, we would justifiably feel a little upset about that. Even more so when we spoke up about the lack of quality assurance, only to be ignored or overruled in favor of meeting some arbitrary deadline instead.

Look, I get it. We made a promise to stakeholders, and it's important that we deliver. But in my experience, if we release on time and our users are greeted with an error message where a highly anticipated feature should be, no amount of timeliness will save our precious image. "Yeah it doesn't work, but it's in production as scheduled!" I'm sure that'll go over great.

To my fellow software engineers: Do not forget our professional responsibility, to deliver a *working* product. Everyone, including management, expect us to deliver something that works. So if there's any doubts about that, we must speak up. That's not being difficult, that's literally doing your job! And to any managers reading this, no hard feelings? Managing time, budget, and productivity is area, and we understand that you're trying to maximize profit in a variety of ways, because that is literally your job.
