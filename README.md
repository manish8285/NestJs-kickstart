# NestJS Kickstart

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>

<p align="center">A robust boilerplate for NestJS/PostgreSQL projects with advanced features and best practices.</p>

## 🌟 Features

- 📚 Swagger API Documentation
- 🔐 Authority-based Authorization
- 🔑 JWT Authentication
- 🚦 Global Exception Handling
- 🌍 Environment-based Configuration
- 📧 Email Service with Verification
- 📝 Custom Logger Service
- 🗃️ TypeORM/PostgreSQL Implementation

## 🏗️ Project Structure

root/
├── configuration/
├── middleware/
├── models/
│ ├── repository/
│ │ └── base/
│ └── schema/
├── src/
└── utils/
├── dto/
├── filters/
├── logger/
├── responses/
└── validators/

### Directory Details

- `configuration/`: Contains environment-based configuration files
- `middleware/`: Houses custom middleware
- `models/`:
  - `repository/`: Repositories for database interactions
    - `base/`: Base repositories for single entity interactions
  - `schema/`: Entity definitions
- `src/`: Core application logic
- `utils/`: Common utilities and helpers
  - `dto/`: Data Transfer Objects
  - `filters/`: Custom exception filters
  - `logger/`: Custom logging service
  - `responses/`: Standardized response formats
  - `validators/`: Custom validators

## 🔗 Entity Relations

User <---> Role <---> Permissions (authority)
(many-to-many) (many-to-many)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- PostgreSQL

### Clone the Repository

```bash
git clone git remote add origin https://github.com/manish8285/NestJs-kickstart.git
cd nestjs-kickstart

Install Dependencies
bashCopynpm install

Run the Application
bashCopy# Development mode
npm run start:dev
# or
yarn start:dev

# Production mode
npm run start:prod
# or
yarn start:prod

🛣️ API Endpoints

User Register
User Login
Create Role (Admin only)
Create Permission (Admin only)
Assign Role to User (Admin only)
Assign Permission to Role (Admin only)
Verify Account/Email

For detailed API documentation, run the application and visit /api-docs.
📚 Documentation
For more detailed documentation on NestJS, visit https://docs.nestjs.com
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check issues page.
📜 License
This project is MIT licensed.
🙏 Acknowledgements

NestJS
TypeORM
PostgreSQL


Made with ❤️ by Manish
```
