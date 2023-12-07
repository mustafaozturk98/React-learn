const users = [
    {
     name : "ahmet",
     age: 13
    },
    {
     name : "mehmet",
     age : 19
    },
    {
        name : "mehmet",
        age : 28
    },

    {
     name :"ali"
    },
    ];


    const every = users.every((item) => item.age > 20) ; 
    console.log(every);

    // const some = users.some(
    //     ({name,age}) => name === "ahmet"
        
    // )
    // console.log(some);


    // const filtered = users.filter(
    //     ({name,age}) => name === "mehmet" && age < 20); 
    // console.log(filtered); 

    //  const result = users.find((item) => item.name === "mehmet" && item.age > 20 )
    //  console.log(result);

// users.push("fatma");

// console.log(users);

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
    
// }

// users.map(item){
//     console.log(item);
// }

