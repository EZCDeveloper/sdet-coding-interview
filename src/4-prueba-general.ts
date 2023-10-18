// Debes ordenar los numeros de menor a mayor y no debe venir numeros duplicados.

const numeros = [98, 1, 2, 10, 2, 9, 16];

function ordenarArreglo(arr: any) {
  if (arr.length === 0) return arr;
  arr = arr.sort(function (a: number, b: number) {
    return a * 1 - b * 1;
  });
  let ret = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      ret.push(arr[i]);
    }
  }
  console.log(ret);
}

ordenarArreglo(numeros);
