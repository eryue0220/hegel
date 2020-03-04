(this.webpackJsonp=this.webpackJsonp||[]).push([[21],{1312:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return s}));t(19),t(5),t(3),t(1),t(13),t(14),t(22);var r=t(59),a=t(66);t(36);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/type-inference.mdx"}});var c={_frontmatter:o},u=a.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(u,i({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"type-inference"},"Type Inference"),Object(r.b)("hr",null),Object(r.b)("p",null,"One of the main features of Hegel is high-level type inference."),Object(r.b)("p",null,"Type Inference is an ability of analyzer to define valid type for variable/function without type annotation."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "isItNumber" is "number" even if you will not annotate it.\nlet isItNumber = 42;\n')),Object(r.b)("p",null,"There are many places where Hegel can infer type instead of you."),Object(r.b)("h2",{id:"variable-type-inference"},"Variable type Inference"),Object(r.b)("p",null,"Hegel can infer any JavaScript literal type."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'/*\nType of "a" variable is "{\n    1: number,\n    2: bigint,\n    3: string,\n    4: boolean,\n    5: symbol,\n    6: null,\n    7: undefined,\n    8: RegExp\n}"\n*/\nconst a = {\n  1: 1,\n  2: 2n,\n  3: "3",\n  4: true,\n  5: Symbol("for"),\n  6: null,\n  7: undefined,\n  8: /da/gi,\n};\n')),Object(r.b)("p",null,"Also, Hegel can inference variable type if variable value is a result of functionr or operator application."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// Type of \"sum\" variable is \"bigint\"\nconst sum = 2n + 44n;\n\n// Type of \"type\" variable is \"'string' | 'boolean' | 'number' | 'function' | 'object' | 'undefined' | 'symbol' | 'bigint'\"\nconst type = typeof isNaN;\n\n// Type of \"formated\" variable is \"string\"\nconst formated = sum.toLocaleString();\n")),Object(r.b)("h2",{id:"inference-of-generic-function-invocation-result"},"Inference of generic function invocation result"),Object(r.b)("p",null,"One more case for inference algorythm is function invocation. If you call generic function you may not apply type argument to it."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'function first<T>(arr: Array<T>): T | undefined {\n    return arr[0];\n}\n\n// Type of "arr" variable is Array<number>\nlet arr = [1, 2];\n\n// Type of "f" variable is "number | undefined"\nconst f = first(arr);\n')),Object(r.b)("h2",{id:"inference-of-function-arguments-and-return"},"Inference of function arguments and return"),Object(r.b)("p",null,"Also, you able to skip function arguments types and return type annotations and Hegel will try to infer this types. Lets see at few examples to understand rules of inference."),Object(r.b)("h3",{id:"empty-return"},"Empty return"),Object(r.b)("p",null,"If you defined function without return statement inside then return type of this function will be ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," for sync functions and ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<undefined>")," for async functions."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "syncNothing" function is "() => undefined"\nfunction syncNothing() {}\n\n// Type of "asyncNothing" function is "async () => Promise<undefined>"\nasync function asyncNothing() {}\n')),Object(r.b)("h3",{id:"existed-return-statement"},"Existed return statement"),Object(r.b)("p",null,"If you defined function with return statement inside then return type of this function will be type of return statement argument."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "getNumber" function is "() => number"\nfunction getNumber() {\n    return 42;\n}\n\n// Type of "getNumberAsync" function is "async () => Promise<number>"\nasync function getNumberAsync() {\n    return 42;\n}\n')),Object(r.b)("h3",{id:"arguments"},"Arguments"),Object(r.b)("p",null,"First of all, Hegel defines your argument as type variable and convert your function into generic function."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "provideEverything" function is "<a\'>(a\') => undefined"\nfunction provideEverything(everything) {\n\n}\n')),Object(r.b)("p",null,"This algorythm gives an ability to inference full generic functions like identity."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "id" function is "<a\'>(a\') => a\'"\nfunction id(x) {\n  return x;\n}\n')),Object(r.b)("p",null,"If your argument is used as argument of an operator or function then this argument type will become the same as argument at used operator or function."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Inference by operator usage\n// Type of "greatings" function is "(string) => string"\nfunction greatings(name) {\n    return "Hello, " + name + "!";\n}\n\n// Inference by function usage\n// Type of "welcome" function is "(string) => string"\nfunction welcome(name) {\n    return greatings(name) + "Nice to see you at this page";\n}\n')),Object(r.b)("p",null,"If the argument of operator or function is same type as variable then argument type will not be changed, but will be added a constraint of this operator or function argument. "),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "add" function is "<T: bigint | number | string>(T, T) => T"\nfunction add(a, b) {\n    return a + b;\n}\n\n// Type of "prop" function is "<a\': Object, b\': $Keys<a\'>>(a\', b\') => $PropertyType<a\', b\'>"\nfunction prop(a, b) {\n    return a[b];\n}\n\n// Type of "length" function is "<a\': { length: a0\', ... }, a0\'>(a\') => a0\'"\nfunction length(a) {\n    return a.length;\n}\n\n// Type of "mul" function is "<T: bigint | number | string>(T, number) => T"\nfunction mul(a, b) {\n    while(b > 0) {\n        a = add(a, a);\n        b--;\n    }\n    return a;\n}\n')),Object(r.b)("h3",{id:"function-throws-inference"},"Function throws inference"),Object(r.b)("p",null,"As was mentioned, Hegel has ",Object(r.b)("a",i({parentName:"p"},{href:"/hegel/docs/magic-types#throwsreturntype-errortype"}),"$Throws")," magic type, which gives an ability to annotate type of Error which can be thrown by a function. But this type can be inferenced too, by analyzing of which function you use and which type you throw inside your function."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// Type of \"assertType\" function is \n// \"(unknown, 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined') => undefined throws TypeError\"\nfunction assertType(arg, type) {\n    if (typeof arg !== type) {\n        throw new TypeError(\"Wrong argument type\");\n    }\n}\n\n// Type of \"validateNumber\" function is \"(unknown) => undefined throws TypeError\"\nfunction validateNumber(arg) {\n  assertType(arg, \"number\");\n}\n")),Object(r.b)("p",null,'If you provide try-catch statement for the "validateNumber" - throws will be removed'),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'function assertType(arg, type) {\n    if (typeof arg !== type) {\n        throw new TypeError("Wrong argument type");\n    }\n}\n\n// Type of "validateNumber" function is "(unknown) => undefined"\nfunction validateNumber(arg) {\n  try {\n    assertType(arg, "number");\n  } catch {\n\n  }\n}\n')),Object(r.b)("h2",{id:"error-type-inference-inside-catch-statement"},"Error type inference inside catch statement"),Object(r.b)("p",null,"As result of previous inference Hegel can inference the argument type of catch statement."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'function assertType(arg, type) {\n    if (typeof arg !== type) {\n        throw new TypeError("Wrong argument type");\n    }\n}\n\ntry {\n  assertType(4, "string");\n// Type of "e" variable is "TypeError | unknown"\n} catch(e) {}\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/type-inference.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-type-inference-mdx-f6515abb843f70b24191.js.map