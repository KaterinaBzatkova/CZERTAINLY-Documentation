"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[14],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},s="Create Super Administrator",p={unversionedId:"installation-guide/create-super-administrator",id:"installation-guide/create-super-administrator",title:"Create Super Administrator",description:"When you deploy the platform for the first time, there are no Super Administrators and Administrators registered.",source:"@site/docs/03-installation-guide/05-create-super-administrator.md",sourceDirName:"03-installation-guide",slug:"/installation-guide/create-super-administrator",permalink:"/docs/installation-guide/create-super-administrator",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Documentation",permalink:"/docs/installation-guide/deployment/deployment-kubernetes/api-documentation"},next:{title:"Overview",permalink:"/docs/quick-start/overview"}},c=[{value:"Register first Administrator",id:"register-first-administrator",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-super-administrator"},"Create Super Administrator"),(0,i.kt)("p",null,"When you deploy the platform for the first time, there are no Super Administrators and Administrators registered."),(0,i.kt)("p",null,"To register the first Administrator, you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Local API"),", which is accessible only from the ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core")," deployment. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Local API")," does not require the X.509 client certificate based authentication."),(0,i.kt)("h2",{id:"register-first-administrator"},"Register first Administrator"),(0,i.kt)("p",null,"You can use any tool or command line utility to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Local API")," and register the first Administrator."),(0,i.kt)("p",null,"You need to provide the following information:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"first-admin.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "adminCertificate": "MIIDPTCCAiUCFBd+dfQuley5j4MetX3iewvIxHZDMA0GCSqGSIb3DQEBCwUAMF0xCzAJBgNVBAYTAkNaMRAwDgYDVQQIDAdDemVjaGlhMQswCQYDVQQHDAJDQjENMAsGA1UECgwEM0tFWTEMMAoGA1UECwwDREVWMRIwEAYDVQQDDAlsb2NhbGhvc3QwHhcNMjAwOTI1MTE1NDU3WhcNMzAwODA0MTE1NDU3WjBZMQswCQYDVQQGEwJDWjEQMA4GA1UECAwHQ3plY2hpYTELMAkGA1UEBwwCQ0IxCzAJBgNVBAoMAkNGMQwwCgYDVQQLDANERVYxEDAOBgNVBAMMB0NMSUVOVDEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/SsO+9IzQ85xxyiT+ou8RDNxZMP0Ja8YKrdu19BTFjyLtVLpb+I1XqzlXFdJcObYZ5ZboyALB00i5Ds0TTs8ydgEeaw0K2O96DnGh4z5r4qLuF+fpVR+3A8kKRSrqJN1JNPFeb+NKsilUNvx5plZBm5+VTd64Sop6r1DALEDBS8AxRJSgp4x/oCq+T4zLh9XDyVUQ68axLgF86sS4YcBYKQVTH7KwRx+FGPFnBqt2ll2IherJ1N1dheXdLqzPYY+uIhs55wUPRhQibjiJhM9NgMYsmOPZRzsPIr6+gUil82rmSfyMg/A0wT4dsm6MT7ly6PPRyxoRvhNvfn96FsCRAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAI+YNR82n23p9014wa+99aEWJfujlirY07jhAQmsGTkkFM5QTNJzwi6VYnUwjlJMOXw8fEiBVRHUiyLV5RWZGiGZuLdCZgYCjtzCtWuOPidShAK5GpLDipG9upZ+RCNpBXVbb6J5tEI0esTSxZ/jwj2JqZZayhRmRXL/j8vGRn74atTILeFwUIYsSreoMI8wG1Rk0que09LgP1RmCiSl1GUSTL/lrK/dYaw0orZwUxzKg/KNnTYprYiAIVRsHUz8bkd6mGEBCfDdpEp0l7laBej2R8RhGDwuxjma1ZrwlCsKLlpdn2lwzqIEc+Zl7dxiLTb1NLMH80f4LCuF1iFCD6E=",\n   "certificateUuid": "",\n   "username":"adminadmin",\n   "name":"admin",\n   "surname":"admin",\n   "email":"admin@czertainly.com",\n   "role": "SUPERADMINISTRATOR",\n   "enabled":"true",\n   "description": "First Administrator"\n}\n')),(0,i.kt)("p",null,"The following example is using ",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \\\n -H 'content-type: application/json' \\\n -d @first-admin.json \\\n https://localhost:8080/api/v1/local/admins \n")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"wget"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O- --header='Content-Type:application/json' \\\n --post-file=first-admin.json \\\n http://localhost:8080/api/v1/local/admins\n")),(0,i.kt)("p",null,"In this example, the Administrator with the following attributes will be registered in the RA Profiles with the corresponding certificate:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name:")," admin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Surname:")," admin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username:")," adminadmin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:admin@czertainly.com"},"admin@czertainly.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Role:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"SUPERADMINISTRATOR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description:")," First Administrator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"badge badge--success"},"ENABLED"))),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Local API")," multiple times, also in case you are locked out from the application."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Local API")," carefully, manage access to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," of the system to avoid registration of unwanted Administrators."))))}d.isMDXComponent=!0}}]);