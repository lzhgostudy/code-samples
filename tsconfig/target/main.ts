/**
 * @description
 * target
 * 
 * 官方：https://www.typescriptlang.org/zh/tsconfig#target
 * 
 * target 的配置将会改变哪些 JS 特性会被降级，而哪些会被完整保留 例如，如果 target 是 ES5 或更低版本，箭头函数 () => this 会被转换为等价的 函数 表达式
 * 改变 target 也会改变 lib 选项的默认值。 你可以根据需要混搭 target 和 lib 的配置，你也可以为了方便只设置 target。
 */

/**
 * target = ES2015
 */
const promise = new Promise((resolve) => {
  // TODO
});

/**
 * target = ES2016
 */
const arr = [1, 2];
console.log(arr.includes(1));

/**
 * target = ESNext
 * 
 * 特殊的 ESNext 值代表你的 TypeScript 所支持的最高版本。
 * 这个配置应当被谨慎使用，因为它在不同的 TypeScript 版本之间的含义不同，并且会导致升级更难预测。
 */