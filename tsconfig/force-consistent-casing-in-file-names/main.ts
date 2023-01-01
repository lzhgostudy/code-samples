/**
 * @description
 * forceConsistentCasingInFileNames
 * 
 * 是否强制代码中使用的模块文件名必须和文件系统中的文件名保持大小写一致，
 * 例如import fileManager.ts查找指定的fileManager.ts文件而不是FileManager.ts文件 
 */

import { PI } from "./Constants"; // forceConsistentCasingInFileNames = true, 报错

console.log(PI);