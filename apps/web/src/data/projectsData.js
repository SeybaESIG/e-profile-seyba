export const projectsData = [
  {
    id: 'shoplane-api',
    title: 'Shoplane API',
    shortDescription:
      'Production-ready e-commerce backend: Django REST Framework, PostgreSQL, Redis, JWT auth, payments, analytics, and Docker Compose.',
    fullDescription:
      'Shoplane API is a full e-commerce domain backend covering users, catalogue, cart, orders, and payments. It uses Django REST Framework with JWT (SimpleJWT) including refresh rotation and blacklist, PostgreSQL with concurrency-safe stock handling via select_for_update, and Redis for caching product listings and categories. The project ships with drf-spectacular OpenAPI/Swagger docs, structured JSON logging, optional Sentry, GitHub Actions CI, and a documented Docker Compose workflow. Admin analytics endpoints and management commands support sales insights and CSV exports.',
    technologies: [
      { name: 'Django REST Framework', icon: 'Layers' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'Redis', icon: 'DatabaseZap' },
      { name: 'JWT (SimpleJWT)', icon: 'Network' },
      { name: 'Docker', icon: 'Box' },
      { name: 'OpenAPI / Swagger', icon: 'Webhook' }
    ],
    features: [
      'Auth: register, login, refresh rotation, token verify, logout with refresh blacklist',
      'Catalogue: categories and products with filters, search, pagination; Redis-backed caching',
      'Cart and orders: cart CRUD, checkout from cart, order lifecycle with safe stock updates',
      'Payments: payment initiation and logs per order; admin payment event visibility',
      'Analytics & exports: sales stats, top products, average cart, CSV exports (admin)',
      'Quality: 333 automated tests with ~98% coverage; CI enforces minimum coverage',
      'Observability: structured logs, optional Sentry; health check and versioned API under /api/v1/'
    ],
    githubLink: 'https://github.com/SeybaESIG/shoplane-api',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200'
    ],
    date: '2026',
    featured: true
  },
  {
    id: 'task-manager-api',
    title: 'TaskManager API',
    shortDescription:
      'REST API for projects, tasks, files, and collaborators: Spring Boot, JWT, roles (ADMIN/USER), PostgreSQL, JPA, and full test pyramid.',
    fullDescription:
      'TaskManager API is a production-style task and project backend with layered architecture: controllers for HTTP contracts, services for business rules and ownership checks, and Spring Data JPA repositories with Specifications. It exposes JWT auth (register/login), user profile and admin user management, full CRUD for projects and nested tasks, file uploads scoped to tasks, and collaborator assignment with responsible-user rules. List endpoints support pagination, sorting, and filtering; errors are normalized through a global exception handler. OpenAPI/Swagger UI documents the surface, and GitHub Actions runs the suite against PostgreSQL in CI.',
    technologies: [
      { name: 'Java 17', icon: 'Coffee' },
      { name: 'Spring Boot', icon: 'Layers' },
      { name: 'Spring Security', icon: 'Network' },
      { name: 'Spring Data JPA', icon: 'Database' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'JWT', icon: 'Zap' },
      { name: 'Docker', icon: 'Box' },
      { name: 'OpenAPI / Swagger', icon: 'Webhook' }
    ],
    features: [
      'JWT authentication with register/login; ADMIN vs USER route protection',
      'Projects and tasks with ownership enforcement and paginated, filterable, sortable lists',
      'Per-task file upload, listing, download, and delete with access control',
      'Collaborators on tasks, including responsible-collaborator business rules',
      'Admin user directory with filtering/sorting; user self-service profile (GET/PATCH /users/me)',
      'Integration tests across controllers + DB; unit tests for services with Mockito',
      'CI on push/PR: PostgreSQL service container, Maven test with dependency caching'
    ],
    githubLink: 'https://github.com/SeybaESIG/taskmanager-api',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1200'
    ],
    date: '2026',
    featured: false
  },
  {
    id: 'air-carpooling-api',
    title: 'Air Carpooling API',
    shortDescription:
      'REST backend for an air rideshare-style platform: Node.js, Express, TypeScript, PostgreSQL, Sequelize, reference geo data, listings, and Jest tests.',
    fullDescription:
      'Backend for a platform connecting air travelers. Built with Express and TypeScript on Node.js 20+, using PostgreSQL 17 and Sequelize 6 with a large normalized schema (countries, cities, airports, users, roles, listings, messages, transactions, payments, ratings, subscriptions). Joi validates inputs; Winston handles logging; bcrypt and CORS support secure API usage. Reference datasets cover hundreds of countries, thousands of cities and airports, loaded via import scripts (including AirLabs for countries). The codebase includes extensive Jest coverage (130+ unit tests across controllers, routes, and schemas, plus integration runs).',
    technologies: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Express', icon: 'Zap' },
      { name: 'TypeScript', icon: 'Code2' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'Sequelize', icon: 'Layers' },
      { name: 'Jest', icon: 'Wind' },
      { name: 'JWT / bcrypt', icon: 'Network' },
      { name: 'Joi', icon: 'Webhook' }
    ],
    features: [
      'Reference APIs: countries, cities, airports at scale (252 / 2,950 / 3,016 records)',
      'User and role management; ride listings (annonces) with CRUD',
      'Domain modules for messages, transactions, payments, ratings, and subscriptions',
      'SQL schema and migrations; scripts to import pays, villes, and aéroports',
      'Validation with Joi; structured logging with Winston; bcrypt for passwords',
      'Large Sequelize model layer with centralized associations (TypeScript strict)',
      'Automated tests: 136+ passing unit tests in 12 suites; integration and coverage scripts'
    ],
    githubLink: 'https://github.com/SeybaESIG/air-carpooling-platform',
    images: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200'
    ],
    date: '2025',
    featured: false
  }
];