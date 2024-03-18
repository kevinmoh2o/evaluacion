import { createStore } from 'vuex'

import programacionModule from '../../modules/agenda/store/programacion'
import authModule from '../../modules/agenda/store/auth'



export default createStore({
    modules: {
        programacionModule,
        authModule
        
    }
})

//export default stores