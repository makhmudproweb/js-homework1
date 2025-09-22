// setTimeout(() => {
//     console.log(10);
// }, 1000);
// console.log(2);

// const data = new Promise((resolve, reject) => {
//     resolve("Salom bolalar");
// });
// data
//     .then(info => console.log(info))
//     .catch(error => console.error(error))
//     .finally(final => console.log("finished"))


// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Salom bolalar")
//     }, 1000);
// });
// data.then(info => console.log(info))
//     .catch(error => console.error(error))
//     .finally(final => console.log("finished"))

// API - Alplication Programm Interface - bu frontend va backend o'rtasidagi bog'lovchi vosita

// fetch() - bu js dagi o'rnatilgan funksiya bu serverdan ma'lumot olib beradi

// HOMEWORK

// const data = new Promise(() => {
//     let res = fetch("https://jsonplaceholder.typicode.com/users").then(info => console.log(info))
// })
// data.then(info => console.log(info))

// async function getData() {
//     try {
//         const response = await
//         fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await
//         response.json()
//         console.log("backend ma'lumot: ", data)
//     } catch(error) {
//         console.log("Xatolik:", error);
//     }
// }

// getData();

async function loadUsers() {
  const box = document.querySelector(".card_box");

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("card");

      const name = document.createElement("h3");
      name.textContent = `Name: ${user.name}`;

      const username = document.createElement("p");
      username.textContent = `Username: ${user.username}`;

      const email = document.createElement("p");
      email.textContent = `Email: ${user.email}`;

      const phone = document.createElement("p");
      phone.textContent = `Phone: ${user.phone}`;

      const website = document.createElement("a");
      website.href = user.website;
      website.textContent = `Website: ${user.website}`;

      const company = document.createElement("p");
      company.textContent = `Company: ${user.company.name}`;

      card.append(name, username, email, phone, website, company);

      box.appendChild(card);
    });
  } catch (error) {
    console.error("Xatolik bor:", error);
  }
}

loadUsers();