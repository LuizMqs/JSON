let user = {
  name: "",
  birthdate: "",
  weight: "",
  height: "",
  gender: "",
};

const date = new Date();

function Enviar() {
  const name = document.getElementById("name").value;
  const birthdate = new Date(document.getElementById("date").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseInt(document.getElementById("height").value);
  const gender = document.getElementById("select").value;

  user["gender"] = gender;

  document.getElementById("label").innerHTML = ""
  
  if (
    name.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/g).join("") ==
      name &&
    name != "" &&
    name.length >= 5
  ) {
    user["name"] = name;
  } else {
    let nameError = document.createElement("label");
    nameError.innerHTML = "Field “name” is invalid!";
    document.getElementById("label").appendChild(nameError);
    document.getElementById("label").innerHTML += `<br>`;
  }

  if (birthdate.getTime() < date.getTime()) {
    user["birthdate"] = birthdate.toUTCString();
  } else {
    let birthdateError = document.createElement("label");
    birthdateError.innerHTML = "Field “birthDate” is invalid!";
    document.getElementById("label").appendChild(birthdateError);
    document.getElementById("label").innerHTML += `<br>`;
  }

  if (!isNaN(weight)) {
    if (weight > 0) {
      user["weight"] = weight;
    } else {
      let weightError = document.createElement("label");
      weightError.innerHTML = "Field “weight” is invalid!";
      document.getElementById("label").appendChild(weightError);
      document.getElementById("label").innerHTML += `<br>`;
    }
  } else {
    let weightError = document.createElement("label");
    weightError.innerHTML = "Field “weight” is invalid!";
    document.getElementById("label").appendChild(weightError);
    document.getElementById("label").innerHTML += `<br>`;
  }

  if (!isNaN(height)) {
    if (height > 0) {
      user["height"] = height;
    } else {
      let heightError = document.createElement("label");
      heightError.innerHTML = "Field “height” is invalid!";
      document.getElementById("label").appendChild(heightError);
      document.getElementById("label").innerHTML += `<br>`;
    }
  } else {
    let heightError = document.createElement("label");
    heightError.innerHTML = "Field “height” is invalid!";
    document.getElementById("label").appendChild(heightError);
    document.getElementById("label").innerHTML += `<br>`;
  }

  if (gender == "") {
    let genderError = document.createElement("label");
    genderError.innerHTML = "Field “gender” is invalid!";
    document.getElementById("label").appendChild(genderError);
    document.getElementById("label").innerHTML += `<br>`;
  }
  
  if (document.getElementById("label").innerHTML == ""){
    document.getElementById("label").innerHTML = `
    <label>nome: ${JSON.stringify(user["name"])}</label><br>
    <label>nascimento: ${JSON.stringify(user["birthdate"])}</label><br>
    <label>peso: ${JSON.stringify(user["weight"])}</label><br>
    <label>altura: ${JSON.stringify(user["height"])}</label><br>
    <label>gênero: ${JSON.stringify(user["gender"])}</label>`
  }

  console.log(user);
}

document.getElementById("button").addEventListener("click", Enviar);
