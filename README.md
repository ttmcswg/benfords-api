# Benford's Analysis API

The Benford's Analysis API is a RESTful service that performs Benford's Law analysis on historic trading volumes fetched from the Yahoo Finance API.

## Getting Started

### Prerequisites

- Node.js (14.x or later)
- npm (Node Package Manager)
- Docker (optional)

### Installation

Clone the repository from GitHub:

```bash
git clone https://github.com/ttmcswg/benfords-api.git
cd benfords-analysis-api
```

Install the necessary dependencies using npm:

```bash
npm install
```

Before running the API service, make sure you have obtained the necessary credentials using RapidAPI and set up the **.env** file in the root directory with your credentials. The **.env** file should contain the following:

```.env
RAPID_API_KEY=<YOUR_RAPID_API_KEY>
```

## Running Locally

To run the API service locally without Docker, use the following command:

```bash
npm run start 
```

## Running with Docker

Alternatively, you can run the API service using Docker. Build the Docker image and run the container with the following commands:

```bash
docker build -t benfords-analysis-api .
docker run -p 3000:3000 -d benfords-analysis-api
```

The API will be available at http://localhost:3000.

## Usage 
### API Endpoints

The API provides the following endpoint:

* **GET** `stock/trading-volume-analysis?symbol=:symbol`: Fetches the historic trading volumes for the specified stock symbol (e.g., GME) from the Yahoo Finance API and performs Benford's Law analysis. It returns the analysis results and how closely the trading volume dataset matches Benford's Law.

## Test

To run the tests for the API service, use the following command:

```bash
npm test
```
