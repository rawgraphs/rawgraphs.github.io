---
title: How to make a barchart
date: 2017-03-22T16:36:44.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ''
secondary_title:
  - ''
discover_more_description:
  - >-
    In this guide you’ll learn how to create bar charts to compare categories
    across groups. We will use a sample dataset about letters frequency in three
    languages: English, Italian and German.
background_image:
  - '0'
page_background_image:
  - ''
discover_more_left:
  - 'null'
discover_more_right:
  - 'null'
reading_time:
  - '4'
resources:
  - '685'
featured_video:
  - ''
image: ./barchart-cover.png
categories:
  - Charts
  - Learning
tags:
  - bar charts
path: /learning/how-to-make-a-barchart/
---
RAWGraphs is meant to quickly produce visualizations that are difficult to produce with other softwares. Bar chart are quite common in any visualization software: what we added is the ability to quickly create multiple bar charts sharing the same categories, and use colors to highlight part of them according to the data.

**GOAL OF THE TUTORIAL**: comparing the most used letters of the alphabet in three languages: english, italian and german and highlighting the top three most used letters with different colors.

### 01. Load your data

<span style="font-weight: 400;">The first step is to load your data into RAWGraphs.</span>

The data must contain at least two columns: one containing the name of the categories (in our case <span class="data-dimension" style="background-color: #2dd8b1;">Letters</span>), the second one containing their values (in our case <span class="data-dimension">Value</span>). If you want to create multiple bar charts, a third column is required, containing the name of the group (<span class="data-dimension">Language</span>). An additional optional column can be used to define each bar color (<span class="data-dimension">Rank</span>).

Here you can see the dataset we are going to use:



You can also download it through the link on the left or select it directly in the app through the sample datasets. In few second you should see the green bar saying “78 records in your data have been successfully parsed!”

**Note**: The described dataset structure is often referred as ‘stacked’ or ‘narrow’. If you have data as wide/unstacked form, you can use the “stack/unstack” button.

### 02. Choose the bar chart layout

After pasting your data, scroll down and select the “bar chart” visual model.

![](./Screen-Shot-2017-02-16-at-14.22.42-e1487252570630.png) 

### 03. Map your dimensions

The barchart layout has four visual variables:

<table>
  <tr>
    <td>
      <b>VARIABLE</b>
    </td>
    
    <td>
      <b>TYPE</b>
    </td>
    
    <td>
      <b>REQUIRED?</b>
    </td>
    
    <td>
      <b>MULTIPLE?</b>
    </td>
    
    <td>
      <b>DESCRIPTION</b>
    </td>
  </tr>
  
  <tr>
    <td>
      <span class="layout-dimension"><b>X axis</b></span>
    </td>
    
    <td>
      <span style="font-weight: 400;">string, numbers</span>
    </td>
    
    <td>
       [fa class=&#8221;fa-asterisk&#8221;]
    </td>
    
    <td>
    </td>
    
    <td>
      <span style="font-weight: 400;">For each unique value found in the column, a group (a new bar chart) is created.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span class="layout-dimension"><b>Group</b></span>
    </td>
    
    <td>
      <span style="font-weight: 400;">string, numbers</span>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      <span style="font-weight: 400;">For each unique value found in the column, a bar is created.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span class="layout-dimension"><b>Size</b></span>
    </td>
    
    <td>
      <span style="font-weight: 400;">number</span>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      <span style="font-weight: 400;">Accepts only columns containing numbers. The value will define the bar height.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span class="layout-dimension"><b>Color</b></span>
    </td>
    
    <td>
      <span style="font-weight: 400;">string, numbers</span>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      <span style="font-weight: 400;">Can accept both number and strings. A color will be defined for each unique value found in the list.</span>
    </td>
  </tr>
</table>

It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the bar chart layout.

Drag and drop the dimensions as following:

  * Drag <span class="data-dimension">Letter</span> into <span class="layout-dimension">X Axis</span>;
  * Drag <span class="data-dimension">Frequency</span> into <span class="layout-dimension">Height</span>;
  * Drag <span class="data-dimension">Language</span> into <span class="layout-dimension">Groups</span>;
  * Drag <span class="data-dimension">Rank</span> into <span class="layout-dimension">Color</span>.

&nbsp;

![](./barchart-mapped.png) 

In this way we created a bar for each letter (mapping it on the X Axis). We divided the visualization in three barcharts, one per language, mapping languages as Groups.  
We defined the height of the bars mapping the frequency of each letter. Finally, we generated one color for each unique value found in the Rank column.

### 04. Refine and export

To reach the final results we can customize the visualization with some parameters you can find next to the visualization.  
For the bar chart the options available are the following:

<table>
  <tr>
    <td>
      <span style="font-weight: 400;">OPTION</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">DESCRIPTION</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">width</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">artboard width in pixels</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">height</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">artboard height in pixels</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">vertical padding</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">distance among bar charts, in pixel</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">horizontal padding</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">distance between bars, in percentage of the size of the bar (0 = 0%, 1 = 100%)</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">use same scale</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">If set, every barchart element will have the same scale</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">colour scale</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">list of uniques values in the dimension mapped as “color”. If set to ordinal, you can set a color for each value. If set to linear, the app will try to find the minimum and maximum value contained in the dimension, and then creating a gradient among those two values</span>
    </td>
  </tr>
</table>

For the final results we have set the options as following:

  * Horizontal padding to 0.05
  * Flag use the same scale
  * Change the colors according to [<span style="font-weight: 400;">this palette</span>](http://www.colourlovers.com/palette/4053585/Iranian_horse)<span style="font-weight: 400;">. Copy and paste the hex codes as following: for “1”,  #DD5F12. For “2”, #E8A264. For “3”, “#FFE1AB”. For “others”, “#D3E1EE”. When you define a color using its <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet">hexadecimal code</a>, remember always to put the hash symbol # before the number</span>

<span style="font-weight: 400;">Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.</span>

![](./barchart-options.png)
