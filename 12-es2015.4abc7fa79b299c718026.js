(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{v35Q:function(t,e,n){"use strict";n.r(e),n.d(e,"CartPageModule",(function(){return D}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),c=n("tyNb"),a=n("mrSG"),s=n("fXoL");function l(t,e){1&t&&(s.Kb(0,"ion-button",13),s.Kb(1,"div"),s.kc(2," Ordered Successfully, "),s.Jb(),s.Jb())}function b(t,e){if(1&t){const t=s.Lb();s.Kb(0,"ion-button",14),s.Sb("click",(function(){return s.fc(t),s.Ub().dismiss()})),s.kc(1,"Try Again"),s.Jb()}}function d(t,e){if(1&t&&(s.Kb(0,"table",16),s.Kb(1,"tr"),s.Kb(2,"td",17),s.kc(3),s.Jb(),s.Kb(4,"td",17),s.kc(5),s.Ib(6,"br"),s.kc(7,"X "),s.Ib(8,"br"),s.kc(9),s.Jb(),s.Kb(10,"td",18),s.kc(11),s.Ib(12,"br"),s.kc(13,"/"),s.Ib(14,"br"),s.kc(15),s.Jb(),s.Kb(16,"td",18),s.kc(17),s.Jb(),s.Jb(),s.Jb()),2&t){const t=s.Ub().$implicit,e=s.Ub().$implicit;s.xb(3),s.lc(e.name),s.xb(2),s.mc("",t.selected," "),s.xb(4),s.lc(t.unit),s.xb(2),s.mc("",t.price," "),s.xb(4),s.mc(" ",t.unit,""),s.xb(2),s.mc("Rs ",t.price*t.selected,"")}}function g(t,e){if(1&t&&(s.Kb(0,"span"),s.ic(1,d,18,6,"table",15),s.Jb()),2&t){const t=e.$implicit;s.xb(1),s.ac("ngIf",t&&t.selected&&t.selected>0)}}function m(t,e){if(1&t&&(s.Kb(0,"span"),s.ic(1,g,2,1,"span",10),s.Jb()),2&t){const t=e.$implicit;s.xb(1),s.ac("ngForOf",t.variants)}}let h=(()=>{class t{constructor(t){this.modalCtrl=t,this.data={},this.totals=0,this.delivery={},this.error=!1,this.status="ok"}ngOnInit(){console.log(this.data)}dismiss(){this.modalCtrl.dismiss({dismissed:!0})}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(r.Y))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-place-order"]],inputs:{data:"data",totals:"totals",delivery:"delivery",error:"error"},decls:52,vars:8,consts:[["vertical","top","horizontal","end","slot","fixed",3,"click"],["name","close-outline"],["slot","start"],[1,"totals"],[1,"totalsTxt"],["size","12"],["color","success","routerLink","/home","style","width: 100%;","class","btnStyle",4,"ngIf"],["color","warning","style","width: 100%;","class","btnStyle",3,"click",4,"ngIf"],[1,"detTxt"],[1,"detTxt",2,"color","darkgoldenrod"],[4,"ngFor","ngForOf"],[1,"summary"],["colspan","2",2,"font-weight","600"],["color","success","routerLink","/home",1,"btnStyle",2,"width","100%"],["color","warning",1,"btnStyle",2,"width","100%",3,"click"],["class","orderDet",4,"ngIf"],[1,"orderDet"],["width","30%"],["width","20%"]],template:function(t,e){1&t&&(s.Kb(0,"ion-fab",0),s.Sb("click",(function(){return e.dismiss()})),s.Kb(1,"ion-fab-button"),s.Ib(2,"ion-icon",1),s.Jb(),s.Jb(),s.Kb(3,"ion-header"),s.Kb(4,"ion-toolbar"),s.Kb(5,"ion-buttons",2),s.Ib(6,"ion-back-button"),s.Jb(),s.Kb(7,"ion-title"),s.kc(8,"Order"),s.Jb(),s.Jb(),s.Jb(),s.Kb(9,"ion-header"),s.Kb(10,"ion-toolbar"),s.Kb(11,"div",3),s.Kb(12,"div",4),s.kc(13),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Kb(14,"ion-content"),s.Kb(15,"ion-row"),s.Kb(16,"ion-col",5),s.ic(17,l,3,0,"ion-button",6),s.Jb(),s.Kb(18,"ion-col",5),s.ic(19,b,2,0,"ion-button",7),s.Jb(),s.Kb(20,"ion-col",5),s.Kb(21,"h4",8),s.kc(22,"We will get back to you for requirements, Thank you for placing the order."),s.Jb(),s.Kb(23,"h6",9),s.kc(24,"For details contact us at Whatsapp 7871485184."),s.Jb(),s.Jb(),s.Jb(),s.Kb(25,"ion-row"),s.Kb(26,"ion-col",5),s.ic(27,m,2,1,"span",10),s.Kb(28,"table",11),s.Kb(29,"tr"),s.Kb(30,"td",12),s.kc(31,"Delivery details"),s.Jb(),s.Jb(),s.Kb(32,"tr"),s.Kb(33,"td"),s.kc(34,"Name"),s.Jb(),s.Kb(35,"td"),s.kc(36),s.Jb(),s.Jb(),s.Kb(37,"tr"),s.Kb(38,"td"),s.kc(39,"Address"),s.Jb(),s.Kb(40,"td"),s.kc(41),s.Jb(),s.Jb(),s.Kb(42,"tr"),s.Kb(43,"td"),s.kc(44,"Pin Code"),s.Jb(),s.Kb(45,"td"),s.kc(46),s.Jb(),s.Jb(),s.Kb(47,"tr"),s.Kb(48,"td"),s.kc(49,"Phone"),s.Jb(),s.Kb(50,"td"),s.kc(51),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.xb(13),s.mc("Total Cost - Rs.",e.totals,""),s.xb(4),s.ac("ngIf",!e.error),s.xb(2),s.ac("ngIf",e.error),s.xb(8),s.ac("ngForOf",e.data),s.xb(9),s.lc(e.delivery.name),s.xb(5),s.lc(e.delivery.address),s.xb(5),s.lc(e.delivery.pincode),s.xb(5),s.lc(e.delivery.phone))},directives:[r.p,r.q,r.u,r.t,r.U,r.i,r.e,r.f,r.T,r.o,r.I,r.n,i.j,i.i,r.h,r.bb,c.h],styles:[".totals[_ngcontent-%COMP%]{font-weight:600;font-size:20px}.totals[_ngcontent-%COMP%]   .totalsTxt[_ngcontent-%COMP%]{padding-top:3%;font-size:large;width:50%;display:inline-block;vertical-align:middle}.orderDet[_ngcontent-%COMP%]{width:90%;margin-left:5%;margin-right:5%;color:#666;line-height:1.6;margin-top:3%;text-align:center}.orderDet[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .orderDet[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{padding:8px;border:1px solid #000}.btnStyle[_ngcontent-%COMP%]{width:100%;font-weight:600;font-size:30px}.summary[_ngcontent-%COMP%]{width:100%;font-size:1rem;color:#666;line-height:1.6;margin-top:3%;text-align:center}.summary[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #000}.detTxt[_ngcontent-%COMP%]{padding:1px 10px;text-align:center}"]}),t})();var u=n("JZFu"),p=n("/xxd"),f=n("al7H"),x=n("jhN1");function K(t,e){if(1&t){const t=s.Lb();s.Kb(0,"ion-item"),s.Kb(1,"table",8),s.Kb(2,"tr"),s.Kb(3,"td",9),s.kc(4,"Delivery details"),s.Jb(),s.Jb(),s.Kb(5,"tr"),s.Kb(6,"td"),s.kc(7,"Name"),s.Jb(),s.Kb(8,"td"),s.kc(9),s.Jb(),s.Jb(),s.Kb(10,"tr"),s.Kb(11,"td"),s.kc(12,"Address"),s.Jb(),s.Kb(13,"td"),s.kc(14),s.Jb(),s.Jb(),s.Kb(15,"tr"),s.Kb(16,"td"),s.kc(17,"Pin Code"),s.Jb(),s.Kb(18,"td"),s.kc(19),s.Jb(),s.Jb(),s.Kb(20,"tr"),s.Kb(21,"td"),s.kc(22,"Phone"),s.Jb(),s.Kb(23,"td"),s.kc(24),s.Jb(),s.Jb(),s.Kb(25,"tr",10),s.Kb(26,"td",11),s.Kb(27,"ion-button",12),s.Sb("click",(function(){return s.fc(t),s.Ub().updateAddress()})),s.kc(28,"Edit Delivery Details"),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb()}if(2&t){const t=s.Ub();s.xb(9),s.lc(t.delivery.name),s.xb(5),s.lc(t.delivery.address),s.xb(5),s.lc(t.delivery.pincode),s.xb(5),s.lc(t.delivery.phone)}}const J=function(){return["/","home"]};function C(t,e){1&t&&(s.Kb(0,"div",13),s.kc(1," Cart Empty,"),s.Ib(2,"br"),s.kc(3,"Click to continue shopping..."),s.Ib(4,"br"),s.Kb(5,"a",14),s.Ib(6,"img",15),s.Jb(),s.Jb()),2&t&&(s.xb(5),s.ac("routerLink",s.bc(1,J)))}function v(t,e){1&t&&(s.Kb(0,"span"),s.kc(1,"..."),s.Jb())}function y(t,e){1&t&&(s.Kb(0,"span"),s.kc(1,"..."),s.Jb())}function k(t,e){if(1&t&&(s.Kb(0,"span"),s.kc(1),s.Ib(2,"br"),s.Jb()),2&t){const t=s.Ub().$implicit;s.xb(1),s.oc("",t.selected,"xRs.",t.price,"=Rs.",t.selected*t.price,"")}}function I(t,e){if(1&t&&(s.Kb(0,"span",37),s.ic(1,k,3,3,"span",6),s.Jb()),2&t){const t=e.$implicit;s.xb(1),s.ac("ngIf",t.selected>0)}}function O(t,e){if(1&t&&(s.Kb(0,"span"),s.kc(1),s.Ib(2,"br"),s.Jb()),2&t){const t=s.Ub().$implicit;s.xb(1),s.oc("",t.selected,"xRs.",t.price,"=Rs.",t.selected*t.price,"")}}function P(t,e){if(1&t&&(s.Kb(0,"span",37),s.ic(1,O,3,3,"span",6),s.Jb()),2&t){const t=e.$implicit;s.xb(1),s.ac("ngIf",t.selected>0)}}function w(t,e){if(1&t){const t=s.Lb();s.Kb(0,"ion-item",51),s.Kb(1,"ion-label",52),s.kc(2),s.Jb(),s.Kb(3,"ion-textarea",53),s.Sb("ionChange",(function(n){s.fc(t);const i=e.index,o=s.Ub(3).$implicit;return s.Ub(3).vrnttxtchanged(n,o,i)})),s.Jb(),s.Jb()}if(2&t){const t=e.index;s.xb(2),s.mc("Text ",t+1,"")}}const z=function(){return[]};function M(t,e){if(1&t&&(s.Kb(0,"ion-list"),s.ic(1,w,4,1,"ion-item",50),s.Jb()),2&t){const t=s.Ub(3).$implicit;s.xb(1),s.ac("ngForOf",s.bc(1,z).constructor(t.requirements.texts))}}function _(t,e){if(1&t&&(s.Kb(0,"ion-avatar",57),s.Ib(1,"img",58),s.Jb()),2&t){const t=s.Ub().index,e=s.Ub(3).$implicit,n=s.Ub(3);s.xb(1),s.ac("src",n.sanitizer.bypassSecurityTrustUrl(e.reqImg[t]),s.gc)}}function q(t,e){if(1&t){const t=s.Lb();s.Kb(0,"ion-item",51),s.Kb(1,"div"),s.Kb(2,"ion-label",54),s.kc(3),s.Jb(),s.ic(4,_,2,1,"ion-avatar",55),s.Jb(),s.Kb(5,"div"),s.Kb(6,"ion-button"),s.Kb(7,"input",56),s.Sb("change",(function(n){s.fc(t);const i=e.index,o=s.Ub(3).$implicit;return s.Ub(3).loadImageFromDevice(n,o,i)})),s.Jb(),s.Jb(),s.Jb(),s.Jb()}if(2&t){const t=e.index,n=s.Ub(3).$implicit;s.xb(3),s.mc("Image ",t+1,""),s.xb(1),s.ac("ngIf",n.reqImg&&n.reqImg[t])}}function S(t,e){if(1&t&&(s.Kb(0,"ion-list"),s.ic(1,q,8,2,"ion-item",50),s.Jb()),2&t){const t=s.Ub(3).$implicit;s.xb(1),s.ac("ngForOf",s.bc(1,z).constructor(t.requirements.images))}}function U(t,e){if(1&t){const t=s.Lb();s.Kb(0,"ion-row",39),s.Kb(1,"ion-col",40),s.kc(2),s.Ib(3,"br"),s.kc(4),s.Jb(),s.Kb(5,"ion-col",41),s.Kb(6,"div",42),s.kc(7),s.Jb(),s.Kb(8,"ion-grid"),s.Kb(9,"ion-row"),s.Kb(10,"ion-col",43),s.Kb(11,"ion-fab",44),s.Sb("click",(function(){s.fc(t);const e=s.Ub().$implicit,n=s.Ub().$implicit;return s.Ub(2).pieceFunc(e,"sub",n)})),s.Kb(12,"ion-fab-button",45),s.Ib(13,"ion-icon",46),s.Jb(),s.Jb(),s.Jb(),s.Kb(14,"ion-col",47),s.kc(15),s.Jb(),s.Kb(16,"ion-col",43),s.Kb(17,"ion-fab",44),s.Sb("click",(function(){s.fc(t);const e=s.Ub().$implicit,n=s.Ub().$implicit;return s.Ub(2).pieceFunc(e,"add",n)})),s.Kb(18,"ion-fab-button",45),s.Ib(19,"ion-icon",48),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Kb(20,"ion-col",49),s.Ib(21,"hr"),s.ic(22,M,2,2,"ion-list",6),s.ic(23,S,2,2,"ion-list",6),s.Jb(),s.Jb()}if(2&t){const t=s.Ub().$implicit,e=s.Ub().$implicit;s.xb(2),s.lc(t.type),s.xb(2),s.nc("Rs.",t.price,"/",t.unit,""),s.xb(3),s.mc("Quantity (",t.unit,")"),s.xb(8),s.lc(t.selected),s.xb(7),s.ac("ngIf",e.requirements&&e.requirements.texts),s.xb(1),s.ac("ngIf",e.requirements&&e.requirements.images)}}function E(t,e){if(1&t&&(s.Kb(0,"span"),s.ic(1,U,24,7,"ion-row",38),s.Jb()),2&t){const t=e.$implicit;s.xb(1),s.ac("ngIf",t.selected&&t.selected>0)}}function F(t,e){if(1&t){const t=s.Lb();s.Kb(0,"ion-item",18),s.Kb(1,"ion-grid",19),s.Kb(2,"ion-row"),s.Kb(3,"ion-col",20),s.Ib(4,"img",21),s.Jb(),s.Kb(5,"ion-col",22),s.Kb(6,"div",23),s.Kb(7,"h4",24),s.Kb(8,"span",25),s.kc(9),s.Vb(10,"slice"),s.Jb(),s.kc(11),s.Vb(12,"slice"),s.ic(13,v,2,0,"span",6),s.Jb(),s.Jb(),s.Kb(14,"div",26),s.Kb(15,"h4",24),s.Kb(16,"span",25),s.kc(17),s.Vb(18,"slice"),s.Jb(),s.kc(19),s.Vb(20,"slice"),s.ic(21,y,2,0,"span",6),s.Jb(),s.ic(22,I,2,1,"span",27),s.Kb(23,"ion-fab",28),s.Kb(24,"ion-fab-button",29),s.Sb("click",(function(){s.fc(t);const n=e.$implicit;return s.Ub(2).removePiece(n,1)})),s.Ib(25,"ion-icon",30),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Kb(26,"ion-row",31),s.Kb(27,"ion-col"),s.Kb(28,"div"),s.ic(29,P,2,1,"span",27),s.Jb(),s.Jb(),s.Kb(30,"ion-col",32),s.Kb(31,"ion-fab",33),s.Kb(32,"ion-fab-button",34),s.Sb("click",(function(){s.fc(t);const n=e.$implicit;return s.Ub(2).removePiece(n,1)})),s.Ib(33,"ion-icon",35),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.ic(34,E,2,1,"span",36),s.Jb(),s.Jb()}if(2&t){const t=e.$implicit;s.xb(4),s.ac("src",t.src,s.gc),s.xb(5),s.lc(s.Xb(10,10,t.name,0,1)),s.xb(2),s.lc(s.Xb(12,14,t.name,1,30)),s.xb(2),s.ac("ngIf",t.name.length>=30),s.xb(4),s.lc(s.Xb(18,18,t.name,0,1)),s.xb(2),s.lc(s.Xb(20,22,t.name,1,60)),s.xb(2),s.ac("ngIf",t.name.length>=60),s.xb(1),s.ac("ngForOf",t.variants),s.xb(7),s.ac("ngForOf",t.variants),s.xb(5),s.ac("ngForOf",t.variants)}}function T(t,e){if(1&t&&(s.Kb(0,"ion-list"),s.Kb(1,"ion-list-header",16),s.kc(2," Order Details "),s.Jb(),s.ic(3,F,35,26,"ion-item",17),s.Jb()),2&t){const t=s.Ub();s.xb(3),s.ac("ngForOf",t.currentCart)}}const H=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,r,c){this.cartHolder=t,this.modalController=e,this.authCheckService=n,this.alertController=i,this.loadingController=o,this.router=r,this.sanitizer=c,this.listItemz=[],this.currentCart=[],this.totals=0,this.delivery={},this.loading={},this.failed=0,this.blobURL=""}ngOnInit(){}ionViewWillEnter(){localStorage.getItem("zname")&&localStorage.getItem("zaddress")&&localStorage.getItem("zpincode")&&localStorage.getItem("zphone")?this.delivery={name:localStorage.getItem("zname"),address:localStorage.getItem("zaddress"),pincode:localStorage.getItem("zpincode"),phone:localStorage.getItem("zphone")}:this.updateAddress(),""==localStorage.getItem("zphone")&&this.authCheckService.logout(),this.currentCart=[],this.listItemz=this.cartHolder.getCurrentCart(),this.listItemz.forEach(t=>{let e=0;t&&t.variants&&t.variants.forEach(t=>{if(t&&t.selected&&t.selected>0)return e=1,!0}),1==e&&this.currentCart.push(t)}),this.computeTotals(),this.currentCart.forEach(t=>{t&&t.variants&&t.variants.length>0&&t.variants.forEach(e=>{if(e&&!e.reqImg&&(e.reqImg=[]),e&&!e.reqtxt&&t.requirements&&t.requirements.texts>0){e.reqtxt=[];for(let n=0;n<t.requirements.texts;n++)e.reqtxt.push("")}})}),console.log("this.cartHolder.cartCount",this.cartHolder.cartCount),console.log("currentCart",this.currentCart)}removePiece(t,e=0){this.currentCart=this.currentCart.filter(n=>{if(n.name!=t.name)return!0;this.listItemz.forEach(i=>{i.name==t.name&&i.variants.forEach(t=>{let i=t.selected;t.selected=0,0!=i&&1==e&&(console.log(n.name,"this.cartHolder.cartCount",this.cartHolder.cartCount),this.cartHolder.cartCount=this.cartHolder.cartCount-1)})})}),this.computeTotals()}pieceFunc(t,e,n){if("sub"==e){if(t.selected=t.selected-1,0==t.selected){this.cartHolder.cartCount=this.cartHolder.cartCount-1;let t=1;n.variants.forEach(e=>{if(e&&e.selected&&e.selected>0)return t=0,!0}),1==t&&this.removePiece(n)}}else"add"==e&&(t.selected=t.selected+1);this.cartHolder.setCurrentCart([...this.listItemz]),this.computeTotals()}computeTotals(){this.totals=0,this.currentCart.forEach(t=>{t&&t.variants&&t.variants.length&&t.variants.forEach(t=>{t&&t.selected&&t.selected>0&&(this.totals=this.totals+t.selected*t.price)})})}checkReq(){return new Promise((t,e)=>{this.currentCart.length>0?this.currentCart.forEach((e,n)=>{e.requirements&&e.requirements.texts&&e.requirements.texts>0&&e.variants.forEach(n=>{0==this.failed&&n.selected>0&&n.reqtxt.forEach((n,i)=>Object(a.a)(this,void 0,void 0,(function*(){n&&""!=n||0!=this.failed||(this.failed=1,yield this.alertController.create({header:"Text "+(i+1)+" in "+e.name,subHeader:"Text data is missing",message:"Enter all the data is the form to continue...",buttons:["OK"]}).then(e=>(e.present(),t(!1),!1)))})))}),e.requirements&&e.requirements.images&&e.requirements.images>0&&e.variants.forEach(n=>Object(a.a)(this,void 0,void 0,(function*(){0==this.failed&&n.selected>0&&(0!=n.reqImg.length&&n.reqImg.length==n.selected||(this.failed=1,yield this.alertController.create({header:"Image data is missing",subHeader:e.name,message:"Enter all the data is the form to continue...",buttons:["OK"]}).then(e=>{e.present(),t(!1)})))}))),n+1==this.currentCart.length&&0==this.failed&&t(!0)}):t(!0)})}placeOrder(){return Object(a.a)(this,void 0,void 0,(function*(){return this.failed=0,console.log("started placing"),!!(yield this.checkReq())&&(console.log("PROCEEDING",this.currentCart.length),0==this.currentCart.length?(yield this.alertController.create({header:"Cart Empty",subHeader:"You have not added items to cart",message:"Add items to cart to continue...",buttons:["OK"]}).then(t=>{t.present()}),!0):(this.cartHolder.cartObj=this.currentCart,void(this.delivery&&this.delivery.address&&this.delivery.pincode&&this.delivery.name?(this.loading=yield this.loadingController.create({message:"Placing Order.."}),yield this.loading.present().then(()=>{u.a.firestore().collection("orders").add({userNum:localStorage.getItem("zphone"),delivery:{address:this.delivery.address,pincode:this.delivery.pincode,name:this.delivery.name},items:this.currentCart,date:(new Date).getTime(),status:"Pending"}).then(t=>Object(a.a)(this,void 0,void 0,(function*(){console.log("Document written with ID: ",t.id),this.loading.dismiss();const e=yield this.modalController.create({component:h,componentProps:{data:this.currentCart,totals:this.totals,delivery:this.delivery,error:!1}});yield e.present();const{data:n}=yield e.onWillDismiss();console.log(n),this.currentCart=[],this.totals=0,this.cartHolder.cartCount=0,this.cartHolder.setCurrentCart([])}))).catch(t=>Object(a.a)(this,void 0,void 0,(function*(){console.error("Error adding document: ",t),this.loading.dismiss();const e=yield this.modalController.create({component:h,componentProps:{data:[],totals:0,delivery:[],error:!0}});yield e.present();const{data:n}=yield e.onWillDismiss();console.log(n)})))})):this.updateAddress())))}))}getAddress(t,e,n){return Object(a.a)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({header:"Address",inputs:[{name:"name",id:"name",type:"text",value:t,placeholder:"ENTER NAME"},{name:"address",id:"address",type:"textarea",value:e,placeholder:"ENTER ADDRESS"},{name:"pincode",id:"pincode",type:"number",value:n,placeholder:"Pin Code"},{name:"phone",id:"Phone",type:"number",value:localStorage.getItem("zphone"),placeholder:"Phone"}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Done",handler:t=>{this.delivery=t,localStorage.setItem("zname",this.delivery.name),localStorage.setItem("zaddress",this.delivery.address),localStorage.setItem("zpincode",this.delivery.pincode)}}]});yield i.present()}))}updateAddress(){let t=localStorage.getItem("zname"),e=localStorage.getItem("zaddress"),n=localStorage.getItem("zpincode");this.getAddress(t,e,n)}loadImageFromDevice(t,e,n){e&&!e.reqImg&&(e.reqImg=[]);const i=t.target.files[0],o=new FileReader;o.readAsArrayBuffer(i),o.onload=()=>{let t=new Blob([new Uint8Array(o.result)]),i=URL.createObjectURL(t);e&&e.reqImg&&null!=e.reqImg.length&&(e.reqImg[n]=i)},o.onerror=t=>{}}vrnttxtchanged(t,e,n){console.log(t.detail.value,e,n),t&&t.detail&&t.detail.value&&e&&e.reqtxt&&e.reqtxt.length&&null!=e.reqtxt[n]&&(e.reqtxt[n]=t.detail.value)}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(p.a),s.Hb(r.Y),s.Hb(f.a),s.Hb(r.b),s.Hb(r.X),s.Hb(c.g),s.Hb(x.b))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-cart"]],decls:19,vars:4,consts:[["slot","start"],[1,"totals"],[1,"totalsTxt"],[1,"totalsBtn"],["color","warning","size","default",3,"click"],["slot","end","name","cart"],[4,"ngIf"],["class","noCart",4,"ngIf"],[1,"summary"],["colspan","2",2,"font-weight","600"],[2,"border","0px"],["colspan","2",2,"border","0px"],[2,"width","100%",3,"click"],[1,"noCart"],[3,"routerLink"],["src","./assets/shop.png"],[2,"padding","3px"],["class","oneItem",4,"ngFor","ngForOf"],[1,"oneItem"],[2,"width","100%"],["size","2"],[1,"thumbImg",3,"src"],["size","10"],[1,"hideOnPc"],[1,"titleTxt"],[2,"text-transform","uppercase"],[1,"hideOnmobile","splitquant"],["class","pricing",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end"],["color","danger",3,"click"],["name","trash"],[1,"hideOnPc","splitquant"],["size","3"],["vertical","center","horizontal","end"],["size","small","color","danger",3,"click"],["name","trash",2,"font-size","1.5rem"],[4,"ngFor","ngForOf"],[1,"pricing"],["class","pieceContainer",4,"ngIf"],[1,"pieceContainer"],["size","6",1,"centerQuantBtn"],["size","6",2,"text-align","center"],[2,"padding-top","4px"],["size","4"],["vertical","center","horizontal","center",3,"click"],["size","small","color","dark"],["name","remove-circle-outline",1,"cirIcon"],["size","4",1,"centerQuantBtn",2,"font-weight","600","font-size","22px"],["name","add-circle-outline",1,"cirIcon"],["size","12"],["style","--background: linear-gradient(to right, #ededed 0%, #ffffff 100%);",4,"ngFor","ngForOf"],[2,"--background","linear-gradient(to right, #ededed 0%, #ffffff 100%)"],["position","stacked"],["placeholder","Enter text",3,"ionChange"],["position","stacked",2,"display","inline-block"],["style","display: inline-block; margin-left: 5%;",4,"ngIf"],["type","file","id","file-input","accept","image/png, image/jpeg",3,"change"],[2,"display","inline-block","margin-left","5%"],[3,"src"]],template:function(t,e){1&t&&(s.Kb(0,"ion-header"),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-buttons",0),s.Ib(3,"ion-back-button"),s.Jb(),s.Kb(4,"ion-title"),s.kc(5,"Cart"),s.Jb(),s.Jb(),s.Jb(),s.Kb(6,"ion-header"),s.Kb(7,"ion-toolbar"),s.Kb(8,"div",1),s.Kb(9,"div",2),s.kc(10),s.Jb(),s.Kb(11,"div",3),s.Kb(12,"ion-button",4),s.Sb("click",(function(){return e.placeOrder()})),s.kc(13,"Place Order "),s.Ib(14,"ion-icon",5),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Kb(15,"ion-content"),s.ic(16,K,29,4,"ion-item",6),s.ic(17,C,7,2,"div",7),s.ic(18,T,4,1,"ion-list",6),s.Jb()),2&t&&(s.xb(10),s.mc("Total Cost - Rs.",e.totals,""),s.xb(6),s.ac("ngIf",e.delivery&&e.delivery.address&&""!=e.delivery.address),s.xb(1),s.ac("ngIf",0==e.currentCart.length),s.xb(1),s.ac("ngIf",!(0==e.currentCart.length)))},directives:[r.t,r.U,r.i,r.e,r.f,r.T,r.h,r.u,r.o,i.j,r.z,c.i,r.bb,r.B,r.C,i.i,r.s,r.I,r.n,r.p,r.q,r.A,r.S,r.db,r.d],pipes:[i.m],styles:[".thumbImg[_ngcontent-%COMP%]{border-radius:10px!important;overflow:hidden;-o-object-fit:cover;object-fit:cover}@media (min-width:1000px){.thumbImg[_ngcontent-%COMP%]{width:50%;margin-left:25%}}@media (max-width:1000px){.thumbImg[_ngcontent-%COMP%]{min-height:60%;margin-top:30%}}@media (min-width:1000px){.hideOnPc[_ngcontent-%COMP%]{display:none}}@media (max-width:1000px){.hideOnmobile[_ngcontent-%COMP%]{display:none}}.cirIcon[_ngcontent-%COMP%]{cursor:pointer;font-size:30px}.descTxt[_ngcontent-%COMP%]{margin-top:0;padding-top:2%;color:#5b5b5b}.titleTxt[_ngcontent-%COMP%]{text-transform:lowercase}.centerQuantBtn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;line-height:1.4}.fabBg[_ngcontent-%COMP%]{background:#3e4b63}.oneItem[_ngcontent-%COMP%]{margin:10px 0;border-bottom:2px dashed #c1c1c1}.pieceContainer[_ngcontent-%COMP%]{border-left:6px solid red;background-image:linear-gradient(90deg,#ededed 0,#fff);border-radius:10px 0 0 10px;margin-top:2px}.pricing[_ngcontent-%COMP%]{margin-top:0;padding-top:2%;color:#884242}.noCart[_ngcontent-%COMP%]{height:100%;padding-top:15%;font-weight:600;font-size:20px;text-align:center}.noCart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50%;padding-top:10%}@media (min-width:1000px){.noCart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-top:10px;height:100%}}.totals[_ngcontent-%COMP%]{font-weight:600;font-size:20px}.totals[_ngcontent-%COMP%]   .totalsTxt[_ngcontent-%COMP%]{padding-top:3%;font-size:large;width:50%;display:inline-block;vertical-align:middle}.totals[_ngcontent-%COMP%]   .totalsBtn[_ngcontent-%COMP%]{width:50%;display:inline-block;text-align:right}.summary[_ngcontent-%COMP%]{width:100%;font-size:1rem;color:#666;line-height:1.6;margin-top:3%;text-align:center}.summary[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #000}"]}),t})()}];let $=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[c.j.forChild(H)],c.j]}),t})(),D=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,r.V,$]]}),t})()}}]);