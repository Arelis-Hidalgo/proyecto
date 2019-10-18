<template>
    <section>
        <v-layout wrap>
            <v-flex md12 py-2>
                <!-- formulario para ingresar como cliente frecuente -->
                <v-form v-model="login">
                        <v-text-field v-model="rut" label="Rut:" required></v-text-field>
                        <v-text-field type="password" v-model="contrasena" label="Contraseña:" required></v-text-field> 
                        <v-btn dark color="#565118">Ingresar</v-btn>  
                </v-form>
            </v-flex>
        </v-layout>
    </section>
</template>
