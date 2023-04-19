import {j as y, r as a, P as S, A as O, M as k, R as E, a as w} from "./vendor.6b9307ef.js";
const N = function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
        l(t);
    new MutationObserver(t=>{
        for (const o of t)
            if (o.type === "childList")
                for (const d of o.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && l(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function c(t) {
        const o = {};
        return t.integrity && (o.integrity = t.integrity),
        t.referrerpolicy && (o.referrerPolicy = t.referrerpolicy),
        t.crossorigin === "use-credentials" ? o.credentials = "include" : t.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function l(t) {
        if (t.ep)
            return;
        t.ep = !0;
        const o = c(t);
        fetch(t.href, o)
    }
};
N();
const e = y.exports.jsx
  , u = y.exports.jsxs
  , A = y.exports.Fragment
  , b = a.exports.createContext();
function B({children: r}) {
    const [i,c] = a.exports.useState("000000")
      , [l,t] = a.exports.useState("00:00:00")
      , [o,d] = a.exports.useState(0)
      , h = a.exports.useMemo(()=>({
        time: i,
        setTime: c,
        display: l,
        setDisplay: t,
        opac: o,
        setOpac: d
    }), [i, c, l, t, o, d]);
    return e(b.Provider, {
        value: h,
        children: r
    })
}
B.propTypes = {
    children: S.node.isRequired
};
var T = "/dist/assets/timer-bomb.73f0f562.webp";
const $ = "_bomb_17mv7_6"
  , F = "_sevenSeg_17mv7_14"
  , I = "_reflex_17mv7_14";
var g = {
    bomb: $,
    sevenSeg: F,
    reflex: I
};
function j() {
    const {display: r} = a.exports.useContext(b);
    return u("section", {
        className: g.bomb,
        children: [e("img", {
            src: T,
            alt: "Dynamite with timer."
        }), e("div", {
            className: g.reflex
        }), e("div", {
            className: g.sevenSeg,
            children: e("p", {
                children: r
            })
        })]
    })
}
var P = "/dist/assets/Bomb-C4-Explode.mp3"
  , L = "/dist/assets/Bomb-C4-Planted.mp3"
  , z = "/dist/assets/Button-Sound.ogg"
  , D = "/dist/assets/explosion.e18997d4.webp";
const M = "_buttons_ezv7d_1"
  , R = "_zeroStart_ezv7d_27";
var G = {
    buttons: M,
    zeroStart: R
};
const q = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  , v = new Audio(z)
  , x = new Audio(L)
  , C = new Audio(P);
function H() {
    const {time: r, setTime: i, display: c, setDisplay: l, opac: t} = a.exports.useContext(b)
      , o = r.split("")
      , d = ({target: {value: n}})=>{
        for (let s = 0; s <= 4; s += 1)
            o[s] = o[s + 1];
        o[5] = n,
        i(o.join("")),
        v.play()
    }
    ;
    a.exports.useEffect(()=>{
        l(`${r.substr(0, 2)}:${r.substr(2, 2)}:${r.substr(4, 2)}`)
    }
    , [r]),
    a.exports.useEffect(()=>{
        const n = [v, C, x];
        t === 100 ? n.forEach(s=>{
            s.muted = !0
        }
        ) : n.forEach(s=>{
            s.muted = !1
        }
        )
    }
    , [t]);
    const h = ()=>{
        x.play(),
        document.getElementById("buttons").style.display = "none";
        let n = Number(c.split(":")[2])
          , s = Number(c.split(":")[1])
          , f = Number(c.split(":")[0]);
        n >= 60 && (n %= 60,
        s += 1),
        s >= 60 && (s %= 60,
        f += 1);
        const _ = setInterval(()=>{
            const m = [f, s, n];
            for (const p in m)
                String(m[p]).length < 2 && (m[p] = `0${m[p]}`);
            if (l(`${m[0]}:${m[1]}:${m[2]}`),
            n -= 1,
            s <= 0 && f !== 0 && (f -= 1,
            s = 59,
            n = 59),
            n < 0 && s !== 0 && (s -= 1,
            n = 59),
            f === 0 && s === 0 && n < 0) {
                clearInterval(_),
                i("000000"),
                C.play(),
                document.getElementById("buttons").style.display = "flex";
                const p = document.createElement("img");
                p.src = D,
                document.getElementById("main").appendChild(p),
                setTimeout(()=>{
                    document.getElementById("main").removeChild(p)
                }
                , 3710)
            }
        }
        , 1e3)
    }
    ;
    return u("section", {
        id: "buttons",
        className: G.buttons,
        children: [q.map(n=>e("button", {
            onClick: d,
            value: n,
            type: "button",
            children: n
        }, n)), e("button", {
            type: "button",
            onClick: h,
            children: "START"
        })]
    })
}
var J = "/dist/assets/githubLogo.a577e514.webp"
  , K = "/dist/assets/mypic.jpeg";
const X = "_footer_qb6z8_1";
var Q = {
    footer: X
};
function U() {
    return u("footer", {
        className: Q.footer,
        children: [e("img", {
            src: K,
            alt: "Ilia Gorduladze",
            width: "65"
        }), u("div", {
            children: [e("p", {
                children: "Modified by IliaOG"
            }), e("a", {
                href: "https://www.linkedin.com/in/ilia-gorduladze-631171192/",
                target: "_blank",
                rel: "noreferrer",
                children: e("img", {
                    src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    alt: "LinkedIn",
                    width: "25"
                })
            }), e("a", {
                href: "https://github.com/tajmahal1",
                target: "_blank",
                rel: "noreferrer",
                children: e("img", {
                    src: J,
                    alt: "Github",
                    width: "25"
                })
            })]
        })]
    })
}
const V = "_header_1j3h9_1";
var W = {
    header: V
};
function Y() {
    const {opac: r, setOpac: i} = a.exports.useContext(b)
      , c = ()=>{
        i(r === 100 ? 0 : 100)
    }
    ;
    return u("header", {
        className: W.header,
        children: [u("button", {
            type: "button",
            onClick: c,
            children: [e(O, {}), e(k, {
                style: {
                    opacity: r
                }
            })]
        }), e("h1", {
            children: "\u{1F9E8} Bomb O'Clock \u23F1\uFE0F"
        })]
    })
}
function Z() {
    return u(A, {
        children: [e(Y, {}), u("main", {
            className: "App",
            id: "main",
            children: [e(j, {}), e(H, {})]
        }), e(U, {})]
    })
}
E.render(e(w.StrictMode, {
    children: e(B, {
        children: e(Z, {})
    })
}), document.getElementById("root"));
