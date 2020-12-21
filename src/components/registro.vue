<template>
    <div id=contenido-registro>

        <header>
            <h1>Cinsell</h1>
        </header>
        
        <div id="datos-registro">
            
            <form id="form-register" action="">
                <h2>DATOS PERSONALES</h2>
                <div>
                    <label for="">Nombres y apellidos:</label>
                    <input placeholder="Digite sus nombres y apellidos" type="text" :value="nombre">
                </div>
                <div>
                    <label for=""># Identificación:</label>
                    <input placeholder="Digite su número de identificación" type="number" :value="nDocumento">
                </div>
                <div>
                    <label for="">Teléfono:</label>
                    <input placeholder="Digite su número de teléfono" type="number" :value="telefono"/>
                </div>
                <div>
                    <label for="">Departamento:</label>
                    <input placeholder="Digite su departamento de residencia" type="text" :value="departamento"/>
                </div>
                <div>
                    <label for="">Ciudad:</label>
                    <input placeholder="Digite su ciudad de residencia" type="text" :value="ciudad"/>
                </div>
                <div>
                    <label for="">Dirección:</label>
                    <input placeholder="Digite su dirección" type="text" :value="direccion"/>
                </div>
                <div>
                    <label for="">Nickname:</label>
                    <input placeholder="Digite el nickname deseado" type="text" :value="usuario">
                </div>
                <div>
                    <label for="">Contraseña:</label>
                    <input placeholder="Digite la contraseña deseada" type="text" :value="contraseña">
                </div>
                <div>
                    <label for="">Confirmar contraseña:</label>
                    <input placeholder="Digite de nuevo la contraseña deseada" type="text">
                </div>
                <input id="submit" type="submit" value="Confirmar registro" />

            </form>
        </div>

        <footer>
            <span>Copyright © 2020 MisionTIC2022 G1M3 - Grupo 10</span>
            <span>Todos los Derechos Reservados</span>
        </footer>

    </div>
</template>

<script>
export default {
    name: "registro", 
}
</script>

<style>

    #contenido-registro {
        width: 100%;
        height: 100vh;
        color: black;
        background-color: white;
    }

    #datos-registro {
        background-color: rgb(223, 223, 223);
        height: 85vh;
    }

    #datos-registro h2 {
        font-size: 2rem;
        margin: 0 auto 20px auto;
        text-transform: uppercase;
    }

    #datos-registro #form-register {
        width: 70%;
        height: 100%;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    #form-register #submit {
        margin: 0;
        width: 50%;
        background-color: #3259fe;
        border: none;
        color: white;
        padding: 20px;
        border-radius: 5px;
        margin: 25px auto;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 1.3rem;
        font-weight: 550;
    }

    #form-register #submit:hover {
        background-color: #1631aa;
        cursor: pointer;
    }

    #form-register div {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
     }

    #form-register label {
        width: 40%;
        font-size: 1.3rem;
        text-align: left;
        padding: 10px;
    }

    #form-register input {
        width: 60%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: default;
        background-color: white;
        text-align: center;
        font-size: 1.4rem;
        color: black;
        outline: none;
    }

</style>