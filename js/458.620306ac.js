"use strict";(self["webpackChunkevaluacion"]=self["webpackChunkevaluacion"]||[]).push([[458],{2458:function(e,a,t){t.r(a),t.d(a,{default:function(){return J}});var l=t(6252),s=t(6612),o=t(8061);const i=e=>((0,l.dD)("data-v-3b1e1c5b"),e=e(),(0,l.Cn)(),e),d={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n={class:"modal-dialog modal-md modal-lg modal-xl modal-xxl"},c={class:"modal-content"},r=i((()=>(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Agendar una cita"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),u={class:"modal-body"},m={class:"form-crear"},p=(0,l.uE)('<div class="box-sup" data-v-3b1e1c5b><div class="img-mod" data-v-3b1e1c5b><i class="fas fa-user-md" data-v-3b1e1c5b></i></div><div class="col-11 m-0 p-0" data-v-3b1e1c5b><label for="recipient-name" class="col-12 fw-semibold px-1 align-left" data-v-3b1e1c5b>Licenciado a Cargo:</label><label for="recipient-name" class="col-12 px-1 align-left" data-v-3b1e1c5b>Kevin Basilio Montañez Huamán</label></div></div>',1),b={class:"box-sup"},v=i((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-calendar-event-fill"})],-1))),g={class:"col-11 m-0 p-0"},h=i((()=>(0,l._)("label",{for:"recipient-name",class:"col-12 fw-semibold px-1 align-left"},"Fecha de cita:",-1))),f={for:"recipient-name",class:"col-12 px-1 align-left"},_=i((()=>(0,l._)("hr",{class:"solid"},null,-1))),x={class:"form-crear"},w={class:"box"},y=i((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-person-fill"})],-1))),D={class:"col-10 m-0 p-0"},T=i((()=>(0,l._)("option",{value:"",disabled:"",selected:"",hidden:""},"Paciente",-1))),F=["value"],M=i((()=>(0,l._)("div",{class:"valid-feedback"}," Looks good! ",-1))),P={class:"box"},S=i((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-alarm-fill"})],-1))),k={class:"col-10 m-0 p-0"},$=i((()=>(0,l._)("option",{value:"",disabled:"",selected:""},"Elija una hora",-1))),O=["value"],A={class:"box"},C=i((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-bell-fill"})],-1))),H={class:"col-10 m-0 p-0"},V=i((()=>(0,l._)("option",{value:"",disabled:"",selected:"",hidden:""},"Recordatorio",-1))),E=["value"],L={class:"box"},z=i((()=>(0,l._)("div",{class:"img-mod"},[(0,l._)("i",{class:"bi bi-life-preserver"})],-1))),I={class:"col-10 m-0 p-0"},U=i((()=>(0,l._)("option",{value:"",disabled:"",selected:"",hidden:""},"¿Asistió?",-1))),Y=["value"],K={class:"my-3"},N=i((()=>(0,l._)("div",{class:"modal-footer"},[(0,l._)("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},"Cancelar"),(0,l._)("button",{type:"submit",class:"btn btn-success"},"Guardar")],-1)));function R(e,a,t,i,R,Z){return(0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",n,[(0,l._)("div",c,[r,(0,l._)("div",u,[(0,l._)("form",{onSubmit:a[5]||(a[5]=(...e)=>Z.submitForm&&Z.submitForm(...e)),class:"needs-validation",novalidate:""},[(0,l._)("div",m,[p,(0,l._)("div",b,[v,(0,l._)("div",g,[h,(0,l._)("label",f,(0,s.zw)(i.Formatos.ymdFechaToView(t.inFecha)),1)])])]),_,(0,l._)("div",x,[(0,l._)("div",w,[y,(0,l._)("div",D,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":a[0]||(a[0]=e=>R.output.title=e),"aria-label":"Default select example",required:""},[T,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.listPaciente,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.label,value:e.value},(0,s.zw)(e.value),9,F)))),128))],512),[[o.bM,R.output.title]])]),M]),(0,l._)("div",P,[S,(0,l._)("div",k,[(0,l.wy)((0,l._)("select",{id:"startTime",class:"form-select","onUpdate:modelValue":a[1]||(a[1]=e=>R.selectedTime=e),required:""},[$,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.timeOptions,((e,a)=>((0,l.wg)(),(0,l.iD)("option",{key:a,value:e},(0,s.zw)(e),9,O)))),128))],512),[[o.bM,R.selectedTime]])])]),(0,l._)("div",A,[C,(0,l._)("div",H,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":a[2]||(a[2]=e=>R.output.extendedProps.recordar=e),"aria-label":"Default select example",required:""},[V,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.listRecordar,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.label,value:e.value},(0,s.zw)(e.value),9,E)))),128))],512),[[o.bM,R.output.extendedProps.recordar]])])]),(0,l._)("div",L,[z,(0,l._)("div",I,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":a[3]||(a[3]=e=>R.output.extendedProps.asistencia=e),"aria-label":"Default select example"},[U,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.listAsistio,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.label,value:e.value},(0,s.zw)(e.value),9,Y)))),128))],512),[[o.bM,R.output.extendedProps.asistencia]])])])]),(0,l._)("div",K,[(0,l.wy)((0,l._)("textarea",{class:"form-control","onUpdate:modelValue":a[4]||(a[4]=e=>R.output.extendedProps.description=e),id:"message-text",placeholder:"Notas",maxlength:"200"},null,512),[[o.nr,R.output.extendedProps.description]])]),N],32)])])])])}t(7658);var Z=t(894);const j={soloFechaDMY:function(e){console.log("fecha",e);const a=new Date(e);console.log("fechaOriginal",a);const t=a.getDate(),l=a.getMonth()+1,s=a.getFullYear();return`${t.toString().padStart(2,"0")}/${l.toString().padStart(2,"0")}/${s}`},ymdFechaToView:function(e){var a=e.split("-");return`${a[2]}/${a[1]}/${a[0]}`},fechaStrinToObject:function(e){console.log(e);const a=e.split(" ");return a[0].split("/").reverse().join("-")+"T"+a[1]},fechaZeroToDB(e){const a=new Date(e),t=a.toLocaleTimeString("es-PE",{timeZone:"America/Lima",hour12:!1}),l=a.toISOString().split("T")[0]+"T"+t;return l},addOneHour(e){var a=new Date(e);if(isNaN(a.getTime()))return console.error("Fecha inválida"),null;a.setHours(a.getHours()+1);var t=a.getTimezoneOffset();return a.setMinutes(a.getMinutes()-t),a.toISOString().replace(/\.000Z$/,"")}};var q={name:"Model-Component",props:{msg:String,inFecha:String},setup(){return{Formatos:j}},data(){return{form:this.selectedOpt,selectedTime:"",timeOptions:[],listPaciente:[{label:"1",value:"Maria"},{label:"2",value:"Pedro"},{label:"3",value:"Ana"},{label:"4",value:"Isabel"}],listRecordar:[{label:"1",value:"No"},{label:"2",value:"1 día antes"},{label:"3",value:"1 hora antes"}],listAsistio:[{label:"1",value:"Si"},{label:"2",value:"No"}],output:{backgroundColor:"#F43E3D",borderColor:"#F50B00",end:"",extendedProps:{description:"",encargado:"",link:"/video-conference",recordar:"",asistencia:"",hora:"",fecha:this.inFecha,meeting:""},groupId:"kbmont",start:this.selectedTime,title:"",id:""}}},mounted(){this.generateTimeOptions()},methods:{...(0,Z.nv)("programacionModule",["createEntry","updateEntry","setIsLoading"]),...(0,Z.Se)("programacionModule",["getEstado"]),async store(e){var{meeting:a,end:t}=this.camposAdicionales();this.output.end=t,this.output.extendedProps.meeting=a,console.log("selectedTime: ",this.selectedTime),console.log({meeting:a,end:t}),console.log("output: ",this.output),this.$emit("saveAppt",e),console.log("this.flagUpdateMo"),await this.createEntry(this.output)},generateTimeOptions(){for(let e=8;e<=20;e++)for(let a=0;a<60;a+=10){const t=(e<10?"0":"")+e,l=(a<10?"0":"")+a,s=`${t}:${l}`;this.timeOptions.push(s)}},isValid(e){return this.validation[e]},submitForm(e){console.log("submitForm");const a=e.target;a.checkValidity()||(e.preventDefault(),e.stopPropagation()),a.classList.add("was-validated"),this.store(a)},camposAdicionales(){return{meeting:`Reunión ${this.output.start}`,end:j.addOneHour(this.output.start)}}},watch:{inFecha(e){this.output.extendedProps.fecha=e},selectedTime(e){this.output.start=`${this.output.extendedProps.fecha}T${e}:00`,this.output.extendedProps.hora=`${e}:00`}}},B=t(3744);const G=(0,B.Z)(q,[["render",R],["__scopeId","data-v-3b1e1c5b"]]);var J=G}}]);
//# sourceMappingURL=458.620306ac.js.map