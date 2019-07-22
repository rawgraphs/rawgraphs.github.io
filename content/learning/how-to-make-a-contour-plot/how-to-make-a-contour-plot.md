---
title: How to make a contour plot
date: 2018-06-08T13:18:55.000Z
author: RAW Graphs Team
layout: post
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
discover_more_left:
  - "null"
discover_more_right:
  - "null"
reading_time:
  - "3"
resources:
  - "1060"
image: ./contourplot-cover.png
categories:
  - Learning
  - Charts
tags:
  - dispersion
path: /learning/how-to-make-a-contour-plot/
---

<span style="font-weight: 400;">A contour plot shows the estimated density of point clouds, which is especially useful to avoid overplotting in large datasets.</span>

**GOAL OF THE TUTORIAL**: c<span style="font-weight: 400;">omparing wheater condition (mean temperature) in Paris during the World War II, from 1944 to 1945.</span>

### 01. Load your data

<span style="font-weight: 400;">The first step is to copy and paste your data into RAWGraphs.</span>

<span style="font-weight: 400;">The dataset must contain at least two columns, one for the X Axis (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Date</span>) and one for the Y Axis (<span class="data-dimension" style="background-color: #2dd8b1;">MeanTemp</span>). </span>

Here you can see the dataset we are going to use:

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSY8S4qRSiZRnUuSNplZjzScVidsv9quD-ToXMRZVO_PImz-wmVuCvrEkwoAvt0osmTrSdNi0BJEByJ/pubhtml?gid=979813252&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="300"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe>

You can also download the dataset through the link on the left of this post.

<span style="font-weight: 400;">In few second you should see the green bar saying “429 records in your data have been successfully parsed!”</span>

### 02. Choose the contour plot layout

After pasting your data, scroll down and select the “contour plot” visual model.

![](./contour-e1527504184759.png)

### **03. Map your dimensions**

<span style="font-weight: 400;">The contour layout has two visual variables. </span>

<table style="height: 73px;" width="600">
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
<td>*</td>
<td></td>
<td>The horizontal position of the points.</td>
</tr>
<tr>
<td><strong>Y Axis</strong></td>
<td><span style="font-weight: 400;">Number, date</span></td>
<td>*</td>
<td></td>
<td><span style="font-weight: 400;">The vertical position of the points.</span></td>
</tr>
</tbody>
</table>

<span style="font-weight: 400;"><br /> It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the scatter plot layout. </span>

<span style="font-weight: 400;">Drag and drop the dimensions as following:</span>

- <span class="data-dimension" style="background-color: #2dd8b1;">Date</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">X Axis</span>;
- <span class="data-dimension" style="background-color: #2dd8b1;">MainTemp</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Y Axis</span>;

![](./dimension-contour.png)

<span style="font-weight: 400;">In this way we created a point for each movie in the dataset, disposing it on the cartesian plane according to its date and its mean temperature. </span>

### 04. Refine and export

<span style="font-weight: 400;">To reach the final results we can customize the visualization with some parameters you can find next to the visualization. </span>

<span style="font-weight: 400;">For the scatterplot the options available are the following:</span>

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
<td><strong>Standard deviation</strong></td>
<td>A quantity expressing by how much the members of a group differ from the mean value for the group.</td>
</tr>
<tr>
<td><strong>Colors applied to</strong></td>
<td><span style="font-weight: 400;">The possibility to apply colors to the stroke or to the fill of each curve.</span></td>
</tr>
<tr>
<td><strong>Set origin at (0,0)</strong></td>
<td><span style="font-weight: 400;">If selected, the contour plot origin will be set at the zero value for both the axes. If not selected, origin will be set to the minimum value for the two axes.</span></td>
</tr>
<tr>
<td><strong>colour scale</strong></td>
<td><span style="font-weight: 400;">List of uniques values in the dimension mapped as “color”. If set to ordinal, you can set a color for each value. If set to linear, the app will try to find the minimum and maximum value contained in the dimension, and then creating a gradient among those two values.</span></td>
</tr>
</tbody>
</table>

<span style="font-weight: 400;"><br /> For the final results we have set the options as following:</span>

- Width to 940 pixels;
- Height to 483 pixels;
- Set standard deviation to 20;
- Set color scale to ‘linear’;
- Apply colors to &#8220;fill&#8221;;
- Set colors as following: from rgb(223, 235, 247) to rgb(16, 64, 122);
- Show points;

<span style="font-weight: 400;">Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.</span>

![](./contour_output.png)
