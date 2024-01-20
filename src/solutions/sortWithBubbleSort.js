function sortWithBubbleSort(originalArray) {
  if (!originalArray) {
    return originalArray;
  }

  const array = [...originalArray];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swapArrayElements(array, i, j);
      }
    }
  }

  return array;
}

function swapArrayElements(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = sortWithBubbleSort;
