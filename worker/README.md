# docker-complex-demo - worker

## NodeJS Commands

To start the app (from the worker directory):
```
npm run start
```
or
```
npm start
```

To start a development version of the app (from the worker directory):
```
npm run dev
```

Note:
The `npm test`, `npm start`, `npm restart`, and `npm stop` commands are all aliases for `npm run xxx`.

For all other scripts use `npm run xxx`.

## Docker Commands
Build a tagged development image and see output:
```
docker build -f Dockerfile.dev -t boltgun69/docker-complex-demo-worker --progress=plain .
```

Build a tagged production image and see output:
```
docker build -t boltgun69/docker-complex-demo-worker --progress=plain .
```

Run the app:
```
docker run --name docker-complex-demo-worker boltgun69/docker-complex-demo-worker
```

To stop local container:
```
docker stop docker-complex-demo-worker
```

Explore the file system of the running container:
```
docker run -it boltgun69/docker-complex-demo-worker sh
```

Build and run the development app and unit test containers:
```
docker compose -f docker-compose-dev.yml up --build
```

Stop the development app and unit test containers:
```
docker compose -f docker-compose-dev.yml down
```

Build and run the production app container:
```
docker compose up --build
```

Stop the production app container:
```
docker compose down
```
