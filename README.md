# MapBook
Used to allow employees to book MAP training courses.

## DB Setup
Export the DB connection parameters (application DB user and password):

```
export DB_USER=map_book
export DB_PASS=password
cd db
./setup.sh
```

## Running the application
### Backend (express)
Export the DB connection parameters (application DB user and password) and start the Node application. It will run on http://localhost:8002.

```
cd express
npm install
export DB_USER=map_book
export DB_PASS=password
nodemon index.js
```

### Frontend (angular)
```
cd mapbook-app
npm install
npm start
```
This will start the frontend on http://localhost:8001.