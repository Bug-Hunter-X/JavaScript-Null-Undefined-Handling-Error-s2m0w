function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values
  }

  return a + b; // Perform operation only if both are defined
}
console.log(foo(5,6)); //11
console.log(foo(null,6)); //0
console.log(foo(undefined,6));//0