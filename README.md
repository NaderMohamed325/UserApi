# User Management API

This repository contains a simple User Management API built with Node.js and Express. The API allows you to perform CRUD operations on user data stored in a JSON file.

## Features

- Get all users
- Get a user by ID
- Create a new user
- Update an existing user
- Delete a user

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will start on port 3000. You can access the API at `http://localhost:3000/api/users`.

## API Endpoints

### Get All Users

- **URL:** `/api/users`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "status": "success",
        "data": {
            "users": [...]
        }
    }
    ```

### Get User by ID

- **URL:** `/api/users/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "status": "success",
        "data": {
            "user": {...}
        }
    }
    ```

### Create User

- **URL:** `/api/users`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com"
    }
    ```
- **Response:**
    ```json
    {
        "status": "success",
        "message": "user has been added"
    }
    ```

### Update User

- **URL:** `/api/users/:id`
- **Method:** `PATCH`
- **Request Body:**
    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com"
    }
    ```
- **Response:**
    ```json
    {
        "status": "success",
        "message": "user updated successfully"
    }
    ```

### Delete User

- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
        "status": "success",
        "message": "user deleted successfully"
    }
    ```

## Project Structure

- `server.js`: Entry point of the application.
- `app.js`: Sets up the Express application and middleware.
- `routes/userRouter.js`: Defines the routes for user-related operations.
- `controller/userController.js`: Contains the logic for handling user-related requests.
- `data.json`: Stores the user and tour data.

## License

This project is licensed under the MIT License.
