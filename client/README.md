# docker-complex-demo - client

## NodeJS Commands

To create the React client app (from the project directory):
```
npx create-react-app client
```

To start the app (from the client directory):
```
npm run start
```
or
```
npm start
```

To run the unit tests (from the client directory):
```
npm run test
```
or
```
npm test
```

To create a production build (from the client directory):
```
npm run build
```

To clean the production build (from the client directory):
```
npm run clean
```

Note:
The `npm test`, `npm start`, `npm restart`, and `npm stop` commands are all aliases for `npm run xxx`.

For all other scripts use `npm run xxx`.

## Docker Commands
Build a tagged development image and see output:
```
docker build -f Dockerfile.dev -t boltgun69/docker-complex-demo-client --progress=plain .
```

Build a tagged production image and see output:
```
docker build -t boltgun69/docker-complex-demo-client --progress=plain .
```

Run development app (just NodeJS):
```
docker run -p 3000:3000 --name docker-complex-demo-client boltgun69/docker-complex-demo-client
```

Run production app (Nginx):
```
docker run -p 8080:80 --name docker-complex-demo-client boltgun69/docker-complex-demo-client
```

Run with port mapping and volumes:
```
docker run -p 3000:3000 -v /app/node_modules -v "$(pwd):/app" boltgun69/docker-complex-demo-client
```

To stop local container:
```
docker stop docker-complex-demo-client
```

The development app will be available at [http://localhost:3000](http://localhost:3000).

Explore the file system of the running container:
```
docker run -it boltgun69/docker-complex-demo-client sh
```

Run unit tests:
```
docker run -it boltgun69/docker-complex-demo-client npm run test
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
