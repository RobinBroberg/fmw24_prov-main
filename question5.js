// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

const postElement = document.getElementById("posts");
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const div = document.createElement("div");

  data.forEach((post) => {
    const div = document.createElement("div");

    div.innerHTML = `<h2>${post.title}</h2> <br> ${post.body}`;
    div.setAttribute("class", "div");

    postElement.append(div);
  });
}

getPosts();
