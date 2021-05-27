---
title: How to make multiple pie charts (RAWGraphs 1.0)
date: 2017-03-31T11:00:31.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ""
secondary_title:
  - ""
discover_more_description:
  - >-
    In this guide you’ll learn how to create multiple pie charts with raw. As
    example, we will create a pie chart for each country visualizing how the GDP
    is composed.
background_image:
  - "0"
page_background_image:
  - ""
discover_more_left:
  - "null"
discover_more_right:
  - "null"
reading_time:
  - "4"
files:
  - title: Countries-GDP
    href: ./Countries-GDP.csv.zip
featured_video: ""
image: ./piecharts-cover.png
categories:
  - Learning
  - Rawgraphs 1.0
tags:
  - pie charts
path: /learning/old-how-to-make-multiple-pie-charts/
---

<span style="font-weight: 400;">RAWGraphs is meant to quickly produce visualizations that are difficult to produce with other softwares. Pie charts are an available option in many softwares: what we’ve added is the ability to quickly create multiple pie charts starting from the same dataset.</span>

**GOAL OF THE TUTORIAL**: with this tutorial we want to see the overall GDP for each country in the dataset and visualize its composition (shares of industry, agriculture and service). To achieve this goal, we will create a pie chart for each country composed by three arcs, one for each sector.

### 01. Load your data

The first step is to load your data into RAWGraphs.

<span style="font-weight: 400;">Each row in the dataset will generate a pie chart. Each column in the dataset containing number will generate one of the arcs (in our case <span class="data-dimension" style="background-color: #2dd8b1;">Agricolture</span>, <span class="data-dimension" style="background-color: #2dd8b1;">Industry</span> and <span class="data-dimension" style="background-color: #2dd8b1;">Services</span>). Optionally an additional column can be used to define pies labels (in our case <span class="data-dimension" style="background-color: #2dd8b1;">Country</span>).</span>

Here you can see the dataset we are going to use:

<iframe src="https://docs.google.com/spreadsheets/d/1OXEWd1sG_QhFbWRE_VbKlLfJTI0Hs4mdzo-qZexqJD0/pubhtml?widget=true&amp;headers=false" width="100%" height="300"></iframe>

You can also load from the sample dataset directly in RAWGraphs: simply click &#8216;try our samples&#8217; > &#8216;Countries GDP&#8217;.

**Note:** The described dataset structure is often referred as ‘unstacked’ or ‘wide’. If you have data as narrow/stacked form, you can use the “stack/unstack” button: see the [tutorial](/learning/stack-your-unstacked-data-meet-the-unpivoter) here.

### 02. Choose the pie chart layout

After pasting your data, scroll down and select the “pie chart” visual model.

![](./piechart-selection.png)

### 03. Map your dimensions

The pie chart layout has two dimensions:

<table>
<tbody>
<tr>
<td><b>FIELDS</b></td>
<td><b>TYPE</b></td>
<td><b>REQUIRED?</b></td>
<td><b>MULTIPLE?</b></td>
<td><b>DESCRIPTION</b></td>
</tr>
<tr>
<td><b>Label</b></td>
<td><span style="font-weight: 400;">String, numbers</span></td>
<td></td>
<td></td>
<td><span style="font-weight: 400;">The values in the dimension will be used as labels.</span></td>
</tr>
<tr>
<td><b>Arcs</b></td>
<td><span style="font-weight: 400;">numbers</span></td>
<td>&nbsp;[fa class=”fa-asterisk”]</td>
<td>[fa class=”fa-tags”]</td>
<td><span style="font-weight: 400;">The field accept multiple dimensions. Each dimension added to this field will generate an arc for each pie chart.</span></td>
</tr>
</tbody>
</table>

It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the pie chart layout.

Drag and drop the dimensions as following:

