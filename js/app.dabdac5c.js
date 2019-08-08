(function (t) { function e(e) { for (var n, a, s = e[0], c = e[1], u = e[2], l = 0, f = []; l < s.length; l++)a = s[l], r[a] && f.push(r[a][0]), r[a] = 0; for (n in c)Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]); d && d(e); while (f.length)f.shift()(); return i.push.apply(i, u || []), o(); } function o() { for (var t, e = 0; e < i.length; e++) { for (var o = i[e], n = !0, a = 1; a < o.length; a++) { const c = o[a]; r[c] !== 0 && (n = !1); }n && (i.splice(e--, 1), t = s(s.s = o[0])); } return t; } const n = {}; var r = { app: 0 }; var i = []; function a(t) { return `${s.p}js/${{}[t] || t}.${{ 'chunk-2d0dd83f': '310eab17' }[t]}.js`; } function s(e) { if (n[e]) return n[e].exports; const o = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(o.exports, o, o.exports, s), o.l = !0, o.exports; }s.e = function (t) { const e = []; let o = r[t]; if (o !== 0) if (o)e.push(o[2]); else { const n = new Promise(((e, n) => { o = r[t] = [e, n]; })); e.push(o[2] = n); let i; const c = document.createElement('script'); c.charset = 'utf-8', c.timeout = 120, s.nc && c.setAttribute('nonce', s.nc), c.src = a(t), i = function (e) { c.onerror = c.onload = null, clearTimeout(u); const o = r[t]; if (o !== 0) { if (o) { const n = e && (e.type === 'load' ? 'missing' : e.type); const i = e && e.target && e.target.src; const a = new Error(`Loading chunk ${t} failed.\n(${n}: ${i})`); a.type = n, a.request = i, o[1](a); }r[t] = void 0; } }; var u = setTimeout(() => { i({ type: 'timeout', target: c }); }, 12e4); c.onerror = c.onload = i, document.head.appendChild(c); } return Promise.all(e); }, s.m = t, s.c = n, s.d = function (t, e, o) { s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }); }, s.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, s.t = function (t, e) { if (1 & e && (t = s(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const o = Object.create(null); if (s.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const n in t)s.d(o, n, (e => t[e]).bind(null, n)); return o; }, s.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return s.d(e, 'a', e), e; }, s.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, s.p = '/<todo_web_app>/', s.oe = function (t) { throw console.error(t), t; }; let c = window.webpackJsonp = window.webpackJsonp || []; const u = c.push.bind(c); c.push = e, c = c.slice(); for (let l = 0; l < c.length; l++)e(c[l]); var d = u; i.push([0, 'chunk-vendors']), o(); }({
  0(t, e, o) { t.exports = o('56d7'); },
  '56d7': function (t, e, o) {
    o.r(e); o('cadf'), o('551c'), o('f751'), o('097d'); const n = o('2b0e'); const r = function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { attrs: { id: 'app' } }, [o('router-view')], 1); }; const i = []; const a = (o('5c0b'), o('2877')); const s = {}; const c = Object(a.a)(s, r, i, !1, null, null, null); const u = c.exports; const l = o('8c4f'); const d = function () {
      const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { attrs: { id: 'home' } }, [o('main', { attrs: { id: 'todolist' } }, [t._m(0), o('form', { class: t.formError ? 'error' : '', attrs: { name: 'newform' }, on: { submit(e) { return e.preventDefault(), t.addItem(e); } } }, [o('label', { attrs: { for: 'newitem' } }, [t._v('Add to the todo list')]), o('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.newitem, expression: 'newitem',
        }],
        attrs: {
          type: 'text', name: 'newitem', id: 'newitem', placeholder: t.formError ? 'Please enter a value here.' : '',
        },
        domProps: { value: t.newitem },
        on: { input(e) { e.target.composing || (t.newitem = e.target.value); } },
      }), o('button', { attrs: { type: 'submit' } }, [t._v('Add item')])]), o('div', { staticClass: 'tabgroup' }, [o('div', { staticClass: 'button-group' }, [o('button', { class: t.activeTab === 'allTasks' ? 'active' : '', on: { click(e) { t.activeTab = 'allTasks'; } } }, [t._v('All')]), o('button', { class: t.activeTab === 'completed' ? 'active' : '', on: { click(e) { t.activeTab = 'completed'; } } }, [t._v('Completed')]), o('button', { class: t.activeTab === 'incomplete' ? 'active' : '', on: { click(e) { t.activeTab = 'incomplete'; } } }, [t._v('Incomplete')])])]), t.todosToBind.length ? [t.activeTab === 'allTasks' ? o('toggle-button', { attrs: { label: 'Move done items at the end?', name: 'todosort', sortByStatus: t.sortByStatus }, on: { clicked: t.clickontoogle } }) : t._e(), o('transition-group', { attrs: { name: 'todolist', tag: 'ul' } }, t._l(t.todosToBind, e => o('li', { key: e.id, class: e.done ? 'done' : '' }, [o('span', { staticClass: 'label' }, [t._v(t._s(e.label))]), o('div', { staticClass: 'actions' }, [o('button', { staticClass: 'btn-picto', attrs: { type: 'button', 'aria-label': e.done ? 'Undone' : 'Done', title: e.done ? 'Undone' : 'Done' }, on: { click(o) { return t.markAsDoneOrUndone(e); } } }, [o('i', { staticClass: 'material-icons', attrs: { 'aria-hidden': 'true' } }, [t._v(t._s(e.done ? 'check_box' : 'check_box_outline_blank'))])]), o('button', { staticClass: 'btn-picto', attrs: { type: 'button', 'aria-label': 'Delete', title: 'Delete' }, on: { click(o) { return t.deleteItemFromList(e); } } }, [o('i', { staticClass: 'material-icons', attrs: { 'aria-hidden': 'true' } }, [t._v('delete')])])])])), 0)] : o('p', { staticClass: 'emptylist' }, [t._v('Your task list is empty.')])], 2)]);
    }; const f = [function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('h1', [t._v('\n      Todo List\n      '), o('span', [t._v('Get things done, one item at a time.')])]); }]; const p = (o('8e6e'), o('ac6a'), o('456d'), o('55dd'), o('75fc')); const m = o('bd86'); const b = o('2f62'); function v(t, e) { const o = Object.keys(t); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(t); e && (n = n.filter(e => Object.getOwnPropertyDescriptor(t, e).enumerable)), o.push.apply(o, n); } return o; } function h(t) { for (let e = 1; e < arguments.length; e++) { var o = arguments[e] != null ? arguments[e] : {}; e % 2 ? v(o, !0).forEach((e) => { Object(m.a)(t, e, o[e]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : v(o).forEach((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e)); }); } return t; } const g = function () { return o.e('chunk-2d0dd83f').then(o.bind(null, '825d')); }; const y = {
      name: 'todo_app',
      components: { ToggleButton: g },
      data() { return { formError: !1, newitem: '', activeTab: 'allTasks' }; },
      methods: h({}, Object(b.b)(['addToDo', 'markTask', 'deleteFromList', 'updateSortByState']), {
        addItem() {
          this.newitem.length <= 0 ? this.formError = !0 : (this.addToDo({
            id: this.allToDoCount + 1, label: this.newitem, done: !1, createdAt: (new Date()).getTime(),
          }), this.newitem = '', this.formError = !1);
        },
        markAsDoneOrUndone(t) { this.markTask(t); },
        deleteItemFromList(t) { this.deleteFromList(t); },
        clickontoogle(t) { this.updateSortByState(t); },
      }),
      computed: h({}, Object(b.c)(['allTodos', 'doneTodos', 'notDoneTodos', 'doneTodosCount', 'notDoneTodosCount', 'allToDoCount', 'sortByStatus']), { allToDosList() { if (this.sortByStatus) { const t = JSON.parse(JSON.stringify(this.notDoneTodos)); const e = JSON.parse(JSON.stringify(this.doneTodos)); return [].concat(Object(p.a)(t.sort((t, e) => (t.createdAt < e.createdAt ? 1 : -1))), Object(p.a)(e.sort((t, e) => (t.completedAt < e.completedAt ? 1 : -1)))); } const o = JSON.parse(JSON.stringify(this.allTodos)); return o.sort((t, e) => (t.createdAt < e.createdAt ? 1 : -1)); }, todosToBind() { if (this.activeTab === 'allTasks') return this.allToDosList; if (this.activeTab === 'completed') { const t = JSON.parse(JSON.stringify(this.doneTodos)); return t.sort((t, e) => (t.completedAt < e.completedAt ? 1 : -1)); } const e = JSON.parse(JSON.stringify(this.notDoneTodos)); return e.sort((t, e) => (t.createdAt < e.createdAt ? 1 : -1)); } }),
    }; const T = y; const w = Object(a.a)(T, d, f, !1, null, null, null); const O = w.exports; n.a.use(l.a); const k = new l.a({ mode: 'history', base: '/<todo_web_app>/', routes: [{ path: '/', name: 'home', component: O }] }); const _ = (o('7514'), o('bfa9')); n.a.use(b.a); const S = new _.a({ key: 'local-storage', storage: localStorage }); const D = new b.a.Store({
      state: { todos: [], sortByStatus: !1 },
      getters: {
        doneTodos(t) { return t.todos.filter(t => t.done); }, notDoneTodos(t) { return t.todos.filter(t => !t.done); }, doneTodosCount(t) { return t.todos.filter(t => t.done).length; }, notDoneTodosCount(t) { return t.todos.filter(t => !t.done).length; }, allToDoCount(t) { return t.todos.length; }, allTodos(t) { return t.todos; }, sortByStatus(t) { return t.sortByStatus; },
      },
      mutations: {
        mutationAddToDo(t, e) { t.todos.push(e); }, mutationMarkAsDoneOrUndone(t, e) { const o = t.todos.find(t => t.id === e.id); o.done || (o.completedAt = (new Date()).getTime()), o.done = !o.done; }, mutationDeleteItemFromList(t, e) { t.todos = t.todos.filter(t => t.id !== e.id); }, mutationUpdateSortByState(t, e) { t.sortByStatus = e; },
      },
      actions: {
        addToDo(t, e) { const o = t.commit; o('mutationAddToDo', e); }, markTask(t, e) { const o = t.commit; o('mutationMarkAsDoneOrUndone', e); }, deleteFromList(t, e) { const o = t.commit; o('mutationDeleteItemFromList', e); }, updateSortByState(t, e) { const o = t.commit; o('mutationUpdateSortByState', e); },
      },
      plugins: [S.plugin],
    }); const j = o('9483'); Object(j.a)(''.concat('/<todo_web_app>/', 'service-worker.js'), {
      ready() { console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'); }, registered() { console.log('Service worker has been registered.'); }, cached() { console.log('Content has been cached for offline use.'); }, updatefound() { console.log('New content is downloading.'); }, updated() { console.log('New content is available; please refresh.'); }, offline() { console.log('No internet connection found. App is running in offline mode.'); }, error(t) { console.error('Error during service worker registration:', t); },
    }), n.a.config.productionTip = !1, new n.a({ router: k, store: D, render(t) { return t(u); } }).$mount('#app');
  },
  '5c0b': function (t, e, o) {
    const n = o('5e27'); const r = o.n(n); r.a;
  },
  '5e27': function (t, e, o) {},
}));
// # sourceMappingURL=app.dabdac5c.js.map