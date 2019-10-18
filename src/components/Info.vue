<template>
    <section>
        <!-- Se agrega la información de la empresa de forma horizontal-->
        <v-layout wrap id="fondoInfo">
            <v-flex md2 ms12 xs12 py-4 px-4>
                <h3>Naldo Hidalgo Araneda</h3>
            </v-flex>
            <v-flex md3 ms12 xs12 py-4 px-10>
                <h3> <img id="imagenwsp"  src="../img/wsp.png"> +56992403943</h3>
            </v-flex>
            <v-flex md4 ms12 xs12 py-4>
                <h3><img id="imagenubicacion" src="../img/ubicacion.png" /> Apóstol San Marcos 0380, Temuco</h3>
            </v-flex>
            <v-flex md3 ms12 xs12 py-4>
                <h3><img id="imageninsta" src="../img/insta.png"> @frutos_secos_el_tata</h3>
            </v-flex>
        </v-layout>
    </section>
</template>
<style>
    /* Se agrega una fuente de letra en el estilo para luego utilizarla en la información*/
    @font-face{
        font-family: camping;
        src: url('../font/camping.otf');
    }
    #fondoInfo{
        background-image: url("../img/fcontactos.jpg");
        font-family: camping;
        font-size: 20px;

    }
    #imagenwsp{
        width: 20px;
    }
    #imagenubicacion{
        width: 25px;
    }
    #imageninsta{
        width: 20px;
    }
</style>