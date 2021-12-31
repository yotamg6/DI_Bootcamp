function isAnagram(string1, string2) {
  const orderedStr1 = string1
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  console.log(orderedStr1);
  const orderedStr2 = string2
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  console.log(orderedStr2);

  return orderedStr2 === orderedStr1;
}
console.log(isAnagram("The classroom", "School master"));
