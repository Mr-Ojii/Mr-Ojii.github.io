var I,d,Q,r_,x,q,X,H,B,$,R,T={},Y=[],l_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function w(e,_){for(var t in _)e[t]=_[t];return e}function Z(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function i_(e,_,t){var r,o,l,p={};for(l in _)l=="key"?r=_[l]:l=="ref"?o=_[l]:p[l]=_[l];if(arguments.length>2&&(p.children=arguments.length>3?I.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)p[l]===void 0&&(p[l]=e.defaultProps[l]);return F(e,p,r,o,null)}function F(e,_,t,r,o){var l={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Q,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(l),l}function W(e){return e.children}function N(e,_){this.props=e,this.context=_}function P(e,_){if(_==null)return e.__?P(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?P(e):null}function __(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return __(e)}}function G(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!E.__r++||q!==d.debounceRendering)&&((q=d.debounceRendering)||X)(E)}function E(){var e,_,t,r,o,l,p,f;for(x.sort(H);e=x.shift();)e.__d&&(_=x.length,r=void 0,l=(o=(t=e).__v).__e,p=[],f=[],t.__P&&((r=w({},o)).__v=o.__v+1,d.vnode&&d.vnode(r),j(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[l]:null,p,l??P(o),!!(32&o.__u),f),r.__v=o.__v,r.__.__k[r.__i]=r,n_(p,r,f),r.__e!=l&&__(r)),x.length>_&&x.sort(H));E.__r=0}function e_(e,_,t,r,o,l,p,f,c,i,u){var n,g,s,v,m,y=r&&r.__k||Y,a=_.length;for(t.__d=c,s_(t,_,y),c=t.__d,n=0;n<a;n++)(s=t.__k[n])!=null&&(g=s.__i===-1?T:y[s.__i]||T,s.__i=n,j(e,s,g,o,l,p,f,c,i,u),v=s.__e,s.ref&&g.ref!=s.ref&&(g.ref&&z(g.ref,null,s),u.push(s.ref,s.__c||v,s)),m==null&&v!=null&&(m=v),65536&s.__u||g.__k===s.__k?c=t_(s,c,e):typeof s.type=="function"&&s.__d!==void 0?c=s.__d:v&&(c=v.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=c,t.__e=m}function s_(e,_,t){var r,o,l,p,f,c=_.length,i=t.length,u=i,n=0;for(e.__k=[],r=0;r<c;r++)(o=_[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(p=r+n,(o=e.__k[r]=typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?F(null,o,null,null,null):O(o)?F(W,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?F(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,l=null,(f=o.__i=p_(o,t,p,u))!==-1&&(u--,(l=t[f])&&(l.__u|=131072)),l==null||l.__v===null?(f==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):f!==p&&(f==p-1?n--:f==p+1?n++:(f>p?n--:n++,o.__u|=65536))):o=e.__k[r]=null;if(u)for(r=0;r<i;r++)(l=t[r])!=null&&!(131072&l.__u)&&(l.__e==e.__d&&(e.__d=P(l)),o_(l,l))}function t_(e,_,t){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,_=t_(r[o],_,t));return _}e.__e!=_&&(_&&e.type&&!t.contains(_)&&(_=P(e)),t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function p_(e,_,t,r){var o=e.key,l=e.type,p=t-1,f=t+1,c=_[t];if(c===null||c&&o==c.key&&l===c.type&&!(131072&c.__u))return t;if(r>(c!=null&&!(131072&c.__u)?1:0))for(;p>=0||f<_.length;){if(p>=0){if((c=_[p])&&!(131072&c.__u)&&o==c.key&&l===c.type)return p;p--}if(f<_.length){if((c=_[f])&&!(131072&c.__u)&&o==c.key&&l===c.type)return f;f++}}return-1}function J(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||l_.test(_)?t:t+"px"}function L(e,_,t,r,o){var l;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||J(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||J(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")l=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+l]=t,t?r?t.u=r.u:(t.u=B,e.addEventListener(_,l?R:$,l)):e.removeEventListener(_,l?R:$,l);else{if(o=="http://www.w3.org/2000/svg")_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_!="popover"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,_=="popover"&&t==1?"":t))}}function K(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=B++;else if(_.t<t.u)return;return t(d.event?d.event(_):_)}}}function j(e,_,t,r,o,l,p,f,c,i){var u,n,g,s,v,m,y,a,h,S,b,M,C,V,D,A,k=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),l=[f=_.__e=t.__e]),(u=d.__b)&&u(_);_:if(typeof k=="function")try{if(a=_.props,h="prototype"in k&&k.prototype.render,S=(u=k.contextType)&&r[u.__c],b=u?S?S.props.value:u.__:r,t.__c?y=(n=_.__c=t.__c).__=n.__E:(h?_.__c=n=new k(a,b):(_.__c=n=new N(a,b),n.constructor=k,n.render=c_),S&&S.sub(n),n.props=a,n.state||(n.state={}),n.context=b,n.__n=r,g=n.__d=!0,n.__h=[],n._sb=[]),h&&n.__s==null&&(n.__s=n.state),h&&k.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,k.getDerivedStateFromProps(a,n.__s))),s=n.props,v=n.state,n.__v=_,g)h&&k.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),h&&n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(h&&k.getDerivedStateFromProps==null&&a!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(a,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(a,n.__s,b)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(n.props=a,n.state=n.__s,n.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.some(function(U){U&&(U.__=_)}),M=0;M<n._sb.length;M++)n.__h.push(n._sb[M]);n._sb=[],n.__h.length&&p.push(n);break _}n.componentWillUpdate!=null&&n.componentWillUpdate(a,n.__s,b),h&&n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,v,m)})}if(n.context=b,n.props=a,n.__P=e,n.__e=!1,C=d.__r,V=0,h){for(n.state=n.__s,n.__d=!1,C&&C(_),u=n.render(n.props,n.state,n.context),D=0;D<n._sb.length;D++)n.__h.push(n._sb[D]);n._sb=[]}else do n.__d=!1,C&&C(_),u=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++V<25);n.state=n.__s,n.getChildContext!=null&&(r=w(w({},r),n.getChildContext())),h&&!g&&n.getSnapshotBeforeUpdate!=null&&(m=n.getSnapshotBeforeUpdate(s,v)),e_(e,O(A=u!=null&&u.type===W&&u.key==null?u.props.children:u)?A:[A],_,t,r,o,l,p,f,c,i),n.base=_.__e,_.__u&=-161,n.__h.length&&p.push(n),y&&(n.__E=n.__=null)}catch(U){if(_.__v=null,c||l!=null){for(_.__u|=c?160:32;f&&f.nodeType===8&&f.nextSibling;)f=f.nextSibling;l[l.indexOf(f)]=null,_.__e=f}else _.__e=t.__e,_.__k=t.__k;d.__e(U,_,t)}else l==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=f_(t.__e,_,t,r,o,l,p,c,i);(u=d.diffed)&&u(_)}function n_(e,_,t){_.__d=void 0;for(var r=0;r<t.length;r++)z(t[r],t[++r],t[++r]);d.__c&&d.__c(_,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(l){l.call(o)})}catch(l){d.__e(l,o.__v)}})}function f_(e,_,t,r,o,l,p,f,c){var i,u,n,g,s,v,m,y=t.props,a=_.props,h=_.type;if(h==="svg"?o="http://www.w3.org/2000/svg":h==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),l!=null){for(i=0;i<l.length;i++)if((s=l[i])&&"setAttribute"in s==!!h&&(h?s.localName===h:s.nodeType===3)){e=s,l[i]=null;break}}if(e==null){if(h===null)return document.createTextNode(a);e=document.createElementNS(o,h,a.is&&a),f&&(d.__m&&d.__m(_,l),f=!1),l=null}if(h===null)y===a||f&&e.data===a||(e.data=a);else{if(l=l&&I.call(e.childNodes),y=t.props||T,!f&&l!=null)for(y={},i=0;i<e.attributes.length;i++)y[(s=e.attributes[i]).name]=s.value;for(i in y)if(s=y[i],i!="children"){if(i=="dangerouslySetInnerHTML")n=s;else if(!(i in a)){if(i=="value"&&"defaultValue"in a||i=="checked"&&"defaultChecked"in a)continue;L(e,i,null,s,o)}}for(i in a)s=a[i],i=="children"?g=s:i=="dangerouslySetInnerHTML"?u=s:i=="value"?v=s:i=="checked"?m=s:f&&typeof s!="function"||y[i]===s||L(e,i,s,y[i],o);if(u)f||n&&(u.__html===n.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),_.__k=[];else if(n&&(e.innerHTML=""),e_(e,O(g)?g:[g],_,t,r,h==="foreignObject"?"http://www.w3.org/1999/xhtml":o,l,p,l?l[0]:t.__k&&P(t,0),f,c),l!=null)for(i=l.length;i--;)Z(l[i]);f||(i="value",h==="progress"&&v==null?e.removeAttribute("value"):v!==void 0&&(v!==e[i]||h==="progress"&&!v||h==="option"&&v!==y[i])&&L(e,i,v,y[i],o),i="checked",m!==void 0&&m!==e[i]&&L(e,i,m,y[i],o))}return e}function z(e,_,t){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&_==null||(e.__u=e(_))}else e.current=_}catch(o){d.__e(o,t)}}function o_(e,_,t){var r,o;if(d.unmount&&d.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||z(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){d.__e(l,_)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&o_(r[o],_,t||typeof e.type!="function");t||Z(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function c_(e,_,t){return this.constructor(e,t)}function u_(e,_,t){var r,o,l,p;d.__&&d.__(e,_),o=(r=typeof t=="function")?null:t&&t.__k||_.__k,l=[],p=[],j(_,e=(!r&&t||_).__k=i_(W,null,[e]),o||T,T,_.namespaceURI,!r&&t?[t]:o?null:_.firstChild?I.call(_.childNodes):null,l,!r&&t?t:o?o.__e:_.firstChild,r,p),n_(l,e,p)}function a_(e,_){u_(e,_,a_)}I=Y.slice,d={__e:function(e,_,t,r){for(var o,l,p;_=_.__;)if((o=_.__c)&&!o.__)try{if((l=o.constructor)&&l.getDerivedStateFromError!=null&&(o.setState(l.getDerivedStateFromError(e)),p=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),p=o.__d),p)return o.__E=o}catch(f){e=f}throw e}},Q=0,r_=function(e){return e!=null&&e.constructor==null},N.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},t),this.props)),e&&w(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),G(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),G(this))},N.prototype.render=W,x=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(e,_){return e.__v.__b-_.__v.__b},E.__r=0,B=0,$=K(!1),R=K(!0);export{u_ as B,a_ as D,i_ as _,N as k,d as l,r_ as t};
