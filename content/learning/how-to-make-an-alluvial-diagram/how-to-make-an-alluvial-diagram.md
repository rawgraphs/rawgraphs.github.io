---
title: How to make an alluvial diagram
date: 2017-03-27T10:43:20.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ''
secondary_title:
  - ''
discover_more_description:
  - >-
    In this guide you’ll learn how to create an alluvial diagram to see
    socio-demographic information about people on the Titanic. Before starting
    we will define a small vocabulary to avoid misinterpretations. We will call
    ‘nodes’ the black rectangles. We will call ‘flows’ the coloured areas
    linking nodes. We will call ‘steps’ the vertical groups of nodes.
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
  - '4'
resources:
  - '809'
image: ./alluvial_cover.png
categories:
  - Charts
  - Learning
tags:
  - alluvial diagram
  - sankey
path: /learning/how-to-make-an-alluvial-diagram/
---
<span style="font-weight: 400;">Alluvial diagrams are in many ways similar to sankey diagrams: they represents weighted flows among nodes. Alluvial diagrams are a specific kind of Sankey diagrams: they use the same logic to show how the same set of items regroups according to different dimensions.</span>

<span style="font-weight: 400;">Before starting we can define a small vocabulary, to avoid misinterpretations. </span><span style="font-weight: 400;">We will call ‘nodes’ the black rectangles. We will call ‘flows’ the colored areas linking nodes. We will call ‘steps’ the vertical groups of nodes.</span>

<span style="font-weight: 400;">In RAWGraphs, you don’t define directly the size of edges among nodes. </span><span style="font-weight: 400;">In our application each line of the dataset become a series of flows, each columns defines a step. The size of edges and of flows is therefore linked to the number of lines in the dataset containing the same couple of nodes. </span><span style="font-weight: 400;">Flows coming from and going to the same couple of nodes are grouped.</span>

**GOAL OF THE TUTORIAL:** <span style="font-weight: 400;">Compare socio-demographic information about the passengers of the Titanic, trying to identify patterns among genre, age, fare class and chance to survive to the accident.</span>

### **01. Paste your data**

<span style="font-weight: 400;">The first step is to copy and paste your data into RAWGraphs.</span>

<span style="font-weight: 400;">The data must be structured in this way: each line of the dataset is an item, and each column is a property of such item.</span>

<span style="font-weight: 400;">To make an example:</span>

<table>
  <tr>
    <td>
      <span style="font-weight: 400;">Name</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">Age</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">City</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">John</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">30</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">London</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">Richard</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">20</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">Berlin</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">Frank</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">20</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">Berlin</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">Gabriele</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">30</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">Milan</span>
    </td>
  </tr>
</table>

The data must contain at least two columns defining properties. <span style="font-weight: 400;">Each additional column will define a new step in the alluvial diagram. </span><span style="font-weight: 400;">An additional optional column can be used to define the line weight.</span>

<span style="font-weight: 400;">Here you can see the dataset we are going to use:</span>



<span style="font-weight: 400;">You can also select it directly in the app through clicking on ‘Try our samples’ > ‘Titanic’s Passengers’. </span><span style="font-weight: 400;">In few second you should see the green bar saying</span> <span style="font-weight: 400;">“1309 records in your data have been successfully parsed!”.</span>

### **02. Choose the layout**

<span style="font-weight: 400;">After pasting your data, scroll down and select the “Alluvial Diagram” chart layout.</span>

![](./Screen-Shot-2017-03-27-at-12.27.10.png) 

### **03. Map your dimensions**

<span style="font-weight: 400;">The alluvial diagram has two visual variables.</span>

