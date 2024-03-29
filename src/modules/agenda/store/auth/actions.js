//acciones asincronas que pueden llamar una mutacion
// export const myAction = async ({ commit }) => {

// }
import investigacionApi from '@/apis/investigacionapi'
import { ENDPOINTS } from '../../../../apis/endpoints';

export const resetAccount = async ({ commit }, entry) => {
  try {
    const params = { email: entry };
    const url = `${ENDPOINTS.POS_RESET_ACCOUNT}?${new URLSearchParams(params)}`;
    const rptReq = await investigacionApi.post(url, entry);
    console.log("url : ",url);
    console.log("rptReq : ",rptReq);
    const { message, success } = rptReq.data;
    return { message,status:success};
  } catch (error) {
    const { status, message } = error.response.data;
    return { status, message };
  }
}


export const loadEntries = async ({ commit }, groupId) => {
  /* console.log("daloadEntriesta"); */
  var path = `resultados.json?orderBy="groupId"&equalTo="${groupId}"`;
  var data = [];
  try {
    var respuesta = await investigacionApi.get(path);
    const myObj = respuesta.data;
    /* console.log(myObj); */
    for (const key in myObj) {
      const value = myObj[key];
      value["id"] = key;
      data.push(value);
    }
    /* console.log(data); */
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
