FROM node:18

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

COPY . . 

RUN pnpm install

EXPOSE 5001

ENV PORT=5001
ENV HOST=127.0.0.1

ENTRYPOINT [ "pnpm" ]

CMD ["start"]
