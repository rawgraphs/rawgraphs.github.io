---
title: 'RAWGraphs updates with version 1.2.0'
date: 2017-01-17T00:00:00
cover: /uploads/news/2017-01-17-rawgraphs-updates-with-version-1-2-0-cover.avif
---

Today we are releasing a [new version of RAWGraphs (1.2.0)](https://github.com/densitydesign/raw/releases/tag/v1.2.0) that can be used on our brand new website: [app.rawgraphs.io](http://app.rawgraphs.io/).

It’s been a while from the last official release. While the project seemed quiescent in the last year, in our daily routine we were continuously improving the software, but without having time to properly pack it as a new release.

Now, thanks to the [sponsorship provided by ContactLab](https://rawgraphs.io/2017/01/17/contactlab-to-sponsor-raw-graphs/) we are able to give new life to the project. With today’s release we’re adding long-time requested features and bugfixes: below you’ll find the full changelog.

### Data import

- Import data from a file by drag and drop. Supported files: plain texts (CSV, TSV) and Microsoft Excel files (XLSX), JSON files.
- Load data from URL (**VERY experimental**, only for websites with cross-origin resource sharing enabled, [see here](http://enable-cors.org/))
- Parse JSON files (both by copy and paste or by drag and drop), load arrays of objects as tables.
- Stack/unstack your data! If you have the dataset as a matrix, you can easily convert it in a dataset within the RAW interface. [See here](https://en.wikipedia.org/wiki/Wide_and_narrow_data) for more information about stacked/unstacked (or wide/narrow) data.

![](/uploads/news/2017-01-17-rawgraphs-updates-with-version-1-2-0-1.gif)

### Data samples

- More data samples, one example per graph type.

### Visual models

- Added chart categories: charts are now grouped by type (e.g. hierarchies, dispersions, time series…)
- Added new visual models: Sunburst, Bump Charts, Horizon Charts, Box Plot, Pie Charts, Bar Charts.
- Improved existing models, adding new options and addressing suggestions provided by users.

![](/uploads/news/2017-01-17-rawgraphs-updates-with-version-1-2-0-2.gif)

### Visualization

- When a field is mandatory (e.g. hierarchy in treemap), instead of displaying the visualization, the list of the required fields will appear.

### License

- We changed the license to Apache 2.0. The project remains open-source, and the new licence allows you to reuse the code with any other kind of license.

Lots of work still has to be done: libraries have changed, the new version of d3.js is out, and so on. Many branches and pull requests have been created in the last year, and we want to give value to all the work done.

In the next months we will improve it upgrading the underlying technology to the latest standard, and addressing issues identified by users. Meanwhile we will produce tutorials and guides for its hack and usage.

The software is still in beta, so if you find bugs please report them on the GitHub page.

If you want to share your work made using RAW, [mention us](https://twitter.com/rawgraphs) or use the hashtag **#rawgraphs!**
