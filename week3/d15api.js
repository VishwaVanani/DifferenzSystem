const API_BASE = "https://jsonplaceholder.typicode.com";

const userList = document.getElementById("user-list");
const loading = document.getElementById("loading");
const createBtn = document.getElementById("create-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// GET Users
async function fetchUsers() {
  loading.style.display = "block"; // show loading
  try {
    const response = await fetch(`${API_BASE}/users`, {
      
    });

    // Check status
    if (!response.ok) {
      throw new Error(`Failed to fetch users. Status: ${response.status}`);
    }

    const users = await response.json();
    renderUsers(users);

  } catch (error) {
    userList.innerHTML = `<li style="color:red">${error.message}</li>`;
    console.error(error);
  } finally {
    loading.style.display = "none"; // hide loading
  }
}

// Render Users in DOM

function renderUsers(users) {
  userList.innerHTML = ""; // clear old
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} – ${user.email}`;
    userList.appendChild(li);
  });
}

// POST: Create User
async function createUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Name and Email are required!");
    return;
  }

  createBtn.disabled = true; // prevent multiple clicks
  createBtn.textContent = "Creating...";

    try {
    const response = await fetch(`${API_BASE}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });


    // Check status code
    if (response.status !== 201) {
      throw new Error(`Failed to create user. Status: ${response.status}`);
    }

    const newUser = await response.json();
    console.log("New user created:", newUser);

    // Optionally, add new user to DOM
    const li = document.createElement("li");
    li.textContent = `${newUser.name} – ${newUser.email}`;
    userList.appendChild(li);

    // Clear inputs
    nameInput.value = "";
    emailInput.value = "";

  } catch (error) {
    alert(error.message);
    console.error(error);
  }finally {
    createBtn.disabled = false;
    createBtn.textContent = "Create User";
  }
}

// Event Listener
createBtn.addEventListener("click", createUser);

// Initial Load
fetchUsers();
