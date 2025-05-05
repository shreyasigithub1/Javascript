function trackFitness(exercise, duration) {
  //Implement your promise here
  return new Promise(function (resolve, reject) {
    if (duration > 0) {
      setTimeout(function () {
        console.log(`You perfomed ${exercise} for ${duration} minutes`);
        resolve(duration);
      }, 5000);
    } else {
      reject("Invalid duration. Please provide a positive number.");
    }
  });
}
trackFitness("Running", 30)
  .then((duration) => {
    console.log(`Total duration: ${duration} minutes.`);
  })
  .catch((error) => {
    console.log(`Failed to track fitness: ${error}`);
  });

//1- If the duration is greater than 0, Print a message indicating the exercise you performed and the duration,
//      and then simulate the process of tracking your fitness by creating a promise that resolves after a delay of 5 seconds.
//      The resolved value should be the duration of the exercise.

// 2 - If the duration is less than 0, it should reject the promise with the statement "Invalid duration. Please provide a
//  positive number."
