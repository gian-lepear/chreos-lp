# syntax=docker/dockerfile:1

# ── Build ──────────────────────────────────────────────────────────────────────
FROM node:24.15-slim AS builder

RUN corepack enable && corepack prepare pnpm@10.33.2 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Build args map to the env vars the Vite SEO plugin reads at build time
ARG ALLOW_INDEXING=false
ARG SITE_URL=""
ARG VITE_CONTACT_FORM_WHATSAPP_NUMBER=""

RUN ALLOW_INDEXING=${ALLOW_INDEXING} \
    SITE_URL=${SITE_URL} \
    VITE_CONTACT_FORM_WHATSAPP_NUMBER=${VITE_CONTACT_FORM_WHATSAPP_NUMBER} \
    pnpm build

# ── Serve ──────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
