import{p as _,_ as h}from"./hooks.module.B9FFxs4q.js";/* empty css                        */import{l as a,m as v}from"./preact.module.CK-Hp5hq.js";var m=0;function r(i,n,s,f,t,c){n||(n={});var l,o,e=n;if("ref"in e)for(o in e={},n)o=="ref"?l=n[o]:e[o]=n[o];var d={type:i,props:e,key:s,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--m,__i:-1,__u:0,__source:t,__self:c};if(typeof i=="function"&&(l=i.defaultProps))for(o in l)e[o]===void 0&&(e[o]=l[o]);return a.vnode&&a.vnode(d),d}function b(i){const n="https://github.com/Mr-Ojii/"+i.repoName,f="https://api.github.com/repos/Mr-Ojii/"+i.repoName+"/releases",[t,c]=_(n+"/releases/latest"),[l,o]=_("最新版をダウンロード");return h(()=>{fetch(f).then(e=>e.json()).then(e=>{if(e!==void 0&&e[0]!==void 0&&e[0].assets!==void 0&&e[0].assets[0]!==void 0){for(let d=0;d<e[0].assets.length;d++)if(e[0].assets[d].name.includes(i.search)){c(e[0].assets[d].browser_download_url),o(e[0].name+"をダウンロード");break}}else e!==void 0&&e.message!==void 0||(c("javascript:void(0)"),o("リリースがありません"))})},[]),r("li",{className:"link-card",children:r("a",{name:i.name,href:n,children:[r("h3",{children:i.name}),r("p",{children:i.body}),i.nicovideoID?r("p",{children:r("a",{href:`https://www.nicovideo.jp/watch/${i.nicovideoID}`,target:"_blank",rel:"noreferrer noopener",children:[r("wbr",{}),"ニコ動"]})}):r(v,{}),r("div",{className:"release-card",children:r("a",{href:t,children:l})})]})})}export{b as default};