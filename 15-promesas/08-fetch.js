const url = "https://jsonplaceholder.typicode.com/todos/a";
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json(); //Solo si la api permite consumir un JSON, sino .text
    }
    return Promise.reject(response.status);
  })
  .then((data) => console.log(data))
  .catch((message) => console.log({ message }));
