const  = function (value) {
  return +value
    .split("")
    .filter((n) => !isNaN(n))
    .join("");
};
console.log(filterString("123"));
