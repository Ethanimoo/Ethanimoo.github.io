---
title: API
sidebar: auto
---

## 数组方法

### concat()

- 参数: `{ Array }`
- 描述: `合并` 用于连接两个或多个数组，并返回新的数组

```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = arr1.concat(arr2);
console.log(arr1); //[1, 2, 3]
console.log(arr3); //[1, 2, 3, 4, 5]
```

### join()

- 参数: `{ String }`
- 描述: `分隔` 把数组转化为字符串，默认使用 ',' 分隔，不改变原数组

```js
var arr = [2, 3, 4];
console.log(arr.join()); // 2,3,4
console.log(arr.join(":")); // 2:3:4
```

### push()

- 参数: `{ String | Number | Object }`
- 描述: `新增` 向数组的末尾添加一个或多个元素，并返回新的长度

```js
var a = [2, 3, 4];
var b = a.push(5);
console.log(a); //[2,3,4,5]
console.log(b); //4
```

### pop()

- 描述: `删除尾部` 用于删除并返回数组的最后一个元素，会改变原数组

```js
var arr = [2, 3, 4];
console.log(arr.pop()); //4
console.log(arr); //[2,3]
```

### shift()

- 描述: `删除头部` 用于删除并返回数组的第一个元素，会改变原数组

```js
var arr = [2, 3, 4];
console.log(arr.shift()); //2
console.log(arr); //[3,4]
```

### unshift()

- 描述: `新增头部` 可向数组的开头添加一个或更多元素，并返回新的长度，会改变原数组

```js
var arr = [2, 3, 4, 5];
console.log(arr.unshift(3, 6)); //6
console.log(arr); //[3, 6, 2, 3, 4, 5]
```

### slice()

- 参数: `{ indexStart } { indexEnd }`
- 描述: `切割` 返回一个新的数组，包含从 start(可为负数) 到 end （不包括该元素）的 arrayObject 中的元素

```js
var arr = [2, 3, 4, 5];
console.log(arr.slice(1, 3)); //[3,4]
console.log(arr); //[2,3,4,5]
```

### splice()

- 参数: `{ index }必选 { Num }必选 { New }可选`
- 描述: `删除替换` 可删除从 index 处开始的零个或多个元素，且可以在删除位置替换新的元素，返回删除的元素，会改变原数组

```js
var a = [5, 6, 7, 8];
console.log(a.splice(1, 0, 9)); //[]
console.log(a); // [5, 9, 6, 7, 8]
var b = [5, 6, 7, 8];
console.log(b.splice(1, 2, 3)); //[6, 7]
console.log(b); //[5, 3, 8]
```

### sort

- 参数: `{ Function }可选`
- 描述: `排序` 按照 Unicode code 位置排序，默认升序

```js
var fruit = ["cherries", "apples", "bananas"];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2];
scores.sort(); // [1, 10, 2, 21]

// 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值
scores.sort((a, b) => a - b); // [1, 2, 10, 21]
```

### reverse()

- 描述: `颠倒` 用于颠倒数组中元素的顺序。返回的是颠倒后的数组，会改变原数组

```js
var arr = [2, 3, 4];
console.log(arr.reverse()); //[4, 3, 2]
console.log(arr); //[4, 3, 2]
```

### indexOf()

- 参数: `{ Number | String } { index }`
- 描述: `查找` 接受两个参数(查找的值、查找起始位置)? 不存在，返回 -1 : 存在，返回位置

```js
var a = [2, 9, 9];
a.indexOf(2); // 0
a.indexOf(7); // -1
```

### lastIndexOf()

- 参数: `{ Number | String } { index }`
- 描述: `查找` lastIndexOf 是从后往前查找, 接受两个参数(查找的值、查找起始位置)? 不存在，返回 -1 : 存在，返回位置

```js
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -1); // 3
```

### every()

- 参数: `{ Function }`
- 描述: `判断` 对数组的每一项都运行给定的函数，每一项都返回 ture,则返回 true

```js
function isBigEnough(element, index, array) {
  return element < 10;
}
[2, 5, 8, 3, 4].every(isBigEnough); // true
```

### some()

- 参数: `{ Function }`
- 描述: `判断` 对数组的每一项都运行给定的函数，任意一项都返回 ture,则返回 true

```js
function compare(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(compare); // false
[12, 5, 8, 1, 4].some(compare); // true
```

### includes()

