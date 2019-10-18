<template>
    <section>
        <v-layout wrap mt-6>
            <v-flex md12 px-10>
                <v-btn rounded depressed="true" height="50">
                    <!-- div para el carro de compras, además posee un método que aumenta el numero de compras que hace el usuario  -->
                    <div class="text-center">
                        <div class="text-center">
                            <v-dialog v-model="dialog" width="500" >
                                <template v-slot:activator="{ on }">
                                    <v-badge overlap color="#565118">
                                        <template  v-if="compras>0" v-slot:badge>{{compras}}</template>
                                        <v-icon v-on="on" color="orange" size="48px">mdi-cart</v-icon>
                                    </v-badge>
                                </template>
                                <v-card>
                                    <v-card-title >
                                        Carro de compras
                                    </v-card-title>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog = false" >
                                        Comprar
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                        
                    </div>
                </v-btn>
            </v-flex>
        </v-layout>
    </section>
</template>
<script>
  export default {
    data () {
      return {
          dialog: false,
      }
    },
    computed:{
        //Se obtiene el número de compras
        compras(){
            return this.$store.state.compras
        }
    },
    created () {
    }
  }
</script>