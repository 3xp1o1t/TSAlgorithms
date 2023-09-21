export function insertionSort(arr: Array<number>): Array<number> {
  // Inicimos en el index 1, ya que el 0 se considera "ordenado".
  for (let i = 1; i < arr.length; i++) {
    // Apartamos el valor actual para  ajustarlo despues.
    let currentItem = arr[i];
    // Apartamos el valor anterior al actual, es decir un indice menor.
    let j = i - 1;
    // En este punto, empezamos a iterar sobre el array.
    // Si el j el anterior del actual es mayor que el actual, lo ordenamos.
    while (j >= 0 && arr[j] > currentItem) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Entonces colocamos el item actual dentro del arreglo.
    arr[j + 1] = currentItem;
  }
  return arr;
}
