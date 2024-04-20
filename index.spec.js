const unionOverlap = require("./index");

describe("unionOverlap", () => {
  test("empty arrays", () => {
    expect(unionOverlap([])).toEqual([]);
  });

  test("null and undefined values in arrays", () => {
    const arr = [
      { startPx: null, endPx: 30 },
      { startPx: 30, endPx: undefined },
      { startPx: 54, endPx: 70 },
    ];
    expect(unionOverlap(arr)).toEqual([{ startPx: 54, endPx: 70 }]);
  });

  test("arrays with exactly value overlap", () => {
    const arr = [
      { startPx: 10, endPx: 30 },
      { startPx: 30, endPx: 54 },
      { startPx: 54, endPx: 70 },
    ];
    expect(unionOverlap(arr)).toEqual([{ startPx: 10, endPx: 70 }]);
  });

  test("example input of the test", () => {
    const arr = [
      { startPx: 10, endPx: 30 },
      { startPx: 55, endPx: 65 },
      { startPx: 35, endPx: 50 },
      { startPx: 20, endPx: 40 },
      { startPx: 60, endPx: 70 },
    ];
    const arr2 = ["1", 2, false];
    expect(unionOverlap(arr)).toEqual([
      { startPx: 10, endPx: 50 },
      { startPx: 55, endPx: 70 },
    ]);
  });
});
