# Bookstore Management System API

## 📖 Project Overview
This is a **Bookstore Management System API** built using **Node.js** and **NestJS** with **PostgreSQL**. The API allows users to manage books, authors, and categories, with authentication and authorization.

## 🚀 Features
- **Books Management**: Create, read, update, delete books.
- **Authors Management**: Manage authors associated with books.
- **Categories Management**: Assign books to categories.
- **Search & Filtering**: Find books based on title, author, or category.
- **Authentication & Authorization**: JWT-based authentication for user access.
- **Soft Delete & Pagination (Planned)**: Manage deleted books and handle large datasets efficiently.
- **Unit Testing**: Basic test coverage using Jest.

## 🛠 Tech Stack
- **Framework**: NestJS (Node.js)
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT
- **Testing**: Jest

## 📂 Project Structure
```
src/
├── auth/              # Authentication module
├── books/             # Books module
├── authors/           # Authors module
├── categories/        # Categories module
├── user/              # User management module
├── main.ts            # Entry point
├── app.module.ts      # Root module
```

## 🛠 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/bookstore-api.git
cd bookstore-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```
DATABASE_URL=postgres://user:password@localhost:5432/bookstore_db
JWT_SECRET=your_secret_key
PORT=3000
```

### 4️⃣ Run Migrations
```sh
npm run migration:run
```

### 5️⃣ Start the Server
```sh
npm run start:dev
```
API will be running on **http://localhost:3000**

## 🧪 Running Tests
```sh
npm run test
```

## 📬 API Endpoints
| Method | Endpoint              | Description |
|--------|----------------------|-------------|
| POST   | /auth/signup         | Register a new user |
| POST   | /auth/login          | Authenticate user and get JWT |
| GET    | /books               | Get all books |
| POST   | /books               | Add a new book |
| GET    | /books/:id           | Get a book by ID |
| PATCH  | /books/:id           | Update book details |
| DELETE | /books/:id           | Delete a book |

_For the full API documentation, refer to the Swagger UI at:_
```sh
http://localhost:3000/api
```

## 📌 To-Do
- [ ] Implement Soft Delete for Books
- [ ] Add Pagination Support
- [ ] Improve Unit Test Coverage

## 🤝 Contributing
1. Fork the repo
2. Create a new branch (`feature-xyz`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📜 License
MIT License © 2025 Mohamed Eissa
