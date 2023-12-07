// const topla = (a , b) =>{
//      return a+b ;
// } 
// const cikar = (a , b) =>{
//      return a-b ;
// } 
// const hello = name => {
//      console.log("hello"+ name );
// }
// export {topla,hello,cikar};

// const getData = (user_id) => {
//      return new Promise(async(resolve, reject) =>{
//          const {post} = await axios("https://jsonplaceholder.typicode.com/posts?user_id="+user_id)
//          const {user} = await axios("https://jsonplaceholder.typicode.com/posts?users/"+user_id)
//          resolve(user);
//          resolve(post);

      
         
//          console.log(user);
//          console.log(post);
//      });
     
//  };



//      async function getData(userId) {
     
//       const {data : users} = await axios("https://jsonplaceholder.typicode.com/users" + userId);
//       const {data : posts} = await  axios("https://jsonplaceholder.typicode.com/posts?userID=" + userId);
 

//     -
     
//   console.log(users.json()+posts.json())
  
// }
     
     
     
// export default getData ;


import axios from "axios";
import fetch from 'node-fetch'

async function getData(id){

  try {
    const [user,post] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
     
    ]);

   const data = {...user.data,post:post.data}
    console.log(data);

  } catch (error) {
     console.log(error)
  }

}

export default getData