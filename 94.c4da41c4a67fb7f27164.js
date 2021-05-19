(self.webpackChunkmegaten_fusion_tool=self.webpackChunkmegaten_fusion_tool||[]).push([[94],{8623:(t,e,s)=>{"use strict";s.d(e,{d:()=>a});var n=s(5614),i=s(9624),o=s(1116);function r(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"tr"),n.TgZ(1,"td"),n.TgZ(2,"label"),n._uU(3),n.TgZ(4,"input",3),n.NdJ("change",function(){const e=n.CHM(t).$implicit;return n.oxw().toggledName.emit(e.name)}),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&t){const t=e.$implicit;n.xp6(3),n.hij("",t.name.split(",").join(", ")," "),n.xp6(1),n.Q6J("checked",t.included)}}let a=(()=>{class t{constructor(t){this.title=t,this.dlcTitle="Included DLC Demons",this.toggledName=new n.vpe}set appTitle(t){this.title.setTitle(`Fusion Settings - ${t}`)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(i.Dx))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-demon-dlc-settings"]],inputs:{dlcDemons:"dlcDemons",dlcTitle:"dlcTitle",appTitle:"appTitle"},outputs:{toggledName:"toggledName"},decls:10,vars:2,consts:[[1,"entry-table"],[1,"title"],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","change"]],template:function(t,e){1&t&&(n.ynx(0),n.TgZ(1,"h2"),n._uU(2),n.qZA(),n.TgZ(3,"table",0),n.TgZ(4,"thead"),n.TgZ(5,"tr"),n.TgZ(6,"th",1),n._uU(7,"DLC"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(8,"tbody"),n.YNc(9,r,5,2,"tr",2),n.qZA(),n.qZA(),n.BQk()),2&t&&(n.xp6(2),n.Oqu(e.dlcTitle),n.xp6(7),n.Q6J("ngForOf",e.dlcDemons))},directives:[o.sg],encapsulation:2,changeDetection:0}),t})()},628:(t,e,s)=>{"use strict";s.d(e,{N:()=>v});var n=s(5614),i=s(1116),o=s(6101);function r(t,e){if(1&t&&(n.TgZ(0,"th",4),n._uU(1,"Inheritable Skills"),n.qZA()),2&t){const t=n.oxw();n.uIk("colspan",t.inheritHeaders.length)}}function a(t,e){if(1&t&&(n.TgZ(0,"th",4),n._uU(1,"Skill Affinities"),n.qZA()),2&t){const t=n.oxw();n.uIk("colspan",t.inheritHeaders.length)}}function c(t,e){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t)}}function l(t,e){if(1&t&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&t){const t=n.oxw().$implicit;n.Gre("element-icon ",t,""),n.xp6(1),n.Oqu(t)}}function m(t,e){if(1&t&&(n.TgZ(0,"th"),n.YNc(1,c,2,1,"ng-container",3),n.YNc(2,l,2,4,"div",5),n.qZA()),2&t){const t=n.oxw();n.Udp("width",100/t.inheritHeaders.length,"%"),n.xp6(1),n.Q6J("ngIf",!t.hasIcons),n.xp6(1),n.Q6J("ngIf",t.hasIcons)}}function p(t,e){if(1&t&&(n.TgZ(0,"td"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.Udp("color",t?null:"transparent"),n.xp6(1),n.hij(" ",t?"yes":"no"," ")}}function h(t,e){if(1&t&&(n.TgZ(0,"tr"),n.YNc(1,p,2,3,"td",6),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.inherits)}}function u(t,e){if(1&t&&(n.TgZ(0,"td"),n.ALo(1,"roundInheritPercent"),n._uU(2),n.qZA()),2&t){const t=e.$implicit;n.Gre("affinity",n.lcZ(1,4,100*t),""),n.xp6(2),n.hij(" ",100*t,"% ")}}function g(t,e){if(1&t&&(n.TgZ(0,"tr"),n.YNc(1,u,3,6,"td",7),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.inherits)}}function f(t,e){if(1&t&&(n.TgZ(0,"td"),n._uU(1),n.ALo(2,"affinityToString"),n.qZA()),2&t){const t=e.$implicit;n.Gre("affinity",t,""),n.xp6(1),n.hij(" ",n.lcZ(2,4,t)," ")}}function d(t,e){if(1&t&&(n.TgZ(0,"tr"),n.YNc(1,f,3,6,"td",7),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.inherits)}}let v=(()=>{class t{constructor(){this.inheritHeaders=[],this.inherits=[],this.hasChance=!1,this.hasIcons=!0,this.hasLvls=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-demon-inherits"]],inputs:{inheritHeaders:"inheritHeaders",inherits:"inherits",hasChance:"hasChance",hasIcons:"hasIcons",hasLvls:"hasLvls"},decls:11,vars:6,consts:[[1,"entry-table"],["class","title",4,"ngIf"],[3,"width",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"title"],[3,"class",4,"ngIf"],[3,"color",4,"ngFor","ngForOf"],[3,"class",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(n.TgZ(0,"table",0),n.TgZ(1,"thead"),n.TgZ(2,"tr"),n.YNc(3,r,2,1,"th",1),n.YNc(4,a,2,1,"th",1),n.qZA(),n.TgZ(5,"tr"),n.YNc(6,m,3,4,"th",2),n.qZA(),n.qZA(),n.TgZ(7,"tbody"),n.YNc(8,h,2,1,"tr",3),n.YNc(9,g,2,1,"tr",3),n.YNc(10,d,2,1,"tr",3),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.Q6J("ngIf",!e.hasLvls),n.xp6(1),n.Q6J("ngIf",e.hasLvls&&e.inheritHeaders.length),n.xp6(2),n.Q6J("ngForOf",e.inheritHeaders),n.xp6(2),n.Q6J("ngIf",!e.hasLvls&&!e.hasChance),n.xp6(1),n.Q6J("ngIf",e.hasChance),n.xp6(1),n.Q6J("ngIf",e.hasLvls))},directives:[i.O5,i.sg],pipes:[o.DY,o.JZ],encapsulation:2,changeDetection:0}),t})()},4209:(t,e,s)=>{"use strict";s.d(e,{n:()=>u});var n=s(5614),i=s(1116),o=s(3787);function r(t,e){1&t&&(n.TgZ(0,"th"),n._uU(1,"Target"),n.qZA())}function a(t,e){1&t&&(n.TgZ(0,"th"),n._uU(1,"Rank"),n.qZA())}function c(t,e){1&t&&(n.TgZ(0,"th"),n._uU(1,"Inherit"),n.qZA())}function l(t,e){1&t&&(n.TgZ(0,"th"),n._uU(1,"Level"),n.qZA())}const m=function(t,e){return{extra:t,unique:e}};function p(t,e){if(1&t&&n._UZ(0,"tr",4),2&t){const t=e.$implicit,s=n.oxw();n.Q6J("hasTarget",s.hasTarget)("hasRank",s.hasRank)("hasInherit",s.hasInherit)("hasLearned",!1)("hasLvl",s.hasLvl)("data",t)("ngClass",n.WLB(7,m,t.rank>70&&t.rank<90,t.rank>90))}}function h(t,e){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._uU(2),n.qZA(),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.uIk("colspan",t.skillHeaderLen),n.xp6(1),n.hij("No ",t.title," Found")}}let u=(()=>{class t{constructor(){this.title="Learned Skills",this.hasInherit=!1,this.hasTarget=!1,this.hasRank=!1,this.hasLvl=!0,this.skillHeaderLen=5}ngOnInit(){this.nextColIndices()}ngOnChanges(){this.nextSkills()}nextColIndices(){this.hasInherit&&(this.skillHeaderLen+=1),this.hasTarget&&(this.skillHeaderLen+=1),this.hasRank&&(this.skillHeaderLen+=1)}nextSkills(){this.skills=Object.keys(this.skillLevels).map(t=>this.compendium.getSkill(t));for(const t of this.skills)t.level=this.skillLevels[t.name];this.elemOrder&&this.skills.sort((t,e)=>20*(t.level-e.level)+this.elemOrder[t.element]-this.elemOrder[e.element])}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-demon-skills"]],inputs:{title:"title",hasInherit:"hasInherit",hasTarget:"hasTarget",hasRank:"hasRank",hasLvl:"hasLvl",compendium:"compendium",elemOrder:"elemOrder",skillLevels:"skillLevels"},features:[n.TTD],decls:22,vars:8,consts:[[1,"entry-table"],[1,"title"],[4,"ngIf"],["class","app-smt-skill-list-row",3,"hasTarget","hasRank","hasInherit","hasLearned","hasLvl","data","ngClass",4,"ngFor","ngForOf"],[1,"app-smt-skill-list-row",3,"hasTarget","hasRank","hasInherit","hasLearned","hasLvl","data","ngClass"]],template:function(t,e){1&t&&(n.TgZ(0,"table",0),n.TgZ(1,"thead"),n.TgZ(2,"tr"),n.TgZ(3,"th",1),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"tr"),n.TgZ(6,"th"),n._uU(7,"Elem"),n.qZA(),n.TgZ(8,"th"),n._uU(9,"Name"),n.qZA(),n.TgZ(10,"th"),n._uU(11,"Cost"),n.qZA(),n.TgZ(12,"th"),n._uU(13,"Effect"),n.qZA(),n.YNc(14,r,2,0,"th",2),n.YNc(15,a,2,0,"th",2),n.YNc(16,c,2,0,"th",2),n.YNc(17,l,2,0,"th",2),n.qZA(),n.qZA(),n.TgZ(18,"tbody"),n.YNc(19,p,1,10,"tr",3),n.YNc(20,h,3,2,"tr",2),n._UZ(21,"tr"),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.uIk("colSpan",e.skillHeaderLen),n.xp6(1),n.Oqu(e.title),n.xp6(10),n.Q6J("ngIf",e.hasTarget),n.xp6(1),n.Q6J("ngIf",e.hasRank),n.xp6(1),n.Q6J("ngIf",e.hasInherit),n.xp6(1),n.Q6J("ngIf",e.hasLvl),n.xp6(2),n.Q6J("ngForOf",e.skills),n.xp6(1),n.Q6J("ngIf",!e.skills.length))},directives:[i.O5,i.sg,o.W,i.mk],encapsulation:2,changeDetection:0}),t})()},2573:(t,e,s)=>{"use strict";s.d(e,{O:()=>g});var n=s(5614),i=s(1116);function o(t,e){if(1&t&&(n.TgZ(0,"h2"),n._uU(1),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Oqu(t.title)}}function r(t,e){1&t&&(n.TgZ(0,"th"),n._uU(1,"Price"),n.qZA())}function a(t,e){if(1&t&&(n.TgZ(0,"th"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.Oqu(t)}}function c(t,e){1&t&&(n.TgZ(0,"th"),n._uU(1,"Inherits"),n.qZA())}function l(t,e){if(1&t&&(n.TgZ(0,"th"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.Oqu(t)}}function m(t,e){if(1&t&&(n.TgZ(0,"td"),n._uU(1),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Oqu(t.price)}}function p(t,e){if(1&t&&(n.TgZ(0,"td"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.Oqu(t)}}function h(t,e){if(1&t&&(n.TgZ(0,"td"),n.TgZ(1,"div"),n._uU(2),n.qZA(),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Gre("element-icon ",t.inherit,""),n.xp6(1),n.Oqu(t.inherit)}}const u=["*"];let g=(()=>{class t{constructor(){this.title="Demon Entry",this.statHeaders=[],this.stats=[],this.fusionHeaders=[],this.price=0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-demon-stats"]],inputs:{title:"title",statHeaders:"statHeaders",stats:"stats",fusionHeaders:"fusionHeaders",inherit:"inherit",price:"price"},ngContentSelectors:u,decls:19,vars:10,consts:[[4,"ngIf"],[1,"entry-table"],[1,"title"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(n.F$t(),n.ynx(0),n.YNc(1,o,2,1,"h2",0),n.TgZ(2,"table",1),n.TgZ(3,"thead"),n.TgZ(4,"tr"),n.TgZ(5,"th",2),n._uU(6),n.qZA(),n.qZA(),n.TgZ(7,"tr"),n.YNc(8,r,2,0,"th",0),n.YNc(9,a,2,1,"th",3),n.YNc(10,c,2,0,"th",0),n.YNc(11,l,2,1,"th",3),n.qZA(),n.qZA(),n.TgZ(12,"tbody"),n.TgZ(13,"tr"),n.YNc(14,m,2,1,"td",0),n.YNc(15,p,2,1,"td",3),n.YNc(16,h,3,4,"td",0),n.Hsn(17),n.qZA(),n.qZA(),n.qZA(),n.GkF(18),n.BQk()),2&t&&(n.xp6(1),n.Q6J("ngIf",e.title.includes("Lvl")),n.xp6(4),n.uIk("colSpan",e.stats.length+e.fusionHeaders.length+(e.inherit?1:0)+(e.price?1:0)),n.xp6(1),n.hij(" ",e.title.includes("Lvl")?"Stats":e.title," "),n.xp6(2),n.Q6J("ngIf",e.price),n.xp6(1),n.Q6J("ngForOf",e.statHeaders),n.xp6(1),n.Q6J("ngIf",e.inherit),n.xp6(1),n.Q6J("ngForOf",e.fusionHeaders),n.xp6(3),n.Q6J("ngIf",e.price),n.xp6(1),n.Q6J("ngForOf",e.stats),n.xp6(1),n.Q6J("ngIf",e.inherit))},directives:[i.O5,i.sg],encapsulation:2,changeDetection:0}),t})()},7967:(t,e,s)=>{"use strict";s.d(e,{R:()=>u});var n=s(5614),i=s(9624),o=s(3522),r=s(1116);function a(t,e){if(1&t&&(n.TgZ(0,"th"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.Oqu(t.slice(0,4))}}const c=function(t,e){return[t,e]};function l(t,e){if(1&t&&(n.TgZ(0,"td",4),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.Q6J("ngClass",n.WLB(2,c,t.slice(0,4),t.slice(4,8))),n.xp6(1),n.Oqu(t.slice(4,8))}}function m(t,e){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"th"),n._uU(2),n.qZA(),n.YNc(3,l,2,5,"td",3),n.TgZ(4,"th"),n._uU(5),n.qZA(),n.qZA()),2&t){const t=e.$implicit;n.xp6(2),n.Oqu(t[0]),n.xp6(1),n.Q6J("ngForOf",t.slice(1,t.length-1)),n.xp6(2),n.Oqu(t[t.length-1])}}function p(t,e){if(1&t&&(n.TgZ(0,"th"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.Oqu(t.slice(0,4))}}function h(t,e){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"th",0),n._uU(2),n.qZA(),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.uIk("colspan",t.table[0].length),n.xp6(1),n.AsE("",t.appName," - ",t.tripTitle,"")}}let u=(()=>{class t{constructor(t,e){this.title2=t,this.route=e,this.normTitle="Normal Fusions",this.tripTitle="",this.isPersona=!1,this.filterDarks=!0,this.subscriptions=[],this.table=[]}ngOnInit(){this.subscriptions.push(this.route.parent.data.subscribe(t=>{this.appName=t.appName||"Shin Megami Tensei",this.title2.setTitle(`Fusion Chart - ${this.appName} Fusion Calculator`)}))}ngOnChanges(){this.normChart&&this.fillFusionChart()}ngOnDestroy(){for(const t of this.subscriptions)t.unsubscribe()}fillFusionChart(){const t="None",e=this.normChart.elementDemons;let s=[],n=this.normChart.races,i=[];this.filterDarks&&(s=this.normChart.races.filter(t=>this.normChart.getLightDark(t)>0),n=this.normChart.races.filter(t=>0===this.normChart.getLightDark(t)),i=this.normChart.races.filter(t=>-1===this.normChart.getLightDark(t)),0===i.length&&s.length>0&&(s=this.normChart.races.filter(t=>this.normChart.getLightDark(t)>-1),n=[],i=this.normChart.races.filter(t=>this.normChart.getLightDark(t)<-1)));const o=s.length-i.length,r=s.concat(n,e),a=i.length?i.concat(Array(r.length-i.length).fill("")):r,c=this.mitaTable?r:s.concat(n,Array(e.length).fill("")),l=this.mitaTable||i.length?Array(o).fill("").concat(i,n,e):r;this.table=[[""].concat(r,[""])];for(let m=0;m<l.length;m++){const s=Array(r.length+2).fill("Empt-"),n=l[m],i=c[m],p=-1!==e.indexOf(n),h=-1!==e.indexOf(i);this.table.push(s),s[0]=n,s[s.length-1]=i;for(let o=m;o<r.length;o++){const n=r[o],a=-1!==e.indexOf(n);if(a&&h){const r=e.indexOf(i),a=e.indexOf(n);s[o+1]="mita"+(this.mitaTable[r][a-r-1]||t)}else if(a&&i){const t=this.normChart.getElemFusions(n)[i],e=t?t.toString():"";s[o+1]=t?(t>0?"ran"+e+"+":"ra"+e)+e:"rankNone"}else if(n&&i){const e=this.isPersona&&n===i?n:this.normChart.getRaceFusion(n,i);s[o+1]=(n===i?"elem":"norm")+(e||t)}}if(this.tripChart)for(let e=0;e<=m-o;e++){const i=a[e];if(i&&p){const t=this.tripChart.getElemFusions(n)[i],o=t?t.toString():"";s[e+1]=t?(t>0?"ran"+o+"+":"ra"+o)+o:"rankNone"}else if(i&&n){const o=this.tripChart.getRaceFusion(i,n);s[e+1]=(i===n?"elem":"trip")+(o||t)}}if(-1!==n.indexOf(" x ")){const[t,e]=n.split(" x "),i=t.slice(0,3)+"x"+e.slice(0,3);s[0]=i,s[s.length-1]=i}else if(-1!==n.indexOf(" ")){const t=n.split(" ")[0];s[0]=t,s[s.length-1]=t}}for(let m=0;m<this.table[0].length;m++){const t=this.table[0][m];if(-1!==t.indexOf(" x ")){const[e,s]=t.split(" x ");this.table[0][m]=e.slice(0,2)+s.slice(0,2)}}this.table.push([""].concat(a,[""]))}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(i.Dx),n.Y36(o.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-fusion-chart"]],inputs:{normChart:"normChart",tripChart:"tripChart",mitaTable:"mitaTable",normTitle:"normTitle",tripTitle:"tripTitle",isPersona:"isPersona",filterDarks:"filterDarks",counter:"counter"},features:[n.TTD],decls:12,vars:7,consts:[[1,"title"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(t,e){1&t&&(n.TgZ(0,"table"),n.TgZ(1,"tbody"),n.TgZ(2,"tr"),n.TgZ(3,"th",0),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"tr"),n.YNc(6,a,2,1,"th",1),n.qZA(),n.YNc(7,m,6,3,"tr",1),n.TgZ(8,"tr"),n.YNc(9,p,2,1,"th",1),n.qZA(),n.YNc(10,h,3,3,"tr",2),n.qZA(),n._UZ(11,"tbody"),n.qZA()),2&t&&(n.xp6(3),n.uIk("colspan",e.table[0].length),n.xp6(1),n.AsE("",e.appName," - ",e.normTitle,""),n.xp6(2),n.Q6J("ngForOf",e.table[0]),n.xp6(1),n.Q6J("ngForOf",e.table.slice(1,e.table.length-1)),n.xp6(2),n.Q6J("ngForOf",e.table[e.table.length-1]),n.xp6(1),n.Q6J("ngIf",e.tripTitle))},directives:[r.sg,r.O5,r.mk],styles:["table[_ngcontent-%COMP%]{width:auto;margin:0 auto}td.elem[_ngcontent-%COMP%]{color:#0f0}td.trip[_ngcontent-%COMP%]{color:#d3d3d3}td.ra-2[_ngcontent-%COMP%]{color:orange}td.ra-1[_ngcontent-%COMP%]{color:red}td.ran1[_ngcontent-%COMP%]{color:#0f0}td.ran2[_ngcontent-%COMP%]{color:#0ff}td.None[_ngcontent-%COMP%]{color:transparent}td.Ara[_ngcontent-%COMP%], td.Fien[_ngcontent-%COMP%], td.Flae[_ngcontent-%COMP%], td.Sala[_ngcontent-%COMP%]{color:red}td.Aqua[_ngcontent-%COMP%], td.Enig[_ngcontent-%COMP%], td.Nigi[_ngcontent-%COMP%], td.Undi[_ngcontent-%COMP%]{color:#0ff}td.Aero[_ngcontent-%COMP%], td.Kusi[_ngcontent-%COMP%], td.Sylp[_ngcontent-%COMP%], td.UMA[_ngcontent-%COMP%]{color:#0f0}td.Erth[_ngcontent-%COMP%], td.Gnom[_ngcontent-%COMP%], td.Rand[_ngcontent-%COMP%], td.Saki[_ngcontent-%COMP%]{color:orange}td.Empt[_ngcontent-%COMP%]{background-color:initial;color:transparent}"],changeDetection:0}),t})()},4354:(t,e,s)=>{"use strict";s.d(e,{O:()=>u});var n=s(1501),i=s(649),o=s(5614),r=s(1116),a=s(3522);const c=function(){return{exact:!0}};function l(t,e){if(1&t&&(o.TgZ(0,"th",4),o.TgZ(1,"a",5),o._uU(2),o.qZA(),o.qZA()),2&t){const t=e.$implicit,s=o.oxw();o.Udp("width",100/s.fusionOptions.length,"%"),o.Q6J("routerLink",t.link)("routerLinkActiveOptions",o.DdM(6,c)),o.xp6(1),o.Q6J("routerLink",t.link),o.xp6(1),o.Oqu(t.title)}}function m(t,e){if(1&t&&(o.TgZ(0,"tr"),o.TgZ(1,"th",6),o._uU(2," DLC marked as excluded in fusion settings, results may be inaccurate! "),o.qZA(),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.uIk("colspan",t.fusionOptions.length)}}function p(t,e){if(1&t&&(o.TgZ(0,"tr"),o.TgZ(1,"th",6),o.Hsn(2),o.qZA(),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.uIk("colspan",t.fusionOptions.length)}}const h=["*"];let u=(()=>{class t{constructor(){this.hasTripleFusion=!1,this.showFusionAlert=!1,this.excludedDlc=!1,this.fusionOptions=t.NORMAL_FUSIONS}ngOnInit(){this.fusionOptions=this.hasTripleFusion?t.TRIPLE_FUSIONS:t.NORMAL_FUSIONS}ngOnChanges(){setTimeout(()=>this.stickyTable.nextEdges())}}return t.NORMAL_FUSIONS=[{title:"Reverse Fusions",link:"fissions"},{title:"Forward Fusions",link:"fusions"}],t.TRIPLE_FUSIONS=[{title:"Normal Reverse Fusions",link:"fissions"},{title:"Triple Reverse Fusions",link:"fissions/triple"},{title:"Triple Forward Fusions",link:"fusions/triple"},{title:"Normal Forward Fusions",link:"fusions"}],t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-smt-fusions"]],viewQuery:function(t,e){if(1&t&&o.Gf(i.v,5),2&t){let t;o.iGM(t=o.CRH())&&(e.stickyTable=t.first)}},inputs:{hasTripleFusion:"hasTripleFusion",showFusionAlert:"showFusionAlert",excludedDlc:"excludedDlc"},features:[o._Bn([n.L]),o.TTD],ngContentSelectors:h,decls:11,vars:3,consts:[["appPositionSticky","",1,"list-table"],["stickyTable",""],["class","nav","routerLinkActive","active",3,"routerLink","width","routerLinkActiveOptions",4,"ngFor","ngForOf"],[4,"ngIf"],["routerLinkActive","active",1,"nav",3,"routerLink","routerLinkActiveOptions"],[3,"routerLink"],[1,"title"]],template:function(t,e){1&t&&(o.F$t(),o.TgZ(0,"div"),o.TgZ(1,"table",0,1),o.TgZ(3,"thead"),o.TgZ(4,"tr"),o.YNc(5,l,3,7,"th",2),o.qZA(),o.YNc(6,m,3,1,"tr",3),o._UZ(7,"tr"),o.YNc(8,p,3,1,"tr",3),o._UZ(9,"tr"),o.qZA(),o.qZA(),o._UZ(10,"router-outlet"),o.qZA()),2&t&&(o.xp6(5),o.Q6J("ngForOf",e.fusionOptions),o.xp6(1),o.Q6J("ngIf",e.excludedDlc),o.xp6(2),o.Q6J("ngIf",e.showFusionAlert))},directives:[i.v,r.sg,r.O5,a.lC,a.Od,a.rH,a.yS],encapsulation:2,changeDetection:0}),t})()},9805:(t,e,s)=>{"use strict";s.d(e,{f:()=>i});var n=s(5614);let i=(()=>{class t{constructor(t,e){this.changeDetector2=t,this.fusionDataService2=e,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.fusionDataService2.compendium.subscribe(t=>{this.changeDetector2.markForCheck(),this.compendium=t,this._dlcDemons=Object.assign({},this.compendium.dlcDemons),this.dlcDemons=Object.entries(this._dlcDemons).map(([t,e])=>({name:t,included:e}))}))}ngOnDestroy(){for(const t of this.subscriptions)t.unsubscribe()}toggleName(t){this._dlcDemons[t]=!this._dlcDemons[t],this.fusionDataService2.nextDlcDemons(this._dlcDemons)}}return t.\u0275fac=function(t){n.$Z()},t.\u0275dir=n.lG2({type:t}),t})()},1670:(t,e,s)=>{"use strict";s.d(e,{V:()=>j});var n=s(3522),i=s(5614),o=s(7089),r=s(1116);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-smt4f-compendium"]],decls:1,vars:1,consts:[[3,"ngClass"]],template:function(t,e){1&t&&i._UZ(0,"app-demon-compendium",0),2&t&&i.Q6J("ngClass","smt4f")},directives:[o.e,r.mk],styles:[".smt4f div.element-icon{height:12px;background-size:12px;background-repeat:no-repeat;background-position:50%;color:transparent}.smt4 div.element-icon.phy{background-image:url(/assets/images/smtsj/phy.png)}.smt4 div.element-icon.gun{background-image:url(/assets/images/smt4f/gun.png)}.smt4 div.element-icon.fir{background-image:url(/assets/images/smtsj/fir.png)}.smt4 div.element-icon.ice{background-image:url(/assets/images/smtsj/ice.png)}.smt4 div.element-icon.ele{background-image:url(/assets/images/smtsj/ele.png)}.smt4 div.element-icon.for{background-image:url(/assets/images/smt4f/force.png)}.smt4 div.element-icon.lig{background-image:url(/assets/images/smtsj/exp.png)}.smt4 div.element-icon.dar{background-image:url(/assets/images/smtsj/cur.png)}.smt4 div.element-icon.ail{background-image:url(/assets/images/smtsj/ail.png)}.smt4 div.element-icon.rec{background-image:url(/assets/images/smtsj/rec.png)}.smt4 div.element-icon.alm{background-image:url(/assets/images/smtsj/alm.png)}.smt4 div.element-icon.sup{background-image:url(/assets/images/smtsj/sup.png)}.smt4 div.element-icon.pas{background-image:url(/assets/images/smtsj/pas.png)}.smt4 div.element-icon.spe{background-image:url(/assets/images/smtsj/spe.png)}.smt4f div.element-icon.phys{background-image:url(/assets/images/smtsj/phy.png)}.smt4f div.element-icon.gun{background-image:url(/assets/images/smt4f/gun.png)}.smt4f div.element-icon.fire{background-image:url(/assets/images/smtsj/fir.png)}.smt4f div.element-icon.ice{background-image:url(/assets/images/smtsj/ice.png)}.smt4f div.element-icon.elec{background-image:url(/assets/images/smtsj/ele.png)}.smt4f div.element-icon.force{background-image:url(/assets/images/smt4f/force.png)}.smt4f div.element-icon.light{background-image:url(/assets/images/smtsj/exp.png)}.smt4f div.element-icon.dark{background-image:url(/assets/images/smtsj/cur.png)}.smt4f div.element-icon.ailment{background-image:url(/assets/images/smtsj/ail.png)}.smt4f div.element-icon.recovery{background-image:url(/assets/images/smtsj/rec.png)}.smt4f div.element-icon.almighty{background-image:url(/assets/images/smtsj/alm.png)}.smt4f div.element-icon.support{background-image:url(/assets/images/smtsj/sup.png)}.smt4f div.element-icon.passive{background-image:url(/assets/images/smtsj/pas.png)}.smt4f div.element-icon.other{background-image:url(/assets/images/smtsj/spe.png)}.smt4f td.affinity-8,.smt4f td.affinity-9{color:red}.smt4f td.affinity-7{color:#ff4500}.smt4f td.affinity-6{color:tomato}.smt4f td.affinity-5{color:coral}.smt4f td.affinity-4{color:#ff8c00}.smt4f td.affinity-3{color:orange}.smt4f td.affinity-2{color:#ffa07a}.smt4f td.affinity-1{color:gold}.smt4f td.affinity0{color:transparent}.smt4f td.affinity1{color:#7cfc00}.smt4f td.affinity2{color:#0f0}.smt4f td.affinity3{color:#00ff7f}.smt4f td.affinity4{color:#00fa9a}.smt4f td.affinity5{color:#32cd32}.smt4f td.affinity6{color:#3cb371}.smt4f td.affinity7{color:#2e8b57}.smt4f td.affinity8{color:#228b22}.smt4 th.nav.active,.smt4 th.nav.active a,.smt4 th.title,.smt4f th.nav.active,.smt4f th.nav.active a,.smt4f th.title{background-color:#fff;color:#000}"],encapsulation:2,changeDetection:0}),t})();var c=s(5438),l=s(9624),m=s(8201),p=s(4008);let h=(()=>{class t extends c.l{constructor(t,e,s){super(t,e,s),this.compConfig=s.compConfig,this.defaultSortFun=(t,e)=>200*(this.compConfig.raceOrder[t.race]-this.compConfig.raceOrder[e.race])+e.lvl-t.lvl,this.appName=`List of Demons - ${s.appName}`}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(l.Dx),i.Y36(i.sBO),i.Y36(m.Y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-demon-list-container"]],features:[i.qOj],decls:2,vars:7,consts:[[3,"raceOrder","statHeaders","resistHeaders","affinityHeaders","rowData"]],template:function(t,e){1&t&&(i._UZ(0,"app-smt-demon-list",0),i.ALo(1,"async")),2&t&&i.Q6J("raceOrder",e.compConfig.raceOrder)("statHeaders",e.compConfig.baseStats)("resistHeaders",e.compConfig.resistElems)("affinityHeaders",e.compConfig.affinityElems)("rowData",i.lcZ(1,5,e.demons))},directives:[p.Q],pipes:[r.Ov],encapsulation:2,changeDetection:0}),t})();var u=s(9261),g=s(3787);let f=(()=>{class t extends u.e{constructor(t,e,s){super(t,e,s),this.appName=`List of Skills - ${s.appName}`,this.compConfig=s.compConfig,this.defaultSortFun=(t,e)=>1e4*(this.compConfig.elemOrder[t.element]-this.compConfig.elemOrder[e.element])+t.rank-e.rank}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(l.Dx),i.Y36(i.sBO),i.Y36(m.Y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-skill-list-container"]],features:[i.qOj],decls:2,vars:5,consts:[[3,"elemOrder","hasTarget","rowData"]],template:function(t,e){1&t&&(i._UZ(0,"app-smt-skill-list",0),i.ALo(1,"async")),2&t&&i.Q6J("elemOrder",e.compConfig.elemOrder)("hasTarget",!0)("rowData",i.lcZ(1,3,e.skills))},directives:[g.J],pipes:[r.Ov],encapsulation:2,changeDetection:0}),t})();var d=s(9805),v=s(8623);let Z=(()=>{class t extends d.f{constructor(t,e){super(t,e),this.changeDetector=t,this.fusionDataService=e,this.appTitle=e.appName}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.sBO),i.Y36(m.Y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-demon-dlc-settings-container"]],features:[i.qOj],decls:1,vars:3,consts:[[3,"dlcDemons","appTitle","dlcTitle","toggledName"]],template:function(t,e){1&t&&(i.TgZ(0,"app-demon-dlc-settings",0),i.NdJ("toggledName",function(t){return e.toggleName(t)}),i.qZA()),2&t&&i.Q6J("dlcDemons",e.dlcDemons)("appTitle",e.appTitle)("dlcTitle","Included DLC Demons")},directives:[v.d],encapsulation:2,changeDetection:0}),t})();var k=s(2573),T=s(858),O=s(4209),b=s(4354),C=s(628),x=s(3015),D=s(4897),y=s(3966);function _(t,e){if(1&t&&i._UZ(0,"app-demon-inherits",7),2&t){const t=i.oxw(2);i.Q6J("hasLvls",!0)("inheritHeaders",t.compConfig.affinityElems)("inherits",t.demon.affinities)}}const A=function(t){return[t]};function q(t,e){if(1&t&&i._UZ(0,"app-fusion-entry-table",8),2&t){const t=i.oxw(2);i.Q6J("title","Evolves From")("baseUrl","..")("rowData",i.VKq(3,A,t.demon.evolvesFrom))}}function N(t,e){if(1&t&&i._UZ(0,"app-fusion-entry-table",8),2&t){const t=i.oxw(2);i.Q6J("title","Evolves To")("baseUrl","..")("rowData",i.VKq(3,A,t.demon.evolvesTo))}}function F(t,e){if(1&t&&(i.ynx(0),i._UZ(1,"app-demon-stats",2),i._UZ(2,"app-demon-resists",3),i.YNc(3,_,1,3,"app-demon-inherits",4),i._UZ(4,"app-demon-skills",5),i.YNc(5,q,1,5,"app-fusion-entry-table",6),i.YNc(6,N,1,5,"app-fusion-entry-table",6),i._UZ(7,"app-smt-fusions"),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("title","Lvl "+t.demon.lvl+" "+t.demon.race+" "+t.demon.name)("price",t.demon.price)("statHeaders",t.compConfig.baseStats)("stats",t.demon.stats),i.xp6(1),i.Q6J("resistHeaders",t.compConfig.resistElems)("resists",t.demon.resists)("ailmentHeaders",t.compConfig.ailmentElems)("ailments",t.demon.ailments),i.xp6(1),i.Q6J("ngIf",t.demon.affinities),i.xp6(1),i.Q6J("hasTarget",!0)("hasRank",!0)("elemOrder",t.compConfig.elemOrder)("compendium",t.compendium)("skillLevels",t.demon.skills),i.xp6(1),i.Q6J("ngIf",t.demon.evolvesFrom),i.xp6(1),i.Q6J("ngIf",t.demon.evolvesTo)}}function I(t,e){if(1&t&&i._UZ(0,"app-demon-missing",9),2&t){const t=i.oxw();i.Q6J("name",t.name)}}let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-demon-entry"]],inputs:{name:"name",demon:"demon",compConfig:"compConfig",compendium:"compendium"},decls:2,vars:2,consts:[[4,"ngIf"],[3,"name",4,"ngIf"],[3,"title","price","statHeaders","stats"],[3,"resistHeaders","resists","ailmentHeaders","ailments"],[3,"hasLvls","inheritHeaders","inherits",4,"ngIf"],[3,"hasTarget","hasRank","elemOrder","compendium","skillLevels"],[3,"title","baseUrl","rowData",4,"ngIf"],[3,"hasLvls","inheritHeaders","inherits"],[3,"title","baseUrl","rowData"],[3,"name"]],template:function(t,e){1&t&&(i.YNc(0,F,8,16,"ng-container",0),i.YNc(1,I,1,1,"app-demon-missing",1)),2&t&&(i.Q6J("ngIf",e.demon),i.xp6(1),i.Q6J("ngIf",!e.demon))},directives:[r.O5,k.O,T.I,O.n,b.O,C.N,x.P,D.t],encapsulation:2,changeDetection:0}),t})(),w=(()=>{class t{constructor(t,e,s,n){this.route=t,this.title=e,this.currentDemonService=s,this.fusionDataService=n,this.subscriptions=[],this.appName="Test App",this.appName=n.appName,this.compConfig=n.compConfig}ngOnInit(){this.subscribeAll()}ngOnDestroy(){for(const t of this.subscriptions)t.unsubscribe()}subscribeAll(){this.subscriptions.push(this.fusionDataService.compendium.subscribe(t=>{this.compendium=t,this.getDemonEntry()})),this.subscriptions.push(this.currentDemonService.currentDemon.subscribe(t=>{this.name=t,this.getDemonEntry()})),this.route.params.subscribe(t=>{this.currentDemonService.nextCurrentDemon(t.demonName)})}getDemonEntry(){this.compendium&&this.name&&(this.title.setTitle(`${this.name} - ${this.appName}`),this.demon=this.compendium.getDemon(this.name))}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(n.gz),i.Y36(l.Dx),i.Y36(y.s),i.Y36(m.Y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-demon-entry-container"]],decls:1,vars:4,consts:[[3,"name","demon","compConfig","compendium"]],template:function(t,e){1&t&&i._UZ(0,"app-demon-entry",0),2&t&&i.Q6J("name",e.name)("demon",e.demon)("compConfig",e.compConfig)("compendium",e.compendium)},directives:[L],encapsulation:2,changeDetection:0}),t})();var U=s(7967);let J=(()=>{class t{constructor(t,e){this.changeDetectorRef=t,this.fusionDataService=e,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.fusionDataService.fusionChart.subscribe(t=>{this.changeDetectorRef.markForCheck(),this.normChart=t}))}ngOnDestroy(){for(const t of this.subscriptions)t.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.sBO),i.Y36(m.Y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-fusion-chart-container"]],decls:1,vars:4,consts:[[3,"normChart","tripChart","normTitle","tripTitle"]],template:function(t,e){1&t&&i._UZ(0,"app-fusion-chart",0),2&t&&i.Q6J("normChart",e.normChart)("tripChart",e.normChart)("normTitle","Light and Neutral Normal Fusions")("tripTitle","Dark Normal Fusions")},directives:[U.R],encapsulation:2,changeDetection:0}),t})();var S=s(5946),Y=s(2060);const Q=[{path:"",redirectTo:"demons",pathMatch:"full"},{path:"",component:a,data:{fusionTool:"chart"},children:[{path:"chart",component:J}]},{path:"",component:a,children:[{path:"demons/:demonName",component:w,children:[{path:"fissions",component:S.t},{path:"fusions",component:Y.$},{path:"**",redirectTo:"fissions",pathMatch:"full"}]},{path:"demons",component:h},{path:"skills",component:f},{path:"settings",component:Z}]},{path:"**",redirectTo:"demons",pathMatch:"full"}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[n.Bz.forChild(Q)],n.Bz]}),t})()},8201:(t,e,s)=>{"use strict";s.d(e,{Y:()=>l});var n=s(8512);class i{constructor(t){this.compConfig=t,this._dlcDemons={Cleopatra:!1,Mephisto:!1},this.initImportedData(),this.updateDerivedData()}initImportedData(){const t={},e={},s={},n={},i=Array(this.compConfig.ailmentElems.length).fill(100),o={1125:[],50:[],0:[]};for(const[r,a]of Object.entries({1125:"Weak",50:"Resist",0:"Null"}))for(const t of this.compConfig.ailmentElems)o[r].push({name:a+" "+t,element:"passive",effect:"Innate resistance",cost:0,rank:99,learnedBy:[],level:0});for(const[r,a]of Object.entries(this.compConfig.demonData))if(t[r]={name:r,race:a.race,lvl:a.lvl,currLvl:a.lvl,skills:a.skills,price:2*a.price,stats:a.stats,resists:a.resists.split("").map(t=>this.compConfig.resistCodes[t]),affinities:a.affinities,ailments:a.ailments?a.ailments.split("").map(t=>this.compConfig.resistCodes[t]):i,fusion:a.fusion||"normal",prereq:a.prereq||""},t[r].ailments){const e=t[r].ailments;for(let t=0;t<e.length;t++)o[e[t]]&&o[e[t]][t].learnedBy.push({demon:r,level:0})}for(const[r,a]of Object.entries(this.compConfig.skillData))e[r]={name:r,element:a.element,rank:a.rank,effect:a.effect,damage:a.damage||"",target:a.target||"",hits:a.hits||"",cost:a.cost||0,learnedBy:[],level:0},e[r].rank||(e[r].rank=99);for(const r of Object.values(o))for(const t of r)e[t.name]=t;for(const[r,a]of Object.entries(this.compConfig.specialRecipes))s[r]=a,"normal"===t[r].fusion&&(t[r].fusion="special");for(const[r,a]of Object.entries(this.compConfig.evolveData)){const e=a.result;t[r].evolvesTo={price:t[e].price,race1:t[e].race,lvl1:a.lvl,name1:e},t[e].evolvesFrom={price:t[r].price,race1:t[r].race,lvl1:a.lvl,name1:r}}for(const r of this.compConfig.races)n[r]={};for(const[r,a]of Object.entries(t))n[a.race][a.lvl]=r;for(const r of Object.values(t))if("enemy"!==r.fusion)for(const t of Object.keys(r.skills))e[t].learnedBy.push({demon:r.name,level:r.skills[t]});this._dlcDemons=this.compConfig.dlcDemons.reduce((t,e)=>(t[e]=!1,t),{}),this.demons=t,this.skills=e,this.specialRecipes=s,this.invertedDemons=n}updateDerivedData(){const t=Object.assign({},this.demons),e=Object.keys(this.skills).map(t=>this.skills[t]),s={},n={};for(const i of this.compConfig.races)s[i]=[],n[i]=[];for(const[i,o]of Object.entries(this.demons))this.isElementDemon(i)||this.isOverlappingResult(i)||s[o.race].push(o.lvl),this.specialRecipes.hasOwnProperty(i)||n[o.race].push(o.lvl);for(const i of this.compConfig.races)s[i].sort((t,e)=>t-e),n[i].sort((t,e)=>t-e);for(const i of this.compConfig.races){const t=s[i],e=n[i],o=t.length,r=e.length;o&&r&&t[o-1]!==e[r-1]&&e.push(100)}for(const[i,o]of Object.entries(this._dlcDemons))if(!o)for(const e of i.split(",")){const{race:i,lvl:o}=this.demons[e];delete t[e],s[i]=s[i].filter(t=>t!==o),n[i]=n[i].filter(t=>t!==o)}this._allDemons=Object.keys(t).map(e=>t[e]),this._allSkills=e,this.allIngredients=s,this.allResults=n}get dlcDemons(){return this._dlcDemons}set dlcDemons(t){this._dlcDemons=t,this.updateDerivedData()}get allDemons(){return this._allDemons}get allSkills(){return this._allSkills}get specialDemons(){return Object.keys(this.specialRecipes).map(t=>this.demons[t])}getDemon(t){return this.demons[t]}getSkill(t){return this.skills[t]}getSkills(t){const e=this.compConfig.elemOrder,s=t.map(t=>this.skills[t]);return s.sort((t,s)=>1e4*(e[t.element]-e[s.element])+t.rank-s.rank),s}getIngredientDemonLvls(t){return this.allIngredients[t]||[]}getResultDemonLvls(t){return this.allResults[t]||[]}getSpecialNameEntries(t){return this.specialRecipes[t]||[]}getSpecialNamePairs(t){return[]}reverseLookupDemon(t,e){return this.invertedDemons[t][e]}reverseLookupSpecial(t){return[]}isElementDemon(t){return"Element"===this.demons[t].race}isOverlappingResult(t){return!1}}var o=s(6829);class r extends o.g{constructor(t){super(),this.lvlModifier=1,this.initCharts(t)}initCharts(t){const e=t.normalTable.races,s=t.normalTable.table,n=t.elementTable.elems,i=t.elementTable.races,r=t.elementTable.table;this.elementDemons=n,this.fusionChart=o.g.loadFusionTableJson(e,s),this.fissionChart=o.g.loadFissionTableJson(e,n,s),this.elementChart=o.g.loadElementTableJson(i,n,r),this.races=e}}var a=s(115),c=s(5614);let l=(()=>{class t{constructor(t){this.fissionCalculator=a.uC,this.fusionCalculator=a.YP,this.compConfig=t,this.appName=t.appTitle+" Fusion Calculator",this._compendium=new i(t),this._compendium$=new n.X(this._compendium),this.compendium=this._compendium$.asObservable(),this._fusionChart=new r(t),this._fusionChart$=new n.X(this._fusionChart),this.fusionChart=this._fusionChart$.asObservable();const e=JSON.parse(localStorage.getItem(t.settingsKey));e&&e.version&&e.version>=t.settingsVersion&&this.nextDlcDemons(e.dlcDemons),window.addEventListener("storage",this.onStorageUpdated.bind(this))}nextDlcDemons(t){localStorage.setItem(this.compConfig.settingsKey,JSON.stringify({version:this.compConfig.settingsVersion,dlcDemons:t})),this._compendium.dlcDemons=t,this._compendium$.next(this._compendium)}onStorageUpdated(t){switch(t.key){case this.compConfig.settingsKey:this._compendium.dlcDemons=JSON.parse(t.newValue).dlcDemons,this._compendium$.next(this._compendium)}}}return t.\u0275fac=function(e){return new(e||t)(c.LFG(a.I7))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac}),t})()},4541:(t,e,s)=>{"use strict";s.d(e,{D:()=>c});var n=s(1116),i=s(5425),o=s(6487),r=s(1670),a=s(5614);let c=(()=>{class t{static forRoot(){return{ngModule:t}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,i.m,o.a,r.V]]}),t})()},5472:t=>{"use strict";t.exports=JSON.parse('{"elems":["Erthys","Aeros","Aquans","Flaemis","Gnome","Sylph","Undine","Salamander"],"races":["Herald","Megami","Avian","Tree","Divine","Flight","Yoma","Nymph","Vile","Raptor","Wood","Deity","Avatar","Holy","Genma","Fairy","Beast","Jirae","Snake","Reaper","Wilder","Jaki","Vermin","Fury","Lady","Dragon","Kishin","Fallen","Brute","Femme","Night","Tyrant","Drake","Spirit","Ghost","Food","Kunitsu"],"table":[[0,0,0,0,0,0,-1,1],[0,0,0,0,0,0,1,-1],[0,0,0,0,-1,1,0,0],[0,0,0,0,1,-1,0,0],[1,-1,1,-1,0,0,0,0],[-1,1,-1,1,0,0,0,0],[-1,1,1,-1,0,0,0,0],[-1,1,1,-1,0,0,0,0],[0,0,0,0,0,0,1,-1],[-1,1,-1,1,0,0,0,0],[1,-1,1,-1,0,0,0,0],[0,0,0,0,0,0,-1,1],[0,0,0,0,0,0,1,-1],[0,0,0,0,-1,1,0,0],[0,0,0,0,0,0,1,-1],[-1,1,1,-1,0,0,0,0],[1,-1,-1,1,0,0,0,0],[1,-1,-1,1,0,0,0,0],[-1,1,-1,1,0,0,0,0],[0,0,0,0,1,-1,0,0],[-1,-1,1,1,0,0,0,0],[1,-1,-1,1,0,0,0,0],[1,-1,1,-1,0,0,0,0],[0,0,0,0,-1,1,0,0],[0,0,0,0,1,-1,0,0],[0,0,0,0,-1,1,0,0],[0,0,0,0,1,-1,0,0],[-1,-1,1,1,0,0,0,0],[1,1,-1,-1,0,0,0,0],[1,-1,-1,1,0,0,0,0],[-1,1,1,-1,0,0,0,0],[0,0,0,0,0,0,-1,1],[1,-1,-1,1,0,0,0,0],[-1,1,1,-1,0,0,0,0],[1,1,-1,-1,0,0,0,0],[1,-1,-1,1,0,0,0,0],[0,0,0,0,0,0,-1,1]]}')}}]);