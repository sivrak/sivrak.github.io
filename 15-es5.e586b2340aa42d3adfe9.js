!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{kY2p:function(n,i,o){"use strict";o.r(i),o.d(i,"ManagerPageModule",(function(){return A}));var c=o("ofXK"),a=o("3Pt+"),r=o("TEn/"),b=o("tyNb"),s=o("fXoL"),l=o("mrSG"),u=o("JZFu");function d(t,n){1&t&&s.Ib(0,"ion-spinner")}function g(t,n){if(1&t&&(s.Kb(0,"span",9),s.lc(1),s.Jb()),2&t){var e=s.Ub().$implicit;s.xb(1),s.oc("",e.type," X ",e.selected,"")}}function p(t,n){if(1&t&&(s.Kb(0,"span",11),s.lc(1),s.Jb()),2&t){var e=s.Ub().index;s.xb(1),s.nc("Text ",e,": ")}}function f(t,n){1&t&&(s.Kb(0,"span"),s.lc(1,","),s.Jb())}function h(t,n){1&t&&(s.Kb(0,"span"),s.Ib(1,"br"),s.Jb())}function m(t,n){if(1&t&&(s.Kb(0,"span"),s.jc(1,p,2,1,"span",10),s.lc(2),s.jc(3,f,2,0,"span",0),s.jc(4,h,2,0,"span",0),s.Jb()),2&t){var e=n.$implicit,i=n.index,o=s.Ub().$implicit;s.xb(1),s.ac("ngIf",e),s.xb(1),s.nc("",e," "),s.xb(1),s.ac("ngIf",e&&i+1!=o.reqtxt.length),s.xb(1),s.ac("ngIf",e&&i+1==o.reqtxt.length)}}function v(t,n){if(1&t&&(s.Kb(0,"span"),s.Ib(1,"img",12),s.Jb()),2&t){var e=n.$implicit;s.xb(1),s.ac("src",e,s.hc)}}function J(t,n){if(1&t&&(s.Kb(0,"span"),s.jc(1,g,2,2,"span",8),s.Kb(2,"div"),s.jc(3,m,5,4,"span",2),s.jc(4,v,2,1,"span",2),s.Jb(),s.Jb()),2&t){var e=n.$implicit;s.xb(1),s.ac("ngIf",e.selected&&e.selected>0),s.xb(2),s.ac("ngForOf",e.reqtxt),s.xb(1),s.ac("ngForOf",e.reqImg)}}function K(t,n){if(1&t&&(s.Kb(0,"span"),s.Ib(1,"hr"),s.Kb(2,"div",4),s.Kb(3,"ion-avatar",5),s.Ib(4,"img",6),s.Jb(),s.Kb(5,"ion-label",7),s.lc(6),s.jc(7,J,5,3,"span",2),s.Jb(),s.Jb(),s.Jb()),2&t){var e=n.$implicit;s.xb(4),s.ac("src",e.src,s.hc),s.xb(2),s.nc("",e.name," "),s.xb(1),s.ac("ngForOf",e.variants)}}function x(t,n){if(1&t&&(s.Kb(0,"div"),s.Kb(1,"ion-card"),s.Kb(2,"div",3),s.lc(3," Order placed "),s.Jb(),s.Kb(4,"ion-card-header"),s.Kb(5,"ion-card-subtitle"),s.lc(6),s.Vb(7,"date"),s.Jb(),s.Jb(),s.Kb(8,"ion-card-content"),s.Kb(9,"div"),s.jc(10,K,8,3,"span",2),s.Jb(),s.Jb(),s.Jb(),s.Ib(11,"hr"),s.Jb()),2&t){var e=n.$implicit;s.xb(6),s.pc("",e.delivery.name," - Pincode ",e.delivery.pincode," - Date (",s.Wb(7,4,e.date),")"),s.xb(4),s.ac("ngForOf",e.items)}}function w(t,n){if(1&t&&(s.Kb(0,"div"),s.jc(1,x,12,6,"div",2),s.Jb()),2&t){var e=s.Ub();s.xb(1),s.ac("ngForOf",e.historyList)}}function y(t,n){1&t&&(s.Kb(0,"p",13),s.lc(1," No previous orders found.. "),s.Jb())}var k,M=((k=function(){function n(e){t(this,n),this.alertController=e,this.historyList=[],this.status=!1,this.showSpin=!0}return e(n,[{key:"ngOnInit",value:function(){var t=localStorage.getItem("zphone");console.log(t),t?this.initDatas(t):this.alertController.create({header:"Login To Continue",message:"User must be logged in",buttons:["OK"]}).then((function(t){t.present()}))}},{key:"initDatas",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.historyList=[],n=u.a.firestore().collection("orders"),t.next=4,n.get().then((function(t){e.showSpin=!1,t.empty?(e.status=!0,e.historyList=[]):(t.forEach((function(t){e.historyList.push(t.data())})),e.historyList.sort((function(t,n){var e=new Date(t.date),i=new Date(n.date);return e<i?1:e>i?-1:0})))})).catch((function(t){console.log("Error getting documents: ",t)}));case 4:case"end":return t.stop()}}),t,this)})))}}]),n}()).\u0275fac=function(t){return new(t||k)(s.Hb(r.b))},k.\u0275cmp=s.Bb({type:k,selectors:[["app-all-orders"]],decls:3,vars:3,consts:[[4,"ngIf"],["style","padding-left: 15px;",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"statuz"],[1,"chipz"],[1,"avatarz"],[3,"src"],["text-wrap","",1,"labelz",2,"font-weight","600"],["style","font-weight: 300;",4,"ngIf"],[2,"font-weight","300"],["style","font-weight: 600;",4,"ngIf"],[2,"font-weight","600"],[2,"height","25px","width","auto","border-radius","8px",3,"src"],[2,"padding-left","15px"]],template:function(t,n){1&t&&(s.jc(0,d,1,0,"ion-spinner",0),s.jc(1,w,2,1,"div",0),s.jc(2,y,2,0,"p",1)),2&t&&(s.ac("ngIf",n.showSpin),s.xb(1),s.ac("ngIf",n.historyList&&n.historyList.length>0),s.xb(1),s.ac("ngIf",n.status&&n.historyList&&0==n.historyList.length))},directives:[c.k,r.O,c.j,r.j,r.l,r.m,r.k,r.d,r.A],pipes:[c.d],styles:[".avatarz[_ngcontent-%COMP%]{width:19%;height:auto}.avatarz[_ngcontent-%COMP%], .labelz[_ngcontent-%COMP%]{display:inline-block}.labelz[_ngcontent-%COMP%]{width:75%;margin-left:5%}.chipz[_ngcontent-%COMP%]{margin-bottom:10px}.statuz[_ngcontent-%COMP%]{text-align:right;margin-right:20px;color:#bd7304;font-weight:600}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;stroke:#444;fill:#222;margin-left:47%;margin-top:3%;margin-bottom:3%}"]}),k);function I(t,n){if(1&t){var e=s.Lb();s.Kb(0,"div"),s.Kb(1,"p",5),s.lc(2),s.Jb(),s.Kb(3,"input",6,7),s.Sb("ngModelChange",(function(t){return s.gc(e),s.Ub().currentUpload=t})),s.Jb(),s.Kb(5,"ion-button",8),s.Sb("click",(function(){s.gc(e);var t=s.fc(4);return s.Ub().copytoclip(t)})),s.lc(6,"Copy"),s.Jb(),s.Jb()}if(2&t){var i=s.Ub();s.xb(2),s.mc(i.currentUpload),s.xb(1),s.ac("ngModel",i.currentUpload)}}function C(t,n){if(1&t){var e=s.Lb();s.Kb(0,"ion-button",9),s.Sb("click",(function(){return s.gc(e),s.Ub().category()})),s.lc(1,"Category"),s.Jb()}}function S(t,n){if(1&t){var e=s.Lb();s.Kb(0,"ion-button",9),s.Sb("click",(function(){return s.gc(e),s.Ub().products()})),s.lc(1,"Products"),s.Jb()}}function j(t,n){1&t&&s.Ib(0,"ion-spinner")}function O(t,n){if(1&t){var e=s.Lb();s.Kb(0,"ion-item"),s.Kb(1,"ion-avatar",13),s.Ib(2,"img",14),s.Jb(),s.Kb(3,"ion-label"),s.Kb(4,"h2"),s.lc(5),s.Jb(),s.Kb(6,"p"),s.lc(7),s.Jb(),s.Kb(8,"div"),s.lc(9," Image - "),s.Kb(10,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.img=t})),s.Jb(),s.Jb(),s.Kb(11,"div"),s.lc(12," Category - "),s.Kb(13,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.cat=t})),s.Jb(),s.Jb(),s.Kb(14,"div"),s.lc(15," Id - "),s.Kb(16,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.id=t})),s.Jb(),s.Jb(),s.Kb(17,"div"),s.Kb(18,"ion-button",16),s.Sb("click",(function(){s.gc(e);var t=n.index;return s.Ub(2).removeCat(t)})),s.lc(19,"Remove"),s.Jb(),s.Jb(),s.Jb(),s.Jb()}if(2&t){var i=n.$implicit,o=n.index;s.xb(2),s.ac("src",i.img,s.hc),s.xb(3),s.mc(i.cat),s.xb(2),s.nc("ID - ",i.id,""),s.xb(3),s.ac("ngModel",i.img)("name","catDa"+o),s.xb(3),s.ac("ngModel",i.cat)("name","catDa1"+o),s.xb(3),s.ac("ngModel",i.id)("name","catDa2"+o)}}function U(t,n){if(1&t){var e=s.Lb();s.Kb(0,"ion-content"),s.Kb(1,"ion-list"),s.Kb(2,"ion-list-header"),s.lc(3," Categories "),s.Jb(),s.Kb(4,"ion-item"),s.Kb(5,"ion-label"),s.Kb(6,"p"),s.lc(7,"Name - "),s.Kb(8,"input",10),s.Sb("ngModelChange",(function(t){return s.gc(e),s.Ub().catData.name=t})),s.Jb(),s.Jb(),s.Kb(9,"p"),s.lc(10,"Phone - "),s.Kb(11,"input",10),s.Sb("ngModelChange",(function(t){return s.gc(e),s.Ub().catData.phone=t})),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.jc(12,O,20,9,"ion-item",11),s.Kb(13,"ion-item"),s.Kb(14,"ion-button",12),s.Sb("click",(function(){s.gc(e);var t=s.Ub();return t.addCat(t.catData.catalogue)})),s.lc(15,"Add Category"),s.Jb(),s.Jb(),s.Jb(),s.Jb()}if(2&t){var i=s.Ub();s.xb(8),s.ac("ngModel",i.catData.name),s.xb(3),s.ac("ngModel",i.catData.phone),s.xb(1),s.ac("ngForOf",i.catData.catalogue)}}function D(t,n){if(1&t&&(s.Kb(0,"option",21),s.lc(1),s.Jb()),2&t){var e=n.$implicit;s.ac("value",e.id),s.xb(1),s.mc(e.cat)}}function P(t,n){if(1&t){var e=s.Lb();s.Kb(0,"div"),s.Kb(1,"table"),s.Kb(2,"tr",22),s.Kb(3,"td"),s.lc(4,"Type"),s.Jb(),s.Kb(5,"td"),s.Kb(6,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.type=t})),s.Jb(),s.Jb(),s.Jb(),s.Kb(7,"tr",22),s.Kb(8,"td"),s.lc(9,"Price"),s.Jb(),s.Kb(10,"td"),s.Kb(11,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.price=t})),s.Jb(),s.Jb(),s.Jb(),s.Kb(12,"tr",22),s.Kb(13,"td"),s.lc(14,"Unit"),s.Jb(),s.Kb(15,"td"),s.Kb(16,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.unit=t})),s.Jb(),s.Jb(),s.Jb(),s.Kb(17,"tr",22),s.Kb(18,"td"),s.Kb(19,"ion-button",16),s.Sb("click",(function(){s.gc(e);var t=n.index,i=s.Ub().$implicit;return s.Ub(2).removeVrnt(i.variants,t)})),s.lc(20,"Remove"),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Ib(21,"div",23),s.Jb()}if(2&t){var i=n.$implicit,o=s.Ub().index;s.xb(6),s.ac("ngModel",i.type)("name","in"+o),s.xb(5),s.ac("ngModel",i.price)("name","in1"+o),s.xb(5),s.ac("ngModel",i.unit)("name","in2"+o)}}function $(t,n){if(1&t){var e=s.Lb();s.Kb(0,"ion-item"),s.Kb(1,"ion-avatar",13),s.Ib(2,"img",14),s.Jb(),s.Kb(3,"ion-label"),s.Kb(4,"h2"),s.lc(5,"Name -"),s.Jb(),s.Kb(6,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.name=t})),s.Jb(),s.Kb(7,"p"),s.lc(8,"Image -"),s.Kb(9,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.src=t})),s.Jb(),s.Jb(),s.Kb(10,"p"),s.lc(11,"Desc -"),s.Kb(12,"input",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.desc=t})),s.Jb(),s.Jb(),s.Kb(13,"p"),s.lc(14,"Category - "),s.Kb(15,"select",15),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.category=t})),s.jc(16,D,2,2,"option",17),s.Jb(),s.Jb(),s.Kb(17,"p"),s.lc(18,"Text - "),s.Kb(19,"input",18),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.requirements.texts=t})),s.Jb(),s.Jb(),s.Kb(20,"p"),s.lc(21,"Images - "),s.Kb(22,"input",18),s.Sb("ngModelChange",(function(t){return s.gc(e),n.$implicit.requirements.images=t})),s.Jb(),s.Jb(),s.Kb(23,"p"),s.lc(24,"Variants - "),s.Jb(),s.jc(25,P,22,6,"div",11),s.Kb(26,"ion-button",16),s.Sb("click",(function(){s.gc(e);var t=n.$implicit;return s.Ub(2).addVar(t.variants)})),s.lc(27,"Add Variant"),s.Jb(),s.Ib(28,"br"),s.Ib(29,"hr"),s.Kb(30,"ion-button",19),s.Sb("click",(function(){s.gc(e);var t=n.index;return s.Ub(2).removeProd(t)})),s.lc(31,"Remove"),s.Jb(),s.Ib(32,"div",20),s.Jb(),s.Jb()}if(2&t){var i=n.$implicit,o=n.index,c=s.Ub(2);s.xb(2),s.ac("src",i.src,s.hc),s.xb(4),s.ac("ngModel",i.name)("name","prod1"+o),s.xb(3),s.ac("ngModel",i.src)("name","prodi"+o),s.xb(3),s.ac("ngModel",i.desc)("name","prodd"+o),s.xb(3),s.ac("ngModel",i.category)("name","prod2"+o),s.xb(1),s.ac("ngForOf",c.catData.catalogue),s.xb(3),s.ac("ngModel",i.requirements.texts)("name","prod3"+o),s.xb(3),s.ac("ngModel",i.requirements.images)("name","prod4"+o),s.xb(3),s.ac("ngForOf",i.variants)}}function L(t,n){if(1&t){var e=s.Lb();s.Kb(0,"ion-content"),s.Kb(1,"ion-list"),s.Kb(2,"ion-list-header"),s.lc(3," Products "),s.Jb(),s.Kb(4,"ion-item"),s.Kb(5,"ion-button",12),s.Sb("click",(function(){s.gc(e);var t=s.Ub();return t.addProd(t.prodData)})),s.lc(6,"Add Product"),s.Jb(),s.Jb(),s.jc(7,$,33,15,"ion-item",11),s.Jb(),s.Jb()}if(2&t){var i=s.Ub();s.xb(7),s.ac("ngForOf",i.prodData)}}var F,R=((F=function(){function n(){t(this,n),this.showSpin=!0,this.prodData={},this.catData={},this.showWhat="cat",this.currentUpload=""}return e(n,[{key:"ngOnInit",value:function(){}},{key:"category",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.showSpin=!0,this.showWhat="cat",n=u.a.firestore().collection("shop").doc("digiCat"),t.next=4,n.get();case 4:(e=t.sent).exists?(this.catData=e.data(),this.showSpin=!1,console.log(this.catData)):console.log("EMPTY");case 6:case"end":return t.stop()}}),t,this)})))}},{key:"products",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.showSpin=!0,this.showWhat="prod",n=u.a.firestore().collection("shop").doc("digiProd"),t.next=4,n.get();case 4:(e=t.sent).exists?(this.prodData=e.data().data,this.showSpin=!1,console.log(this.prodData)):console.log("EMPTY");case 6:case"end":return t.stop()}}),t,this)})))}},{key:"addVar",value:function(t){t.push({type:"",price:0,unit:"",selected:0})}},{key:"addCat",value:function(t){t.push({cat:"",id:0,img:""})}},{key:"addProd",value:function(t){t.unshift({name:"",src:"",desc:"",category:0,variants:[],requirements:{texts:0,images:0}})}},{key:"removeProd",value:function(t){var n=prompt("Enter 'yes' ",t);console.log(n),"yes"==n&&this.prodData.splice(t,1)}},{key:"removeCat",value:function(t){var n=prompt("Enter 'yes' ",t);console.log(n),"yes"==n&&this.catData.catalogue.splice(t,1)}},{key:"removeVrnt",value:function(t,n){var e=prompt("Enter 'yes' ",n);console.log(e),"yes"==e&&t.splice(n,1)}},{key:"filechange",value:function(t){var n=this;t.target&&t.target.files[0]&&t.target.files[0].name&&(console.log(t.target.files[0]),t.target.files[0].size>6e5?alert("File size is BIG, should be less than 600kb"):u.a.storage().ref().child("newImages/"+t.target.files[0].name+(new Date).getTime()).put(t.target.files[0]).then((function(t){return Object(l.a)(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("Uploaded a blob or file!",t),n.t0="success"==t.state&&t&&t.ref,!n.t0){n.next=6;break}return n.next=5,t.ref.getDownloadURL();case 5:this.currentUpload=n.sent;case 6:case"end":return n.stop()}}),n,this)})))})))}},{key:"copytoclip",value:function(t){t.select(),document.execCommand("copy"),t.setSelectionRange(0,0),this.currentUpload=""}},{key:"update",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"yes"==prompt("Enter 'yes' ")&&("cat"==this.showWhat?u.a.firestore().collection("shop").doc("digiCat").set(this.catData).then((function(t){console.log("val",t),alert("cat DONE "+t)})):"prod"==this.showWhat&&u.a.firestore().collection("shop").doc("digiProd").set({data:this.prodData}).then((function(t){console.log("val",t),alert("prod DONE "+t)})));case 1:case"end":return t.stop()}}),t,this)})))}}]),n}()).\u0275fac=function(t){return new(t||F)},F.\u0275cmp=s.Bb({type:F,selectors:[["app-update-view"]],decls:12,vars:6,consts:[["type","file","accept","image/*",3,"change"],[4,"ngIf"],["color","success",2,"width","49%"],["style","width:48%",3,"click",4,"ngIf"],["color","danger",2,"width","100%",3,"click"],[2,"font-size","8px"],["type","text",2,"position","absolute","top","-900px",3,"ngModel","ngModelChange"],["eleInp",""],["color","danger",3,"click"],[2,"width","48%",3,"click"],["type","text",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[2,"width","100%",3,"click"],["slot","start"],[3,"src"],[3,"ngModel","name","ngModelChange"],[3,"click"],[3,"value",4,"ngFor","ngForOf"],["type","number",3,"ngModel","name","ngModelChange"],[1,"warning",3,"click"],[1,"splitRed"],[3,"value"],["width","100%"],[1,"split"]],template:function(t,n){1&t&&(s.Kb(0,"input",0),s.Sb("change",(function(t){return n.filechange(t)})),s.Jb(),s.jc(1,I,7,2,"div",1),s.Kb(2,"ion-card"),s.Kb(3,"ion-button",2),s.lc(4,"Download Current Data"),s.Jb(),s.jc(5,C,2,0,"ion-button",3),s.jc(6,S,2,0,"ion-button",3),s.Kb(7,"ion-button",4),s.Sb("click",(function(){return n.update()})),s.lc(8,"Update Current Data"),s.Jb(),s.Jb(),s.jc(9,j,1,0,"ion-spinner",1),s.jc(10,U,16,3,"ion-content",1),s.jc(11,L,8,1,"ion-content",1)),2&t&&(s.xb(1),s.ac("ngIf",n.currentUpload&&""!=n.currentUpload),s.xb(4),s.ac("ngIf","cat"!=n.showWhat),s.xb(1),s.ac("ngIf","cat"==n.showWhat),s.xb(3),s.ac("ngIf",n.showSpin),s.xb(1),s.ac("ngIf",!n.showSpin&&"cat"==n.showWhat),s.xb(1),s.ac("ngIf",!n.showSpin&&"prod"==n.showWhat))},directives:[c.k,r.j,r.h,a.a,a.e,a.f,r.O,r.o,r.B,r.C,r.z,r.A,c.j,r.d,a.i,a.h,a.g,a.j],styles:[".split[_ngcontent-%COMP%]{background-color:#00f}.split[_ngcontent-%COMP%], .splitRed[_ngcontent-%COMP%]{height:15px;width:100%}.splitRed[_ngcontent-%COMP%]{background-color:red}"]}),F);function V(t,n){if(1&t){var e=s.Lb();s.Kb(0,"ion-item"),s.Kb(1,"ion-button",3),s.Sb("click",(function(){s.gc(e);var t=s.Ub();return t.histView=!t.histView})),s.lc(2,"Update Products"),s.Jb(),s.Jb()}}function z(t,n){if(1&t){var e=s.Lb();s.Kb(0,"ion-item"),s.Kb(1,"ion-button",3),s.Sb("click",(function(){s.gc(e);var t=s.Ub();return t.histView=!t.histView})),s.lc(2,"View Orders"),s.Jb(),s.Jb()}}function E(t,n){1&t&&s.Ib(0,"app-all-orders")}function W(t,n){1&t&&s.Ib(0,"app-update-view")}var _,q,T,B=[{path:"",component:(_=function(){function n(){t(this,n),this.histView=!0}return e(n,[{key:"ngOnInit",value:function(){}}]),n}(),_.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=s.Bb({type:_,selectors:[["app-manager"]],decls:12,vars:4,consts:[["slot","start"],["defaultHref","home"],[4,"ngIf"],[2,"width","100%","font-size","16px",3,"click"]],template:function(t,n){1&t&&(s.Kb(0,"ion-header"),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-buttons",0),s.Ib(3,"ion-back-button",1),s.Jb(),s.Kb(4,"ion-title"),s.lc(5,"Manager"),s.Jb(),s.Jb(),s.Jb(),s.Kb(6,"ion-content"),s.Kb(7,"ion-list"),s.jc(8,V,3,0,"ion-item",2),s.jc(9,z,3,0,"ion-item",2),s.Jb(),s.jc(10,E,1,0,"app-all-orders",2),s.jc(11,W,1,0,"app-update-view",2),s.Jb()),2&t&&(s.xb(8),s.ac("ngIf",n.histView),s.xb(1),s.ac("ngIf",!n.histView),s.xb(1),s.ac("ngIf",n.histView),s.xb(1),s.ac("ngIf",!n.histView))},directives:[r.t,r.V,r.i,r.e,r.f,r.U,r.o,r.B,c.k,r.z,r.h,M,R],styles:[""]}),_)}],N=((T=function n(){t(this,n)}).\u0275mod=s.Fb({type:T}),T.\u0275inj=s.Eb({factory:function(t){return new(t||T)},imports:[[b.j.forChild(B)],b.j]}),T),A=((q=function n(){t(this,n)}).\u0275mod=s.Fb({type:q}),q.\u0275inj=s.Eb({factory:function(t){return new(t||q)},imports:[[c.b,a.b,r.W,N]]}),q)}}])}();