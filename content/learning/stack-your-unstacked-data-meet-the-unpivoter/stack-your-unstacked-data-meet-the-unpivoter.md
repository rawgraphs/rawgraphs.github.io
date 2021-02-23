---
title: Stack your unstacked data (meet the unpivoter) (RAWGraphs 1.0)
date: 2017-03-29T11:07:52.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ""
secondary_title:
  - ""
discover_more_description:
  - >-
    Wide and narrow (sometimes un-stacked and stacked) are terms used to
    describe two different presentations for tabular data. RAWGraphs requires in
    most of the cases data in the narrow format: in this guide you’ll learn how
    to use your data in RAWGraphs even it’s in the wide format.
background_image:
  - "0"
page_background_image:
  - ""
discover_more_left:
  - "null"
discover_more_right:
  - "null"
reading_time:
  - "2"
files:
  - title: RAW-GDP-Growth-filtered
    href: ./RAW-GDP-Growth-filtered.zip
featured_video: ""
image: ./stakc_unstack-1.png
categories:
  - Learning
  - Data
tags:
  - unpivoter
path: /learning/stack-your-unstacked-data-meet-the-unpivoter/
---

<span style="font-weight: 400;">Wide, or unstacked data is presented with each different data variable in a separate column. Narrow, or stacked data is presented with one column containing all the values and another column listing the context of the value.</span>

<span style="font-weight: 400;">Here are two example of the same data in the two formats.</span>

**Wide (or unstacked) table**:

<table>
<tbody>
<tr>
<th>Person</th>
<th>Age</th>
<th>Weight</th>
</tr>
<tr>
<td>Bob</td>
<td>32</td>
<td>128</td>
</tr>
<tr>
<td>Alice</td>
<td>24</td>
<td>86</td>
</tr>
<tr>
<td>Steve</td>
<td>64</td>
<td>95</td>
</tr>
</tbody>
</table>

The same data in a **narrow (stacked) table**:

<table>
<tbody>
<tr>
<td><b>Person</b></td>
<td><b>Variable</b></td>
<td><b>Value</b></td>
</tr>
<tr>
<td><span style="font-weight: 400;">Bob</span></td>
<td><span style="font-weight: 400;">Age</span></td>
<td><span style="font-weight: 400;">32</span></td>
</tr>
<tr>
<td><span style="font-weight: 400;">Bob</span></td>
<td><span style="font-weight: 400;">Weight</span></td>
<td><span style="font-weight: 400;">128</span></td>
</tr>
<tr>
<td><span style="font-weight: 400;">Alice</span></td>
<td><span style="font-weight: 400;">Age</span></td>
<td><span style="font-weight: 400;">24</span></td>
</tr>
<tr>
<td><span style="font-weight: 400;">Alice</span></td>
<td><span style="font-weight: 400;">Weight</span></td>
<td><span style="font-weight: 400;">86</span></td>
</tr>
<tr>
<td><span style="font-weight: 400;">Steve</span></td>
<td><span style="font-weight: 400;">Age</span></td>
<td><span style="font-weight: 400;">64</span></td>
</tr>
<tr>
<td><span style="font-weight: 400;">Steve</span></td>
<td><span style="font-weight: 400;">Weight</span></td>
<td><span style="font-weight: 400;">95</span></td>
</tr>
</tbody>
</table>

<span style="font-weight: 400;">RAWGraphs requires in most of the cases data in the narrow format.</span>

<span style="font-weight: 400;">Transforming data from the wide to the narrow format (operation sometimes defined unpivoting) is quite difficult with the commonly available tools.</span>

<span style="font-weight: 400;">This is the reason why we added the “Stack/unstack” function, AKA “the Unpivoter”.</span>

### 01. load your data

<span style="font-weight: 400;">In this tutorial we will visualize the </span>[<span style="font-weight: 400;">GDP Growth as recorded by the World Bank</span>](http://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG)<span style="font-weight: 400;">.</span>

We prepared a simplified version of the dataset for this tutorial, you can see it here:

<iframe src="https://docs.google.com/spreadsheets/d/1IycXVpuiqQQtYL1pwTJwR_nBQYqxzSYOllO0WWlbAVA/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false&amp;amp" width="100%" height="300"></iframe>

You can also download it through the link on the left. Once your data is loaded, you should see this:

![](./01-unstacked-data.png)

### 02. Unstack your data

<span style="font-weight: 400;">In the bottom-right corner of the data field, you should see the sentence “Your data seems unstacked. Click here to stack it”, as in the image below. </span><span style="font-weight: 400;">Click on it.</span>

![](./stakc_unstack.png)

<span style="font-weight: 400;">A new menu (select a dimension to stack on) will appear. Open it, and select “Country Name”.</span>

<span style="font-weight: 400;">Now, the data is stacked, as in the image below:</span>

![](./03-stacked-data.png)

<span style="font-weight: 400;">in the first column you have the names of the countries, in the second one you have the years, and in the third ones the values.</span>

With this operation you defined the main dimension (in this case, <span class="data-dimension" style="background-color: #2dd8b1;">Country</span> Name), which became the first column of the new dataset. In the second column, named <span class="data-dimension" style="background-color: #2dd8b1;">column</span>, are listed all the remaining headers of the previous table. In the third column, named <span class="data-dimension" style="background-color: #2dd8b1;">value</span>, are listed the values of the previous table.

### 03. Visualize your data

<span style="font-weight: 400;">You can now use this data in RAWGraph, creating for example an Horizon Graph, a Streamgraph, or an Area graph.</span>
