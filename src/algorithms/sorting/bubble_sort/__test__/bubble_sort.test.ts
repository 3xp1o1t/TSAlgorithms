import { bubbleSort } from "../bubble_sort";

describe("Bubble sort", () => {
  it("should sort 4,2,6,0 into 0,2,4,6", () => {
    let sortMe: Array<number> = [4, 2, 6, 0];
    expect(bubbleSort(sortMe)).toEqual([0, 2, 4, 6]);
  });

  it("should sort [10,23,2,51,1,74,23,1,13,0,666] into [0, 1, 1, 2, 10, 13, 23, 23, 51,74,666]", () => {
    let sortMe: Array<number> = [10, 23, 2, 51, 1, 74, 23, 1, 13, 0, 666];
    expect(bubbleSort(sortMe)).toEqual([
      0, 1, 1, 2, 10, 13, 23, 23, 51, 74, 666,
    ]);
  });

  // Inclusive con numeros negativos deberia de dar.
  it("should sort [-1, -5, -2, 0, 1, 66, -10] into [-10, -5, -2, -1, 0, 1, 66]", () => {
    let sortMe: Array<number> = [-1, -5, -2, 0, 1, 66, -10];
    expect(bubbleSort(sortMe)).toEqual([-10, -5, -2, -1, 0, 1, 66]);
  });
});
