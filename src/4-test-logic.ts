const numList = [98, 1, 2, 10, 2, 9, 16];

function sortArray(arr: any) {
  numList.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  console.log(numList);
}

sortArray(numList);
