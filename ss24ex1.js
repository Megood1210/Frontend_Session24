let numbers = [];
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất\n" +
        "4. Tính tổng các phần tử\n" +
        "5. Tìm số lần xuất hiện của một phần tử\n" +
        "6. Sắp xếp mảng tăng dần\n" +
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
                let min = numbers[0];
                for (let num of numbers) {
                    if (num > max) max = num;
                    if (num < min) min = num;
                }
                console.log("Số lớn nhất: " + max );
                console.log("Số nhỏ nhất: " + min );
            }
            break;
        case "4":
            if (numbers.length === 0) {
                console.log("Mang trong");
            } else {
                let sum = 0;
                for (let num of numbers) {
                    sum += num;
                }
                console.log("Tổng các phần tử trong mảng: " + sum);
            }
            break;
        case "5":
            let a = +prompt("Nhap mot so");
            let count = 0;
            for (let i = 0; i< numbers.length; i++) {
                if(numbers[i] === a){
                    count++;
                }
            }
            if (count > 0){
                console.log(`Số ${a} xuất hiện ${count} lần trong mảng`);
            }else {
                console.log(`Số ${a} không tồn tại trong mảng`);
            }   
            break;
        case "6":
            let b = numbers.length;
            for (let i = 0; i < b - 1; i++) {
                for (let j = 0; j < b - 1 - i; j++) {
                    if (numbers[j] > numbers[j + 1]) { 
                        let temp = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = temp;
                    }
                }
            }
            console.log(numbers);
            break;
        case "7":
            console.log("Thoát chương trình");
            exit();
            break;
        default:
            console.log("Lua chon khong hop le");
    }
}

