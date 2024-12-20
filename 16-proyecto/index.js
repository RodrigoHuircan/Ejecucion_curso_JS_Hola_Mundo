let serialize = (target) => {
  return Array.from(target.elements).reduce((acc, el) => {
    if (!el.name) return acc;
    acc[el.name] = el.value;
    return acc;
  }, {});
};

class User {
  static #url = "https://jsonplaceholder.typicode.com/users"; //Propiedad privada, static porque no necesito la url en cada instancia
  static #users = []; //Es para no ir a buscar constantemente los usuarios a la api
  static #ul = (() => {
    const ul = document.createElement("ul");
    ul.classList.add(
      "bg-gray-800",
      "shadow-md",
      "rounded-lg",
      "w-[600px]",
      "text-center",
      "mx-auto",
      "mt-10",
    );
    return ul;
  })();
  static #initialValues = {
    name: "",
    email: "",
  };

  constructor(data) {
    this.name = data.name;
    this.email = data.email;
  }

  static #form = (() => {
    const form = document.createElement("form");
    form.classList.add(
      "bg-gray-800",
      "shadow-md",
      "rounded-lg",
      "w-[600px]",
      "text-center",
      "mx-auto",
      "p-6",
      "space-y-4",
      "mt-10",
    );
    return form;
  })();

  static async getAll() {
    try {
      const response = await fetch(this.#url);
      if (!response.ok) throw response;
      this.#users = await response.json();
      return this.#users;
    } catch (e) {
      console.log("Error", e);
    }
  }

  static renderUser(u) {
    let li = document.createElement("li");
    li.innerText = u.name;

    li.classList.add(
      "py-3",
      "border-b",
      "border-gray-700",
      "hover:bg-gray-700",
      "hover:text-white",
    );
    return li;
  }

  static render() {
    this.#ul;
    let users = this.#users;

    users.forEach((u, index) => {
      const li = this.renderUser(u);
      if (index === 0) li.classList.add("rounded-t-lg");
      if (index === this.#users.length - 1) {
        li.classList.add("rounded-b-lg");
        li.classList.remove("border-b");
      }

      this.#ul.appendChild(li);
    });

    return this.#ul;
  }

  validate() {
    let errors = {};
    if (!this.name) {
      errors.name = "Nombre es obligatorio";
    }
    if (!this.email) {
      errors.email = "El correo es obligatorio";
    }

    return errors;
  }

  static onSubmit(e) {
    e.preventDefault();
    let data = serialize(e.target);
    console.log(data);
    let user = new User(data);
    const errors = user.validate();
    if (Object.keys(errors).length > 0) {
      //Si hay error renderizarlos
      this.#form.innerHTML = this.formHTML({ data, errors });
      return;
    }
    user.save();
  }

  save() {
    return User.save(this);
  }

  static async save(user) {
    try {
      const response = await fetch(this.#url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      this.#users.unshift(data);
      this.#ul.prepend(this.renderUser(data));
    } catch (e) {
      console.log("Error", e);
    }
  }

  static formHTML({ data, errors }) {
    return `
    <form>
      <div class="text-left">
        <label class="block text-gray-300 font-medium mb-2">Nombre:</label>
        <input name="name" value="${data.name}" 
        class="w-full p-2 rounded bg-gray-900 text-gray-100 focus:ring-blue-500 focus:outline-none"/>
        ${errors.name || ""}
      </div>

      <div class="text-left">
        <label class="block text-gray-300 font-medium mb-2">Correo:</label>
        <input name="email" value="${data.email}" 
        class="w-full p-2 rounded bg-gray-900 text-gray-100 focus:ring-blue-500 focus:outline-none"/>
        ${errors.email || ""}
      </div>
      <input type="submit" value="Enviar"
      class="mt-4 bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-600 cursor-pointer"/>
    </form>
    `;
  }

  static renderForm() {
    //Requerimos onSubmit, initialValues, error, html
    this.#form.onsubmit = this.onSubmit.bind(this); //Es necesario cambiar el contexto de this
    this.#form.innerHTML = this.formHTML({
      data: this.#initialValues,
      errors: {},
    });

    return this.#form;
  }
}

async function main() {
  const users = await User.getAll();
  const template = User.render();
  const form = User.renderForm();
  console.log(template);
  document.body.insertAdjacentElement("afterbegin", template);
  document.body.insertAdjacentElement("afterbegin", form);
}

main();
