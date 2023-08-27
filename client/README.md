# Project Setup Guide

This repository contains separate directories for both the frontend and backend components of the project. The frontend is responsible for the user interface, while the backend handles data processing and communication with the database.

## Prerequisites

Before running the frontend (client), ensure that the backend is up and running. Additionally, you need to create a MongoDB database to store the required data.

### Creating the Database

1. **Download and Install MongoDB:** Install MongoDB and MongoDB Compass on your system.

2. **Connect MongoDB:** Connect MongoDB to the default settings: `localhost:27017`.

3. **Create a Database:** In MongoDB Compass, create a database named "BooksCatalogue".

4. **Create a Collection:** Within the "BooksCatalogue" database, create a collection named "Books".

5. **Populate the Collection:** You can import the sample data from the `booksData.json` file included in the backend repository.

## Running the Backend

Follow these steps to run the backend server:

1. **Navigate to Backend:** Open the backend repository (Server) in Visual Studio Code.

2. **Run the Server:** In the terminal, run the following command: `npm run dev`.

3. **Server Status:** You should see the following message in the terminal: "App is listening on [http://localhost:5000].

## Running the Frontend

Here's how you can run the frontend application:

1. **Navigate to Frontend:** Open the frontend repository (Client) in Visual Studio Code.

2. **Run the Application:** In the terminal, execute the command: `npm run start`.

3. **Access the Application:** The project will be accessible in your web browser at: [http://localhost:3000].

Feel free to explore and enjoy the project!

## Feedback and Contributions

If you encounter any issues or have suggestions for improvement, please feel free to open an issue or create a pull request. We appreciate your feedback!

