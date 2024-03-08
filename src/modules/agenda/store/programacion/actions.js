//acciones asincronas que pueden llamar una mutacion
// export const myAction = async ({ commit }) => {

// }
import investigacionApi from '@/apis/investigacionapi'
import { ENDPOINTS } from '../../../../apis/endpoints';


export const resetValues = async ({ commit }, entry) => {
  commit('resetState', entry);
}


export const getUserByEmail = async ({ commit }, { dni, password }) => {
  try {
    const params = { dni, password };
    const url = `${ENDPOINTS.GET_USER_BY_DNI}?${new URLSearchParams(params)}`;
    console.log("getUserByEmail url: ", url);
    var rptReq = await investigacionApi.get(url);
    if (!rptReq || !rptReq.data) {
      throw new Error('La respuesta recibida es inválida');
    }
    const { status, data } = rptReq.data;
    commit('setUser', data);
    localStorage.setItem('user', JSON.stringify(data));
    return { status, data, message: `Usuario ${data.fullName} autenticado correctamente.` };
    //commit('setUserProvider', { status, data, message: `Usuario ${data.apelPaterno} ${data.firstName} autenticado correctamente.` });

  } catch (error) {
    const { status, message } = error.response.data;
    console.log("error: ", { status, message });
    //commit('setUserProvider', { status, message })
    return { status, message };
  }
}


export const crearUsuario = async ({ commit }, entry) => {
  var fechaActual = new Date();
  try {
    entry.createdAt = fechaActual.toISOString();
    const { data } = await investigacionApi.post(ENDPOINTS.POS_CREATE_USER, entry);
    const { status, message, title } = data;
    commit('addUser', { status, message, data: entry, title })
    //console.log("crearUsuario action:", { status, message }, entry);
  } catch (error) {
    console.log("error: ", error)
    const { status, message, title } = error.response.data;
    commit('addUser', { status, message, title })
  }
}

export const transactionUserPeople = async ({ commit }, entry) => {
  try {
    const rptReq = await investigacionApi.post(ENDPOINTS.POS_CREATE_TIE_PAC_CARE_USER, entry);
    if (!rptReq || !rptReq.data) {
      throw new Error('La respuesta recibida es inválida');
    }
    const { status, data, message } = rptReq.data;
    commit('setTranUserPeople', { status, data, message })
    //console.log("crearUsuario action:", { status, message }, entry);
  } catch (error) {
    const { status, message } = error.response.data;
    commit('setTranUserPeople', { status, message })
  }
}


export const listUserPersona = async ({ commit }, { id, isActive }) => {
  const params = { id, isActive };
  const url = `${ENDPOINTS.GET_LITS_PACC_CARE_BY_USER}?${new URLSearchParams(params)}`;
  console.log("url: ", url);
  try {

    var rptReq = await investigacionApi.get(url);
    console.log("rptReq: ", rptReq);
    if (!rptReq || !rptReq.data) {
      throw new Error('La respuesta recibida es inválida');
    }
    const { status, data } = rptReq.data;
    commit('setUsuarioPersonaList', { status, data, message: `` });
  } catch (error) {
    console.log("error: ", error)
    const { status, message } = error.response.data;
    commit('setTranUserPeople', { status, message, data: [] })
  }
}



export const getListaRelacionesDdb = async ({ commit }, { id, isActive }) => {
  try {
    const params = { id, isActive };
    const url = `${ENDPOINTS.GET_LIST_DDB_RELACIONES}?${new URLSearchParams(params)}`;
    console.log("url: ", url);
    var rptReq = await investigacionApi.get(url);
    if (!rptReq || !rptReq.data) {
      throw new Error('La respuesta recibida es inválida');
    }
    const { status, data } = rptReq.data;

    console.log("dentro de getListaRelacionesDdb: ", data)
    return data;
  } catch (error) {
    console.log("dentro de getListaRelacionesDdb: ", error)
    //const { status, message } = error.response.data;
    return [];
    //commit('setTranUserPeople', { status, message })
  }
}


export const createProgramacion = async ({ commit }, entry) => {
  try {
    console.log("createProgramacion")
    const newEntry = await investigacionApi.post(ENDPOINTS.POS_CREATE_PROGRAMACION, entry);
    console.log("CREATE newProgramacion", newEntry, entry)
    if (newEntry.status >= 200 && newEntry.status <= 299) {
      entry["id"] = newEntry.data.name;

      commit('addEntry', entry)
      return { entry, status: true };
    } else {
      return { message: "Error al crear la programación", status: false };
    }

  } catch (error) {
    console.error(error)
    return { message: "Server error", status: false };
  }
}


export const cargarListProgramacionesById = async ({ commit }, { id }) => {
  /* console.log("daloadEntriesta");
  var path = `resultados.json?orderBy="groupId"&equalTo="${groupId}"`;
  console.log(`loadEntries: ${path}`); */
  var data = [];
  try {
    const params = { id };
    const url = `${ENDPOINTS.GET_LIST_PROGRAMACIONES_BY_ID}?${new URLSearchParams(params)}`;
    var respuesta = await investigacionApi.get(url);
    //console.log("cargarListProgramacionesById: ", {status, data: data.data} );
    console.log(respuesta);
    const myObj = respuesta.data.data;
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