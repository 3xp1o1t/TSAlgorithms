function swap(arr: Array<number>, i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr: Array<number>, left: number, right: number) {
  let pivot = arr[left];
  let i = left;
  let j = right;

  while (i < j) {
    while (arr[i] <= pivot && i < right) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, left, j);
  return j;
}

export function quickSort(arr: Array<number>, start: number, end: number) {
  if (start < end) {
    let p = partition(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
  }
  return arr;
}