- Drag <span class="data-dimension" style="background-color: #2dd8b1;">Agriculture</span> into <span class="layout-dimension" style="background-color: #e6e6e6;">Arcs</span>;
- Drag <span class="data-dimension" style="background-color: #2dd8b1;">Industry</span><span style="font-weight: 400;"> into <span class="layout-dimension" style="background-color: #e6e6e6;">Arcs</span>, below the previous one;</span>
- Drag <span class="data-dimension" style="background-color: #2dd8b1;">Services</span><span style="font-weight: 400;"> into <span class="layout-dimension" style="background-color: #e6e6e6;">Arcs</span>, below the previous one;</span>
- Drag <span class="data-dimension" style="background-color: #2dd8b1;">Country</span> into <span class="layout-dimension" style="background-color: #e6e6e6;">Label</span>.

![](./piecharts-mapped.png)

<span style="font-weight: 400;">In this way we created a pie chart for each country (each row in the dataset). For each one, we defined three arcs (dimension dragged in the </span><span class="layout-dimension" style="background-color: #e6e6e6;">Arcs</span> <span style="font-weight: 400;">field). We then added a </span><span class="layout-dimension" style="background-color: #e6e6e6;">Label</span> <span style="font-weight: 400;">to each chart showing the country name.</span>

### 04. Refine and export

To reach the final results we can customize the visualization with some parameters you can find next to the visualization.  
For the pie chart the options available are the following:

<table>
<tbody>
<tr>
<td><span style="font-weight: 400;">OPTION</span></td>
<td><span style="font-weight: 400;">DESCRIPTION</span></td>
</tr>
<tr>
<td><b>Width</b></td>
<td><span style="font-weight: 400;">width in pixels.</span></td>
</tr>
<tr>
<td><b>Columns</b></td>
<td><span style="font-weight: 400;">pie chart will be disposed on a grid. This option allows to define how many pie charts must be drawn for each line. The number of lines is calculated according to this option.</span></td>
</tr>
<tr>
<td><b>Padding</b></td>
<td><span style="font-weight: 400;">the vertical and horizontal padding between pie charts, in pixels.</span></td>
</tr>
<tr>
<td><b>Donut chart</b></td>
<td><span style="font-weight: 400;">if selected, pie charts will be drawn ad donut chart. The size is defined by the </span><i><span style="font-weight: 400;">Thickness</span></i><span style="font-weight: 400;"> option (see below)</span></td>
</tr>
<tr>
<td><b>Thickness</b></td>
<td><span style="font-weight: 400;">if </span><i><span style="font-weight: 400;">Donut chart</span></i><span style="font-weight: 400;"> option is selects, this value will be used to defines its thickness.</span></td>
</tr>
<tr>
<td><b>Show Values</b></td>
<td><span style="font-weight: 400;">if selected, the absolute value of each value will be displayed with a label.</span></td>
</tr>
<tr>
<td><b>Sort charts by</b></td>
<td><span style="font-weight: 400;">order of the pie chart. Can be ‘size’ (from the biggest to the smallest), ‘name’ (alphabetical order).</span></td>
</tr>
<tr>
<td><b>Sort arcs by</b></td>
<td><span style="font-weight: 400;">order of the arcs inside each pie chart. Can be ‘automatic’ (same order in each pie chart), ‘size’ (from biggest to smallest in each pie chart) or ‘name’ (alphabetical order).</span></td>
</tr>
<tr>
<td><b>Color scale</b></td>
<td><span style="font-weight: 400;">list of dimensions headers dragged as ‘Arcs’. If set to ordinal, you can set a color for each value. If set to linear, the app will try to find the minimum and maximum value contained in the dimension, and then creating a gradient among those two values.</span></td>
</tr>
</tbody>
</table>

For the final results we have set the options as following:

- Set “columns” to 8.
- Select “Donut chart” option.
- Change the colors according to [this scale](https://coolors.co/1c7989-0496ff-ffbc42-d81159-8f2d56). Copy and paste the hex codes as following: for “Agricolture” #FFBC42. For “industry” #D81159. For “Services”: #0496FF

Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.

![](./piecharts-options.png)
