export function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    let sortedArr = [...arr]; 

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            let dateA = new Date(sortedArr[i].expirationDate);
            let dateB = new Date(sortedArr[i + 1].expirationDate);

            if (dateA > dateB) {
                let temp = sortedArr[i];
                sortedArr[i] = sortedArr[i + 1];
                sortedArr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; 
    } while (swapped);

    return sortedArr;
}

export function linearSearch(arr, keyword) {
    let results = [];
    let lowerKeyword = keyword.toLowerCase();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().includes(lowerKeyword)) {
            results.push(arr[i]);
        }
    }
    return results;
}
