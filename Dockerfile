FROM mcr.microsoft.com/playwright:v1.56.1-jammy

ENV NODE_ENV=production
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC
ENV DISPLAY=:99
ENV PORT=17003
ENV DATA_DIR=/app/data
ENV EXTENSION_PATH=/app/extension
ENV PUBLIC_VNC_URL=http://localhost:17004

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    tzdata \
    fluxbox \
    x11vnc \
    xvfb \
    novnc \
    websockify \
  && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install --omit=dev

COPY src ./src
COPY scripts ./scripts
COPY extension ./extension

RUN chmod +x /app/scripts/docker-entrypoint.sh

EXPOSE 17003 7900 5900

CMD ["/app/scripts/docker-entrypoint.sh"]
