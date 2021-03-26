

# Array

## concat() 合并
- 描述: 用于连接两个或多个数组
- 用法:
``` js
var arr1 = [1,2,3];
var arr2 = [4,5];
var arr3 = arr1.concat(arr2);
console.log(arr1); //[1, 2, 3]
console.log(arr3); //[1, 2, 3, 4, 5]
```
## join() 分隔
- 描述: 把数组转化为字符串，默认使用 ',' 分隔，不改变原数组
- 用法:
``` js
 var arr = [2, 3, 4];
 console.log(arr.join()); // 2,3,4
 console.log(arr.join(':')); // 2:3:4
```
## push() 新增
- 描述: 向数组的末尾添加一个或多个元素，并返回新的长度
- 用法:
``` js
var a = [2,3,4];
var b = a.push(5);
console.log(a);  //[2,3,4,5]
console.log(b);  //4
```
## pop() 删除尾部
- 描述: 用于删除并返回数组的最后一个元素。返回最后一个元素，会改变原数组
- 用法:
``` js
var arr = [2,3,4];
console.log(arr.pop()); //4
console.log(arr);  //[2,3]
```
## shift() 删除头部
- 描述: 用于把数组的第一个元素从其中删除，并返回第一个元素的值。返回第一个元素，改变原数组
- 用法:
``` js
var arr = [2,3,4];
console.log(arr.shift()); //2
console.log(arr);  //[3,4]
```
## unshift() 新增头部
- 描述: 可向数组的开头添加一个或更多元素，并返回新的长度。返回新长度，改变原数组
- 用法:
``` js
var arr = [2,3,4,5];
console.log(arr.unshift(3,6)); //6
console.log(arr); //[3, 6, 2, 3, 4, 5]
```
## slice() 切割
- 描述: 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素
- 用法:
``` js
var arr = [2,3,4,5];
console.log(arr.slice(1,3));  //[3,4]
console.log(arr);  //[2,3,4,5]
```
## splice() 删除替换
- 描述: 可删除从 index 处开始的零个或多个元素，且可以在删除位置替换新的元素，返回删 除的元素，改变原数组
- 用法:
``` js
var a = [5,6,7,8];
console.log(a.splice(1,0,9)); //[]
console.log(a);  // [5, 9, 6, 7, 8]
var b = [5,6,7,8];
console.log(b.splice(1,2,3));  //[6, 7]
console.log(b); //[5, 3, 8]
```
## sort 排序
- 描述: 按照 Unicode code 位置排序，默认升序
- 用法:
``` js
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2];
scores.sort(); // [1, 10, 2, 21]

scores.sort((a, b) =>  a - b);
```
## reverse() 倒序
- 描述: 用于颠倒数组中元素的顺序。返回的是颠倒后的数组，会改变原数组
- 用法:
``` js
var arr = [2,3,4];
console.log(arr.reverse()); //[4, 3, 2]
console.log(arr);  //[4, 3, 2]
```
## indexOf() 查找
- 描述: 接受两个参数：查找的值、查找起始位置,不存在，返回 -1 ；存在，返回位置
- 用法:
``` js
var a = [2, 9, 9];
a.indexOf(2); // 0
a.indexOf(7); // -1
```
## lastIndexOf() 查找
- 描述: 用法同上 indexOf是从前往后查找， lastIndexOf 是从后往前查找
- 用法:
``` js
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```
## every() 判断
- 描述: 对数组的每一项都运行给定的函数，每一项都返回 ture,则返回 true
- 用法:
``` js
function isBigEnough(element, index, array) {
  return element < 10;
}    
[2, 5, 8, 3, 4].every(isBigEnough);   // true
```
## some() 判断
- 描述: 对数组的每一项都运行给定的函数，任意一项都返回 ture,则返回 true
- 用法:
``` js
function compare(element, index, array) {
  return element > 10;
}    
[2, 5, 8, 1, 4].some(compare);  // false
[12, 5, 8, 1, 4].some(compare); // true
```
## includes() 判断
- 描述: 判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误
- 用法:
``` js
var a = [1, 2, 3];
a.includes(2); // true
a.includes(4); // false
```
## filter() 过滤
- 描述: 对数组的每一项都运行给定的函数，返回 结果为 ture 的项组成的数组
- 用法:
``` js
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

var longWords = words.filter(function(word){
  return word.length > 6;
});
```
## map() 遍历
- 描述: 对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组
- 用法:
``` js
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
```
## forEach() 数组遍历
- 描述: 数组
- 用法:
``` js
 const items = ['item1', 'item2', 'item3'];
    const copy = [];
    items.forEach((item) => {
      copy.push(item);
   });
```
## find() 查找
- 描述: 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索
- 用法:
``` js
const arr = [1, "2", 3, 3, "2"]
console.log(arr.find(n => typeof n === "number")) // 1
```
## findIndex() 查找
- 描述: 返回它的下标，终止搜索
- 用法:
``` js
const arr = [1, "2", 3, 3, "2"]
console.log(arr.findIndex(n => typeof n === "number")) // 0
```
##  fill() 替换
- 描述: 用新元素替换掉数组内的元素，可以指定替换下标范围
- 用法:
``` js
arr.fill(value, start, end)
const items = [2, 8, 5];
items.fill(3, 1, 2);  // [2, 3, 5];
```
##  copyWithin() 复制
- 描述: 选择数组的某个下标，从该位置开始复制数组元素，默认从0开始复制。也可以指定要复制的元素范围
- 用法:
``` js
arr.copyWithin(target, start, end)
const arr = [1, 2, 3, 4, 5]
console.log(arr.copyWithin(3))
 // [1,2,3,1,2] 从下标为3的元素开始，复制数组，所以4, 5被替换成1, 2
const arr1 = [1, 2, 3, 4, 5]
console.log(arr1.copyWithin(3, 1)) 
// [1,2,3,2,3] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，所以4, 5被替换成2, 3
const arr2 = [1, 2, 3, 4, 5]
console.log(arr2.copyWithin(3, 1, 2)) 
// [1,2,3,2,5] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，结束位置为2，所以4被替换成2
```
##  from() 转换
- 描述: 将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组,第二个参数是一个方法，返回一个新数组
- 用法:
``` js
const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.from('foo');
// ["f", "o", "o"]

  Array.from([1, 2, 3], (item) => item + 1)
// ["2", "3", "4"]
```
##  of() 加强转换
- 描述: 用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数 Array() 的不足。因为参数个数的不同，会导致 Array() 的行为有差异
- 用法:
``` js
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```
##  entries()  迭代器
- 描述: 返回键值对
- 用法:
``` js
const arr = ['a', 'b', 'c'];
for(let v of arr.entries()) {
  console.log(v)
}
// [0, 'a'] [1, 'b'] [2, 'c']

//Set
const arr = new Set(['a', 'b', 'c']);
for(let v of arr.entries()) {
  console.log(v)
}
// ['a', 'a'] ['b', 'b'] ['c', 'c']

//Map
const arr = new Map();
arr.set('a', 'a');
arr.set('b', 'b');
for(let v of arr.entries()) {
  console.log(v)
}
// ['a', 'a'] ['b', 'b']
```
## values()/keys() 迭代器 
- 描述: 返回键值对的value
- 用法:
``` js
const arr = ['a', 'b', 'c'];
for(let v of arr.values()) {
  console.log(v)
}
//'a' 'b' 'c'

//Set
const arr = new Set(['a', 'b', 'c']);
for(let v of arr.values()) {
  console.log(v)
}
// 'a' 'b' 'c'

//Map
const arr = new Map();
arr.set('a', 'a');
arr.set('b', 'b');
for(let v of arr.values()) {
  console.log(v)
}
// 'a' 'b'
```




