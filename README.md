# Express Server with connection to the Mlab database

## Express server

Use ```yarn install``` comand to install neccessary dependencies. After that use ```yarn start``` command to start the server. It uses port provided form **process.env**. Otherwise it uses port 3000.\
It serves **index.html** file from the **views** folder on the root route. Routes are managed by express router.\
Static files such as **.css** and other **scripts** are served from the **public** directory.

## MongoDB connection

**_Warning! You need to provide your MLAB_URI inside .env file for this to work_**\
This boilerplate have starter files for working with Mongo Database (in this case mLab). There is route for crating an user provided. There's simple form for creating new user, which action leads to the **/newuser** route. This route uses **addUser** controller form **userController.js** file, and creates new user based on UserModel model. Then it redirects to the root route.
