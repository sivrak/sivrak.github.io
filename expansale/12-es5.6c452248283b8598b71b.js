!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{v35Q:function(t,r,o){"use strict";o.r(r),o.d(r,"CartPageModule",(function(){return Q}));var a=o("ofXK"),c=o("3Pt+"),s=o("TEn/"),l=o("tyNb"),b=o("mrSG"),d=o("fXoL");function u(e,t){1&e&&(d.Kb(0,"ion-button",18),d.Kb(1,"div"),d.lc(2," Ordered Successfully, "),d.Jb(),d.Jb())}function g(e,t){if(1&e){var n=d.Lb();d.Kb(0,"ion-button",19),d.Sb("click",(function(){return d.gc(n),d.Ub().dismiss()})),d.lc(1,"Try Again"),d.Jb()}}function m(e,t){if(1&e&&(d.Kb(0,"table",23),d.Kb(1,"tr"),d.Kb(2,"td",24),d.lc(3),d.Jb(),d.Kb(4,"td",24),d.lc(5),d.Ib(6,"br"),d.lc(7,"X "),d.Ib(8,"br"),d.lc(9),d.Jb(),d.Kb(10,"td",25),d.lc(11),d.Ib(12,"br"),d.lc(13,"/"),d.Ib(14,"br"),d.lc(15),d.Jb(),d.Kb(16,"td",25),d.lc(17),d.Jb(),d.Jb(),d.Jb()),2&e){var n=d.Ub().$implicit,r=d.Ub().$implicit;d.xb(3),d.mc(r.name),d.xb(2),d.nc("",n.selected," "),d.xb(4),d.mc(n.unit),d.xb(2),d.nc("",n.price," "),d.xb(4),d.nc(" ",n.unit,""),d.xb(2),d.nc("Rs ",n.price*n.selected,"")}}function f(e,t){if(1&e&&(d.Kb(0,"span"),d.jc(1,m,18,6,"table",22),d.Jb()),2&e){var n=t.$implicit;d.xb(1),d.ac("ngIf",n&&n.selected&&n.selected>0)}}function p(e,t){if(1&e&&(d.Kb(0,"ion-card",20),d.jc(1,f,2,1,"span",21),d.Jb()),2&e){var n=t.$implicit;d.xb(1),d.ac("ngForOf",n.variants)}}var h,x=((h=function(){function e(t){n(this,e),this.modalCtrl=t,this.data={},this.totals=0,this.delivery={},this.error=!1,this.status="ok"}return i(e,[{key:"ngOnInit",value:function(){console.log(this.data)}},{key:"dismiss",value:function(){this.modalCtrl.dismiss({dismissed:!0})}}]),e}()).\u0275fac=function(e){return new(e||h)(d.Hb(s.Y))},h.\u0275cmp=d.Bb({type:h,selectors:[["app-place-order"]],inputs:{data:"data",totals:"totals",delivery:"delivery",error:"error"},decls:59,vars:8,consts:[["vertical","top","horizontal","end","slot","fixed","routerLink","/home"],["name","close-outline"],["slot","start"],[1,"totals"],[1,"totalsTxt"],["size","12"],["color","success","routerLink","/home","style","width: 100%;","class","btnStyle",4,"ngIf"],["color","warning","style","width: 100%;","class","btnStyle",3,"click",4,"ngIf"],[2,"margin","3px 10px"],[1,"callu"],[1,"detTxt"],["href","https://api.whatsapp.com/send/?phone=917871485184"],[1,"detTxt",2,"color","darkgoldenrod"],["size","12",2,"padding","0px","padding-top","10px","padding-left","10px"],[2,"margin","0px"],["style","margin: 10px; padding-bottom: 10px;",4,"ngFor","ngForOf"],[1,"summary"],["colspan","2",2,"font-weight","600"],["color","success","routerLink","/home",1,"btnStyle",2,"width","100%"],["color","warning",1,"btnStyle",2,"width","100%",3,"click"],[2,"margin","10px","padding-bottom","10px"],[4,"ngFor","ngForOf"],["class","orderDet",4,"ngIf"],[1,"orderDet"],["width","30%"],["width","20%"]],template:function(e,t){1&e&&(d.Kb(0,"ion-fab",0),d.Kb(1,"ion-fab-button"),d.Ib(2,"ion-icon",1),d.Jb(),d.Jb(),d.Kb(3,"ion-header"),d.Kb(4,"ion-toolbar"),d.Kb(5,"ion-buttons",2),d.Ib(6,"ion-back-button"),d.Jb(),d.Kb(7,"ion-title"),d.lc(8,"Order"),d.Jb(),d.Jb(),d.Jb(),d.Kb(9,"ion-header"),d.Kb(10,"ion-toolbar"),d.Kb(11,"div",3),d.Kb(12,"div",4),d.lc(13),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(14,"ion-content"),d.Kb(15,"ion-row"),d.Kb(16,"ion-col",5),d.jc(17,u,3,0,"ion-button",6),d.Jb(),d.Kb(18,"ion-col",5),d.jc(19,g,2,0,"ion-button",7),d.Jb(),d.Kb(20,"ion-col",5),d.Kb(21,"ion-card",8),d.Kb(22,"h2",9),d.lc(23,"We will CALL you to Confirm Order"),d.Jb(),d.Kb(24,"h4",10),d.lc(25,"Thank you for placing the order."),d.Jb(),d.Kb(26,"a",11),d.Kb(27,"h6",12),d.lc(28,"For details contact us at Whatsapp 7871485184."),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(29,"ion-row"),d.Kb(30,"ion-col",13),d.Kb(31,"h6",14),d.lc(32,"Order Summary"),d.Jb(),d.Jb(),d.Kb(33,"ion-col",5),d.jc(34,p,2,1,"ion-card",15),d.Kb(35,"table",16),d.Kb(36,"tr"),d.Kb(37,"td",17),d.lc(38,"Delivery details"),d.Jb(),d.Jb(),d.Kb(39,"tr"),d.Kb(40,"td"),d.lc(41,"Name"),d.Jb(),d.Kb(42,"td"),d.lc(43),d.Jb(),d.Jb(),d.Kb(44,"tr"),d.Kb(45,"td"),d.lc(46,"Address"),d.Jb(),d.Kb(47,"td"),d.lc(48),d.Jb(),d.Jb(),d.Kb(49,"tr"),d.Kb(50,"td"),d.lc(51,"Pin Code"),d.Jb(),d.Kb(52,"td"),d.lc(53),d.Jb(),d.Jb(),d.Kb(54,"tr"),d.Kb(55,"td"),d.lc(56,"Phone"),d.Jb(),d.Kb(57,"td"),d.lc(58),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&e&&(d.xb(13),d.nc("Total Cost - Rs.",t.totals,""),d.xb(4),d.ac("ngIf",!t.error),d.xb(2),d.ac("ngIf",t.error),d.xb(15),d.ac("ngForOf",t.data),d.xb(9),d.mc(t.delivery.name),d.xb(5),d.mc(t.delivery.address),d.xb(5),d.mc(t.delivery.pincode),d.xb(5),d.mc(t.delivery.phone))},directives:[s.p,s.ab,l.h,s.q,s.u,s.t,s.U,s.i,s.e,s.f,s.T,s.o,s.H,s.n,a.k,s.j,a.j,s.h],styles:[".totals[_ngcontent-%COMP%]{font-weight:600;font-size:20px}.totals[_ngcontent-%COMP%]   .totalsTxt[_ngcontent-%COMP%]{padding-top:3%;font-size:large;width:50%;display:inline-block;vertical-align:middle}.orderDet[_ngcontent-%COMP%]{width:90%;margin-left:5%;margin-right:5%;color:#666;line-height:1.6;margin-top:3%;text-align:center}.orderDet[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .orderDet[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #d7d8da;padding-top:3px;padding-left:3px}.btnStyle[_ngcontent-%COMP%]{width:100%;font-weight:600;font-size:30px}.summary[_ngcontent-%COMP%]{width:100%;font-size:1rem;color:#666;line-height:1.6;margin-top:7%;text-align:center}.summary[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #d7d8da;padding-top:3px}.detTxt[_ngcontent-%COMP%]{padding:1px 10px}.callu[_ngcontent-%COMP%], .detTxt[_ngcontent-%COMP%]{text-align:center}.callu[_ngcontent-%COMP%]{margin-top:10px;padding-left:8px;font-weight:700}"]}),h),v=o("JZFu"),K=o("/xxd"),J=o("al7H"),C=o("jhN1");function y(e,t){if(1&e){var n=d.Lb();d.Kb(0,"ion-item",9),d.Kb(1,"ion-card",10),d.Kb(2,"table",11),d.Kb(3,"tr"),d.Kb(4,"td",12),d.lc(5,"Delivery details"),d.Jb(),d.Jb(),d.Kb(6,"tr"),d.Kb(7,"td"),d.lc(8,"Name"),d.Jb(),d.Kb(9,"td"),d.lc(10),d.Jb(),d.Jb(),d.Kb(11,"tr"),d.Kb(12,"td"),d.lc(13,"Address"),d.Jb(),d.Kb(14,"td"),d.lc(15),d.Jb(),d.Jb(),d.Kb(16,"tr"),d.Kb(17,"td"),d.lc(18,"Pin Code"),d.Jb(),d.Kb(19,"td"),d.lc(20),d.Jb(),d.Jb(),d.Kb(21,"tr"),d.Kb(22,"td"),d.lc(23,"Phone"),d.Jb(),d.Kb(24,"td"),d.lc(25),d.Jb(),d.Jb(),d.Kb(26,"tr",13),d.Kb(27,"td",14),d.Kb(28,"ion-button",15),d.Sb("click",(function(){return d.gc(n),d.Ub().updateAddress()})),d.lc(29,"Edit Delivery Details"),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb()}if(2&e){var r=d.Ub();d.xb(10),d.mc(r.delivery.name),d.xb(5),d.mc(r.delivery.address),d.xb(5),d.mc(r.delivery.pincode),d.xb(5),d.mc(r.delivery.phone)}}var I=function(){return["/","home"]};function O(e,t){1&e&&(d.Kb(0,"div",16),d.lc(1," Cart Empty,"),d.Ib(2,"br"),d.lc(3,"Click to continue shopping..."),d.Ib(4,"br"),d.Kb(5,"a",17),d.Ib(6,"img",18),d.Jb(),d.Jb()),2&e&&(d.xb(5),d.ac("routerLink",d.bc(1,I)))}function w(e,t){1&e&&(d.Kb(0,"span"),d.lc(1,"..."),d.Jb())}function k(e,t){1&e&&(d.Kb(0,"span"),d.lc(1,"..."),d.Jb())}function P(e,t){if(1&e&&(d.Kb(0,"span"),d.lc(1),d.Ib(2,"br"),d.Jb()),2&e){var n=d.Ub().$implicit;d.xb(1),d.pc("",n.selected,"xRs.",n.price,"=Rs.",n.selected*n.price,"")}}function M(e,t){if(1&e&&(d.Kb(0,"span",41),d.jc(1,P,3,3,"span",8),d.Jb()),2&e){var n=t.$implicit;d.xb(1),d.ac("ngIf",n.selected>0)}}function q(e,t){if(1&e&&(d.Kb(0,"span"),d.lc(1),d.Ib(2,"br"),d.Jb()),2&e){var n=d.Ub().$implicit;d.xb(1),d.pc("",n.selected,"xRs.",n.price,"=Rs.",n.selected*n.price,"")}}function j(e,t){if(1&e&&(d.Kb(0,"span",41),d.jc(1,q,3,3,"span",8),d.Jb()),2&e){var n=t.$implicit;d.xb(1),d.ac("ngIf",0!=n.selected)}}function z(e,t){if(1&e){var n=d.Lb();d.Kb(0,"ion-item",55),d.Kb(1,"ion-label",56),d.lc(2),d.Jb(),d.Kb(3,"ion-textarea",57),d.Sb("ionChange",(function(e){d.gc(n);var r=t.index,i=d.Ub(3).$implicit;return d.Ub(3).vrnttxtchanged(e,i,r)})),d.Jb(),d.Jb()}if(2&e){var r=t.index;d.xb(2),d.nc("TEXT ",r+1,"")}}var _=function(){return[]};function S(e,t){if(1&e&&(d.Kb(0,"ion-list"),d.jc(1,z,4,1,"ion-item",54),d.Jb()),2&e){var n=d.Ub(3).$implicit;d.xb(1),d.ac("ngForOf",d.bc(1,_).constructor(n.requirements.texts))}}function U(e,t){if(1&e&&(d.Kb(0,"ion-avatar",61),d.Ib(1,"img",62),d.Jb()),2&e){var n=d.Ub().index,r=d.Ub(3).$implicit,i=d.Ub(3);d.xb(1),d.ac("src",i.sanitizer.bypassSecurityTrustUrl(r.reqImg[n]),d.hc)}}function E(e,t){if(1&e){var n=d.Lb();d.Kb(0,"ion-item",55),d.Kb(1,"div"),d.Kb(2,"ion-label",58),d.lc(3),d.Jb(),d.jc(4,U,2,1,"ion-avatar",59),d.Jb(),d.Kb(5,"div"),d.Kb(6,"ion-button"),d.Kb(7,"input",60),d.Sb("change",(function(e){d.gc(n);var r=t.index,i=d.Ub(3).$implicit;return d.Ub(3).loadImageFromDevice(e,i,r)})),d.Jb(),d.Jb(),d.Jb(),d.Jb()}if(2&e){var r=t.index,i=d.Ub(3).$implicit;d.xb(3),d.nc("IMAGE ",r+1,""),d.xb(1),d.ac("ngIf",i.reqImg&&i.reqImg[r])}}function T(e,t){if(1&e&&(d.Kb(0,"ion-list"),d.jc(1,E,8,2,"ion-item",54),d.Jb()),2&e){var n=d.Ub(3).$implicit;d.xb(1),d.ac("ngForOf",d.bc(1,_).constructor(n.requirements.images))}}function F(e,t){1&e&&(d.Kb(0,"ion-item",55),d.Kb(1,"ion-label",56),d.lc(2,"we will contact you for requirements, on registered phone number."),d.Jb(),d.Jb())}function R(e,t){if(1&e&&(d.Kb(0,"ion-list"),d.jc(1,F,3,0,"ion-item",54),d.Jb()),2&e){var n=d.Ub(3).$implicit;d.xb(1),d.ac("ngForOf",d.bc(1,_).constructor(n.requirements.texts))}}function H(e,t){if(1&e){var n=d.Lb();d.Kb(0,"ion-row",43),d.Kb(1,"ion-col",44),d.lc(2),d.Ib(3,"br"),d.lc(4),d.Jb(),d.Kb(5,"ion-col",45),d.Kb(6,"div",46),d.lc(7),d.Jb(),d.Kb(8,"ion-grid"),d.Kb(9,"ion-row"),d.Kb(10,"ion-col",47),d.Kb(11,"ion-fab",48),d.Sb("click",(function(){d.gc(n);var e=d.Ub().$implicit,t=d.Ub().$implicit;return d.Ub(2).pieceFunc(e,"sub",t)})),d.Kb(12,"ion-fab-button",49),d.Ib(13,"ion-icon",50),d.Jb(),d.Jb(),d.Jb(),d.Kb(14,"ion-col",51),d.Kb(15,"input",52),d.Sb("ngModelChange",(function(e){return d.gc(n),d.Ub().$implicit.selected=e})),d.Jb(),d.Jb(),d.Kb(16,"ion-col",47),d.Kb(17,"ion-fab",48),d.Sb("click",(function(){d.gc(n);var e=d.Ub().$implicit,t=d.Ub().$implicit;return d.Ub(2).pieceFunc(e,"add",t)})),d.Kb(18,"ion-fab-button",49),d.Ib(19,"ion-icon",53),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(20,"ion-col",24),d.Ib(21,"hr"),d.jc(22,S,2,2,"ion-list",8),d.jc(23,T,2,2,"ion-list",8),d.jc(24,R,2,2,"ion-list",8),d.Jb(),d.Jb()}if(2&e){var r=d.Ub().$implicit,i=d.Ub().$implicit;d.xb(2),d.mc(r.type),d.xb(2),d.oc("Rs.",r.price,"/",r.unit,""),d.xb(3),d.nc("Quantity (",r.unit,")"),d.xb(8),d.ac("ngModel",r.selected),d.xb(7),d.ac("ngIf",i.requirements&&i.requirements.texts),d.xb(1),d.ac("ngIf",i.requirements&&i.requirements.images),d.xb(1),d.ac("ngIf",i.requirements&&0==i.requirements.texts&&0==i.requirements.images)}}function $(e,t){if(1&e&&(d.Kb(0,"span"),d.jc(1,H,25,8,"ion-row",42),d.Jb()),2&e){var n=t.$implicit;d.xb(1),d.ac("ngIf",0!=n.selected)}}function A(e,t){if(1&e){var n=d.Lb();d.Kb(0,"ion-item",21),d.Kb(1,"ion-card",22),d.Kb(2,"ion-grid",23),d.Kb(3,"ion-row"),d.Kb(4,"ion-col",24),d.Ib(5,"img",25),d.Jb(),d.Kb(6,"ion-col",24),d.Kb(7,"div",26),d.Kb(8,"h4",27),d.Kb(9,"span",28),d.lc(10),d.Vb(11,"slice"),d.Jb(),d.lc(12),d.Vb(13,"slice"),d.jc(14,w,2,0,"span",8),d.Jb(),d.Jb(),d.Kb(15,"div",29),d.Kb(16,"h4",27),d.Kb(17,"span",28),d.lc(18),d.Vb(19,"slice"),d.Jb(),d.lc(20),d.Vb(21,"slice"),d.jc(22,k,2,0,"span",8),d.Jb(),d.jc(23,M,2,1,"span",30),d.Kb(24,"ion-fab",31),d.Kb(25,"ion-fab-button",32),d.Sb("click",(function(){d.gc(n);var e=t.$implicit;return d.Ub(2).removePiece(e,1)})),d.Ib(26,"ion-icon",33),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(27,"ion-row",34),d.Kb(28,"ion-col"),d.Kb(29,"div",35),d.jc(30,j,2,1,"span",30),d.Jb(),d.Jb(),d.Kb(31,"ion-col",36),d.Kb(32,"ion-fab",37),d.Kb(33,"ion-fab-button",38),d.Sb("click",(function(){d.gc(n);var e=t.$implicit;return d.Ub(2).removePiece(e,1)})),d.Ib(34,"ion-icon",39),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.jc(35,$,2,1,"span",40),d.Jb(),d.Jb(),d.Jb()}if(2&e){var r=t.$implicit;d.xb(5),d.ac("src",r.src,d.hc),d.xb(5),d.mc(d.Xb(11,10,r.name,0,1)),d.xb(2),d.mc(d.Xb(13,14,r.name,1,30)),d.xb(2),d.ac("ngIf",r.name.length>=30),d.xb(4),d.mc(d.Xb(19,18,r.name,0,1)),d.xb(2),d.mc(d.Xb(21,22,r.name,1,60)),d.xb(2),d.ac("ngIf",r.name.length>=60),d.xb(1),d.ac("ngForOf",r.variants),d.xb(7),d.ac("ngForOf",r.variants),d.xb(5),d.ac("ngForOf",r.variants)}}function D(e,t){if(1&e&&(d.Kb(0,"ion-list"),d.Kb(1,"ion-list-header",19),d.lc(2," Order Details "),d.Jb(),d.jc(3,A,36,26,"ion-item",20),d.Jb()),2&e){var n=d.Ub();d.xb(3),d.ac("ngForOf",n.currentCart)}}var L,B,N,X=[{path:"",component:(L=function(){function t(e,r,i,o,a,c,s){n(this,t),this.cartHolder=e,this.modalController=r,this.authCheckService=i,this.alertController=o,this.loadingController=a,this.router=c,this.sanitizer=s,this.listItemz=[],this.currentCart=[],this.totals=0,this.delivery={},this.loading={},this.showSpin=!1,this.failed=0,this.blobURL=""}return i(t,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var e=this;localStorage.getItem("zname")&&localStorage.getItem("zaddress")&&localStorage.getItem("zpincode")&&localStorage.getItem("zphone")?this.delivery={name:localStorage.getItem("zname"),address:localStorage.getItem("zaddress"),pincode:localStorage.getItem("zpincode"),phone:localStorage.getItem("zphone")}:this.updateAddress(),""==localStorage.getItem("zphone")&&this.authCheckService.logout(),this.currentCart=[],this.listItemz=this.cartHolder.getCurrentCart(),this.listItemz.forEach((function(t){var n=0;t&&t.variants&&t.variants.forEach((function(e){if(e&&e.selected&&e.selected>0)return n=1,!0})),1==n&&e.currentCart.push(t)})),this.computeTotals(),this.currentCart.forEach((function(e){e&&e.variants&&e.variants.length>0&&e.variants.forEach((function(t){if(t&&!t.reqImg&&(t.reqImg=[]),t&&!t.reqtxt&&e.requirements&&e.requirements.texts>0){t.reqtxt=[];for(var n=0;n<e.requirements.texts;n++)t.reqtxt.push("")}}))})),console.log("this.cartHolder.cartCount",this.cartHolder.cartCount),console.log("currentCart",this.currentCart)}},{key:"removePiece",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.currentCart=this.currentCart.filter((function(r){if(r.name!=e.name)return!0;t.listItemz.forEach((function(i){i.name==e.name&&i.variants.forEach((function(e){var i=e.selected;e.selected=0,0!=i&&1==n&&(console.log(r.name,"this.cartHolder.cartCount",t.cartHolder.cartCount),t.cartHolder.cartCount=t.cartHolder.cartCount-1)}))}))})),this.computeTotals()}},{key:"pieceFunc",value:function(t,n,r){if("sub"==n){if(t.selected=t.selected-1,0==t.selected){this.cartHolder.cartCount=this.cartHolder.cartCount-1;var i=1;r.variants.forEach((function(e){if(e&&e.selected&&e.selected>0)return i=0,!0})),1==i&&this.removePiece(r)}}else"add"==n&&(t.selected=t.selected+1);this.cartHolder.setCurrentCart(e(this.listItemz)),this.computeTotals()}},{key:"computeTotals",value:function(){var e=this;this.totals=0,this.currentCart.forEach((function(t){t&&t.variants&&t.variants.length&&t.variants.forEach((function(t){t&&t.selected&&t.selected>0&&(e.totals=e.totals+t.selected*t.price)}))}))}},{key:"checkReq",value:function(){var e=this;return new Promise((function(t,n){e.currentCart.length>0?e.currentCart.forEach((function(n,r){n.requirements&&n.requirements.texts&&n.requirements.texts>0&&n.variants.forEach((function(r){0==e.failed&&r.selected>0&&r.reqtxt.forEach((function(r,i){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r&&""!=r||0!=this.failed,e.t0){e.next=5;break}return this.failed=1,e.next=5,this.alertController.create({header:"Text "+(i+1)+" in "+n.name,subHeader:"Text data is missing",message:"Enter all the data is the form to continue...",buttons:["OK"]}).then((function(e){return e.present(),t(!1),!1}));case 5:case"end":return e.stop()}}),e,this)})))}))})),n.requirements&&n.requirements.images&&n.requirements.images>0&&n.variants.forEach((function(r){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0==this.failed&&r.selected>0)){e.next=20;break}if(e.t0=0!=r.reqImg.length&&r.reqImg.length==n.requirements.images,e.t0){e.next=6;break}return this.failed=1,e.next=6,this.alertController.create({header:"Image data is missing",subHeader:n.name,message:"Enter all the data is the form to continue...",buttons:["OK"]}).then((function(e){e.present(),t(!1)}));case 6:console.log("failed",this.failed),console.log("vrnt.reqImg",r.reqImg),i=0;case 9:if(!(i<r.reqImg.length)){e.next=20;break}if(o=r.reqImg[i],console.log("Item Passed",n.name,"txt",o),e.t1=o&&""!=o||0!=this.failed,e.t1){e.next=17;break}return this.failed=1,e.next=17,this.alertController.create({header:"Image data is missing",subHeader:"Image "+(i+1)+" in "+n.name,message:"Enter all the data is the form to continue...",buttons:["OK"]}).then((function(e){e.present(),t(!1)}));case 17:i++,e.next=9;break;case 20:case"end":return e.stop()}}),e,this)})))})),console.log(r+1,"==",e.currentCart.length),r+1==e.currentCart.length&&0==e.failed&&t(!0)})):t(!0)}))}},{key:"placeOrder",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.failed=0,console.log("started placing"),e.next=4,this.checkReq();case 4:if(e.t0=!!e.sent,!e.t0){e.next=26;break}if(console.log("PROCEEDING",this.currentCart.length),0!=this.currentCart.length){e.next=13;break}return e.next=10,this.alertController.create({header:"Cart Empty",subHeader:"You have not added items to cart",message:"Add items to cart to continue...",buttons:["OK"]}).then((function(e){e.present()}));case 10:e.t1=!0,e.next=25;break;case 13:if(this.cartHolder.cartObj=this.currentCart,!(this.delivery&&this.delivery.address&&this.delivery.pincode&&this.delivery.name)){e.next=23;break}return e.next=17,this.loadingController.create({message:"Placing Order.."});case 17:return this.loading=e.sent,e.next=20,this.loading.present().then((function(){v.a.firestore().collection("orders").add({userNum:localStorage.getItem("zphone"),delivery:{address:t.delivery.address,pincode:t.delivery.pincode,name:t.delivery.name},items:t.currentCart,date:(new Date).getTime(),status:"Pending"}).then((function(e){return Object(b.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Document written with ID: ",e.id),this.loading.dismiss(),t.next=3,this.modalController.create({component:x,componentProps:{data:this.currentCart,totals:this.totals,delivery:this.delivery,error:!1}});case 3:return n=t.sent,t.next=6,n.present();case 6:return t.next=8,n.onWillDismiss();case 8:r=t.sent,i=r.data,console.log(i),this.currentCart=[],this.totals=0,this.cartHolder.cartCount=0,this.cartHolder.setCurrentCart([]);case 11:case"end":return t.stop()}}),t,this)})))})).catch((function(e){return Object(b.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.error("Error adding document: ",e),this.loading.dismiss(),t.next=3,this.modalController.create({component:x,componentProps:{data:[],totals:0,delivery:[],error:!0}});case 3:return n=t.sent,t.next=6,n.present();case 6:return t.next=8,n.onWillDismiss();case 8:r=t.sent,i=r.data,console.log(i);case 11:case"end":return t.stop()}}),t,this)})))}))}));case 20:e.t2=e.sent,e.next=24;break;case 23:e.t2=this.updateAddress();case 24:e.t1=void e.t2;case 25:e.t0=e.t1;case 26:return e.abrupt("return",e.t0);case 27:case"end":return e.stop()}}),e,this)})))}},{key:"getAddress",value:function(e,t,n){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i,o=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({header:"Address",inputs:[{name:"name",id:"name",type:"text",value:e,placeholder:"ENTER NAME"},{name:"address",id:"address",type:"textarea",value:t,placeholder:"ENTER ADDRESS"},{name:"pincode",id:"pincode",type:"number",value:n,placeholder:"Pin Code"},{name:"phone",id:"Phone",type:"number",value:localStorage.getItem("zphone"),placeholder:"Phone"}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Done",handler:function(e){o.delivery=e,localStorage.setItem("zname",o.delivery.name),localStorage.setItem("zaddress",o.delivery.address),localStorage.setItem("zpincode",o.delivery.pincode)}}]});case 2:return i=r.sent,r.next=5,i.present();case 5:case"end":return r.stop()}}),r,this)})))}},{key:"updateAddress",value:function(){var e=localStorage.getItem("zname"),t=localStorage.getItem("zaddress"),n=localStorage.getItem("zpincode");this.getAddress(e,t,n)}},{key:"loadImageFromDevice",value:function(e,t,n){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.loadingController.create({message:"Uploading Image.."});case 2:return this.loading=r.sent,r.next=5,this.loading.present().then((function(){t&&!t.reqImg&&(t.reqImg=[]);var r=e.target.files[0],o=new FileReader;o.readAsArrayBuffer(r),o.onload=function(){var e=new Blob([new Uint8Array(o.result)]);t&&t.reqImg&&null!=t.reqImg.length?v.a.storage().ref().child("uploads/"+r.name).put(e).then((function(e){return Object(b.a)(i,void 0,void 0,regeneratorRuntime.mark((function i(){var o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if("success"!=e.state){i.next=8;break}return console.log("Uploaded a blob or file!",e),i.next=4,e.ref.getDownloadURL();case 4:t.reqImg[n]=i.sent,this.loading.dismiss(),i.next=9;break;case 8:this.alertController.create({header:"Image upload failed",subHeader:"Try to upload image again..",message:"Failed to upload "+r.name+"...",buttons:["OK"]}).then((function(e){o.loading.dismiss()}));case 9:case"end":return i.stop()}}),i,this)})))})):i.alertController.create({header:"Image upload failed",subHeader:"Try to upload image again..",message:"Failed to upload "+r.name+"...",buttons:["OK"]}).then((function(e){i.loading.dismiss()}))},o.onerror=function(e){i.loading.dismiss()}}));case 5:case"end":return r.stop()}}),r,this)})))}},{key:"vrnttxtchanged",value:function(e,t,n){console.log(e.detail.value,t,n),e&&e.detail&&e.detail.value&&t&&t.reqtxt&&t.reqtxt.length&&null!=t.reqtxt[n]&&(t.reqtxt[n]=e.detail.value)}}]),t}(),L.\u0275fac=function(e){return new(e||L)(d.Hb(K.a),d.Hb(s.Y),d.Hb(J.a),d.Hb(s.b),d.Hb(s.X),d.Hb(l.g),d.Hb(C.b))},L.\u0275cmp=d.Bb({type:L,selectors:[["app-cart"]],decls:19,vars:4,consts:[["slot","start"],[1,"totals"],[1,"totalsTxt"],[1,"totalsBtn"],["color","warning","size","default",3,"click"],["slot","end","name","cart"],["lines","none",4,"ngIf"],["class","noCart",4,"ngIf"],[4,"ngIf"],["lines","none"],[2,"margin","10px 0px","width","97%"],[1,"summary"],["colspan","2",2,"font-weight","600"],[2,"border","0px"],["colspan","2",2,"border","0px"],[2,"width","100%","margin","10px 0px",3,"click"],[1,"noCart"],[3,"routerLink"],["src","./assets/shop.png"],[2,"padding","3px","padding-left","10px"],["class","oneItem","lines","none",4,"ngFor","ngForOf"],["lines","none",1,"oneItem"],[2,"margin-left","4px"],[2,"width","100%"],["size","12"],[1,"thumbImg",3,"src"],[1,"hideOnPc"],[1,"titleTxt"],[2,"text-transform","uppercase"],[1,"hideOnmobile","splitquant"],["class","pricing",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end"],["color","danger",3,"click"],["name","trash"],[1,"hideOnPc","splitquant"],[2,"min-height","25px"],["size","3"],["vertical","center","horizontal","end"],["size","small","color","danger",3,"click"],["name","trash",2,"font-size","1.5rem"],[4,"ngFor","ngForOf"],[1,"pricing"],["class","pieceContainer",4,"ngIf"],[1,"pieceContainer"],["size","6",1,"centerQuantBtn"],["size","6",2,"text-align","center"],[2,"padding-top","4px"],["size","4"],["vertical","center","horizontal","center",3,"click"],["size","small","color","dark"],["name","remove-circle-outline",1,"cirIcon"],["size","4",1,"centerQuantBtn",2,"font-weight","600","font-size","22px"],["type","number","min","1",1,"countcss",3,"ngModel","ngModelChange"],["name","add-circle-outline",1,"cirIcon"],["style","--background: linear-gradient(to right, #ededed 0%, #ffffff 100%);",4,"ngFor","ngForOf"],[2,"--background","linear-gradient(to right, #ededed 0%, #ffffff 100%)"],["position","stacked",1,"reqLabel"],["placeholder","Enter text here...",3,"ionChange"],["position","stacked",1,"reqLabel",2,"display","inline-block"],["style","display: inline-block; margin-left: 5%;",4,"ngIf"],["type","file","id","file-input","accept","image/png, image/jpeg",3,"change"],[2,"display","inline-block","margin-left","5%"],[3,"src"]],template:function(e,t){1&e&&(d.Kb(0,"ion-header"),d.Kb(1,"ion-toolbar"),d.Kb(2,"ion-buttons",0),d.Ib(3,"ion-back-button"),d.Jb(),d.Kb(4,"ion-title"),d.lc(5,"Cart"),d.Jb(),d.Jb(),d.Jb(),d.Kb(6,"ion-header"),d.Kb(7,"ion-toolbar"),d.Kb(8,"div",1),d.Kb(9,"div",2),d.lc(10),d.Jb(),d.Kb(11,"div",3),d.Kb(12,"ion-button",4),d.Sb("click",(function(){return t.placeOrder()})),d.lc(13,"Place Order "),d.Ib(14,"ion-icon",5),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(15,"ion-content"),d.jc(16,y,30,4,"ion-item",6),d.jc(17,O,7,2,"div",7),d.jc(18,D,4,1,"ion-list",8),d.Jb()),2&e&&(d.xb(10),d.nc("Total Cost - Rs.",t.totals,""),d.xb(6),d.ac("ngIf",t.delivery&&t.delivery.address&&""!=t.delivery.address),d.xb(1),d.ac("ngIf",0==t.currentCart.length),d.xb(1),d.ac("ngIf",!(0==t.currentCart.length)))},directives:[s.t,s.U,s.i,s.e,s.f,s.T,s.h,s.u,s.o,a.k,s.y,s.j,l.i,s.ab,s.A,s.B,a.j,s.s,s.H,s.n,s.p,s.q,c.j,c.a,c.e,c.h,s.z,s.S,s.cb,s.d],pipes:[a.n],styles:[".thumbImg[_ngcontent-%COMP%]{border-radius:10px!important;overflow:hidden;-o-object-fit:cover;object-fit:cover}@media (min-width:1000px){.thumbImg[_ngcontent-%COMP%]{width:50%;margin-left:25%}}@media (max-width:1000px){.thumbImg[_ngcontent-%COMP%]{min-height:60%}}@media (min-width:1000px){.hideOnPc[_ngcontent-%COMP%]{display:none}}@media (max-width:1000px){.hideOnmobile[_ngcontent-%COMP%]{display:none}}.cirIcon[_ngcontent-%COMP%]{cursor:pointer;font-size:30px}.descTxt[_ngcontent-%COMP%]{margin-top:0;padding-top:2%;color:#5b5b5b}.titleTxt[_ngcontent-%COMP%]{text-transform:lowercase}.centerQuantBtn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;line-height:1.4}.fabBg[_ngcontent-%COMP%]{background:#3e4b63}.oneItem[_ngcontent-%COMP%]{margin:10px 0}.pieceContainer[_ngcontent-%COMP%]{border-left:6px solid #2b5b98;background-image:linear-gradient(90deg,#ededed 0,#fff);border-radius:10px 0 0 10px;margin-top:2px}.pricing[_ngcontent-%COMP%]{margin-top:0;padding-top:2%;color:#884242}.noCart[_ngcontent-%COMP%]{height:100%;padding-top:15%;font-weight:600;font-size:20px;text-align:center}.noCart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50%;padding-top:10%}@media (min-width:1000px){.noCart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-top:10px;height:100%}}.totals[_ngcontent-%COMP%]{font-weight:600;font-size:20px}.totals[_ngcontent-%COMP%]   .totalsTxt[_ngcontent-%COMP%]{padding-top:3%;padding-left:10px;font-size:large;width:50%;display:inline-block;vertical-align:middle}.totals[_ngcontent-%COMP%]   .totalsBtn[_ngcontent-%COMP%]{width:50%;display:inline-block;text-align:right}.summary[_ngcontent-%COMP%]{width:100%;font-size:1rem;color:#666;line-height:1.6;text-align:center}.summary[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #efefef;padding:3px 10px}.countcss[_ngcontent-%COMP%]{width:100%;text-align:center;border:2px solid}.reqLabel[_ngcontent-%COMP%]{font-weight:800}"]}),L)}],V=((N=function e(){n(this,e)}).\u0275mod=d.Fb({type:N}),N.\u0275inj=d.Eb({factory:function(e){return new(e||N)},imports:[[l.j.forChild(X)],l.j]}),N),Q=((B=function e(){n(this,e)}).\u0275mod=d.Fb({type:B}),B.\u0275inj=d.Eb({factory:function(e){return new(e||B)},imports:[[a.b,c.b,s.V,V]]}),B)}}])}();