# Salary Hero

The Salary Hero is a Node.js application designed to calculate worker balances on a daily basis. It provides a scalable solution for determining how much each user can withdraw based on their working days in the month.

## High-Level Design for Components/Infrastructure

The Salary Hero system comprises three main components: the scheduler, the APIs, and the database. Each component will be encapsulated within its own Docker container for easy deployment and management. Here's the updated high-level overview:

**1. Scheduler:**

- The scheduler component is responsible for triggering the balance calculation job at a specified frequency, such as daily at midnight.
- It utilizes the `node-schedule` library to schedule and execute the balance calculation job.
- The scheduler retrieves the list of workers to be processed.
- The scheduler runs within a Docker container, allowing for easy deployment and scaling.

**2. The APIs:**

- The APIs component provides RESTful endpoints for managing workers and tracking attendance.
- It exposes endpoints such as GET `salary-hero/v1/workers/:workerId/balance` to retrieve a worker's balance, POST `salary-hero/v1/workers` to create a new worker, and POST `salary-hero/v1/attendances` to record worker attendance.
- The APIs interact with the database to perform CRUD operations on worker data and attendance records.
- The APIs run within a Docker container, enabling isolated execution and seamless deployment across environments.

**3. PostgreSQL Database:**

- PostgreSQL is used as the database to store worker information, attendance records, and any balance histories of the worker.
- It runs within its own Docker container to ensure data persistence and easy setup.
  <img src="https://i.imgur.com/TRUKgXf.png" alt="Database design">

### Solution Rationale

By incorporating PostgreSQL as the database, we ensure data persistence and reliability for the Salary Hero system. Using Docker containers for each component simplifies deployment and management, while Docker Compose orchestrates the deployment of multiple containers.

## Project Configuration and Usage

### Requirements

- Node.js
- Express.js
- Typescript
- Docker

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.

```bash
cd salary-hero
```

3. Copy environment file:

```bash
cp .env.example .env
```

4. Build service image:

```bash
docker build -t salary-hero .
```

5. Build container:

```bash
docker-compose up --build -d
```

### Manual Testing Procedure

#### Prerequisites

- Access to the Salary Hero system environment.
- Postman or similar API testing tool installed.

#### Test Steps

1. Create Worker via API `/salary-hero/v1/workers`.
2. Attend via API `/salary-hero/v1/attendances`.
3. In your local change Environment Variable to run the scheduler **_every minute_**

```
CALCULATE_BALANCE_SCHEDULE_TIME = */1 * * * *
```

4. Run docker-compose again to apply the change to the scheduler.

By following the steps outlined in this document, you can manually test the flow in the Salary Hero system. Verify that each step is executed successfully to ensure the system functions as expected.
