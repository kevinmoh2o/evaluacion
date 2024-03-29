export const ENDPOINTS = {
    /********* AUTH */
    POS_CREATE_USER: '/api/auth/createUser',
    POS_RESET_ACCOUNT:'/api/auth/reset',


    /********* GET REUQESTS */
    GET_USER_BY_DNI: '/api/usuarios/dni',
    GET_LITS_PACC_CARE_BY_USER: '/api/usuarios/userPeople',
    GET_LIST_PROGRAMACIONES_BY_ID: '/api/usuarios/programacion/by',
    GET_LIST_DDB_RELACIONES: '/api/usuarios/relacion',


    /********* POST REUQESTS */
    
    POS_CREATE_TIE_PAC_CARE_USER: '/api/usuarios/transUser',
    POS_CREATE_PROGRAMACION: '/api/usuarios/programacion',
    POS_CREATE_NRO_PROGRAMACION: '/api/usuarios/consejeria',


    /********* UPDATE REUQESTS */

    /********* DELETE REUQESTS */
  };