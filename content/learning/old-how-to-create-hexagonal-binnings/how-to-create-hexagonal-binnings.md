---
title: How to create hexagonal binnings (RAWGraphs 1.0)
date: 2017-06-22T09:51:35.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ""
secondary_title:
  - ""
discover_more_description:
  - >-
    With this guide you’ll learn how to use hexagonal binnings, a great
    alternative technique for visualizing distributions when working with large
    data sets.
background_image:
  - "0"
page_background_image:
  - ""
featured_video: ""
discover_more_left:
  - "null"
discover_more_right:
  - "null"
reading_time:
  - "3"
files:
  - title: hexagonalbinning sample
    href: ./hexagonalbinning_sample.zip
image: ./hexbins-cover.png
categories:
  - Learning
  - Rawgraphs 1.0
tags:
  - binning
  - dispersion
path: /learning/old-how-to-create-hexagonal-binnings/
---

Hexbins layout is a variation of the scatterplot, grouping points in hexagonal areas. The color of each hexagon represents the number of points in it. We will use it to see how cars distribute according to their power and their cosumption.

**GOAL OF THE TUTORIAL**: see where most of the cars contained in the dataset aggregate disposing them by Horsepower and Miles per Gallon.

### 01. Load your data

The first step is to copy and paste your data into RAWGraphs. The dataset must contain at least two columns, one for the X Axis (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Power(hp)</span>) and one for the Y Axis (<span class="data-dimension" style="background-color: #2dd8b1;">Economy (mpg)</span>).

You can copy and paste the data from the table below:

<iframe src="https://docs.google.com/spreadsheets/d/1sIdX3ooitM4v552xJhbug8tnlFlcGdB4PZhSb9m9kc0/pubhtml?widget=true&amp;headers=false" width="100%" height="300px"></iframe>

<span style="font-weight: 400;">Otherwise, you can load the data from using the “Try our samples” button then choosing “Cars &#8211; Multivariate”.</span>

<span style="font-weight: 400;">In few second you should see the green bar saying “406 records in your data have been successfully parsed!”.</span>

### 02. Choose the hexbin layout

<span style="font-weight: 400;">After pasting your data, scroll down and select the “hexbin” visual model.</span>

![](./hexbin-selection.jpg)

### 03. Map your dimensions

<span style="font-weight: 400;">The hexbin layout has two visual variables. </span>

<table>
<tbody>
<tr>
<td><strong>VARIABLE</strong></td>
<td><strong>TYPE</strong></td>
<td><strong>REQUIRED</strong></td>
<td><strong>MULTIPLE</strong></td>
<td><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td><strong>X Axis</strong></td>
<td>Number, date</td>
<td>Yes</td>
<td>No</td>
<td>The horizontal position of the circles.</td>
</tr>
<tr>
<td><strong>Y Axis</strong></td>
<td><span style="font-weight: 400;">Number, date</span></td>
<td><span style="font-weight: 400;">Yes</span></td>
<td><span style="font-weight: 400;">No</span></td>
<td><span style="font-weight: 400;">The vertical position of the circles.</span></td>
</tr>
</tbody>
</table>

Drag and drop the dimensions as following:

- <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Power (hp)</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">X Axis</span>;</span>
- <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Economy (mpg)</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Y Axis</span>;</span>

![](./hexbin-mapping.png)

<span style="font-weight: 400;">In this way we created a dot for each car in the dataset, disposing it on the cartesian plane according according to its Power (hp) and Economy (mpg).</span>

### 04. Options

To reach the final results we can customize the visualization with some parameters you can find next to the visualization.  
For the hebin the options available are the following:

<span style="font-weight: 400;">For the final results we have set the options as following:</span>

<table>
<tbody>
<tr>
<td><strong>OPTION</strong></td>
<td><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td><strong>Width</strong></td>
<td><span style="font-weight: 400;">Artboard width in pixels</span></td>
</tr>
<tr>
<td><strong>Height</strong></td>
<td><span style="font-weight: 400;">Artboard height in pixels</span></td>
</tr>
<tr>
<td><strong>Radius</strong></td>
<td><span style="font-weight: 400;">The radius of the circumscribed circle to the hexagon.</span></td>
</tr>
<tr>
<td><strong>Set origin at (0,0)</strong></td>
<td><span style="font-weight: 400;">If selected, the scatterplot origin will be set at the zero value for both the axes. If not selected, origin will be set to the minimum value for the two axes.</span></td>
</tr>
<tr>
<td><strong>color scale</strong></td>
<td><span style="font-weight: 400;">List of uniques values in the dimension mapped as “color”. If set to ordinal, you can set a color for each value. If set to linear, the app will try to find the minimum and maximum value contained in the dimension, and then creating a gradient among those two values.</span></td>
</tr>
</tbody>
</table>

<span style="font-weight: 400;">For the final results we have set the options as following:</span>

- <span style="font-weight: 400;">Width to 940 pixels;</span>
- <span style="font-weight: 400;">Height to 483 pixels;</span>
- <span style="font-weight: 400;">Max Radius to 20 pixels;</span>
- Set color scale to linear and set the minimun value to #e0ecf4 and the maximum to #8856a7

<span style="font-weight: 400;">Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.</span>

![](./hexbin-options.png)
