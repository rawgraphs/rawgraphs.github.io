---
title: 'Introducing a new feature in RAWGraphs: On-the-Fly Custom Charts'
date: 2023-07-07T00:00:00
cover: /uploads/news/2023-07-07-introducing-a-new-feature-in-rgraphs-on-the-fly-custom-chart-cover.gif
---

We just released a new update of RAWGraphs  to our sponsors and it will soon be available to everyone. It's an important update and something we have worked on for a while.

With version v2.0.1, it has become possible to **use custom charts** in RAWGraphs!

### What are custom chart?

Custom charts are pieces of code that can be loaded on the fly by the RAWGraphs app, extending its possibilities.

Let's consider an example. In RAWGraphs, you can create bar charts, grouped bar charts, and even stacked bar charts. However, population pyramids were not available. Imagine if someone decided to create such a chart. Wouldn't it be nice to be able to reuse it without having to code it again?

Until now, using charts created by someone else was possible but a little bit tricky. You had to clone the source code, modify it, build it, and host it on your own server.

With the new version, we have defined a grammar that can be used by third parties to code charts and load and use them directly within the RAWGraphs interface.

### How can I load a custom chart?

First, the chart must be coded according to the standards we have defined. We encourage creators to publish charts on Git platforms like GitHub and share them on our new custom chart gallery, although they can publish them wherever they prefer.

What you need is a file with the extension ".umd.js".

Let's provide an example. You can find a paired barchart, also known as population pyramids, [at this link](https://github.com/rawgraphs/rawgraphs-paired-barchart). the original code was developed by David Egger (@blindguardian50), Stefan Schnutt (@steve1711), Elias Doppelreiter (@TheAlmightySpaceWarrior), and Ludwig Reinhardt (@wizardry8), under the supervision of Keith Andrews (@kandrews99).

- Open the [chart repository webpage on GitHub](https://github.com/rawgraphs/rawgraphs-paired-barchart/releases/tag/v1.0.1).
- In the “assets” section of the latest release, select and download on “pairedbarchart.umd.js
- Now, open [rawgraphs.io](https://app.rawgraphs.io/).
- First, you need to load some data. [Here, you can find the German population in 2019](https://docs.google.com/spreadsheets/d/1I1zqqRXvRn3Qs4hZvBwiQjmtXo4KCtdAORcDhYp_fYA/edit?usp=sharing). Copy and paste it into RAWGraphs.
- Scroll down to the section "2. Choose a chart".
- At the end of the list of charts, you will find "Load your chart". Click on it.
- Drag and drop the “pairedbarchart.umd.js” file you downloaded in the second step.

![](/uploads/news/2023-07-07-introducing-a-new-feature-in-rgraphs-on-the-fly-custom-chart-1.gif)

Well done! Now you can use it!

### How can I share a custom chart?

Sharing the link to the source code and following the above instructions is quite simple, but we believe there is a more convenient way.

When you create a project using RAWGraphs, in the final section called "5. Export," you have the option to choose how to export it: as a vector image (SVG), raster image (PNG), or as a project file.

![](/uploads/news/2023-07-07-introducing-a-new-feature-in-rgraphs-on-the-fly-custom-chart-2.gif)

The project file includes the visualized data, the chart code, and the visual options, making it a comprehensive package.

By sharing this file, you can easily provide the custom chart to others.

Here's an example: the visualization of the German population using the paired barchart chart.

### How can I create a custom chart?

We're thrilled that you want to contribute!

The easiest way to get started is by using the [code template available on GitHub](https://github.com/rawgraphs/custom-rawcharts-template). This template includes a guide on how to write custom chart code and the best practices we have identified.

Bonus: We are also planning to organize a workshop for individuals interested in adding a new chart to RAWGraphs. The workshop will be free, but there will be limited seats available. If you're interested, make sure to stay tuned for further updates!
