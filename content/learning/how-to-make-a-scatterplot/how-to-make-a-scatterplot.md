---
title: How to make a scatterplot
date: 2017-05-22T10:55:27.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ''
secondary_title:
  - ''
discover_more_description:
  - >-
    With this guide you’ll learn how to create a scatterplot, showing
    correlations among production budget and box office revenue for the
    highest-grossing movies.
background_image:
  - '0'
page_background_image:
  - ''
featured_video:
  - ''
discover_more_left:
  - 'null'
discover_more_right:
  - 'null'
reading_time:
  - '3'
resources:
  - '909'
image: ./scatterplot-cover-1.png
categories:
  - Charts
  - Learning
tags:
  - dispersion
  - scatterplot
path: /learning/how-to-make-a-scatterplot/
---
<span style="font-weight: 400;">In RAWGraphs, scatterplot and bubble graph are presented as variants of the same layout. This layout is useful to see correlations among dimensions. In this example, we will use it to visualize some data related to a list of movies.</span>

**GOAL OF THE TUTORIAL**: c<span style="font-weight: 400;">omparing movies according box office, production budget, return on investment and genre.</span>

### 01. Load your data

<span style="font-weight: 400;">The first step is to copy and paste your data into RAWGraphs.</span>

<span style="font-weight: 400;">The dataset must contain at least two columns, one for the X Axis (in our case, <span class="data-dimension" style="background-color: #2dd8b1;">Production Budget</span>) and one for the Y Axis (<span class="data-dimension" style="background-color: #2dd8b1;">Box Office</span>). Optionally, you can add a column for the Size (<span class="data-dimension" style="background-color: #2dd8b1;">ROI</span>), a column for the Color (<span class="data-dimension" style="background-color: #2dd8b1;">Genre</span>), and one or more for the label (<span class="data-dimension" style="background-color: #2dd8b1;">Movie</span>).</span>

Here you can see the dataset we are going to use:



You can also download the dataset through the link on the left of this post or <span style="font-weight: 400;">load the data from using the “Try our samples” button then choosing “Movies &#8211; Dispersion”.</span>

<span style="font-weight: 400;">In few second you should see the green bar saying “26 records in your data have been successfully parsed!”</span>

### 02. Choose the scatter plot layout

After pasting your data, scroll down and select the “scatter plot” visual model.

![](./scatterplot-selection.png) 

### **03. Map your dimensions**

<span style="font-weight: 400;">The scatterplot layout has five visual variables. </span>

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
      <strong>X Axis</strong>
    </td>
    
    <td>
      Number, date
    </td>
    
    <td>
      [fa class=&#8221;fa-asterisk&#8221;]
    </td>
    
    <td>
    </td>
    
    <td>
      The horizontal position of the circles.
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>Y Axis</strong>
    </td>
    
    <td>
      <span style="font-weight: 400;">Number, date</span>
    </td>
    
    <td>
      [fa class=&#8221;fa-asterisk&#8221;]
    </td>
    
    <td>
    </td>
    
    <td>
      <span style="font-weight: 400;">The vertical position of the circles.</span>
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
      <span style="font-weight: 400;">Area of the circles. If not provided, size will be proportional to the count of rows.</span>
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
      [fa class=&#8221;fa-tags&#8221;]
    </td>
    
    <td>
      <span style="font-weight: 400;">Values will be used as labels. If more than one dimension is dragged, the label will contains the values separated by comma.</span>
    </td>
  </tr>
</table>

<span style="font-weight: 400;"><br /> It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the scatter plot layout. </span>

<span style="font-weight: 400;">Drag and drop the dimensions as following:</span>

  * <span class="data-dimension" style="background-color: #2dd8b1;">Production budget</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">X Axis</span>;</span>
  * <span class="data-dimension" style="background-color: #2dd8b1;">Box Office</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Y Axis</span>;</span>
  * <span class="data-dimension" style="background-color: #2dd8b1;">Roi</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Size</span>;</span>
  * <span class="data-dimension" style="background-color: #2dd8b1;">Genre</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Color</span>;</span>
  * <span class="data-dimension" style="background-color: #2dd8b1;">Movie</span> as <span class="layout-dimension" style="background-color: #e6e6e6;">Label</span>.</span>

![](./scatterplot-mapping.png) 

<span style="font-weight: 400;">In this way we created a circle for each movie in the dataset, disposing it on the cartesian plane according to its production budget and its box office. We then set the area of each circle proportional to the ROI. We colored circles according to genres, and finally put the movie’s name as label.</span>

### 04. Refine and export

<span style="font-weight: 400;">To reach the final results we can customize the visualization with some parameters you can find next to the visualization. </span>

<span style="font-weight: 400;">For the scatterplot the options available are the following:</span>

&nbsp;

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
      <strong>Max Radius</strong>
    </td>
    
    <td>
      <span style="font-weight: 400;">The radius for the circle with the highest value in the dimension mapped as Size.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>Set origin at (0,0)</strong>
    </td>
    
    <td>
      <span style="font-weight: 400;">If selected, the scatterplot origin will be set at the zero value for both the axes. If not selected, origin will be set to the minimum value for the two axes.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>colour scale</strong>
    </td>
    
    <td>
      <span style="font-weight: 400;">list of uniques values in the dimension mapped as “color”. If set to ordinal, you can set a color for each value. If set to linear, the app will try to find the minimum and maximum value contained in the dimension, and then creating a gradient among those two values.</span>
    </td>
  </tr>
</table>

<span style="font-weight: 400;"><br /> For the final results we have set the options as following:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Width to 940 pixels;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Height to 483 pixels;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Radius to 20 pixels;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Set color scale to ‘linear’;</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Set colors as following: </span><span style="font-weight: 400;">1 to <span class="layout-dimension" style="background-color: #e6e6e6;">#e0ecf4</span> and </span><span style="font-weight: 400;">18 to <span class="layout-dimension" style="background-color: #e6e6e6;">#8856a7</span></span>
</li>

<span style="font-weight: 400;">Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.</span>

![](./scatterplot-options.png)
