(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lu3c:function(t,n,i){"use strict";i.r(n),i.d(n,"LoginPageModule",(function(){return u}));var e=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),r=i("tyNb"),c=i("mrSG"),l=i("JZFu"),b=i("fXoL"),a=i("al7H");const g=["slide"];function p(t,n){if(1&t&&(b.Kb(0,"div",13),b.kc(1),b.Jb()),2&t){const t=b.Ub();b.xb(1),b.lc(t.errmessage)}}const h=[{path:"",component:(()=>{class t{constructor(t,n,i){this.auth=t,this.router=n,this.alertController=i,this.slideOpts={initialSlide:0,speed:400},this.errmessage=""}ngOnInit(){}ngAfterViewInit(){this.slide.lockSwipes(!0),this.applicationVerifier=new l.a.auth.RecaptchaVerifier("recaptcha-container")}submit(){return Object(c.a)(this,void 0,void 0,(function*(){(new l.a.auth.PhoneAuthProvider).verifyPhoneNumber("+91"+this.phone.toString(),this.applicationVerifier).then(t=>{this.slide.lockSwipes(!1),this.slide.slideNext(),this.slide.lockSwipes(!0),this.verificationId=t})}))}subOtp(){return Object(c.a)(this,void 0,void 0,(function*(){try{let t=yield l.a.auth.PhoneAuthProvider.credential(this.verificationId,this.otp.toString()),n=yield l.a.auth().signInWithCredential(t);console.log(n),this.errmessage="",this.auth.login(this.phone)}catch(t){this.slide.lockSwipes(!1),this.slide.slidePrev(),this.errmessage="Error, retry again...",this.slide.lockSwipes(!0),console.log("LOGIN ERROR",t)}}))}ionViewWillEnter(){this.phone=void 0,this.otp=void 0,this.slide.lockSwipes(!1),this.slide.slidePrev(),this.slide.lockSwipes(!0)}}return t.\u0275fac=function(n){return new(n||t)(b.Hb(a.a),b.Hb(r.g),b.Hb(s.b))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-login"]],viewQuery:function(t,n){var i;1&t&&b.pc(g,!0),2&t&&b.dc(i=b.Tb())&&(n.slide=i.first)},decls:36,vars:4,consts:[["pager","true",3,"options"],["slide",""],["src","./assets/phone.png",1,"loginImg1"],["position","floating"],[1,"phnNum"],["type","number",3,"ngModel","ngModelChange"],["id","recaptcha-container"],["class","errMsg",4,"ngIf"],[1,"nxtBtn",3,"click"],["src","./assets/otp.png",1,"loginImg2"],[1,"subBtn",3,"click"],[1,"retry"],[3,"click"],[1,"errMsg"]],template:function(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-title"),b.kc(3,"Login"),b.Jb(),b.Jb(),b.Jb(),b.Kb(4,"ion-content"),b.Kb(5,"ion-slides",0,1),b.Kb(7,"ion-slide"),b.Kb(8,"div"),b.Ib(9,"img",2),b.Kb(10,"ion-item"),b.Kb(11,"ion-label",3),b.kc(12,"Enter Phone Number \xa0\xa0\xa0"),b.Kb(13,"span",4),b.kc(14,"9XXXX..."),b.Jb(),b.Jb(),b.Kb(15,"ion-input",5),b.Sb("ngModelChange",(function(t){return n.phone=t})),b.Jb(),b.Jb(),b.Ib(16,"div",6),b.ic(17,p,2,1,"div",7),b.Jb(),b.Kb(18,"div"),b.Kb(19,"ion-button",8),b.Sb("click",(function(){return n.submit()})),b.kc(20,"Next"),b.Jb(),b.Jb(),b.Jb(),b.Kb(21,"ion-slide"),b.Kb(22,"div"),b.Ib(23,"img",9),b.Kb(24,"ion-item"),b.Kb(25,"ion-label",3),b.kc(26,"Enter OTP \xa0\xa0\xa0"),b.Kb(27,"span",4),b.kc(28,"XXXXXX"),b.Jb(),b.Jb(),b.Kb(29,"ion-input",5),b.Sb("ngModelChange",(function(t){return n.otp=t})),b.Jb(),b.Jb(),b.Jb(),b.Kb(30,"div"),b.Kb(31,"ion-button",10),b.Sb("click",(function(){return n.subOtp()}))("click",(function(){return n.submit()})),b.kc(32,"Verify OTP"),b.Jb(),b.Jb(),b.Kb(33,"div",11),b.Kb(34,"a",12),b.Sb("click",(function(){b.fc(t);const n=b.ec(6);return n.lockSwipes(!1),n.slidePrev(),n.lockSwipes(!0)})),b.kc(35,"Click to retry"),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb()}2&t&&(b.xb(5),b.ac("options",n.slideOpts),b.xb(10),b.ac("ngModel",n.phone),b.xb(2),b.ac("ngIf",n.errmessage&&""!=n.errmessage),b.xb(12),b.ac("ngModel",n.otp))},directives:[s.t,s.U,s.T,s.o,s.N,s.M,s.z,s.A,s.y,s.Z,o.e,o.f,e.k,s.h],styles:["ion-slides[_ngcontent-%COMP%]{height:100%}.phnNum[_ngcontent-%COMP%]{color:rgba(0,0,0,.5)}.nxtBtn[_ngcontent-%COMP%]{bottom:20%}.nxtBtn[_ngcontent-%COMP%], .retry[_ngcontent-%COMP%]{position:absolute;width:50%;left:25%}.retry[_ngcontent-%COMP%]{bottom:33%}.subBtn[_ngcontent-%COMP%]{position:absolute;width:50%;bottom:20%;left:25%}.subBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#28ba62!important}.loginImg1[_ngcontent-%COMP%]{margin-left:-17%}.loginImg1[_ngcontent-%COMP%], .loginImg2[_ngcontent-%COMP%]{position:absolute;height:20%;margin-top:-45%}.loginImg2[_ngcontent-%COMP%]{margin-left:-26%}@media (min-width:500px){.loginImg1[_ngcontent-%COMP%]{margin-left:-5%!important}.loginImg1[_ngcontent-%COMP%], .loginImg2[_ngcontent-%COMP%]{position:absolute;height:20%;margin-top:-15%}.loginImg2[_ngcontent-%COMP%]{margin-left:-9%!important}}.errMsg[_ngcontent-%COMP%]{color:red;margin-top:10px}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[r.j.forChild(h)],r.j]}),t})(),u=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[e.b,o.b,s.V,d]]}),t})()}}]);