// // const User = {
// //    login: null,
// //    password: null,
// //    role: null,
// //    age: null,
// // };

// // function CreateUser({ login, password, isAdmin }) {
// //    return Object.create(User, {
// //       login: { value: login, enumerable: true, writable: true },
// //       password: { value: password, enumerable: true, writable: true },
// //       role: {
// //          value: isAdmin ? "Admin" : "user",
// //          enumerable: true,
// //          writable: true,
// //       },
// //       verify: {
// //          value(password) {
// //             return this.password === password;
// //          },
// //       },
// //    });
// // }

// // const dataUser111 = {
// //    login: "Ivan",
// //    password: "1243nswivbwkASdfs",
// //    isAdmin: false,
// //    age: null,
// // };

// // const user111 = CreateUser(dataUser111);
// // console.log(Object.keys(user111));
// // ===========================================================================
// // function User({ login = null, password = null, isAdmin = null, age = 0 }) {
// //    this.login = login;
// //    this.password = password;
// //    this.role = isAdmin ? "Admin" : "user";
// //    this.age = age;
// //    this.verify = function (password) {
// //       return this.password === password;
// //    };
// // }

// // function UserAdmin({ login = null, password = null, isAdmin = null, age = 0 }) {
// //  console.log(new.target)
// //    this.login = login;
// //    this.password = password;
// //    this.role = isAdmin ? "Admin" : "user";
// //    this.age = age;
// //    this.verify = function (password) {
// //       return this.password === password;
// //    };
// // }

// // function User(data) {
// //    if (new.target) {
// //       const { login = null, password = null, isAdmin = null, age = 0 } = data;
// //       this.login = login;
// //       this.password = password;
// //       this.role = isAdmin ? "Admin" : "user";
// //       this.age = age;
// //       this.verify = function (password) {
// //          return this.password === password;
// //       };
// //       return this;
// //    } else {
// //       return new User(data);
// //    }
// // }

// function User(data) {
//    if (new.target) {
//       const { login = null, password = null, isAdmin = null, age = 0 } = data;

//       const role = isAdmin ? "Admin" : "user";

//       const object = Object.assign(this, {
//          login,
//          password,
//          role,
//          age,
//       });

//       object.toString = function () {
//          return `Користувач ${this.login} роль: ${this.role}`;
//       };

//       if (role === "Admin") {
//          object.verify = function (password) {
//             // console.debug(password, this);
//             return this.password === password;
//          };
//       }

//       if (age > 50) {
//          object.login = String(object.login).toUpperCase();
//       }

//       return object;
//    } else {
//       return new User(data);
//    }
// }

// const testData = {
//    login: "Test",
//    password: "Data1234",
//    isAdmin: true,
//    age: 18,
// };

// const testUser = User(testData);
// // console.log(testUser);
// // console.log(testUser.login);

// // console.log(testUser.verify());

// // console.log(Object.getPrototypeOf(testUser) === User.prototype);

// console.log(testUser.toString());

// // ========================================
// // const verifyUser = testUser.verify; //йде виривання з контексту (втрата this) треба його явно привязати для цього ф-я apply(обєкт, масив елементів)
// // console.log(verifyUser.apply(testUser, ["Data1234"]));

// // const verifyUser = testUser.verify.bind(testUser, "Data1234"); //йде створення нової ф-ї з привязкою контексту
// // console.log(verifyUser());

// // const verifyUser = testUser.verify;
// // console.log(verifyUser.call(testUser, "Data1234")); //йде виклик ф-ї з привязкою контексту
// // ========================================
// // =========наслідування ф-ї ==============
// // ========================================
// function Animall(name) {
//    this.name = name;
// }

// function Person(name, age) {
//    Animall.call(this, name); //або aply(this,[name,....])
//    this.age = age;
// }

// const user2 = new Person("Ivan", 32);
// console.log(user2.name);
