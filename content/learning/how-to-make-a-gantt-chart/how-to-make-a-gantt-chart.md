---
title: How to make a Gantt chart
date: 2017-05-08T09:08:35.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ""
secondary_title:
  - ""
discover_more_description:
  - >-
    A Gantt chart is a type of bar chart, developed by Henry Gantt in the 1910s,
    useful to illustrate time chunks on a timeline. In this tutorial, we will
    use a Gantt chart to visualize the evolution of Iron Maiden lineup.
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
  - "4"
files:
  - title: gantt_sample
    href: ./gantt_sample.zip
image: ./gantt-cover.png
categories:
  - Learning
  - Charts
tags:
  - gantt chart
  - project schedule
  - time chunks
path: /learning/how-to-make-a-gantt-chart/
---

Gantt charts are horizontal bar charts defining time spans. They are useful when you want to show events in time defined by a starting and an ending date.

**GOAL OF THE TUTORIAL:** Create a visualization of Iron Maiden lineup, identifying the different roles of the band members.

### 01. Load your data

<span style="font-weight: 400;">The first step is to copy and paste your data into RAWGraphs.</span>

<span style="font-weight: 400;">The data must contain at least three columns: one containing the start date (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Begin</span>) one containing the ending date (in our case <span class="data-dimension" style="background-color: #2dd8b1;">End</span>) and a column identifying how to group multiple time span (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Name</span>). An additional column can be used to define each bar color (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Role</span>). Here you can see the dataset we’re going to use.</span>

<span style="font-weight: 400;">Dates must be formatted in a specific way if you want to use them in RAWGraphs: <a href="https://github.com/densitydesign/raw/wiki/Date-formats">check here the accepted formats</a>.</span>

Here you can see the dataset we are going to use:

<iframe src="https://docs.google.com/spreadsheets/d/1xaupcv1d8IIcndeFJL_781zSa_LvCeEJNKUpw3g7x8I/pubhtml?widget=true&amp;headers=false" width="100%" height="300"></iframe>

<span style="font-weight: 400;">You can also download it through the link on the left or select it directly in the app through the sample datasets. In few second you should see the green bar saying “26 records in your data have been successfully parsed!”</span>

### 02. Choose the Gantt chart layout

<span style="font-weight: 400;">After pasting your data, scroll down and select the “Gantt chart” visual model.</span>

![](./gantt-selection.png)

### 03. Map your dimensions

<span style="font-weight: 400;">The Gantt chart layout has four visual variables.</span>

|            |                 |                          |          |                                                                                                                                    |
| ---------- | --------------- | ------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| VARIABLE   | TYPE            | REQUIRED                 | MULTIPLE | DESCRIPTION                                                                                                                        |
| Group      | String, numbers | [fa class=”fa-asterisk”] |          | For each unique value found in the column, a group (an horizontal series of bars) is created.                                      |
| Start date | Dates, numbers  | [fa class=”fa-asterisk”] |          | Starting point of the bar. RAWGraphs requires dates in [a specific format](https://github.com/densitydesign/raw/wiki/Date-formats) |
| End date   | Dates, numbers  | [fa class=”fa-asterisk”] |          | Ending point of the bar. RAWGraphs requires dates in [a specific format](https://github.com/densitydesign/raw/wiki/Date-formats).  |
| Color      | String, numbers |                          |          | Can accept both number and strings. A color will be defined for each unique value found in the list.                               |

<span style="font-weight: 400;">It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the bar chart layout. </span>

<span style="font-weight: 400;">Drag and drop the dimensions as following:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Drag <span class="data-dimension" style="background-color: #2dd8b1;">Name</span> into <span class="layout-dimension" style="background-color: #e6e6e6;">Group</span>;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Drag <span class="data-dimension" style="background-color: #2dd8b1;">Begin</span> int <span class="layout-dimension" style="background-color: #e6e6e6;">Start Date</span>;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Drag <span class="data-dimension" style="background-color: #2dd8b1;">End</span> into <span class="layout-dimension" style="background-color: #e6e6e6;">End Date</span>;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Drag <span class="data-dimension" style="background-color: #2dd8b1;">Role</span> into <span class="layout-dimension" style="background-color: #e6e6e6;">Color.</span></span>
</li>

![](./gantt-mapping.png)

<span style="font-weight: 400;">In this way we created a group of bars for each band member (mapping <span class="data-dimension" style="background-color: #2dd8b1;">Name</span> on the <span class="layout-dimension" style="background-color: #e6e6e6;">Group</span> dimension). For every active period of the member we draw a rectangle with the values dragged in the <span class="data-dimension" style="background-color: #2dd8b1;">Start Date</span> and <span class="data-dimension" style="background-color: #2dd8b1;">End Date</span>. Finally, we generated one <span class="data-dimension layout-dimension" style="background-color: #e6e6e6;">Color</span> for each unique value found in the <span class="data-dimension" style="background-color: #2dd8b1;">Role</span> column.</span>

### 04. Refine and export

<span style="font-weight: 400;">To reach the final results we can customize the visualization with some parameters you can find next to the visualization. </span>

<span style="font-weight: 400;">For the Gantt chart the options available are the following:</span>

<table>
<tbody>
<tr>
<td><span style="font-weight: 400;">OPTION</span></td>
<td><span style="font-weight: 400;">DESCRIPTION</span></td>
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
<td><strong>Sort by</strong></td>
<td><span style="font-weight: 400;">Order of the bars series. Could be alphabetical or by date (both ascending and descending).</span></td>
</tr>
<tr>
<td><strong>Color scale</strong></td>
<td><span style="font-weight: 400;"><span style="font-weight: 400;">If set to ordinal, you can set a color for each value; it l</span></span><span style="font-weight: 400;">ists all the unique values in the dimension mapped as “color”. If set to linear, the app will try to find the minimum and maximum value contained in the dimension, and then it creates&nbsp;a gradient among those two values</span></td>
</tr>
</tbody>
</table>

<span style="font-weight: 400;">For the final results we have set the options as following:</span>

- Width to 945 px
- Height to 483 px
- Sort by &#8220;Start date (descending)&#8221;
- Change the colors according to this palette:
- Bass to <span class="layout-dimension" style="background-color: #e6e6e6;">#1C7989</span>
- Drums to <span class="layout-dimension" style="background-color: #e6e6e6;">#D81159</span>
- Guitar to <span class="layout-dimension" style="background-color: #e6e6e6;">#0496FF</span>
- Keys to <span class="layout-dimension" style="background-color: #e6e6e6;">#8F2D56</span>
- Vocals to <span class="layout-dimension" style="background-color: #e6e6e6;">#FFBC42</span>

Here is the finished chart. You can export it in SVG or PNG using the download function at the bottom of the page.

![](./gantt-options.png)
