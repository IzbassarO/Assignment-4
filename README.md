Project Name: Art Gallery Express

Description:
This project is an Art Gallery Express application built with Node.js and Express.js. It provides functionalities to view artwork images, manage blog posts, and administer the application.

Setup:

Clone the repository: git clone by clicking the button git clone
Install dependencies: npm install
Create a .env file based on .env.example and configure necessary environment variables.
Start the server: node index.js or npm start
Visit http://localhost:3000 in your browser.
Features:

Artwork Gallery: View a collection of artwork images fetched from Unsplash API.
Blog: Access and manage blog posts.
Authentication: Users can sign in, register, and log out. Admin functionality is available for privileged users.
Dependencies:

Express: Web framework for Node.js
dotenv: Loads environment variables from a .env file
ejs: Templating engine for generating HTML markup
express-session: Middleware for managing sessions in Express
mongoose: MongoDB object modeling for Node.js
axios: Promise-based HTTP client for making requests to external APIs
Project Structure:

index.js: Entry point of the application. Sets up server configurations and middleware.
package.json: Contains project metadata and dependencies.
index.ejs: Main view template for rendering HTML content.
main.js: Router for handling main routes such as homepage and authentication.
routes: Directory containing route handlers for different parts of the application.
middlewares: Directory containing custom middleware functions.
public: Directory for storing static files such as CSS, JavaScript, and images.


database.js: This file sets up a connection to MongoDB using Mongoose.
blog.js: This file contains HTML markup for displaying a blog homepage. It includes styles, navigation, post display, and language selection.
auth.js: This file handles user authentication, including login, registration, and logout functionalities.
artwork.js: This file retrieves artwork data from an external API and renders it on a webpage.
admin.js: This file handles administrative functionalities like displaying users, adding users, editing users, and deleting users.
addPost.js: This file manages adding new blog posts, including displaying a form for adding posts, handling post submission with image uploads, serving images from the database, and deleting posts.


dependencies: Lists the packages your project depends on, along with their versions. Here are some of the dependencies in your project:
axios: A promise-based HTTP client for the browser and Node.js.
bcryptjs: A library for hashing passwords.
dotenv: Loads environment variables from a .env file into process.env.
ejs: Embedded JavaScript templates for rendering HTML markup.
express: Web application framework for Node.js.
express-session: Middleware for managing sessions in Express.js.
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
multer: Middleware for handling multipart/form-data, primarily used for file uploads.
node-fetch: A lightweight module for making HTTP requests.
nodemon: Utility that automatically restarts the Node.js application when file changes are detected during development.
pdfkit: A PDF generation library for Node.js.

Usage:

Customize routes, views, and functionalities according to your requirements.
Add more features like user profile management, commenting, or social sharing.
Contributing:

Fork the repository.
Create a new branch: git checkout -b feature-name
Make your changes and commit: git commit -m 'Add new feature'
Push to the branch: git push origin feature-name
Submit a pull request.


Author:
Izbassar Orynbassar
