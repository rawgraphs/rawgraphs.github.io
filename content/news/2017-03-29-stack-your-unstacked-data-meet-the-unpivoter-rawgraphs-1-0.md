---
title: 'Stack your unstacked data (meet the unpivoter) (RAWGraphs 1.0)'
date: 2017-03-29T00:00:00
cover: /uploads/news/2017-03-29-stack-your-unstacked-data-meet-the-unpivoter-rawgraphs-1-0-cover.avif
---

## Wide and narrow (sometimes un-stacked and stacked) are terms used to describe two different presentations for tabular data. RAWGraphs requires in most of the cases data in the narrow format: in this guide you’ll learn how to use your data in RAWGraphs even it’s in the wide format.

Wide, or unstacked data is presented with each different data variable in a separate column. Narrow, or stacked data is presented with one column containing all the values and another column listing the context of the value.

Here are two example of the same data in the two formats.

![](/uploads/news/2017-03-29-stack-your-unstacked-data-meet-the-unpivoter-rawgraphs-1-0-1.png)

RAWGraphs requires in most of the cases data in the narrow format.

Transforming data from the wide to the narrow format (operation sometimes defined unpivoting) is quite difficult with the commonly available tools.

This is the reason why we added the “Stack/unstack” function, AKA “the Unpivoter”.

### 01\. load your data

In this tutorial we will visualize the [GDP Growth as recorded by the World Bank](http://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG).

We prepared a simplified version of the dataset for this tutorial, you can see it here:

![](/uploads/news/2017-03-29-stack-your-unstacked-data-meet-the-unpivoter-rawgraphs-1-0-2.png)

You can also download it through the link on the left. Once your data is loaded, you should see this:

![](/uploads/news/2017-03-29-stack-your-unstacked-data-meet-the-unpivoter-rawgraphs-1-0-3.png)

### 02\. Unstack your data

In the bottom-right corner of the data field, you should see the sentence “Your data seems unstacked. Click here to stack it”, as in the image below. Click on it.

![](/uploads/news/2017-03-29-stack-your-unstacked-data-meet-the-unpivoter-rawgraphs-1-0-4.png)

A new menu (select a dimension to stack on) will appear. Open it, and select “Country Name”.

Now, the data is stacked, as in the image below:

![](/uploads/news/2017-03-29-stack-your-unstacked-data-meet-the-unpivoter-rawgraphs-1-0-5.png)

in the first column you have the names of the countries, in the second one you have the years, and in the third ones the values.

With this operation you defined the main dimension (in this case, Country Name), which became the first column of the new dataset. In the second column, named column, are listed all the remaining headers of the previous table. In the third column, named value, are listed the values of the previous table.

### 03\. Visualize your data

You can now use this data in RAWGraph, creating for example an Horizon Graph, a Streamgraph, or an Area graph.

### How to cite this guide

"Stack your unstacked data (meet the unpivoter) (RAWGraphs 1.0)", by RAWGraphs Team. Licensed under CC BY-NC-SA 4.0. Accessed: February 28, 2022, from https://rawgraphs.io/learning/stack-your-unstacked-data-meet-the-unpivoter/
