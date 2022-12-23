/**
 * @description
 * importHelpers
 * 
 * 对于某些降级行为，TypeScript 使用一些辅助代码来进行操作。
 * 例如继承类，展开数组或对象，以及异步操作。 默认情况下，这些辅助代码被插入到使用它们的文件中。 
 * 如果在许多不同的模块中使用相同的辅助代码，则可能会导致代码重复。
 * 
 * 如果启用了 importHelpers 选项，这些辅助函数将从 tslib 中被导入。 
 * 你需要确保 tslib 模块在运行时可以被导入。 
 * 这只影响模块，全局脚本文件不会尝试导入模块。
 * 
 * 一般跟其他参数配合使用：
 * downlevelIteration
 * target
 * lib
 */

/**
 * 场景
 * target = es3
 * lib = [es2016]
 * downlevelIteration = true
 */
export function fn(arr: number[]): boolean {
  const arr2 = [1, ...arr];
  return arr2.includes(2);
}