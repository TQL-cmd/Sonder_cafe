( () => {
    var o = document.querySelector("body")
      , s = document.querySelector("#cs-navigation")
      , c = document.querySelector("#cs-navigation .cs-toggle");
    c.addEventListener("click", function() {
        c.classList.toggle("cs-active"),
        s.classList.toggle("cs-active"),
        o.classList.toggle("cs-open"),
        n()
    });
    function n() {
        let e = document.querySelector("#cs-expanded");
        e.getAttribute("aria-expanded") === "false" ? e.setAttribute("aria-expanded", "true") : e.setAttribute("aria-expanded", "false")
    }
    document.addEventListener("scroll", e => {
        document.documentElement.scrollTop >= 100 ? document.querySelector("body").classList.add("scroll") : document.querySelector("body").classList.remove("scroll")
    }
    );
    var r = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
    for (let e of r) {
        let t = () => {
            e.classList.toggle("cs-active")
        }
        ;
        e.addEventListener("click", t)
    }
}
)();
