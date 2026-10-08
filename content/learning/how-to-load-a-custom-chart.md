---
title: "How to load a custom chart"
topic: 4. Customize
updated: 2022-01-28T00:00:00
cover: /uploads/learning/how-to-load-a-custom-chart-cover.gif
order: 9
---

Custom charts are snippets of code that can be dynamically loaded by the RAWGraphs app, enhancing its capabilities.

You can get custom charts or by browsing our gallery or directly from creators.

There are four main ways for loading custom charts, which we will outline in the following section.

### **1\. Load the chart code from file**

As an example, we will use the “paired barchart” custom chart. You can find it at this GitHub page.

Visit the [chart releases page on GitHub](https://github.com/rawgraphs/rawgraphs-paired-barchart/releases)

Download the **pairedbarchart.umd.js** file from the **assets** section.

In [RAWGraphs app](https://app.rawgraphs.io/), load a dataset.

When you have to select a visual model, click on the button **load a chart**.

In the modal window that will appear, select **load from file** tab

Drag and drop the **pairedbarchart.umd.js** file

Now you can use the custom chart.

### **2\. Load the chart code from URL**

As an example, we will use the “paired barchart” custom chart.

In [RAWGraphs app](https://app.rawgraphs.io/), load a dataset.

When you have to select a visual model, click on the button **load a chart**.

In the modal window that will appear, select **load from URL** tab

Paste the following url pointing to the latest version of the paired barchart chart: https://github.com/rawgraphs/rawgraphs-paired-barchart/releases/download/latest/pairedbarchart.umd.js

Now you can use the custom chart

### **3\. Load the chart code from NPM**

If the chart has been published on NPM (Node Package Manager, a popular platform for sharing open source code) you can load the latest version on the fly.

In this example we will use the "calendar heatmap" chart, [published on NPM](https://www.npmjs.com/package/@rawgraphs/rawgraphs-calendar-heatmap).

In [RAWGraphs app](https://app.rawgraphs.io/), load a dataset.

When you have to select a visual model, click on the button **load a chart**.

In the modal window that will appear, select **load from NPM** tab

Paste the following string pointing to the latest version of the calendar heatmap: **yarn add @rawgraphs/rawgraphs-calendar-heatmap**

Now you can use the custom chart

### **4\. Load the chart from a RAWGraphs project**

Projects are files exported from the interface that contains both the data, the chosen visual options, and the chart code.

You can save and reuse them later or share them with other people. If a custom chart is used in a project, when anyone else will open it on their computer the custom chart will be automatically added to their gallery.

See, for example, this file containing a RAWGraphs project with the German population Pyramid.

In [RAWGraphs app](https://app.rawgraphs.io/), select **open your project**

The chart will be loaded displaying the related dataset.

Now you can use the custom chart also in new projects.
