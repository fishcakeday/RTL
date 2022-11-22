"use strict";(self.webpackChunkRTLApp=self.webpackChunkRTLApp||[]).push([[267],{1203:(J,P,n)=>{n.d(P,{D:()=>k});var a=n(7579),y=n(2722),m=n(7731),C=n(8377),t=n(5e3),A=n(62),w=n(5620),x=n(3251),e=n(9808),F=n(7093),T=n(5245),H=n(7238);function R(d,g){if(1&d&&(t.TgZ(0,"mat-icon",9),t._uU(1,"info_outline"),t.qZA()),2&d){const M=t.oxw().$implicit;t.Q6J("matTooltip",M.tooltip)}}function N(d,g){if(1&d&&(t.TgZ(0,"span",10),t._uU(1),t.ALo(2,"number"),t.qZA()),2&d){const M=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,M.dataValue)," ")}}function U(d,g){if(1&d&&(t.TgZ(0,"span",10),t._uU(1),t.ALo(2,"number"),t.qZA()),2&d){const M=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,M[i.currencyUnitEnum.BTC],i.currencyUnitFormats.BTC)," ")}}function E(d,g){if(1&d&&(t.TgZ(0,"span",10),t._uU(1),t.ALo(2,"number"),t.qZA()),2&d){const M=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,M[i.currencyUnitEnum.OTHER],i.currencyUnitFormats.OTHER)," ")}}function b(d,g){if(1&d&&(t.TgZ(0,"div",5)(1,"div",6),t._uU(2),t.YNc(3,R,2,1,"mat-icon",7),t.qZA(),t.YNc(4,N,3,3,"span",8),t.YNc(5,U,3,4,"span",8),t.YNc(6,E,3,4,"span",8),t.qZA()),2&d){const M=g.$implicit,i=t.oxw().$implicit,z=t.oxw();t.xp6(2),t.hij(" ",M.title," "),t.xp6(1),t.Q6J("ngIf",M.tooltip),t.xp6(1),t.Q6J("ngIf",i===z.currencyUnitEnum.SATS),t.xp6(1),t.Q6J("ngIf",i===z.currencyUnitEnum.BTC),t.xp6(1),t.Q6J("ngIf",z.fiatConversion&&i!==z.currencyUnitEnum.SATS&&i!==z.currencyUnitEnum.BTC&&""===z.conversionErrorMsg)}}function O(d,g){if(1&d&&(t.TgZ(0,"div",11)(1,"div",12),t._uU(2),t.qZA()()),2&d){const M=t.oxw(2);t.xp6(2),t.Oqu(M.conversionErrorMsg)}}function D(d,g){if(1&d&&(t.TgZ(0,"mat-tab",1)(1,"div",2),t.YNc(2,b,7,5,"div",3),t.qZA(),t.YNc(3,O,3,1,"div",4),t.qZA()),2&d){const M=g.$implicit,i=t.oxw();t.s9C("label",M),t.xp6(2),t.Q6J("ngForOf",i.values),t.xp6(1),t.Q6J("ngIf",i.fiatConversion&&M!==i.currencyUnitEnum.SATS&&M!==i.currencyUnitEnum.BTC&&""!==i.conversionErrorMsg)}}let k=(()=>{class d{constructor(M,i){this.commonService=M,this.store=i,this.values=[],this.currencyUnitEnum=m.NT,this.currencyUnitFormats=m.Xz,this.currencyUnits=[],this.fiatConversion=!1,this.conversionErrorMsg="",this.unSubs=[new a.x,new a.x,new a.x]}ngOnInit(){this.store.select(C.dT).pipe((0,y.R)(this.unSubs[0])).subscribe(M=>{this.fiatConversion=M.settings.fiatConversion,this.currencyUnits=M.settings.currencyUnits,this.fiatConversion||this.currencyUnits.splice(2,1),this.currencyUnits.length>1&&this.values[0]&&this.values[0].dataValue>=0&&this.getCurrencyValues(this.values)})}ngOnChanges(){this.currencyUnits.length>1&&this.values[0]&&this.values[0].dataValue>=0&&this.getCurrencyValues(this.values)}getCurrencyValues(M){M.forEach(i=>{i.dataValue>0?(this.commonService.convertCurrency(i.dataValue,m.NT.SATS,m.NT.BTC,"",!0).pipe((0,y.R)(this.unSubs[1])).subscribe(z=>{i[m.NT.BTC]=z.BTC}),this.commonService.convertCurrency(i.dataValue,m.NT.SATS,m.NT.OTHER,this.currencyUnits[2],this.fiatConversion).pipe((0,y.R)(this.unSubs[2])).subscribe({next:z=>{i[m.NT.OTHER]=z.OTHER},error:z=>{this.conversionErrorMsg="Conversion Error: "+z}})):(i[m.NT.BTC]=i.dataValue,""===this.conversionErrorMsg&&(i[m.NT.OTHER]=i.dataValue))})}ngOnDestroy(){this.unSubs.forEach(M=>{M.next(null),M.complete()})}}return d.\u0275fac=function(M){return new(M||d)(t.Y36(A.v),t.Y36(w.yh))},d.\u0275cmp=t.Xpm({type:d,selectors:[["rtl-currency-unit-converter"]],inputs:{values:"values"},features:[t.TTD],decls:2,vars:1,consts:[[3,"label",4,"ngFor","ngForOf"],[3,"label"],["fxLayout","row","fxFlex","100","fxLayoutAlign","start start"],["fxLayout","column","fxLayoutAlign","center start","class","cc-data-block",4,"ngFor","ngForOf"],["fxLayout","row","fxFlex","100","class","p-1 error-border mt-1",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center start",1,"cc-data-block"],["fxLayout","row","fxFlex","100","fxLayoutAlign","start center",1,"cc-data-title"],["matTooltipPosition","below","class","info-icon",3,"matTooltip",4,"ngIf"],["class","cc-data-value",4,"ngIf"],["matTooltipPosition","below",1,"info-icon",3,"matTooltip"],[1,"cc-data-value"],["fxLayout","row","fxFlex","100",1,"p-1","error-border","mt-1"],[1,"cc-data-block"]],template:function(M,i){1&M&&(t.TgZ(0,"mat-tab-group"),t.YNc(1,D,4,3,"mat-tab",0),t.qZA()),2&M&&(t.xp6(1),t.Q6J("ngForOf",i.currencyUnits))},directives:[x.SP,e.sg,x.uX,F.xw,F.yH,F.Wh,e.O5,T.Hw,H.gM],pipes:[e.JJ],styles:[""]}),d})()},9122:(J,P,n)=>{n.d(P,{n:()=>M});var a=n(8966),y=n(2687),m=n(7731),C=n(5e3),t=n(5043),A=n(62),w=n(7261),x=n(7093),e=n(9808),F=n(3322),T=n(159),H=n(9224),R=n(9546),N=n(7423),U=n(4834),E=n(3390),b=n(6895);const O=function(i){return{"display-none":i}};function D(i,z){if(1&i&&(C.TgZ(0,"div",20),C._UZ(1,"qr-code",21),C.qZA()),2&i){const p=C.oxw();C.Q6J("ngClass",C.VKq(4,O,p.screenSize===p.screenSizeEnum.XS||p.screenSize===p.screenSizeEnum.SM)),C.xp6(1),C.Q6J("value",p.address)("size",p.qrWidth)("errorCorrectionLevel","L")}}function k(i,z){if(1&i&&(C.TgZ(0,"div",22),C._UZ(1,"qr-code",21),C.qZA()),2&i){const p=C.oxw();C.Q6J("ngClass",C.VKq(4,O,p.screenSize!==p.screenSizeEnum.XS&&p.screenSize!==p.screenSizeEnum.SM)),C.xp6(1),C.Q6J("value",p.address)("size",p.qrWidth)("errorCorrectionLevel","L")}}function d(i,z){if(1&i&&(C.TgZ(0,"div",13)(1,"div",14)(2,"h4",15),C._uU(3,"Address Type"),C.qZA(),C.TgZ(4,"span",23),C._uU(5),C.qZA()()()),2&i){const p=C.oxw();C.xp6(5),C.Oqu(p.addressType)}}function g(i,z){1&i&&C._UZ(0,"mat-divider",17)}let M=(()=>{class i{constructor(p,v,B,Z,Y){this.dialogRef=p,this.data=v,this.logger=B,this.commonService=Z,this.snackBar=Y,this.faReceipt=y.dLy,this.address="",this.addressType="",this.qrWidth=230,this.screenSize="",this.screenSizeEnum=m.cu}ngOnInit(){this.address=this.data.address,this.addressType=this.data.addressType,this.screenSize=this.commonService.getScreenSize()}onClose(){this.dialogRef.close(!1)}onCopyAddress(p){this.snackBar.open("Generated address copied."),this.logger.info("Copied Text: "+p)}}return i.\u0275fac=function(p){return new(p||i)(C.Y36(a.so),C.Y36(a.WI),C.Y36(t.mQ),C.Y36(A.v),C.Y36(w.ux))},i.\u0275cmp=C.Xpm({type:i,selectors:[["rtl-on-chain-generated-address"]],decls:25,vars:8,consts:[["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign","space-between stretch"],["fxFlex","35","fxLayoutAlign","center start","class","modal-qr-code-container padding-gap-large",3,"ngClass",4,"ngIf"],["fxFlex","65"],["fxLayout","row","fxLayoutAlign","space-between center",1,"modal-info-header"],["fxFlex","95","fxLayoutAlign","start start"],[1,"page-title-img","mr-1",3,"icon"],[1,"page-title"],["tabindex","2","fxFlex","5","fxLayoutAlign","center","mat-button","",1,"btn-close-x","p-0",3,"click"],[1,"padding-gap-x-large"],["fxLayout","column"],["fxFlex","50","fxLayoutAlign","center start","class","modal-qr-code-container padding-gap-large",3,"ngClass",4,"ngIf"],["fxLayout","row",4,"ngIf"],["class","w-100 my-1",4,"ngIf"],["fxLayout","row"],["fxFlex","100"],["fxLayoutAlign","start",1,"font-bold-500"],[1,"overflow-wrap","foreground-secondary-text"],[1,"w-100","my-1"],["fxLayout","row","fxLayoutAlign","end center",1,"mt-1"],["autoFocus","","mat-button","","color","primary","tabindex","1","type","submit","rtlClipboard","",3,"payload","copied"],["fxFlex","35","fxLayoutAlign","center start",1,"modal-qr-code-container","padding-gap-large",3,"ngClass"],[3,"value","size","errorCorrectionLevel"],["fxFlex","50","fxLayoutAlign","center start",1,"modal-qr-code-container","padding-gap-large",3,"ngClass"],[1,"foreground-secondary-text"]],template:function(p,v){1&p&&(C.TgZ(0,"div",0),C.YNc(1,D,2,6,"div",1),C.TgZ(2,"div",2)(3,"mat-card-header",3)(4,"div",4),C._UZ(5,"fa-icon",5),C.TgZ(6,"span",6),C._uU(7),C.qZA()(),C.TgZ(8,"button",7),C.NdJ("click",function(){return v.onClose()}),C._uU(9,"X"),C.qZA()(),C.TgZ(10,"mat-card-content",8)(11,"div",9),C.YNc(12,k,2,6,"div",10),C.YNc(13,d,6,1,"div",11),C.YNc(14,g,1,0,"mat-divider",12),C.TgZ(15,"div",13)(16,"div",14)(17,"h4",15),C._uU(18,"Address"),C.qZA(),C.TgZ(19,"span",16),C._uU(20),C.qZA()()(),C._UZ(21,"mat-divider",17),C.TgZ(22,"div",18)(23,"button",19),C.NdJ("copied",function(Z){return v.onCopyAddress(Z)}),C._uU(24,"Copy Address"),C.qZA()()()()()()),2&p&&(C.xp6(1),C.Q6J("ngIf",v.address),C.xp6(4),C.Q6J("icon",v.faReceipt),C.xp6(2),C.Oqu(v.screenSize===v.screenSizeEnum.XS?"Address":"Generated Address"),C.xp6(5),C.Q6J("ngIf",v.address),C.xp6(1),C.Q6J("ngIf",""!==v.addressType),C.xp6(1),C.Q6J("ngIf",""!==v.addressType),C.xp6(6),C.Oqu(v.address),C.xp6(3),C.Q6J("payload",v.address))},directives:[x.xw,x.Wh,e.O5,x.yH,e.mk,F.oO,T.uU,H.dk,R.BN,N.lW,H.dn,U.d,E.h,b.y],styles:[""]}),i})()},7671:(J,P,n)=>{n.d(P,{D:()=>q});var a=n(5e3),y=n(113),m=n(7731),C=n(5043),t=n(7093),A=n(7423),w=n(5245),x=n(9808),e=n(4107),F=n(3075),T=n(508),H=n(7322);let R=(()=>{class l extends T.LF{format(r,f){return"MMM YYYY"===f?m.gg[r.getMonth()].name+", "+r.getFullYear():"YYYY"===f?r.getFullYear().toString():r.getDate()+"/"+m.gg[r.getMonth()].name+"/"+r.getFullYear()}}return l.\u0275fac=function(){let _;return function(f){return(_||(_=a.n5z(l)))(f||l)}}(),l.\u0275prov=a.Yz7({token:l,factory:l.\u0275fac}),l})();const N={parse:{dateInput:"LL"},display:{dateInput:"MMM YYYY",monthYearLabel:"YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY"}},U={parse:{dateInput:"LL"},display:{dateInput:"YYYY",monthYearLabel:"YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY"}};let E=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275dir=a.lG2({type:l,selectors:[["","monthlyDate",""]],features:[a._Bn([{provide:T._A,useClass:R},{provide:T.sG,useValue:N}])]}),l})(),b=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275dir=a.lG2({type:l,selectors:[["","yearlyDate",""]],features:[a._Bn([{provide:T._A,useClass:R},{provide:T.sG,useValue:U}])]}),l})();var O=n(7531),D=n(6856),k=n(6534),d=n(9843);const g=["monthlyDatepicker"],M=["yearlyDatepicker"],i=function(){return{animationDirection:"forward"}};function z(l,_){if(1&l&&a.GkF(0,9),2&l){a.oxw();const r=a.MAs(19);a.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",a.DdM(2,i))}}const p=function(){return{animationDirection:"backward"}};function v(l,_){if(1&l&&a.GkF(0,9),2&l){a.oxw();const r=a.MAs(19);a.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",a.DdM(2,p))}}const B=function(){return{animationDirection:""}};function Z(l,_){if(1&l&&a.GkF(0,9),2&l){a.oxw();const r=a.MAs(19);a.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",a.DdM(2,B))}}function Y(l,_){if(1&l&&(a.TgZ(0,"mat-option",17),a._uU(1),a.ALo(2,"titlecase"),a.qZA()),2&l){const r=_.$implicit;a.Q6J("value",r),a.xp6(1),a.hij(" ",a.lcZ(2,2,r)," ")}}function W(l,_){if(1&l){const r=a.EpF();a.TgZ(0,"mat-form-field",18)(1,"input",19,20),a.NdJ("ngModelChange",function(h){return a.CHM(r),a.oxw(2).selectedValue=h}),a.qZA(),a._UZ(3,"mat-datepicker-toggle",21),a.TgZ(4,"mat-datepicker",22,23),a.NdJ("monthSelected",function(h){return a.CHM(r),a.oxw(2).onMonthSelected(h)})("dateSelected",function(h){return a.CHM(r),a.oxw(2).onMonthSelected(h)}),a.qZA()()}if(2&l){const r=a.MAs(5),f=a.oxw(2);a.xp6(1),a.Q6J("matDatepicker",r)("min",f.first)("max",f.last)("ngModel",f.selectedValue),a.xp6(2),a.Q6J("for",r),a.xp6(1),a.Q6J("startAt",f.selectedValue)}}function I(l,_){if(1&l){const r=a.EpF();a.TgZ(0,"mat-form-field",24)(1,"input",25,26),a.NdJ("ngModelChange",function(h){return a.CHM(r),a.oxw(2).selectedValue=h}),a.qZA(),a._UZ(3,"mat-datepicker-toggle",21),a.TgZ(4,"mat-datepicker",27,28),a.NdJ("yearSelected",function(h){return a.CHM(r),a.oxw(2).onYearSelected(h)})("monthSelected",function(h){return a.CHM(r),a.oxw(2).onYearSelected(h)})("dateSelected",function(h){return a.CHM(r),a.oxw(2).onYearSelected(h)}),a.qZA()()}if(2&l){const r=a.MAs(5),f=a.oxw(2);a.xp6(1),a.Q6J("matDatepicker",r)("min",f.first)("max",f.last)("ngModel",f.selectedValue),a.xp6(2),a.Q6J("for",r),a.xp6(1),a.Q6J("startAt",f.selectedValue)}}function G(l,_){if(1&l){const r=a.EpF();a.TgZ(0,"div",10)(1,"div",11)(2,"mat-select",12),a.NdJ("ngModelChange",function(h){return a.CHM(r),a.oxw().selScrollRange=h})("selectionChange",function(h){return a.CHM(r),a.oxw().onRangeChanged(h)}),a.YNc(3,Y,3,4,"mat-option",13),a.qZA()(),a.TgZ(4,"div",14),a.YNc(5,W,6,6,"mat-form-field",15),a.YNc(6,I,6,6,"mat-form-field",16),a.qZA()()}if(2&l){const r=a.oxw();a.Q6J("@sliderAnimation",r.animationDirection),a.xp6(2),a.Q6J("ngModel",r.selScrollRange),a.xp6(1),a.Q6J("ngForOf",r.scrollRanges),a.xp6(2),a.Q6J("ngIf",r.selScrollRange===r.scrollRanges[0]),a.xp6(1),a.Q6J("ngIf",r.selScrollRange===r.scrollRanges[1])}}let q=(()=>{class l{constructor(r){this.logger=r,this.scrollRanges=m.op,this.selScrollRange=this.scrollRanges[0],this.today=new Date(Date.now()),this.first=new Date(2018,0,1,0,0,0),this.last=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),0,0,0),this.disablePrev=!1,this.disableNext=!0,this.animationDirection="",this.selectedValue=this.last,this.stepChanged=new a.vpe}onRangeChanged(r){this.selScrollRange=r.value,this.onStepChange("LAST")}onMonthSelected(r){this.selectedValue=r,this.onStepChange("SELECTED"),this.monthlyDatepicker.close()}onYearSelected(r){this.selectedValue=r,this.onStepChange("SELECTED"),this.yearlyDatepicker.close()}onStepChange(r){switch(this.logger.info(r),r){case"FIRST":this.animationDirection="backward",this.selectedValue!==this.first&&(this.selectedValue=this.first,this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange}));break;case"PREVIOUS":this.selectedValue=this.selScrollRange===m.op[1]?new Date(this.selectedValue.getFullYear()-1,0,1,0,0,0):new Date(this.selectedValue.getFullYear(),this.selectedValue.getMonth()-1,1,0,0,0),this.animationDirection="backward",this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange});break;case"NEXT":this.selectedValue=this.selScrollRange===m.op[1]?new Date(this.selectedValue.getFullYear()+1,0,1,0,0,0):new Date(this.selectedValue.getFullYear(),this.selectedValue.getMonth()+1,1,0,0,0),this.animationDirection="forward",this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange});break;case"LAST":this.animationDirection="forward",this.selectedValue=this.last,this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange});break;default:this.animationDirection="",this.stepChanged.emit({selDate:this.selectedValue,selScrollRange:this.selScrollRange})}this.disablePrev=this.selScrollRange===m.op[1]?this.selectedValue.getFullYear()<=this.first.getFullYear():this.selectedValue.getFullYear()<=this.first.getFullYear()&&this.selectedValue.getMonth()<=this.first.getMonth(),this.disableNext=this.selScrollRange===m.op[1]?this.selectedValue.getFullYear()>=this.last.getFullYear():this.selectedValue.getFullYear()>=this.last.getFullYear()&&this.selectedValue.getMonth()>=this.last.getMonth(),this.logger.info(this.disablePrev),this.logger.info(this.disableNext),setTimeout(()=>{this.animationDirection=""},800)}onChartMouseUp(r){"monthlyDate"===r.srcElement.name?this.monthlyDatepicker.open():"yearlyDate"===r.srcElement.name&&this.yearlyDatepicker.open()}}return l.\u0275fac=function(r){return new(r||l)(a.Y36(C.mQ))},l.\u0275cmp=a.Xpm({type:l,selectors:[["rtl-horizontal-scroller"]],viewQuery:function(r,f){if(1&r&&(a.Gf(g,5),a.Gf(M,5)),2&r){let h;a.iGM(h=a.CRH())&&(f.monthlyDatepicker=h.first),a.iGM(h=a.CRH())&&(f.yearlyDatepicker=h.first)}},hostBindings:function(r,f){1&r&&a.NdJ("click",function(V){return f.onChartMouseUp(V)})},outputs:{stepChanged:"stepChanged"},decls:20,vars:5,consts:[["fxLayout","row","fxLayoutAlign","space-between stretch","fxFlex","100",1,"padding-gap-x"],["fxLayout","row","fxLayoutAlign","start center","fxFlex","22"],["mat-icon-button","","color","primary","type","button","tabindex","1",1,"pr-4",3,"click"],["mat-icon-button","","color","primary","type","button","tabindex","2",3,"disabled","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["fxLayout","row","fxLayoutAlign","end center","fxFlex","22"],["mat-icon-button","","color","primary","type","button","tabindex","5",1,"pr-4",3,"disabled","click"],["mat-icon-button","","color","primary","type","button","tabindex","6",3,"click"],["controlsPanel",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["fxLayout","row","fxLayoutAlign","center center","fxFlex","56"],["fxFlex","50","fxLayoutAlign","center center","fxLayoutAlign.gt-xs","end center",1,"font-bold-700"],["fxFlex","80","fxFlex.gt-md","30","name","selScrlRange","placeholder","Range","tabindex","3",1,"font-bold-700",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","50","fxLayout","row","fxLayoutAlign","center center","fxLayoutAlign.gt-xs","start center"],["monthlyDate","","fxFlex","80","fxFlex.gt-md","30","fxLayoutAlign","center center",4,"ngIf"],["yearlyDate","","fxFlex","80","fxFlex.gt-md","30","fxLayoutAlign","center center",4,"ngIf"],[3,"value"],["monthlyDate","","fxFlex","80","fxFlex.gt-md","30","fxLayoutAlign","center center"],["matInput","","name","monthlyDate","tabindex","4","readonly","",3,"matDatepicker","min","max","ngModel","ngModelChange"],["monthlyDt","ngModel"],["matSuffix","",3,"for"],["startView","year",3,"startAt","monthSelected","dateSelected"],["monthlyDatepicker",""],["yearlyDate","","fxFlex","80","fxFlex.gt-md","30","fxLayoutAlign","center center"],["matInput","","name","yearlyDate","tabindex","4","readonly","",3,"matDatepicker","min","max","ngModel","ngModelChange"],["yearlyDt","ngModel"],["startView","multi-year",3,"startAt","yearSelected","monthSelected","dateSelected"],["yearlyDatepicker",""]],template:function(r,f){1&r&&(a.TgZ(0,"div",0)(1,"div",1)(2,"button",2),a.NdJ("click",function(){return f.onStepChange("FIRST")}),a.TgZ(3,"mat-icon"),a._uU(4,"skip_previous"),a.qZA()(),a.TgZ(5,"button",3),a.NdJ("click",function(){return f.onStepChange("PREVIOUS")}),a.TgZ(6,"mat-icon"),a._uU(7,"navigate_before"),a.qZA()()(),a.YNc(8,z,1,3,"ng-container",4),a.YNc(9,v,1,3,"ng-container",4),a.YNc(10,Z,1,3,"ng-container",4),a.TgZ(11,"div",5)(12,"button",6),a.NdJ("click",function(){return f.onStepChange("NEXT")}),a.TgZ(13,"mat-icon"),a._uU(14,"navigate_next"),a.qZA()(),a.TgZ(15,"button",7),a.NdJ("click",function(){return f.onStepChange("LAST")}),a.TgZ(16,"mat-icon"),a._uU(17,"skip_next"),a.qZA()()()(),a.YNc(18,G,7,5,"ng-template",null,8,a.W1O)),2&r&&(a.xp6(5),a.Q6J("disabled",f.disablePrev),a.xp6(3),a.Q6J("ngIf","forward"===f.animationDirection),a.xp6(1),a.Q6J("ngIf","backward"===f.animationDirection),a.xp6(1),a.Q6J("ngIf",""===f.animationDirection),a.xp6(2),a.Q6J("disabled",f.disableNext))},directives:[t.xw,t.Wh,t.yH,A.lW,w.Hw,x.O5,x.tP,e.gD,F.JJ,F.On,x.sg,T.ey,H.KE,E,O.Nt,D.hl,k.q,d.F,F.Fj,D.nW,H.R9,D.Mq,b],pipes:[x.rS],styles:[""],data:{animation:[y.l]}}),l})()},165:(J,P,n)=>{n.d(P,{g:()=>$});var a=n(6087),y=n(4847),m=n(2075),C=n(7731),t=n(7861),A=n(7579),w=n(2722),x=n(8377),e=n(5e3),F=n(62),T=n(5620),H=n(9808),R=n(9445),N=n(7093),U=n(7322),E=n(4107),b=n(3075),O=n(508),D=n(7531),k=n(8129),d=n(7423),g=n(3322);function M(o,u){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const c=u.$implicit,s=e.oxw();e.Q6J("value",c),e.xp6(1),e.Oqu(s.getLabel(c))}}function i(o,u){1&o&&(e.TgZ(0,"th",31),e._uU(1,"Date"),e.qZA())}function z(o,u){if(1&o&&(e.TgZ(0,"td",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const c=u.$implicit,s=e.oxw();e.xp6(1),e.Oqu(e.xi3(2,1,null==c?null:c.date,s.dataRange===s.scrollRanges[1]?"MMM/yyyy":"dd/MMM/yyyy"))}}function p(o,u){1&o&&(e.TgZ(0,"th",33),e._uU(1,"Amount Paid (Sats)"),e.qZA())}function v(o,u){if(1&o&&(e.TgZ(0,"td",32)(1,"span",34),e._uU(2),e.ALo(3,"number"),e.qZA()()),2&o){const c=u.$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,null==c?null:c.amount_paid,"1.0-2"))}}function B(o,u){1&o&&(e.TgZ(0,"th",33),e._uU(1,"# Payments"),e.qZA())}function Z(o,u){if(1&o&&(e.TgZ(0,"td",32)(1,"span",34),e._uU(2),e.ALo(3,"number"),e.qZA()()),2&o){const c=u.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,1,null==c?null:c.num_payments))}}function Y(o,u){1&o&&(e.TgZ(0,"th",33),e._uU(1,"Amount Received (Sats)"),e.qZA())}function W(o,u){if(1&o&&(e.TgZ(0,"td",32)(1,"span",34),e._uU(2),e.ALo(3,"number"),e.qZA()()),2&o){const c=u.$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,null==c?null:c.amount_received,"1.0-2"))}}function I(o,u){1&o&&(e.TgZ(0,"th",33),e._uU(1,"# Invoices"),e.qZA())}function G(o,u){if(1&o&&(e.TgZ(0,"td",32)(1,"span",34),e._uU(2),e.ALo(3,"number"),e.qZA()()),2&o){const c=u.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,1,null==c?null:c.num_invoices))}}function q(o,u){if(1&o){const c=e.EpF();e.TgZ(0,"th",35)(1,"div",36)(2,"mat-select",37),e._UZ(3,"mat-select-trigger"),e.TgZ(4,"mat-option",38),e.NdJ("click",function(){return e.CHM(c),e.oxw().onDownloadCSV()}),e._uU(5,"Download CSV"),e.qZA()()()()}}function l(o,u){if(1&o){const c=e.EpF();e.TgZ(0,"td",39)(1,"button",40),e.NdJ("click",function(){const S=e.CHM(c).$implicit;return e.oxw().onTransactionClick(S)}),e._uU(2,"View Info"),e.qZA()()}}function _(o,u){1&o&&(e.TgZ(0,"p"),e._uU(1,"No transaction available."),e.qZA())}function r(o,u){if(1&o&&(e.TgZ(0,"td",41),e.YNc(1,_,2,0,"p",42),e.qZA()),2&o){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null!=c.transactions&&c.transactions.data)||(null==c.transactions||null==c.transactions.data?null:c.transactions.data.length)<1)}}const f=function(o){return{"display-none":o}};function h(o,u){if(1&o&&e._UZ(0,"tr",43),2&o){const c=e.oxw();e.Q6J("ngClass",e.VKq(1,f,(null==c.transactions?null:c.transactions.data)&&(null==c.transactions||null==c.transactions.data?null:c.transactions.data.length)>0))}}function V(o,u){1&o&&e._UZ(0,"tr",44)}function X(o,u){1&o&&e._UZ(0,"tr",45)}const K=function(){return["all"]},j=function(){return["no_transaction"]};let $=(()=>{class o{constructor(c,s,L,S){this.commonService=c,this.store=s,this.datePipe=L,this.camelCaseWithReplace=S,this.dataRange=C.op[0],this.dataList=[],this.selFilter="",this.displayedColumns=["date","amount_paid","num_payments","amount_received","num_invoices"],this.tableSetting={tableId:"transactions",recordsPerPage:C.IV,sortBy:"date",sortOrder:C.Pi.DESCENDING},this.nodePageDefs=C.hG,this.selFilterBy="all",this.timezoneOffset=60*new Date(Date.now()).getTimezoneOffset(),this.scrollRanges=C.op,this.transactions=new m.by([]),this.pageSize=C.IV,this.pageSizeOptions=C.TJ,this.screenSize="",this.screenSizeEnum=C.cu,this.unSubs=[new A.x,new A.x],this.screenSize=this.commonService.getScreenSize()}ngOnInit(){this.store.select(x.dT).pipe((0,w.R)(this.unSubs[0])).subscribe(c=>{this.nodePageDefs="CLN"===c.lnImplementation?C.At:"ECL"===c.lnImplementation?C.Xk:C.hG}),this.pageSize=this.tableSetting.recordsPerPage?+this.tableSetting.recordsPerPage:C.IV,this.dataList&&this.dataList.length>0&&this.loadTransactionsTable(this.dataList)}ngAfterViewInit(){this.setTableWidgets()}ngOnChanges(c){c.dataList&&!c.dataList.firstChange&&(this.pageSize=this.tableSetting.recordsPerPage?+this.tableSetting.recordsPerPage:C.IV,this.loadTransactionsTable(this.dataList)),c.selFilter&&!c.selFilter.firstChange&&(this.selFilterBy="all",this.applyFilter())}onTransactionClick(c){const s=[[{key:"date",value:this.datePipe.transform(c.date,this.dataRange===C.op[1]?"MMM/yyyy":"dd/MMM/yyyy"),title:"Date",width:100,type:C.Gi.DATE}],[{key:"amount_paid",value:Math.round(c.amount_paid),title:"Amount Paid (Sats)",width:50,type:C.Gi.NUMBER},{key:"num_payments",value:c.num_payments,title:"# Payments",width:50,type:C.Gi.NUMBER}],[{key:"amount_received",value:Math.round(c.amount_received),title:"Amount Received (Sats)",width:50,type:C.Gi.NUMBER},{key:"num_invoices",value:c.num_invoices,title:"# Invoices",width:50,type:C.Gi.NUMBER}]];this.store.dispatch((0,t.qR)({payload:{data:{type:C.n_.INFORMATION,alertTitle:"Transaction Summary",message:s}}}))}applyFilter(){this.transactions&&(this.transactions.filter=this.selFilter.trim().toLowerCase())}getLabel(c){const s=this.nodePageDefs.reports[this.tableSetting.tableId].allowedColumns.find(L=>L.column===c);return s?s.label?s.label:this.camelCaseWithReplace.transform(s.column,"_"):this.commonService.titleCase(c)}setFilterPredicate(){this.transactions.filterPredicate=(c,s)=>{var L;let S="";switch(this.selFilterBy){case"all":S=(c.date?(this.datePipe.transform(c.date,"dd/MMM")+"/"+c.date.getFullYear()).toLowerCase():"")+JSON.stringify(c).toLowerCase();break;case"date":S=(null===(L=this.datePipe.transform(new Date(c[this.selFilterBy]||0),this.dataRange===this.scrollRanges[1]?"MMM/yyyy":"dd/MMM/yyyy"))||void 0===L?void 0:L.toLowerCase())||"";break;default:S=void 0===c[this.selFilterBy]?"":"string"==typeof c[this.selFilterBy]?c[this.selFilterBy].toLowerCase():"boolean"==typeof c[this.selFilterBy]?c[this.selFilterBy]?"yes":"no":c[this.selFilterBy].toString()}return S.includes(s)}}loadTransactionsTable(c){this.transactions=new m.by(c?[...c]:[]),this.setTableWidgets()}setTableWidgets(){var c;this.transactions&&this.transactions.data&&this.transactions.data.length>0&&(this.transactions.sortingDataAccessor=(s,L)=>s[L]&&isNaN(s[L])?s[L].toLocaleLowerCase():s[L]?+s[L]:null,this.transactions.sort=this.sort,null===(c=this.transactions.sort)||void 0===c||c.sort({id:this.tableSetting.sortBy,start:this.tableSetting.sortOrder,disableClear:!0}),this.transactions.paginator=this.paginator,this.setFilterPredicate(),this.applyFilter())}onDownloadCSV(){this.transactions.data&&this.transactions.data.length>0&&this.commonService.downloadFile(this.dataList,"Transactions-report-"+this.dataRange.toLowerCase())}ngOnDestroy(){this.unSubs.forEach(c=>{c.next(),c.complete()})}}return o.\u0275fac=function(c){return new(c||o)(e.Y36(F.v),e.Y36(T.yh),e.Y36(H.uU),e.Y36(R.D3))},o.\u0275cmp=e.Xpm({type:o,selectors:[["rtl-transactions-report-table"]],viewQuery:function(c,s){if(1&c&&(e.Gf(y.YE,5),e.Gf(a.NW,5)),2&c){let L;e.iGM(L=e.CRH())&&(s.sort=L.first),e.iGM(L=e.CRH())&&(s.paginator=L.first)}},inputs:{dataRange:"dataRange",dataList:"dataList",selFilter:"selFilter",displayedColumns:"displayedColumns",tableSetting:"tableSetting"},features:[e._Bn([{provide:a.ye,useValue:(0,C.pt)("Transactions")}]),e.TTD],decls:38,vars:12,consts:[["fxLayout","column","fxFlex","100","fxLayoutAlign","space-between stretch",1,"padding-gap-x"],["fxLayout","column","fxLayoutAlign","start stretch"],["fxLayout","column","fxLayoutAlign","start stretch","fxLayout.gt-sm","row wrap",1,"page-sub-title-container","mt-1"],["fxFlex","70"],["fxFlex.gt-xs","30","fxLayoutAlign.gt-xs","space-between center","fxLayout","row","fxLayoutAlign","space-between stretch"],["fxFlex","49"],["placeholder","Filter By","tabindex","1","name","filterBy",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","filter","placeholder","Filter",3,"ngModel","ngModelChange","input","keyup"],["fxLayout","row","fxLayoutAlign","start start"],["fxLayout","column","fxFlex","100",1,"table-container",3,"perfectScrollbar"],["mat-table","","fxFlex","100","matSort","",1,"overflow-auto",3,"dataSource"],["table",""],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount_paid"],["mat-header-cell","","mat-sort-header","","arrowPosition","before",4,"matHeaderCellDef"],["matColumnDef","num_payments"],["matColumnDef","amount_received"],["matColumnDef","num_invoices"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","fxLayoutAlign","end center",4,"matCellDef"],["matColumnDef","no_transaction"],["mat-footer-cell","","colspan","4",4,"matFooterCellDef"],["mat-footer-row","",3,"ngClass",4,"matFooterRowDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"mb-1",3,"pageSize","pageSizeOptions","showFirstLastButtons"],[3,"value"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","","arrowPosition","before"],["fxLayoutAlign","end center"],["mat-header-cell",""],["fxLayoutAlign","center center",1,"bordered-box","table-actions-select"],["placeholder","Actions","tabindex","1",1,"mr-0"],[3,"click"],["mat-cell","","fxLayoutAlign","end center"],["mat-stroked-button","","color","primary","type","button","tabindex","4",1,"table-actions-button",3,"click"],["mat-footer-cell","","colspan","4"],[4,"ngIf"],["mat-footer-row","",3,"ngClass"],["mat-header-row",""],["mat-row",""]],template:function(c,s){1&c&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.TgZ(4,"div",4)(5,"mat-form-field",5)(6,"mat-select",6),e.NdJ("ngModelChange",function(S){return s.selFilterBy=S})("selectionChange",function(){return s.selFilter="",s.applyFilter()}),e.YNc(7,M,2,2,"mat-option",7),e.qZA()(),e.TgZ(8,"mat-form-field",5)(9,"input",8),e.NdJ("ngModelChange",function(S){return s.selFilter=S})("input",function(){return s.applyFilter()})("keyup",function(){return s.applyFilter()}),e.qZA()()()(),e.TgZ(10,"div",9)(11,"div",10)(12,"table",11,12),e.ynx(14,13),e.YNc(15,i,2,0,"th",14),e.YNc(16,z,3,4,"td",15),e.BQk(),e.ynx(17,16),e.YNc(18,p,2,0,"th",17),e.YNc(19,v,4,4,"td",15),e.BQk(),e.ynx(20,18),e.YNc(21,B,2,0,"th",17),e.YNc(22,Z,4,3,"td",15),e.BQk(),e.ynx(23,19),e.YNc(24,Y,2,0,"th",17),e.YNc(25,W,4,4,"td",15),e.BQk(),e.ynx(26,20),e.YNc(27,I,2,0,"th",17),e.YNc(28,G,4,3,"td",15),e.BQk(),e.ynx(29,21),e.YNc(30,q,6,0,"th",22),e.YNc(31,l,3,0,"td",23),e.BQk(),e.ynx(32,24),e.YNc(33,r,2,1,"td",25),e.BQk(),e.YNc(34,h,1,3,"tr",26),e.YNc(35,V,1,0,"tr",27),e.YNc(36,X,1,0,"tr",28),e.qZA(),e._UZ(37,"mat-paginator",29),e.qZA()()()()),2&c&&(e.xp6(6),e.Q6J("ngModel",s.selFilterBy),e.xp6(1),e.Q6J("ngForOf",e.DdM(10,K).concat(s.displayedColumns.slice(0,-1))),e.xp6(2),e.Q6J("ngModel",s.selFilter),e.xp6(3),e.Q6J("dataSource",s.transactions),e.xp6(22),e.Q6J("matFooterRowDef",e.DdM(11,j)),e.xp6(1),e.Q6J("matHeaderRowDef",s.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",s.displayedColumns),e.xp6(1),e.Q6J("pageSize",s.pageSize)("pageSizeOptions",s.pageSizeOptions)("showFirstLastButtons",s.screenSize!==s.screenSizeEnum.XS))},directives:[N.xw,N.yH,N.Wh,U.KE,E.gD,b.JJ,b.On,H.sg,O.ey,D.Nt,b.Fj,k.$V,m.BZ,y.YE,m.w1,m.fO,m.ge,y.nU,m.Dz,m.ev,E.$L,d.lW,m.mD,m.yh,H.O5,m.Ke,m.Q2,H.mk,g.oO,m.as,m.XQ,m.nj,m.Gk,a.NW],pipes:[H.uU,H.JJ],styles:[""]}),o})()},3396:(J,P,n)=>{n.d(P,{KfU:()=>P2,ctA:()=>n1});var P2={prefix:"far",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M143.9 398.6C131.4 394.1 124.9 380.3 129.4 367.9C146.9 319.4 198.9 288 256 288C313.1 288 365.1 319.4 382.6 367.9C387.1 380.3 380.6 394.1 368.1 398.6C355.7 403.1 341.9 396.6 337.4 384.1C328.2 358.5 297.2 336 256 336C214.8 336 183.8 358.5 174.6 384.1C170.1 396.6 156.3 403.1 143.9 398.6V398.6zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},n1={prefix:"far",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]}}}]);