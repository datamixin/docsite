---
sidebar_label: 'Handling Missing Data'
---

# Handling Missing Data
The difference between data found in many tutorials and data in the real world is that real-world data is rarely clean and homogeneous. In particular, many interesting datasets will have some amount of data missing. To make matters even more complicated, different data sources may indicate missing data in different ways.

In this section, we will discuss some general considerations for missing data, discuss how **Datawork** could handling missing data with only **one click**.

## Create Dataset
Create sample dataset from *Sample CSV* and choose for **US Adult Cencus**.

![CSV Dialog](/img/source-csv-dialog.PNG)

Click **OK**

![Instore Dialog](/img/csv-instore-dialog.PNG)

Click **OK**

## Access Preparation Page

![Instore Dialog](/img/missing-data-preparation-overview.PNG)

At workclass Column Profile, we can see there is a **?** value. this is called unknow data.
To remove this uknown data value, we can hover value in column profile for ? value, and click dropdown icon menu, and choose **Remove**.

![Remove Unknow Value](/img/remove-unknow-value.PNG)

After that, we can see if **?** value was removed in **workclass** column
![Remove Unknow Value](/img/missing-data-after-remove-unknown.PNG)


## Remove Nulls
Remove nulls are using for remove all null value on selected column. To using this function, 
you can click dropdown menu in column header, and click **Remove Nulls** 

## Remove Errors
Remove erros are using for remove all error value on selected column. To using this function, 
you can click dropdown menu in column header, and click **Remove Errors** 


