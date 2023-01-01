/**
 * @description
 * noImplicitAny, 默认开启，不允许隐式 any，可以显式 any
 */

// 隐式 any
function sum(a, b) {
  return a + b;
}

// 显式 any
function calculator(a: any, b: any) {
  return a + b;
}