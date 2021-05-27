---
title: How to make a beeswarm plot (RAWGraphs 1.0)
date: 2018-06-08T13:07:16.000Z
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
files:
  - title: Beeswarm-plot-RAWTutorial-Kickstarter-campaigns
    href: ./Beeswarm-plot-RAWTutorial-Kickstarter-campaigns.csv.zip
image: ./beeswarm-cover.png
categories:
  - Learning
  - Rawgraphs 1.0
tags:
  - beeswarm plot
  - dispersion
  - distribution
path: /learning/old-how-to-make-a-beeswarm-plot/
---

<span style="font-weight: 400;">In RAWGraphs, a beeswarm plot allows you to distribute single weighted elements (like circles) on a linear scale, and to divide it also in different categories. This is a useful and easy way to map linear values and to visualize distribution.</span>

It&#8217;s important to keep in mind that a Beeswarm plot uses forces to avoid collision between the single elements of the visual model. While this helps to see all the circles in the visualization, it also creates some cases where **circles are not placed in the exact position** they should be on the linear scale of the X Axis.

**GOAL OF THE TUTORIAL**: see correlation between funding Goals and Pledges in Kickstarter campaigns ending in 2017 from different fields, like Art, Design, Games, Music and Technology<span style="font-weight: 400;">.</span>

### 01. Load your data

<span style="font-weight: 400;">The first step is to copy and paste your data into RAWGraphs.</span>

<span style="font-weight: 400;">The dataset must contain at least one column, which we&#8217;ll use to map values on the X Axis (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Goal USD</span>). Optionally, you can add a column for Groups (<span class="data-dimension" style="background-color: #2dd8b1;">Field</span>) that will divide the beeswarm into multiple beeswarms for each group, a column for Radius (<span class="data-dimension" style="background-color: #2dd8b1;">Pledges USD</span>), and a column for Color (<span class="data-dimension" style="background-color: #2dd8b1;">State</span>).</span>

Last, you can add one last column for Labels (<span class="data-dimension" style="background-color: #2dd8b1;">Name</span>).

Here you can see the dataset we are going to use:

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQkhBKqfx6RkL-v6aBwazJu96nHQDoirRqgY4Jthy7yWQ20byXkB7mRkToAB4vhKDRvoTXHErNKYcDA/pubhtml?gid=77303400&amp;single=true&amp;widget=true&amp;headers=true" width="100%" height="300"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe>

You can also download the dataset through the link on the left of this post or <span style="font-weight: 400;">load the data from using the “Try our samples” button then choosing “Kickstarter &#8211; Distribution”.</span>

<span style="font-weight: 400;">In few second you should see the green bar saying “460 records in your data have been successfully parsed!”</span>

### 02. Choose the beeswarm plot layout

After pasting your data, scroll down and select the “beeswarm plot” visual model.

![](./raw-tutorial-1.jpg)

### **03. Map your dimensions**

<span style="font-weight: 400;">The scatterplot layout has five visual variables. </span>

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
<td>[fa class=”fa-asterisk”]</td>
<td></td>
<td>The horizontal position of the circles.</td>
</tr>
<tr>
<td><strong>Groups</strong></td>
<td>String</td>
<td></td>
<td></td>
<td>The groups in which circles are divided. If not provided, the circles will be placed on one single line at the center of the canvas.</td>
</tr>
<tr>
<td><strong>Radius</strong></td>
<td><span style="font-weight: 400;">Number</span></td>
<td></td>
<td></td>
<td><span style="font-weight: 400;">Area of the circles. If not provided, the radius defaults to 2.</span></td>
</tr>
<tr>
<td><strong>Color</strong></td>
<td><span style="font-weight: 400;">String, numbers, dates</span></td>
<td></td>
<td></td>
<td><span style="font-weight: 400;">For each unique value found in the dimension, a color is created.</span></td>
</tr>
<tr>
<td><strong>Label</strong></td>
<td><span style="font-weight: 400;">String, numbers, dates</span></td>
<td></td>
<td>[fa class=”fa-tags”]</td>
<td><span style="font-weight: 400;">Values will be used as labels.</span></td>
</tr>
</tbody>
</table>

<span style="font-weight: 400;"><br /> It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the beeswarm plot layout. </span>

<span style="font-weight: 400;">Drag and drop the dimensions as following:</span>

