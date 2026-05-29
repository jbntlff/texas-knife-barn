FROM node:22-bookworm

WORKDIR /workspace

USER root

RUN apt-get update && apt-get install -y \
    bash \
    ca-certificates \
    curl \
    git \
    gnupg \
    lsb-release \
    openssl \
    vim \
    && rm -rf /var/lib/apt/lists/*

# install modern docker cli
RUN mkdir -p /etc/apt/keyrings

RUN curl -fsSL https://download.docker.com/linux/debian/gpg | \
    gpg --dearmor -o /etc/apt/keyrings/docker.gpg

RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian bookworm stable" \
    > /etc/apt/sources.list.d/docker.list

RUN apt-get update && apt-get install -y docker-ce-cli

# install pnpm
RUN npm install -g pnpm@11.2.2

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# create pnpm dirs
RUN mkdir -p /pnpm/store

# install supabase cli
RUN npm install -g supabase

# prepare permissions before switching users
RUN chown -R node:node /workspace /pnpm

USER node

RUN echo 'export PS1="tkb-dev:\\w$ "' >> /home/node/.bashrc

RUN git config --global --add safe.directory /workspace

CMD ["tail", "-f", "/dev/null"]

