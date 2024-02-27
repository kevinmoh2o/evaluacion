
export default () => ({
    //isLoading: false,
    isLoading: {
        loading:false,
        success:false,
        error:false
    },
    respuesta:{},
    userProvider:{
        status:false, data:null, message:"null"
    },
    usuarioPersonaList:[],
    tranUserPeople:{},
    entries: localStorage.getItem('entries')
        ? JSON.parse(localStorage.getItem('entries'))
        : [],
    counter: localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0

})  