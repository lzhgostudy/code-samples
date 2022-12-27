/**
 * @description
 * noPropertyAccessFromIndexSignature
 * 
 * 对于索引签名中未知属性的访问，用点操作符 obj.key 访问可能会是无意识的一个错误，
 * 应该使用 obj[key] 来告诉编译器，这是你确定要访问此未知属性。
 */

interface GameSettings {
  [key: string]: string
  speed: 'fast' | 'medium' | 'slow'
  quality: 'high' | 'low'
}

const settings: GameSettings = {
  speed: 'fast',
  quality: 'high',
}

// OK
console.log(settings.speed)

// OK
console.log(settings.quality)

// OK
// 注意，如果开启了 @typescript-eslint/dot-notation 规则，该规则的 allowIndexSignaturePropertyAccess 需设为 true
console.log(settings['username'])

// 报错：Property 'username' comes from an index signature, so it must be accessed with ['username'].ts(4111)
console.log(settings.username)
