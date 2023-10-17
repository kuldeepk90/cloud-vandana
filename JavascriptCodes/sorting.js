function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  
  const numbers = [10, 5, 8, 1, 7];
  console.log('Original array:', numbers);
  
  bubbleSort(numbers);
  
  console.log('Sorted array in descending order:', numbers);
  