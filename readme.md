# Docker example

This repo is for demo Docker

## How to install

1. Git clone this repo

   ```sh
   git clone git@github.com:pataruco/docker-example.git
   ```

2. Install dependencies

   ```sh
   pnpm install
   ```

## How to run it

```sh
pnpm start
```

### With Docker 🐳

1. Checkout to branch `solution`
   ```sh
   git checkout solution
   ```
2. Build image with a given `NAME`
   ```sh
   docker build -t <NAME> .
   ```
3. Run image
   ```sh
   docker run -p 5001:5001 <NAME>
   ```
4. 🚀
