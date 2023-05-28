//import { split } from "core-js/fn/symbol";

export const Hardware = {

    //INP: "2023-03-31T05:00:00.000Z" fecha objeto
    //OUT: "13/04/2023"
    soloFechaDMY:function(fecha){
        const fechaOriginal = new Date(fecha);
        const dia = fechaOriginal.getDate();
        const mes = fechaOriginal.getMonth() + 1;
        const anio = fechaOriginal.getFullYear();
        return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;
    },
    isMobile:function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      },
      
      // Obtener el ancho de la pantalla en píxeles
      getScreenWidth:function() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      },
 
  };