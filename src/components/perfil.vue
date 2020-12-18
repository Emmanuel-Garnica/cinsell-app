<template>
  <div id="perfil">
    <header>
      <h1>Cinsell</h1>
      <button>Cerrar Sesión</button>
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
          <input type="text" value="Prueba" readonly/>
        </div>
        <div>
          <label for="">Nombres y apellidos:</label>
          <input type="text" readonly/>
        </div>
        <div>
          <label for=""># Identificación:</label>
          <input type="number" readonly/>
        </div>
        <div>
          <label for="">Teléfono:</label>
          <input type="number" readonly/>
        </div>
        <div>
          <label for="">Dirección:</label>
          <input type="text" readonly/>
        </div>
        <div>
          <label for="">Departamento:</label>
          <input type="text" readonly/>
        </div>
        <div>
          <label for="">Ciudad:</label>
          <input type="text" readonly/>
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
