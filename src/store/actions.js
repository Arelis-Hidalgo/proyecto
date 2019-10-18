import axios from 'axios'
export default {
    /* Luego de crear una api y utilizarla como base de datos, se consume con este método*/
    getFrutos: (context) => {
        axios.get('http://localhost:3000/frutoSecos').then(response => {
                let frutos = response.data;
                context.commit('getFrutos', {frutos});
                context.commit('getDialog');
            }).catch(function (error) {
                alert(error);
            })
    }
}