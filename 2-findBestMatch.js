const findBestMatch = (k, arr) =>
  arr.reduce((prev, curr) =>
    Math.abs(curr - k) < Math.abs(prev - k) ? curr : prev
  );

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(findBestMatch(26, arr));
