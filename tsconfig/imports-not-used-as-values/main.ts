/**
 * @description
 * importsNotUsedAsValues
 * 
 * 通过它来控制导入语句没被当做值使用的情况下，
 * 将会被如何处理，它提供来三个不同的选项。
 * 
 * remove：这是默认 —— 移除未使用的导入语句
 * preserve：将会保留所有的导入语句，即使是从来没有被使用。
 * error：将会保留所有的导入语句（与 preserve 选项相同），但是当一个值的导入仅仅用于类型时将会抛出错误。
 */

import { Fish, PI } from "./const";
import { getToday } from "./func";

const today: typeof PI = getToday(); // importsNotUsedAsValues = error, 报错

console.log(today);