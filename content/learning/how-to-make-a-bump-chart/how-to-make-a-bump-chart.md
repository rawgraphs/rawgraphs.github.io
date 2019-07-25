---
title: How to make a bump chart
date: 2017-05-08T10:52:56.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ""
secondary_title:
  - ""
discover_more_description:
  - >-
    In this guide you’ll learn how to create a bump chart to see how the
    composition of foreign residents in Milan has changed over time.
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
  - title: bumpchart_sample
    href: ./bumpchart_sample.zip
image: ./bumpchart-cover.png
categories:
  - Learning
  - Charts
tags:
  - bump chart
  - time series
path: /learning/how-to-make-a-bump-chart/
---

Bump charts are useful to see the amount of different categories over time and their ranking. They are similar to area graphs or to stream graphs, the difference is that areas are sorted according their ranking.

**GOAL OF THE TUTORIAL:** create a bump chart representing the main nationalities of foreign residents in Milan. Each area is a nationality, colors will represent continents.

### 01. Load your data

<span style="font-weight: 400;">The first step is to copy and paste your data into RAWGraphs.</span>

<span style="font-weight: 400;">For this example we will use a dataset on foreign residents in Milan from 1979 to 2015, provided in open data by the <a href="http://dati.comune.milano.it/">municipality of Milan</a>. </span><span style="font-weight: 400;">The data must contain three columns: the first one containing categories (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Country</span>), the second one containing dates (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Date</span>) and a third one containing values (in our case <span class="data-dimension" style="background-color: #2dd8b1;">Residents</span>).</span>

<span style="font-weight: 400;">Dates must be formatted in a specific way if you want to use them in RAWGraphs: <a href="https://github.com/densitydesign/raw/wiki/Date-formats">check here the accepted formats</a>.</span>

Here you can see the dataset we are going to use:

<span style="font-weight: 400;">You can also download it through the link on the left. In few second you should see the green bar saying “592 records in your data have been successfully parsed!”</span>

### 02. Choose the bump chart layout {#02-Choose-the-bar-chart-layout}

<span style="font-weight: 400;">After pasting your data, scroll down and select the “bump chart” visual model.</span>

![](./bumpchart-selection.png)

### 03. Map your dimensions {#03-Map-your-dimensions}

<span style="font-weight: 400;">The bump chart layout has three visual variables. </span>

