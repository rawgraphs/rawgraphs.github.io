---
title: "How to load data from a URL"
topic: 2. Data
updated: 2022-01-28T00:00:00
cover: /uploads/learning/how-to-load-data-from-a-url-cover.avif
order: 3
---

If you work in a team or you work on a dataset that is continuously updated, you might want to load your data directly from a web address (URL) pointing to the data (e.g. a Google Spreadsheet, a public API, ...). This feature allows you to easily update your data and ease your workflow. The only requirement is that the server hosting the data is [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

To load data from a URL you simply have to select “from a URL” and paste the web address. When you load data correctly you should be able to see the table. 

The nice thing about loading data from a URL is that if something has changed in the dataset and you want to update the values in RAWGraphs, you can simply click on “Refresh data from url” and after a few seconds the table will be updated and, consequently, the visualization you created. 

![](/uploads/learning/how-to-load-data-from-a-url-1.png)

Another nice feature is that the URL is saved in the .rawgraphs project that you can export and once you or another person opens the project, they will have the possibility to refresh data from the URL and update your project.

In this guide we will present a couple of examples of services that allow you to load data from a URL.

### Loading data from Google Spreadsheet

In order to load data from Google Spreadsheet follow the following steps:

1\. Click on File > Share > Publish to web

![](/uploads/learning/how-to-load-data-from-a-url-2.png)

2\. Select the sheet you want to publish and “Comma-separated values (.csv). Then click on “Publish”. 

![](/uploads/learning/how-to-load-data-from-a-url-3.png)

3\. Select and copy the URL provided. It should be something like this:

> https://docs.google.com/spreadsheets/d/e/2PACX-1vQH44s54gY7idhtDSm84KwGfIZAnYrZyDRdvzChgG4UEi2UlJfQSTY3XmeQwCZz4pBs74woKZK6se92/pub?gid=420871578&single=true&output=csv

![](/uploads/learning/how-to-load-data-from-a-url-4.png)

4\. Open RAWGraphs and select “Load from URL”. Paste the URL you have copied from Google Spreadsheet and click on "Load data".

![](/uploads/learning/how-to-load-data-from-a-url-5.png)

If everything is correct you will see the table loaded in RAWGraphs and the message that all the rows have been parsed correctly. Click on “Refresh data from URL” to update the table if something has changed in the Google Spreadsheet. 

### Loading data from Github

In order to load data from a Github repository follow the following steps:

1\. Go to Guithub and open the file. Remember the supported formats are .tsv, .csv, .dsv and .json. For example [this](https://github.com/rawgraphs/rawgraphs-app/blob/master/public/sample-datasets/Circle%20Packing%20-%20Most%20populated%20cities.tsv) is a public repository about urban population hosted on our repository-

2\. Click on “Raw” to access the URL. You will open a webpage with only the data in text format. Copy the URL of the webpage. It should be something like this:

> https://raw.githubusercontent.com/rawgraphs/rawgraphs-app/master/public/sample-datasets/Circle%20Packing%20-%20Most%20populated%20cities.tsv 

![](/uploads/learning/how-to-load-data-from-a-url-6.png)

3-Open RAWGraphs and select “Load from URL”. Paste the URL you have copied and click on "Load data".

If everything is correct you will see the table loaded in RAWGraphs and the message that all the rows have been parsed correctly. Click on “Refresh data from URL” to update the table if something has changed in the file hosted on Github.
