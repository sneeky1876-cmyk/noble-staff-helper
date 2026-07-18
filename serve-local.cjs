"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const HOST = "127.0.0.1";
const PORT = Number.parseInt(process.env.NOBLE_PORT || "4242", 10);

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".cjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(body);
}

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://${HOST}:${PORT}`);
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return null;
  }

  if (pathname === "/") pathname = "/index.html";
  const resolved = path.resolve(ROOT, `.${pathname}`);
  const withinRoot = resolved === ROOT || resolved.startsWith(`${ROOT}${path.sep}`);
  return withinRoot ? resolved : null;
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    send(response, 405, "Method not allowed");
    return;
  }

  const requestedPath = resolveRequestPath(request.url || "/");
  if (!requestedPath) {
    send(response, 403, "Forbidden");
    return;
  }

  fs.stat(requestedPath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      send(response, 404, "Not found");
      return;
    }

    const type = MIME_TYPES[path.extname(requestedPath).toLowerCase()] || "application/octet-stream";
    response.writeHead(200, {
      "Content-Type": type,
      "Content-Length": stats.size,
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    const stream = fs.createReadStream(requestedPath);
    stream.on("error", () => {
      if (!response.headersSent) send(response, 500, "Could not read file");
      else response.destroy();
    });
    stream.pipe(response);
  });
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Set NOBLE_PORT to another port and try again.`);
  } else {
    console.error(error);
  }
  process.exitCode = 1;
});

server.listen(PORT, HOST, () => {
  console.log("");
  console.log("  Noble Staff Helper is running locally");
  console.log(`  http://${HOST}:${PORT}`);
  console.log("");
  console.log("  Keep this window open. Press Ctrl+C to stop.");
  console.log("");
});

function stopServer() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", stopServer);
process.on("SIGTERM", stopServer);