- <span class="data-dimension" style="background-color: #2dd8b1;">Goal USD</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">X Axis</span>;
- <span class="data-dimension" style="background-color: #2dd8b1;">Field</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Groups</span>;
- <span class="data-dimension" style="background-color: #2dd8b1;">Pledged USD</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Size</span>;
- <span class="data-dimension" style="background-color: #2dd8b1;">State</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Color.</span>

![](./raw-tutorial-2.jpg)

By using <span class="data-dimension" style="background-color: #2dd8b1;">Goal USD</span> on the <span class="layout-dimension" style="background-color: #e6e6e6;">X Axis</span> we distribute single campaigns from the lowest goal to the highest, from left to right. We then divide them in <span class="layout-dimension" style="background-color: #e6e6e6;">Groups</span> by <span class="data-dimension" style="background-color: #2dd8b1;">Field</span>, so we can see if there are any differences in Goals between Art, Technology, Design and so on. By sizing each circle by <span class="data-dimension" style="background-color: #2dd8b1;">Pledges USD</span> with their <span class="layout-dimension" style="background-color: #e6e6e6;">Radius</span>, we see who gathered the highest amount of US Dollars, and using <span class="layout-dimension" style="background-color: #e6e6e6;">Color</span> to visualize their <span class="data-dimension" style="background-color: #2dd8b1;">State</span> we can see which campaigns were successful and which were not.

### 04. Refine and export

<span style="font-weight: 400;">To reach the final results we can customize the visualization with some parameters you can find next to the visualization. </span>

<span style="font-weight: 400;">For the beeswarm plot the options available are the following:</span>

<table>
<tbody>
<tr>
<td><strong>OPTION</strong></td>
<td><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td><strong>Width</strong></td>
<td><span style="font-weight: 400;">Artboard width in pixels.</span></td>
</tr>
<tr>
<td><strong>Height</strong></td>
<td><span style="font-weight: 400;">Artboard height in pixels.</span></td>
</tr>
<tr>
<td><strong>Anticollision iterations</strong></td>
<td>The number of iterations to calculate the position of circles in order to avoid overlapping. The higher the number, the more resource consuming but accurate the position and anti-collision algorithm of the circles will be.</td>
</tr>
<tr>
<td><strong>Circles Padding</strong></td>
<td>The padding in px between each circle in the visualization. It defaults to 0,5.</td>
</tr>
<tr>
<td><strong>Vertical Padding</strong></td>
<td>The padding in px between beeswarms created for each group. It’s useful when the high number of elements and their size forces single beeswarm to overlap. It defaults to 0.</td>
</tr>
<tr>
<td><strong>Min Radius</strong></td>
<td><span style="font-weight: 400;">The radius for the circle with the lowest value in the dimension mapped as Radius.</span></td>
</tr>
<tr>
<td><strong>Max Radius</strong></td>
<td><span style="font-weight: 400;">The radius for the circle with the highest value in the dimension mapped as Radius.</span></td>
</tr>
<tr>
<td><strong>Colour Scale</strong></td>
<td><span style="font-weight: 400;">List of uniques values in the dimension mapped as “color”. If set to ordinal, you can set a color for each value. If set to linear, the app will try to find the minimum and maximum value contained in the dimension, and then creating a gradient among those two values.</span></td>
</tr>
</tbody>
</table>

<span style="font-weight: 400;"><br /> For the final results we have set the options as following:</span>

- <span style="font-weight: 400;">Width to 800 pixels;</span>
- <span style="font-weight: 400;">Height to 900 pixels;</span>
- Anticollision Iterations to 1;
- <span style="font-weight: 400;">Circles Padding to 0,5;</span>
- Vertical Padding to 0;
- Min Radius to 2;
- Max Radius to 20;
- <span style="font-weight: 400;">Set color scale to ‘Ordinal’;</span>
- <span style="font-weight: 400;">Set colors as following: </span>
- canceled <span class="layout-dimension" style="background-color: #e6e6e6;">#ababab</span>;
- failed <span class="layout-dimension" style="background-color: #e6e6e6;">#d92e2e</span>;
- successful <span class="layout-dimension" style="background-color: #e6e6e6;">#69bf86</span>;
- suspended <span class="layout-dimension" style="background-color: #e6e6e6;">#bfac69</span>.

<span style="font-weight: 400;">Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.</span>

![](./Screen-Shot-2018-05-28-at-13.51.37.png)
