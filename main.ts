/**
 * @desc 获取当天的日期
 */
function today(): string {
  return new Date().toDateString();
}

console.log(today())