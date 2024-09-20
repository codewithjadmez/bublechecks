function bublesorte(bublesort){
    for(i = 0;i<bublesort.length;i++){
        for(j = 0;j<bublesort.length-i-1;j++){
            if(bublesort[j] > bublesort[j+1]){
                var waiting = bublesort[j];
                bublesort[j] = bublesort[j+1];
                bublesort[j+1] = waiting;
            }
            console.log(bublesort)
        }
    }
    return bublesort
}
function selectionSort(bublesort) {
    for (let i = 0; i < bublesort.length - 1; i++) {
      let min_idx = i
      for (let j = i + 1; j < bublesort.length; j++) {
        if (bublesort[j] < bublesort[min_idx]) {
          min_idx = j;
        }
      }
      var temp = bublesort[min_idx];
      bublesort[min_idx] = bublesort[i];
      bublesort[i] = temp;
      console.log(bublesort)
    }
    return bublesort
   }
   function insertionSort(bublesort) {
    for (let i = 1; i < bublesort.length; i++) {
        let key = bublesort[i]
        let j = i - 1
        while (j >= 0 && bublesort[j] > key) {
            bublesort[j + 1] = bublesort[j];
            j = j - 1;
        }
        bublesort[j + 1] = key
        console.log(bublesort)
    }
    return bublesort;
}
insertionSort([5,3,8,1,2,0])