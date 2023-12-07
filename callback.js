// setTimeout(() => {
//     console.log("merhaba ben her saniye ");
// }, 1000);

// const sayHi = (cb) => {
//     cb();
// }
// sayHi(() => {
//     console.log("hello");
// });

 import fetch  from "node-fetch";
 
 import axios from "axios";
 
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("users yüklendi",users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((post) =>{
//          console.log("post 1  yüklendi",post);

//     fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then((data) => data.json())
//     .then((post) => console.log("post 2c  yüklendi",post));
//     });
// })

// async function getData(){
// const users = await (
//      await fetch("https://jsonplaceholder.typicode.com/users")).json();

// const post1 = await ( 
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

// const post2 = await ( 
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

// console.log("users",users);
// console.log("users",post1);
// console.log("users",post2);




// }
// getData();

// (async () => {
// const {data : users} = await  axios("https://jsonplaceholder.typicode.com/users");

// const {data:post1} = await  axios("https://jsonplaceholder.typicode.com/posts/1");

// const {data:post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

// console.log("users",users);
// console.log("post1",post1);
// console.log("post2",post2);
// }
// )();

const getUsers = () => {
    return new Promise(async(resolve, reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(data);
    });
};

const getPosts = (post_id) => {
    return new Promise(async(resolve, reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id)
        resolve(data);
    });
};

(async () => {
try {
const users = await  getUsers()
const posts = await getPosts(1)

console.log(users);
console.log(posts);
} catch (error) {
    console.log(error);
}
    

})(); 