const __vite__fileDeps=["_astro/signals.module.QMPHa1gp.js","_astro/preact.module.CK-Hp5hq.js","_astro/hooks.module.B9FFxs4q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g as f,B as p,D as y}from"./preact.module.CK-Hp5hq.js";const E="modulepreload",S=function(t){return"/"+t},h={},w=function(l,n,i){let d=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");d=Promise.all(n.map(r=>{if(r=S(r),r in h)return;h[r]=!0;const s=r.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const e=document.createElement("link");if(e.rel=s?"stylesheet":E,s||(e.as="script",e.crossOrigin=""),e.href=r,o&&e.setAttribute("nonce",o),document.head.appendChild(e),s)return new Promise((u,m)=>{e.addEventListener("load",u),e.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})}))}return d.then(()=>l()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},_=({value:t,name:l,hydrate:n=!0})=>t?f(n?"astro-slot":"astro-static-slot",{name:l,dangerouslySetInnerHTML:{__html:t}}):null;_.shouldComponentUpdate=()=>!1;var v=_;const g=new Map;var N=t=>async(l,n,{default:i,...d},{client:a})=>{if(!t.hasAttribute("ssr"))return;for(const[s,c]of Object.entries(d))n[s]=f(v,{value:c,name:s});if(t.dataset.preactSignals){const{signal:s}=await w(()=>import("./signals.module.QMPHa1gp.js"),__vite__mapDeps([0,1,2]));let c=JSON.parse(t.dataset.preactSignals);for(const[e,u]of Object.entries(c)){if(!g.has(u)){const m=s(n[e]);g.set(u,m)}n[e]=g.get(u)}}(a!=="only"?y:p)(f(l,n,i!=null?f(v,{value:i}):i),t),t.addEventListener("astro:unmount",()=>p(null,t),{once:!0})};export{N as default};