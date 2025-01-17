# JavaScript Null/Undefined Handling

This repository demonstrates a common error in JavaScript: neglecting to handle null or undefined values. This can lead to runtime errors, especially when dealing with user input or external data sources.

The `bug.js` file contains code that does not correctly handle null or undefined values. The `bugSolution.js` file provides the corrected version.

## Bug
The original code doesn't explicitly check for null or undefined before accessing properties or performing operations.

## Solution
The corrected version adds explicit null and undefined checks using strict equality (`===`) to prevent runtime errors.
