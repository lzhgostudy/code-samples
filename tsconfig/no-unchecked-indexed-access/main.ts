/**
 * @description
 * noUncheckedIndexedAccess
 * 
 * 访问一个符合索引签名的未知属性，默认情况下此属性就是索引签名指定的类型，
 * 但实际上它有可能是不存在的，也就是 undefined 类型。
 * 
 * 开启此规则后，未知属性除了索引签名指定的类型，还会包括 undefined 类型。
 */

interface EnvironmentVars {
  NAME: string;
  OS: string;
 
  // Unknown properties are covered by this index signature.
  [propName: string]: string;
}
 
declare const env: EnvironmentVars;
 
// Declared as existing
const sysName = env.NAME;
const os = env.OS;
      
 
// Not declared, but because of the index
// signature, then it is considered a string
const nodeEnv = env.NODE_ENV;