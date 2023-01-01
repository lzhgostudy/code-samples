/**
 * @description
 * noImplicitOverride
 * 
 * 是否禁止子类隐式覆盖父类的成员
 * 要求子类覆盖父类成员时，显式标记 override，这样，以免父类修改了成员名称，
 * 而子类忘记修改，开启此规则后，子类隐式覆盖父类成员时会收到报错。
 */

class Animal {
  eat() {}
}

class Fish extends Animal {
  swim() {};

  eat() {}
}

class Bird extends Animal {
  fly() {}

  override eat() {}
}