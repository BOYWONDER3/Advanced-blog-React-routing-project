## This is an advanced blog project that includes Routing in React, The goal of this project is to utilize actions and forms to allow users to filter, create, and edit posts.

# API Information
The API has the following new endpoints:

- POST /posts - Create a new post
- PUT /posts/:id - Update a post
- GET /posts?q=<query>&userId=<userId> - Returns all of the posts that match the query and userId

# PROCEDURES 
1. Create a New Post page that renders out a form that allows the user to create a new post. The form also contains the following fields:
- Title
- Body
- Author (User)
2. Create an Edit Post page that renders out a form that allows the user to edit an existing post.
3. Add a filter to the Posts page that allows the user to filter the posts by a query.
4. Add a filter to the Posts page that allows the user to filter the posts by the user that wrote the post.
5. Disable the submit button on the New Post and Edit Post pages if the form is in the process of submitting.
6. Handle the following validations on the New Post and Edit Post pages:
- Title is required
- Body is required
- User is required

### This project is deployed in production, ( https://64cc764c03c12f41ea21d516--dashing-syrniki-ed1304.netlify.app/ ) and can be viewed here. Deployed in production is a client only demo which means all data on the page is stored locally instead of accessing an API, that is The API in this project isn't really like a real API as it is using json-server which is essentially an easy way to create a fake API/DB locally.