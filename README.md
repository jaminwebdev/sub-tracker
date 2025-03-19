## Tech Stack
- Node.js/Express.js
- MongoDB
- Mongoose
- Arcjet


🔋 Features

✅ Advanced Rate Limiting and Bot Protection: with Arcjet that helps you secure the whole app.

✅ Database Modeling: Models and relationships using MongoDB & Mongoose.

✅ JWT Authentication: User CRUD operations and subscription management.

✅ Global Error Handling: Input validation and middleware integration.

✅ Logging Mechanisms: For better debugging and monitoring.

✅ Email Reminders: Automating smart email reminders with workflows using Upstash.

and many more, including code architecture and reusability

## 🏃‍♂️ Quick Start
Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (or use pnpm, yarn, bun - whatever flavor you like)
- Clone the Repo

git clone https://github.com/adrianhajdin/subscription-tracker-api.git
cd sub-tracker

### Installation

Install the project dependencies using npm:

npm install

### Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

```md
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

## Running the Project

`npm run dev`
Open http://localhost:5500 in your browser or any HTTP client to test the project.