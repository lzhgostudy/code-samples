/**
 * @description
 * 
 * null 和 undefined 是其它类型（包括 void）的子类型，可以赋值给其它类型（如：数字类型
 * 默认情况下，编译器会提示错误，这是因为 tsconfig.json 里面配置项 strictNullChecks 是默认开启的。
 * strictNullChecks 开启后，null，undefined不允许被赋值 其他类型，包括 null 和 undefined 也不能互相赋值
 */

let _undefined1: undefined;
let _null1: null;
_undefined1 = _null1

let _undefined2: undefined;
let _null2: null;
_null2 = _undefined2

let str: string;
str = null;
str = undefined;

let num: number;
num = null;
num = undefined;

let bool: boolean;
bool = null;
bool = undefined;

let _void: void;
let fn_void = (): void => {
  console.log("Hello void");
};
_void = fn_void();
_void = null;
_void = undefined; // 严格模式下，void 允许被赋值 undefined

let _never: never;
let _never2: never;
_never = null;
_never = undefined;
_never = fn_void();
_never = _never2;
/**
 * never，无论是否严格模式，除了 never 自己，都不允许被其他类型赋值。
 */