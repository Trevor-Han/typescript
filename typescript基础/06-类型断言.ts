/*
1.什么是类型断言?
TS中的类型断言和其它编程语言的类型转换很像, 可以将一种类型强制转换成另外一种类型
类型断言就是告诉编译器, 你不要帮我们检查了, 相信我，我知道自己在干什么。

例如: 我们拿到了一个any类型的变量, 但是我们明确的知道这个变量中保存的是字符串类型
      此时我们就可以通过类型断言告诉编译器, 这个变量是一个字符串类型
      此时我们就可以通过类型断言将any类型转换成string类型, 使用字符串类型中相关的方法了
* */
let str:any = 'it666';
// 方式一
// let len = (<string>str).length;
// 方式二
// 注意点: 在企业开发中推荐使用as来进行类型转换(类型断言)
//         因为第一种方式有兼容性问题, 在使用到了JSX的时候兼容性不是很好
let len = (str as string).length;
console.log(len);

