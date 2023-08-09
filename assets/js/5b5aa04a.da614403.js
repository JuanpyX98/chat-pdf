"use strict";(self.webpackChunkprueba_3=self.webpackChunkprueba_3||[]).push([[6222],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>h});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?t.createElement(h,o(o({ref:a},c),{},{components:n})):t.createElement(h,o({ref:a},c))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2094:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const s={title:"Mensajes",sidebar_position:3},o="Mensajes",i={unversionedId:"Whatsapp API/Mensajes",id:"Whatsapp API/Mensajes",title:"Mensajes",description:"A continuacion explicare la estructura y orden de envio de mensajes. Para iniciar una conversacion, es necesario primeramente enviar una plantilla.",source:"@site/docs/Whatsapp API/Mensajes.md",sourceDirName:"Whatsapp API",slug:"/Whatsapp API/Mensajes",permalink:"/chat-pdf/docs/Whatsapp API/Mensajes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Whatsapp API/Mensajes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Mensajes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Webhook",permalink:"/chat-pdf/docs/Whatsapp API/webhook"},next:{title:"Chat PDF API",permalink:"/chat-pdf/docs/chat-pdf"}},l={},p=[{value:"Plantillas",id:"plantillas",level:2},{value:"Para crear una plantilla",id:"para-crear-una-plantilla",level:2},{value:"Tipos de mensajes",id:"tipos-de-mensajes",level:2},{value:"Tpo plantilla",id:"tpo-plantilla",level:3},{value:"Tipo texto",id:"tipo-texto",level:3},{value:"Tipo multimedia",id:"tipo-multimedia",level:3}],c={toc:p},d="wrapper";function m(e){let{components:a,...s}=e;return(0,r.kt)(d,(0,t.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mensajes"},"Mensajes"),(0,r.kt)("p",null,"A continuacion explicare la estructura y orden de envio de mensajes. Para iniciar una conversacion, es necesario primeramente enviar una plantilla."),(0,r.kt)("h2",{id:"plantillas"},"Plantillas"),(0,r.kt)("p",null,"En ella, se podran insertar difrenets tipos de contenidos, como texto, documento, imagen, video, botones, etc."),(0,r.kt)("p",null,"Como se mension\xf3 anteriormente, se debe enviar una plantilla para iniciar una conversaci\xf3n, si el cliente contesta, se podr\xe1n enviar mensajes personalizados sin utilizar necesariamente una plantilla."),(0,r.kt)("h2",{id:"para-crear-una-plantilla"},"Para crear una plantilla"),(0,r.kt)("p",null,"Para crear una plantilla, dirigase ",(0,r.kt)("a",{parentName:"p",href:"https://business.facebook.com/wa/manage/message-templates/?business_id=292363679993732&waba_id=105219032639043"},"aqui"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Plantilla",src:n(5148).Z,width:"1920",height:"830"})),(0,r.kt)("p",null,"All\xed se visaulzar\xe1n las plantillas que tiene disponible, ingresa a ",(0,r.kt)("strong",{parentName:"p"}," Crear Plantilla "),", una vez adentro, selecciona la categoria:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6431).Z,width:"1920",height:"835"})),(0,r.kt)("p",null,"Podra encontrar mas informacion sobre las categorias ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines/"},"aqui"),", el nombre de la plantilla, y el idioma; luego dirigase a ",(0,r.kt)("strong",{parentName:"p"}," siguiente "),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2336).Z,width:"1920",height:"837"})),(0,r.kt)("p",null,"Seguidamente, se llenan los campos referidos a la estrucrura de la plantilla, como texto, botones, encabezados, etc. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8059).Z,width:"1920",height:"830"})),(0,r.kt)("p",null,"Una vez llenado los campos, seleeciona ",(0,r.kt)("strong",{parentName:"p"}," enviar "),"."),(0,r.kt)("p",null,"Confirma la creaci\xf3n de la platilla y finalizar\xeda el proceso."),(0,r.kt)("h2",{id:"tipos-de-mensajes"},"Tipos de mensajes"),(0,r.kt)("p",null,"Una vez que el usuario respondi\xf3 a la plantilla, se podr\xe1n enviar mensajes en diferentes formatos, como texto, imagenes, audios, videos, documentos, etc."),(0,r.kt)("p",null,"Ingresa ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=AR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fon-premises%2Freference%2Fmessages%23par-metros&event_type=click&last_nav_impression_id=0MgBLq1aEmO91ykHS&max_percent_page_viewed=20&max_viewport_height_px=559&max_viewport_width_px=1280&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fon-premises%2Freference%2Fmessages&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dwhatsapp%26path2%3Don-premises%26path3%3Dreference%26path4%3Dmessages&region=latam&scrolled=true&session_id=1UuZMJkbLdXYoisyn&site=developers"},"aqui")," para encontrar mas informacion sobre los parametros del json."),(0,r.kt)("h3",{id:"tpo-plantilla"},"Tpo plantilla"),(0,r.kt)("p",null,"Es el primer mensaje que se debe enviar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'POST /v1/messages\n{\n  "to": "recipient_wa_id",\n  "type": "template",\n  "template": {\n        "namespace": "your-namespace",\n        "name": "your-template-name",\n        "language": {\n            "code": "your-language-and-locale-code",\n            "policy": "deterministic"\n        },\n        "components": [{\n            "type": "body",\n            "parameters": [\n                {\n                    "type": "text",\n                    "text": "your-text-string"\n                },\n                {\n                    "type": "currency",\n                    "currency": {\n                        "fallback_value": "$100.99",\n                        "code": "USD",\n                        "amount_1000": 100990\n                    }\n                },\n                {\n                    "type": "date_time",\n                    "date_time" : {\n                        "fallback_value": "February 25, 1977",\n                        "day_of_week": 5,\n                        "day_of_month": 25,\n                        "year": 1977,\n                        "month": 2,\n                        "hour": 15,\n                        "minute": 33\n                    }\n                },\n                {\n                "type": "date_time",\n                    "date_time" : {\n                    "fallback_value": "February 25, 1977",\n                    "timestamp": 1485470276\n                    }\n                }\n            ]\n        }]\n    }\n}\n')),(0,r.kt)("p",null,"Respuesta "),(0,r.kt)("p",null,'{\n"messages": ','[{\n"id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"\n}]',"\n} "),(0,r.kt)("p",null,"Encontrara mas informacion sobre los parametros de las plantillas ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=AR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fapi%2Fmessages%23message-templates&event_type=click&last_nav_impression_id=0vwppni4m12pUzK4S&max_percent_page_viewed=82&max_viewport_height_px=559&max_viewport_width_px=1280&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fmessage-templates%2Fcreation&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dwhatsapp%26path2%3Dmessage-templates%26path3%3Dcreation&region=latam&scrolled=true&session_id=1UuZMJkbLdXYoisyn&site=developers"},"aqui"),"."),(0,r.kt)("h3",{id:"tipo-texto"},"Tipo texto"),(0,r.kt)("p",null,"Solicitud POST:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\nPOST /v1/messages\n{\n    "preview_url": false | true,\n    "recipient_type": "individual",\n    "to": "whatsapp-id",\n    "type": "text",\n    "text": {\n        "body": "your-text-message-content"\n    }\n}\n\n')),(0,r.kt)("p",null,"Respuesta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [{\n    "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"\n  }]\n}\n')),(0,r.kt)("p",null,"Si todo se envia correctamente, el webhook le enviar\xe1 un json con un id que es unico por mensaje."),(0,r.kt)("h3",{id:"tipo-multimedia"},"Tipo multimedia"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'POST /v1/messages\n{\n  "recipient_type": "individual",\n  "to": "whatsapp-id",\n  "type": "audio" | "contact" | "document" | "image" | "location" | "sticker" | "text" | "video",\n  \n  "audio": {\n    "id": "your-media-id"\n  }\n  \n  "document": {\n    "id": "your-media-id",\n    "filename": "your-document-filename"\n  }\n  \n  "document": {\n    "link": "the-provider-name/protocol://the-url",\n    "provider": {\n        "name" : "provider-name"\n    }\n  }\n  \n  "document": {\n    "link": "http(s)://the-url.pdf"\n  }\n  \n  "video": {\n    "id": "your-media-id"  \n  }\n  \n  "image": {\n    "link": "http(s)://the-url",\n    "provider": {\n        "name" : "provider-name"\n    }\n  }\n  \n  "image": {\n    "id": "your-media-id"   \n  }\n  \n  "sticker": {\n    "id": "your-media-id"\n  }\n  \n  "sticker": {\n    "link": "http(s)://the-url",\n    "provider": {\n      "name" : "provider-name"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Respuesta:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [{\n    "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"\n  }]\n}  \n')),(0,r.kt)("p",null,"Si se desea enviar multiples mensajes, se deber\xe1 enviar uno por json, ya que cada mensaje debe tener su id unico."),(0,r.kt)("p",null,"En caso de haber un error en enviar dichas solicitudes, retornar\xe1 un ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/on-premises/errors"},"Codigo de Error")),(0,r.kt)("p",null,"Para ver los estados de los mensajes, selecciona ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/conversation-types"},"aqui"),"."),(0,r.kt)("p",null,"Para mas informacion de los tipos de mensajes, ingrese ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=AR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fon-premises%2Fguides%2Fmessages&event_type=click&last_nav_impression_id=0z6iJbscvWy2dc1nP&max_percent_page_viewed=75&max_viewport_height_px=559&max_viewport_width_px=1280&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fapi%2Fmessages%2Fmedia&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dwhatsapp%26path2%3Dapi%26path3%3Dmessages%26path4%3Dmedia&region=latam&scrolled=true&session_id=1UuZMJkbLdXYoisyn&site=developers"},"aqui"),"."))}m.isMDXComponent=!0},5148:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/plantilla-09569198f1a9280106c761438505e527.png"},6431:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/plantillaCrear-0636553e1b558c1eee94ae24c58f7118.png"},2336:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/plantillaDatos-cf4bed53d4affd3756458a4e927e049e.png"},8059:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/plantillaSemifinalizado-f51af822d8ea531cadefe95527fe1ce2.png"}}]);