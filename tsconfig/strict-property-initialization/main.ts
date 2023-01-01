/**
 * @description
 * strictPropertyInitialization
 * 
 * 需要配合 strictNullChecks 一起使用
 * 是否强制类属性必须初始化
 * 比如在 class 中声明了一个属性，但是没有进行初始化。
 */

class UserAccount {
  name: string;
  accountType = "user";
 
  email: string;
// Property 'email' has no initializer and is not definitely assigned in the constructor.
  address: string | undefined;
 
  constructor(name: string) {
    this.name = name;
    // Note that this.email is not set
  }
}