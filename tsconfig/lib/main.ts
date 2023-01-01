/**
 * @description
 * lib
 * 
 * 官方：https://www.typescriptlang.org/zh/tsconfig#lib
 * 
 * TypeScript 包括一组默认的内建 JS 接口（例如 Math）的类型定义，以及在浏览器环境中存在的对象的类型定义（例如 document）
 * 
 */

/**
 * lib = ["dom"]
 * DOM 定义 —— window，document, console 等。
 */
const div = document.createElement("div");

/**
 * lib = ["ES2015"]
 * ES2015 中额外提供的 API (又被称为 ES6) —— 
 * array.find， Promise，Proxy，Symbol，Map，Set，Reflect 等。
 */
const promise = new Promise((resolve) => {
  // TODO
});

/**
 * lib = ["ES2016"]
 * ES2016 中额外提供的 API —— array.include 等。
 */
const arr = [1, 2];
console.log(arr.includes(1));

/**
 * lib = ["ESNext"]
 * ESNext 中额外提供的 API —— 随着 JavaScript 的发展，这些会发生变化。
 * 涵盖了以往每一年发布的api: 
 * ESNext 等价于 [ES2015, ES2016, ES2017, ES2018, ES2019, ES2020...] 的总和
 */
