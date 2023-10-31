const numList = [98, 1, 2, 10, 2, 9, 16];

function ordenarYEliminarDuplicados(arr: any) {
  // We sort the array from minor to mayor
  arr.sort(function (a: any, b: any) {
    return a - b;
  });

  // Delete duplicated elements
  const arraySinDuplicados = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arraySinDuplicados.push(arr[i]);
    }
  }

  console.log(arraySinDuplicados);
}

ordenarYEliminarDuplicados(numList);
