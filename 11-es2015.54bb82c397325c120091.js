(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{B92z:function(t,e,n){"use strict";n.r(e),n.d(e,"UserPageModule",(function(){return y}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),c=n("fXoL"),b=n("al7H"),a=n("mrSG"),l=n("JZFu");function h(t,e){if(1&t&&(c.Kb(0,"span",8),c.jc(1),c.Jb()),2&t){const t=c.Ub().$implicit;c.xb(1),c.mc("",t.type," X ",t.selected,"")}}function u(t,e){if(1&t&&(c.Kb(0,"span"),c.hc(1,h,2,2,"span",7),c.Jb()),2&t){const t=e.$implicit;c.xb(1),c.Zb("ngIf",t.selected&&t.selected>0)}}function d(t,e){if(1&t&&(c.Kb(0,"span"),c.Kb(1,"div",3),c.Kb(2,"ion-avatar",4),c.Ib(3,"img",5),c.Jb(),c.Kb(4,"ion-label",6),c.jc(5),c.hc(6,u,2,1,"span",1),c.Jb(),c.Jb(),c.Jb()),2&t){const t=e.$implicit;c.xb(3),c.Zb("src",t.src,c.fc),c.xb(2),c.lc("",t.name," "),c.xb(1),c.Zb("ngForOf",t.variants)}}function g(t,e){if(1&t&&(c.Kb(0,"div"),c.Kb(1,"ion-card"),c.Kb(2,"div",2),c.jc(3," Status Pending "),c.Jb(),c.Kb(4,"ion-card-header"),c.Kb(5,"ion-card-subtitle"),c.jc(6),c.Jb(),c.Jb(),c.Kb(7,"ion-card-content"),c.Kb(8,"div"),c.hc(9,d,7,3,"span",1),c.Jb(),c.Jb(),c.Jb(),c.Ib(10,"hr"),c.Jb()),2&t){const t=e.$implicit;c.xb(6),c.nc("",t.delivery.name," - Pincode ",t.delivery.pincode," - Date (",t.date,")"),c.xb(3),c.Zb("ngForOf",t.items)}}function p(t,e){if(1&t&&(c.Kb(0,"div"),c.hc(1,g,11,4,"div",1),c.Jb()),2&t){const t=c.Ub();c.xb(1),c.Zb("ngForOf",t.historyList)}}function f(t,e){1&t&&(c.Kb(0,"p"),c.jc(1," No previous orders found..\n"),c.Jb())}let m=(()=>{class t{constructor(t){this.alertController=t,this.historyList=[],this.status=!1}ngOnInit(){let t=localStorage.getItem("zphone");console.log(t),t?this.initDatas(t):this.alertController.create({header:"Login To Continue",message:"User must be logged in",buttons:["OK"]}).then(t=>{t.present()})}initDatas(t){return Object(a.a)(this,void 0,void 0,(function*(){this.historyList=[];let e=l.a.firestore().collection("orders");yield e.where("userNum","==",t).get().then(t=>{t.empty?(this.status=!0,this.historyList=[]):(t.forEach(t=>{this.historyList.push(t.data())}),this.historyList.sort((t,e)=>t.date>e.date?1:t.date<e.date?-1:0),console.log(this.historyList))}).catch((function(t){console.log("Error getting documents: ",t)}))}))}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(s.b))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-history"]],decls:2,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"statuz"],[1,"chipz"],[1,"avatarz"],[3,"src"],["text-wrap","",1,"labelz",2,"font-weight","600"],["style","font-weight: 300;",4,"ngIf"],[2,"font-weight","300"]],template:function(t,e){1&t&&(c.hc(0,p,2,1,"div",0),c.hc(1,f,2,0,"p",0)),2&t&&(c.Zb("ngIf",e.historyList&&e.historyList.length>0),c.xb(1),c.Zb("ngIf",e.status&&e.historyList&&0==e.historyList.length))},directives:[i.i,i.h,s.j,s.l,s.m,s.k,s.d,s.A],styles:[".avatarz[_ngcontent-%COMP%]{width:10%;height:auto}.avatarz[_ngcontent-%COMP%], .labelz[_ngcontent-%COMP%]{display:inline-block}.labelz[_ngcontent-%COMP%]{width:89%}.chipz[_ngcontent-%COMP%]{margin-bottom:10px}.statuz[_ngcontent-%COMP%]{text-align:right;margin-right:20px}"]}),t})();const J=[{path:"",component:(()=>{class t{constructor(t){this.authCheckService=t,this.currentUser=""}ngOnInit(){this.currentUser=localStorage.getItem("zphone")}logout(){this.authCheckService.logout()}ionViewWillEnter(){this.currentUser=localStorage.getItem("zphone"),""==this.currentUser&&this.authCheckService.logout()}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(b.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-user"]],decls:25,vars:1,consts:[["slot","start"],["color","danger",2,"width","100%","height","100%",3,"click"],[2,"width","100%","margin-top","10px"]],template:function(t,e){1&t&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",0),c.Ib(3,"ion-back-button"),c.Jb(),c.Kb(4,"ion-title"),c.jc(5,"User Profile"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content"),c.Kb(7,"ion-list"),c.Kb(8,"ion-list-header"),c.Kb(9,"h3"),c.jc(10,"Current User"),c.Jb(),c.Jb(),c.Kb(11,"ion-item"),c.Kb(12,"div"),c.Kb(13,"h4"),c.jc(14),c.Jb(),c.Jb(),c.Jb(),c.Ib(15,"ion-item"),c.Kb(16,"ion-item"),c.Kb(17,"ion-button",1),c.Sb("click",(function(){return e.logout()})),c.jc(18,"Logout"),c.Jb(),c.Jb(),c.Ib(19,"ion-item"),c.Kb(20,"ion-list-header"),c.Kb(21,"h3"),c.jc(22,"Order History"),c.Jb(),c.Jb(),c.Kb(23,"ion-item"),c.Ib(24,"app-history",2),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(14),c.lc(" ",e.currentUser," "))},directives:[s.t,s.R,s.i,s.e,s.f,s.Q,s.o,s.B,s.C,s.z,s.h,m],styles:[""]}),t})()}];let K=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(J)],r.j]}),t})(),y=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,s.S,K]]}),t})()}}]);