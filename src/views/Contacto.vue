<template>
    <section>
        <!-- El primer layout obtiene todos los componentes para mostrar el logo login y carro de compras -->
        <v-layout wrap id="fondo">
            <v-flex md8 ms8 xs12>                
                <Logo />
            </v-flex>
            <v-flex md2 ms2 xs12>
                <Login />
            </v-flex>
            <v-flex md2 ms2 xs12 px-10 py-10>
                <Carro />
            </v-flex>
        </v-layout>
        <!-- Se ingresa el componente de navbar -->
        <v-flex md12 ms12 xs12>
            <Navbar />
        </v-flex> 
        <v-layout id="fondo3">
            <v-flex md6 ms12 xs12>
                <!-- Consultas para que el cliente se contacte con la empresa-->
                <div id="form1">
                    <p id="titulo1">Escríbenos</p>
                    <v-form >
                        <v-flex text-center md12 ms12 xs12  px-10>
                            <v-text-field background-color="#F6F6F6" color="black" outlined label="Nombre"></v-text-field>
                            <v-text-field background-color="#F6F6F6" color="black" type="email" outlined label="Email"></v-text-field>
                            <v-textarea no-resize rows="2" background-color="#F6F6F6" color="black" outlined label="Consulta" ></v-textarea>
                            <v-btn large color="orange" rounded> 
                                <p>Contáctame</p> 
                            </v-btn>
                        </v-flex>
                    </v-form>
                </div>
            </v-flex>
            <!-- Muestra la ubicación de la empresa  -->
            <v-flex md6 ms12 xs12 px-10 py-6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.0763055879369!2d-72.59996373395897!3d-38.72675190457848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3ecd3403b93%3A0xe4e0bc72ebb4d1e8!2sAp%C3%B3stol%20San%20Marco%200380%2C%20Temuco%2C%20Regi%C3%B3n%20de%20la%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1570819234549!5m2!1ses-419!2scl" width="650" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </v-flex>
        </v-layout>
        <Info />        
    </section>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Logo from "../components/Logo.vue";
import Login from "../components/Login.vue";
import Carro from "../components/Carro.vue";
import Info from "../components/Info.vue";
export default {
    components: {
        Navbar,
        Logo,
        Login,
        Carro,
        Info,
    }
       
}
</script>
<style >
    @font-face{
        font-family: camping;
        src: url('../font/camping.otf');
    }
    .mapa {
        padding: 25px 50px;
        height: 350px;
        width: 600px;
    }
    #fondo3{
        background-color: white;
        height: 400px;        
    }
    #form1{
        height: 400px;
        font-family: camping;
        width: 600px;
        padding-left: 70px;
    }
    #form1 p{
        font-size: 30px;
    }
    #titulo1{
        font-size: 30px;
        padding-left: 40px;
    }
</style>