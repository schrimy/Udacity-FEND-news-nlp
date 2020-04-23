# Evaluate a news article with NLP

## Table or contents

* [Overview](#overview)
* [Instructions](#instructions)
* [Resources](#resources)
* [Goals](#goals)
* [Challenges](#challenges)

## Overview

A single page app that utilises an external NLP API to evaluate a news article via a URL.
Once the URL has been evaluated the relevant data is parsed and displayed on the UI. The 
app uses Webpack to package and optimise the project and service workers to display a 
cached version of the page should the server / internet not be available.

There's also some added validation for the URL via regex and some code to handle various 
potential errors.

## Instructions

* Upon opening the project run 'npm i' in the console to install all required dependencies.
* To open up the dev environment run 'npm run build-dev'.
* To open the production environment run 'npm start' and open 'localhost:8081' in browser.
* To build the files run 'npm build-prod' and it will produce a dist folder.
* To run Jest tests, run 'npm test'.
* To run the NLP API, enter a URL in the first input field and press submit.

## Resources

[Aylien, NLP](https://aylien.com/)

[Pexel, images](https://www.pexels.com/)

[GitHub - gist, regex](https://gist.github.com/rodneyrehm/8013067)

[MDN](https://developer.mozilla.org/en-US/)

[stack overflow](https://stackoverflow.com/)

## Goals

- To practice the implementation and use of external API's, sass, service workers, and the use of webpack.
- To make sure I used some validation / error checking throughout the app.
- Make sure it appears as it should across all major screen sizes.

## Challenges

- The main challenge I had was determining the use of Jest and writing the test scenarios. 
Finding the correct documentation for the specific scenario I had was very difficult. I eventually
got some tests running but still don't feel I have a full grasp on it yet.

- I also had a bit of a challenge determining the output from the NLP API, and how best to parse it. 
I feel there would have been a quicker and easier way to see what the returned JSON was than just printing 
it to console and therefore making it easier to decipher the parts to parse.