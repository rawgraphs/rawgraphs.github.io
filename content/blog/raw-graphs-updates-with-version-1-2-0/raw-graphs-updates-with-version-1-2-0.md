---
title: RAWGraphs updates with version 1.2.0
date: 2017-01-17T06:30:34.000Z
author: RAW Graphs Team
layout: post
discover_more_left:
  - "43"
discover_more_right:
  - "null"
subtitle:
  - ""
secondary_title:
  - ""
discover_more_description:
  - ""
background_image:
  - "0"
page_background_image:
  - ""
featured_video: ""
image: ./featured-images-post-2.png
categories:
  - New Release
tags:
  - changelog
  - license
  - visual models
path: /new-release/raw-graphs-updates-with-version-1-2-0/
---

Today we are releasing a <a href="https://github.com/densitydesign/raw/releases/tag/v1.2.0" target="_blank">new version of RAWGraphs (1.2.0)</a> that can be used on our brand new website: <a href="http://app.rawgraphs.io/" target="_blank">app.rawgraphs.io</a>.

&nbsp;

It&#8217;s been a while from the last official release. While the project seemed quiescent in the last year, in our daily routine we were continuously improving the software, but without having time to properly pack it as a new release.

Now, thanks to the [sponsorship provided by ContactLab](https://rawgraphs.io/2017/01/17/contactlab-to-sponsor-raw-graphs/) we are able to give new life to the project. With today&#8217;s release we&#8217;re adding long-time requested features and bugfixes: below you&#8217;ll find the full changelog.

### Data import

- Import data from a file by drag and drop. Supported files: plain texts (CSV, TSV) and Microsoft Excel files (XLSX), JSON files.
- Load data from URL (**VERY experimental**, only for websites with cross-origin resource sharing enabled, <a href="http://enable-cors.org/" target="_blank">see here</a>)
- Parse JSON files (both by copy and paste or by drag and drop), load arrays of objects as tables.
- Stack/unstack your data! If you have the dataset as a matrix, you can easily convert it in a dataset within the RAW interface. <a href="https://en.wikipedia.org/wiki/Wide_and_narrow_data" target="_blank">See here</a> for more information about stacked/unstacked (or wide/narrow) data.

![](./gif-post2.gif)

### Data samples

- More data samples, one example per graph type.

### Visual models

- Added chart categories: charts are now grouped by type (e.g. hierarchies, dispersions, time series…)
- Added new visual models: Sunburst, Bump Charts, Horizon Charts, Box Plot, Pie Charts, Bar Charts.
- Improved existing models, adding new options and addressing suggestions provided by users.

![](./gif-post.gif)

### Visualization

- When a field is mandatory (e.g. hierarchy in treemap), instead of displaying the visualization, the list of the required fields will appear.

### License

- We changed the license to Apache 2.0. The project remains open-source, and the new licence allows you to reuse the code with any other kind of license.

&nbsp;

Lots of work still has to be done: libraries have changed, the new version of d3.js is out, and so on. Many branches and pull requests have been created in the last year, and we want to give value to all the work done.

&nbsp;

In the next months we will improve it upgrading the underlying technology to the latest standard, and addressing issues identified by users. Meanwhile we will produce tutorials and guides for its hack and usage.

&nbsp;

The software is still in beta, so if you find bugs please report them on the GitHub page.

&nbsp;

If you want to share your work made using RAW, <a href="https://twitter.com/rawgraphs" target="_blank">mention us</a> or use the hashtag **#rawgraphs!**

&nbsp;
