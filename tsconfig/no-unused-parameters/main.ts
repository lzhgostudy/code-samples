/**
 * @description
 * noUnusedParameters
 * 
 * 禁止未使用的函数参数
 */

const createDefaultKeyboard = (modelID: number) => {
  const defaultModelID = 23;
  return { type: "keyboard", modelID: defaultModelID };
};