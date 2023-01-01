/**
 * @description
 * allowUnreachableCode
 * 
 * 是否允许出现死区代码（永远无法执行到达的代码）
 * 
 * undefined 只警告不报错
 * true 允许
 * false 不允许，会报错
 */

function fn(n: number) {
  if (n > 5) {
    return true;
  } else {
    return false;
  }
  return true; // allowUnreachableCode = false, 报错
}

console.log(fn(2));