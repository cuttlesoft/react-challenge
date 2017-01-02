Cuttlesoft React Challenge
==========================

Begin by forking this repository to your own GitHub account. You will be working in your own fork and your effort will be judged within that fork (no pull requests will be made).

The challenge is worth up to 100 points. Your effort will be scored using the total available points in each section.

## Installation

Install all application dependencies using `npm`. From your project's directory, run:
```
$ npm install
```

 - Note: Some steps will require you to install packages yourself. You will be instructed whether the packages are production or development specific and you will be expected to know how to install a package in each case.

 - Note: **DO NOT** commit your `node_modules` directory. Five (5) points will be deducted from your final score for each branch that has a `node_modules` directory.

## Running the Client and Server

Notice the `package.json` already has a `scripts` section.

To run the client:
```
$ npm start
```

To run the server (in a different terminal session):
```
$ webpack
```

 - Note: if you encounter an error when running the server, please be sure you have installed [`webpack`](https://webpack.github.io/) globally.

## Rules

1. Generally speaking, it's fairly expected that the solutions are usually a simple Google search away. We ask you to not copy and paste, but if you need to look for help, be ready to list the source in either your code comments or to your lead on this assignment. If you do copy-paste, know that part of this assignment is not only the source code, but also you being able to explain your implementation(s).

2. You are not to change any code outside of the `client/` directory. If you discover an error that is blocking you from continuing to make progress, and you believe that error is isolated to the `server/` directory, please contact admin@cuttlesoft.com immediately.

3. You are to use the [Material-UI](http://www.material-ui.com/#/) library to construct your components. Don't worry; you're not graded on your design abilities. Use existing components as a guide and you should be fine. Many pages just render a simple [`Card`](http://www.material-ui.com/#/components/card). It is completely acceptable to just repeat this; for that, here's a simplified example:
```javascript
<Card className="container">
    <CardTitle title="The Card Title" subtitle="The Card Subtitle." />
    <CardActions>
        <FlatButton>
            <Link to="/route">A Link</Link>
        </FlatButton>
    </CardActions>
</Card>
```


## Steps

This is an overview of all steps; you must complete all these steps in order, and be sure to follow every detail. Each step carries its own point value. You will find additional information for each step in a file called `Step X.md` that will be in each corresponding step's branch.

#### Step 1: Login Page and Component (10 pts.)
 1. Checkout the `steps/01_login` branch
 2. Using `SignUpPage.jsx` as an example, create a `LoginPage.jsx` that POSTs to `/auth/login`
 3. Make as many commits as you want, but commit your completed work using the message template: `"[#01 complete] <your commit message>"`

#### Step 2: Validation (15 pts.)
 1. Checkout `steps/02_validation` and merge your changes from `steps/01_sign_up`
 2. Using the `validator` package, add validation to the forms in `SignUpPage.jsx` and `LoginPage.jsx`
 3. Add specific details to validation requirements
 4. Make as many commits as you want, but commit your completed work using the message template: `"[#02 complete] <your commit message>"`

#### Step 3: JWT (35 pts.)
 1. Checkout `steps/03_jwt` and merge your changes from `steps/02_validation`
 2. Complete client side JWT transaction for login page
 3. Create an authenticated home-page and component
    - Should display the user's name and email, and a logout link in the header
    - Should only be accessible if JWT is valid, otherwise should error 403
 4. Make as many commits as you want, but commit your completed work using the message template: `"[#03 complete] <your commit message>"`

#### Step 4: Auth Content (35 pts.)
 1. Checkout `steps/04_auth_content` and merge your changes from `steps/03_jwt`
 2. Complete the dashboard page:
    - Should have protected content only an admin-level user can see
    - Should have unprotected content all users can see
 3. Make as many commits as you want, but commit your completed work using the message template: `"[#04 complete] <your commit message>"`

#### Step 5: Merge/Complete (5 pts.)
 1. Merge your completed assignment back into `master` using the commit message template: `"[#05 complete] <your commit message>"`

#### Bonus Points
- You can receive 5 extra bonus points for no errors/warnings with ESLint (ES5/JSX) and for following the [AirBnB React/JSX](https://github.com/airbnb/javascript/tree/master/react) style guide. The suggested implementation is to use a `.eslintrc.json` file. Read more at [eslint.org](http://eslint.org/)

- You can receive 5 extra bonus points if your effort is completed in 5 commits or less (use any git tools or commands you want).


## Final Submission

When you have completed your project, please send an email to admin@cuttlesoft.com with a link to your fork. Your final submission, that is your project repository hosted on GitHub, should only contain the branches `master` and `steps/*`.
