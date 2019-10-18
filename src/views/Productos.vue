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
            <v-flex md2 ms2 xs2 px-10 py-10>
                <Carro />
            </v-flex>
        </v-layout>
        <!-- Se ingresa el componente de navbar -->
        <v-flex md12 ms12 xs12>
            <Navbar />
        </v-flex>
        <!-- Se ingresa un for par recorrer el api consumido y mostrar en pantalla todos los productos -->
        <v-layout wrap md12 ms12 xs12 id="cards">            
            <v-flex v-for="(fruto, index) in frutos" :key="index" class="mb-5" min-width="300px" md3 sm4 xs12 px-2>
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
                        <!-- Al apretar icono de carro de compras de cada v-card, se aumenta el carro de compras principal -->
                            <v-btn icon @click="aumentarCarro()">
                                <v-icon>mdi-cart</v-icon>
                            </v-btn>                            
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>      
    </section>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Logo from "../components/Logo.vue";
import Login from "../components/Login.vue";
import Carro from "../components/Carro.vue";
export default {
    components: {
        Navbar,
        Logo,
        Login,
        Carro
    },
    data() {
        return {
        }
    },
    computed:{
        /* Se agregan los states necesarios*/
        frutos () {
            return this.$store.state.frutos
        }
    },
        /* Se carga el state frutos*/
    created () {
        this.$store.dispatch('getFrutos')
    },
    methods: {
       /* Aumenta el carro*/
        aumentarCarro(){
             this.$store.commit('getCompras');
        }
    }
    
}
</script>
<style> 
    @font-face{
        font-family: camping;
        src: url('../font/camping.otf');
    }
    #cards{
        padding-top: 30px;
        font-family: camping;
    }
</style>