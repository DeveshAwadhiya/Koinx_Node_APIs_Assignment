# Koinx Node.js API Assignment

## Overview
This project provides a Node.js backend that retrieves real-time cryptocurrency data (Bitcoin, Matic, Ethereum) every 2 hours, stores it in MongoDB, and exposes APIs for fetching current stats and price deviations.

## Technologies Used
- **Node.js**: JavaScript runtime for backend development.
- **Express**: Web framework for API routing.
- **MongoDB**: Database for storing cryptocurrency data.
- **Axios**: For making external API requests.

## Live Application
You can access the live application here:  
[Live Application Link](https://node-js-koinx.de.r.appspot.com)

## Setup Instructions
1. **Clone the repository**:
    ```bash
    git clone https://github.com/DeveshAwadhiya/Koinx_Node_APIs_Assignment.git
    cd Koinx_Node_APIs_Assignment
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
    Create a `.env` file and add the following:
    ```bash
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    NODE_ENV=development
    ```

4. **Start the server**:
    ```bash
    npm start
    ```
    The server will start on `http://localhost:5000`.

## API Endpoints

### 1. Get Cryptocurrency Data
- **URL**: `/stats?coin=<coin_name>`
- **Method**: `GET`
- **Description**: Fetches the current data for a specified cryptocurrency.
- **Parameters**:
  - `coin` (required): The name of the cryptocurrency (e.g., `bitcoin`, `ethereum`).

#### Response:
```json
{
  "coin": "bitcoin",
  "price": 35000,
  "volume": 1000000000,
  "market_cap": 650000000000
}
```

**Example Request**:
```
GET http://localhost:5000/stats?coin=bitcoin
```

### 2. Get Cryptocurrency Price Deviation
- **URL**: `/deviation?coin=<coin_name>`
- **Method**: `GET`
- **Description**: Fetches the price deviation for the specified cryptocurrency.
- **Parameters**:
  - `coin` (required): The name of the cryptocurrency (e.g., `bitcoin`, `ethereum`).

#### Response:
```json
{
  "coin": "bitcoin",
  "deviation": 3.25
}
```

**Example Request**:
```
GET http://localhost:5000/deviation?coin=bitcoin
```

## Example Requests

- **Fetch Bitcoin Stats**:
    ```bash
    curl "http://localhost:5000/stats?coin=bitcoin"
    ```

- **Fetch Bitcoin Deviation**:
    ```bash
    curl "http://localhost:5000/deviation?coin=bitcoin"
    ```

## Error Handling
The API handles common errors with appropriate status codes and messages:

- **404 Not Found**: If the requested cryptocurrency is not available.
- **400 Bad Request**: If the coin parameter is missing in the request.
- **500 Internal Server Error**: If there is an issue with fetching data or the database connection.

**Example Error Response**:
```json
{
  "error": "Cryptocurrency not found"
}
```

## Conclusion
This project provides a simple backend to handle cryptocurrency data using Node.js and MongoDB, offering real-time stats and price deviations for various coins. It’s a great starting point to explore cryptocurrency data integration with APIs.
