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
        <!-- Mostrar mensaje para incitar al cliente que compre frutos secos-->
        <v-layout wrap id="fondo1" py-10>
            <v-flex md8 ms8 xs12 id="fondo2">
                <p>Un exterior saludable comienza</p>
                <br>
                <p id="texto2">en tu interior</p>
            </v-flex>
            <v-flex md4 ms4 xs12 px-10> 
                <!-- Llamado de atención para atraer al cliente a que se contacte con la empresa -->               
                <div id="form">
                    <p>Sé el primero en conocer nuestros productos y ofertas</p>
                    <v-form >
                        <v-flex m12 ms12 xs12 px-10>
                            <v-text-field background-color="#F6F6F6" color="black" outlined label="Nombre"></v-text-field>
                            <v-text-field background-color="#F6F6F6" color="black" type="email" outlined label="Email"></v-text-field>
                            <v-btn color="#FF902A" rounded> ¡Quiero ofertas! </v-btn>
                        </v-flex>
                    </v-form>
                </div>
            </v-flex>
            <v-flex md12 ms12 xs12 py-4 id="seccionproductos">
                <!-- Escoge 3 productos de la lista total y los muestra, estos son aleatorios -->
                <v-flex >
                    <h1 class="text-center">Algunos productos</h1>
                </v-flex>
                <div id="productos">
                    <v-layout wrap row>
                        <v-layout wrap md12 ms12 xs12 id="cards">      
                            <v-flex v-for="(fruto, index) in frutosInicio" :key="index" class="mb-5" min-width="300px" md3 sm4 xs12 px-10>
                                
                                <v-card class="mx-auto" width="250px" elevation="24">
                                    <v-img class="white--text" width="250px" height="160px" v-bind:src=" fruto.imagen" >
                                    </v-img>
                                    <v-card-title>{{ fruto.name }}</v-card-title>
                                    <v-card-text>
                                        <div class="subtitle-1">
                                            <ul>
                                                <li>{{ fruto.descripcion[0].desc1 }}</li>
                                                <li>{{ fruto.descripcion[0].desc2 }}</li>
                                                <li>{{ fruto.descripcion[0].desc3 }}</li>
                                            </ul>
                                            </div>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer />
                                        <v-btn icon @click="aumentarCarro()">
                                            <v-icon>mdi-cart</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>  
                        <v-flex md12 ms12 xs12 text-center py-10>
                            <!-- Lleva a la pestaña de productos -->
                            <div id="todoProductos">
                                <v-btn color="yellow" rounded  large href="/productos">
                                    <p>Todos los productos</p>
                                </v-btn>
                            </div>
                        </v-flex>
                    </v-layout>
                </div>
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
        Info
    },
    data() {
        return {
        }
    },
    computed:{
        /* importa los state necesarios */
        frutos () {
            return this.$store.state.frutos
        },
        dialog () {
            return this.$store.state.dialog
        },
        frutosInicio (){
            return this.$store.getters.frutosInicio
        }
    },
    /* crea todos los frutos secos */
    created () {
        this.$store.dispatch('getFrutos');
    },
    methods: {
        /* Aumenta el carro*/
        aumentarCarro(){
             this.$store.commit('getCompras');
        }
    }
       
}
</script>
<style scoped>
    @font-face{
        font-family: snubnose;
        src: url('../font/snubnose.otf');
    }
    @font-face{
        font-family: camping;
        src: url('../font/camping.otf');
    }
    template{
        background-color: white;
    }
    #fondo2{
        background-image: url('../img/fondo34.jpg');
        height: 400px;
        
    }
    #fondo2 p{
        font-family: snubnose;
        color: black;
        font-size: 50px;
        padding-left: 350px;

        padding-top: 10px;
    }
    #fondo2 #texto2{
        padding-top: -60px;
        padding-left: 650px;
    }
    #form{
        height: 400px;
        font-family: camping;
        border: 6px orange groove;
    }
    #form p{
        font-size: 30px;
        padding: 10px 10px 10px 10px;
    }
    #productos{
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        font-family: camping;
        
    }
    #cards{
        padding-left: 300px;
        padding-top: 20px;
    }
    #seccionproductos h1{
        font-family: camping;
        color: black;
        font-size:50px;
    }
    #todoProductos p{
        font-size: 30px;
    }
    
</style>