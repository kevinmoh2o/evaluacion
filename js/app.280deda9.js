(function(){"use strict";var e={5677:function(e,t,n){var o={};n.r(o),n.d(o,{createEntry:function(){return Ie},deleteEntry:function(){return je},loadEntries:function(){return ke},setIsLoading:function(){return Se},updateEntry:function(){return Ae}});var a={};n.r(a),n.d(a,{getEntryById:function(){return Te},getEstado:function(){return Le},getEvents:function(){return Pe}});var r={};n.r(r),n.d(r,{addEntry:function(){return Oe},deleteEntry:function(){return Ue},setEntries:function(){return We},setIsLoading:function(){return Ve},updateEntry:function(){return De}});var i=n(8061),s=n(6252);const l={class:"app"};function c(e,t,n,o,a,r){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(i)])}var d={name:"app-main",components:{},data(){return{popUp:!0}},methods:{togglePopUp(){this.popUp=!this.popUp,console.log("pressed")},close(){this.$refs.youtube.pauseVideo(),this.$refs.youtube.stopVideo(),this.modalActive=!1}}},u=n(3744);const m=(0,u.Z)(d,[["render",c]]);var p=m,f=n(2201);const g={class:"modal container-fluid"},v={class:"modal container-fluid"},h={class:"col",style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},b={class:"aplication"};function y(e,t,n,o,a,r){const l=(0,s.up)("YouTube"),c=(0,s.up)("LoginPage");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i.uT,{name:"modal-animation"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",g,[(0,s.wy)((0,s._)("div",v,[(0,s.Wm)(i.uT,{name:"modal-animation-inner"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",h,[(0,s._)("button",{type:"button",class:"btn btn-close","aria-label":"Close",onClick:t[0]||(t[0]=(...e)=>r.close&&r.close(...e)),style:{"margin-left":"auto"}}),(0,s.WI)(e.$slots,"default",{},void 0,!0),((0,s.wg)(),(0,s.j4)(l,{class:"col-lg-12 text-center",width:r.youtubeWidth,height:r.youtubeHeight,key:r.youtubeWidth,"aspect-ratio":16/9,src:"https://www.youtube.com/watch?v=NRHCHVrq8nY",ref:"youtube",onPlaying:a.playing,onReady:r.onReady},null,8,["width","height","onPlaying","onReady"]))],512),[[i.F8,a.modalActive]])])),_:3})],512),[[i.F8,a.modalActive]])],512),[[i.F8,a.modalActive]])])),_:3}),(0,s._)("div",b,[(0,s.Wm)(c)])],64)}var w=n.p+"img/login.f8d1fecd.jpg";const _=e=>((0,s.dD)("data-v-30b90a1d"),e=e(),(0,s.Cn)(),e),C={class:"pantalla"},E={class:"contenedor-body"},x={class:"row flex-grow-1"},k={class:"col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-0"},A={class:"modal modal-sheet position-static d-block bg-body-secondary d-flex justify-content-evenly flex-column",tabindex:"-1",role:"dialog",id:"modalSignin"},I={class:"modal-dialog",role:"document"},j={class:"modal-content rounded-4 shadow align-items-center bg-azul pt-4"},S=_((()=>(0,s._)("h2",{class:"text-white"},"PLATAFORMA VIRTUAL",-1))),P=_((()=>(0,s._)("div",{class:"imgBox mt-4"},[(0,s._)("img",{src:"https://cdn-icons-png.flaticon.com/512/536/536255.png",width:"100",height:"100"})],-1))),L={class:"container-fluid modal-body p-5 pt-0 mt-4"},T={class:""},W={class:"form-floating mb-3"},D=_((()=>(0,s._)("label",{for:"floatingInput"},"DNI del usuario...",-1))),O={class:"form-floating mb-3 mt-4"},U=_((()=>(0,s._)("label",{for:"floatingPassword"},"Contraseña...",-1))),V=_((()=>(0,s._)("hr",{class:"my-4 text-white"},null,-1))),N=_((()=>(0,s._)("div",{class:"text-link"},[(0,s._)("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#modalCambioPassword","data-bs-whatever":"@mdo"},"¿Ha olvidado la contraseña?")],-1))),R={class:"text-link"},F=_((()=>(0,s._)("div",{class:"creditos"},[(0,s._)("i",{class:"fas fa-copyright"}),(0,s._)("i",{class:"fas fa-info-circle"})],-1))),M=_((()=>(0,s._)("div",{class:"d-none d-lg-block col-lg-6 col-xl-6 col-xxl-6 p-0 m-0"},[(0,s._)("img",{class:"responsive-image",src:w,alt:"Imagen"})],-1)));function B(e,t,n,o,a,r){const l=(0,s.up)("Navbar"),c=(0,s.up)("router-link"),d=(0,s.up)("ModalCambioPassword"),u=(0,s.up)("LoadingOverlay"),m=(0,s.up)("SuccessView"),p=(0,s.up)("ErrorView");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",C,[(0,s.Wm)(l,{estadoTitulo:!0,estadoFlecha:!1,onVolver:r.onBackHandle},null,8,["onVolver"]),(0,s._)("div",E,[(0,s._)("div",x,[(0,s._)("div",k,[(0,s._)("div",A,[(0,s._)("div",I,[(0,s._)("div",j,[S,P,(0,s._)("div",L,[(0,s._)("form",T,[(0,s._)("div",W,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control rounded-3",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e)},null,512),[[i.nr,a.email]]),D]),(0,s._)("div",O,[(0,s.wy)((0,s._)("input",{type:"password",class:"form-control rounded-3",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e)},null,512),[[i.nr,a.password]]),U]),(0,s._)("button",{class:"w-100 mb-2 btn btn-lg rounded-3 btn-primary mt-4",onClick:t[2]||(t[2]=(...e)=>r.navegar&&r.navegar(...e))},"Iniciar Sesión"),V,N,(0,s._)("div",R,[(0,s.Wm)(c,{to:"/crear-cuenta",class:"nav-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Crear cuenta")])),_:1})]),F])])])])])]),M])])]),(0,s.Wm)(d),(0,s.Wm)(u,{loading:a.loadingData},null,8,["loading"]),(0,s.Wm)(m,{reponse:a.successApi},null,8,["reponse"]),(0,s.Wm)(p,{reponse:a.errorApi,onCerrarIndicador:r.hadlerCloseIndicator},null,8,["reponse","onCerrarIndicador"])],64)}n(7658);var q=n(9767);const H=e=>((0,s.dD)("data-v-317193e2"),e=e(),(0,s.Cn)(),e),$={class:"modal fade",id:"modalCambioPassword",tabindex:"-1","aria-labelledby":"modalCambioPassword","aria-hidden":"true"},z={class:"modal-dialog modal-md modal-lg modal-xl modal-xxl"},Z={class:"modal-content personalizado"},Y=H((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Cambio de Contraseña"),(0,s._)("button",{type:"button",class:"custom-button","data-bs-dismiss":"modal","aria-label":"Close"},[(0,s._)("i",{class:"fas fa-times"})])],-1))),G=H((()=>(0,s._)("div",{class:"caja"},[(0,s._)("i",{class:"fas fa-envelope"}),(0,s._)("input",{type:"email",class:"form-control",id:"validationCustom01",placeholder:"Correo electrónico",required:""}),(0,s._)("button",{type:"submit",class:"btn btn-success"},"Enviar")],-1))),J=[G];function K(e,t,n,o,a,r){return(0,s.wg)(),(0,s.iD)("div",$,[(0,s._)("div",z,[(0,s._)("div",Z,[Y,(0,s._)("form",{onSubmit:t[0]||(t[0]=(...e)=>r.submitForm&&r.submitForm(...e)),class:"alineamiento",novalidate:""},J,32)])])])}var Q={name:"Modal-Cuidador",components:{},props:{intitulo:String,inDescripcion:String},methods:{isValid(e){return this.validation[e]},submitForm(e){const t=e.target;t.checkValidity()||(e.preventDefault(),e.stopPropagation()),t.classList.add("was-validated")}}};const X=(0,u.Z)(Q,[["render",K],["__scopeId","data-v-317193e2"]]);var ee=X,te=n(894),ne=n(3977),oe=n(3983);const ae={apiKey:"AIzaSyAkN3AY8f9vDm-Gg9h71Q2vEe77SPfAXAI",authDomain:"luna-covid-efwqev.firebaseapp.com",databaseURL:"https://luna-covid-efwqev.firebaseio.com",projectId:"luna-covid-efwqev",storageBucket:"luna-covid-efwqev.appspot.com",messagingSenderId:"723563394834",appId:"1:723563394834:web:9ff50975b7e18d317ce5cb"},re=(0,ne.ZF)(ae),ie=(0,oe.v0)(re),se={async autenticar(e,t){try{const n=await(0,oe.e5)(ie,e,t),o=n.user;return{success:!0,user:o}}catch(n){return{success:!1,error:n.message}}}};var le={name:"login-layout",data(){return{loadingData:{status:!1,title:"Autenticando usuario..."},successApi:{status:!1,title:"¡ Genial !",descripccion:"Usuario correctmente autenticado",btnText:"Continuar",navTo:""},errorApi:{status:!1,title:"¡ ooPs !",descripccion:"Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.",btnText:"Cerrar",navTo:""},email:"",password:""}},setup(){return{}},components:{Navbar:q.Z,ModalCambioPassword:ee,LoadingOverlay:(0,s.RC)((()=>n.e(855).then(n.bind(n,7855)))),SuccessView:(0,s.RC)((()=>n.e(893).then(n.bind(n,7893)))),ErrorView:(0,s.RC)((()=>n.e(497).then(n.bind(n,8162))))},methods:{...(0,te.nv)("programacionModule",["deleteEntry","setIsLoading"]),...(0,te.Se)("programacionModule",["getEstado"]),async sleep(e){return await new Promise((t=>setTimeout(t,e)))},onBackHandle(){},async navegar(){this.loadingData.status=!0;const{success:e,user:t,error:n}=await se.autenticar(this.email,this.password);e?(console.log("Usuario registrado:",t),this.$router.push("/menu")):(this.errorApi.status=!0,console.error("Error al registrar usuario:",n)),this.loadingData.status=!1},hadlerCloseIndicator(e){this.errorApi.status=e}}};const ce=(0,u.Z)(le,[["render",B],["__scopeId","data-v-30b90a1d"]]);var de=ce,ue=n(3292),me=n.n(ue),pe={name:"home-view",components:{LoginPage:de,YouTube:me()},data(){return{modalActive:!0,windowWidth:window.innerWidth,popUp:!0,playing:!0,loading:!0}},computed:{youtubeWidth(){return.9*this.windowWidth},youtubeHeight(){return 7*this.windowWidth/16}},created(){window.addEventListener("resize",this.handleWindowResize)},unmounted(){window.removeEventListener("resize",this.handleWindowResize)},methods:{...(0,te.nv)("programacionModule",["deleteEntry","setIsLoading"]),...(0,te.Se)("programacionModule",["getEstado"]),togglePopUp(){this.popUp=!this.popUp,console.log("pressed")},close(){this.$refs.youtube.stopVideo(),this.modalActive=!1},onReady(){this.$refs.youtube.playVideo()},handleWindowResize(){this.windowWidth=window.innerWidth}}};const fe=(0,u.Z)(pe,[["render",y],["__scopeId","data-v-60998e11"]]);var ge=fe;const ve=[{path:"/",name:"home-view",component:ge},{path:"/about",name:"about-view",component:()=>n.e(443).then(n.bind(n,2722))},{path:"/crear-cuenta",name:"create-layout",component:()=>n.e(443).then(n.bind(n,5434))},{path:"/menu",name:"menu-layout",component:()=>n.e(443).then(n.bind(n,3060))},{path:"/agenda",name:"agenda-layout",component:()=>n.e(443).then(n.bind(n,9357))},{path:"/about-us",name:"about-layout",component:()=>n.e(443).then(n.bind(n,2028))},{path:"/registro-consejeria",name:"regiconsejeria-layout",component:()=>n.e(443).then(n.bind(n,2351))},{path:"/tema-consejeria",name:"temaconsejeria-layout",component:()=>n.e(443).then(n.bind(n,7693))},{path:"/indicador-loading",name:"indicador-layout",component:()=>n.e(623).then(n.bind(n,9623))}],he=(0,f.p7)({history:(0,f.r5)(),routes:ve});var be=he,ye=n(6089),we=()=>({isLoading:{loading:!1,success:!1,error:!1},entries:localStorage.getItem("entries")?JSON.parse(localStorage.getItem("entries")):[]}),_e=n(6154);const Ce="https://luna-covid-efwqev.firebaseio.com",Ee=_e.Z.create({baseURL:Ce});var xe=Ee;const ke=async({commit:e},t)=>{var n=`resultados.json?orderBy="groupId"&equalTo="${t}"`,o=[];try{var a=await xe.get(n);const t=a.data;for(const e in t){const n=t[e];n["id"]=e,o.push(n)}e("setEntries",o),localStorage.setItem("entries",JSON.stringify(o))}catch(r){console.error(r)}},Ae=async({commit:e},t)=>{try{const n=await xe.put(`/resultados/${t.id}.json`,t);return 200===n.status?(e("updateEntry",t),console.log("UPDATE updatedEntry",n,t),{entry:t,statusCode:200}):null}catch(n){console.error(n)}},Ie=async({commit:e},t)=>{try{const n=await xe.post("/resultados.json",t);return 200===n.status?(t["id"]=n.data.name,console.log("CREATE newEntry",n,t),e("addEntry",t),{entry:t,stausCode:200}):null}catch(n){console.error(n)}},je=async({commit:e},t)=>{try{var n=await xe["delete"](`/resultados/${t}.json`);if(200==n.status)return e("deleteEntry",t),{id:t,statusCode:200};console.log(t)}catch(o){return console.error(o),null}},Se=async({commit:e},t)=>{e("setIsLoading",t)},Pe=e=>e.entries,Le=e=>e.isLoading,Te=e=>(t="")=>{const n=e.entries.find((e=>e.id===t));if(n)return{...n}},We=(e,t)=>{e.entries=t},De=(e,t)=>{const n=e.entries.findIndex((e=>e.id===t.id));-1!==n&&e.entries.splice(n,1,t)},Oe=(e,t)=>{console.log("Mutacion addEntry",e,t),e.entries.push(t)},Ue=(e,t)=>{const n=e.entries.findIndex((e=>e.id===t));-1!==n&&e.entries.splice(n,1)},Ve=(e,t)=>{e.isLoading=t},Ne={namespaced:!0,actions:o,getters:a,mutations:r,state:we};var Re=Ne;const Fe=(0,te.MT)({modules:{programacionModule:Re}});var Me=Fe;console.log({nombre:re.name}),(0,i.ri)(p).use((0,ye.WB)()).use(Me).use(be).mount("#app")},9767:function(e,t,n){n.d(t,{Z:function(){return _}});var o=n(6252),a=n(6612),r=n.p+"img/logo2.bc84c940.png",i=n.p+"img/logo3.a5493415.png";const s=e=>((0,o.dD)("data-v-47e6054c"),e=e(),(0,o.Cn)(),e),l={class:"navbar-container","aria-label":"Second navbar example"},c={class:"superior"},d={class:"caja1"},u=s((()=>(0,o._)("i",{class:"fa fa-arrow-left"},null,-1))),m=[u],p={class:"caja2"},f={key:0,class:"estiloA",style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},g=s((()=>(0,o._)("div",{class:"caja3",style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","background-color":"#fff"}},[(0,o._)("img",{class:"d-none d-sm-block",src:r,alt:"Vue Logo",height:"70"}),(0,o._)("img",{class:"d-block d-sm-none",src:i,alt:"Vue Logo",height:"70"})],-1))),v=s((()=>(0,o._)("div",{class:"linea"},null,-1)));function h(e,t,n,r,i,s){return(0,o.wg)(),(0,o.iD)("nav",l,[(0,o._)("div",c,[(0,o._)("div",d,[n.estadoFlecha?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn btn-outline-info",onClick:t[0]||(t[0]=t=>e.$emit("volver"))},m)):(0,o.kq)("",!0)]),(0,o._)("div",p,[n.estadoTitulo?((0,o.wg)(),(0,o.iD)("a",f,(0,a.zw)(n.titulo),1)):(0,o.kq)("",!0)]),g]),v])}var b={name:"navbar-component",props:{estadoTitulo:Boolean,estadoFlecha:Boolean,titulo:String},setup(){},components:{}},y=n(3744);const w=(0,y.Z)(b,[["render",h],["__scopeId","data-v-47e6054c"]]);var _=w}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{194:"ee9e34c1",374:"67d08652",420:"749f0308",443:"d280d2ec",497:"9dcf902f",623:"85d47212",724:"9971eb9a",812:"395c9302",828:"2b0a9ee4",855:"c426ccda",893:"967c84d4"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{194:"59473f53",374:"3071974d",420:"1a967aa5",443:"518d5a03",497:"d9b2c921",724:"6d11ecba",812:"f8247543",828:"ef17083f",855:"cfbef138",893:"6e0cd5ce"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="evaluacion:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/evaluacion/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode&&r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={194:1,374:1,420:1,443:1,497:1,724:1,812:1,828:1,855:1,893:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunkevaluacion"]=self["webpackChunkevaluacion"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5677)}));o=n.O(o)})();
//# sourceMappingURL=app.280deda9.js.map