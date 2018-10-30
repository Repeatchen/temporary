
// 自动拆分字符串
// function test(row,name,age){
// 	console.log(row);
// 	console.log(name);
// 	console.log(age);

// }
// var myname = 'chen fangyu';
// var getAge = function (){
// 	return 18;
// }

// test`hello my name is ${myname},i'm${getAge()}`



// 无返回值
// function test(): void{ 
//     return 12
// }

// 函数赋值，默认值要写在后面否则报错  可选就可以在后面加? 必选参数后面
// function test(a: string, b: string, c: string = 'zhansan') { 
//     console.log(a); 
//     console.log(b);
//     console.log(c);
// }

// test("aaa", 'bbb', 'ccc');
// test("aaa", 'bbb');

// function test(a: string, b?: string, c: string = 'zhansan') { 
//     console.log(a); 
//     console.log(b);
//     console.log(c);
// }

// test("aaa", 'bbb', 'ccc');
// test("aaa", 'bbb');

//扩展运算符
// function test(...args) { 
//     args.forEach(function (arg) { 
//         console.log(arg)
//     })
// }


// test(1, 2, 3);
// test(5, 6, 7, 8, 9);


// function test2(a, b, c) { 
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// var args = [1, 2];
// test2(...args);
// var args2 = [3, 4, 5, 6, 7];
// test2(...args2)




class HelloTypeScript {
    helloString: string;
    constructor(message: string) {
        this.helloString = message;
    }
    hello() {
        return this.helloString;
    }
  }
  let myName: string = 'zhang san';
  let myAge: number = 18;
  let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge} years old next month`;
  let helloTypeScript = new HelloTypeScript(sentence);
  document.body.innerHTML = helloTypeScript.hello();