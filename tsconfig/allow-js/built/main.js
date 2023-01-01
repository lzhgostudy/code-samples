"use strict";
/**
 * @description
 * allowJs 允许 JavaScript 文件在你的工程中被引入，而不是仅仅允许 .ts 和 .tsx 文件
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./card"); // allowJs = false, 报错
console.log(card_1.defaultCardDeck);
