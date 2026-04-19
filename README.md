# GameVault 🎮

A full-stack MERN game discovery & redirect platform. Browse trending, free, and low-end PC games. Every "Download" button redirects to the **official source** (Steam, Epic Games, Google Play, etc.) — no files are hosted.

## Tech Stack

| Layer    | Technology |
|----------|-----------|
| Frontend | React 18 + Vite + Tailwind CSS v4 |
| Backend  | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Auth     | JWT (admin-only) |
| State    | Context API + useReducer |
| HTTP     | Axios |

## Folder Structure

```
A $ H Major Project/
├── client/    # React frontend (port 5173)
└── server/    # Express API (port 5000)
```

## Quick Start

### 1. Configure MongoDB

Edit `server/.env` and replace the `MONGO_URI` placeholder:

```env
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/gamevault
```

> Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier) or a local MongoDB instance.

### 2. Start the Backend

```bash
cd server
npm run dev      # starts on http://localhost:5000
```

### 3. Seed the Database (30+ games)

```bash
cd server
npm run seed     # populates MongoDB with game data
```

### 4. Start the Frontend

```bash
cd client
npm run dev      # starts on http://localhost:5173
```

### 5. Register Admin (one-time)

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@gamevault.com","password":"admin123"}'
```

Then log in at **http://localhost:5173/admin/login**

## API Reference

| Method | Endpoint                          | Auth     | Description              |
|--------|-----------------------------------|----------|--------------------------|
| GET    | `/api/games`                      | Public   | All games (paginated)    |
| GET    | `/api/games/:id`                  | Public   | Single game + view++     |
| GET    | `/api/games/search?q=`            | Public   | Full-text search         |
| GET    | `/api/games/trending`             | Public   | Top trending games       |
| GET    | `/api/games/free`                 | Public   | Free games               |
| GET    | `/api/games/lowend`               | Public   | Low-end PC games         |
| POST   | `/api/games`                      | Admin    | Create a game            |
| PUT    | `/api/games/:id`                  | Admin    | Update a game            |
| DELETE | `/api/games/:id`                  | Admin    | Delete a game            |
| POST   | `/api/auth/login`                 | Public   | Admin login              |
| POST   | `/api/auth/register`              | Public*  | Register first admin     |
| GET    | `/api/auth/me`                    | Admin    | Get admin profile        |

## Deployment

### Frontend (Vercel / Netlify)
```bash
cd client && npm run build   # outputs to client/dist
```

### Backend (Railway / Render)
- Set `MONGO_URI`, `JWT_SECRET`, `NODE_ENV=production` in env vars
- Entry: `node server.js`
