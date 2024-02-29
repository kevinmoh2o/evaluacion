//acciones asincronas que pueden llamar una mutacion
// export const myAction = async ({ commit }) => {

// }
import investigacionApi from '@/apis/investigacionapi'

/* export const cargarUsuarios = async () => {
  var path = `/api/usuarios`;
  try {
    console.log("path: ", path)
    var rptReq = await investigacionApi.get(path);
    console.log("rptReq: ", rptReq)
    const { status, data, message } = rptReq.data;
    console.log("data")
    console.log({ status, data, message })
  } catch (error) {
    console.error(error)
  }
} */


export const getUserByEmail = async ({ commit }, { dni, password }) => {
  var path = `/api/usuarios/dni`;
  try {
    const params = { dni, password };
    const url = `${path}?${new URLSearchParams(params)}`;
    var rptReq = await investigacionApi.get(url);
      if (!rptReq || !rptReq.data) {
        throw new Error('La respuesta recibida es inválida');
      }
      const { status, data } = rptReq.data;
      commit('setUserProvider', { status, data, message: `Usuario ${data.apelPaterno} ${data.firstName} autenticado correctamente.` });
  } catch (error) {
    const {status,message} = error.response.data;
    console.log("error: ",{status,message} );
    commit('setUserProvider', { status,message })
  }
}


export const crearUsuario = async ({ commit }, entry) => {
  var fechaActual = new Date();
  try {
    //{config,data,headers,request,status,statusText}
    entry.createdAt = fechaActual.toISOString();
    const { data } = await investigacionApi.post(`/api/usuarios`, entry);
    const { status, message } = data;
    commit('addUser', { status, message, data: entry })
    //console.log("crearUsuario action:", { status, message }, entry);
  } catch (error) {
    const {status,message} = error.response.data;
    commit('addUser', { status, message})
    //console.error(error)
  }
}

export const transactionUserPeople = async ({ commit }, entry) => {
  try {
    const rptReq = await investigacionApi.post(`/api/usuarios/transUser`, entry);
    if (!rptReq || !rptReq.data) {
      throw new Error('La respuesta recibida es inválida');
    }
    //console.log(`rptReq transactionUserPeople: `,rptReq)
    const { status, data,message } = rptReq.data;
    commit('setTranUserPeople', { status, data, message })
    //console.log("crearUsuario action:", { status, message }, entry);
  } catch (error) {
    const {status,message} = error.response.data;
    commit('setTranUserPeople', { status,message })
  }
}


export const usuarioPersonas = async ({ commit }, { id, isActive }) => {
  try {
    var path = `/api/usuarios/userPeople`;
    const params = { id, isActive };
    const url = `${path}?${new URLSearchParams(params)}`;
    var rptReq = await investigacionApi.get(url);
      if (!rptReq || !rptReq.data) {
        throw new Error('La respuesta recibida es inválida');
      }
      const { status, data } = rptReq.data;
      commit('setUsuarioPersonaList', { status, data, message: `` });
  } catch (error) {
    const {status,message} = error.response.data;
    commit('setTranUserPeople', { status,message })
  }
}





export const loadEntries = async ({ commit }, groupId) => {
  console.log("daloadEntriesta");
  var path = `resultados.json?orderBy="groupId"&equalTo="${groupId}"`;
  console.log(`loadEntries: ${path}`);
  var data = [];
  try {
    var respuesta = await investigacionApi.get(path);
    console.log(respuesta);
    const myObj = respuesta.data;
    for (const key in myObj) {
      const value = myObj[key];
      value["id"] = key;
      data.push(value);
    }
    console.log(data);
    commit('setEntries', data)
    localStorage.setItem('entries', JSON.stringify(data));
  } catch (error) {
    console.error(error)
  }
}

export const updateEntry = async ({ commit }, entry) => {
  try {
    const updatedEntry = await investigacionApi.put(`/resultados/${entry.id}.json`, entry);
    if (updatedEntry.status === 200) {
      commit('updateEntry', entry);
      console.log("UPDATE updatedEntry", updatedEntry, entry);
      return { entry, statusCode: 200 };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export const createEntry = async ({ commit }, entry) => {
  try {
    const newEntry = await investigacionApi.post(`/resultados.json`, entry);
    if (newEntry.status === 200) {
      entry["id"] = newEntry.data.name;
      console.log("CREATE newEntry", newEntry, entry)
      commit('addEntry', entry)
      return { entry, stausCode: 200 };
    } else {
      return null;
    }

  } catch (error) {
    console.error(error)
  }
}

export const deleteEntry = async ({ commit }, id) => {
  try {
    var rpta = await investigacionApi.delete(`/resultados/${id}.json`);
    /* console.log("DELETE por id",rpta) */
    if (rpta.status == 200) {
      commit('deleteEntry', id);
      return { id, statusCode: 200 };
    } else {
      console.log(id)
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const setIsLoading = async ({ commit }, valor) => {

  commit('setIsLoading', valor);

}
