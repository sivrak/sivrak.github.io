(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{B92z:function(t,n,i){"use strict";i.r(n),i.d(n,"UserPageModule",(function(){return O}));var e=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),r=i("tyNb"),s=i("fXoL"),b=i("al7H"),a=i("mrSG"),l=i("JZFu");function h(t,n){1&t&&s.Ib(0,"ion-spinner")}function p(t,n){if(1&t&&(s.Kb(0,"span",8),s.lc(1),s.Jb()),2&t){const t=s.Ub().$implicit;s.xb(1),s.oc("",t.type," X ",t.selected,"")}}function u(t,n){if(1&t&&(s.Kb(0,"span",10),s.lc(1),s.Jb()),2&t){const t=s.Ub().index;s.xb(1),s.nc("Text ",t,": ")}}function g(t,n){1&t&&(s.Kb(0,"span"),s.lc(1,","),s.Jb())}function f(t,n){1&t&&(s.Kb(0,"span"),s.Ib(1,"br"),s.Jb())}function d(t,n){if(1&t&&(s.Kb(0,"span"),s.jc(1,u,2,1,"span",9),s.lc(2),s.jc(3,g,2,0,"span",0),s.jc(4,f,2,0,"span",0),s.Jb()),2&t){const t=n.$implicit,i=n.index,e=s.Ub().$implicit;s.xb(1),s.ac("ngIf",t),s.xb(1),s.nc("",t," "),s.xb(1),s.ac("ngIf",t&&i+1!=e.reqtxt.length),s.xb(1),s.ac("ngIf",t&&i+1==e.reqtxt.length)}}function m(t,n){if(1&t&&(s.Kb(0,"span"),s.Ib(1,"img",11),s.Jb()),2&t){const t=n.$implicit;s.xb(1),s.ac("src",t,s.hc)}}function J(t,n){if(1&t&&(s.Kb(0,"span"),s.jc(1,p,2,2,"span",7),s.Kb(2,"div"),s.jc(3,d,5,4,"span",1),s.jc(4,m,2,1,"span",1),s.Jb(),s.Jb()),2&t){const t=n.$implicit;s.xb(1),s.ac("ngIf",t.selected&&t.selected>0),s.xb(2),s.ac("ngForOf",t.reqtxt),s.xb(1),s.ac("ngForOf",t.reqImg)}}function K(t,n){if(1&t&&(s.Kb(0,"span"),s.Ib(1,"hr"),s.Kb(2,"div",3),s.Kb(3,"ion-avatar",4),s.Ib(4,"img",5),s.Jb(),s.Kb(5,"ion-label",6),s.lc(6),s.jc(7,J,5,3,"span",1),s.Jb(),s.Jb(),s.Jb()),2&t){const t=n.$implicit;s.xb(4),s.ac("src",t.src,s.hc),s.xb(2),s.nc("",t.name," "),s.xb(1),s.ac("ngForOf",t.variants)}}function x(t,n){if(1&t&&(s.Kb(0,"div"),s.Kb(1,"ion-card"),s.Kb(2,"div",2),s.lc(3," Order placed "),s.Jb(),s.Kb(4,"ion-card-header"),s.Kb(5,"ion-card-subtitle"),s.lc(6),s.Vb(7,"date"),s.Jb(),s.Jb(),s.Kb(8,"ion-card-content"),s.Kb(9,"div"),s.jc(10,K,8,3,"span",1),s.Jb(),s.Jb(),s.Jb(),s.Ib(11,"hr"),s.Jb()),2&t){const t=n.$implicit;s.xb(6),s.pc("",t.delivery.name," - Pincode ",t.delivery.pincode," - Date (",s.Wb(7,4,t.date),")"),s.xb(4),s.ac("ngForOf",t.items)}}function y(t,n){if(1&t&&(s.Kb(0,"div"),s.jc(1,x,12,6,"div",1),s.Jb()),2&t){const t=s.Ub();s.xb(1),s.ac("ngForOf",t.historyList)}}function w(t,n){1&t&&(s.Kb(0,"p"),s.lc(1," No previous orders found..\n"),s.Jb())}let v=(()=>{class t{constructor(t){this.alertController=t,this.historyList=[],this.status=!1,this.showSpin=!0}ngOnInit(){let t=localStorage.getItem("zphone");console.log(t),t?this.initDatas(t):this.alertController.create({header:"Login To Continue",message:"User must be logged in",buttons:["OK"]}).then(t=>{t.present()})}initDatas(t){return Object(a.a)(this,void 0,void 0,(function*(){this.historyList=[];let n=l.a.firestore().collection("orders");yield n.where("userNum","==",t).get().then(t=>{this.showSpin=!1,t.empty?(this.status=!0,this.historyList=[]):(t.forEach(t=>{this.historyList.push(t.data())}),this.historyList.sort((t,n)=>{let i=new Date(t.date),e=new Date(n.date);return i<e?1:i>e?-1:0}))}).catch((function(t){console.log("Error getting documents: ",t)}))}))}}return t.\u0275fac=function(n){return new(n||t)(s.Hb(c.b))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-history"]],decls:3,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"statuz"],[1,"chipz"],[1,"avatarz"],[3,"src"],["text-wrap","",1,"labelz",2,"font-weight","600"],["style","font-weight: 300;",4,"ngIf"],[2,"font-weight","300"],["style","font-weight: 600;",4,"ngIf"],[2,"font-weight","600"],[2,"height","25px","width","auto","border-radius","8px",3,"src"]],template:function(t,n){1&t&&(s.jc(0,h,1,0,"ion-spinner",0),s.jc(1,y,2,1,"div",0),s.jc(2,w,2,0,"p",0)),2&t&&(s.ac("ngIf",n.showSpin),s.xb(1),s.ac("ngIf",n.historyList&&n.historyList.length>0),s.xb(1),s.ac("ngIf",n.status&&n.historyList&&0==n.historyList.length))},directives:[e.k,c.N,e.j,c.j,c.l,c.m,c.k,c.d,c.z],pipes:[e.d],styles:[".avatarz[_ngcontent-%COMP%]{width:19%;height:auto}.avatarz[_ngcontent-%COMP%], .labelz[_ngcontent-%COMP%]{display:inline-block}.labelz[_ngcontent-%COMP%]{width:75%;margin-left:5%}.chipz[_ngcontent-%COMP%]{margin-bottom:10px}.statuz[_ngcontent-%COMP%]{text-align:right;margin-right:20px;color:#bd7304;font-weight:600}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;stroke:#444;fill:#222;margin-left:47%;margin-top:3%;margin-bottom:3%}"]}),t})();const I=[{path:"",component:(()=>{class t{constructor(t){this.authCheckService=t,this.currentUser=""}ngOnInit(){this.currentUser=localStorage.getItem("zphone")}logout(){this.authCheckService.logout()}ionViewWillEnter(){this.currentUser=localStorage.getItem("zphone"),""==this.currentUser&&this.authCheckService.logout()}}return t.\u0275fac=function(n){return new(n||t)(s.Hb(b.a))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-user"]],decls:25,vars:1,consts:[["slot","start"],["color","danger",2,"width","100%","height","100%",3,"click"],[2,"width","100%","margin-top","10px"]],template:function(t,n){1&t&&(s.Kb(0,"ion-header"),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-buttons",0),s.Ib(3,"ion-back-button"),s.Jb(),s.Kb(4,"ion-title"),s.lc(5,"User Profile"),s.Jb(),s.Jb(),s.Jb(),s.Kb(6,"ion-content"),s.Kb(7,"ion-list"),s.Kb(8,"ion-list-header"),s.Kb(9,"h3"),s.lc(10,"Current User"),s.Jb(),s.Jb(),s.Kb(11,"ion-item"),s.Kb(12,"div"),s.Kb(13,"h4"),s.lc(14),s.Jb(),s.Jb(),s.Jb(),s.Ib(15,"ion-item"),s.Kb(16,"ion-item"),s.Kb(17,"ion-button",1),s.Sb("click",(function(){return n.logout()})),s.lc(18,"Logout"),s.Jb(),s.Jb(),s.Ib(19,"ion-item"),s.Kb(20,"ion-list-header"),s.Kb(21,"h3"),s.lc(22,"Order History"),s.Jb(),s.Jb(),s.Kb(23,"ion-item"),s.Ib(24,"app-history",2),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.xb(14),s.nc(" ",n.currentUser," "))},directives:[c.t,c.U,c.i,c.e,c.f,c.T,c.o,c.A,c.B,c.y,c.h,v],styles:[""]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[r.j.forChild(I)],r.j]}),t})(),O=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[e.b,o.b,c.V,j]]}),t})()}}]);