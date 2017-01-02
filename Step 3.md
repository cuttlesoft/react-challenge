Step 3: JWT
================================

This step is worth a total of 35 points.

##Dependencies

You will need to update your npm packages. If you have any issues installing one or more of the packages please contact us at admin@cuttlesoft.com immediately.

####MongoDB

You will need a local instance of MongoDB running. Refer to the documentation at [Tutorials, MongoDB Community Edition](https://docs.mongodb.com/manual/installation/#mongodb-community-edition) for a walk-through on installing MongoDB. If you are using macOS, we strongly suggest using homebrew to [install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew). If you can not get an instance up and running, don't worry, we understand this is outside the scope of this challenge. If you need an instance setup, please email us at admin@cuttlesoft.com and we will launch a publicly available instance of MongoDB for you to use.

#####MongoDB Quick-Guide

Starting your MongoDb instance:
```
$ mongod
```

Querying the DB (see the [mongo Shell Quick Reference](https://docs.mongodb.com/manual/reference/mongo-shell/)):

 - The MongoDB cli is ran by simply typing `mongo` into a shell terminal.

 - connecting to the app's database
 ```
 $ mongo
 MongoDB shell version: 3.0.5
 connecting to: test
 > use react_challenge
 switched to db react_challenge
 ```
 - view the collections in your app's database
 ```
 > use react_challenge
 switched to db react_challenge
 > show collections
 system.indexes
 users
 ```

 - view all documents in a collection (for the user's collection, make sure you have created a new user from the interface or else the collection will be empty.)
 ```
 > db.users.find()
 { "_id" : ObjectId("58649c24d2682e46d80a59f5"), "email" : "foo.bear@bar.zap", "password" : "$2a$10$BprrLESl05tcWg6Mku/4me.ZAurQDZCfNNko8nFdTe.xQHwJJ9qbm", "name" : "Foo Bear", "__v" : 0 }
 ```

 - dropping a collection
 ```
 > db.users.drop()
 true
 ```


####Auth Module

You will notice a new folder in your client called `modules` which contains a module named `Auth.js`. In it you will find the class `Auth` with some helpful methods that you will need to accomplish some of this section's requirements.


##Requirements

 1. Checkout the `steps/03_jwt` branch, and be sure to merge in your changes from Step 2.

 2. The express server has evolved significantly in this branch. Be sure to update your packages with npm.
    - notice that there is now an authentication middleware.
    - the server has also added a new route module: `api`, with a single route defined: `\dashboard`

 3. Like in Step 1, you'll have to use existing code as an example to complete this step. Your client routes (`routes.js`) will likely have a conflict when you merge in your work from Step 2. You are required to merge this conflict correctly and gracefully.
    - notice the new `logout` and root routes. You will be merging in your `login` route
    - you will be updating the code of the root route so that it redirects to either the `HomePage` component, or the `Dashboard` component you will be completing in this step.

 4. You are to create a component and container for a dashboard page.
    - the container code has been started for you, but you are responsible for:
        1. correctly setting the value for a variable named `secretData` in the container's constructor
        2. correctly updating that variable using the `setState` method with a value from `xhr.response.*` in `componentDidMount`
        3. correctly updating the `render` method to inject `secretData` into your component
    - the Dashboard component accepts a variable, `secretData`. Be sure to interpolate this somewhere in your template.

 5. Update the `Base.jsx` component. Your `div.top-bar-right` should contain "at least" a link to the Sign Up page. You are to update this section of the top-bar element so that it displays links conditionally based on whether the user is logged in.
    - use the methods from `Auth.js` to correctly display `login` and `sign up` when no user is logged in, and display `logout` otherwise.

 6. Correctly change the code in the client's `routes.js` file so that the root path redirects users to the dashboard if they're authenticated. You will need to use the `Auth` class to accomplish this. The `logout` route has been done already.

 7. Have a high level understanding of how JWT works. You will be quizzed on it.

 8. Make as many commits as you want, but commit your completed work using the message template: `"[#03 complete] <your commit message>"`