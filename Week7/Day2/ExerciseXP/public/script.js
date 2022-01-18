function threeLines() {
  const div = document.createElement("div");
  const para1 = document.createElement("p");
  para1.innerText = "hello1";
  const para2 = document.createElement("p");
  para2.innerText = "hello2";
  const para3 = document.createElement("p");
  para3.innerText = "hello3";
  document.body.append(para1, para2, para3);
}
threeLines();
