// 基本类型

// 字符串
let char:string='char'

// 数字类型
let num:number=1

// 布尔类型
let flag:boolean=false

// 数组类型
let arr1:number[]=[2,32,43,12,53,31]
let arr2:string[]=['23','ss','你好','$$']
let arr3:Array<number>=[]

// 元组类型
let x:[string,number]
x=['ss',2]
let y:[string,number]=['yy',5]

// 枚举类型
enum months {}
enum types {'string','number','boolean'}
let index:types=types.boolean
let value:string=types[1]
console.log('index', index, 'value', value)

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
let u: undefined = undefined;
let n: null = null;

// Any
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// Never
// never类型表示的是那些永不存在的值的类型。

// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
