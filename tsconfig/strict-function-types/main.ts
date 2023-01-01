/**
 * @description
 * 
 * 官方解释: 
 * strictFunctionTypes 启用时，函数类型参数的检查是抗变（contravariantly） 而非双变（bivariantly）的
 * 应用于除方法或构造函数声明以外的所有函数类型。检查函数 入参 或 出参 的类型是否兼容
 * 方法被专门排除在外是为了确保带泛型的类和接口（如 Array ）总体上仍然保持协变。
 */

interface Animal {
  name: string;
  eat(): void;
}

interface Bird extends Animal {
  fly(): void;
}

interface Fish extends Animal {
  swim(): void;
}

let f1: (x: Animal) => void;
let f2: (x: Bird) => void;
let f3: (x: Fish) => void;


f1 = f2; // 启用 strictFunctionTypes 时错误
f2 = f1; // 正确
f2 = f3; // 错误

interface Comparer<T> {
  compare(a: T, b: T): number;
}

declare let animalComparer: Comparer<Animal>;
declare let fishComparer: Comparer<Fish>;

animalComparer = fishComparer;  // 正确，因为双变
fishComparer = animalComparer;  // 正确