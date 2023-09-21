import { mergeSort } from "../merge_sort";

describe("Merge Sort", () => {
  it("should return 0 if array length = 1", () => {
    const sortMe: Array<number> = [0];
    expect(mergeSort(sortMe)).toEqual([0]);
  });

  it("should sort [-1, 33, -200, 9, 6, 4] into [-200, -1, 4, 6, 9, 33]", () => {
    const sortMe: Array<number> = [-1, 33, -200, 9, 6, 4];
    expect(mergeSort(sortMe)).toEqual([-200, -1, 4, 6, 9, 33]);
  });

  it("should sort a big array in less time", () => {
    const sortMe: Array<number> = [
      60, 87, 44, 59, -89, 71, 89, 78, 28, 66, 82, 83, 18, 42, 80, 68, 49, 49,
      99, -27, 88, 6, 45, 15, 53, 4, -35, 62, 49, 88,
    ];
    expect(mergeSort(sortMe)).toEqual([
      -89, -35, -27, 4, 6, 15, 18, 28, 42, 44, 45, 49, 49, 49, 53, 59, 60, 62,
      66, 68, 71, 78, 80, 82, 83, 87, 88, 88, 89, 99,
    ]);
  });
});
