let numbers = [];
while (true) {
    let choice = prompt(
        "Chọn một thao tác:\n" +
        "1.Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5.Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ hai trong mảng\n" +
        "7. Thoát chuong trình"
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
            let evenNum = "";
            let oddNum = "";
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    evenNum += numbers[i] + ", ";
                } else {
                    oddNum += numbers[i] + ", ";
                }
            }
            evenNum = evenNum.length > 0 ? evenNum.slice(0, -2) : "Không có";
            oddNum = oddNum.length > 0 ? oddNum.slice(0, -2) : "Không có";
            console.log("Số chẵn: " + evenNum);
            console.log("Số lẻ: " + oddNum);
            break;
        case "4":
            if (numbers.length === 0) {
              console.log("Mang trong");
            } else {
                let sum = 0;
                for (let i = 0; i < numbers.length; i++) {
                    sum += numbers[i];
                }
                let avg = sum / numbers.length;
                console.log("Trung bình cộng của mảng: " + avg);
            }
            break;
        case "5":
            if (numbers.length === 0) {
                console.log("Mang trong");
            } else {
                let index = +prompt("Nhap vi tri muon xoa");
                if (index >= 0 && index < numbers.length) {
                    for (let i = index; i < numbers.length - 1; i++) {
                        numbers[i] = numbers[i + 1];
                    }
                    numbers.pop(); 
                    console.log("Mảng sau khi xóa: " + numbers.join(","));
                } else {
                    console.log("Vi tri khong hop le");
                }
            }
            break;
        case "6":
            for (let i=0;i<numbers.length;i++){
                for (let j=i+1;j<numbers.length;j++){
                    if (numbers[i]>numbers[j]){
                        let replace=numbers[i];
                        numbers[i]=numbers[j];
                        numbers[j]=replace;
                    }
                }
            }
            let minTwo = numbers[numbers.length-2];
            console.log(minTwo);
            break;
        case "7":
            console.log("Thoát chương trình");
            exit();
            break;
        default:
            console.log("Lua chon khong hop le");
    }
}
