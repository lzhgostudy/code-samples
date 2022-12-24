/**
 * @description
 * noFallthroughCasesInSwitch
 * 
 * 是否禁止 switch 中出现 fallthrough 的 case 语句
 * switch 语句中，如果一个 case 语句没有 break，那这就是 fallthrough case 语句。
 */

const a: number = 6;
 
switch (a) {
  case 0:
// Fallthrough case in switch.
    console.log("even");
  case 1:
    console.log("odd");
    break;
}