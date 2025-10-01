//====================
//Bài tập 1
//====================
function bt1() {
  console.log("*Bài tập 1");

  //Khai báo biến
  let studentName = "Trần Hoàng Đức";
  let birthYear = 2007;
  let gender = "Nam";
  const CURRENT_YEAR = 2025;

  //Tính tuổi
  let age = CURRENT_YEAR - birthYear;

  //In ra thông tin
  console.log(
    "Tên: " +
      studentName +
      ", Năm sinh: " +
      birthYear +
      ", Giới tính: " +
      gender +
      ", Tuổi: " +
      age
  );
}
bt1();

//====================
//Bài tập 2
//====================
function bt2() {
  console.log("*Bài tập 2");

  //-----var-----//

  console.log("Giá trị trước khi khai báo biến bằng var: ", testVar); //Output: "Giá trị trước khi khai báo biến bằng var:  undefined"
  var testVar = 1;
  console.log("Giá trị sau khi khai báo biến bằng var: ", testVar); //Output: "Giá trị sau khi khai báo biến bằng var:  1"

  //-----let-----//

  //console.log("Giá trị trước khi khai báo biến bằng let: ", testLet); //Output: "Uncaught ReferenceError: Cannot access 'testLet' before initialization"
  //Nếu sử dụng dòng lệnh trên thì chương trình sẽ lỗi
  let testLet = 2;
  console.log("Giá trị sau khi khai báo biến bằng let: ", testLet); //Output: "Giá trị sau khi khai báo biến bằng let:  2"

  //-----const-----//

  //console.log("Giá trị trước khi khai báo biến bằng const: ", testConst); //Output: "Uncaught ReferenceError: Cannot access 'testConst' before initialization"
  //Nếu sử dụng dòng lệnh trên thì chương trình sẽ lỗi
  const testConst = 3;
  console.log("Giá trị sau khi khai báo biến bằng const: ", testConst); //Output: "Giá trị sau khi khai báo biến bằng const:  3"
}
bt2();

//====================
//Bài tập 3
//====================
function bt3() {
  console.log("*Bài tập 3");

  //Khai báo biến
  let firtName = "Trần Hoàng Đức";
  let age = 18;
  let isMarried = false;

  //In ra thông tin
  console.log(
    "Tên: " + firtName + ", Tuổi: " + age + ", Đã kết hôn: " + isMarried
  ); //Output: "Tên: Trần Hoàng Đức, Tuổi: 18, Đã kết hôn: false"
}
bt3();

//====================
//Bài tập 4
//====================
function bt4() {
  console.log("*Bài tập 4");

  //Khai báo biến
  let strNumber = "42";

  console.log("-Dùng parseInt()");
  //Chuyển kiểu dữ liệu với parseInt()
  console.log("Kiểu dữ liệu trước khi chuyển: ", typeof strNumber); //Output: "Kiểu dữ liệu trước khi chuyển:  string"
  parseInt(strNumber);
  console.log("Kiểu dữ liệu sau khi chuyển: ", typeof parseInt(strNumber)); //Output: "Kiểu dữ liệu sau khi chuyển:  number"
  console.log(parseInt(strNumber) + 8); //Output: "50"

  console.log("-Dùng Number()");
  //Chuyển kiểu dữ liệu với Number()
  console.log("Kiểu dữ liệu trước khi chuyển: ", typeof strNumber); //Output: "Kiểu dữ liệu trước khi chuyển:  string"
  let newNumber = Number(strNumber);
  console.log("Kiểu dữ liệu sau khi chuyển: ", typeof newNumber); //Output: "Kiểu dữ liệu sau khi chuyển:  number"
  console.log(newNumber + 8); // Output: "50"
}
bt4();

//====================
//Bài tập 5
//====================
function bt5() {
  console.log("*Bài tập 5");

  //Khai báo biến
  let a = 15,
    b = 4;

  //In ra thông tin

  //Khi a đứng trước
  console.log("-Khi a đứng trước:");

  console.log("Tổng = ", a + b); //Output: "Tổng =  19"
  console.log("Hiệu = ", a - b); //Output: "Hiệu =  11"
  console.log("Tích = ", a * b); //Output: "Tích =  60"
  console.log("Thương = ", a / b); //Output: "Thương =  3.75"
  console.log("Dư số = ", a % b); //Output: "Dư số =  3"
  console.log("Lũy thừa b của a = ", a ** b); //Output: "Lũy thừa =  50625"

  //Khi b đứng trước
  console.log("-Khi b đứng trước:");

  console.log("Tổng = ", b + a); //Output: "Tổng =  19"
  console.log("Hiệu = ", b - a); //Output: "Hiệu =  -11"
  console.log("Tích = ", b * a); //Output: "Tích =  60"
  console.log("Thương = ", b / a); //Output: "Thương =  0.26666666666666666"
  console.log("Dư số = ", b % a); //Output: "Dư số =  4"
  console.log("Lũy thừa a của b = ", b ** a); //Output: "Lũy thừa b của a =  1073741824"
}
bt5();

//====================
//Bài tập 6
//====================
function bt6() {
  console.log("*Bài tập 6");

  //Khai báo biến
  let productName = "iPhone 17 Pro Max",
    price = 63990000,
    quantity = 10;
  const DISCOUNT_RATE = 0.1;

  //Tính tổng giá
  let totalPrice = price * quantity * (1 - DISCOUNT_RATE);

  //In ra thông tin
  console.log(
    "Sản phẩm: " +
      productName +
      ", Số lượng: " +
      quantity +
      ", Tổng giá: " +
      totalPrice +
      "VND"
  ); //Output: "Sản phẩm: iPhone 17 Pro Max, Số lượng: 10, Tổng giá: 575910000VND"
}
bt6();
