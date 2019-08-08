(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],r[a]&&f.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},i=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0dd83f":"310eab17"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,o[1](a)}r[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/todo_web_app/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a=(o("5c0b"),o("2877")),s={},c=Object(a["a"])(s,r,i,!1,null,null,null),u=c.exports,l=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home"}},[o("main",{attrs:{id:"todolist"}},[t._m(0),o("form",{class:t.formError?"error":"",attrs:{name:"newform"},on:{submit:function(e){return e.preventDefault(),t.addItem(e)}}},[o("label",{attrs:{for:"newitem"}},[t._v("Add to the todo list")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newitem,expression:"newitem"}],attrs:{type:"text",name:"newitem",id:"newitem",placeholder:t.formError?"Please enter a value here.":""},domProps:{value:t.newitem},on:{input:function(e){e.target.composing||(t.newitem=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Add item")])]),o("div",{staticClass:"tabgroup"},[o("div",{staticClass:"button-group"},[o("button",{class:"allTasks"===t.activeTab?"active":"",on:{click:function(e){t.activeTab="allTasks"}}},[t._v("All")]),o("button",{class:"completed"===t.activeTab?"active":"",on:{click:function(e){t.activeTab="completed"}}},[t._v("Completed")]),o("button",{class:"incomplete"===t.activeTab?"active":"",on:{click:function(e){t.activeTab="incomplete"}}},[t._v("Incomplete")])])]),t.todosToBind.length?["allTasks"===t.activeTab?o("toggle-button",{attrs:{label:"Move done items at the end?",name:"todosort",sortByStatus:t.sortByStatus},on:{clicked:t.clickontoogle}}):t._e(),o("transition-group",{attrs:{name:"todolist",tag:"ul"}},t._l(t.todosToBind,function(e){return o("li",{key:e.id,class:e.done?"done":""},[o("span",{staticClass:"label"},[t._v(t._s(e.label))]),o("div",{staticClass:"actions"},[o("button",{staticClass:"btn-picto",attrs:{type:"button","aria-label":e.done?"Undone":"Done",title:e.done?"Undone":"Done"},on:{click:function(o){return t.markAsDoneOrUndone(e)}}},[o("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v(t._s(e.done?"check_box":"check_box_outline_blank"))])]),o("button",{staticClass:"btn-picto",attrs:{type:"button","aria-label":"Delete",title:"Delete"},on:{click:function(o){return t.deleteItemFromList(e)}}},[o("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v("delete")])])])])}),0)]:o("p",{staticClass:"emptylist"},[t._v("Your task list is empty.")])],2)])},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[t._v("\n      Todo List\n      "),o("span",[t._v("Get things done, one item at a time.")])])}],p=(o("8e6e"),o("ac6a"),o("456d"),o("55dd"),o("75fc")),m=o("bd86"),b=o("2f62");function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(o,!0).forEach(function(e){Object(m["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var g=function(){return o.e("chunk-2d0dd83f").then(o.bind(null,"825d"))},y={name:"todo_app",components:{ToggleButton:g},data:function(){return{formError:!1,newitem:"",activeTab:"allTasks"}},methods:h({},Object(b["b"])(["addToDo","markTask","deleteFromList","updateSortByState"]),{addItem:function(){this.newitem.length<=0?this.formError=!0:(this.addToDo({id:this.allToDoCount+1,label:this.newitem,done:!1,createdAt:(new Date).getTime()}),this.newitem="",this.formError=!1)},markAsDoneOrUndone:function(t){this.markTask(t)},deleteItemFromList:function(t){this.deleteFromList(t)},clickontoogle:function(t){this.updateSortByState(t)}}),computed:h({},Object(b["c"])(["allTodos","doneTodos","notDoneTodos","doneTodosCount","notDoneTodosCount","allToDoCount","sortByStatus"]),{allToDosList:function(){if(this.sortByStatus){var t=JSON.parse(JSON.stringify(this.notDoneTodos)),e=JSON.parse(JSON.stringify(this.doneTodos));return[].concat(Object(p["a"])(t.sort(function(t,e){return t.createdAt<e.createdAt?1:-1})),Object(p["a"])(e.sort(function(t,e){return t.completedAt<e.completedAt?1:-1})))}var o=JSON.parse(JSON.stringify(this.allTodos));return o.sort(function(t,e){return t.createdAt<e.createdAt?1:-1})},todosToBind:function(){if("allTasks"===this.activeTab)return this.allToDosList;if("completed"===this.activeTab){var t=JSON.parse(JSON.stringify(this.doneTodos));return t.sort(function(t,e){return t.completedAt<e.completedAt?1:-1})}var e=JSON.parse(JSON.stringify(this.notDoneTodos));return e.sort(function(t,e){return t.createdAt<e.createdAt?1:-1})}})},T=y,w=Object(a["a"])(T,d,f,!1,null,null,null),O=w.exports;n["a"].use(l["a"]);var k=new l["a"]({mode:"history",base:"/todo_web_app/",routes:[{path:"/",name:"home",component:O}]}),_=(o("7514"),o("bfa9"));n["a"].use(b["a"]);var S=new _["a"]({key:"local-storage",storage:localStorage}),D=new b["a"].Store({state:{todos:[],sortByStatus:!1},getters:{doneTodos:function(t){return t.todos.filter(function(t){return t.done})},notDoneTodos:function(t){return t.todos.filter(function(t){return!t.done})},doneTodosCount:function(t){return t.todos.filter(function(t){return t.done}).length},notDoneTodosCount:function(t){return t.todos.filter(function(t){return!t.done}).length},allToDoCount:function(t){return t.todos.length},allTodos:function(t){return t.todos},sortByStatus:function(t){return t.sortByStatus}},mutations:{mutationAddToDo:function(t,e){t.todos.push(e)},mutationMarkAsDoneOrUndone:function(t,e){var o=t.todos.find(function(t){return t.id===e.id});o.done||(o.completedAt=(new Date).getTime()),o.done=!o.done},mutationDeleteItemFromList:function(t,e){t.todos=t.todos.filter(function(t){return t.id!==e.id})},mutationUpdateSortByState:function(t,e){t.sortByStatus=e}},actions:{addToDo:function(t,e){var o=t.commit;o("mutationAddToDo",e)},markTask:function(t,e){var o=t.commit;o("mutationMarkAsDoneOrUndone",e)},deleteFromList:function(t,e){var o=t.commit;o("mutationDeleteItemFromList",e)},updateSortByState:function(t,e){var o=t.commit;o("mutationUpdateSortByState",e)}},plugins:[S.plugin]}),j=o("9483");Object(j["a"])("".concat("/todo_web_app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({router:k,store:D,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),r=o.n(n);r.a},"5e27":function(t,e,o){}});
//# sourceMappingURL=app.15c815b2.js.map