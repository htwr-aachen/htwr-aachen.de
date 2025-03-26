FROM --platform=$BUILDPLATFORM node:23-alpine AS base


ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# 3. Production image, copy all the files and run next
FROM base AS runner

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone /app/standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/static /app/standalone/.next/static
COPY --from=builder /app/public /app/standalone/public

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="::"

CMD ["node", "/app/standalone/server.js"]
