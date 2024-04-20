const unionOverlap = (array) => {
  sortedItems = array.sort((a, b) => a.startPx - b.startPx);

  const result = [];
  sortedItems.forEach((item) => {
    if (item.startPx == null || item.endPx == null) {
      return;
    }

    const length = result.length;
    if (length === 0) {
      result.push(item);
    } else {
      const lastItem = result[length - 1];

      // Check current item overlaps with the last item, merge them
      // Because items array is sorted,
      // only need check current start x with last item end x
      if (item.startPx <= lastItem.endPx) {
        lastItem.endPx = item.endPx;
      } else {
        result.push(item);
      }
    }
  });

  return result;
};

const unavailableItems = [
  { startPx: 10, endPx: 30 },
  { startPx: 55, endPx: 65 },
  { startPx: 35, endPx: 50 },
  { startPx: 20, endPx: 40 },
  { startPx: 60, endPx: 70 },
];
console.table(unionOverlap(unavailableItems));
// [
//   { startPx: 10, endPx: 50 },
//   { startPx: 55, endPx: 70 },
// ];


module.exports = unionOverlap;
