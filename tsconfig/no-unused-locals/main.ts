/**
 * @description
 * noUnusedLocals
 * 
 * 禁止未使用的局部变量
 */

const createKeyboard = (modelID: number) => {
  const defaultModelID = 23;
  return { type: "keyboard", modelID };
};