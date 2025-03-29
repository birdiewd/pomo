# Rewards Network React Coding Challenge

## Problem Description
You are designing a new website to display all of the latest exciting space news.

Your challenge is to fetch articles from the Spacefilght news api and display them using React and Typescript.

## Directions:
This repository includes a basic React, Typescript and Vite project to get you started.
It has been tested with the following node and npm versions:
| | |
|-|-|
| Node | >= v20.5 |
| NPM | >= v9.8


After cloning to the project run the following commands to start up a development server with hot module reloading:
```shell
npm install
npm run dev
```

A few packages that we use at Rewards Network have been installed.
Feel free to use them or use any other package you prefer.
Keep in mind that we assess submissions primarily on correctness, maintainability and code cleanliness.

Use the `GET` `/v4/articles` endpoint from the Spaceflight News api to fetch articles to display.
See the open api specification [here](https://api.spaceflightnewsapi.net/v4/docs/#/articles/articles_list).
Use `?format=json` to return the results as json.

All the following requirements need to be met:

### Business Requirements:
* Show a dismissible welcome popup when the page loads. After the popup has been dismissed it should not show on subsequent page refreshes or renders.
* The initial list of articles should be fetched when the page loads.
* Fetch 8 articles at a time from the Spaceflight News api.
* Each article should be displayed as a separate item and include the following data points:
  * Article image using `image_url`
  * `title`
  * `summary`
* Clicking on an article item should open up the article in a new browser tab using the `url` property.
* The design should be mobile-first and responsive. It should support a minimum viewport width of 400px.
* When there are more articles (`next` is not null) show a button that will fetch the next page of articles.
* When there is a previous set of articles (`previous` is not null) show a button that will fetch the previous page of articles.
* For each list of articles that are shown, apply a "featured" treatment to highlight one random article.

### Tests
Test can be run using the following command:
```shell
npm test
```

### Type Checking
The project can be type checked using the following command:
```shell
npm run tsc
```

## Submitting your solution
* Please submit your solution along with all source, test, documentation, and build support files in this repository.
* Create a new branch for your changes, then create a new Merge Request from your branch into `main` so we can review your submission.
* Email Shawn Steward <ssteward@rewardsnetwork.com> to let us know when you're finished.
* Our dev team will review your Merge Request and if we like what we see, we'll follow up with you to go over your code in more detail.
* The project structure is up to you, but assume that this code will be deployed to production and your peers will be maintaining the code going forward.

## Criteria
You will primarily be judged on the code directly related to the implementation of the stated problem and requirements:

* Correct implementation of requirements
* Code Legibility
* Testability and test coverage
* Use of Typescript
* Ease of Maintenance
* Use of recognizable best practices and patterns
* Submission of a working solution with basic usage instructions

Secondary evaluation criteria include the usage and evident knowledge of the tools, utilities, frameworks,and methodologies specified in the job description.

We value creativity and initiative to learn new technology; however, be advised that candidates that focus solely on the primary criteria will be more successful than candidates that focus instead on intricate interface or usage of a breadth of technologies.
