<template>
  <div id="app">
    <div id="container-imglogin">
      <img
        id="imglogin"
        src="../assets/imagen_modelo1.jpg"
        alt="Chicos Jovenes"
      />
    </div>
    <form v-on:submit.prevent="submitForm" id="form-login" action="">
      <h1>Bienvenido a Cinsell</h1>
      <p>Vendemos lo que hacemos para tu comodidad</p>
      <label class="label-login" for="user">Usuario</label>
      <input
        class="input-login"
        id="user"
        type="text"
        placeholder="Ingresa tu usuario"
        v-model="form.username"
      />
      <label class="label-login" for="pass">Contraseña</label>
      <input
        class="input-login"
        type="password"
        name="pass"
        placeholder="Ingresa tu contraseña"
        v-model="form.password"
      />

      <input id="submit" type="submit" value="Iniciar Sesión" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      form: { username: "", password: "" }
    };
  },
  methods: {
    submitForm() {
      let user = this.form.username;
      let pass = this.form.password;

      console.log(user);
      if (user == "") {
        alert("Digita tu nombre de usuario");
      } else if (pass == "") {
        alert("Digita tu contraseña");
      } else {
        axios
          .post("http://127.0.0.1:8000/login", this.form)
          .then(result => {
            let auth = result.data.Autenticado;
            if (user == "" || pass == "") {
              alert("Digita todos los campos");
            } else if (auth === true) {
              this.$router.push("/perfil");
              localStorage.setItem("username", this.form.username);
              localStorage.setItem("Auth", auth);
            } else {
              localStorage.setItem("username", null);
              localStorage.setItem("Auth", true);
              alert("El usuario y/o contraseña no son válidos");
            }
          })
          .catch(error => {
            localStorage.setItem("username", null);
            localStorage.setItem("Auth", false);
              alert("El usuario y/o contraseña no son válidos");
          });
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100vh;
  align-content: center;
  text-align: center;
  display: flex;
  background-color: black;
}
#container-imglogin {
  width: 60%;
  background-color: blue;
  position: relative;
}
#container-imglogin::after {
  content: "";
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(270deg, #000, transparent 20%);
  top: 0;
  left: 0;
  z-index: 100;
}

#imglogin {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#form-login {
  width: 40%;
  background-color: black;
  color: rgb(197, 191, 191);
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 30px;
  margin: auto 0;
  font-family: system-ui;
}

#form-login h1 {
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: left;
  color: rgb(233, 227, 227);
}
#form-login p {
  width: 80%;
  margin-bottom: 50px;
  font-size: 2rem;
  text-align: left;
}

.label-login {
  text-align: left;
  color: rgb(197, 191, 191);
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.input-login {
  text-align: left;
  padding: 18px;
  margin-bottom: 5px;
  background-color: #1e2126;
  border: none;
  border-radius: 3px;
  font-size: 1.2rem;
  color: rgb(187, 183, 183);
}

::placeholder {
  color: gray;
  font-size: 1.2rem;
}

#submit {
  background-color: #3259fe;
  margin: auto;
  width: 100%;
  border: none;
  color: white;
  padding: 20px;
  border-radius: 5px;
  margin-top: 50px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 550;
}
#submit:hover {
  background-color: #1631aa;
}
</style>
