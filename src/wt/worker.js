// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  self.addEventListener("message", (event) => {
    // Get data from the main thread
    const data = event.data;

    // Call the function to compute the result
    const result = nthFibonacci(data);

    // Send the result back to the main thread
    self.postMessage(result);
  });
};

sendResult();
