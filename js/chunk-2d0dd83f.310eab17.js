(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-2d0dd83f'], {
  '825d': function (e, t, a) {
    a.r(t); const i = function () {
      const e = this; const t = e.$createElement; const a = e._self._c || t; return a('div', { staticClass: 'togglebutton-wrapper', class: e.isactive ? 'togglebutton-checked' : '' }, [a('label', { attrs: { for: e.name } }, [a('span', { staticClass: 'togglebutton-label' }, [e._v(e._s(e.label))]), a('span', { staticClass: 'tooglebutton-box' })]), a('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.isactive, expression: 'isactive',
        }],
        attrs: { id: e.name, type: 'checkbox', name: e.name },
        domProps: { checked: Array.isArray(e.isactive) ? e._i(e.isactive, null) > -1 : e.isactive },
        on: { change: [function (t) { const a = e.isactive; const i = t.target; const s = !!i.checked; if (Array.isArray(a)) { const c = null; const n = e._i(a, c); i.checked ? n < 0 && (e.isactive = a.concat([c])) : n > -1 && (e.isactive = a.slice(0, n).concat(a.slice(n + 1))); } else e.isactive = s; }, e.onToogle] },
      })]);
    }; const s = []; const c = {
      name: 'togglebutton', props: ['label', 'name', 'sortByStatus'], model: { prop: 'checked', event: 'change' }, data() { return { isactive: this.sortByStatus }; }, methods: { onToogle() { this.$emit('clicked', this.isactive); } },
    }; const n = c; const o = a('2877'); const l = Object(o.a)(n, i, s, !1, null, null, null); t.default = l.exports;
  },
}]);
// # sourceMappingURL=chunk-2d0dd83f.310eab17.js.map