<table>
  <tr>
    <td>
      <strong>VARIABLE</strong>
    </td>

    <td>
      <strong>TYPE</strong>
    </td>

    <td>
      <strong>REQUIRED</strong>
    </td>

    <td>
      <strong>MULTIPLE</strong>
    </td>

    <td>
      <strong>DESCRIPTION</strong>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Group</strong>
    </td>

    <td>
      <span style="font-weight: 400;">String, numbers</span>
    </td>

    <td>
      <span style="font-weight: 400;">[fa class=&#8221;fa-asterisk&#8221;]<br /> </span>
    </td>

    <td>
      <span style="font-weight: 400;"> </span>
    </td>

    <td>
      <span style="font-weight: 400;">For each unique value found in the column, a group (a new area) is created.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Date</strong>
    </td>

    <td>
      <span style="font-weight: 400;">Dates, number</span>
    </td>

    <td>
      <span style="font-weight: 400;">[fa class=&#8221;fa-asterisk&#8221;]<br /> </span>
    </td>

    <td>
      <span style="font-weight: 400;"> </span>
    </td>

    <td>
      <span style="font-weight: 400;">Depiction of time along the horizontal axis. RAWGraphs requires dates in a specific format: check here how.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Size</strong>
    </td>

    <td>
      <span style="font-weight: 400;">Number</span>
    </td>

    <td>
      <span style="font-weight: 400;">[fa class=&#8221;fa-asterisk&#8221;]<br /> </span>
    </td>

    <td>
      <span style="font-weight: 400;"> </span>
    </td>

    <td>
      <span style="font-weight: 400;">Size of the area for each date in the dataset.</span>
    </td>

  </tr>
</table>

<span style="font-weight: 400;"> </span>

<span style="font-weight: 400;">It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the bar chart layout. </span>

<span style="font-weight: 400;">Drag and drop the dimensions as following:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Country</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Group</span>;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Date</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Date</span>;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Residents</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Size</span>.</span>
</li>

<span style="font-weight: 400;"> </span>

![](./bumpchart-mapping-e1494239817516.png)

<span style="font-weight: 400;">In this way we created an area for each value found in the <span class="data-dimension" style="background-color: #2dd8b1;">Country</span> column, set the size according to the value found in the column <span class="data-dimension" style="background-color: #2dd8b1;">Residents</span> for each corresponding <span class="data-dimension" style="background-color: #2dd8b1;">Date</span>.</span>

### 04. Refine and export {#04Refine-and-export}

<span style="font-weight: 400;">To reach the final results we can customize the visualization with some parameters you can find next to the visualization. </span>

<span style="font-weight: 400;">For the bump chart the options available are the following:</span>

<table>
  <tr>
    <td>
      <strong>OPTION</strong>
    </td>

    <td>
      <strong>DESCRIPTION</strong>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Width</strong>
    </td>

    <td>
      <span style="font-weight: 400;">artboard width in pixels</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Height</strong>
    </td>

    <td>
      <span style="font-weight: 400;">artboard height in pixels</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Padding</strong>
    </td>

    <td>
      <span style="font-weight: 400;">Vertical distance among areas, in pixel</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Normalize</strong>
    </td>

    <td>
      <span style="font-weight: 400;">Values are normalized by the sum of all values belonging to the same date.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Interpolation</strong>
    </td>

    <td>
      <span style="font-weight: 400;">How curves are drawn. “Basis spline” means that the algorithm will try to smooth peaks. “Sankey” means that peaks are kept, and the curve is smoothed among dates. “Linear” means that a straight line will connect the values.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Sort by</strong>
    </td>

    <td>
      <span style="font-weight: 400;">Sorting of areas: can be by the size value (ascending or descending) or by group name.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Show labels</strong>
    </td>

    <td>
      <span style="font-weight: 400;">If selected, groups names are shown in the chart.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Show grid</strong>
    </td>

    <td>
      <span style="font-weight: 400;">If selected, a timeline is shown on the background.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Colour scale</strong>
    </td>

    <td>
      <span style="font-weight: 400;">list of uniques values in the dimension mapped as “color”. If set to ordinal, you can set a color for each value. If set to linear, the app will try to find the minimum and maximum value contained in the dimension, and then creating a gradient among those two values.</span>
    </td>

  </tr>
</table>

&nbsp;

<span style="font-weight: 400;">For the final results we have set the options as following:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Width to 940 pixels;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Height to 483 pixels;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Padding to 1 pixel;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Select “normalize”;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Select “Sankey” interpolation;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Sort by descending values;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Show labels and grid;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Set colors as following (Albania to <span class="layout-dimension" style="background-color: #e6e6e6;">#0080c7</span>, China to <span class="layout-dimension" style="background-color: #e6e6e6;">#e10050</span>, Ecuador to <span class="layout-dimension" style="background-color: #e6e6e6;">#f9c734</span>, Egypt to <span class="layout-dimension" style="background-color: #e6e6e6;">#44b750</span>, El Salvador to <span class="layout-dimension" style="background-color: #e6e6e6;">#f9c734</span>, France to <span class="layout-dimension" style="background-color: #e6e6e6;">#0080c7</span>, Germany to <span class="layout-dimension" style="background-color: #e6e6e6;">#0080c7</span>, Japan to <span class="layout-dimension" style="background-color: #e6e6e6;">#e10050</span>, Morocco to <span class="layout-dimension" style="background-color: #e6e6e6;">#44b750</span>, Others to <span class="layout-dimension" style="background-color: #e6e6e6;">#dedede</span>, Peru to <span class="layout-dimension" style="background-color: #e6e6e6;">#f9c734</span>, Philippines to <span class="layout-dimension" style="background-color: #e6e6e6;">#e10050</span>, Romania to <span class="layout-dimension" style="background-color: #e6e6e6;">#0080c7</span>, Sri Lanka to <span class="layout-dimension" style="background-color: #e6e6e6;">#e10050</span>, Ucraine to <span class="layout-dimension" style="background-color: #e6e6e6;">#0080c7</span>, United Kingdom to <span class="layout-dimension" style="background-color: #e6e6e6;">#0080c7</span>).</span>
</li>

<span style="font-weight: 400;">Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.</span>

![](./bumpchart-options.png)
