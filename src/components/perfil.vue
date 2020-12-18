<template>
  <div id="perfil">
    <header>
      <h1>Cinsell</h1>
      <button v-on:click="logOut">Cerrar Sesión</button>
    </header>

    <div id="perfil-content">
      <div id="avatar">
        <h2>Hola {{ username }}!</h2>
        <img src="../assets/profile-icon.svg" alt="foto de perfil" />
      </div>

      <div id="perfil-data">
        <h2>Datos de perfil</h2>
        <div>
          <label for="">Nickname:</label>
          <input type="text" :value="username" readonly/>
        </div>
        <div>
          <label for="">Nombres y apellidos:</label>
          <input type="text" :value="nombre" readonly/>
        </div>
        <div>
          <label for=""># Identificación:</label>
          <input type="number" :value="nDocumento" readonly/>
        </div>
        <div>
          <label for="">Teléfono:</label>
          <input type="number" :value="telefono" readonly/>
        </div>
        <div>
          <label for="">Dirección:</label>
          <input type="text" :value="direccion" readonly/>
        </div>
        <div>
          <label for="">Ciudad:</label>
          <input type="text" :value="ciudad" readonly/>
        </div>
        <div>
          <label for="">Departamento:</label>
          <input type="text" :value="departamento" readonly/>
        </div>
      </div>
    </div>

    <footer>
      <span>Copyright © 2020 MisionTIC2022 G1M3 - Grupo 10</span>
      <span>Todos los Derechos Reservados</span>
    </footer>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: "perfil",
    data() {
      return {
        username: "none",
        nombre: "none",
        nDocumento: 0,
        telefono: 0,
        direccion: "none",
        ciudad: "none",
        departamento: "none"
      };
    }, 
    methods: {
      logOut() {
        localStorage.removeItem("username");
        localStorage.removeItem("isAuth");
        this.$router.push("/login");
      }
    },
    created: function(){
        let usuario = localStorage.getItem("username");
        let isAuth = localStorage.getItem("Auth");
        let self = this;

        console.log(typeof(isAuth))
        console.log(self.data)
        
        if (isAuth==="true") {
          self.username = usuario;
          axios.get("https://cinsell--api.herokuapp.com/users/"+ usuario)
            .then((result) => {
              self.nombre = result.data.nombre;
              self.nDocumento = result.data.nDocumento;
              self.telefono = result.data.telefono;
              self.direccion = result.data.direccion;
              self.ciudad = result.data.ciudad;
              self.departamento = result.data.departamento;
            })
            .catch(error => console.log(error))
        } else {
          this.$router.push("/login");
        }

    }
    
  };

</script>

<style>

  #perfil {
    width: 100%;
    height: 100vh;
    color: black;
    background: white;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    height: 10vh;
    padding: 10px 30px;
    box-sizing: border-box;
  }

  #perfil-content {
    background-color: rgb(223, 223, 223);
    height: 85vh;
  }

  #perfil button {
    background-color: #3259fe;
    width: 200px;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 550;
  }

  #perfil button:hover {
    background-color: #1631aa;
    border: 4px #3259fe solid;
  }

  #perfil-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #avatar {
    width: 100%;
  }

  #perfil-data {
    width: 100%;
    height: 100%;
    padding: 5% 10% 5% 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  #perfil h2 {
    font-size: 2rem;
    margin: 0 auto 20px auto;
    text-transform: uppercase;
  }

  #perfil-data div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  #perfil-data label {
    width: 40%;
    font-size: 1.3rem;
    text-align: left;
    padding: 10px;
  }

  #perfil-data input {
    width: 60%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: default;
    opacity: 0.4;
    background-color: black;
    text-align: center;
    font-size: 1.4rem;
    color: white;
    outline: none;
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    color: white;
    height: 5vh;
    font-style: italic;
  }
</style>
