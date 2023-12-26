# Water-Jug-Challenge Mauricio Garcia 2023

## Prerequisites 

Make sure you have the following prerequisites:
  * Node.js ( version 18.16.0 or above): [Download node.js](https://nodejs.org)
  * Git: [Download and install Git](https://git-scm.com/downloads)

## Installation Steps
Follow these steps to install and run the project on your computer:

  1. Clone this repository to your local machine. You can do this by downloading the ZIP file or using GIt in your terminal: (https://github.com/Maggnoone/water-jug-challenge.git)
     
  2. Open the terminal on you code editor or your computer and navigate to the following project directory:
  ```
  cd water-jug-challenge
  ```
     
  3. Install the project dependencies by running the following command:
   ```
   npm install
   ```
     
  4. Once all dependencies are installed, you can start the development server with the following command: 
  ```
  npm run dev
  ```
  5. By running the command, you'll be able to see a message in the terminal indicating the localhost server where the application is running. Typically, it will be [http://localhost:5173](http://localhost:5173)
  6. You will have to fill de Jug's capacities and the amount of water you want to measure.
  7. The app will output the steps required to measure the target amount using the given jugs and also how mucha gallons of water has each Jug.

## Description of the repository
The Water Jug Challenge is a classic puzzle that involves two jugs with different capacities, and the objective is to measure a specific amount of water using only these jugs. This repository provides a solution to the Water Jug Challenge using a simple algorithm.

The solution utilizes a while loop to iterate through different actions and track the state of the jugs. The algorithm performs operations such as filling, emptying, and transferring water between the jugs. It ensures the validity of the operations and outputs the sequence of steps and the final result.

By systematically iterating through the possible actions and updating the jug states, the algorithm explores different combinations until it reaches the desired measurement. This iterative approach allows for an efficient and effective solution to the Water Jug Challenge.

## Running Commands

In the project, you can run the following commands:

  * npm run dev: Starts the development server.
  * npm run build: Creates an optimized and production-ready build of the project.
  * npm run serve: Serves the optimized build of the project locally.
