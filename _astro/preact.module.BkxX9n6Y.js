var W,d,X,se,x,G,Y,Z,ee,B,R,j,D={},_e=[],ue=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H=Array.isArray;function k(_,e){for(var t in e)_[t]=e[t];return _}function O(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function pe(_,e,t){var o,l,r,i={};for(r in e)r=="key"?o=e[r]:r=="ref"?l=e[r]:i[r]=e[r];if(arguments.length>2&&(i.children=arguments.length>3?W.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)i[r]==null&&(i[r]=_.defaultProps[r]);return A(_,i,o,l,null)}function A(_,e,t,o,l){var r={type:_,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:l??++X,__i:-1,__u:0};return l==null&&d.vnode!=null&&d.vnode(r),r}function I(_){return _.children}function F(_,e){this.props=_,this.context=e}function S(_,e){if(e==null)return _.__?S(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?S(_):null}function te(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return te(_)}}function J(_){(!_.__d&&(_.__d=!0)&&x.push(_)&&!N.__r++||G!=d.debounceRendering)&&((G=d.debounceRendering)||Y)(N)}function N(){for(var _,e,t,o,l,r,i,u=1;x.length;)x.length>u&&x.sort(Z),_=x.shift(),u=x.length,_.__d&&(t=void 0,l=(o=(e=_).__v).__e,r=[],i=[],e.__P&&((t=k({},o)).__v=o.__v+1,d.vnode&&d.vnode(t),z(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[l]:null,r,l??S(o),!!(32&o.__u),i),t.__v=o.__v,t.__.__k[t.__i]=t,oe(r,t,i),t.__e!=l&&te(t)));N.__r=0}function ne(_,e,t,o,l,r,i,u,f,s,c){var n,v,p,y,g,m,a=o&&o.__k||_e,h=e.length;for(f=fe(t,e,a,f,h),n=0;n<h;n++)(p=t.__k[n])!=null&&(v=p.__i==-1?D:a[p.__i]||D,p.__i=n,m=z(_,p,v,l,r,i,u,f,s,c),y=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&V(v.ref,null,p),c.push(p.ref,p.__c||y,p)),g==null&&y!=null&&(g=y),4&p.__u||v.__k===p.__k?f=re(p,f,_):typeof p.type=="function"&&m!==void 0?f=m:y&&(f=y.nextSibling),p.__u&=-7);return t.__e=g,f}function fe(_,e,t,o,l){var r,i,u,f,s,c=t.length,n=c,v=0;for(_.__k=new Array(l),r=0;r<l;r++)(i=e[r])!=null&&typeof i!="boolean"&&typeof i!="function"?(f=r+v,(i=_.__k[r]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?A(null,i,null,null,null):H(i)?A(I,{children:i},null,null,null):i.constructor==null&&i.__b>0?A(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=_,i.__b=_.__b+1,u=null,(s=i.__i=ce(i,t,f,n))!=-1&&(n--,(u=t[s])&&(u.__u|=2)),u==null||u.__v==null?(s==-1&&(l>c?v--:l<c&&v++),typeof i.type!="function"&&(i.__u|=4)):s!=f&&(s==f-1?v--:s==f+1?v++:(s>f?v--:v++,i.__u|=4))):_.__k[r]=null;if(n)for(r=0;r<c;r++)(u=t[r])!=null&&(2&u.__u)==0&&(u.__e==o&&(o=S(u)),ie(u,u));return o}function re(_,e,t){var o,l;if(typeof _.type=="function"){for(o=_.__k,l=0;o&&l<o.length;l++)o[l]&&(o[l].__=_,e=re(o[l],e,t));return e}_.__e!=e&&(e&&_.type&&!t.contains(e)&&(e=S(_)),t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ce(_,e,t,o){var l,r,i=_.key,u=_.type,f=e[t];if(f===null&&_.key==null||f&&i==f.key&&u==f.type&&(2&f.__u)==0)return t;if(o>(f!=null&&(2&f.__u)==0?1:0))for(l=t-1,r=t+1;l>=0||r<e.length;){if(l>=0){if((f=e[l])&&(2&f.__u)==0&&i==f.key&&u==f.type)return l;l--}if(r<e.length){if((f=e[r])&&(2&f.__u)==0&&i==f.key&&u==f.type)return r;r++}}return-1}function K(_,e,t){e[0]=="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ue.test(e)?t:t+"px"}function E(_,e,t,o,l){var r;e:if(e=="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof o=="string"&&(_.style.cssText=o=""),o)for(e in o)t&&e in t||K(_.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||K(_.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(ee,"$1")),e=e.toLowerCase()in _||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?o?t.u=o.u:(t.u=B,_.addEventListener(e,r?j:R,r)):_.removeEventListener(e,r?j:R,r);else{if(l=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&t==1?"":t))}}function Q(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=B++;else if(e.t<t.u)return;return t(d.event?d.event(e):e)}}}function z(_,e,t,o,l,r,i,u,f,s){var c,n,v,p,y,g,m,a,h,P,w,U,C,q,L,T,$,b=e.type;if(e.constructor!=null)return null;128&t.__u&&(f=!!(32&t.__u),r=[u=e.__e=t.__e]),(c=d.__b)&&c(e);e:if(typeof b=="function")try{if(a=e.props,h="prototype"in b&&b.prototype.render,P=(c=b.contextType)&&o[c.__c],w=c?P?P.props.value:c.__:o,t.__c?m=(n=e.__c=t.__c).__=n.__E:(h?e.__c=n=new b(a,w):(e.__c=n=new F(a,w),n.constructor=b,n.render=he),P&&P.sub(n),n.props=a,n.state||(n.state={}),n.context=w,n.__n=o,v=n.__d=!0,n.__h=[],n._sb=[]),h&&n.__s==null&&(n.__s=n.state),h&&b.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,b.getDerivedStateFromProps(a,n.__s))),p=n.props,y=n.state,n.__v=e,v)h&&b.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),h&&n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(h&&b.getDerivedStateFromProps==null&&a!==p&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(a,w),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(a,n.__s,w)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(n.props=a,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(M){M&&(M.__=e)}),U=0;U<n._sb.length;U++)n.__h.push(n._sb[U]);n._sb=[],n.__h.length&&i.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(a,n.__s,w),h&&n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(p,y,g)})}if(n.context=w,n.props=a,n.__P=_,n.__e=!1,C=d.__r,q=0,h){for(n.state=n.__s,n.__d=!1,C&&C(e),c=n.render(n.props,n.state,n.context),L=0;L<n._sb.length;L++)n.__h.push(n._sb[L]);n._sb=[]}else do n.__d=!1,C&&C(e),c=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++q<25);n.state=n.__s,n.getChildContext!=null&&(o=k(k({},o),n.getChildContext())),h&&!v&&n.getSnapshotBeforeUpdate!=null&&(g=n.getSnapshotBeforeUpdate(p,y)),T=c,c!=null&&c.type===I&&c.key==null&&(T=le(c.props.children)),u=ne(_,H(T)?T:[T],e,t,o,l,r,i,u,f,s),n.base=e.__e,e.__u&=-161,n.__h.length&&i.push(n),m&&(n.__E=n.__=null)}catch(M){if(e.__v=null,f||r!=null)if(M.then){for(e.__u|=f?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;r[r.indexOf(u)]=null,e.__e=u}else for($=r.length;$--;)O(r[$]);else e.__e=t.__e,e.__k=t.__k;d.__e(M,e,t)}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):u=e.__e=ae(t.__e,e,t,o,l,r,i,f,s);return(c=d.diffed)&&c(e),128&e.__u?void 0:u}function oe(_,e,t){for(var o=0;o<t.length;o++)V(t[o],t[++o],t[++o]);d.__c&&d.__c(e,_),_.some(function(l){try{_=l.__h,l.__h=[],_.some(function(r){r.call(l)})}catch(r){d.__e(r,l.__v)}})}function le(_){return typeof _!="object"||_==null||_.__b&&_.__b>0?_:H(_)?_.map(le):k({},_)}function ae(_,e,t,o,l,r,i,u,f){var s,c,n,v,p,y,g,m=t.props,a=e.props,h=e.type;if(h=="svg"?l="http://www.w3.org/2000/svg":h=="math"?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),r!=null){for(s=0;s<r.length;s++)if((p=r[s])&&"setAttribute"in p==!!h&&(h?p.localName==h:p.nodeType==3)){_=p,r[s]=null;break}}if(_==null){if(h==null)return document.createTextNode(a);_=document.createElementNS(l,h,a.is&&a),u&&(d.__m&&d.__m(e,r),u=!1),r=null}if(h==null)m===a||u&&_.data==a||(_.data=a);else{if(r=r&&W.call(_.childNodes),m=t.props||D,!u&&r!=null)for(m={},s=0;s<_.attributes.length;s++)m[(p=_.attributes[s]).name]=p.value;for(s in m)if(p=m[s],s!="children"){if(s=="dangerouslySetInnerHTML")n=p;else if(!(s in a)){if(s=="value"&&"defaultValue"in a||s=="checked"&&"defaultChecked"in a)continue;E(_,s,null,p,l)}}for(s in a)p=a[s],s=="children"?v=p:s=="dangerouslySetInnerHTML"?c=p:s=="value"?y=p:s=="checked"?g=p:u&&typeof p!="function"||m[s]===p||E(_,s,p,m[s],l);if(c)u||n&&(c.__html==n.__html||c.__html==_.innerHTML)||(_.innerHTML=c.__html),e.__k=[];else if(n&&(_.innerHTML=""),ne(e.type=="template"?_.content:_,H(v)?v:[v],e,t,o,h=="foreignObject"?"http://www.w3.org/1999/xhtml":l,r,i,r?r[0]:t.__k&&S(t,0),u,f),r!=null)for(s=r.length;s--;)O(r[s]);u||(s="value",h=="progress"&&y==null?_.removeAttribute("value"):y!=null&&(y!==_[s]||h=="progress"&&!y||h=="option"&&y!=m[s])&&E(_,s,y,m[s],l),s="checked",g!=null&&g!=_[s]&&E(_,s,g,m[s],l))}return _}function V(_,e,t){try{if(typeof _=="function"){var o=typeof _.__u=="function";o&&_.__u(),o&&e==null||(_.__u=_(e))}else _.current=e}catch(l){d.__e(l,t)}}function ie(_,e,t){var o,l;if(d.unmount&&d.unmount(_),(o=_.ref)&&(o.current&&o.current!=_.__e||V(o,null,e)),(o=_.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){d.__e(r,e)}o.base=o.__P=null}if(o=_.__k)for(l=0;l<o.length;l++)o[l]&&ie(o[l],e,t||typeof _.type!="function");t||O(_.__e),_.__c=_.__=_.__e=void 0}function he(_,e,t){return this.constructor(_,t)}function de(_,e,t){var o,l,r,i;e==document&&(e=document.documentElement),d.__&&d.__(_,e),l=(o=typeof t=="function")?null:t&&t.__k||e.__k,r=[],i=[],z(e,_=(!o&&t||e).__k=pe(I,null,[_]),l||D,D,e.namespaceURI,!o&&t?[t]:l?null:e.firstChild?W.call(e.childNodes):null,r,!o&&t?t:l?l.__e:e.firstChild,o,i),oe(r,_,i)}function ve(_,e){de(_,e,ve)}W=_e.slice,d={__e:function(_,e,t,o){for(var l,r,i;e=e.__;)if((l=e.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(_)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(_,o||{}),i=l.__d),i)return l.__E=l}catch(u){_=u}throw _}},X=0,se=function(_){return _!=null&&_.constructor==null},F.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=k({},this.state),typeof _=="function"&&(_=_(k({},t),this.props)),_&&k(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),J(this))},F.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J(this))},F.prototype.render=I,x=[],Y=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Z=function(_,e){return _.__v.__b-e.__v.__b},N.__r=0,ee=/(PointerCapture)$|Capture$/i,B=0,R=Q(!1),j=Q(!0);export{de as E,ve as G,pe as _,d as l,se as t,F as x};
