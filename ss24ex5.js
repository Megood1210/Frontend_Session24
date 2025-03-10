let arr = [];
let rows = +prompt("Nhap so hang cua mang:");
let cols = +prompt("Nhap so cot cua mang:");
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột \n" +
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
            if (rows !== cols) {
                console.log("Mang khong hop le.Mang phai la hinh vuong");
                break;
            }
            let sumMainDiagonal = 0;
            for (let i = 0; i < rows; i++) {
                sumMainDiagonal += arr[i][i];
            }
            console.log(`Tổng đường chéo chính: ${sumMainDiagonal}`);
            break;
        case "5":
            if (rows !== cols) {
                console.log("Mang khong hop le.Mang phai la hinh vuong");
                break;
            }
            let sumSecondaryDiagonal = 0;
            for (let i = 0; i < rows; i++) {
                sumSecondaryDiagonal += arr[i][cols - 1 - i];
            }
            console.log(`Tổng đường chéo phụ: ${sumSecondaryDiagonal}`);
            break;
        case "6":
            let type = prompt("Nhap so hang hoac so so cot de tinh trung binh cong cua cot(h/c)");
            if (type === "row") {
                let rowIndex = +prompt("Nhập chỉ số hàng:");
                if (rowIndex >= 0 && rowIndex < rows) {
                    let sumRow = 0;
                    for (let j = 0; j < cols; j++) {
                        sumRow += arr[rowIndex][j];
                    }
                    console.log(`Trung bình cộng hàng ${rowIndex}: ${sumRow / cols}`);
                } else {
                    console.log(" Số hàng không hợp lệ");
                }
            } else if (type === "col") {
                let colIndex = +prompt("Nhập chỉ số cột:");
                if (colIndex >= 0 && colIndex < cols) {
                    let sumCol = 0;
                    for (let i = 0; i < rows; i++) {
                        sumCol += arr[i][colIndex];
                    }
                    console.log(`Trung bình cộng cột ${colIndex}: ${sumCol / rows}`);
                } else {
                    console.log("Chỉ số cột không hợp lệ");
                }
            } else {
                console.log("Giá trị nhập không hợp lệ");
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
