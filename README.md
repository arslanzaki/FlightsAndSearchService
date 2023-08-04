# Welcome to Flights Service

## Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of that downloaded project
- Create a new `env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

``````
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

``````

- Once you have added your db config as listed above, go to the source folder from your terminal and execute `npx sequelize db:create`


## DB Design
  - Airplane Table
    - id, model_number, capacity, created_at, updated_at
  - Flight
    - id, departure_city_id, destination_city_id, airport_id, departure, arrival, flight_number
  - Airport
    - id, name, city_id, address
  - City
    - id, name

  - A flight belongs to an aeroplane but one airplane can be used in multiple flights
  - A city can have many airports but one airport belongs to one city
  - One airport can have many flights, but a flight belongs to one airport