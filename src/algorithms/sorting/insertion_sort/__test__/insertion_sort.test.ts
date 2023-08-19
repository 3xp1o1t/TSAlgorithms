import { insertionSort } from "../insertion_sort";

describe("Insertion Sort", () => {
  it("should sort [66,32,1,-6,222] into [-6, 1, 32, 66, 222]", () => {
    const sortMe: Array<number> = [66, 32, 1, -6, 222];
    expect(insertionSort(sortMe)).toEqual([-6, 1, 32, 66, 222]);
  });

  // comprobamos con negativos.
  it("should sort [-55, -32, -1, 0, -33, -10] into [-55, -33, -32, -10, -1, 0]", () => {
    const sortMe: Array<number> = [-55, -32, -1, 0, -33, -10];
    expect(insertionSort(sortMe)).toEqual([-55, -33, -32, -10, -1, 0]);
  });
});
