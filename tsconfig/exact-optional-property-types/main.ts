/**
 * @description
 * exactOptionalPropertyTypes
 * 
 * 可选属性默认情况下允许被赋值为 undefined ，此选项设为 true 后，
 * 可选属性必须严格匹配指定的类型，不能被赋值为 undefined 。
 */

interface UserDefaults {
  // The absence of a value represents 'system'
  colorThemeOverride?: "dark" | "light";
}

declare const settings: UserDefaults;

settings.colorThemeOverride = "dark";
settings.colorThemeOverride = "light";
 
// But not:
settings.colorThemeOverride = undefined;