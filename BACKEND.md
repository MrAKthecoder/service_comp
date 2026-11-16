# Local backend and admin

Requires Node 24. Run `node server/setup.mjs` once, `npm run server` in one terminal and `npm run dev -- --port 5176` in another.

Open http://127.0.0.1:5176/admin. Local credentials are in server/data/admin-access.txt (excluded from Git). Passwords are stored as salted scrypt hashes, sessions expire after 8 hours, and all enquiry management endpoints require authentication. There is no public registration.

The dashboard supports search, status filtering, details, and New/Contacted/Closed updates. Demo preview is browser-only sample data; it does not insert fake enquiries into the database.

SQLite lives at server/data/enquiries.sqlite. Back up the database with SQLite backup tooling or stop the API before copying the data directory. Do not delete this directory when deploying. `npm run enquiries` reads stored enquiries locally.

Run API checks with `node --test server/api.test.mjs`.

This is a local demonstration, not a deployed public backend. Before production, configure HTTPS, APP_ORIGIN to the exact website origin, NODE_ENV=production, a persistent database volume, backups, and a reverse proxy for /api. Review proxy rate limiting for real client addresses. Email notifications are not connected yet: an email provider and destination inbox are needed. Enquiries are available in the dashboard regardless.