- 参数: `{ String | Number }必选 { index }可选`
- 描述: `判断` 判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误

```js
var a = [1, 2, 3];
a.includes(2); // true
a.includes(4); // false
```

### filter()

- 参数: `{ Function }`
- 描述: `过滤`过滤对数组的每一项都运行给定的函数，返回 结果为 ture 的项组成的数组

```js
var words = ["spray", "destruction", "present", "happy"];
var longWords = words.filter((word) => word.length > 6); // ["destruction", "present"]
```

### map()

- 参数: `{ Function }`
- 描述: `遍历` 对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组

```js
var numbers = [1, 5, 10, 15];
var doubles = numbers.map((x) => x * 2);
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
```

### forEach()

- 参数: `{ Function }`
- 描述: `数组遍历`

```js
const items = ["item1", "item2", "item3"];
const copy = [];
items.forEach((item) => copy.push(item));
// copy: ["item1", "item2", "item3"]
```

### find()

- 参数: `{ Function }`
- 描述: `查找` 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索

```js
const arr = [1, "2", 3, 3, "2"];
console.log(arr.find((n) => typeof n === "number")); // 1
```

### findIndex()

- 参数: `{ Function }`
- 描述: `查找` 返回它的下标，终止搜索

```js
const arr = [1, "2", 3, 3, "2"];
console.log(arr.findIndex((n) => typeof n === "number")); // 0
```

### fill()

- 参数: `{ target }必选 { indexStart }可选 { indexEnd }可选`
- 描述: `替换`用新元素替换掉数组内的元素，可以指定替换下标范围

```js
const items = [2, 8, 5];
items.fill(3, 1, 2); // [2, 3, 5];
```

### copyWithin()

- 参数: `{ target }必选 { indexStart }可选 { indexEnd }可选`
- 描述: `复制` 选择数组的某个下标，从该位置开始复制数组元素，默认从 0 开始复制。也可以指定要复制的元素范围

```js
arr.copyWithin(target, start, end);
const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(3));
// [1,2,3,1,2] 从下标为3的元素开始，复制数组，所以4, 5被替换成1, 2
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.copyWithin(3, 1));
// [1,2,3,2,3] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，所以4, 5被替换成2, 3
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.copyWithin(3, 1, 2));
// [1,2,3,2,5] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，结束位置为2，所以4被替换成2
```

### from()

- 参数: `{ Array | String | Object | Function }`
- 描述: `转换` 将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组,第二个参数是一个方法，返回一个新数组

```js
const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.from("foo");
// ["f", "o", "o"]

Array.from([1, 2, 3], (item) => item + 1);
// ["2", "3", "4"]
```

### of()

- 参数: `{ target }`
- 描述: `加强转换` 用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数 Array() 的不足。因为参数个数的不同，会导致 Array() 的行为有差异

```js
Array(); // []
Array(3); // [, , ,]
Array(3, 11, 8); // [3, 11, 8]
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]
```

### entries() 

- 描述: `迭代器` 返回键值对

```js
const arr = ["a", "b", "c"];
for (let v of arr.entries()) {
  console.log(v);
}
// [0, 'a'] [1, 'b'] [2, 'c']

//Set
const arr = new Set(["a", "b", "c"]);
for (let v of arr.entries()) {
  console.log(v);
}
// ['a', 'a'] ['b', 'b'] ['c', 'c']

//Map
const arr = new Map();
arr.set("a", "a");
arr.set("b", "b");
for (let v of arr.entries()) {
  console.log(v);
}
// ['a', 'a'] ['b', 'b']
```

### values()/keys()

- 描述: `迭代器` 返回键值对的 value

```js
const arr = ["a", "b", "c"];
for (let v of arr.values()) {
  console.log(v);
}
//'a' 'b' 'c'

//Set
const arr = new Set(["a", "b", "c"]);
for (let v of arr.values()) {
  console.log(v);
}
// 'a' 'b' 'c'

//Map
const arr = new Map();
arr.set("a", "a");
arr.set("b", "b");
for (let v of arr.values()) {
  console.log(v);
}
// 'a' 'b'
```

## 字符串方法

### toLowerCase()

- 描述: `小写` 把字符串转为小写，返回新的字符串

```js
var str = "Hello World";
var str1 = str.toLowerCase();
console.log(str); //Hello World
console.log(str1); //hello world
```

### toUpperCase()

- 描述: `大写` 把字符串转为大写，返回新的字符串

