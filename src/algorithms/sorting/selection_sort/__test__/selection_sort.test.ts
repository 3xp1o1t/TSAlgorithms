import { selectionSort } from "../selection_sort";

describe("Selection sort", () => {
  it("should sort [5, 7, 1, 2, 10] into [1, 2, 5, 7, 10]", () => {
    const sortMe: Array<number> = [5, 7, 1, 2, 10];
    expect(selectionSort(sortMe)).toEqual([1, 2, 5, 7, 10]);
  });

  it("should sort negative array", () => {
    const sortMe: Array<number> = [-2, -6, -22, -65, 1, 0];
    expect(selectionSort(sortMe)).toEqual([-65, -22, -6, -2, 0, 1]);
  });
});
