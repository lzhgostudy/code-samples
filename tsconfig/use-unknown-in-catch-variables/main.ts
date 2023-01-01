/**
 * @description
 * useUnknownInCatchVariables
 * 
 * 是否默认将 catch 语句的变量上做为 unknown 而不是 any 类型
 */

try {
  // ...
} catch (err) {
  // We have to verify err is an
  // error before using it as one.
  if (err instanceof Error) {
    console.log(err.message);
  }
}