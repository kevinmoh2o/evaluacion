"use strict";(self["webpackChunkevaluacion"]=self["webpackChunkevaluacion"]||[]).push([[612],{965:function(e,a,t){t.d(a,{S:function(){return l}});const l={soloFechaDMY:function(e){console.log("fecha",e);const a=new Date(e);console.log("fechaOriginal",a);const t=a.getDate(),l=a.getMonth()+1,o=a.getFullYear();return`${t.toString().padStart(2,"0")}/${l.toString().padStart(2,"0")}/${o}`},ymdFechaToView:function(e){var a=e.split("-");return`${a[2]}/${a[1]}/${a[0]}`},fechaStrinToObject:function(e){console.log(e);const a=e.split(" ");return a[0].split("/").reverse().join("-")+"T"+a[1]},fechaZeroToDB(e){const a=new Date(e),t=a.toLocaleTimeString("es-PE",{timeZone:"America/Lima",hour12:!1}),l=a.toISOString().split("T")[0]+"T"+t;return l},addOneHour(e){var a=new Date(e);if(isNaN(a.getTime()))return console.error("Fecha inválida"),null;a.setHours(a.getHours()+1);var t=a.getTimezoneOffset();return a.setMinutes(a.getMinutes()-t),a.toISOString().replace(/\.000Z$/,"")},calcularDiferenciaEnHoras(e,a){var t=new Date(e),l=new Date(a);if(isNaN(t.getTime())||isNaN(l.getTime()))return console.error("Fechas inválidas"),null;var o=l-t,i=o/36e5;return i},fechaMeeting(e){var a=new Date(e),t={weekday:"long",year:"numeric",month:"long",day:"numeric"},l=a.toLocaleDateString("es-ES",t);return l}}},6589:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z}});var l=t(6252),o=t(6612),i=t(8061);const s=e=>((0,l.dD)("data-v-115d25e2"),e=e(),(0,l.Cn)(),e),n={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},d={class:"modal-dialog modal-md modal-lg modal-xl modal-xxl"},r={class:"modal-content"},c=s((()=>(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Agendar una cita"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),u={class:"modal-body"},m={class:"form-crear"},p=(0,l.uE)('<div class="box-sup" data-v-115d25e2><div class="img-mod" data-v-115d25e2><i class="fas fa-user-md" data-v-115d25e2></i></div><div class="col-11 m-0 p-0" data-v-115d25e2><label for="recipient-name" class="col-12 fw-semibold px-1 align-left" data-v-115d25e2>Licenciado a Cargo:</label><label for="recipient-name" class="col-12 px-1 align-left" data-v-115d25e2>Kevin Basilio Montañez Huamán</label></div></div>',1),v={class:"box-sup"},b=s((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-calendar-event-fill"})],-1))),g={class:"col-11 m-0 p-0"},h=s((()=>(0,l._)("label",{for:"recipient-name",class:"col-12 fw-semibold px-1 align-left"},"Fecha de cita:",-1))),f={for:"recipient-name",class:"col-12 px-1 align-left"},_=s((()=>(0,l._)("hr",{class:"solid"},null,-1))),w={class:"form-crear"},x={class:"box"},y=s((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-person-fill"})],-1))),D={class:"col-10 m-0 p-0"},T=s((()=>(0,l._)("option",{value:"",disabled:"",selected:"",hidden:""},"Paciente",-1))),S=["value"],F=s((()=>(0,l._)("div",{class:"valid-feedback"}," Looks good! ",-1))),M={class:"box"},P=s((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-alarm-fill"})],-1))),k={class:"col-10 m-0 p-0"},$=s((()=>(0,l._)("option",{value:"",disabled:"",selected:""},"Elija una hora",-1))),O=["value"],E={class:"box"},C=s((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-bell-fill"})],-1))),H={class:"col-10 m-0 p-0"},L=s((()=>(0,l._)("option",{value:"",disabled:"",selected:"",hidden:""},"Recordatorio",-1))),N=["value"],V={class:"my-3"},A=s((()=>(0,l._)("div",{class:"modal-footer"},[(0,l._)("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},"Cancelar"),(0,l._)("button",{type:"submit",class:"btn btn-success"},"Guardar")],-1)));function z(e,a,t,s,z,I){return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",d,[(0,l._)("div",r,[c,(0,l._)("div",u,[(0,l._)("form",{onSubmit:a[4]||(a[4]=(...e)=>I.submitForm&&I.submitForm(...e)),class:"needs-validation",novalidate:""},[(0,l._)("div",m,[p,(0,l._)("div",v,[b,(0,l._)("div",g,[h,(0,l._)("label",f,(0,o.zw)(s.Formatos.ymdFechaToView(t.inFecha)),1)])])]),_,(0,l._)("div",w,[(0,l._)("div",x,[y,(0,l._)("div",D,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":a[0]||(a[0]=e=>z.output.title=e),"aria-label":"Default select example",required:""},[T,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.listPaciente,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.label,value:e.value},(0,o.zw)(e.value),9,S)))),128))],512),[[i.bM,z.output.title]])]),F]),(0,l._)("div",M,[P,(0,l._)("div",k,[(0,l.wy)((0,l._)("select",{id:"startTime",class:"form-select","onUpdate:modelValue":a[1]||(a[1]=e=>z.selectedTime=e),required:""},[$,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.timeOptions,((e,a)=>((0,l.wg)(),(0,l.iD)("option",{key:a,value:e},(0,o.zw)(e),9,O)))),128))],512),[[i.bM,z.selectedTime]])])]),(0,l._)("div",E,[C,(0,l._)("div",H,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":a[2]||(a[2]=e=>z.output.extendedProps.recordar=e),"aria-label":"Default select example",required:""},[L,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.listRecordar,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.label,value:e.value},(0,o.zw)(e.value),9,N)))),128))],512),[[i.bM,z.output.extendedProps.recordar]])])])]),(0,l._)("div",V,[(0,l.wy)((0,l._)("textarea",{class:"form-control","onUpdate:modelValue":a[3]||(a[3]=e=>z.output.extendedProps.description=e),id:"message-text",placeholder:"Notas",maxlength:"200"},null,512),[[i.nr,z.output.extendedProps.description]])]),A],32)])])])])}t(7658);var I=t(894),U=t(965),Y={name:"Model-Component",props:{msg:String,inFecha:String},setup(){return{Formatos:U.S}},data(){return{form:this.selectedOpt,selectedTime:"",timeOptions:[],listPaciente:[{label:"1",value:"Maria"},{label:"2",value:"Pedro"},{label:"3",value:"Ana"},{label:"4",value:"Isabel"}],listRecordar:[{label:"1",value:"No"},{label:"2",value:"1 día antes"},{label:"3",value:"1 hora antes"}],listAsistio:[{label:"1",value:"Si"},{label:"2",value:"No"}],output:{backgroundColor:"#F43E3D",borderColor:"#F50B00",end:"",extendedProps:{description:"",encargado:"",link:"/video-conference",recordar:"",asistencia:"",hora:"",fecha:this.inFecha,meeting:""},groupId:"kbmont",start:this.selectedTime,title:"",id:""}}},mounted(){this.generateTimeOptions()},methods:{...(0,I.nv)("programacionModule",["createEntry","updateEntry","setIsLoading"]),...(0,I.Se)("programacionModule",["getEstado"]),async store(e){var{meeting:a,end:t}=this.camposAdicionales();this.output.end=t,this.output.extendedProps.meeting=a,console.log("selectedTime: ",this.selectedTime),console.log({meeting:a,end:t}),console.log("output: ",this.output),this.$emit("saveAppt",e),console.log("this.flagUpdateMo"),await this.createEntry(this.output)},generateTimeOptions(){for(let e=8;e<=20;e++)for(let a=0;a<60;a+=10){const t=(e<10?"0":"")+e,l=(a<10?"0":"")+a,o=`${t}:${l}`;this.timeOptions.push(o)}},isValid(e){return this.validation[e]},submitForm(e){console.log("submitForm");const a=e.target;a.checkValidity()||(e.preventDefault(),e.stopPropagation()),a.classList.add("was-validated"),this.store(a)},camposAdicionales(){return{meeting:`Reunión ${U.S.fechaMeeting(this.output.start)}`,end:U.S.addOneHour(this.output.start)}}},watch:{inFecha(e){this.output.extendedProps.fecha=e},selectedTime(e){this.output.start=`${this.output.extendedProps.fecha}T${e}:00`,this.output.extendedProps.hora=`${e}:00`}}},K=t(3744);const R=(0,K.Z)(Y,[["render",z],["__scopeId","data-v-115d25e2"]]);var Z=R}}]);
//# sourceMappingURL=612.69a52ac8.js.map