export default {
    /* Es para obtener los datos del state frutos*/
    /* Obtiene 3 elementos de frutos y los ingresa a los v-card del inicio*/
    frutosInicio: state =>{   
        var frutosInicio = [];     
        if(state.random1==state.random2){
            state.random1 = state.random1 + 1;
            if(state.random1==state.random3){
                state.random1 = state.random1 +1;
            }
        }
        for(var i=0;i<state.frutos.length;i++){
            if(i==state.random1 || i==state.random2 || i==state.random3){
                frutosInicio.push(state.frutos[i]);            
            }
        }
        return frutosInicio;
    }
}
   