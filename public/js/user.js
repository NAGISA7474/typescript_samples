"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 型を明示的に定義
// var user: {
//     id: number;
//     email: string;
//     isActive: boolean;
// } = {
//     id:1,
//     email: "test@test.com",
//     isActive: true,
// }s
// user.id = 32;
// user.id = "32";
// 型推論で定義
var user = {
    id: 1,
    name: {
        first: "Taro",
        last: "Tokyo",
    },
    email: "test@test.com",
    isActive: true,
};
// user.name.first = 1;
console.log(user);
