/**
 * @description
 * strictBindCallApply 在使用 bind、call 和 apply 语法的时候，是否进行参数检查
 */

function fn(x: string) {
  return parseInt(x);
}

const a1 = fn("19");
const a2 = fn(false); // 报错

const b1 = fn.call(undefined, "19");
const b2 = fn.call(undefined, false); // strictBindCallApply = true. 报错

const c1 = fn.apply(undefined, ["19"]);
const c2 = fn.apply(undefined, [false]); // strictBindCallApply = true. 报错

const d1 = fn.bind(undefined, "19");
const d2 = fn.bind(undefined, false);