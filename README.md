# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  <!-- - [Useful resources](#useful-resources) -->
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot


- Desktop screenshot
![My solution screenshot ](./solution-screenshot(desktop).png)

- Mobile Screenshot
![My solution screenshot ](./solution-screenshot(mobile).png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS Form Validation


### What I learned


#### Form Validation
I implemented form validation on the form to ensure that valid data is passed to the form and the imput feilds are not left blank. i also ensured that the correct format for the inputs were entered, especially for the email and name field.
The validation Functionlity is done based on a a single function that can be resued with any form field to ensure code refactoring.

Here's a snippet below

```js
function validateData(inputFieldName) {
    switch (inputFieldName) {
        case firstName:
        case lastName:
            validateNameData(inputFieldName);
            inputFieldName.onkeyup = () => {
                validateNameData(inputFieldName);
            };
            break;
          }
}

```
```js
function validateNameData(inputFieldName) {
    if (!inputFieldName.value.trim()) {
        errorFunction(inputFieldName);
    } else {
        successFunction(inputFieldName);
    }

    let namePattern = /^[A-Za-z]+$/;
    if (!inputFieldName.value.trim().match(namePattern)) {
        errorFunction(inputFieldName);
    } else {
        successFunction(inputFieldName);
    }
}
```
The form submit validation is then called and the validate data function is passed to it, taking the input feild name as the argument

```js
form.onsubmit = (e) => {
    e.preventDefault();

    validateData(firstName);
    validateData(lastName);

    // ...More codes here
}
``` 

#### DOM Manipulation
Working with the DOM was also learned and pracsed under the form validation as a means to display error messages and symbols

```js
function errorFunction(inputFieldName) {
    inputFieldName.classList.add("error");
    inputFieldName.style.backgroundImage = "url('images/icon-error.svg')";
    inputFieldName.parentElement.nextElementSibling.innerHTML = `${inputFieldName.placeholder} cannot be empty`;
}
```


<!-- ### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.** -->

## Author

- GitHub Profile - [Mharvel13](https://github.com/Mharvel13)
- Frontend Mentor - [Marvel Victor](https://www.frontendmentor.io/profile/Mharvel13)
- Twitter - [Marvel](https://twitter.com/Mharvel_O)

