---
title: "Data parsing options"
topic: 2. Data
updated: 2022-01-28T00:00:00
cover: /uploads/learning/data-parsing-options-cover.avif
order: 4
---

When you load your data in RAWGraphs you have some options on how the software should parse you dataset. This guide will guide you on what do they mean and how to use them. 

### Column separator

RAWGraphs is able to guess the character used to define the columns of the table. If this doesn't happen you wil see all the values in one column.  

![](/uploads/learning/data-parsing-options-1.png)

If this happen you can define the character and choose between Tab, Semicolon, Comma and Pipe.

![](/uploads/learning/data-parsing-options-2.png)

### Thousand and decimal separators

Data files containing locale-specific formats are frequently misinterpreted. For example a file containing numbers in French use commas to define decimals while in English decimals are defined by points/periods. RAWGraphs allows you to define the characters independently to parse the date correctly. 

If you don’t define it or the character is not correct, you might have a problem in setting the right data type. For instance if you define “,” for the thousand separators but your table use “.” the number 1.000.000 (one million) will be parsed as string and not as number. 

[![](/uploads/learning/data-parsing-options-3.png)](https://en.wikipedia.org/wiki/Decimal_separator#Usage_worldwide)

*Decimal separator worldwide usage in Hindu–Arabic numerals (source: <https://en.wikipedia.org/wiki/Decimal_separator#Usage_worldwide>)*

### Date Locale

Dates in RAWGraphs can be formatted in this way “DD Month YYYY”. Through this dropdown you can select the language used to define “Month”. If the language is not correct the column will be parsed as string and not as date.

### Data types

Once you have checked that all the separators are defined correctly, you can check how columns have been parsed and, if needed, change the data type. This step is important because some chart variables don’t accept all the data types.  The icon next to the column name define the data type of the columns.

If you need to change the data type you have to click on the icon and select the data type you want. If your column needs to be parsed as "Date" you need to specify the format used choosing one of the options you find in the dropdown.

![](/uploads/learning/data-parsing-options-4.gif)

If the column can be parsed with the new data type the message below the table you will have a message saying that the table rows have been successfully parsed. 

If the the column can’t be parsed with the new data type, all the cells containing an error will be highlighted and a warning message will appear below the table.

![](/uploads/learning/data-parsing-options-5.png)

### Change the value of a cell

If you want to change the value of a cell you can double click on a cell and write the new value. If the new value doesn’t correspond to the data type, the cell will be highlighted in yellow.
