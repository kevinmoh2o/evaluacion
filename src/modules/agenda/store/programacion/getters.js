//Traer informacion del state para procesarla
// export const myGetter = ( state ) => {
//  return state
// }

export const getUsuarioPersonaList = (state) => {
    console.log("usuarioPersonaList")
    return state.usuarioPersonaList;
};


export const getTranUserPeople = (state) => {
    console.log("getUserProvider")
    return state.tranUserPeople;
};

export const getUserProvider = (state) => {
    console.log("getUserProvider")
    return state.userProvider;
};

export const getRptHttp = (state) => {
    console.log("getRptHttp")
    return state.respuesta;
};

export const getCounter = (state) => {
    console.log("state",state)
    return state.counter;
};

export const getEvents = ( state ) => {
    return state.entries
}

export const getEstado = ( state ) => {
   /*  console.log("state setIsLoading",state.isLoading) */
    return state.isLoading
}

// id
export const getEntryById = ( state ) => ( id = '' ) => {

    const entry = state.entries.find( entry => entry.id === id )

    if ( !entry ) return

    return { ...entry } // TODO: prueben
}



