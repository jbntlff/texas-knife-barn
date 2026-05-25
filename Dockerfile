
FROM node:22-bookworm

WORKDIR /workspace

RUN apt-get update && apt-get install -y \
    bash \
    ca-certificates \
    curl \
    git \
    openssl \
    vim \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm@11.2.2
RUN pnpm --version

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# Create pnpm dirs
RUN mkdir -p /pnpm/store

# Give ownership to node user
RUN chown -R node:node /workspace /pnpm

USER node

RUN echo 'export PS1="tkb-dev:\\w$ "' >> /home/node/.bashrc

CMD ["tail", "-f", "/dev/null"]

