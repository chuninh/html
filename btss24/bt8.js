let chuoi1 = prompt("Nhập chuỗi thứ 1:");
let chuoi2 = prompt("Nhập chuỗi thứ 2:");

let mangKyTu = [];
for (let i = 0; i < chuoi1.length; i++) {
  mangKyTu.push(chuoi1[i]);
}
for (let i = 0; i < chuoi2.length; i++) {
  mangKyTu.push(chuoi2[i]);
}

// Sắp xếp lại các ký tự trong mảng theo thứ tự ngẫu nhiên
for (let i = mangKyTu.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let tam = mangKyTu[i];
  mangKyTu[i] = mangKyTu[j];
  mangKyTu[j] = tam;
}

// Tạo chuỗi mới từ các ký tự trong mảng
let chuoiMoi = "";
for (let i = 0; i < mangKyTu.length; i++) {
  chuoiMoi += mangKyTu[i];
}

console.log("Chuỗi ký tự sau khi trộn:", chuoiMoi);