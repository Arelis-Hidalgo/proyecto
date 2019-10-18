<template>
    <section>
        <!-- Componente donde se muestra el logo y nombre de la empresa-->
        <v-layout wrap mt-6>
            <v-flex md4 px-2>
                <img src="../img/logo1.png" width="180px">
            </v-flex>
            <v-flex md8 px-3>
                <h1 id="titulo" >Frutos Secos El Tata</h1>
            </v-flex>
        </v-layout>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
    @font-face{
        font-family: lemon;
        src: url('../font/lemon.otf');
    }
    #titulo{
        font-family: lemon;
        font-size: 80px;
        color: #565118;
    }
</style>