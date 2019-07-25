---
title: How to make a treemap
date: 2017-05-11T15:03:29.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ""
secondary_title:
  - ""
discover_more_description:
  - >-
    In this guide you’ll learn how to create a treemap to represent the
    composition of different kinds of orchestras.
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
  - title: Treemap_Sample
    href: ./Treemap_Sample.zip
image: ./treemap-cover.png
categories:
  - Learning
  - Charts
tags:
  - treemap
  - Weighted Hierarchy
path: /learning/how-to-make-a-treemap/
---

<span style="font-weight: 400;">Treemap are useful to see the weight of categories belonging to a hierarchical structure. In this example, we will create such structure dividing the instruments by orchestra type, then type, and then single instrument.</span>

**GOAL OF THE TUTORIAL**: <span style="font-weight: 400;">Show the size of four different orchestras and their composition.</span>

### 01. Load your data

The first step is to copy and paste your data into RAWGraphs.  
For this example we will use a dataset containing the instruments composing four different kind of orchestra. The data must contain one or more columns containing categories (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Orchestra type</span> and <span class="data-dimension" style="background-color: #2dd8b1;">Group</span>). Optionally you can add a column containing a number for the groups size (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Number</span>).

You can copy and paste the data from the table below:

Otherwise, you can load the data from using the “Try our samples” button then choosing “Orchestras &#8211; Hierarchies (weighted)”.  
In few second you should see the green bar saying “101 records in your data have been successfully parsed!”

**  
Note: **The described dataset structure is often referred as ‘unstacked’ or ‘wide’. If you have data as narrow/stacked form, you can use the “stack/unstack” button: see the <a style="background-color: #ffffff;" href="https://rawgraphs.io/learning/stack-your-unstacked-data-meet-the-unpivoter">tutorial</a> here.

### 02. Choose the layout {#02-Choose-the-bar-chart-layout}

<span style="font-weight: 400;">After pasting your data, scroll down and select the “treemap” visual model.</span>

![](./treemap-selection.png)

### 03. Map your dimensions {#03-Map-your-dimensions}

<span style="font-weight: 400;">The treemap layout has four visual variables</span>:

<table>
  <tr>
    <td>
      <strong>VARIABLE</strong>
    </td>

    <td>
      <strong>TYPE</strong>
    </td>

    <td>
      <strong>REQUIRED?</strong>
    </td>

    <td>
      <strong>MULTIPLE?</strong>
    </td>

    <td>
      <strong>DESCRIPTION</strong>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Hierarchy</strong>
    </td>

    <td>
      String, numbers, dates
    </td>

    <td>
      [fa class=&#8221;fa-asterisk&#8221;]
    </td>

    <td>
      [fa class=&#8221;fa-asterisk&#8221;]
    </td>

    <td>
      For each dimension dragged here, a level in the hierarchy is created. The order of dimensions influences the hierarchy.
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
    </td>

    <td>
    </td>

    <td>
      <span style="font-weight: 400;">Size of the area for each date in the dataset. If not provided, size will be proportional to the count of rows.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Color</strong>
    </td>

    <td>
      <span style="font-weight: 400;">String, numbers, dates</span>
    </td>

    <td>
    </td>

    <td>
    </td>

    <td>
      <span style="font-weight: 400;">For each unique value found in the dimension, a color is created.</span>
    </td>

  </tr>

  <tr>
    <td>
      <strong>Label</strong>
    </td>

    <td>
      <span style="font-weight: 400;">String, numbers, dates</span>
    </td>

    <td>
    </td>

    <td>
      [fa class=&#8221;fa-asterisk&#8221;]
    </td>

    <td>
      <span style="font-weight: 400;">Values will be used as labels. If more than one dimension are dragged, the label will contains the values separated by comma.</span>
    </td>

  </tr>
</table>

<span style="font-weight: 400;">It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the treemap chart layout. </span>

Drag and drop the dimensions as following:

<li style="font-weight: 400;">
  <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Orchestra type</span> and <span class="data-dimension" style="background-color: #2dd8b1;">Group</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Hierarchy</span>;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Number</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Size</span>;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Group</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Color</span>;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;"><span class="data-dimension" style="background-color: #2dd8b1;">Group</span> and <span class="data-dimension" style="background-color: #2dd8b1;">Number</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Label</span>.</span>
</li>

![](./treemap-mapping.png)

<span style="font-weight: 400;">In this way we created a hierarchical structure: first, dividing by <span class="data-dimension" style="background-color: #2dd8b1;">Orchestra type</span>, and then dividing each orchestra by instruments <span class="data-dimension" style="background-color: #2dd8b1;">Group</span>. For each group, we used the <span class="data-dimension" style="background-color: #2dd8b1;">Number</span> value as size. Finally, we created a label for each rectangle using the <span class="data-dimension" style="background-color: #2dd8b1;">Group</span> name and the <span class="data-dimension" style="background-color: #2dd8b1;">Number</span>.</span>

### 04. Refine and export {#04Refine-and-export}

<span style="font-weight: 400;">To reach the final results we can customize the visualization with some parameters you can find next to the visualization. </span><span style="font-weight: 400;">For the treemap the </span><span style="font-weight: 400;">options available are the following:</span>

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
      <span style="font-weight: 400;">Vertical distance among groups, in pixel</span>
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

<span style="font-weight: 400;">For the final results we have set the options as following:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Width to 940 pixels;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Height to 483 pixels;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Padding to 5 pixel;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Set colors as following: </span><span style="font-weight: 400;">Brass to <span class="layout-dimension" style="background-color: #e6e6e6;">#e8858f</span>, </span><span style="font-weight: 400;">Keyboards to <span class="layout-dimension" style="background-color: #e6e6e6;">#b185ba</span>, </span><span style="font-weight: 400;">Percussion to <span class="layout-dimension" style="background-color: #e6e6e6;">#9ecce0</span>, </span><span style="font-weight: 400;">Strings to <span class="layout-dimension" style="background-color: #e6e6e6;">#f7e372</span>, </span><span style="font-weight: 400;">Woodwinds to <span class="layout-dimension" style="background-color: #e6e6e6;">#81c7b6</span>.</span>
</li>

<span style="font-weight: 400;">Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.</span>

![](./treemap-options-1.png)
