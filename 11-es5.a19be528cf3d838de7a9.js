!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{B92z:function(n,i,o){"use strict";o.r(i),o.d(i,"UserPageModule",(function(){return C}));var r=o("ofXK"),c=o("3Pt+"),s=o("TEn/"),a=o("tyNb"),b=o("fXoL"),u=o("al7H"),l=o("mrSG"),h=o("JZFu");function f(t,n){if(1&t&&(b.Kb(0,"span",8),b.jc(1),b.Jb()),2&t){var e=b.Ub().$implicit;b.xb(1),b.mc("",e.type," X ",e.selected,"")}}function g(t,n){if(1&t&&(b.Kb(0,"span"),b.hc(1,f,2,2,"span",7),b.Jb()),2&t){var e=n.$implicit;b.xb(1),b.Zb("ngIf",e.selected&&e.selected>0)}}function d(t,n){if(1&t&&(b.Kb(0,"span"),b.Kb(1,"div",3),b.Kb(2,"ion-avatar",4),b.Ib(3,"img",5),b.Jb(),b.Kb(4,"ion-label",6),b.jc(5),b.hc(6,g,2,1,"span",1),b.Jb(),b.Jb(),b.Jb()),2&t){var e=n.$implicit;b.xb(3),b.Zb("src",e.src,b.fc),b.xb(2),b.lc("",e.name," "),b.xb(1),b.Zb("ngForOf",e.variants)}}function p(t,n){if(1&t&&(b.Kb(0,"div"),b.Kb(1,"ion-card"),b.Kb(2,"div",2),b.jc(3),b.Jb(),b.Kb(4,"ion-card-header"),b.Kb(5,"ion-card-subtitle"),b.jc(6),b.Jb(),b.Jb(),b.Kb(7,"ion-card-content"),b.Kb(8,"div"),b.hc(9,d,7,3,"span",1),b.Jb(),b.Jb(),b.Jb(),b.Ib(10,"hr"),b.Jb()),2&t){var e=n.$implicit;b.xb(3),b.lc(" Status ",e.status," "),b.xb(3),b.nc("",e.delivery.name," - Pincode ",e.delivery.pincode," - Date (",e.date,")"),b.xb(3),b.Zb("ngForOf",e.items)}}function m(t,n){if(1&t&&(b.Kb(0,"div"),b.hc(1,p,11,5,"div",1),b.Jb()),2&t){var e=b.Ub();b.xb(1),b.Zb("ngForOf",e.historyList)}}function v(t,n){1&t&&(b.Kb(0,"p"),b.jc(1," No previous orders found..\n"),b.Jb())}var y,J,K,w,x=((y=function(){function n(e){t(this,n),this.alertController=e,this.historyList=[],this.status=!1}return e(n,[{key:"ngOnInit",value:function(){var t=localStorage.getItem("zphone");console.log(t),t?this.initDatas(t):this.alertController.create({header:"Login To Continue",message:"User must be logged in",buttons:["OK"]}).then((function(t){t.present()}))}},{key:"initDatas",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.historyList=[],e=h.a.firestore().collection("orders"),n.next=4,e.where("userNum","==",t).get().then((function(t){t.empty?(i.status=!0,i.historyList=[]):(t.forEach((function(t){i.historyList.push(t.data())})),i.historyList.sort((function(t,n){return t.date>n.date?1:t.date<n.date?-1:0})),console.log(i.historyList))})).catch((function(t){console.log("Error getting documents: ",t)}));case 4:case"end":return n.stop()}}),n,this)})))}}]),n}()).\u0275fac=function(t){return new(t||y)(b.Hb(s.b))},y.\u0275cmp=b.Bb({type:y,selectors:[["app-history"]],decls:2,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"statuz"],[1,"chipz"],[1,"avatarz"],[3,"src"],["text-wrap","",1,"labelz",2,"font-weight","600"],["style","font-weight: 300;",4,"ngIf"],[2,"font-weight","300"]],template:function(t,n){1&t&&(b.hc(0,m,2,1,"div",0),b.hc(1,v,2,0,"p",0)),2&t&&(b.Zb("ngIf",n.historyList&&n.historyList.length>0),b.xb(1),b.Zb("ngIf",n.status&&n.historyList&&0==n.historyList.length))},directives:[r.i,r.h,s.j,s.l,s.m,s.k,s.d,s.A],styles:[".avatarz[_ngcontent-%COMP%]{width:19%;height:auto}.avatarz[_ngcontent-%COMP%], .labelz[_ngcontent-%COMP%]{display:inline-block}.labelz[_ngcontent-%COMP%]{width:75%;margin-left:5%}.chipz[_ngcontent-%COMP%]{margin-bottom:10px}.statuz[_ngcontent-%COMP%]{text-align:right;margin-right:20px;color:#bd7304;font-weight:600}"]}),y),j=[{path:"",component:(J=function(){function n(e){t(this,n),this.authCheckService=e,this.currentUser=""}return e(n,[{key:"ngOnInit",value:function(){this.currentUser=localStorage.getItem("zphone")}},{key:"logout",value:function(){this.authCheckService.logout()}},{key:"ionViewWillEnter",value:function(){this.currentUser=localStorage.getItem("zphone"),""==this.currentUser&&this.authCheckService.logout()}}]),n}(),J.\u0275fac=function(t){return new(t||J)(b.Hb(u.a))},J.\u0275cmp=b.Bb({type:J,selectors:[["app-user"]],decls:25,vars:1,consts:[["slot","start"],["color","danger",2,"width","100%","height","100%",3,"click"],[2,"width","100%","margin-top","10px"]],template:function(t,n){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",0),b.Ib(3,"ion-back-button"),b.Jb(),b.Kb(4,"ion-title"),b.jc(5,"User Profile"),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content"),b.Kb(7,"ion-list"),b.Kb(8,"ion-list-header"),b.Kb(9,"h3"),b.jc(10,"Current User"),b.Jb(),b.Jb(),b.Kb(11,"ion-item"),b.Kb(12,"div"),b.Kb(13,"h4"),b.jc(14),b.Jb(),b.Jb(),b.Jb(),b.Ib(15,"ion-item"),b.Kb(16,"ion-item"),b.Kb(17,"ion-button",1),b.Sb("click",(function(){return n.logout()})),b.jc(18,"Logout"),b.Jb(),b.Jb(),b.Ib(19,"ion-item"),b.Kb(20,"ion-list-header"),b.Kb(21,"h3"),b.jc(22,"Order History"),b.Jb(),b.Jb(),b.Kb(23,"ion-item"),b.Ib(24,"app-history",2),b.Jb(),b.Jb(),b.Jb()),2&t&&(b.xb(14),b.lc(" ",n.currentUser," "))},directives:[s.t,s.R,s.i,s.e,s.f,s.Q,s.o,s.B,s.C,s.z,s.h,x],styles:[""]}),J)}],k=((w=function n(){t(this,n)}).\u0275mod=b.Fb({type:w}),w.\u0275inj=b.Eb({factory:function(t){return new(t||w)},imports:[[a.j.forChild(j)],a.j]}),w),C=((K=function n(){t(this,n)}).\u0275mod=b.Fb({type:K}),K.\u0275inj=b.Eb({factory:function(t){return new(t||K)},imports:[[r.b,c.a,s.S,k]]}),K)}}])}();