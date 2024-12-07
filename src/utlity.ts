export function add(a: number = 1, b: number = 1) {
  return a + b;
}

export function resultOrThrow(a: number) {
  if (a === 1) {
    throw new Error("1 is  not accepted");
  }
}

export function getValue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}
