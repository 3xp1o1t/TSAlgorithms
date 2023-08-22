export function selectionSort(arr: Array<number>): Array<number> {
  // [5, 7, 1, 2, 10]
  for (let i = 0; i < arr.length; i++) {
    let minIndex: number = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i != minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

function swap(arr: Array<number>, i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
