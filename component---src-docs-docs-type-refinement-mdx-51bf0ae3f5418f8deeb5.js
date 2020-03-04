(this.webpackJsonp=this.webpackJsonp||[]).push([[22],{1313:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));t(19),t(5),t(3),t(1),t(13),t(14),t(22);var r=t(59),a=t(66);t(36);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/type-refinement.mdx"}});var s={_frontmatter:o},c=a.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,i({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"type-refinement"},"Type Refinement"),Object(r.b)("hr",null),Object(r.b)("p",null,"Type refinement is an ability to prove that your variable has specific type. It helps you to build more type safe program when you work with user input or server response and don't miss static type analysis."),Object(r.b)("p",null,"Lets explore the next example."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'function calculateSum(firstUserInput: unknown, secondUserInput: unknown) {\n  if (typeof firstUserInput !== "number") {\n    throw new TypeError("first provided value has a wrong type. Shoulde be a number");\n  }\n  if (typeof secondUserInput !== "number") {\n    throw new TypeError("second provided value has a wrong type. Shoulde be a number");\n  }\n  return firstUserInput + secondUserInput;\n}\n')),Object(r.b)("p",null,"If you open this example in ",Object(r.b)("a",i({parentName:"p"},{href:"/hegel/try#GYVwdgxgLglg9mABBAhgGwiNKoFMDKIAtgBTAwBOAzlAKpW4UCSYADiFAFyLgDWYcAO5gANIgYQEAE3qMW7LjzD8hYAJSIA3gChEiGMEQkoAT1a44h8tToNmbDogCEAXheIARGGIAjRh40dPT0oAAsKIUQwXEFEABUzXABRCgiKEg9rGkRWCIA3GClcKUQ89BBcRFCUKkQUREEIsABzRFNzADpEfFC4LCLEPzqo3381AG5dRABfKYMjdotDCWlZewVnN09vIj8KAK0pkPDI6NiE8xS0jJWwEty4AqKSsrQKqprhxoRWxa6evpoAZDeo7PYBSZ6WZ6Ci4KAgChILK2OQOKCIADU4lwkjua3kHEm0yAA"}),"Playground")," then you will see that Hegel doesn't show any type error at the 8 line. But why? "),Object(r.b)("p",null,'It\'s because we proved by conditions that "firstUserInput" and "secondUserInput" will always be a numbers at the 8 line.'),Object(r.b)("p",null,"So, type refinement it's a specific condition inside ",Object(r.b)("inlineCode",{parentName:"p"},"if"),", ",Object(r.b)("inlineCode",{parentName:"p"},"while"),", ",Object(r.b)("inlineCode",{parentName:"p"},"do..while"),", ",Object(r.b)("inlineCode",{parentName:"p"},"for"),", ternary and logical operators, which precise the type of variable."),Object(r.b)("p",null,"Hegel has several conditions which could be used as refinement operator."),Object(r.b)("p",null,"Table of contents:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#equality"}),"Equality")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#switch"}),"switch")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#identifier"}),"Identifier")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#typeof"}),"typeof")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#instanceof"}),"instanceof")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#in"}),"in")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#not"}),"Not")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#combinations"}),"Combinations")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#return-break-continue-throw"}),"return, break, continue, throw")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#needlessrefinement"}),"Needless refinement"))),Object(r.b)("h2",{id:"equality"},"Equality"),Object(r.b)("p",null,"The most simple refinement operator is equality. You only may prove equality of variable and some literal inside the block like this"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'function get2(arg: unknown): 2 {\n  if (arg === 2) {\n    // Inside if block type of "arg" variable is "2"\n    return arg;\n  }\n  throw new TypeError("Arg is not 2");\n} \n')),Object(r.b)("h2",{id:"switch"},"switch"),Object(r.b)("p",null,'The same logic has switch expression. In each case you prove that variable equals to a value. But with an exception - if you drop "break", "return" and "throw" statement from case then the next case will include previous prove.'),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'type User = { name: string, age: number, id: number };\n\ntype Action =\n  | { type: "DELETE_USER", payload: { userId: number } }\n  | { type: "REMOVE_USER", payload: { userId: number } }\n  | { type: "CREATE_USER", payload: { user: User } };\n\nfunction reducer(action: Action) {\n  switch (action.type) {\n    case "REMOVE_USER":\n    case "DELETE_USER":\n      // In this case action type is "{ payload: { userId: number }, type: \'DELETE_USER\' } | { payload: { userId: number }, type: \'REMOVE_USER\' }"\n      return "User deleted";\n    case "CREATE_USER":\n      // In this case action type is "{ payload: { user: { age: number, id: number, name: string } }, type: \'CREATE_USER\' }"\n      return action.payload.user;\n    default:\n      // In this case action type is "never"\n      panic(action);\n  }\n}\n\nfunction panic(arg: ?never) {\n  throw new Error();\n}\n')),Object(r.b)("h2",{id:"identifier"},"Identifier"),Object(r.b)("p",null,"The second simple refinement operator is identifier. The main restriction of this refinement that it can be used only inside logical expressions"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'const maybeTwo: ?number = 2;\n\n// We have proved that "maybeTwo" at the right part of "logical and" is not "falsy", so we can use "maybeTwo" with "+" operator\n// Type of "sub" variable is "0 | number | undefined"\nconst sum = maybeTwo && maybeTwo + 4;\n\n// We have proved that "maybeTwo" at the right part of "logical or" is  "falsy", so we can return something to remove this union case.\n// Type of "defaultTwo" variable is "2 | number"\nconst defaultTwo = maybeTwo || 2;\n')),Object(r.b)("h2",{id:"typeof"},"typeof"),Object(r.b)("p",null,"Typeof refinement based on comparison of return value of ",Object(r.b)("inlineCode",{parentName:"p"},"typeof")," operator and string literal."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'const maybeTwo: number | string = 2;\n\n// We have proved that in positive case of condition inside ternary operator "maybeTwo" variable will have a type "string" and in negative - type "number"\n// Type of "two" variable is "number"\nconst two = typeof maybeTwo === "string" ? Number(maybeTwo) : maybeTwo;\n')),Object(r.b)("h2",{id:"instanceof"},"instanceof"),Object(r.b)("p",null,"Instanceof refinement prove that variable or property inside variable is instance of provided constructor."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"class User {}\nclass Admin extends User { sayHiToAdmin() {} }\n\nconst user = new User();\n\nif (user instanceof Admin) {\n  user.sayHiToAdmin();\n}\n")),Object(r.b)("h2",{id:"in"},"in"),Object(r.b)("p",null,"In refinement prove that variable or property inside variable has specified property."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'class User {}\nclass Admin { sayHiToAdmin() {} }\n\nconst user: User | Admin = new User();\n\nif ("sayHiToAdmin" in user) {\n  user.sayHiToAdmin();\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'const unknownObj: {...} = {};\n\nif ("value" in unknownObj) {\n  // Type of "unknownValue" variable is "unknown"\n  const unknownValue = unknownObj.value; \n}\n')),Object(r.b)("h2",{id:"in-1"},"in"),Object(r.b)("p",null,"In refinement prove that variable or property inside variable has specified property."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'class User {}\nclass Admin { sayHiToAdmin() {} }\n\nconst user: User | Admin = new User();\n\nif ("sayHiToAdmin" in user) {\n  user.sayHiToAdmin();\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'const unknownObj: {...} = {};\n\nif ("value" in unknownObj) {\n  // Type of "unknownValue" variable is "unknown"\n  const unknownValue = unknownObj.value; \n}\n')),Object(r.b)("h2",{id:"not"},"Not"),Object(r.b)("p",null,'If you use any refinement condition with logical "not" operator or oposite operators like not-equal, strict not-not equal you will prove negative case of your refinement'),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"class Empire { aveEmperor() {} }\nclass Republic { spqr() {} }\n\nconst rome: Empire | Republic = new Empire();\n\nif (!(rome instanceof Republic)) {\n  // rome in this case is Empire\n  rome.aveEmperor();\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"type Answer = 'To Be' | 'Not to Be';\n\nfunction hamlet(answer: Answer) {\n  if (answer !== 'To Be') {\n    // Type of variable is \"'Not to Be'\" inside this scope\n    return answer;\n  }\n  throw new Error();\n}\n")),Object(r.b)("h2",{id:"combinations"},"Combinations"),Object(r.b)("p",null,'Also, you may combine existed refinements via "logical and" or "logical or" operators.'),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'const stranger = JSON.parse(\'{}\');\n\nif (\n  typeof stranger === "object" &&\n  stranger != null &&\n  "secretPhrase" in stranger &&\n  stranger.secretPhrase === "valar morghulis"\n) {\n  // Type of "stranger" variable in this scope is "{ secretPhrase: "valar morghulis", ... }"\n  const someoneWithoutName = stranger;\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'function detectSong(songPhrase: string) {\n  if (songPhrase === "It\'s like I\'m paranoid" || songPhrase === "looking over my back") {\n    // Type of "songPhrase" in this scope is "\'It\'s like I\'m paranoid\' | \'looking over my back\'\n    const familiarPhrase = songPhrase;\n    return "Linkin Park - Papercut";\n  }\n}\n')),Object(r.b)("h2",{id:"return-break-continue-throw"},"return, break, continue, throw"),Object(r.b)("p",null,"If you use next statements (return, throw, break, continue) inside refinement scope, you prove that outside this block your variable will have oposite type."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'class Empire { aveEmperor() {} }\nclass Republic { spqr() {} }\n\nconst rome: Empire | Republic = new Empire();\n\nif (rome instanceof Empire) {\n  throw new TypeError("Empire was fallen!");\n}\n\n// rome in this case is Republic\nrome.spqr();\n')),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"class Empire { aveEmperor() {} }\n\nconst empires: Array<Empire> = [];\n\nempires[1] = new Empire();\n\nfor (const empire of empires) {\n  if (empire === undefined) {\n    continue;\n  }\n  empire.aveEmperor();\n}\n")),Object(r.b)("h2",{id:"needless-refinement"},"Needless refinement"),Object(r.b)("p",null,"Sometimes (especially after refactoring) you may do refinement which does not do something usefull. As example is provement that type of variable is ",Object(r.b)("inlineCode",{parentName:"p"},"number")," while variable type is always ",Object(r.b)("inlineCode",{parentName:"p"},"number"),". In this case Hegel try to notify you about it."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'const calculatedSum = 42 + 14;\n\n// Error: Type number can\'t be "string" type\nif (typeof calculatedSum === "number") {\n  \n}\n')),Object(r.b)("p",null,"Another reallife example that after refactoring you dropped a variant of union in switch, but your code still try to handle this case:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'type User = { name: string, age: number, id: number };\n\ntype Action =\n  | { type: "DELETE_USER", payload: { userId: number } }\n// Deleted after refactoring case\n//  | { type: "REMOVE_USER", payload: { userId: number } }\n  | { type: "CREATE_USER", payload: { user: User } };\n\nfunction reducer(action: Action) {\n  switch (action.type) {\n    // Error: Property can\'t be "\'REMOVE_USER\'"\n    case "REMOVE_USER":\n    case "DELETE_USER":\n      // In this case action type is "{ payload: { userId: number }, type: \'DELETE_USER\' } | { payload: { userId: number }, type: \'REMOVE_USER\' }"\n      return "User deleted";\n    case "CREATE_USER":\n      // In this case action type is "{ payload: { user: { age: number, id: number, name: string } }, type: \'CREATE_USER\' }"\n      return action.payload.user;\n  }\n}\n')))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/type-refinement.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-type-refinement-mdx-51bf0ae3f5418f8deeb5.js.map