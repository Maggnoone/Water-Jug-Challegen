import { useState } from "react";

const WaterJugChallenge = () => {
  // Set variables from each Jug, Taget requested and Steps to solve the problem
  const [jugACapacity, setJugACapacity] = useState(0);
  const [jugBCapacity, setJugBCapacity] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [steps, setSteps] = useState([]);

  // Function to check if there is a solution for the given values
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  const hasSolution = () =>
    targetAmount % gcd(jugACapacity, jugBCapacity) === 0;

    //Function to solve thw water jug challenge
  const solveWaterJugChallenge = () => {
    // Check if the problem has a solution
    if (targetAmount > jugACapacity + jugBCapacity || !hasSolution()) {
      setSteps([]);
      return;
    }
    
    // Set variables from each Jug
    const newSteps = [];
    let jugAAmount = 0;
    let jugBAmount = 0;
    
    // Start the bucle to deterine the steps needed to reach the water measured asked
    while (jugAAmount !== targetAmount && jugBAmount !== targetAmount) {
      
      // Check if the targetAmount is higher than the Jug's capacities
      if (targetAmount > jugACapacity && targetAmount > jugBCapacity) {
        setSteps(['No solution possible. Please check the input values.'])
        return
      }
      
      // Check if the capacity of jug A is lower than jug B to start the solution of the problem
      if (jugACapacity < jugBCapacity) {
            // Check if Jug A is empty to fill full it
            if (jugAAmount === 0) {
            newSteps.push(`Fill full Jug A with ${jugACapacity} gallons`);
            jugAAmount = jugACapacity;
            // Empty the Jug B if it is Full
          } else if (jugBAmount === jugBCapacity) {
            newSteps.push(`Empty Jug B (${jugBCapacity}) gallons`);
            jugBAmount = 0;
            // Calculate the amount of water transfered from the Jug A to Jug B and transfered it to the other Jug
          } else {
            const transferedAmount = Math.min(
              jugAAmount,
              jugBCapacity - jugBAmount
            );
            jugAAmount -= transferedAmount;
            jugBAmount += transferedAmount;
            newSteps.push(
              `Transfer ${transferedAmount} gallons of water from Jug A to Jug B (Jug B has now ${jugBAmount} gallons, and Jug A has ${jugAAmount} gallons)`
            );
          }
      } 

      // Check if the capacity of jug B is lower than jug A to start the solution of the problem
      if (jugBCapacity < jugACapacity) {
            // Check if Jug B is empty to fill full it
            if (jugBAmount === 0) {
              jugBAmount = jugBCapacity;
              newSteps.push(`Fill full Jug B with ${jugBCapacity} gallons`);
            // Empty the Jug A if it is Full
          } else if (jugAAmount === jugACapacity) {
            jugAAmount = 0;
            newSteps.push(`Empty Jug A (${jugACapacity}) gallons`);
            // Calculate the amount of water transfered from the Jug B to Jug A and transfered it to the other Jug
          } else {
            const transferedAmount = Math.min(
              jugBAmount,
              jugACapacity - jugAAmount
            );
            jugBAmount -= transferedAmount;
            jugAAmount += transferedAmount;
            newSteps.push(
              `Transfer ${transferedAmount} gallons of water from Jug B to Jug A (Jug A has now ${jugAAmount} gallons, and Jug B has ${jugBAmount})`
            );
          }
      } 
    }

    // Push the final result into the steps array and return steps
    newSteps.push(
      `Result: Jug A contains ${jugAAmount} gallons and Jug B contains ${jugBAmount} gallons.`
    );
    setSteps(newSteps);
  };

  return (
    <div className="container">
      <h2>Water Jug Challenge</h2>
      <div>
        <label>Jug A Capacity:</label>
        <input
          type="number"
          value={jugACapacity}
          onChange={(e) => setJugACapacity(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Jug B Capacity:</label>
        <input
          type="number"
          value={jugBCapacity}
          onChange={(e) => setJugBCapacity(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Target Amount:</label>
        <input
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(parseInt(e.target.value))}
        />
      </div>
      <button onClick={() => solveWaterJugChallenge()}>Solve</button>
      <div>
        {steps.length > 0 ? (
          <ul>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        ) : (
          (targetAmount > jugACapacity && targetAmount > jugBCapacity) ? <p>{steps}</p> : <p>Enter jug capacities</p>
        )}
      </div>
    </div>
  );
};

export default WaterJugChallenge;