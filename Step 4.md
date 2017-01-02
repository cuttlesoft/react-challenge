Step 4: Auth Content
================================

This step is worth a total of 35 points.

This step will allow you the most freedom of implementation compared to any of the previous steps. We want to see some creativity.

##Dependencies

This step updates the user object, so you should begin by dropping your user collection in the app's db, recall the Mongo Quick-Guide in Step 3:
 ```
 > db.users.drop()
 true
 ```

##Requirements

 1. Checkout `steps/04_auth_content` and merge your changes from `steps/03_jwt`

 2. Using the updated `user` object, you are to create a protected area of content on the `Dashboard` from the previous step. that only admin user's can see. To do this, note the updated user object now has a boolean attribute called `admin`:
 ```
 user: {
    name: "Foo Bear",
    email: "foo.bear@zap.com",
    password: ""$2a$10$Bprr...",
    admin: true
 }
 ```
    - Your restricted component should contain a heading of at least 3 (e.g. `<h3>`) or higher, with the copy "Admin Section".
    - All content, including any html code, that is restricted to the admin user should be completely gone when a non-admin user is logged in. Just flipping the visibility style will result in major loss of points for this section.

 3. Be ready to explain your implementation of this section. If you choose a specific pattern, be ready to walk us through it.

 4. Make as many commits as you want, but commit your completed work using the message template: `"[#04 complete] <your commit message>"`