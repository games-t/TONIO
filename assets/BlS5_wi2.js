import{A as L,c as U,j as O,o as s,a as f,d as e,g as c,w as S,n as w,k as C,t as i,h as y,F as T,e as F,q as Y,S as q,r as _,f as $,b as x,x as K,B as J,C as Q,u as Z}from"./3Fk0mtgH.js";import{b as V,_ as G,r as B,e as ee,d as N,a as te}from"./C_D_5IcW.js";import{s as I,_ as se}from"./CaQ7R2to.js";import{_ as D}from"./D9zmt5cj.js";const ae={key:0,role:"navigation"},re={class:"flex justify-between flex-1 sm:hidden"},oe=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),le={key:1},ne={class:"px-4 py-2"},ie=["textContent"],de=["textContent"],ue=["textContent"],ce=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),ve={key:3},he=["textContent"],fe=["textContent"],ge={key:0,class:"hidden md:block lg:hidden"},me=["textContent"],pe={key:0},ye={class:"inline-flex shadow-sm rounded-md"},xe=e("svg",{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1),_e=e("svg",{class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule":"evenodd"})],-1),be=e("svg",{class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"clip-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule":"evenodd"})],-1),we=e("svg",{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"})],-1),ke={key:1,class:"text-center text-sm leading-5 px-4 py-2",role:"navigation"},$e={__name:"Paginator",props:{total:{type:Number,default:()=>0},per_page:{type:Number,default:()=>20},classInfo:{type:Array,default:()=>["text-gray-700","dark:text-gray-200"]}},setup(t){const n=L(),g=a=>{const r=JSON.parse(JSON.stringify(n.query));return r.page=a,{query:r}},d=t,l=U(()=>parseInt(n.query.page?n.query.page:1)),u=U(()=>Math.ceil(d.total/d.per_page)),v=U(()=>l.value+1),k=U(()=>l.value-1),m=U(()=>l.value<u.value?(l.value-1)*d.per_page+1:(u.value-1)*d.per_page+1),p=U(()=>l.value<u.value?m.value+d.per_page-1:d.total),b=U(()=>{const a=[];for(let r=l.value-(u.value-l.value>2?2:4-(u.value-l.value));r<=l.value+(l.value>2?2:5-l.value);r++)r>0&&r<=u.value&&a.push({page:r,active:l.value==r});return a});return(a,r)=>{const o=O("router-link");return t.total?(s(),f("nav",ae,[e("div",re,[k.value>0?(s(),c(o,{key:0,to:g(k.value),class:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"},{default:S(()=>[oe]),_:1},8,["to"])):(s(),f("span",le)),e("div",ne,[e("p",{class:w(["text-sm leading-5",t.classInfo])},[C(i(a.$t("Showing"))+" ",1),e("span",{class:"font-medium",textContent:i(m.value)},null,8,ie),C(" "+i(a.$t("to"))+" ",1),e("span",{class:"font-medium",textContent:i(p.value)},null,8,de),C(" "+i(a.$t("of"))+" ",1),e("span",{class:"font-medium",textContent:i(t.total)},null,8,ue),C(" "+i(a.$t("results")),1)],2)]),u.value>l.value?(s(),c(o,{key:2,to:g(v.value),class:"relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"},{default:S(()=>[ce]),_:1},8,["to"])):(s(),f("span",ve))]),e("div",{class:w(["hidden sm:block sm:text-center",{"md:block md:text-center":a.uniquePage==!0,"md:flex md:justify-between":a.uniquePage==!1}])},[e("div",{class:w(["text-sm leading-5 hidden sm:block sm:text-center sm:mb-3",t.classInfo])},[C(i(a.$t("Showing"))+" ",1),e("span",{class:"font-medium",textContent:i(m.value)},null,8,he),C(" "+i(a.$t("to"))+" ",1),e("span",{class:"font-medium",textContent:i(p.value)},null,8,fe),C(", "),a.uniquePage?y("",!0):(s(),f("span",ge)),C(" "+i(a.$t("of"))+" ",1),e("span",{class:"font-medium",textContent:i(t.total)},null,8,me),C(" "+i(a.$t("results"))+". ",1)],2),u.value>1?(s(),f("div",pe,[e("div",ye,[l.value>1?(s(),c(o,{key:0,to:g(1),class:"rounded-l-lg h-8 inline-flex font-bold items-center px-3 py-1 -ml-px border border-gray-200 dark:border-gray-800 leading-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:z-10 focus:outline-none active:ring-0 focus:ring-0 transition ease-in-out duration-150",rel:"prev"},{default:S(()=>[xe]),_:1},8,["to"])):y("",!0),k.value>0?(s(),c(o,{key:1,to:g(k.value),class:"h-8 inline-flex font-bold items-center px-3 py-1 -ml-px border border-gray-200 dark:border-gray-800 leading-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:z-10 focus:outline-none active:ring-0 focus:ring-0 transition ease-in-out duration-150",rel:"prev"},{default:S(()=>[_e]),_:1},8,["to"])):y("",!0),(s(!0),f(T,null,F(b.value,h=>(s(),f("div",null,[h.page!=null?(s(),c(o,{key:0,to:g(h.page),class:w([{"dark:bg-gray-700 dark:text-white bg-gray-200 text-black":h.active==!0,"bg-white dark:bg-gray-900 text-gray-900 dark:text-white":h.active==!1,"rounded-l-lg ":h.page==1&&l.value==1,"rounded-r-lg ":h.page==u.value&&l.value==u.value},"h-8 text-sm inline-flex font-bold items-center px-3 py-1 -ml-px border border-gray-200 dark:border-gray-800 leading-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:z-10 focus:outline-none active:ring-0 focus:ring-0 transition ease-in-out duration-150"])},{default:S(()=>[C(i(h.page),1)]),_:2},1032,["to","class"])):y("",!0)]))),256)),u.value>l.value?(s(),c(o,{key:2,to:g(v.value),class:"h-8 inline-flex font-bold items-center px-3 py-1 -ml-px border border-gray-200 dark:border-gray-800 leading-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:z-10 focus:outline-none active:ring-0 focus:ring-0 transition ease-in-out duration-150",rel:"prev"},{default:S(()=>[be]),_:1},8,["to"])):y("",!0),l.value<u.value&1<u.value?(s(),c(o,{key:3,to:g(u.value),class:"rounded-r-lg h-8 inline-flex font-bold items-center px-3 py-1 -ml-px border border-gray-200 dark:border-gray-800 leading-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:z-10 focus:outline-none active:ring-0 focus:ring-0 transition ease-in-out duration-150"},{default:S(()=>[we]),_:1},8,["to"])):y("",!0)])])):y("",!0)],2)])):(s(),f("div",ke,i(a.$t("No results found")),1))}}},A=Y("adminusers",{state:()=>({users:[],per_page:20,current_page:1,total:0,search:"",search_verified:!0,waiting:0,msjerror:null}),actions:{async init(){this.total=0,this.per_page=20,this.current_page=1,this.search_verified=!0,this.search="",this.waiting=0,this.msjerror=null},async getUsers(){this.waiting=!0;let{data:t,error:n}=await I.rpc("admin_list_user",{search:this.search,search_verified:this.search_verified,current_page:this.current_page,per_page:this.per_page}).single();this.users=t.data,this.total=t.total,this.msjerror=null,this.waiting=!1},async deleteVerificationUser(t){this.waiting=!0;try{const{data:n,error:g}=await I.from("table").update({player:null}).eq("player->id",t),{data:d,error:l}=await I.from("verified").delete().eq("id",t);return l?{data:null,status:"ERROR_DELETEUSER"}:(this.getUsers(),{data:d,status:"SUCCESS"})}catch{return{data:null,status:"ERROR_DELETEUSER"}}finally{this.waiting=!1}},async searchUser(t){this.users_search=t,this.current_page=1,this.getUsers()},async nextPage(){this.current_page++,this.getUsers()},async prevPage(){this.current_page--,this.getUsers()},async firstPage(){this.current_page=1,this.getUsers()},async lastPage(){this.current_page=Math.ceil(this.total/100),this.getUsers()}}}),Se={class:"flex justify-center items-center font-bold space-x-2 pt-8"},Ce={class:"relative"},Me={class:"max-w-[200px] truncate text-lg pb-2"},Ue={class:"max-w-[200px] truncate text-sm"},Ee={class:"px-6 min-h-64 flex justify-center items-center uppercase"},qe={class:"max-w-[300px] w-full mb-8"},Re=e("div",{class:"text-center text-3xl font-bold uppercase text-sky-600 dark:text-sky-400"},"Password Reset",-1),Ve={class:"flex items-center py-6"},Be={class:"relative w-full"},je={class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sky-600 dark:text-sky-400"},Pe=["placeholder"],De=["disabled"],Ae={key:1},Ie={__name:"PasswordReset",props:{ShowModal:null,data:Array},emits:["StatusShowModalPasswordReset"],setup(t,{emit:n}){const g=q.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:r=>{r.addEventListener("mouseenter",q.stopTimer),r.addEventListener("mouseleave",q.resumeTimer)}});var d="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";const l=A(),u=(r,o)=>{const h=_("");for(let j=1;j<=o;j++){var E=Math.floor(Math.random()*r.length);h.value+=r.charAt(E)}return h.value},v=t,k=n,m=()=>{p.value=0,k("StatusShowModalPasswordReset")},p=_(!1),b=_(u(d,6)),a=async()=>{p.value=1,await l.updatePassword(v.data.id,b.value).then(r=>{r.status=="SUCCESS"?(g.fire({icon:"success",title:"Clave Cambiada Correctamente"}),m()):(p.value=0,g.fire({icon:"error",title:"Error al Cambiar la Clave"}))})};return(r,o)=>(s(),c(N,{show:t.ShowModal,footerclass:"hidden",titleclass:"hidden",classes:"max-w-md"},{content:S(()=>[e("button",{onClick:o[0]||(o[0]=h=>m()),class:"hover:text-xl p-2 absolute top-0 right-0"},[$(V,{class:"w-9 h-9 text-gray-600 hover:text-red-500"})]),e("div",Se,[e("div",null,[e("div",Ce,[t.data.id?(s(),c(G,{key:0,src:t.data.avatar,class:w(["w-20 h-20 rounded-full",t.data.verified?"border-2 border-yellow-500":""])},null,8,["src","class"])):y("",!0),t.data.verified?(s(),c(x(B),{key:1,class:"absolute -bottom-0 stroke-gray-800 right-0.5 size-6 fill-yellow-500"})):y("",!0)])]),e("div",null,[e("div",Me,i(t.data.username),1),e("div",Ue,i(t.data.nick),1)])]),e("div",Ee,[e("div",qe,[Re,e("div",Ve,[e("div",Be,[e("div",je,[$(ee,{class:"text-sky-600"})]),K(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=h=>b.value=h),onKeyup:o[2]||(o[2]=J(h=>a(),["enter"])),placeholder:r.$t("New password"),class:"border-sky-600 font-extrabold text-md tracking-widest uppercase border-2 appearance-none focus:outline-none focus:border-sky-500 bg-gray-50 text-gray-900 rounded-lg focus:ring-0 block w-full pl-11 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-sky-200 dark:text-white dark:focus:ring-0 dark:focus:border-sky-400",required:""},null,40,Pe),[[Q,b.value]])])]),e("button",{onClick:o[3]||(o[3]=h=>a()),class:"p-2 bg-sky-600 text-white rounded-lg text-center w-full font-bold uppercase disabled:bg-gray-600",disabled:b.value.length<1||p.value},[p.value?(s(),c(D,{key:0,class:"mx-auto !h-6 !w-6"})):(s(),f("span",Ae,"Cambiar clave"))],8,De)])])]),_:1},8,["show"]))}},Ne={class:"flex justify-center items-center font-bold space-x-2 pt-8"},ze={class:"relative"},Le={class:"max-w-[200px] truncate text-lg pb-2"},Oe={class:"max-w-[200px] truncate text-sm"},Te={class:"px-6 min-h-54 flex justify-center items-center uppercase"},Fe={class:"max-w-[300px] w-full mb-8"},Ke={key:0,class:"mr-1"},Je=["disabled"],Qe={key:1},Ge={__name:"Verification",props:{ShowModal:null,data:Array},emits:["StatusShowModalVerification"],setup(t,{emit:n}){q.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:a=>{a.addEventListener("mouseenter",q.stopTimer),a.addEventListener("mouseleave",q.resumeTimer)}});var g="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";const d=A(),l=(a,r)=>{const o=_("");for(let E=1;E<=r;E++){var h=Math.floor(Math.random()*a.length);o.value+=a.charAt(h)}return o.value},u=t,v=n,k=()=>{m.value=0,v("StatusShowModalVerification")},m=_(!1),p=_(l(g,6)),b=async()=>{m.value=1,await d.updateUser(u.data.id,{user_verified:!u.data.verified}).then(a=>{a.status=="SUCCESS"?k():m.value=0})};return(a,r)=>(s(),c(N,{show:t.ShowModal,footerclass:"hidden",titleclass:"hidden",classes:"max-w-md"},{content:S(()=>[e("button",{onClick:r[0]||(r[0]=o=>k()),class:"hover:text-xl p-2 absolute top-0 right-0"},[$(V,{class:"w-9 h-9 text-gray-600 hover:text-red-500"})]),e("div",Ne,[e("div",null,[e("div",ze,[t.data.id?(s(),c(G,{key:0,src:t.data.avatar,class:w(["w-20 h-20 rounded-full",t.data.verified?"border-2 border-yellow-500":""])},null,8,["src","class"])):y("",!0),t.data.verified?(s(),c(x(B),{key:1,class:"absolute -bottom-0 stroke-gray-800 right-0.5 size-6 fill-yellow-500"})):y("",!0)])]),e("div",null,[e("div",Le,i(t.data.username),1),e("div",Oe,i(t.data.nick),1)])]),e("div",Te,[e("div",Fe,[e("div",{class:w([t.data.verified?"text-green-600":"text-yellow-600","flex justify-center items-centertext-center text-3xl font-bold uppercase my-8 select-none"])},[t.data.verified?(s(),f("span",Ke,[$(x(B),{class:"size-10"})])):y("",!0),e("span",null,i(t.data.verified?"verificado":"No verificado"),1)],2),e("button",{onClick:r[1]||(r[1]=o=>b()),class:w([t.data.verified?"bg-yellow-600":"bg-green-600","p-2 text-white rounded-lg text-center w-full font-bold uppercase disabled:bg-gray-600"]),disabled:p.value.length<1||m.value},[m.value?(s(),c(D,{key:0,class:"mx-auto !h-6 !w-6"})):(s(),f("span",Qe,i(t.data.verified?"QUitar verificación":"Verificar"),1))],10,Je)])])]),_:1},8,["show"]))}},He={class:"px-6 min-h-54 flex justify-center items-center uppercase w-full"},We={class:"w-full mb-8"},Xe={class:"text-center text-3xl uppercase my-8 select-none text-red-500"},Ye={class:"font-bold"},Ze=["disabled"],et={key:1},tt={__name:"Delete",props:{ShowModal:null,data:Array},emits:["StatusShowModalDelete"],setup(t,{emit:n}){const g=A(),d=t,l=n,u=()=>{v.value=0,l("StatusShowModalDelete")},v=_(!1),k=async()=>{v.value=1,await g.deleteVerificationUser(d.data.id).then(m=>{m.status=="SUCCESS"?u():v.value=0})};return(m,p)=>(s(),c(N,{show:t.ShowModal,footerclass:"hidden",titleclass:"hidden",classes:"max-w-md"},{content:S(()=>[e("button",{onClick:p[0]||(p[0]=b=>u()),class:"hover:text-xl p-2 absolute top-0 right-0"},[$(V,{class:"w-9 h-9 text-gray-600 hover:text-red-500"})]),e("div",He,[e("div",We,[e("div",Xe,[C(" ¿ Seguro de Eliminar el verificado de "),e("span",Ye,i(t.data.user_name),1),C(" ? ")]),e("button",{onClick:p[1]||(p[1]=b=>k()),disabled:v.value,class:"p-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-center w-full font-bold uppercase disabled:bg-gray-600"},[v.value?(s(),c(D,{key:0,class:"mx-auto !h-6 !w-6"})):(s(),f("span",et,"Eliminar Verificado"))],8,Ze)])])]),_:1},8,["show"]))}},st=e("div",{class:"flex justify-center text-2xl"},"USUARIOS",-1),at={title:"Cerrar",class:"absolute top-0 right-0"},rt={class:"tracking-widest px-2 py-1.5 flex items-center uppercase font-mono font-bold rounded-tr-lg"},ot=["data"],lt={class:"sm:flex justify-between space-y-3 sm:space-y-0 relative"},nt=e("span",null,null,-1),it={title:"Buscar",class:"relative"},dt={class:"tracking-widest px-2 py-1.5 flex items-center uppercase font-mono font-bold rounded-r-lg"},ut={key:0,class:"py-4 font-bold"},ct={key:0},vt=e("div",{class:"hidden sm:block w-12"},null,-1),ht=e("div",{class:"w-full text-lg px-1.5 text-center sm:text-start"},"Usuario",-1),ft=[vt,ht],gt={class:"sm:flex sm:justify-between sm:items-center border-b py-3 sm:py-1"},mt={class:"sm:flex sm:justify-center sm:items-center"},pt={class:"mx-auto"},yt={class:"relative"},xt={class:"text-center sm:text-start w-full px-1.5 py-2 sm:py-0"},_t={class:"truncate sm:max-w-xs font-extrabold text-xl"},bt={class:"flex justify-center items-center sm:py-0 space-x-1"},wt=["onClick"],kt=["onClick"],$t={key:1,class:"w-full flex justify-center items-center h-[200px]"},Et={__name:"Index",setup(t){const n=L(),g=Z(),d=A();d.current_page=n.query.page?n.query.page:1,d.search=n.query.search?n.query.search:"";const l=_([]),u=_(!1),v=_(n.query.search),k=()=>{document.getElementById("btnsearch").click()},m=async()=>{u.value=!0,l.value=[],d.current_page=n.query.page?n.query.page:1,d.search=n.query.search?n.query.search:"",await d.getUsers(),u.value=!1},p=U(async()=>(n.query&&m(),!0));_(!1);const b=_(!1),a=_(!1),r=_(!1),o=_(null);function h(R){o.value=R,a.value=!0}function E(R){o.value=R,r.value=!0}function j(){o.value=null,a.value=!1}function H(){o.value=null,b.value=!1}function W(){o.value=null,r.value=!1}return(R,P)=>{const z=O("router-link");return s(),c(te,null,{default:S(()=>[x(g).auth?(s(),c(se,{key:0,closeclass:"w-12 h-12"},{title:S(()=>[st,e("div",at,[e("div",rt,[$(V,{class:"!w-9 !h-9"})]),$(z,{to:{name:"admin"},class:"absolute h-full w-full top-0 rounded-tr-lg hover:bg-white/20"})])]),content:S(()=>[e("div",{data:p.value,class:"py-4 sm:px-4"},[e("div",lt,[e("div",{class:w(["font-bold w-full sm:max-w-max h-[38px] sm:rounded-lg drop-shadow shadow-black relative",["bg-sky-600","text-gray-100"]])},[e("button",{onClick:P[0]||(P[0]=M=>x(d).search_verified=!x(d).search_verified),class:"flex space-x-1 justify-center items-center px-2 w-full h-full hover:bg-white/20 sm:rounded-lg uppercase"},[e("div",null,i(x(d).search_verified?"BUSCAR CON VERIFICADO":"BUSCAR SIN VERIFICADO"),1)])]),nt,e("div",{class:w(["flex group font-bold p-[1px] rounded-lg mx-3 sm:mx-0",["bg-sky-600","text-gray-100"]])},[K(e("input",{type:"text",onKeyup:J(k,["enter"]),"onUpdate:modelValue":P[1]||(P[1]=M=>v.value=M),class:"bg-white dark:bg-gray-800 w-full p-1 px-2 rounded-l-lg outline-none text-black dark:text-white"},null,544),[[Q,v.value]]),e("div",it,[e("div",dt,i(R.$t("Search")),1),$(z,{id:"btnsearch",to:v.value!=""?x(n).query.search==v.value?{query:x(n).query}:{query:{search:v.value}}:x(n).query.search!=v.value&&v.value==""?{query:{}}:{query:x(n).query},class:"absolute h-full w-full top-0 rounded-r-lg hover:bg-white/20"},null,8,["to"])])])]),u.value?(s(),f("div",$t,[$(D)])):(s(),f("div",ut,[l.value?(s(),f("div",ct,[e("div",{class:w(["flex uppercase py-2 sm:rounded-t-md",["bg-sky-600","text-gray-100"]])},ft),(s(!0),f(T,null,F(x(d).users,M=>(s(),f("div",gt,[e("div",mt,[e("div",pt,[e("div",yt,[$(x(B),{class:w(["stroke-gray-800 -right-0.5 size-12",M.status?"fill-yellow-500":"fill-red-600"])},null,8,["class"])])]),e("div",xt,[e("div",_t,i(M.user_name),1),e("div",{class:w(["text-sm italic",M.status?"text-yellow-600":"text-red-600"])},i(M.status?"VERIFICADO":"SIN VERIFICADO"),3)])]),e("div",bt,[M.status?(s(),f("button",{key:0,title:"Eliminar Verificación",onClick:X=>E(M),class:"bg-red-600 hover:bg-red-500 font-bold p-2 rounded-lg"},[$(V)],8,wt)):(s(),f("button",{key:1,title:"Desverificar Usuario",onClick:X=>h(M),class:w([M.status?"bg-green-600 hover:bg-green-500":"bg-yellow-600 hover:bg-yellow-500","flex justify-center items-center w-10 h-10 p-1 font-bold rounded-lg"])},[$(x(B))],10,kt))])]))),256))])):y("",!0),$($e,{total:x(d).total,per_page:x(d).per_page,class:"pt-6"},null,8,["total","per_page"])]))],8,ot)]),_:1})):y("",!0),b.value?(s(),c(Ie,{key:1,data:o.value,ShowModal:b.value,onStatusShowModalPasswordReset:H},null,8,["data","ShowModal"])):y("",!0),a.value?(s(),c(Ge,{key:2,data:o.value,ShowModal:a.value,onStatusShowModalVerification:j},null,8,["data","ShowModal"])):y("",!0),r.value?(s(),c(tt,{key:3,data:o.value,ShowModal:r.value,onStatusShowModalDelete:W},null,8,["data","ShowModal"])):y("",!0)]),_:1})}}};export{Et as default};