<table>
  <tr>
    <td>
      <span style="font-weight: 400;">VARIABLE</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">TYPE</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">REQUIRED</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">MULTIPLE</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">DESCRIPTION</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span class="layout-dimension" style="font-weight: 400; background-color: #e6e6e6;">Steps</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">String, numbers</span>
    </td>
    
    <td>
      [fa class=&#8221;fa-asterisk&#8221;]
    </td>
    
    <td>
      [fa class=&#8221;fa-tags&#8221;]
    </td>
    
    <td>
      <span style="font-weight: 400;">It accept multiple values, at least two column must be selected. Each dragged column will define a step (a vertical group of nodes). The dragging order is also the visualization order. For each unique value found in each column a node will be created.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span class="layout-dimension" style="font-weight: 400; background-color: #e6e6e6;">Size</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">Numbers</span>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      <span style="font-weight: 400;">Defines the weight of each line of the dataset. If not defined, all the lines will have the same weight.</span>
    </td>
  </tr>
</table>

&nbsp;

<span style="font-weight: 400;">It’s time to map your data and create the visualization. On the left you have the list of dimensions in your dataset, on the right the available visual variable of the bar chart layout. </span>

<span style="font-weight: 400;">Drag and drop the dimensions as following:</span>

![](./alluvial-mapping.png) 

<span style="font-weight: 400;">In this way we will create four different <span class="layout-dimension" style="background-color: #e6e6e6;">Steps</span>. The first is <span class="data-dimension" style="background-color: #2dd8b1;">Gender</span>, with two nodes, male and female. The size of the two nodes is proportional to the number of nodes containing that value.</span>

<span style="font-weight: 400;">The second step is <span class="data-dimension" style="background-color: #2dd8b1;">Age group</span>, and it’s composed by 9 nodes: the first 8 for each decade, and a last one for all the people with unknown age. Also in this case the size of each node is proportional to the number of rows containing that specific value. The flows among nodes in the two steps represent the number of lines in the dataset sharing the same couple of values: for example the largest flow is from the node ‘male’ in the Gender step and the ‘20-29’ node in the Age groups step.</span>

<span style="font-weight: 400;">The same logic rules the following steps. The third one is <span class="data-dimension" style="background-color: #2dd8b1;">Class</span> and contains three nodes (first, second, third), the last step is <span class="data-dimension" style="background-color: #2dd8b1;">Survival</span>, containing two nodes (yes for survived, no for not survived).</span>

<span style="font-weight: 400;">We won’t use the size <span class="layout-dimension" style="background-color: #e6e6e6;">dimension</span> in this tutorial.</span>

### **04. Options**

<span style="font-weight: 400;">To reach the final results we can customize the visualization with some parameters you can find next to the visualization. </span>

<span style="font-weight: 400;">For the alluvial diagram the options available are the following:</span>

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
      <span style="font-weight: 400;">Nodes width</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">Width of black bars representing nodes, in pixels.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">Sort by</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">Sorting of nodes inside each step. It can be ‘automatic’ (trying to reduce the number of overlappings among flows), ‘size’ (nodes ordered from the biggest to the smallest), and ‘alphabetical’.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="font-weight: 400;">Color scale</span>
    </td>
    
    <td>
      <span style="font-weight: 400;">The color of flows. The color is defined by the source node. For each unique value found in the dimension dragged as ‘steps’ a color is defined.</span>
    </td>
  </tr>
</table>

For the final results we have set the options as following:

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Width to 945</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Height to 483</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Set the colors as following. </span><span style="font-weight: 400;">Copy and paste the hex codes as following:</span> <ul>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">&#8220;1&#8221; to #DD5F12, &#8220;2&#8221; to #E8A264, &#8220;3&#8221; to #D3E1EE;</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">&#8220;0 &#8211; 9&#8221; to #c2b49a, &#8220;10 &#8211; 19&#8221; to #b0a28b, &#8220;20 &#8211; 29&#8221; to #a2937f, &#8220;30 &#8211; 39&#8221; to #948573, &#8220;40 &#8211; 49&#8221; to #877768, &#8220;50 &#8211; 59&#8221; to #7b6b5d, &#8220;60 &#8211; 69&#8221; to #6f5f54, &#8220;70 &#8211; 79&#8221; to #64544a, &#8220;80 &#8211; 89&#8221; to #594a41, &#8220;unknown&#8221; to #cccccc;</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">&#8220;female&#8221; to #ec008b, &#8220;male&#8221; to #00adef.</span>
    </li>
  </ul>
</li>

Here is the finished chart. You can export it in svg or png using the download function at the bottom of the page.

![](./alluvial-options.png)
