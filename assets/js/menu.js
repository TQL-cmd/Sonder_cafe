( () => {
    var a = Object.defineProperty;
    var r = (e, s, t) => s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[s] = t;
    var c = (e, s, t) => r(e, typeof s != "symbol" ? s + "" : s, t);
    var l = class {
        constructor() {
            c(this, "filtersSelector", ".cs-button");
            c(this, "menuSelector", ".cs-menu-group");
            c(this, "activeClass", "cs-active");
            c(this, "hiddenClass", "cs-hidden");
            this.$menus = document.querySelectorAll(this.menuSelector);
            let s = document.querySelectorAll(this.filtersSelector);
            this.onClick(s[0]);
            for (let t of s)
                t.addEventListener("click", () => this.onClick(t))
        }
        onClick(s) {
            var i;
            this.filter(s.dataset.filter);
            let {activeClass: t} = this;
            (i = this.$activeFilter) == null || i.classList.remove(t),
            s.classList.add(t),
            this.$activeFilter = s
        }
        filter(s) {
            let t = s == "all"
              , {hiddenClass: i} = this;
            for (let o of this.$menus) {
                let n = t || o.dataset.category == s;
                o.classList.toggle(i, !n)
            }
        }
    }
    ;
    new l;
}
)();
