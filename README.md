#Single Resource Mongo and Express API
===

### Feature Tasks
* HTTP Server using `express`
* Two related models that uses `mongoose.Schema` and `mongoose.model`
* Uses the `body-parser` express middleware to parse the `req` body on `POST` and `PUT` requests
* Uses the npm `debug` module to log the functions and methods that are being used in your application
* Uses the express `Router` to create a route for doing **RESTFUL CRUD** operations 

## Server Endpoints
### `/api/resource-name`
* `POST` request
  * should pass data as stringifed JSON in the body of a post request to create a new resource

### `/api/resource-name/:id`
* `GET` request
  * should pass the id of a resource through the url endpoint to get a resource
* `PUT` request
  * should pass data as stringifed JSON in the body of a put request to overwrite a pre-existing resource
* `PATCH` request
    * should pass data as stringifed JSON in the body of a put request to update a pre-existing resource
* `DELETE` request
  * should pass the id of a resource though the url endpoint to delete a resource