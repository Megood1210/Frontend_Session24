let arr = [];
let rows = +prompt("Nhap so hang cua mang:");
let cols = +prompt("Nhap so cot cua mang:");
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát"
    );
    switch (choice) {
        case "1":
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    row.push(+prompt(`Nhập phần tử arr[${i}][${j}]:`));
                }
                arr.push(row);
            }
            break;
        case "2":
            console.log("Mảng 2 chiều");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i].join(" "));
            }
            break;
        case "3":
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử: " + sum);
            break;
        case "4":
            let max = arr[0][0];
            let position = "(0,0)";
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        position = `(${i},${j})`;
                    }
                }
            }
            console.log(`Số lớn nhất: ${max}, vị trí của nó ${position}`);
            break;
        case "5":
            let rowIndex = +prompt("Nhap hang can tinh tring binh cong:");
            if (rowIndex >= 0 && rowIndex < arr.length) {
                let sumRow = 0, count = arr[rowIndex].length;
                for (let j = 0; j < count; j++) {
                    sumRow += arr[rowIndex][j];
                }
                let average = sumRow / count;
                console.log(`Trung bình cộng hàng ${rowIndex}: ${average}`);
            } else {
                console.log("Hang khong hop le");
            }
            break;
        case "6":
            for (let i = 0; i < arr.length; i++) {
                let start = 0, end = arr[i].length - 1;
                while (start < end) {
                    let temp = arr[i][start];
                    arr[i][start] = arr[i][end];
                    arr[i][end] = temp;
                    start++;
                    end--;
                }
            }
           console.log("Mảng sau khi đảo ngược hàng");
            for (let i = 0; i < arr.length; i++) {
               console.log(arr[i].join(" "));
            }
            break;
        case "7":
            console.log("Thoát chương trình");
            exit();
            break;
        default:
            console.log("Lua chon khong hop le");
    }
}

