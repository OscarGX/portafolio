"use strict";(self.webpackChunkportafolio_oscargx=self.webpackChunkportafolio_oscargx||[]).push([[695],{1695:(F,m,c)=>{c.r(m),c.d(m,{ProjectModule:()=>k});var p=c(6895),d=c(3097),r=c(4719),f=c(2279),t=c(6738);let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-project-main"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"project-main works!"),t.qZA())}}),e})();var v=c(2654),u=(()=>{return(e=u||(u={}))[e.ACTIVE=1]="ACTIVE",e[e.INACTIVE=2]="INACTIVE",u;var e})(),a=c(7428),g=c(529);let Z=(()=>{class e{constructor(o){this.http=o}getAll(){return this.http.get("/tags")}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),b=(()=>{class e{constructor(o){this.http=o}getAll(){return this.http.get("/technologies")}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=c(8104);function A(e,n){if(1&e&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.Q6J("value",o.value),t.xp6(1),t.hij(" ",o.text," ")}}function _(e,n){if(1&e&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.value," ")}}function q(e,n){if(1&e&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.name," ")}}function N(e,n){if(1&e&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.Q6J("value",o.value),t.xp6(1),t.hij(" ",o.text," ")}}function C(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"button",37),t.NdJ("click",function(){t.CHM(o);const s=t.oxw().index,l=t.oxw();return t.KtG(l.deleteSkuItem(s))}),t._UZ(1,"i",38),t.qZA()}}function y(e,n){if(1&e&&(t.TgZ(0,"div",17)(1,"div",27)(2,"div",1)(3,"div",28),t._UZ(4,"input",29),t.qZA(),t.TgZ(5,"div",28),t._UZ(6,"input",30),t.qZA(),t.TgZ(7,"div",28)(8,"select",31)(9,"option",11),t._uU(10,"Selecciona"),t.qZA(),t.YNc(11,N,2,2,"option",12),t.qZA()(),t.TgZ(12,"div",28),t._UZ(13,"input",32),t.qZA()(),t.TgZ(14,"div",17)(15,"div",28)(16,"div",33),t._UZ(17,"input",34),t.TgZ(18,"label",35),t._uU(19," Public "),t.qZA()()(),t.TgZ(20,"div",28),t.YNc(21,C,2,0,"button",36),t.qZA()()()()),2&e){const o=n.index,i=t.oxw();t.xp6(1),t.Q6J("formGroupName",o),t.xp6(10),t.Q6J("ngForOf",i.sourceControlPlatforms),t.xp6(10),t.Q6J("ngIf",o>0)}}const j=function(){return["Bananas are awesome","Nobody can argue this fact."]},U=[{path:"",component:h},{path:"new",component:(()=>{class e{constructor(o,i,s,l){this.tagService=o,this.techService=i,this.projectService=s,this.fb=l,this.tags=[],this.techs=[],this.subscription=new v.w,this.createForm(),this.status=[{text:"Active",value:u.ACTIVE},{text:"Inactive",value:u.INACTIVE}],this.sourceControlPlatforms=[{text:a.F.GITHUB,value:a.F.GITHUB},{text:a.F.GitLab,value:a.F.GitLab},{text:a.F.BitBucket,value:a.F.BitBucket}]}ngOnInit(){this.getTags(),this.getTechs()}ngOnDestroy(){this.subscription.unsubscribe()}onSubmit(){if(this.form.valid){const o=this.getRequestObject();this.subscription.add(this.projectService.createOne(o).subscribe(i=>{console.log(i),alert("Success prro")},i=>{console.log(i),alert("Error prro")}))}}getTags(){this.subscription.add(this.tagService.getAll().subscribe(o=>{this.tags=o}))}getTechs(){this.subscription.add(this.techService.getAll().subscribe(o=>{this.techs=o}))}createForm(){this.form=this.fb.group({name:["",[r.kI.required]],description:["",[r.kI.required]],thumbnail:["",[r.kI.required]],videoUrl:["",[r.kI.required]],status:["",[r.kI.required]],year:[null,[r.kI.required]],clientName:["",[r.kI.required]],tags:[null,[r.kI.required]],technologies:[null,[r.kI.required]],repos:this.fb.array([])});const o=this.fb.group({name:["",[r.kI.required]],description:["",[r.kI.required]],platform:["",[r.kI.required]],url:["",[r.kI.required]],public:[!1,[r.kI.required]]});this.repos.push(o)}get repos(){return this.form.get("repos")}addSkuItem(){const o=this.fb.group({name:["",[r.kI.required]],description:["",[r.kI.required]],platform:["",[r.kI.required]],url:["",[r.kI.required]],public:[!1,[r.kI.required]]});this.repos.push(o)}deleteSkuItem(o){this.repos.removeAt(o)}getRequestObject(){const o={name:this.form.value.name,description:this.form.value.description,thumbnail:this.form.value.thumbnail,videoUrl:this.form.value.videoUrl,status:parseInt(this.form.value.status),year:this.form.value.year,clientName:this.form.value.clientName,tags:[],technologies:[],repos:this.repos.value},s=this.form.value.technologies;return this.form.value.tags.forEach(l=>{o.tags.push({id:l})}),s.forEach(l=>{o.technologies.push({id:l})}),o}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(Z),t.Y36(b),t.Y36(T.Y),t.Y36(r.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-project-new"]],decls:64,vars:9,consts:[[1,"container","mt-5","mb-5","bg-ccontent"],[1,"row"],[1,"col-md-12","text-white","mt-3","mb-3"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","name",1,"form-control"],["type","text","formControlName","description",1,"form-control"],["type","text","inputmode","url","formControlName","thumbnail",1,"form-control"],["type","text","inputmode","url","formControlName","videoUrl",1,"form-control"],["formControlName","status",1,"form-select"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","number","inputmode","numeric","formControlName","year",1,"form-control"],["type","text","formControlName","clientName",1,"form-control"],["multiple","","formControlName","tags",1,"form-select"],["multiple","","formControlName","technologies",1,"form-select"],[1,"row","mt-3"],[1,"col-md-12"],["role","toolbar","aria-label","Toolbar with button groups",1,"btn-toolbar"],["role","group","aria-label","First group",1,"btn-group","me-2"],["type","button",1,"btn","btn-success",3,"click"],[1,"fas","fa-plus-square"],["formArrayName","repos",1,"row","mb-3"],["class","row mt-3",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-csecondary",3,"disabled"],[3,"value"],[1,"col-md-12",3,"formGroupName"],[1,"col-md-3"],["type","text","placeholder","name","formControlName","name",1,"form-control"],["type","text","placeholder","description","formControlName","description",1,"form-control"],["formControlName","platform",1,"form-select"],["type","text","inputmode","url","placeholder","url","formControlName","url",1,"form-control"],[1,"form-check"],["type","checkbox","formControlName","public",1,"form-check-input"],[1,"form-check-label"],["type","button","class","btn btn-danger",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(4,"div",4)(5,"label",5),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",4)(9,"label",5),t._uU(10,"Description"),t.qZA(),t._UZ(11,"input",7),t.qZA(),t.TgZ(12,"div",4)(13,"label",5),t._uU(14,"Thumbnail"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"div",4)(17,"label",5),t._uU(18,"Video"),t.qZA(),t._UZ(19,"input",9),t.qZA(),t.TgZ(20,"div",4)(21,"label",5),t._uU(22,"Status"),t.qZA(),t.TgZ(23,"select",10)(24,"option",11),t._uU(25,"Selecciona"),t.qZA(),t.YNc(26,A,2,2,"option",12),t.qZA()(),t.TgZ(27,"div",4)(28,"label",5),t._uU(29,"Year"),t.qZA(),t._UZ(30,"input",13),t.qZA(),t.TgZ(31,"div",4)(32,"label",5),t._uU(33,"Client Name"),t.qZA(),t._UZ(34,"input",14),t.qZA(),t.TgZ(35,"div",4)(36,"label",5),t._uU(37,"Tags"),t.qZA(),t.TgZ(38,"select",15)(39,"option",11),t._uU(40,"Selecciona"),t.qZA(),t.YNc(41,_,2,2,"option",12),t.qZA()(),t.TgZ(42,"div",4)(43,"label",5),t._uU(44,"Technologies"),t.qZA(),t.TgZ(45,"select",16)(46,"option",11),t._uU(47,"Selecciona"),t.qZA(),t.YNc(48,q,2,2,"option",12),t.qZA()(),t.TgZ(49,"div",17)(50,"h5"),t._uU(51,"Repos"),t.qZA(),t.TgZ(52,"div",18)(53,"div",19)(54,"div",20)(55,"button",21),t.NdJ("click",function(){return i.addSkuItem()}),t._UZ(56,"i",22),t.qZA()()()()(),t.TgZ(57,"div",23),t.YNc(58,y,22,3,"div",24),t.qZA(),t.TgZ(59,"button",25),t._uU(60,"Registrar"),t.qZA(),t.TgZ(61,"p"),t._uU(62),t.ALo(63,"json"),t.qZA()()()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",i.form),t.xp6(23),t.Q6J("ngForOf",i.status),t.xp6(15),t.Q6J("ngForOf",i.tags),t.xp6(7),t.Q6J("ngForOf",i.techs),t.xp6(10),t.Q6J("ngForOf",i.repos.controls),t.xp6(1),t.Q6J("disabled",i.form.invalid),t.xp6(3),t.hij(" ",t.lcZ(63,7,i.form.value)," "))},dependencies:[p.sg,p.O5,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.Wl,r.EJ,r.K7,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,p.Ts]}),e})()},{path:"video-test",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-video-test"]],decls:4,vars:2,consts:[[1,"ratio","ratio-21x9"],["preload","none","controls","","src","https://res.cloudinary.com/dbttghvhv/video/upload/v1653267159/portafolio-oscargx/videos/test-face-verify_tvnem5.mp4"],[3,"strings"],[1,"typing"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"video",1),t.qZA(),t.TgZ(2,"ngx-typed-js",2),t._UZ(3,"h1",3),t.qZA()),2&o&&(t.xp6(2),t.Q6J("strings",t.DdM(1,j)))},dependencies:[d.n]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(U),f.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,x,r.UX,d.J]}),e})()}}]);