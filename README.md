# Personal Blog API

A backend REST API for a personal blogging platform built with **Node.js, TypeScript, Express, PostgreSQL, Prisma, and Zod**.

The project is being developed with a production-oriented architecture, with a focus on clean separation of responsibilities, validation, database integrity, error handling, and maintainability.

---

## 🚀 Tech Stack

- **Node.js** — JavaScript runtime
- **TypeScript** — Static typing
- **Express** — HTTP server and REST API framework
- **PostgreSQL** — Relational database
- **Prisma** — ORM and database migrations
- **Zod** — Request validation
- **Docker** — Local PostgreSQL environment
- **Postman** — API testing

---

## 📁 Project Structure

```text
personal-blog-api/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── controller/
│   │   └── posts.controller.ts
│   │
│   ├── errors/
│   │   └── app-error.ts
│   │
│   ├── infrastructure/
│   │   └── database/
│   │       └── prisma.ts
│   │
│   ├── middleware/
│   │   ├── error-handler.ts
│   │   └── logger.ts
│   │
│   ├── routes/
│   │   └── posts.routes.ts
│   │
│   ├── services/
│   │   └── posts.service.ts
│   │
│   ├── validation/
│   │   └── posts.schema.ts
│   │
│   ├── generated/
│   │   └── prisma/
│   │
│   └── server.ts
│
├── .env
├── .gitignore
├── docker-compose.yml
├── package.json
├── package-lock.json
├── prisma.config.ts
└── tsconfig.json
