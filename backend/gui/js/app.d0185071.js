(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,v=[];u<s.length;u++)i=s[u],n[i]&&v.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("bc3a"),o=r.n(n),i={},s=o.a.create(i);s.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),s.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["a"].use(Plugin);Plugin;var c=r("bb71");r("da64");a["a"].use(c["a"],{iconfont:"md"});var l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-toolbar",{attrs:{color:"secondary",dark:"",app:""}},[r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),r("v-spacer"),r("v-toolbar-items",[t.$store.state.denyAccess?t._e():r("v-btn",{attrs:{flat:"",to:"AddProject"}},[r("v-icon",[t._v("add")]),t._v(" Add Project\n      ")],1),t.$store.state.denyAccess?t._e():r("v-btn",{attrs:{flat:"",to:"AddTime"}},[r("v-icon",[t._v("add")]),t._v(" Add Time\n      ")],1),t.$store.state.denyAccess?t._e():r("v-btn",{attrs:{flat:"",to:"TimeReport"}},[r("v-icon",[t._v("list")]),t._v(" Time Report\n      ")],1)],1),r("v-spacer"),r("v-toolbar-items")],1),r("v-content",[r("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.$store.state.dynamicProgress,callback:function(e){t.$set(t.$store.state,"dynamicProgress",e)},expression:"$store.state.dynamicProgress"}},[r("v-card",{attrs:{color:"primary",dark:""}},[r("v-card-text",[t._v("\n          "+t._s(t.$store.state.progressTitle)+"\n          "),r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.$store.state.dialogError,callback:function(e){t.$set(t.$store.state,"dialogError",e)},expression:"$store.state.dialogError"}},[r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("v-toolbar-title",[t._v("\n            "+t._s(t.$store.state.errorTitle)+"\n          ")])],1),r("v-card-text",[t._v("\n          "+t._s(t.$store.state.errorDescription)+"\n        ")]),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){t.$store.state.dialogError=!1}}},[t._v("Ok")])],1)],1)],1),r("router-view")],1),r("v-footer",{attrs:{dark:"",color:"secondary",fixed:t.fixed,app:""}})],1)},d=[],u={name:"App",components:{},data:function(){return{title:"PROJECT TIME TRACKER",fixed:!1}},created:function(){this.$router.push({name:"TimeReport"})}},v=u,p=r("2877"),m=r("6544"),f=r.n(m),h=r("7496"),b=r("8336"),g=r("b0af"),x=r("99d9"),y=r("549c"),j=r("169a"),$=r("553a"),_=r("132d"),k=r("8e36"),D=r("9910"),w=r("71d9"),S=r("2a7f"),P=Object(p["a"])(v,l,d,!1,null,null,null),T=P.exports;f()(P,{VApp:h["a"],VBtn:b["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VContent:y["a"],VDialog:j["a"],VFooter:$["a"],VIcon:_["a"],VProgressLinear:k["a"],VSpacer:D["a"],VToolbar:w["a"],VToolbarItems:S["a"],VToolbarTitle:S["b"]});var V=r("8c4f"),F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-spacer"),r("v-flex",{attrs:{xs12:""}},[r("v-alert",{staticStyle:{width:"500px"},attrs:{type:"success",dismissible:"",transition:"scale-transition"},model:{value:t.alertSuccess,callback:function(e){t.alertSuccess=e},expression:"alertSuccess"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),r("v-alert",{staticStyle:{width:"500px"},attrs:{type:"error",dismissible:"",transition:"scale-transition"},model:{value:t.alertFail,callback:function(e){t.alertFail=e},expression:"alertFail"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),r("v-card",{staticClass:"mx-auto",staticStyle:{"max-width":"1000px"}},[r("v-system-bar",{attrs:{color:"grey darken-2",dark:""}}),r("v-toolbar",{attrs:{color:"grey darken-1",cards:"",dark:"",flat:""}},[r("v-card-title",{staticClass:"title font-weight-regular"},[t._v("Add New Project")])],1),r("v-form",{ref:"form",staticClass:"pa-3 pt-4"},[r("v-layout",{attrs:{column:""}},[r("v-flex",[r("v-text-field",{attrs:{required:"","error-messages":t.nameErrors,box:"",color:"deep-purple",label:"Project Name*"},on:{blur:function(e){return t.$v.name.$touch()},change:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),r("v-text-field",{attrs:{required:"","error-messages":t.codeErrors,box:"",color:"deep-purple",label:"Tracking Code*"},on:{blur:function(e){return t.$v.code.$touch()},change:function(e){return t.$v.code.$touch()}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"event",readonly:""},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},a))]}}]),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[r("v-date-picker",{on:{input:function(e){t.dateMenu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-btn",{staticClass:"white--text",attrs:{disabled:t.$v.$invalid,color:"deep-purple accent-4",depressed:""},on:{click:function(e){return t.addProject()}}},[r("v-icon",{attrs:{left:""}},[t._v("how_to_reg")]),t._v("Add\n          ")],1)],1)],1)],1),r("v-spacer")],1)],1)},M=[],q=(r("28a5"),r("768b")),O=(r("ac6a"),r("456d"),r("7f7f"),r("b5ae")),C="",E={validations:{name:{required:O["required"]},date:{required:O["required"]},code:{required:O["required"]}},data:function(){return{name:"",dateMenu:!1,date:(new Date).toISOString().substr(0,10),code:"",alertFail:!1,alertSuccess:!1,alertMsg:""}},methods:{addProject:function(){var t=this;this.$store.state.dynamicProgress=!0,this.$store.state.progressTitle="Saving Project";var e=new FormData;e.append("name",this.name),e.append("date",this.date),e.append("code",this.code),o.a.post(C+"/addProject/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){Object.keys(t.$v.$params);t.name="",t.code="",t.$store.state.dynamicProgress=!1,t.alertSuccess=!0,t.alertMsg="Project added successfully",setTimeout(function(){t.alertSuccess=!1},3e3)}).catch(function(e){t.$store.state.dynamicProgress=!1,t.alertFail=!0,t.alertMsg="This Project was not added, something went wrong",console.log(e.response.data.error)})}},computed:{dateFormatted:function(){if(!this.date)return null;var t=this.date.split("-"),e=Object(q["a"])(t,3),r=e[0],a=e[1],n=e[2];return"".concat(n,"/").concat(a,"/").concat(r)},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.required&&t.push("Project name is required"),t):t},dateErrors:function(){var t=[];return this.$v.date.$dirty?(!this.$v.date.required&&t.push("Date is required"),t):t},codeErrors:function(){var t=[];return this.$v.code.$dirty?(!this.$v.code.required&&t.push("Tracking Code is required"),t):t}}},A=E,R=r("0798"),I=r("12b2"),H=r("a523"),B=r("2e4b"),z=r("ce7e"),L=r("0e8f"),J=r("4bd4"),N=r("a722"),Y=r("e449"),K=r("afd9"),G=r("2677"),Q=Object(p["a"])(A,F,M,!1,null,null,null),U=Q.exports;f()(Q,{VAlert:R["a"],VBtn:b["a"],VCard:g["a"],VCardActions:x["a"],VCardTitle:I["a"],VContainer:H["a"],VDatePicker:B["a"],VDivider:z["a"],VFlex:L["a"],VForm:J["a"],VIcon:_["a"],VLayout:N["a"],VMenu:Y["a"],VSpacer:D["a"],VSystemBar:K["a"],VTextField:G["a"],VToolbar:w["a"]});var W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-spacer"),r("v-flex",{attrs:{xs12:""}},[r("v-alert",{staticStyle:{width:"500px"},attrs:{type:"success",dismissible:"",transition:"scale-transition"},model:{value:t.alertSuccess,callback:function(e){t.alertSuccess=e},expression:"alertSuccess"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),r("v-alert",{staticStyle:{width:"500px"},attrs:{type:"error",dismissible:"",transition:"scale-transition"},model:{value:t.alertFail,callback:function(e){t.alertFail=e},expression:"alertFail"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),r("v-card",{staticClass:"mx-auto",staticStyle:{"max-width":"1000px"}},[r("v-system-bar",{attrs:{color:"grey darken-2",dark:""}}),r("v-toolbar",{attrs:{color:"grey darken-1",cards:"",dark:"",flat:""}},[r("v-card-title",{staticClass:"title font-weight-regular"},[t._v("Add Time")])],1),r("v-form",{ref:"form",staticClass:"pa-3 pt-4"},[r("v-layout",{attrs:{column:""}},[r("v-flex",[r("v-select",{attrs:{required:"",items:t.projects,"item-text":"name","item-value":"_id","single-line":"",clearable:"","error-messages":t.projectErrors,box:"",label:"Project"},on:{blur:function(e){return t.$v.project.$touch()},change:function(e){return t.$v.project.$touch()}},model:{value:t.project,callback:function(e){t.project=e},expression:"project"}}),r("v-text-field",{attrs:{required:"","error-messages":t.timeErrors,box:"",color:"deep-purple",label:"Time*"},on:{blur:function(e){return t.$v.time.$touch()},change:function(e){return t.$v.time.$touch()}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"event",readonly:""},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},a))]}}]),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[r("v-date-picker",{on:{input:function(e){t.dateMenu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-btn",{staticClass:"white--text",attrs:{disabled:t.$v.$invalid,color:"deep-purple accent-4",depressed:""},on:{click:t.addTime}},[r("v-icon",{attrs:{left:""}},[t._v("how_to_reg")]),t._v("Add\n          ")],1)],1)],1)],1),r("v-spacer")],1)],1)},X=[],Z="",tt={data:function(){return{projects:[]}},methods:{getProjects:function(){var t=this;o.a.get(Z+"/getProjects").then(function(e){t.projects=e.data})}}},et="",rt={mixins:[tt],validations:{date:{required:O["required"]},project:{required:O["required"]},time:{required:O["required"]}},data:function(){return{dateMenu:!1,date:(new Date).toISOString().substr(0,10),project:"",time:"",alertFail:!1,alertSuccess:!1,alertMsg:""}},methods:{addTime:function(){var t=this;this.$store.state.dynamicProgress=!0,this.$store.state.progressTitle="Saving Time";var e=new FormData;e.append("project",this.project),e.append("date",this.date),e.append("time",this.time),o.a.post(et+"/addTime/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){Object.keys(t.$v.$params);t.project="",t.time="",t.$store.state.dynamicProgress=!1,t.alertSuccess=!0,t.alertMsg="Time added successfully",setTimeout(function(){t.alertSuccess=!1},3e3)}).catch(function(e){t.$store.state.dynamicProgress=!1,t.alertFail=!0,t.alertMsg="This Time was not added, something went wrong",console.log(e.response.data.error)})}},computed:{dateFormatted:function(){if(!this.date)return null;var t=this.date.split("-"),e=Object(q["a"])(t,3),r=e[0],a=e[1],n=e[2];return"".concat(n,"/").concat(a,"/").concat(r)},projectErrors:function(){var t=[];return this.$v.project.$dirty?(!this.$v.project.required&&t.push("Project is required"),t):t},dateErrors:function(){var t=[];return this.$v.date.$dirty?(!this.$v.date.required&&t.push("Date is required"),t):t},timeErrors:function(){var t=[];return this.$v.time.$dirty?(!this.$v.time.required&&t.push("Time is required"),t):t}},created:function(){this.getProjects()}},at=rt,nt=r("b56d"),ot=Object(p["a"])(at,W,X,!1,null,null,null),it=ot.exports;f()(ot,{VAlert:R["a"],VBtn:b["a"],VCard:g["a"],VCardActions:x["a"],VCardTitle:I["a"],VContainer:H["a"],VDatePicker:B["a"],VDivider:z["a"],VFlex:L["a"],VForm:J["a"],VIcon:_["a"],VLayout:N["a"],VMenu:Y["a"],VSelect:nt["a"],VSpacer:D["a"],VSystemBar:K["a"],VTextField:G["a"],VToolbar:w["a"]});var st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xs":""}},[t.editDialog?r("v-dialog",{attrs:{persistent:"",width:"530px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[r("v-card",{attrs:{width:"530px"}},[r("v-toolbar",{attrs:{color:"secondary",dark:""}},[r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.editDialog=!1}}},[r("v-icon",[t._v("close")])],1)],1),r("v-card-text",[r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{xs1:""}},[r("v-select",{attrs:{required:"",items:t.projects,"item-text":"name","item-value":"_id","single-line":"",clearable:"","error-messages":t.editProjectErrors,box:"",label:"Project"},on:{blur:function(e){return t.$v.editProject.$touch()},change:function(e){return t.$v.editProject.$touch()}},model:{value:t.editProject,callback:function(e){t.editProject=e},expression:"editProject"}}),r("v-text-field",{attrs:{required:"","error-messages":t.timeErrors,box:"",color:"deep-purple",label:"Time*"},on:{blur:function(e){return t.$v.time.$touch()},change:function(e){return t.$v.time.$touch()}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"event",readonly:""},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},a))]}}],null,!1,490888507),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[r("v-date-picker",{on:{input:function(e){t.dateMenu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1),r("v-card-actions",{staticStyle:{float:"center"}},[r("v-btn",{staticStyle:{color:"white"},attrs:{color:"error"},nativeOn:{click:function(e){t.editDialog=!1}}},[r("v-icon",{attrs:{dark:"",left:""}},[t._v("cancel")]),t._v("Cancel\n        ")],1),r("v-spacer"),r("v-btn",{attrs:{disabled:t.$v.$invalid,color:"primary",dark:""},nativeOn:{click:function(e){return t.saveEdit()}}},[r("v-icon",{attrs:{left:""}},[t._v("save")]),t._v("Save\n        ")],1)],1)],1)],1):t._e(),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-spacer"),r("v-flex",{attrs:{xs2:""}},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"Start Date","prepend-icon":"event",readonly:""},model:{value:t.startDateFormatted,callback:function(e){t.startDateFormatted=e},expression:"startDateFormatted"}},a))]}}]),model:{value:t.startDateMenu,callback:function(e){t.startDateMenu=e},expression:"startDateMenu"}},[r("v-date-picker",{on:{input:function(e){t.startDateMenu=!1}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1)],1),r("v-spacer"),r("v-flex",{attrs:{xs2:""}},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"End Date","prepend-icon":"event",readonly:""},model:{value:t.endDateFormatted,callback:function(e){t.endDateFormatted=e},expression:"endDateFormatted"}},a))]}}]),model:{value:t.endDateMenu,callback:function(e){t.endDateMenu=e},expression:"endDateMenu"}},[r("v-date-picker",{on:{input:function(e){t.endDateMenu=!1}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)],1),r("v-spacer"),r("v-flex",[r("v-select",{attrs:{required:"",items:t.projects,"item-text":"name","item-value":"_id","single-line":"",clearable:"",label:"Project"},model:{value:t.project,callback:function(e){t.project=e},expression:"project"}})],1),r("v-spacer"),r("v-flex",{attrs:{xs2:""}},[r("v-btn",{attrs:{color:"secondary",round:""},on:{click:t.getReport}},[r("v-icon",{attrs:{left:""}},[t._v("list")]),t._v(" Filter\n      ")],1)],1)],1),r("v-alert",{staticStyle:{width:"500px"},attrs:{type:"success",dismissible:"",transition:"scale-transition"},model:{value:t.alertSuccess,callback:function(e){t.alertSuccess=e},expression:"alertSuccess"}},[t._v("\n    "+t._s(t.alertMsg)+"\n  ")]),r("v-alert",{staticStyle:{width:"500px"},attrs:{type:"error",dismissible:"",transition:"scale-transition"},model:{value:t.alertFail,callback:function(e){t.alertFail=e},expression:"alertFail"}},[t._v("\n    "+t._s(t.alertMsg)+"\n  ")]),r("v-data-table",{attrs:{headers:t.reportHeader,items:t.reportRows,"pagination.sync":"pagination","item-key":"id"},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.project))]),r("td",[t._v(t._s(e.item.date))]),r("td",[t._v(t._s(e.item.timeRange))]),r("td",[t._v(t._s(e.item.hours))]),r("td",[r("v-btn",{attrs:{color:"secondary",round:"",icon:""},on:{click:function(r){return t.editTime(e.item)}}},[r("v-icon",[t._v("edit")])],1)],1)]}}])}),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs10:""}}),r("v-flex",{attrs:{xs2:"","align-content-end":""}},[r("b",[t._v("Total "+t._s(t.totalHours)+" Hours")])])],1)],1)},ct=[],lt=(r("6b54"),r("bd86")),dt="",ut={mixins:[tt],validations:{date:{required:O["required"]},editProject:{required:O["required"]},time:{required:O["required"]}},data:function(){var t;return t={startDate:"",endDate:"",timeObject:{},alertFail:!1,alertSuccess:!1,alertMsg:"",editDialog:!1,dateMenu:!1,date:(new Date).toISOString().substr(0,10),editProject:"",project:"",time:""},Object(lt["a"])(t,"project",""),Object(lt["a"])(t,"totalHours","0:00"),Object(lt["a"])(t,"reportRows",[]),Object(lt["a"])(t,"reportHeader",[{text:"Project",value:"project"},{text:"Date",value:"date"},{text:"Time Range",value:"time"},{text:"Hours",value:"hours"}]),Object(lt["a"])(t,"startDateMenu",!1),Object(lt["a"])(t,"endDateMenu",!1),t},methods:{getReport:function(){var t=this;o.a.get(dt+"/getTime?startDate="+this.startDate+"&endDate="+this.endDate+"&project="+this.project).then(function(e){t.reportRows=e.data.rows,t.totalHours=e.data.totalHours})},editTime:function(t){this.timeObject=t,this.editDialog=!0,this.editProject=t.project_id,this.time=t.timeRange;var e=t.date.split("-");this.date=new Date(e[2]+"-"+e[1]+"-"+e[0]).toISOString().substr(0,10)},saveEdit:function(){var t=this;this.$store.state.dynamicProgress=!0,this.$store.state.progressTitle="Saving Time";var e=new FormData;e.append("project",this.editProject),e.append("_id",this.timeObject._id),e.append("date",this.date),e.append("time",this.time),o.a.post(dt+"/updateTime/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){t.editProject="",t.time="",t.editDialog=!1,t.$store.state.dynamicProgress=!1,t.alertSuccess=!0,t.alertMsg="Time added successfully",t.getReport(),setTimeout(function(){t.alertSuccess=!1},3e3)}).catch(function(e){t.$store.state.dynamicProgress=!1,t.alertFail=!0,t.alertMsg="This Time was not added, something went wrong",console.log(e.response.data.error)})},defaultEndDate:function(){var t=new Date,e=t.getMonth()+1;1===e.toString().length&&(e="0"+e);var r=t.getFullYear(),a=new Date(r,e,0).getDate(),n=r+"-"+e+"-"+a;return new Date(n).toISOString().substr(0,10)},defaultStartDate:function(){var t=new Date,e=t.getMonth()+1;1===e.toString().length&&(e="0"+e);var r=t.getFullYear(),a=r+"-"+e+"-01";return new Date(a).toISOString().substr(0,10)}},computed:{startDateFormatted:function(){if(!this.startDate)return null;var t=this.startDate.split("-"),e=Object(q["a"])(t,3),r=e[0],a=e[1],n=e[2];return"".concat(n,"/").concat(a,"/").concat(r)},endDateFormatted:function(){if(!this.endDate)return null;var t=this.endDate.split("-"),e=Object(q["a"])(t,3),r=e[0],a=e[1],n=e[2];return"".concat(n,"/").concat(a,"/").concat(r)},dateFormatted:function(){if(!this.date)return null;var t=this.date.split("-"),e=Object(q["a"])(t,3),r=e[0],a=e[1],n=e[2];return"".concat(n,"/").concat(a,"/").concat(r)},editProjectErrors:function(){var t=[];return this.$v.editProject.$dirty?(!this.$v.editProject.required&&t.push("Project is required"),t):t},dateErrors:function(){var t=[];return this.$v.date.$dirty?(!this.$v.date.required&&t.push("Date is required"),t):t},timeErrors:function(){var t=[];return this.$v.time.$dirty?(!this.$v.time.required&&t.push("Time is required"),t):t}},created:function(){this.startDate=this.defaultStartDate(),this.endDate=this.defaultEndDate(),this.getReport(),this.getProjects()}},vt=ut,pt=r("8fea"),mt=Object(p["a"])(vt,st,ct,!1,null,null,null),ft=mt.exports;f()(mt,{VAlert:R["a"],VBtn:b["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VContainer:H["a"],VDataTable:pt["a"],VDatePicker:B["a"],VDialog:j["a"],VFlex:L["a"],VIcon:_["a"],VLayout:N["a"],VMenu:Y["a"],VSelect:nt["a"],VSpacer:D["a"],VTextField:G["a"],VToolbar:w["a"]}),a["a"].use(V["a"]);var ht=new V["a"]({routes:[{path:"/AddProject",name:"AddProject",component:U},{path:"/AddTime",name:"AddTime",component:it},{path:"/TimeReport",name:"TimeReport",component:ft}]}),bt=ht,gt=r("1dce"),xt=r.n(gt),yt=r("2f62");a["a"].use(yt["a"]);var jt=new yt["a"].Store({state:{dialogError:!1,errorTitle:"",errorDescription:"",dynamicProgress:!1,progressTitle:""}});a["a"].config.productionTip=!1,a["a"].use(xt.a),new a["a"]({router:bt,store:jt,render:function(t){return t(T)}}).$mount("#app")}});
//# sourceMappingURL=app.d0185071.js.map