# Al Manar Backend - AI Coding Instructions

## Architecture Overview

This is an **Express.js + MongoDB + Socket.IO** backend for the Al Manar media platform. The project handles two primary domains:

### Core Components
- **Videos API** (`routes/videos.js`): Hero video management (upload/fetch) with Cloudinary integration
- **Messages API** (`routes/messages.js`): Contact form submissions with email notifications via Resend
- **Socket.IO**: Real-time client connection handling (initialized in `server.js`)

### Data Flow
1. **Uploads**: Videos submitted via multipart form → multer memory buffer → Cloudinary stream → MongoDB metadata
2. **Messaging**: Form input → Mongoose validation → MongoDB storage + Resend email (graceful degradation if API key missing)
3. **Retrieval**: Database query → JSON response with metadata

## Critical Developer Workflows

### Development & Testing
```bash
npm run dev       # Nodemon auto-reload on file changes
npm start         # Production run
```

**Key Environment Variables** (required in `.env`):
- `MONGO_URI` - MongoDB connection string
- `PORT` - Server port (defaults to 5000)
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- `RESEND_API_KEY` (optional - email sending gracefully disabled if missing)

### Project-Specific Patterns

#### 1. **Graceful API Degradation**
The Resend email integration uses lazy initialization with null-coalescing. If `RESEND_API_KEY` is missing, a warning logs but requests still succeed (email just won't send). Follow this pattern for optional external services.

#### 2. **Cloudinary Video Management**
- Only **one hero video** exists at a time - new uploads automatically delete the old one (see `routes/videos.js` line 28-32)
- Videos stored in `hero-video` folder in Cloudinary
- Use stream processing for video uploads: buffer → `PassThrough` → `upload_stream()` (avoid loading entire files into memory)
- Utility script: `importCloudinary.js` syncs Cloudinary's latest video into MongoDB

#### 3. **Mongoose Schema Patterns**
- Schemas use required validation for essential fields
- Use `timestamps: true` for auto-created/updated tracking (Video model does this; Message model uses explicit `createdAt`)
- Simple flat structures - no nested documents currently

#### 4. **Express Route Structure**
- Routes are modular: each domain gets a file (`routes/`) with its own router instance
- Input validation is explicit (check required fields, regex for email)
- Responses follow `{ success: boolean, data|error: ... }` contract
- Always wrap async handlers in try-catch; errors return 500 with message

#### 5. **Module System**
Project uses **ES modules** (`"type": "module"` in package.json). All imports use `.js` extensions and `import/export` syntax.

## Integration Points

### External Services
| Service | Usage | Failure Mode |
|---------|-------|---|
| **Cloudinary** | Video hosting, CDN | Requests fail with 500 if credentials missing |
| **Resend** | Email delivery | Gracefully logs warning, messages still save to DB |
| **MongoDB** | Persistent storage | Server fails to start if connection fails |

### Socket.IO
Currently minimal usage - just logs connect/disconnect events. Future extensions should emit events through the exported `io` instance in `server.js`.

## Common Development Tasks

- **Add new route**: Create `routes/newname.js`, export router, import & mount in `server.js`
- **Add new model**: Create `models/newname.js`, use Mongoose schema pattern, import in routes
- **Upload file**: Use same multer pattern from `routes/videos.js` (memory storage + stream to Cloudinary)
- **Add email**: Reuse `getResend()` lazy initialization pattern from `routes/messages.js`

## Known Issues & Workarounds

- (If you encounter any, document them here)
