function numbers(arr) {
    arr = [];
    let count = 0;
    let length = prompt("moi ban nhap so luong so muon nhap");
    for (i = 0; i < length; i++) {
        arr[i] = prompt("nhap so thu " + (i + 1) + ":");
    }
    if (length > 0) {
        if (isNaN(arr)) {
            for (i = 0; i < arr.length; i++) {
                if (arr[i] == 2 || arr[i] == 3 || arr[i] == 5) {
                    console.log(arr[i]);
                }else if(arr[i] % 2 != 0 && arr[i] % 3 != 0 && arr[i] % 5 != 0) {
                    console.log(arr[i]);
                }
                if (arr[i].length == 0) {
                    count++;
                }
            }
        }else{
            console.log("ko hop le");
        }
        if (count == arr.length) {
            console.log("mang ko co phan tu");
        }
    } else {
        alert("ko hop le");
    }
}
numbers();