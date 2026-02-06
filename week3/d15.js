const list = document.getElementById("userList");

fetch("https://api.github.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.login;
      list.appendChild(li);
    })
    .catch(error => {
        console.error(error);
        document.getElementById("userList").textContent("Error");
    })

  });


  //nowdays no one use .then chain anymore unless needed 
  //this is the standard way with async/await 

//   async function getUsers() {
//   try {
//     const response = await fetch("https://api.example.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

