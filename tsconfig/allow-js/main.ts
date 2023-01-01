/**
 * @description
 * allowJs 允许 JavaScript 文件在你的工程中被引入，而不是仅仅允许 .ts 和 .tsx 文件
 * 
 */

import { defaultCardDeck } from "./card"; // allowJs = false, 报错

console.log(defaultCardDeck);

/**
 * 常见错误
 * 
 * error TS5055 Cannot write file '/xxxx/tsconfig-samples/allow-js/card.js' because it would overwrite input file.
 * 
 * 解决方案: 因为 js 模块的文件名会被原样输出，避免覆盖源文件，需要配置输出路径，outDir
 */