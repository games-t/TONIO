import{l as q,m as S,p as G,q as N,s as $,v as z,u as E,r as R,g as p,w as y,j as Z,o as i,b as a,d as t,t as c,a as u,f as h,h as _,n as v,F as J,e as A,x,y as w}from"./index-CxZN97vy.js";import{u as I,a as H,b as L,c as k}from"./AppLayout-B4u2TX5M.js";import{s as f,_ as P}from"./supabaseadmin-CMFuVQJd.js";import{_ as b}from"./Spin-CrooxrbT.js";const U="https://upmswvqmpiiefieoggws.supabase.co",V="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwbXN3dnFtcGlpZWZpZW9nZ3dzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjA4NzM4NSwiZXhwIjoyMDExNjYzMzg1fQ.TmWnPRtjhoEQl6JyBzXeFk5AUp0IcQKaKxI59cT0a5c",D=q(U,V),M=1019,F=S(G()),o=I(),X=N("adminconfiguration",{state:()=>({admin:null,products:[],gamedata:{id:1,game_id:90,game_portada:"https://i.postimg.cc/CL1wRgtB/202w5t1v-Iu-HG.jpg",name:"Bingo 90 (Invertido)",per_user:1,quantity:90,public:!1,type:0},xsection:0,waiting:0,msjerror:null,load:!1}),actions:{async init(){this.load=!1,this.xsection=0,await o.initGame(),this.gamedata={id:o.game?o.game.id:1,game_id:o.game?o.game.game_id:1,game_portada:o.game?o.game.game_portada:"https://i.postimg.cc/CL1wRgtB/202w5t1v-Iu-HG.jpg",name:o.game?o.game.name:"Bingo 90 (Invertido)",per_user:o.game?o.game.per_user:2,quantity:o.game?o.game.quantity:90,public:o.game?o.game.public:!0,type:o.game?o.game.type:0},this.waiting=0,this.msjerror=null,this.load=!0},async getProducts(){let{data:r,error:g}=await D.rpc("get_products_user_pag",{v_user_id:M,per_page:100,current_page:1,search:""}).single();var d=r.data.filter(s=>s.path=="lottery"||s.path=="bingo");this.products=[{game_id:90,game_portada:"https://i.postimg.cc/CL1wRgtB/202w5t1v-Iu-HG.jpg",name:"Bingo 90 (Invertido)",quantity:90,type:0},{id:1,game_id:90,game_portada:"https://i.postimg.cc/CL1wRgtB/202w5t1v-Iu-HG.jpg",name:"Bingo 90 (3 Números)",quantity:90,type:0},{id:1,game_id:100,game_portada:"https://i.postimg.cc/CL1wRgtB/202w5t1v-Iu-HG.jpg",name:"Bingo 100 (Invertido)",quantity:90,type:0},{id:1,game_id:100,game_portada:"https://i.postimg.cc/CL1wRgtB/202w5t1v-Iu-HG.jpg",name:"Bingo 100 (3 Números)",quantity:90,type:0}],d.forEach(s=>{(s.path=="lottery"||s.path=="bingo")&&this.products.push({id:1,game_id:s.product_id,game_portada:s.portada,name:s.name,quantity:s.quantity,type:s.path=="lottery"?1:0})})},async confirmGame(){this.waiting=!0;var r=this.gamedata;return r.type=r.type?1:0,await $(z(F,"products/"+r.game_id)).then(async g=>{var d=[];await f.from("table").delete().neq("id",0);var s=[];r.name.includes("(Invertido)")?(d=g.val().extra.inverted,d.forEach(e=>{s.push({name:e.name,image:e.name})})):r.name.includes("(3 Números)")?(d=g.val().extra.threenumbers,d.forEach(e=>{s.push({name:e.name,image:e.name})})):(d=g.val().items,d.forEach(e=>{s.push({name:e.name,image:e.image})})),await f.from("table").insert(s)}).catch(g=>{}),r.updated_at=new Date,await f.from("game").update(r).eq("id",r.id),this.waiting=!1,!0},async publicGame(r){return this.waiting=!0,await f.from("game").update({public:r}).eq("id",this.gamedata.id),this.gamedata.public=r,this.waiting=!1,!0}}}),Y={class:"flex justify-center text-2xl uppercase"},K={key:0,title:"Cerrar",class:"absolute top-0 right-0"},Q={class:"tracking-widest px-2 py-1.5 flex items-center uppercase font-mono font-bold rounded-tr-lg"},T={class:"py-4 sm:px-4"},W={key:0,class:"md:w-full font-bold p-6"},O={key:0},tt={key:0},et={class:"sm:flex max-w-max mx-auto mb-6"},at={class:"flex justify-center items-center"},st={class:"w-24 aspect-[3/5]"},ot=["src"],it={class:"flex justify-center items-center"},rt={class:"w-full uppercase text-lg pl-2 text-center sm:text-start"},nt={class:"w-full text-2xl"},lt={class:"w-full text-md"},dt={class:"pt-4"},ct={class:"space-y-6"},ut={key:1},gt={key:1},mt={class:"w-full space-y-3"},pt={class:"w-full mb-6"},_t={class:"flex items-center w-full"},ht={class:"p-1"},ft={class:"w-9 aspect-[3/5]"},yt=["src"],vt={class:"px-1 w-full"},bt={class:"w-full text-start"},xt={class:"w-full text-start text-sm"},wt={class:"w-2.5 h-2.5 ms-2.5",fill:"none",viewBox:"0 0 10 6"},kt=["d"],It={class:"relative w-full z-10"},Ct={class:"py-2 text-sm text-gray-700 dark:text-gray-200"},Bt=["onClick"],jt={class:"flex items-center w-full"},qt={class:"p-1"},St={class:"w-9 aspect-[3/5]"},Gt=["src"],Nt={class:"p-1 w-full"},$t={class:"w-full text-start text-base font-bold uppercase"},zt={class:"w-full text-start text-sm uppercase"},Et={class:"flex items-center"},Rt={class:"relative w-full"},Zt={class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sky-600 dark:text-sky-400"},Jt=t("option",{value:1},"1 por Usuario",-1),At=t("option",{value:2},"2 por usuario",-1),Ht=t("option",{value:3},"3 por usuario",-1),Lt=t("option",{value:4},"4 por usuario",-1),Pt=t("option",{value:5},"5 por usuario",-1),Ut=[Jt,At,Ht,Lt,Pt],Vt={class:"flex items-center"},Dt={class:"relative w-full"},Mt={class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sky-600 dark:text-sky-400"},Ft=t("option",{value:!0},"Publico",-1),Xt=t("option",{value:!1},"No Publico",-1),Yt=[Ft,Xt],Kt={class:"text-center text-red-400 uppercase font-mono text-sm italic"},Qt=["disabled"],Tt={key:1},Wt=["disabled"],oe={__name:"Index",setup(r){const g=I(),d=E(),s=R(!1);g.initGame();const e=X();e.getProducts(),e.init();const C=()=>{e.confirmGame(),e.xsection=0},B=m=>{e.gamedata.game_id=m.game_id,e.gamedata.game_portada=m.game_portada,e.gamedata.name=m.name,e.gamedata.quantity=m.quantity,e.gamedata.type=m.type,s.value=!1};return(m,n)=>{const j=Z("router-link");return i(),p(H,null,{default:y(()=>[a(d).auth?(i(),p(P,{key:0,closeclass:"w-12 h-12"},{title:y(()=>[t("div",Y,c(a(e).xsection==1?"Nuevo Juego":m.$t("Configuration")),1),a(e).xsection==0?(i(),u("div",K,[t("div",Q,[h(L,{class:"!w-9 !h-9"})]),h(j,{to:{name:"admin"},class:"absolute h-full w-full top-0 rounded-tr-lg hover:bg-white/20"})])):_("",!0)]),content:y(()=>[t("div",T,[a(d).auth&&a(g).game?(i(),u("div",W,[a(e).xsection==0?(i(),u("div",O,[a(e).load?(i(),u("div",tt,[t("div",et,[t("div",at,[t("div",st,[t("img",{src:a(e).gamedata.game_portada,class:"w-full h-full rounded-md"},null,8,ot)])]),t("div",it,[t("div",rt,[t("div",nt,c(a(e).gamedata.name),1),t("div",lt,c(a(e).gamedata.quantity)+" Items",1),t("div",dt,[t("div",null,c(a(e).gamedata.per_user)+" por usuario",1),t("div",{class:v(a(e).gamedata.public?"text-green-500":"text-red-500")},"Inscripciones "+c(a(e).gamedata.public?"H":"Inh")+"abilitadas",3)])])])]),t("div",ct,[t("button",{onClick:n[0]||(n[0]=l=>a(e).publicGame(a(e).gamedata.public?0:1)),class:v([a(e).gamedata.public?"bg-purple-600 hover:bg-purple-500":"bg-green-600 hover:bg-green-500","text-white w-full py-2 px-4 uppercase font-bold text-xl rounded-lg"])},[a(e).waiting?(i(),p(b,{key:0,class:"mx-auto"})):(i(),u("span",ut,c(a(e).gamedata.public?"Deshabilitar":"Habilitar"),1))],2),t("button",{onClick:n[1]||(n[1]=l=>(a(e).init(),a(e).xsection=1)),class:"bg-sky-600 hover:bg-sky-500 text-white w-full py-2 px-4 uppercase font-bold text-xl rounded-lg"},"Nuevo Juego")])])):(i(),p(b,{key:1,class:"mx-auto"}))])):_("",!0),a(e).xsection==1?(i(),u("div",gt,[t("div",mt,[t("div",pt,[t("button",{onClick:n[2]||(n[2]=l=>s.value=!s.value),class:"flex justify-between items-center bg-gray-200 hover:bg-gray-100 border border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white outline-none w-full px-2 py-1 rounded-lg font-bold uppercase"},[t("div",_t,[t("div",ht,[t("div",ft,[t("img",{src:a(e).gamedata.game_portada,class:"w-full h-full"},null,8,yt)])]),t("div",vt,[t("div",bt,c(a(e).gamedata.name),1),t("div",xt,c(a(e).gamedata.quantity)+" Items",1)])]),(i(),u("svg",wt,[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:s.value?"m1 5 4 -4 4 4":"m1 1 4 4 4-4"},null,8,kt)]))]),t("div",It,[t("div",{class:v(["absolute border border-gray-400 top-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 max-h-72 overflow-auto",s.value?"":"hidden"])},[t("ul",Ct,[(i(!0),u(J,null,A(a(e).products,l=>(i(),u("li",null,[t("button",{onClick:Ot=>B(l),class:"flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"},[t("div",jt,[t("div",qt,[t("div",St,[t("img",{src:l.game_portada,class:"w-full h-full"},null,8,Gt)])]),t("div",Nt,[t("div",$t,c(l.name),1),t("div",zt,c(l.quantity)+" Items",1)])])],8,Bt)]))),256))])],2)])]),t("div",Et,[t("div",Rt,[t("div",Zt,[h(k,{class:"text-sky-600"})]),x(t("select",{"onUpdate:modelValue":n[3]||(n[3]=l=>a(e).gamedata.per_user=l),class:"border-sky-400 border-2 appearance-none focus:outline-none focus:border-sky-500 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-0 block w-full pl-11 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-sky-200 dark:text-white dark:focus:ring-0 dark:focus:border-sky-400 uppercase"},Ut,512),[[w,a(e).gamedata.per_user]])])]),t("div",Vt,[t("div",Dt,[t("div",Mt,[h(k,{class:"text-sky-600"})]),x(t("select",{"onUpdate:modelValue":n[4]||(n[4]=l=>a(e).gamedata.public=l),class:"border-sky-400 border-2 appearance-none focus:outline-none focus:border-sky-500 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-0 block w-full pl-11 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-sky-200 dark:text-white dark:focus:ring-0 dark:focus:border-sky-400 uppercase"},Yt,512),[[w,a(e).gamedata.public]])])]),t("div",Kt,c(a(e).msjerror),1),t("button",{onClick:n[5]||(n[5]=l=>C()),disabled:a(e).waiting,class:"bg-green-600 hover:bg-green-500 text-white w-full py-2 px-4 uppercase font-bold text-xl rounded-lg"},[a(e).waiting?(i(),p(b,{key:0,class:"mx-auto"})):(i(),u("span",Tt,"Guardar"))],8,Qt),t("button",{onClick:n[6]||(n[6]=l=>a(e).xsection=0),disabled:a(e).waiting,class:"bg-sky-600 hover:bg-sky-500 disabled:bg-gray-600 text-white w-full py-2 px-4 uppercase font-bold text-xl rounded-lg"},"Cancelar",8,Wt)])])):_("",!0)])):_("",!0)])]),_:1})):_("",!0)]),_:1})}}};export{oe as default};
