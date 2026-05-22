
FROM node:22-bookworm

WORKDIR /workspace

RUN apt-get update && apt-get install -y \
    git \
    bash \
    vim \
    curl \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable
RUN corepack prepare pnpm@11.2.2 --activate

RUN echo 'export PS1="tkb-dev:\\w# "' >> /root/.bashrc

CMD ["tail","-f","/dev/null"]

