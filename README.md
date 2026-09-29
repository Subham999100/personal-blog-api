# Personal Blog API

A production-oriented REST API for a personal blogging platform built with Node.js and TypeScript.

This project is being built from scratch with a focus on clean architecture, type safety, database integrity, request validation, and scalable backend engineering practices.

## Tech Stack

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma ORM
- Zod
- Docker

## Architecture

Client → Express → Routes → Controllers → Services → Prisma → PostgreSQL

The project follows a layered backend architecture where each layer has a clear responsibility:

- **Routes** handle API endpoint mapping.
- **Controllers** handle HTTP requests and responses.
- **Services** contain application and business logic.
- **Validation** ensures incoming data is valid before processing.
- **Prisma** handles database access.
- **PostgreSQL** provides persistent data storage.

## Features

- RESTful API
- Blog post creation
- Retrieve all posts
- Retrieve individual posts
- PostgreSQL database integration
- Prisma ORM and migrations
- Request validation with Zod
- Centralized error handling
- Request logging
- Type-safe development with TypeScript
- Docker-based PostgreSQL environment

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Check API health |
| GET | `/posts` | Get all posts |
| GET | `/posts/:id` | Get a specific post |
| POST | `/posts` | Create a new post |

## Example Request

POST `/posts`

Request body:

{
  "title": "My First Post",
  "slug": "my-first-post",
  "content": "Hello from my personal blog!"
}

## Example Response

{
  "post": {
    "id": 1,
    "title": "My First Post",
    "slug": "my-first-post",
    "content": "Hello from my personal blog!",
    "createdAt": "2026-09-27T14:32:05.900Z",
    "updatedAt": "2026-09-27T14:32:05.900Z"
  }
}

## Validation

Incoming post data is validated using Zod before reaching the service and database layers.

Invalid requests are rejected with a validation error instead of being passed directly to the database.

## Database

PostgreSQL is used as the primary database, with Prisma handling database access and migrations.

The current Post model contains:

- ID
- Title
- Slug
- Content
- Created timestamp
- Updated timestamp

The slug is unique to prevent duplicate post identifiers.


## Roadmap

The project will gradually expand with:

- Authentication and authorization
- User profiles
- Post editing and deletion
- Categories and tags
- Comments
- Likes and bookmarks
- Pagination and filtering
- Search
- Rate limiting
- Redis
- Background jobs
- Automated testing
- Observability
- CI/CD
- Production deployment

## Status

🚧 Active Development

The API is currently being developed incrementally with a focus on understanding and implementing real-world backend engineering practices.

## Author

Subham Patnaik
