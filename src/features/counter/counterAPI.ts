/* eslint-disable import/prefer-default-export */
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    const ms: number = 500;
    setTimeout(() => resolve({ data: amount }), ms);
  });
}
