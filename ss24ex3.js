let numbers = [];
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát"
    );
    switch (choice) {
        case "1":
            let n = +prompt("Nhap so luong cua mang:");
            for (let i = 0; i < n; i++) {
                let num = +prompt(`Nhap phan tu thu ${i + 1}:`);
                numbers.push(num);
            }
            break;
        case "2":
            if (numbers.length === 0) {
                console.log("Mang trong");
            } else {
                console.log("Mang hien tai: " + numbers.join(","));
            }
            break;
        case "3":
            if (numbers.length === 0) {
                console.log("Mang trong");
            } else {
                let max = numbers[0];
                let index = 0;
                for (let i = 1; i < numbers.length; i++) {
                    if (numbers[i] > max) {
                        max = numbers[i];
                        index = i;
                    }
                }
                console.log("Số lớn nhất: " + max);
                console.log("Vị trí của nó: " + index);
                
            }
            break;
        case "4":
            if (numbers.length === 0) {
                console.log("Mang trong");
            } else {
                let sum = 0; 
                let count = 0;
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] > 0) {
                        sum += numbers[i];
                        count++;
                    }
                }
                if (count === 0) {
                   console.log("Khong co so duong trong mang");
                } else {
                    let avg = sum / count;
                    console.log("Tổng các số dương: " + sum);
                    console.log("Trung bình cộng: " + avg);
                }
            }
            break;
        case "5":
            let isValid = true;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] < '0' || numbers[i] > '9') {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                let reversed = "";
                for (let i = numbers.length - 1; i >= 0; i--) {
                    reversed += numbers[i];
                }
                console.log(reversed);
            } else {
                console.log("Không hợp lệ");
            }  
            break;
        case "6":
            let reversed ="";
            for (let i= numbers.length - 1; i >= 0; i--){
                reversed += numbers[i];
            }
            if(reversed === numbers){
                console.log("Là chuỗi đối xứng");
            }else{
                console.log("Không phải chuỗi xứng");
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
