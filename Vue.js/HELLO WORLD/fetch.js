const fetchTitle = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let titleData = "<ul>";
      data.map((value, ind, arr) => {
        titleData += `<li>${value.title}</li>`;
      });
      titleData += "</ul>";
      const divElement = document.getElementById("mytitle");
      divElement.innerHTML = titleData;
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchTitle();
