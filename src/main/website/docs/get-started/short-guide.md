---
sidebar_label: '5 Minutes Tutorial'
sidebar_position: 1
---

# 5 Minutes Tutorial

Welcome to 5 Minutes Tutorial for Datamixin Application! In this short guide, we will provide a quick overview and help you to get started with basic understanding of our no code data science tools. Whether you're a non programmer or new to data science, this tutorial will walk through the fundamental concept and features of Datamixin in just in a few minutes. By the end of this tutorial, you'll have a solid foundation and leverage the capability of Datamixin to perform various data science task without any programming knowledge, just with point, click, drag and drop. Let's dive in and get started!

# Using Modeler Wizard
In this tutorial, we will walk you through the process of prediction the species of Iris flower using Modeler Wizard. The Model Wizard is a multipage dialog that will guide you through the steps of creating a machine learning model. Each step represent a commons step in the prediction process using machine learning.
1. Open the Datamatic application and navigate to **Home** from sidebar menu.
1. On the Home page menu click **Modeler Wizard** to open the wizard.
![img alt](/img/home-highlight-modeler-wizard.png)

## Step 1: Dataset
The first page of the wizard is **Dataset** page where presenting available supported data source type.
1. Select **Sample CSV** dataset source type.
![img alt](/img/modeler-wizard-dataset-init.png)
1. On **Sample File Dialog** select **Iris Flower** dataset under **Tabular Category**, click OK.
![img alt](/img/sample-file-dialog-iris.png)
1. Review sample dataset by inspecting the row count, column count and data type for each column.
![img alt](/img/modeler-wizard-dataset-iris.png)
1. Click **Next** to proceed to the **Inputs** page.

## Step 2: Inputs
On the second page, titled **Inputs**, define the features and target columns for your machine learning model.
1. Drag and drop appropriate columns from dataset in the right part of the wizard to the features and target variables in the center part of the wizard. For the Iris dataset, you can choose features like sepal length, sepal width, petal length, and petal width, while the target variable will be the species of the Iris flowers.
![img alt](/img/modeler-wizard-inputs-filled.png)
1. Click **Next** to procedd to the next page.

## Step 3: Learning
The third page in Modeler Wizard is **Learning** page where you will define the algorithm to be used for machine learning model.
1. Click **Select** button from **Algorithm** field to choose used algorithm.
1. From **Algorithm Selection Dialog** select **LogisticRegression**, review the detail and click once you confirm.
![img alt](/img/algorithm-selection-dialog-select-logistic-regression.png)
1. Review settings or parameters for the learning process.
![img alt](/img/modeler-wizard-learning-filled-logistic-regression.png)
1. Click **Next** to proceed to the next step

## Step 4: Model
On the fourth page, titled **Model**, you will create the machine learning model based on the chosen algorithm and the specified dataset.
1. Click **Play** button to train the model and view the result.
![img alt](/img/modeler-wizard-model-result.png)
1. Evaluate the model's performance using the evaluation metrics result. Analyze the accuracy, precision, recall, or any other relevant metrics.
1. Model is created and you are ready to perform actual prediction, proceed to next step by click **Next**.

## Step 5: Prediction
Finally, on the last page of the Modeler Wizard, titled **Prediction** you can perform actual predictions using new data.
1. Enter the values for the selected features (sepal length, sepal width, petal length, and petal width) for a new Iris sample.
1. Click the **Predict** button to obtain the predicted species for the new Iris sample based on the trained model.
![img alt](/img/modeler-wizard-prediction-result.png)
1. Click **Finish** to complete model creating process.

Congratulations! You have successfully completed the 5-minute tutorial on predicting the Iris dataset using the Datamatic Modeler Wizard. The Modeler Wizard provides an intuitive and guided approach to creating machine learning models. In the modeler sheet you can review the model or rebuild the model using **Model...** menu or try the prediction using **Tryout...** menu.