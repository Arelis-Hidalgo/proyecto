export default {
    /* Se utilizan los mutation para modificar los states*/
    /* Obtiene del api creado anteriormente, los datos de este*/
    getFrutos: (state, { frutos }) => {
        state.frutos = frutos
    },
    /* Es para recibir el número de la cantidad de compras que se quieren realizar*/
    getCompras: (state) =>{
        state.compras = state.compras+1;
    }
}
   