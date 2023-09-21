export function bubbleSort(arr: Array<number>): Array<number> {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      // verificar cual es mayor, metodo sin pivote.
      if (arr[j] > arr[j + 1]) {
        //[1 > 2]?
        //gracias a js podemos usar un swap like python.
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //swap
      }
    }
  }
  return arr;
}
