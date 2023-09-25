# Task Tracking System API

This is the API for a Task Tracking System, which allows users to create, update, and retrieve tasks, as well as obtain task metrics.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create tasks with a title, description, and status.
- Update tasks.
- Retrieve all tasks with pagination.
- Get task metrics based on status.

## Technologies

- Node.js
- Express.js
- Sequelize (for MySQL)
- MySQL (or your preferred SQL database)
- TypeScript

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (at least v14)
- MySQL server installed and running (or your preferred SQL database)
- npm or yarn package manager

### Installation

Step-by-step instructions on how to install and set up your project.

1.  Clone this repository:

    ```bash
    git clone https://github.com/DeveloperGulam/task-tracking-system.git

    ```

2.  Navigate to the project directory:

    cd task-tracking-system-api

3.  Install dependencies:

    npm install

4.  Configure your database connection:

    Update the database configuration in src/config/database.ts to match your MySQL server settings.

5.  Start the server:

    Step 1:

        npm run compile

    Step 2:

        npm run server

## Usage

    . Use your preferred API client (e.g., Postman, Hoppscotch, Thunder Client) to interact with the API endpoints.
    . Refer to the API Endpoints section for details on available routes and parameters.

## API Endpoints

    1. Create a Task:

        . Endpoint: POST /api/tasks
        . Request Body: JSON

        {
            "title": "Task Title",
            "description": "Task Description",
            "status": "open" (optional)
        }

    2. Update a Task:

        . Endpoint: PATCH /api/tasks
        . Request Body: JSON

        {
            "title": "Updated Task Title",
            "description": "Updated Task Description",
            "status": "completed"
        }

    3. Get All Tasks with Pagination:

        . Endpoint: GET /api/tasks
        . Query Parameters:
            . page (optional): Page number (default: 1)
            . limit (optional): Number of tasks per page (default: 10)

    4. Get Task Metrics:

        Endpoint: GET /api/metrics/tasks

## Folder Structure

- [src](./src/)
  - [config](./src/config/)
  - [controllers](./src/controllers/)
  - [models](./src/models/)
  - [routes](./src/routes/)
  - [utils](./src/utils/)
  - [index.ts](./src/index.ts)
- [.package.json](./package.json)
- [README.md](./README.md)
- [tsconfig.json](./tsconfig.json)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your fork.
5. Submit a pull request to the main branch of the original repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
