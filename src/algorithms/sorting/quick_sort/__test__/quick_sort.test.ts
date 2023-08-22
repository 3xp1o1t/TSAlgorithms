import { quickSort } from "../quick_sort";

describe("Quicksort", () => {
  it("should sort [6, 3, 1, 2, -1, 4] into [-1, 1, 2, 3, 4, 6]", () => {
    const sortMe: Array<number> = [6, 3, 1, 2, -1, 4];
    expect(quickSort(sortMe, 0, 5)).toEqual([-1, 1, 2, 3, 4, 6]);
  });

  it("should sort with calculated start and end", () => {
    const sortMe: Array<number> = [9, 23, -1, 0, 66, 8];
    let end = sortMe.length - 1;
    expect(quickSort(sortMe, 0, end)).toEqual([-1, 0, 8, 9, 23, 66]);
  });
});
