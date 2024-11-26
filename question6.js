// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

const todosElement = document.getElementById("photos");

async function getPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  const filteredPhotos = data.filter((photo) => photo.id <= 10);

  filteredPhotos.forEach((photo) => {
    const imageElement = document.createElement("img");

    imageElement.src = photo.url;
    imageElement.style.width = "200px";
    todosElement.append(imageElement);

    let title = photo.title;

    imageElement.addEventListener("click", (e) => {
      alert(title);
    });
  });
}

getPhotos();
