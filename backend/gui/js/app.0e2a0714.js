(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)s=o[u],n[s]&&m.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bc3a"),i=a.n(n),s={},o=i.a.create(s);o.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),o.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},r["a"].use(Plugin);Plugin;var c=a("bb71");a("da64");r["a"].use(c["a"],{iconfont:"md"});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{color:"secondary",dark:"",app:""}},[a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),a("v-spacer"),a("v-toolbar-items",[t.$store.state.denyAccess?t._e():a("v-btn",{attrs:{flat:"",to:"TrackTime"}},[a("v-icon",[t._v("add")]),t._v(" Start Working\n      ")],1),t.$store.state.denyAccess?t._e():a("v-btn",{attrs:{flat:"",to:"AddTime"}},[a("v-icon",[t._v("add")]),t._v(" Add Time Manually\n      ")],1),t.$store.state.denyAccess?t._e():a("v-btn",{attrs:{flat:"",to:"TimeReport"}},[a("v-icon",[t._v("list")]),t._v(" Time Report\n      ")],1),t.$store.state.denyAccess?t._e():a("v-btn",{attrs:{flat:"",to:"AddProject"}},[a("v-icon",[t._v("add")]),t._v(" Add Project\n      ")],1),t.$store.state.denyAccess?t._e():a("v-btn",{attrs:{flat:"",to:"projectsReport"}},[a("v-icon",[t._v("list")]),t._v(" Projects\n      ")],1)],1),a("v-spacer"),a("v-toolbar-items")],1),a("v-content",[a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.$store.state.dynamicProgress,callback:function(e){t.$set(t.$store.state,"dynamicProgress",e)},expression:"$store.state.dynamicProgress"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n          "+t._s(t.$store.state.progressTitle)+"\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.$store.state.dialogError,callback:function(e){t.$set(t.$store.state,"dialogError",e)},expression:"$store.state.dialogError"}},[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-toolbar-title",[t._v("\n            "+t._s(t.$store.state.errorTitle)+"\n          ")])],1),a("v-card-text",[t._v("\n          "+t._s(t.$store.state.errorDescription)+"\n        ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){t.$store.state.dialogError=!1}}},[t._v("Ok")])],1)],1)],1),a("router-view")],1),a("v-footer",{attrs:{dark:"",color:"secondary",fixed:t.fixed,app:""}})],1)},d=[],u={name:"App",components:{},data:function(){return{title:"PROJECT TIME TRACKER",fixed:!1}},created:function(){this.$router.push({name:"TrackTime"})}},m=u,p=a("2877"),v=a("6544"),h=a.n(v),f=a("7496"),g=a("8336"),b=a("b0af"),x=a("99d9"),D=a("549c"),_=a("169a"),y=a("553a"),k=a("132d"),j=a("8e36"),T=a("9910"),w=a("71d9"),S=a("2a7f"),$=Object(p["a"])(m,l,d,!1,null,null,null),P=$.exports;h()($,{VApp:f["a"],VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VContent:D["a"],VDialog:_["a"],VFooter:y["a"],VIcon:k["a"],VProgressLinear:j["a"],VSpacer:T["a"],VToolbar:w["a"],VToolbarItems:S["a"],VToolbarTitle:S["b"]});var V=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-spacer"),a("v-flex",{attrs:{xs12:""}},[a("v-alert",{staticStyle:{width:"500px"},attrs:{type:"success",dismissible:"",transition:"scale-transition"},model:{value:t.alertSuccess,callback:function(e){t.alertSuccess=e},expression:"alertSuccess"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),a("v-alert",{staticStyle:{width:"500px"},attrs:{type:"error",dismissible:"",transition:"scale-transition"},model:{value:t.alertFail,callback:function(e){t.alertFail=e},expression:"alertFail"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),a("v-card",{staticClass:"mx-auto",staticStyle:{"max-width":"1000px"}},[a("v-system-bar",{attrs:{color:"grey darken-2",dark:""}}),a("v-toolbar",{attrs:{color:"grey darken-1",cards:"",dark:"",flat:""}},[a("v-card-title",{staticClass:"title font-weight-regular"},[t._v("Add New Project")])],1),a("v-form",{ref:"form",staticClass:"pa-3 pt-4"},[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-text-field",{attrs:{required:"","error-messages":t.nameErrors,box:"",color:"deep-purple",label:"Project Name*"},on:{blur:function(e){return t.$v.name.$touch()},change:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{required:"","error-messages":t.codeErrors,box:"",color:"deep-purple",label:"Tracking Code*"},on:{blur:function(e){return t.$v.code.$touch()},change:function(e){return t.$v.code.$touch()}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"event",readonly:""},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},r))]}}]),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[a("v-date-picker",{on:{input:function(e){t.dateMenu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-btn",{staticClass:"white--text",attrs:{disabled:t.$v.$invalid,color:"deep-purple accent-4",depressed:""},on:{click:function(e){return t.addProject()}}},[a("v-icon",{attrs:{left:""}},[t._v("how_to_reg")]),t._v("Add\n          ")],1)],1)],1)],1),a("v-spacer")],1)],1)},F=[],C=(a("28a5"),a("768b")),q=(a("ac6a"),a("456d"),a("7f7f"),a("b5ae")),O="",B={validations:{name:{required:q["required"]},date:{required:q["required"]},code:{required:q["required"]}},data:function(){return{name:"",dateMenu:!1,date:(new Date).toISOString().substr(0,10),code:"",alertFail:!1,alertSuccess:!1,alertMsg:""}},methods:{addProject:function(){var t=this;this.$store.state.dynamicProgress=!0,this.$store.state.progressTitle="Saving Project";var e=new FormData;e.append("name",this.name),e.append("date",this.date),e.append("code",this.code),i.a.post(O+"/addProject/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){Object.keys(t.$v.$params);t.name="",t.code="",t.$store.state.dynamicProgress=!1,t.alertSuccess=!0,t.alertMsg="Project added successfully",setTimeout(function(){t.alertSuccess=!1},3e3)}).catch(function(e){t.$store.state.dynamicProgress=!1,t.alertFail=!0,t.alertMsg="This Project was not added, something went wrong",console.log(e.response.data.error)})}},computed:{dateFormatted:function(){if(!this.date)return null;var t=this.date.split("-"),e=Object(C["a"])(t,3),a=e[0],r=e[1],n=e[2];return"".concat(n,"/").concat(r,"/").concat(a)},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.required&&t.push("Project name is required"),t):t},dateErrors:function(){var t=[];return this.$v.date.$dirty?(!this.$v.date.required&&t.push("Date is required"),t):t},codeErrors:function(){var t=[];return this.$v.code.$dirty?(!this.$v.code.required&&t.push("Tracking Code is required"),t):t}}},E=B,A=a("0798"),R=a("12b2"),I=a("a523"),H=a("2e4b"),z=a("ce7e"),L=a("0e8f"),J=a("4bd4"),N=a("a722"),U=a("e449"),W=a("afd9"),Y=a("2677"),K=Object(p["a"])(E,M,F,!1,null,null,null),G=K.exports;h()(K,{VAlert:A["a"],VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardTitle:R["a"],VContainer:I["a"],VDatePicker:H["a"],VDivider:z["a"],VFlex:L["a"],VForm:J["a"],VIcon:k["a"],VLayout:N["a"],VMenu:U["a"],VSpacer:T["a"],VSystemBar:W["a"],VTextField:Y["a"],VToolbar:w["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-spacer"),a("v-flex",{attrs:{xs12:""}},[a("v-alert",{staticStyle:{width:"500px"},attrs:{type:"success",dismissible:"",transition:"scale-transition"},model:{value:t.alertSuccess,callback:function(e){t.alertSuccess=e},expression:"alertSuccess"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),a("v-alert",{staticStyle:{width:"500px"},attrs:{type:"error",dismissible:"",transition:"scale-transition"},model:{value:t.alertFail,callback:function(e){t.alertFail=e},expression:"alertFail"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),a("v-card",{staticClass:"mx-auto",staticStyle:{"max-width":"1000px"}},[a("v-system-bar",{attrs:{color:"grey darken-2",dark:""}}),a("v-toolbar",{attrs:{color:"grey darken-1",cards:"",dark:"",flat:""}},[t.running||t.timeData.timeBegan?t.running?t._e():a("v-card-title",{staticClass:"title font-weight-regular"},[t._v("Save or Resume Your Paused Tracked Work")]):a("v-card-title",{staticClass:"title font-weight-regular"},[t._v("Select Project First Then Click Start To Begin\n            Working")]),t.running?a("v-card-title",{staticClass:"title font-weight-regular"},[t._v("Your work Is Being Tracked")]):t._e()],1),a("v-form",{ref:"form",staticClass:"pa-3 pt-4"},[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-autocomplete",{attrs:{required:"",items:t.projects,"item-text":"name","item-value":"_id","single-line":"",clearable:"","error-messages":t.projectErrors,box:"",label:"Project*"},on:{blur:function(e){return t.$v.project.$touch()},change:t.projectSelected},model:{value:t.project,callback:function(e){t.project=e},expression:"project"}})],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs10:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-avatar",{attrs:{size:"100",color:"green"}},[a("b",[t._v("\n                        Start Time"),a("br"),t.timeData.time.length>0?[t._v("\n                          "+t._s(t.timeData.time[0].start)+"\n                        ")]:t._e()],2)])],1),a("v-flex",[a("v-avatar",{attrs:{size:"100",color:"red"}},[a("b",[t._v("\n                        End Time"),a("br"),t.timeData.time.length>0?[t._v("\n                          "+t._s(t.timeData.time[t.timeData.time.length-1].end)+"\n                        ")]:t._e()],2)])],1)],1),a("br"),a("span",{staticClass:"time"},[t._v(t._s(t.time))]),t.ready?a("div",{staticClass:"btn-container"},[t.running||t.timeData.timeBegan?t.running?t._e():a("a",{attrs:{id:"start"},on:{click:function(e){return t.start()}}},[t._v("Resume")]):a("a",{attrs:{id:"start"},on:{click:function(e){return t.start()}}},[t._v("Start")]),t.running?a("a",{attrs:{id:"stop"},on:{click:function(e){return t.stop()}}},[t._v("Pause")]):t._e(),t.running||!t.running&&t.timeData.timeBegan?a("a",{attrs:{id:"reset"},on:{click:t.saveTime}},[t._v("Finish Work")]):t._e(),t.timeData.timeBegan?a("a",{attrs:{id:"reset",color:"red"},on:{click:function(e){return t.reset()}}},[t._v("Reset")]):t._e()]):t._e()],1)],1),a("v-flex",[t.timeData.time.length>0?[t._v("\n                Time Laps\n              ")]:t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.timeData.time,function(e,r){return[a("v-flex",{key:r,attrs:{xs3:""}},[a("v-card",{attrs:{color:"grey",dark:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("b",[t._v(t._s(e.date))])]),a("v-card-text",[t._v("\n                        "+t._s(e.start)+" - "+t._s(e.end)+"\n                      ")])],1)],1)]})],2)],2),a("v-flex",[a("v-textarea",{attrs:{label:"What are you working on",box:"",hint:"Tasks"},on:{input:t.tasksAdded},model:{value:t.task,callback:function(e){t.task=e},expression:"task"}})],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-btn",{staticClass:"white--text",attrs:{disabled:t.$v.$invalid,color:"deep-purple accent-4",depressed:""},on:{click:t.saveTime}},[a("v-icon",{attrs:{left:""}},[t._v("how_to_reg")]),t._v("Finish\n          ")],1)],1)],1)],1),a("v-spacer")],1)],1)},X=[],Z=(a("6b54"),""),tt={data:function(){return{projects:[]}},methods:{getProjects:function(t){var e=this;t||(t=""),i.a.get(Z+"/getProjects?status="+t).then(function(t){e.projects=t.data})}}},et="",at={mixins:[tt],validations:{project:{required:q["required"]}},data:function(){return{dateMenu:!1,date:(new Date).toISOString().substr(0,10),project:"",task:"",alertFail:!1,alertSuccess:!1,alertMsg:"",timeInputs:[0],time:"00:00:00.000",timeStarted:"",timeBegan:null,currentTimeBegan:null,timeStopped:null,stoppedDuration:0,started:null,running:!1,timeData:{project:"",tasks:"",worked:"",timeBegan:null,currentTimeBegan:null,timeStopped:null,stoppedDuration:0,running:!1,time:[]}}},methods:{projectSelected:function(){this.$v.project.$touch(),this.timeData.project=this.project,this.updateProgress()},tasksAdded:function(){this.timeData.tasks=this.task},resumeTimer:function(){this.timeBegan=new Date(this.timeData.timeBegan),this.currentTimeBegan=new Date(this.timeData.currentTimeBegan),this.timeStopped=new Date(this.timeData.timeStopped),this.stoppedDuration=this.timeData.stoppedDuration,this.time=this.timeData.worked,this.project=this.timeData.project,this.task=this.timeData.tasks,this.running=this.timeData.running,this.running&&(this.started=setInterval(this.clockRunning,10))},start:function(){this.running||(null===this.timeBegan?(this.timeBegan=new Date,this.timeData.timeBegan=new Date(this.timeBegan),this.timeData.currentTimeBegan=new Date(this.timeBegan),this.currentTimeBegan=new Date(this.timeBegan)):(this.currentTimeBegan=new Date,this.timeData.currentTimeBegan=new Date(this.currentTimeBegan)),null!==this.timeStopped&&(this.stoppedDuration+=new Date-this.timeStopped,this.timeData.stoppedDuration=this.stoppedDuration),this.started=setInterval(this.clockRunning,10),this.timeData.time.push({date:this.currentDate,start:this.formattedStartedTime,end:""}),this.running=!0,this.timeData.running=this.running,this.updateProgress())},stop:function(){if(this.running){for(var t in this.running=!1,this.timeData.running=this.running,this.timeStopped=new Date,this.timeData.timeStopped=new Date(this.timeStopped),clearInterval(this.started),this.timeData.time)this.timeData.time[t].start===this.formattedStartedTime&&(this.timeData.time[t].end=this.formattedEndTime);this.updateProgress()}},reset:function(){this.running=!1,clearInterval(this.started),this.stoppedDuration=0,this.timeBegan=null,this.timeStopped=null,this.time="00:00:00.000",this.project="",this.task="",this.timeData.project="",this.timeData.tasks="",this.timeData.worked="",this.timeData.timeBegan=null,this.timeData.stoppedDuration=0,this.timeData.time=[],this.deleteProgress()},clockRunning:function(){var t=new Date,e=new Date(t-this.timeBegan-this.stoppedDuration),a=e.getUTCHours(),r=e.getUTCMinutes(),n=e.getUTCSeconds(),i=e.getUTCMilliseconds();this.time=this.zeroPrefix(a,2)+":"+this.zeroPrefix(r,2)+":"+this.zeroPrefix(n,2)+"."+this.zeroPrefix(i,3),this.timeData.worked=this.time,this.time&&(document.title=this.time.split(".")[0])},updateProgress:function(){var t=this,e=new FormData;e.append("timeData",JSON.stringify(this.timeData)),i.a.post(et+"/UpdateProgress/",e,{headers:{"Content-Type":"multipart/form-data"}}).catch(function(){t.updateProgress()})},getProgress:function(){var t=this;i.a.get(et+"/getProgress").then(function(e){if(e.data.timeBegan){for(var a in e.data)t.timeData[a]=e.data[a];t.resumeTimer()}})},deleteProgress:function(){var t=this;i.a.delete(et+"/deleteProgress").catch(function(){t.deleteProgress()})},zeroPrefix:function(t,e){for(var a="",r=0;r<e;r++)a+="0";return(a+t).slice(-e)},addRow:function(){this.timeInputs.push(parseInt(this.timeInputs[this.timeInputs.length-1])+1)},removeRow:function(){this.timeInputs.splice(-1)},saveTime:function(){var t=this;this.stop(),this.$store.state.dynamicProgress=!0,this.$store.state.progressTitle="Saving Time";var e=new FormData,a={project:this.project,time:this.timeData.time,task:this.task};e.append("workData",JSON.stringify(a)),i.a.post(et+"/addAutoTime/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){t.reset(),t.project="",t.task="",t.$store.state.dynamicProgress=!1,t.alertSuccess=!0,t.alertMsg="Time added successfully",setTimeout(function(){t.alertSuccess=!1},3e3)}).catch(function(){t.$store.state.dynamicProgress=!1,t.alertFail=!0,t.alertMsg="This Time was not added, something went wrong"})}},computed:{currentDate:function(){var t=parseInt(this.currentTimeBegan.getMonth());return t+=1,1==t.toString().length&&(t="0"+t),this.currentTimeBegan.getDate()+"-"+t+"-"+this.currentTimeBegan.getFullYear()},formattedEndTime:function(){return this.timeStopped?this.zeroPrefix(this.timeStopped.getHours(),2)+":"+this.zeroPrefix(this.timeStopped.getMinutes(),2)+":"+this.zeroPrefix(this.timeStopped.getSeconds(),2):""},formattedStartedTime:function(){return this.currentTimeBegan?this.zeroPrefix(this.currentTimeBegan.getHours(),2)+":"+this.zeroPrefix(this.currentTimeBegan.getMinutes(),2)+":"+this.zeroPrefix(this.currentTimeBegan.getSeconds(),2):""},ready:function(){return!this.$v.$invalid},projectErrors:function(){var t=[];return this.$v.project.$dirty?(!this.$v.project.required&&t.push("Project is required"),t):t}},created:function(){this.getProgress(),this.getProjects("active")}},rt=at,nt=(a("d7cf"),a("c6a6")),it=a("8212"),st=a("a844"),ot=Object(p["a"])(rt,Q,X,!1,null,null,null),ct=ot.exports;h()(ot,{VAlert:A["a"],VAutocomplete:nt["a"],VAvatar:it["a"],VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:R["a"],VContainer:I["a"],VDivider:z["a"],VFlex:L["a"],VForm:J["a"],VIcon:k["a"],VLayout:N["a"],VSpacer:T["a"],VSystemBar:W["a"],VTextarea:st["a"],VToolbar:w["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-spacer"),a("v-flex",{attrs:{xs12:""}},[a("v-alert",{staticStyle:{width:"500px"},attrs:{type:"success",dismissible:"",transition:"scale-transition"},model:{value:t.alertSuccess,callback:function(e){t.alertSuccess=e},expression:"alertSuccess"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),a("v-alert",{staticStyle:{width:"500px"},attrs:{type:"error",dismissible:"",transition:"scale-transition"},model:{value:t.alertFail,callback:function(e){t.alertFail=e},expression:"alertFail"}},[t._v("\n        "+t._s(t.alertMsg)+"\n      ")]),a("v-card",{staticClass:"mx-auto",staticStyle:{"max-width":"1000px"}},[a("v-system-bar",{attrs:{color:"grey darken-2",dark:""}}),a("v-toolbar",{attrs:{color:"grey darken-1",cards:"",dark:"",flat:""}},[a("v-card-title",{staticClass:"title font-weight-regular"},[t._v("Add Time (24 Hours Format)")])],1),a("v-form",{ref:"form",staticClass:"pa-3 pt-4"},[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-autocomplete",{attrs:{required:"",items:t.projects,"item-text":"name","item-value":"_id","single-line":"",clearable:"","error-messages":t.projectErrors,box:"",label:"Project"},on:{blur:function(e){return t.$v.project.$touch()},change:function(e){return t.$v.project.$touch()}},model:{value:t.project,callback:function(e){t.project=e},expression:"project"}}),a("v-text-field",{attrs:{required:"","error-messages":t.timeErrors,box:"",color:"deep-purple",label:"Time*"},on:{blur:function(e){return t.$v.time.$touch()},change:function(e){return t.$v.time.$touch()}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"event",readonly:""},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},r))]}}]),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[a("v-date-picker",{on:{input:function(e){t.dateMenu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-btn",{staticClass:"white--text",attrs:{disabled:t.$v.$invalid,color:"deep-purple accent-4",depressed:""},on:{click:t.addTime}},[a("v-icon",{attrs:{left:""}},[t._v("how_to_reg")]),t._v("Add\n          ")],1)],1)],1)],1),a("v-spacer")],1)],1)},dt=[],ut="",mt={mixins:[tt],validations:{date:{required:q["required"]},project:{required:q["required"]},time:{required:q["required"]}},data:function(){return{dateMenu:!1,date:(new Date).toISOString().substr(0,10),project:"",time:"",alertFail:!1,alertSuccess:!1,alertMsg:""}},methods:{addTime:function(){var t=this;this.$store.state.dynamicProgress=!0,this.$store.state.progressTitle="Saving Time";var e=new FormData;e.append("project",this.project),e.append("date",this.date),e.append("time",this.time),i.a.post(ut+"/addTime/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){t.project="",t.time="",t.$store.state.dynamicProgress=!1,t.alertSuccess=!0,t.alertMsg="Time added successfully",setTimeout(function(){t.alertSuccess=!1},3e3)}).catch(function(){t.$store.state.dynamicProgress=!1,t.alertFail=!0,t.alertMsg="This Time was not added, something went wrong"})}},computed:{dateFormatted:function(){if(!this.date)return null;var t=this.date.split("-"),e=Object(C["a"])(t,3),a=e[0],r=e[1],n=e[2];return"".concat(n,"/").concat(r,"/").concat(a)},projectErrors:function(){var t=[];return this.$v.project.$dirty?(!this.$v.project.required&&t.push("Project is required"),t):t},dateErrors:function(){var t=[];return this.$v.date.$dirty?(!this.$v.date.required&&t.push("Date is required"),t):t},timeErrors:function(){var t=[];return this.$v.time.$dirty?(!this.$v.time.required&&t.push("Time is required"),t):t}},created:function(){this.getProjects("active")}},pt=mt,vt=Object(p["a"])(pt,lt,dt,!1,null,null,null),ht=vt.exports;h()(vt,{VAlert:A["a"],VAutocomplete:nt["a"],VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardTitle:R["a"],VContainer:I["a"],VDatePicker:H["a"],VDivider:z["a"],VFlex:L["a"],VForm:J["a"],VIcon:k["a"],VLayout:N["a"],VMenu:U["a"],VSpacer:T["a"],VSystemBar:W["a"],VTextField:Y["a"],VToolbar:w["a"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[t.editDialog?a("v-dialog",{attrs:{persistent:"",width:"530px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-card",{attrs:{width:"530px"}},[a("v-toolbar",{attrs:{color:"secondary",dark:""}},[a("v-spacer"),a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.editDialog=!1}}},[a("v-icon",[t._v("close")])],1)],1),a("v-card-text",[a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs1:""}},[a("v-autocomplete",{attrs:{required:"",items:t.projects,"item-text":"name","item-value":"_id","single-line":"",clearable:"","error-messages":t.editProjectErrors,box:"",label:"Project"},on:{blur:function(e){return t.$v.editProject.$touch()},change:function(e){return t.$v.editProject.$touch()}},model:{value:t.editProject,callback:function(e){t.editProject=e},expression:"editProject"}}),a("v-text-field",{attrs:{required:"","error-messages":t.timeErrors,box:"",color:"deep-purple",label:"Time*"},on:{blur:function(e){return t.$v.time.$touch()},change:function(e){return t.$v.time.$touch()}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"event",readonly:""},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},r))]}}],null,!1,490888507),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[a("v-date-picker",{on:{input:function(e){t.dateMenu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1),a("v-card-actions",{staticStyle:{float:"center"}},[a("v-btn",{staticStyle:{color:"white"},attrs:{color:"error"},nativeOn:{click:function(e){t.editDialog=!1}}},[a("v-icon",{attrs:{dark:"",left:""}},[t._v("cancel")]),t._v("Cancel\n        ")],1),a("v-spacer"),a("v-btn",{attrs:{disabled:t.$v.$invalid,color:"primary",dark:""},nativeOn:{click:function(e){return t.saveEdit()}}},[a("v-icon",{attrs:{left:""}},[t._v("save")]),t._v("Save\n        ")],1)],1)],1)],1):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-spacer"),a("v-flex",{attrs:{xs2:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-text-field",t._g({attrs:{label:"Start Date","prepend-icon":"event",readonly:""},model:{value:t.startDateFormatted,callback:function(e){t.startDateFormatted=e},expression:"startDateFormatted"}},r))]}}]),model:{value:t.startDateMenu,callback:function(e){t.startDateMenu=e},expression:"startDateMenu"}},[a("v-date-picker",{on:{input:function(e){t.startDateMenu=!1}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1)],1),a("v-spacer"),a("v-flex",{attrs:{xs2:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-text-field",t._g({attrs:{label:"End Date","prepend-icon":"event",readonly:""},model:{value:t.endDateFormatted,callback:function(e){t.endDateFormatted=e},expression:"endDateFormatted"}},r))]}}]),model:{value:t.endDateMenu,callback:function(e){t.endDateMenu=e},expression:"endDateMenu"}},[a("v-date-picker",{on:{input:function(e){t.endDateMenu=!1}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)],1),a("v-spacer"),a("v-flex",[a("v-autocomplete",{attrs:{required:"",items:t.projects,"item-text":"name","item-value":"_id","single-line":"",clearable:"",label:"Project"},model:{value:t.project,callback:function(e){t.project=e},expression:"project"}})],1),a("v-spacer"),a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{color:"secondary",round:""},on:{click:t.getReport}},[a("v-icon",{attrs:{left:""}},[t._v("list")]),t._v(" Filter\n      ")],1)],1)],1),a("v-alert",{staticStyle:{width:"500px"},attrs:{type:"success",dismissible:"",transition:"scale-transition"},model:{value:t.alertSuccess,callback:function(e){t.alertSuccess=e},expression:"alertSuccess"}},[t._v("\n    "+t._s(t.alertMsg)+"\n  ")]),a("v-alert",{staticStyle:{width:"500px"},attrs:{type:"error",dismissible:"",transition:"scale-transition"},model:{value:t.alertFail,callback:function(e){t.alertFail=e},expression:"alertFail"}},[t._v("\n    "+t._s(t.alertMsg)+"\n  ")]),a("v-data-table",{attrs:{headers:t.reportHeader,items:t.reportRows,"pagination.sync":"pagination","item-key":"id"},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.project))]),a("td",[t._v(t._s(e.item.date))]),a("td",[t._v(t._s(e.item.timeRange))]),a("td",[t._v(t._s(e.item.durationHours))]),a("td",[t._v(t._s(e.item.durationMinutes))]),a("td",[t._v(t._s(e.item.durationSeconds))]),a("td",[a("v-btn",{attrs:{color:"secondary",round:"",icon:""},on:{click:function(a){return t.editTime(e.item)}}},[a("v-icon",[t._v("edit")])],1)],1)]}}])}),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs2:"","align-content-end":""}},[a("b",[t._v("Total "+t._s(t.totalDurationHours)+" Hours")])]),a("v-flex",{attrs:{xs2:"","align-content-end":""}},[a("b",[t._v("Total "+t._s(t.totalDurationMinutes)+" Minutes")])]),a("v-flex",{attrs:{xs2:"","align-content-end":""}},[a("b",[t._v("Total "+t._s(t.totalDurationSeconds)+" Seconds")])]),a("v-flex",{attrs:{xs2:"","align-content-end":""}},[a("b",[t._v("Total "+t._s(t.totalHours)+" Hours:Minutes")])])],1)],1)},gt=[],bt=a("bd86"),xt="",Dt={mixins:[tt],validations:{date:{required:q["required"]},editProject:{required:q["required"]},time:{required:q["required"]}},data:function(){var t;return t={startDate:"",endDate:"",timeObject:{},alertFail:!1,alertSuccess:!1,alertMsg:"",editDialog:!1,dateMenu:!1,date:(new Date).toISOString().substr(0,10),editProject:"",project:"",time:""},Object(bt["a"])(t,"project",""),Object(bt["a"])(t,"totalHours","0:00"),Object(bt["a"])(t,"totalDurationHours",""),Object(bt["a"])(t,"totalDurationMinutes",""),Object(bt["a"])(t,"totalDurationSeconds",""),Object(bt["a"])(t,"reportRows",[]),Object(bt["a"])(t,"reportHeader",[{text:"Project",value:"project"},{text:"Date",value:"date"},{text:"Time Range",value:"time"},{text:"Hours",value:"hours"},{text:"Minutes",value:"minutes"},{text:"Seconds",value:"seconds"}]),Object(bt["a"])(t,"startDateMenu",!1),Object(bt["a"])(t,"endDateMenu",!1),t},methods:{getReport:function(){var t=this;i.a.get(xt+"/getTime?startDate="+this.startDate+"&endDate="+this.endDate+"&project="+this.project).then(function(e){t.reportRows=e.data.rows,t.totalHours=e.data.totalHours,t.totalDurationHours=e.data.totalDurationHours,t.totalDurationMinutes=e.data.totalDurationMinutes,t.totalDurationSeconds=e.data.totalDurationSeconds})},editTime:function(t){this.timeObject=t,this.editDialog=!0,this.editProject=t.project_id,this.time=t.timeRange;var e=t.date.split("-");this.date=new Date(e[2]+"-"+e[1]+"-"+e[0]).toISOString().substr(0,10)},saveEdit:function(){var t=this;this.$store.state.dynamicProgress=!0,this.$store.state.progressTitle="Saving Time";var e=new FormData;e.append("project",this.editProject),e.append("_id",this.timeObject._id),e.append("date",this.date),e.append("time",this.time),i.a.post(xt+"/updateTime/",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){t.editProject="",t.time="",t.editDialog=!1,t.$store.state.dynamicProgress=!1,t.alertSuccess=!0,t.alertMsg="Time added successfully",t.getReport(),setTimeout(function(){t.alertSuccess=!1},3e3)}).catch(function(e){t.$store.state.dynamicProgress=!1,t.alertFail=!0,t.alertMsg="This Time was not added, something went wrong",console.log(e.response.data.error)})},defaultEndDate:function(){var t=new Date,e=t.getMonth()+1;1===e.toString().length&&(e="0"+e);var a=t.getFullYear(),r=new Date(a,e,0).getDate(),n=a+"-"+e+"-"+r;return new Date(n).toISOString().substr(0,10)},defaultStartDate:function(){var t=new Date,e=t.getMonth()+1;1===e.toString().length&&(e="0"+e);var a=t.getFullYear(),r=a+"-"+e+"-01";return new Date(r).toISOString().substr(0,10)}},computed:{startDateFormatted:function(){if(!this.startDate)return null;var t=this.startDate.split("-"),e=Object(C["a"])(t,3),a=e[0],r=e[1],n=e[2];return"".concat(n,"/").concat(r,"/").concat(a)},endDateFormatted:function(){if(!this.endDate)return null;var t=this.endDate.split("-"),e=Object(C["a"])(t,3),a=e[0],r=e[1],n=e[2];return"".concat(n,"/").concat(r,"/").concat(a)},dateFormatted:function(){if(!this.date)return null;var t=this.date.split("-"),e=Object(C["a"])(t,3),a=e[0],r=e[1],n=e[2];return"".concat(n,"/").concat(r,"/").concat(a)},editProjectErrors:function(){var t=[];return this.$v.editProject.$dirty?(!this.$v.editProject.required&&t.push("Project is required"),t):t},dateErrors:function(){var t=[];return this.$v.date.$dirty?(!this.$v.date.required&&t.push("Date is required"),t):t},timeErrors:function(){var t=[];return this.$v.time.$dirty?(!this.$v.time.required&&t.push("Time is required"),t):t}},created:function(){this.startDate=this.defaultStartDate(),this.endDate=this.defaultEndDate(),this.getReport(),this.getProjects()}},_t=Dt,yt=a("8fea"),kt=Object(p["a"])(_t,ft,gt,!1,null,null,null),jt=kt.exports;h()(kt,{VAlert:A["a"],VAutocomplete:nt["a"],VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VContainer:I["a"],VDataTable:yt["a"],VDatePicker:H["a"],VDialog:_["a"],VFlex:L["a"],VIcon:k["a"],VLayout:N["a"],VMenu:U["a"],VSpacer:T["a"],VTextField:Y["a"],VToolbar:w["a"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-data-table",{attrs:{headers:t.reportHeader,items:t.reportRows,"pagination.sync":"pagination","item-key":"id"},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.name))]),a("td",[t._v(t._s(e.item.code))]),a("td",[t._v(t._s(e.item.status))]),a("td",["active"===e.item.status?a("v-btn",{attrs:{color:"secondary",round:"",small:""},on:{click:function(a){return t.changeStatus(e.item._id,"inactive")}}},[a("v-icon",[t._v("edit")]),t._v("\n          Deactivate\n        ")],1):a("v-btn",{attrs:{color:"secondary",round:"",small:""},on:{click:function(a){return t.changeStatus(e.item._id,"active")}}},[a("v-icon",[t._v("edit")]),t._v("\n          Activate\n        ")],1)],1)]}}])})],1)},wt=[],St="",$t={data:function(){return{reportRows:[],reportHeader:[{text:"Name",value:"name"},{text:"Code",value:"code"},{text:"Status",value:"status"}]}},methods:{getReport:function(){var t=this;i.a.get(St+"/getProjects").then(function(e){t.reportRows=e.data})},changeStatus:function(t,e){var a=this;this.$store.state.dynamicProgress=!0,this.$store.state.progressTitle="Changing Status";var r=new FormData;r.append("id",t),r.append("status",e),i.a.post(St+"/changeProjectStatus/",r,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){a.$store.state.dynamicProgress=!1,a.getReport()}).catch(function(t){a.$store.state.dynamicProgress=!1,console.log(t.response.data.error)})}},created:function(){this.getReport()}},Pt=$t,Vt=Object(p["a"])(Pt,Tt,wt,!1,null,null,null),Mt=Vt.exports;h()(Vt,{VBtn:g["a"],VContainer:I["a"],VDataTable:yt["a"],VIcon:k["a"]}),r["a"].use(V["a"]);var Ft=new V["a"]({routes:[{path:"/AddProject",name:"AddProject",component:G},{path:"/TrackTime",name:"TrackTime",component:ct},{path:"/AddTime",name:"AddTime",component:ht},{path:"/TimeReport",name:"TimeReport",component:jt},{path:"/ProjectsReport",name:"ProjectsReport",component:Mt}]}),Ct=Ft,qt=a("1dce"),Ot=a.n(qt),Bt=a("2f62");r["a"].use(Bt["a"]);var Et=new Bt["a"].Store({state:{dialogError:!1,errorTitle:"",errorDescription:"",dynamicProgress:!1,progressTitle:""}});a.d(e,"eventBus",function(){return At});var At=new r["a"];r["a"].config.productionTip=!1,r["a"].use(Ot.a),new r["a"]({router:Ct,store:Et,render:function(t){return t(P)}}).$mount("#app")},ba61:function(t,e,a){},d7cf:function(t,e,a){"use strict";a("ba61")}});
//# sourceMappingURL=app.0e2a0714.js.map