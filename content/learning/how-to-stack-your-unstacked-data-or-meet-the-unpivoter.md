---
title: "How to stack your unstacked data (or “meet the unpivoter”)"
topic: 2. Data
updated: 2022-01-28T00:00:00
cover: /uploads/learning/how-to-stack-your-unstacked-data-or-meet-the-unpivoter-cover.avif
order: 5
---

Wide and narrow (sometimes un-stacked and stacked) are terms used to describe two different presentations for tabular data. RAWGraphs requires in most of the cases data in the narrow format: in this guide you’ll learn how to use your data in RAWGraphs even if it’s in the wide format.

![](/uploads/learning/how-to-stack-your-unstacked-data-or-meet-the-unpivoter-1.png)

Wide, or unstacked data is presented with each different data variable in a separate column. Narrow, or stacked data is presented with one column containing all the values and another column listing the context of the value.

RAWGraphs requires in most of the cases data in the narrow format. Transforming data from the wide to the narrow format (operation sometimes defined unpivoting) is quite difficult with the commonly available tools.

This is the reason why we added the “Stack/unstack” function, AKA “the Unpivoter”.

**01.Load your data**

In this tutorial we will visualize the population of the most populated countries in the world as recorded by the World Bank from the 1960 to 2019. 

We prepared a simplified version of the dataset for this tutorial, you can see it [here](https://docs.google.com/spreadsheets/d/1BQRZqYTxzyon4IzUnqpxRy4XF9_QIe32_oHFwsyiho0/edit?usp=sharing).

![](/uploads/learning/how-to-stack-your-unstacked-data-or-meet-the-unpivoter-2.png)

**02\. Stack your data on a column**

On the left under “Data transformation” you will find the command to Stack the dataset on a particular column. Click on the drawdown and select “Country Name”

![](/uploads/learning/how-to-stack-your-unstacked-data-or-meet-the-unpivoter-3.png)

Now, the data is stacked, as in the image below:

![](/uploads/learning/how-to-stack-your-unstacked-data-or-meet-the-unpivoter-4.png)

In the first column you have the names of the countries, in the second one you have the years, and in the third ones the values.

With this operation you defined the main dimension (in this case, Country Name), which became the first column of the new dataset. In the second column, named “column”, are listed all the remaining headers of the previous table. In the third column, named value, are listed the values of the previous table.

**03\. Visualize your data**

You can now set the data type of “column” to date (YYYY) and visualize it, creating for example an area chart or a line chart.

![](/uploads/learning/how-to-stack-your-unstacked-data-or-meet-the-unpivoter-5.png)