```js
var str = "hello world";
var str1 = str.toUpperCase();
console.log(str); //hello world
console.log(str1); //HELLO WORLD
```

### charAt()

- 参数: `{ Number }`
- 描述: `查找` 返回指定下标位置的字符 如果 index 不在 0-str.length(不包含 str.length)之间，返回空字符串

```js
var str = "hello world";
var str1 = str.charAt(6);
console.log(str1);
```

### indexOf()

- 参数: `{ Number | String } { index }`
- 描述: `查找` 返回某个指定的子字符串在字符串中第一次出现的位置

```js
var str = "Hello World";
var str1 = str.indexOf("o");
var str2 = str.indexOf("world");
var str3 = str.indexOf("o", str1 + 1);
console.log(str1); //4 默认只找第一个关键字位置，从下标0开始查找
console.log(str2); //-1 没有找到
console.log(str3); //7
```

### lastIndexOf()

- 参数: `{ Number | String } { index }`
- 描述: `查找` 返回某个指定的子字符串在字符串中最后出现的位置

```js
var str = "Hello World";
var str1 = str.lastIndexOf("o");
var str2 = str.lastIndexOf("world");
var str3 = str.lastIndexOf("o", str1 - 1);
console.log(str1); //7
console.log(str2); //-1
console.log(str3); //4
```

### slice()

- 参数: `{ indexStart } { indexEnd }`
- 描述: `截取` 返回字符串中提取的子字符串

```js
var str = "Hello World";
var str1 = str.slice(2); //如果只有一个参数，则提取开始下标到结尾处的所有字符串
var str2 = str.slice(2, 7); //两个参数，提取下标为2，到下标为7但不包含下标为7的字符串
var str3 = str.slice(-7, -2); //如果是负数，-1为字符串的最后一个字符。提取从下标-7开始到下标-2但不包含下标-2的字符串。前一个数要小于后一个数，否则返回空字符串

console.log(str1); //llo World
console.log(str2); //llo W
console.log(str3); //o Wor
```

### substring()

- 参数: `{ indexStart } { indexEnd }`
- 描述: `截取` 提取字符串中介于两个指定下标之间的字符

```js
var str = "Hello World";
var str1 = str.substring(2);
var str2 = str.substring(2, 2);
var str3 = str.substring(2, 7);
console.log(str1); //llo World
console.log(str2); //如果两个参数相等，返回长度为0的空串
console.log(str3); //llo W
//注意：substring()用法与slice()一样，但不接受负值的参数。
```

### substr()

- 参数: `{ indexStart } { indexEnd }`
- 描述: `截取` 返回从指定下标开始指定长度的的子字符串

```js
var str = "Hello World";
var str1 = str.substr(1);
var str2 = str.substr(1, 3);
var str3 = str.substr(-3, 2);
console.log(str1); //ello World
console.log(str2); //ell
console.log(str3); //rl
// 注意：如果没有指定length,返回从下标开始处结尾处的所有字符串。
```

### split()

- 参数: `{ String } { length }可选`
- 描述: `分割` 把字符串分割成字符串数组

```js
var str = "AA BB CC DD";
var string1 = "1:2:3:4:5";
var str1 = str.split(""); //如果把空字符串 ("")用作分割符，那么字符串的每个字符之间都会被分割
var str2 = str.split(" "); //以空格为分隔符
var str3 = str.split("", 4); //4指定返回数组的最大长度
var str4 = string1.split(":");
console.log(str1); // ["A", "A", " ", "B", "B", " ", "C", "C", " ", "D", "D"]
console.log(str2); //["AA" "BB" "CC" "DD"]
console.log(str3); //["A", "A", " ", "B"]
console.log(str4); // ["1", "2", "3", "4", "5"]
```

### replace()

- 参数: `{ RegExp } { String }`
- 描述: `替换` 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串

```js
var str = "hello WORLD";
var reg = /o/gi; //o为要替换的关键字，不能加引号，否则替换不生效，i忽略大小写，g表示全局查找
var str1 = str.replace(reg, "**");
console.log(str1); //hell** W**RLD
```

### match()

- 参数: `{ RegExp } { String }`
- 描述: `查找` 返回所有查找的关键字内容的数组

```js
var str = 'nihaoTo sjdiato';
var reg = /to/gi;
var str1 = str.match(reg);
console.log(str1); //["To", "to"]
console.log(str.match("Hello")); //null
```
