!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{kY2p:function(n,i,o){"use strict";o.r(i),o.d(i,"ManagerPageModule",(function(){return G}));var c=o("ofXK"),r=o("3Pt+"),a=o("TEn/"),b=o("tyNb"),s=o("fXoL"),u=o("mrSG"),p=o("JZFu");function l(t,n){1&t&&s.Jb(0,"ion-spinner")}function d(t,n){if(1&t&&(s.Lb(0,"span",9),s.pc(1),s.Kb()),2&t){var e=s.Vb().$implicit;s.xb(1),s.sc("",e.type," X ",e.selected,"")}}function g(t,n){if(1&t&&(s.Lb(0,"span",11),s.pc(1),s.Kb()),2&t){var e=s.Vb().index;s.xb(1),s.rc("Text ",e,": ")}}function f(t,n){1&t&&(s.Lb(0,"span"),s.pc(1,","),s.Kb())}function h(t,n){1&t&&(s.Lb(0,"span"),s.Jb(1,"br"),s.Kb())}function m(t,n){if(1&t&&(s.Lb(0,"span"),s.nc(1,g,2,1,"span",10),s.pc(2),s.nc(3,f,2,0,"span",0),s.nc(4,h,2,0,"span",0),s.Kb()),2&t){var e=n.$implicit,i=n.index,o=s.Vb().$implicit;s.xb(1),s.bc("ngIf",e),s.xb(1),s.rc("",e," "),s.xb(1),s.bc("ngIf",e&&i+1!=o.reqtxt.length),s.xb(1),s.bc("ngIf",e&&i+1==o.reqtxt.length)}}function v(t,n){if(1&t&&(s.Lb(0,"span"),s.Jb(1,"img",12),s.Kb()),2&t){var e=n.$implicit;s.xb(1),s.bc("src",e,s.kc)}}function L(t,n){if(1&t&&(s.Lb(0,"span"),s.nc(1,d,2,2,"span",8),s.Lb(2,"div"),s.nc(3,m,5,4,"span",2),s.nc(4,v,2,1,"span",2),s.Kb(),s.Kb()),2&t){var e=n.$implicit;s.xb(1),s.bc("ngIf",e.selected&&e.selected>0),s.xb(2),s.bc("ngForOf",e.reqtxt),s.xb(1),s.bc("ngForOf",e.reqImg)}}function K(t,n){if(1&t&&(s.Lb(0,"span"),s.Jb(1,"hr"),s.Lb(2,"div",4),s.Lb(3,"ion-avatar",5),s.Jb(4,"img",6),s.Kb(),s.Lb(5,"ion-label",7),s.pc(6),s.nc(7,L,5,3,"span",2),s.Kb(),s.Kb(),s.Kb()),2&t){var e=n.$implicit;s.xb(4),s.bc("src",e.src,s.kc),s.xb(2),s.rc("",e.name," "),s.xb(1),s.bc("ngForOf",e.variants)}}function x(t,n){if(1&t&&(s.Lb(0,"div"),s.Lb(1,"ion-card"),s.Lb(2,"div",3),s.pc(3," Order placed "),s.Kb(),s.Lb(4,"ion-card-header"),s.Lb(5,"ion-card-subtitle"),s.pc(6),s.Wb(7,"date"),s.Kb(),s.Kb(),s.Lb(8,"ion-card-content"),s.Lb(9,"div"),s.nc(10,K,8,3,"span",2),s.Kb(),s.Kb(),s.Kb(),s.Jb(11,"hr"),s.Kb()),2&t){var e=n.$implicit;s.xb(6),s.tc("",e.delivery.name," - Pincode ",e.delivery.pincode," - Date (",s.Xb(7,4,e.date),")"),s.xb(4),s.bc("ngForOf",e.items)}}function w(t,n){if(1&t&&(s.Lb(0,"div"),s.nc(1,x,12,6,"div",2),s.Kb()),2&t){var e=s.Vb();s.xb(1),s.bc("ngForOf",e.historyList)}}function y(t,n){1&t&&(s.Lb(0,"p",13),s.pc(1," No previous orders found.. "),s.Kb())}var M,k=((M=function(){function n(e){t(this,n),this.alertController=e,this.historyList=[],this.status=!1,this.showSpin=!0}return e(n,[{key:"ngOnInit",value:function(){var t=localStorage.getItem("zphone");console.log(t),t?this.initDatas(t):this.alertController.create({header:"Login To Continue",message:"User must be logged in",buttons:["OK"]}).then((function(t){t.present()}))}},{key:"initDatas",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.historyList=[],n=p.a.firestore().collection("chocoorders"),t.next=4,n.get().then((function(t){e.showSpin=!1,t.empty?(e.status=!0,e.historyList=[]):(t.forEach((function(t){e.historyList.push(t.data())})),e.historyList.sort((function(t,n){var e=new Date(t.date),i=new Date(n.date);return e<i?1:e>i?-1:0})))})).catch((function(t){console.log("Error getting documents: ",t)}));case 4:case"end":return t.stop()}}),t,this)})))}}]),n}()).\u0275fac=function(t){return new(t||M)(s.Ib(a.b))},M.\u0275cmp=s.Cb({type:M,selectors:[["app-all-orders"]],decls:3,vars:3,consts:[[4,"ngIf"],["style","padding-left: 15px;",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"statuz"],[1,"chipz"],[1,"avatarz"],[3,"src"],["text-wrap","",1,"labelz",2,"font-weight","600"],["style","font-weight: 300;",4,"ngIf"],[2,"font-weight","300"],["style","font-weight: 600;",4,"ngIf"],[2,"font-weight","600"],[2,"height","25px","width","auto","border-radius","8px",3,"src"],[2,"padding-left","15px"]],template:function(t,n){1&t&&(s.nc(0,l,1,0,"ion-spinner",0),s.nc(1,w,2,1,"div",0),s.nc(2,y,2,0,"p",1)),2&t&&(s.bc("ngIf",n.showSpin),s.xb(1),s.bc("ngIf",n.historyList&&n.historyList.length>0),s.xb(1),s.bc("ngIf",n.status&&n.historyList&&0==n.historyList.length))},directives:[c.k,a.N,c.j,a.j,a.l,a.m,a.k,a.d,a.z],pipes:[c.d],styles:[".avatarz[_ngcontent-%COMP%]{width:19%;height:auto}.avatarz[_ngcontent-%COMP%], .labelz[_ngcontent-%COMP%]{display:inline-block}.labelz[_ngcontent-%COMP%]{width:75%;margin-left:5%}.chipz[_ngcontent-%COMP%]{margin-bottom:10px}.statuz[_ngcontent-%COMP%]{text-align:right;margin-right:20px;color:#bd7304;font-weight:600}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;stroke:#444;fill:#222;margin-left:47%;margin-top:3%;margin-bottom:3%}"]}),M);function C(t,n){if(1&t){var e=s.Mb();s.Lb(0,"div"),s.Lb(1,"p",5),s.pc(2),s.Kb(),s.Lb(3,"input",6,7),s.Tb("ngModelChange",(function(t){return s.ic(e),s.Vb().currentUpload=t})),s.Kb(),s.Lb(5,"ion-button",8),s.Tb("click",(function(){s.ic(e);var t=s.gc(4);return s.Vb().copytoclip(t)})),s.pc(6,"Copy"),s.Kb(),s.Kb()}if(2&t){var i=s.Vb();s.xb(2),s.qc(i.currentUpload),s.xb(1),s.bc("ngModel",i.currentUpload)}}function V(t,n){if(1&t){var e=s.Mb();s.Lb(0,"ion-button",9),s.Tb("click",(function(){return s.ic(e),s.Vb().category()})),s.pc(1,"Category"),s.Kb()}}function I(t,n){if(1&t){var e=s.Mb();s.Lb(0,"ion-button",9),s.Tb("click",(function(){return s.ic(e),s.Vb().products()})),s.pc(1,"Products"),s.Kb()}}function T(t,n){1&t&&s.Jb(0,"ion-spinner")}function O(t,n){if(1&t){var e=s.Mb();s.Lb(0,"ion-item"),s.Lb(1,"ion-avatar",13),s.Jb(2,"img",14),s.Kb(),s.Lb(3,"ion-label"),s.Lb(4,"h2"),s.pc(5),s.Kb(),s.Lb(6,"p"),s.pc(7),s.Kb(),s.Lb(8,"div"),s.pc(9," Image - "),s.Lb(10,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.img=t})),s.Kb(),s.Kb(),s.Lb(11,"div"),s.pc(12," Category - "),s.Lb(13,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.cat=t})),s.Kb(),s.Kb(),s.Lb(14,"div"),s.pc(15," Id - "),s.Lb(16,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.id=t})),s.Kb(),s.Kb(),s.Lb(17,"div"),s.Lb(18,"ion-button",16),s.Tb("click",(function(){s.ic(e);var t=n.index;return s.Vb(2).removeCat(t)})),s.pc(19,"Remove"),s.Kb(),s.Kb(),s.Kb(),s.Kb()}if(2&t){var i=n.$implicit,o=n.index;s.xb(2),s.bc("src",i.img,s.kc),s.xb(3),s.qc(i.cat),s.xb(2),s.rc("ID - ",i.id,""),s.xb(3),s.bc("ngModel",i.img)("name","catDa"+o),s.xb(3),s.bc("ngModel",i.cat)("name","catDa1"+o),s.xb(3),s.bc("ngModel",i.id)("name","catDa2"+o)}}function D(t,n){if(1&t){var e=s.Mb();s.Lb(0,"ion-content"),s.Lb(1,"ion-list"),s.Lb(2,"ion-list-header"),s.pc(3," Categories "),s.Kb(),s.Lb(4,"ion-item"),s.Lb(5,"ion-label"),s.Lb(6,"p"),s.pc(7,"Name - "),s.Lb(8,"input",10),s.Tb("ngModelChange",(function(t){return s.ic(e),s.Vb().catData.name=t})),s.Kb(),s.Kb(),s.Lb(9,"p"),s.pc(10,"Phone - "),s.Lb(11,"input",10),s.Tb("ngModelChange",(function(t){return s.ic(e),s.Vb().catData.phone=t})),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.nc(12,O,20,9,"ion-item",11),s.Lb(13,"ion-item"),s.Lb(14,"ion-button",12),s.Tb("click",(function(){s.ic(e);var t=s.Vb();return t.addCat(t.catData.catalogue)})),s.pc(15,"Add Category"),s.Kb(),s.Kb(),s.Kb(),s.Kb()}if(2&t){var i=s.Vb();s.xb(8),s.bc("ngModel",i.catData.name),s.xb(3),s.bc("ngModel",i.catData.phone),s.xb(1),s.bc("ngForOf",i.catData.catalogue)}}function P(t,n){if(1&t&&(s.Lb(0,"option",21),s.pc(1),s.Kb()),2&t){var e=n.$implicit;s.bc("value",e.id),s.xb(1),s.qc(e.cat)}}function $(t,n){if(1&t){var e=s.Mb();s.Lb(0,"div"),s.Lb(1,"table"),s.Lb(2,"tr",22),s.Lb(3,"td"),s.pc(4,"Type"),s.Kb(),s.Lb(5,"td"),s.Lb(6,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.type=t})),s.Kb(),s.Kb(),s.Kb(),s.Lb(7,"tr",22),s.Lb(8,"td"),s.pc(9,"Price"),s.Kb(),s.Lb(10,"td"),s.Lb(11,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.price=t})),s.Kb(),s.Kb(),s.Kb(),s.Lb(12,"tr",22),s.Lb(13,"td"),s.pc(14,"Unit"),s.Kb(),s.Lb(15,"td"),s.Lb(16,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.unit=t})),s.Kb(),s.Kb(),s.Kb(),s.Lb(17,"tr",22),s.Lb(18,"td"),s.Lb(19,"ion-button",16),s.Tb("click",(function(){s.ic(e);var t=n.index,i=s.Vb().$implicit;return s.Vb(2).removeVrnt(i.variants,t)})),s.pc(20,"Remove"),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Jb(21,"div",23),s.Kb()}if(2&t){var i=n.$implicit,o=s.Vb().index;s.xb(6),s.bc("ngModel",i.type)("name","in"+o),s.xb(5),s.bc("ngModel",i.price)("name","in1"+o),s.xb(5),s.bc("ngModel",i.unit)("name","in2"+o)}}function F(t,n){if(1&t){var e=s.Mb();s.Lb(0,"ion-item"),s.Lb(1,"ion-avatar",13),s.Jb(2,"img",14),s.Kb(),s.Lb(3,"ion-label"),s.Lb(4,"h2"),s.pc(5,"Name -"),s.Kb(),s.Lb(6,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.name=t})),s.Kb(),s.Lb(7,"p"),s.pc(8,"Image -"),s.Lb(9,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.src=t})),s.Kb(),s.Kb(),s.Lb(10,"p"),s.pc(11,"Desc -"),s.Lb(12,"input",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.desc=t})),s.Kb(),s.Kb(),s.Lb(13,"p"),s.pc(14,"Category - "),s.Lb(15,"select",15),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.category=t})),s.nc(16,P,2,2,"option",17),s.Kb(),s.Kb(),s.Lb(17,"p"),s.pc(18,"Text - "),s.Lb(19,"input",18),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.requirements.texts=t})),s.Kb(),s.Kb(),s.Lb(20,"p"),s.pc(21,"Images - "),s.Lb(22,"input",18),s.Tb("ngModelChange",(function(t){return s.ic(e),n.$implicit.requirements.images=t})),s.Kb(),s.Kb(),s.Lb(23,"p"),s.pc(24,"Variants - "),s.Kb(),s.nc(25,$,22,6,"div",11),s.Lb(26,"ion-button",16),s.Tb("click",(function(){s.ic(e);var t=n.$implicit;return s.Vb(2).addVar(t.variants)})),s.pc(27,"Add Variant"),s.Kb(),s.Jb(28,"br"),s.Jb(29,"hr"),s.Lb(30,"ion-button",19),s.Tb("click",(function(){s.ic(e);var t=n.index;return s.Vb(2).removeProd(t)})),s.pc(31,"Remove"),s.Kb(),s.Jb(32,"div",20),s.Kb(),s.Kb()}if(2&t){var i=n.$implicit,o=n.index,c=s.Vb(2);s.xb(2),s.bc("src",i.src,s.kc),s.xb(4),s.bc("ngModel",i.name)("name","prod1"+o),s.xb(3),s.bc("ngModel",i.src)("name","prodi"+o),s.xb(3),s.bc("ngModel",i.desc)("name","prodd"+o),s.xb(3),s.bc("ngModel",i.category)("name","prod2"+o),s.xb(1),s.bc("ngForOf",c.catData.catalogue),s.xb(3),s.bc("ngModel",i.requirements.texts)("name","prod3"+o),s.xb(3),s.bc("ngModel",i.requirements.images)("name","prod4"+o),s.xb(3),s.bc("ngForOf",i.variants)}}function J(t,n){if(1&t){var e=s.Mb();s.Lb(0,"ion-content"),s.Lb(1,"ion-list"),s.Lb(2,"ion-list-header"),s.pc(3," Products "),s.Kb(),s.Lb(4,"ion-item"),s.Lb(5,"ion-button",12),s.Tb("click",(function(){s.ic(e);var t=s.Vb();return t.addProd(t.prodData)})),s.pc(6,"Add Product"),s.Kb(),s.Kb(),s.nc(7,F,33,15,"ion-item",11),s.Kb(),s.Kb()}if(2&t){var i=s.Vb();s.xb(7),s.bc("ngForOf",i.prodData)}}var R,z=((R=function(){function n(){t(this,n),this.showSpin=!0,this.prodData={},this.catData={},this.showWhat="cat",this.currentUpload=""}return e(n,[{key:"ngOnInit",value:function(){}},{key:"category",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.showSpin=!0,this.showWhat="cat",n=p.a.firestore().collection("chocoshop").doc("digiCat"),t.next=4,n.get();case 4:(e=t.sent).exists?(this.catData=e.data(),this.showSpin=!1,console.log(this.catData)):console.log("EMPTY");case 6:case"end":return t.stop()}}),t,this)})))}},{key:"products",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.showSpin=!0,this.showWhat="prod",n=p.a.firestore().collection("chocoshop").doc("digiProd"),t.next=4,n.get();case 4:(e=t.sent).exists?(this.prodData=e.data().data,this.showSpin=!1,console.log(this.prodData)):console.log("EMPTY");case 6:case"end":return t.stop()}}),t,this)})))}},{key:"addVar",value:function(t){t.push({type:"",price:0,unit:"",selected:0})}},{key:"addCat",value:function(t){t.push({cat:"",id:0,img:""})}},{key:"addProd",value:function(t){t.unshift({name:"",src:"",desc:"",category:0,variants:[],requirements:{texts:0,images:0}})}},{key:"removeProd",value:function(t){var n=prompt("Enter 'yes' ",t);console.log(n),"yes"==n&&this.prodData.splice(t,1)}},{key:"removeCat",value:function(t){var n=prompt("Enter 'yes' ",t);console.log(n),"yes"==n&&this.catData.catalogue.splice(t,1)}},{key:"removeVrnt",value:function(t,n){var e=prompt("Enter 'yes' ",n);console.log(e),"yes"==e&&t.splice(n,1)}},{key:"filechange",value:function(t){var n=this;t.target&&t.target.files[0]&&t.target.files[0].name&&(console.log(t.target.files[0]),t.target.files[0].size>6e5?alert("File size is BIG, should be less than 600kb"):p.a.storage().ref().child("newImages/"+t.target.files[0].name+(new Date).getTime()).put(t.target.files[0]).then((function(t){return Object(u.a)(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("Uploaded a blob or file!",t),n.t0="success"==t.state&&t&&t.ref,!n.t0){n.next=6;break}return n.next=5,t.ref.getDownloadURL();case 5:this.currentUpload=n.sent;case 6:case"end":return n.stop()}}),n,this)})))})))}},{key:"copytoclip",value:function(t){t.select(),document.execCommand("copy"),t.setSelectionRange(0,0),this.currentUpload=""}},{key:"update",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"yes"==prompt("Enter 'yes' ")&&("cat"==this.showWhat?p.a.firestore().collection("chocoshop").doc("digiCat").set(this.catData).then((function(t){console.log("val",t),alert("cat DONE "+t)})):"prod"==this.showWhat&&p.a.firestore().collection("chocoshop").doc("digiProd").set({data:this.prodData}).then((function(t){console.log("val",t),alert("prod DONE "+t)})));case 1:case"end":return t.stop()}}),t,this)})))}}]),n}()).\u0275fac=function(t){return new(t||R)},R.\u0275cmp=s.Cb({type:R,selectors:[["app-update-view"]],decls:12,vars:6,consts:[["type","file","accept","image/*",3,"change"],[4,"ngIf"],["color","success",2,"width","49%"],["style","width:48%",3,"click",4,"ngIf"],["color","danger",2,"width","100%",3,"click"],[2,"font-size","8px"],["type","text",2,"position","absolute","top","-900px",3,"ngModel","ngModelChange"],["eleInp",""],["color","danger",3,"click"],[2,"width","48%",3,"click"],["type","text",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[2,"width","100%",3,"click"],["slot","start"],[3,"src"],[3,"ngModel","name","ngModelChange"],[3,"click"],[3,"value",4,"ngFor","ngForOf"],["type","number",3,"ngModel","name","ngModelChange"],[1,"warning",3,"click"],[1,"splitRed"],[3,"value"],["width","100%"],[1,"split"]],template:function(t,n){1&t&&(s.Lb(0,"input",0),s.Tb("change",(function(t){return n.filechange(t)})),s.Kb(),s.nc(1,C,7,2,"div",1),s.Lb(2,"ion-card"),s.Lb(3,"ion-button",2),s.pc(4,"Download Current Data"),s.Kb(),s.nc(5,V,2,0,"ion-button",3),s.nc(6,I,2,0,"ion-button",3),s.Lb(7,"ion-button",4),s.Tb("click",(function(){return n.update()})),s.pc(8,"Update Current Data"),s.Kb(),s.Kb(),s.nc(9,T,1,0,"ion-spinner",1),s.nc(10,D,16,3,"ion-content",1),s.nc(11,J,8,1,"ion-content",1)),2&t&&(s.xb(1),s.bc("ngIf",n.currentUpload&&""!=n.currentUpload),s.xb(4),s.bc("ngIf","cat"!=n.showWhat),s.xb(1),s.bc("ngIf","cat"==n.showWhat),s.xb(3),s.bc("ngIf",n.showSpin),s.xb(1),s.bc("ngIf",!n.showSpin&&"cat"==n.showWhat),s.xb(1),s.bc("ngIf",!n.showSpin&&"prod"==n.showWhat))},directives:[c.k,a.j,a.h,r.a,r.e,r.h,a.N,a.o,a.A,a.B,a.y,a.z,c.j,a.d,r.k,r.j,r.i,r.l],styles:[".split[_ngcontent-%COMP%]{background-color:#00f}.split[_ngcontent-%COMP%], .splitRed[_ngcontent-%COMP%]{height:15px;width:100%}.splitRed[_ngcontent-%COMP%]{background-color:red}"]}),R);function j(t,n){if(1&t){var e=s.Mb();s.Lb(0,"ion-item"),s.Lb(1,"ion-button",3),s.Tb("click",(function(){s.ic(e);var t=s.Vb();return t.histView=!t.histView})),s.pc(2,"Update Products"),s.Kb(),s.Kb()}}function U(t,n){if(1&t){var e=s.Mb();s.Lb(0,"ion-item"),s.Lb(1,"ion-button",3),s.Tb("click",(function(){s.ic(e);var t=s.Vb();return t.histView=!t.histView})),s.pc(2,"View Orders"),s.Kb(),s.Kb()}}function S(t,n){1&t&&s.Jb(0,"app-all-orders")}function q(t,n){1&t&&s.Jb(0,"app-update-view")}var E,_,W,N=[{path:"",component:(E=function(){function n(){t(this,n),this.histView=!0}return e(n,[{key:"ngOnInit",value:function(){}}]),n}(),E.\u0275fac=function(t){return new(t||E)},E.\u0275cmp=s.Cb({type:E,selectors:[["app-manager"]],decls:12,vars:4,consts:[["slot","start"],["defaultHref","home"],[4,"ngIf"],[2,"width","100%","font-size","16px",3,"click"]],template:function(t,n){1&t&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar"),s.Lb(2,"ion-buttons",0),s.Jb(3,"ion-back-button",1),s.Kb(),s.Lb(4,"ion-title"),s.pc(5,"Manager"),s.Kb(),s.Kb(),s.Kb(),s.Lb(6,"ion-content"),s.Lb(7,"ion-list"),s.nc(8,j,3,0,"ion-item",2),s.nc(9,U,3,0,"ion-item",2),s.Kb(),s.nc(10,S,1,0,"app-all-orders",2),s.nc(11,q,1,0,"app-update-view",2),s.Kb()),2&t&&(s.xb(8),s.bc("ngIf",n.histView),s.xb(1),s.bc("ngIf",!n.histView),s.xb(1),s.bc("ngIf",n.histView),s.xb(1),s.bc("ngIf",!n.histView))},directives:[a.t,a.U,a.i,a.e,a.f,a.T,a.o,a.A,c.k,a.y,a.h,k,z],styles:[""]}),E)}],A=((W=function n(){t(this,n)}).\u0275mod=s.Gb({type:W}),W.\u0275inj=s.Fb({factory:function(t){return new(t||W)},imports:[[b.j.forChild(N)],b.j]}),W),G=((_=function n(){t(this,n)}).\u0275mod=s.Gb({type:_}),_.\u0275inj=s.Fb({factory:function(t){return new(t||_)},imports:[[c.b,r.b,a.V,A]]}),_)}}])}();