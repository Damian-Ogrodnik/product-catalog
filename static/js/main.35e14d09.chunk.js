(this["webpackJsonpreact-interview-starter-ts"]=this["webpackJsonpreact-interview-starter-ts"]||[]).push([[0],{102:function(e,n,t){e.exports=t.p+"static/media/logo.44c89fc4.svg"},125:function(e,n,t){"use strict";var a=t(130);t.d(n,"AjaxResponseType",(function(){return a.a}));var r=t(131);t.d(n,"HTTPRequestMethod",(function(){return r.a}));t(132)},130:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e.JSON="json",e.TEXT="text"}(a||(a={}))},131:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e.GET="GET",e.POST="POST"}(a||(a={}))},132:function(e,n){},142:function(e,n,t){e.exports=t.p+"static/media/loginCover.fcf9f4a0.png"},143:function(e,n,t){e.exports=t.p+"static/media/spinner.8c25c2b4.svg"},144:function(e,n,t){e.exports=t.p+"static/media/Check.7335ef80.svg"},145:function(e,n,t){e.exports=t.p+"static/media/Loupe.1f9315f4.svg"},146:function(e,n,t){e.exports=t.p+"static/media/filled-star.78a96900.svg"},147:function(e,n,t){e.exports=t.p+"static/media/star.2f01c390.svg"},153:function(e,n,t){e.exports=t.p+"static/media/empty-icon.ed5a35d5.svg"},162:function(e,n,t){e.exports=t(176)},176:function(e,n,t){"use strict";t.r(n);var a,r=t(0),i=t.n(r),c=t(25),o=t.n(c),l=t(48),s=function(e){var n=e.children;return i.a.createElement(l.a,null,n)},u=t(60),m=t(52),d=t(135),b=t(185),p=t(187),g=t(188),f=t(180),h=t(181),j=t(182),O=t(53),v=t(61),E=t(12),y=Object(v.createAsyncAction)("GET_PRODUCTS_REQUESTED","GET_PRODUCTS_SUCCEED","GET_PRODUCTS_FAILED")(),x=Object(v.createAction)("SET_SEARCH_DETAILS")(),w=t(32),k=t(100),P=t(137),S=t(189),T=t(183),D=t(45),C=t(46),A=t(160),F=function(e){Object(D.a)(t,e);var n=Object(C.a)(t);function t(e,a,r){var i;return Object(w.a)(this,t),(i=n.call(this,r)).name=e,i.originalError=a,i}return t}(Object(A.a)(Error)),z=function(e){Object(D.a)(t,e);var n=Object(C.a)(t);function t(e,a,r){var i;return Object(w.a)(this,t),(i=n.call(this,"HttpError",a,r)).status=e,i}return t}(F),M=function(e){Object(D.a)(t,e);var n=Object(C.a)(t);function t(e,a){var r;return Object(w.a)(this,t),(r=n.call(this,"ValidationError",null,a)).validationErrors=e,r}return t}(F),R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Invalid response date format";return new M(e,n)},I=t(125),L=function(){function e(n){Object(w.a)(this,e),this.baseUrl=n}return Object(k.a)(e,[{key:"get",value:function(n){var t=n.url,a=n.responseType,r=n.params,i=void 0===r?{}:r,c="".concat(t,"?").concat(e.objectToQueryString(i));return this.makeRequest({url:c,method:I.HTTPRequestMethod.GET,responseType:a})}},{key:"makeRequest",value:function(e){var n=e.url,t=e.method,a=e.body,r=e.responseType,i=void 0===r?I.AjaxResponseType.JSON:r;return Object(S.a)({url:"".concat(this.baseUrl).concat(n),method:t,responseType:i,body:a}).pipe(Object(O.a)(E.g),Object(T.a)((function(e){return Object(P.a)(Object(E.d)(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Failed to execute http request";return new z(e,n,t)}(e.status,e)))})))}}],[{key:"objectToQueryString",value:function(e){return Object.keys(e).map((function(n){return"".concat(n,"=").concat(e[n])})).join("&")}}]),e}(),U=t(27),q="".concat("https://join-tsh-api-staging.herokuapp.com"),_="/product",G=t(138),B=t(18),H=(B.e({search:B.d,limit:B.c,page:B.c,promo:B.b,active:B.b}),B.e({first:B.d,last:B.d,next:B.d,previous:B.d})),J=B.e({currentPage:B.d,itemCount:B.c,itemsPerPage:B.d,totalItems:B.c,totalPages:B.c}),N=B.e({id:B.c,name:B.d,description:B.d,rating:B.c,image:B.d,promo:B.b,active:B.b}),Q=B.e({items:B.a(N),links:H,meta:J}),W=function(e){return Object(G.a)(Q.decode(e),Object(E.f)(R))},V=function(){function e(n){Object(w.a)(this,e),this.httpService=n}return Object(k.a)(e,[{key:"getProducts",value:function(e){return this.httpService.get({url:_,params:Object(U.a)({},e)}).pipe(Object(O.a)(Object(E.e)((function(e){return e.response}))),Object(O.a)(Object(E.a)(W)))}}]),e}(),X=new L(q),$=new V(X),K=Object(p.a)((a=$,Object(p.a)((function(e){return e.pipe(Object(g.a)(300),Object(f.a)(Object(v.isActionOf)(y.request)),Object(h.a)("payload"),Object(j.a)((function(e){return a.getProducts(e)})),Object(O.a)(Object(E.b)(y.failure,y.success)))})))),Y={items:[],productsMeta:void 0,isFetchingProducts:!1,error:"",searchDetails:{search:"",limit:8,page:1,promo:!1,active:!0}},Z=Object(v.createReducer)(Y).handleAction(y.request,(function(e){return Object(U.a)(Object(U.a)({},e),{},{isFetchingProducts:!0})})).handleAction(y.success,(function(e,n){var t=n.payload,a=t.items,r=t.meta;return Object(U.a)(Object(U.a)({},e),{},{isFetchingProducts:!1,productsMeta:r,items:a})})).handleAction(y.failure,(function(e,n){var t=n.payload;return Object(U.a)(Object(U.a)({},e),{},{isFetchingProducts:!1,error:t.message})})).handleAction(x,(function(e,n){var t=n.payload;return Object(U.a)(Object(U.a)({},e),{},{searchDetails:t})})),ee=t(89),ne=function(e){return e.products},te=Object(ee.a)(ne,(function(e){return e.searchDetails})),ae=Object(ee.a)(ne,(function(e){return e.items})),re=Object(ee.a)(ne,(function(e){return e.productsMeta})),ie=Object(ee.a)(ne,(function(e){return e.isFetchingProducts})),ce=Object(m.combineReducers)({products:Z}),oe=Object(b.a)(),le=Object(m.createStore)(ce,Object(d.composeWithDevTools)(Object(m.applyMiddleware)(oe)));oe.run(K);var se,ue,me,de,be,pe,ge,fe,he,je,Oe,ve,Ee,ye="'Nunito', sans-serif",xe="14px",we="16px",ke="18px",Pe="#ffffff",Se="#1A1B1D",Te="#2140E8",De="#4460F7",Ce="#F9A52B",Ae="#F0F1F5",Fe="#9194A5",ze="#F2F2F2",Me=576,Re=768,Ie=992,Le=1200,Ue=1400,qe=1700,_e=t(6),Ge=t(7),Be=(t(174),Object(Ge.a)(se||(se=Object(_e.a)(["\n    html, body, #root {\n        height: 100%;\n    }\n    body {\n        margin: 0;\n        font-family: ",";\n        font-size: ",";\n        color: ",";\n        background-color: ",";\n    }\n"])),ye,xe,Se,ze)),He=t(24),Je=t(142),Ne=t.n(Je),Qe=t(102),We=t.n(Qe),Ve=Ge.b.button(ue||(ue=Object(_e.a)(["\n  cursor: ",";\n  height: 2.5rem;\n  background: ",";\n  border-radius: 0.25rem;\n  border: none;\n  color: ",";\n  transition: 0.3s;\n  margin: 0.5rem 0rem;\n\n  :hover {\n    background: ",";\n  }\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}),(function(e){return e.isDisabled?Fe:De}),Pe,(function(e){return!e.isDisabled&&Te})),Xe=Ge.b.button(me||(me=Object(_e.a)(["\n  cursor: ",";\n  height: 2.5rem;\n  color: ",";\n  border-radius: 0.25rem;\n  border: 1px solid ",";\n  background-color: ",";\n  transition: 0.3s;\n  margin: 0.5rem 0rem;\n\n  :hover {\n    color: ",";\n    border-color: ",";\n  }\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}),(function(e){return e.isDisabled?Fe:De}),De,Pe,(function(e){return!e.isDisabled&&Te}),(function(e){return!e.isDisabled&&Te})),$e=Ge.b.img(de||(de=Object(_e.a)(["\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-top: 3rem;\n  -webkit-animation: spin 2s linear infinite;\n  -moz-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),Ke=Ge.b.input(be||(be=Object(_e.a)(["\n  background: ",";\n  border: 1px solid ",";\n  box-sizing: border-box;\n  border-radius: 0.75rem;\n  color: ",";\n  padding: 0.75rem;\n"])),Pe,Ae,Fe),Ye=Ge.b.label(pe||(pe=Object(_e.a)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  margin: 0.5rem 0;\n"]))),Ze=function(e){var n=e.label,t=e.placeholder,a=e.type;return i.a.createElement(Ye,null,n,i.a.createElement(Ke,{placeholder:t,type:a}))},en=function(e){return"@media only screen and (max-width: ".concat(e,"px)")},nn={small:en(Me),medium:en(Re),large:en(Ie),extraLarge:en(Le),big:en(Ue),huge:en(qe)},tn=Ge.b.form(ge||(ge=Object(_e.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n\n  "," {\n    width: 100%;\n  }\n"])),nn.medium),an=Object(Ge.b)(l.b)(fe||(fe=Object(_e.a)(["\n  color: ",";\n  text-decoration: underline;\n  transition: 0.3s;\n\n  :hover {\n    color: ",";\n  }\n"])),Fe,Se),rn=function(){return i.a.createElement(tn,null,i.a.createElement("h1",null,"Login"),i.a.createElement(Ze,{label:"Username",placeholder:"Enter Username",type:"text"}),i.a.createElement(Ze,{label:"Password",placeholder:"Enter Password",type:"password"}),i.a.createElement(Ve,{type:"submit"},"Log in "),i.a.createElement(an,{to:"/#"},"Forgot password?"))},cn=Ge.b.div(he||(he=Object(_e.a)(["\n  height: 100vh;\n  position: relative;\n  display: flex;\n"]))),on=Ge.b.img(je||(je=Object(_e.a)(["\n  height: 100%;\n  min-width: 35%;\n  width: auto;\n\n  "," {\n    display: none;\n  }\n"])),nn.medium),ln=Ge.b.div(Oe||(Oe=Object(_e.a)(["\n  width: 100%;\n  margin: 7rem;\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin: 1.5rem;\n  }\n"])),nn.medium),sn=Ge.b.img(ve||(ve=Object(_e.a)(["\n  top: 2rem;\n  position: absolute;\n"]))),un=function(){return i.a.createElement(cn,null,i.a.createElement(on,{src:Ne.a}),i.a.createElement(ln,null,i.a.createElement(sn,{src:We.a}),i.a.createElement(rn,null)))},mn=t(143),dn=t.n(mn);!function(e){e.home="/",e.login="/login"}(Ee||(Ee={}));var bn,pn,gn,fn,hn,jn,On,vn,En,yn,xn,wn,kn,Pn,Sn,Tn,Dn,Cn,An,Fn,zn,Mn,Rn,In,Ln,Un,qn,_n,Gn,Bn,Hn,Jn,Nn,Qn,Wn=t(144),Vn=t.n(Wn),Xn=Ge.b.label(bn||(bn=Object(_e.a)(["\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n"]))),$n=Ge.b.input.attrs({type:"checkbox"})(pn||(pn=Object(_e.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),Kn=Ge.b.img(gn||(gn=Object(_e.a)(["\n  width: 70%;\n  height: 70%;\n"]))),Yn=Ge.b.div(fn||(fn=Object(_e.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: ",";\n  border: ",";\n  border-radius: 3px;\n  transition: all 150ms;\n\n  ",":focus + & {\n    box-shadow: 0 0 0 1px ",";\n  }\n\n  "," {\n    visibility: ",";\n  }\n"])),(function(e){return e.checked?Te:Pe}),(function(e){return e.checked?"none":"1px solid ".concat(Ae)}),$n,De,Kn,(function(e){return e.checked?"visible":"hidden"})),Zn=Ge.b.div(hn||(hn=Object(_e.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),et=function(e){var n=e.label,t=e.isChecked,a=e.handleChange;return i.a.createElement(Xn,null,i.a.createElement(Zn,null,i.a.createElement($n,{checked:t,onChange:function(){return a(!t)}}),i.a.createElement(Yn,{checked:t},i.a.createElement(Kn,{src:Vn.a}))),i.a.createElement("span",null,n))},nt=t(145),tt=t.n(nt),at=Ge.b.form(jn||(jn=Object(_e.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-grow: 1;\n  gap: 1rem;\n\n  "," {\n    flex-direction: column;\n    align-items: flex-start;\n    height: auto;\n    padding: 2rem 0.25rem;\n    width: 100%;\n  }\n"])),nn.medium),rt=Ge.b.input(On||(On=Object(_e.a)(["\n  background: ",";\n  border: 1px solid ",";\n  box-sizing: border-box;\n  border-radius: 0.75rem;\n  color: ",";\n  padding: 0.75rem;\n  min-width: 20rem;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 95% 50%;\n\n  "," {\n    min-width: auto;\n  }\n\n  "," {\n    min-width: 100%;\n  }\n"])),Pe,Ae,Se,tt.a,nn.large,nn.medium),it=Ge.b.div(vn||(vn=Object(_e.a)(["\n  display: flex;\n  gap: 1rem;\n"]))),ct=function(e){var n=e.searchDetails,t=e.changeSearchDetails;return i.a.createElement(at,null,i.a.createElement(rt,{placeholder:"Search",value:n.search,onChange:function(e){return t(Object(U.a)(Object(U.a)({},n),{},{search:e.target.value}))}}),i.a.createElement(it,null,i.a.createElement(et,{label:"Active",handleChange:function(e){return t(Object(U.a)(Object(U.a)({},n),{},{active:e}))},isChecked:n.active}),i.a.createElement(et,{label:"Promo",handleChange:function(e){return t(Object(U.a)(Object(U.a)({},n),{},{promo:e}))},isChecked:n.promo})))},ot=Ge.b.header(En||(En=Object(_e.a)(["\n  display: flex;\n  align-items: center;\n  padding: 2rem 10rem;\n  height: 5rem;\n  width: 100%;\n  background-color: ",";\n\n  "," {\n    padding: 0 1rem;\n  }\n\n  "," {\n    position: relative;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    height: auto;\n    padding: 2rem 1rem 0rem;\n    height: auto;\n  }\n"])),Pe,nn.extraLarge,nn.medium),lt=Ge.b.img(yn||(yn=Object(_e.a)(["\n  margin-right: 5rem;\n"]))),st=Object(Ge.b)(l.b)(xn||(xn=Object(_e.a)(["\n  "," {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n  }\n"])),nn.medium),ut=Object(Ge.b)(Xe)(wn||(wn=Object(_e.a)(["\n  width: 5rem;\n"]))),mt=function(e){return i.a.createElement(ot,null,i.a.createElement(l.b,{to:Ee.login},i.a.createElement(lt,{src:We.a})),i.a.createElement(ct,e),i.a.createElement(st,{to:Ee.login},i.a.createElement(ut,null,"Log in")))},dt=t(158),bt=t(146),pt=t.n(bt),gt=t(147),ft=t.n(gt),ht=t(186),jt=Object(Ge.b)(ht.a)(kn||(kn=Object(_e.a)(["\n  .ant-modal-content {\n    border-radius: 0.5rem;\n    margin: 1rem;\n    overflow: hidden;\n\n    "," {\n      margin: 0;\n    }\n  }\n  .ant-modal-body {\n    padding: 0;\n  }\n"])),nn.medium),Ot={backgroundColor:"rgba(0, 0, 0, 0.85)"},vt=Ge.b.img(Pn||(Pn=Object(_e.a)(["\n  height: 50%;\n  width: 100%;\n"]))),Et=Ge.b.h3(Sn||(Sn=Object(_e.a)(["\n  font-size: ",";\n  font-weight: 600;\n  margin: 1.5rem 1rem 0.5rem;\n"])),ke),yt=Ge.b.p(Tn||(Tn=Object(_e.a)(["\n  font-size: ",";\n  color: ",";\n  margin: 0rem 1rem 3rem;\n"])),xe,Fe),xt=function(e){var n=e.isModalOpen,t=e.toogleModal,a=e.product,r=a.name,c=a.description,o=a.image;return i.a.createElement(jt,{visible:n,onCancel:t,footer:!1,maskStyle:Ot},i.a.createElement(vt,{src:o,alt:"".concat(r," image")}),i.a.createElement(Et,null,r),i.a.createElement(yt,null,c))},wt=Ge.b.section(Dn||(Dn=Object(_e.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  background-color: ",";\n"])),Pe),kt=Ge.b.img(Cn||(Cn=Object(_e.a)(["\n  height: 10rem;\n  width: 100%;\n  opacity: ",";\n\n  "," {\n    height: 55%;\n  }\n"])),(function(e){return e.isActive?1:.5}),nn.small),Pt=Ge.b.div(An||(An=Object(_e.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  width: 100%;\n  height: 12rem;\n\n  "," {\n    height: 15rem;\n  }\n"])),nn.large),St=Ge.b.h3(Fn||(Fn=Object(_e.a)(["\n  font-size: ",";\n  margin: 0;\n"])),we),Tt=Ge.b.div(zn||(zn=Object(_e.a)(["\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n"]))),Dt=Ge.b.img(Mn||(Mn=Object(_e.a)([""]))),Ct=Ge.b.p(Rn||(Rn=Object(_e.a)(["\n  font-size: ",";\n  color: ",";\n  flex-grow: 1;\n  margin: 0;\n"])),xe,Fe),At=Object(Ge.b)(Ve)(In||(In=Object(_e.a)(["\n  height: 2.5rem;\n"]))),Ft=Ge.b.span(Ln||(Ln=Object(_e.a)(["\n  position: absolute;\n  top: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 4.5rem;\n  height: 1.75rem;\n\n  background-color: ",";\n  color: ",";\n"])),Ce,Pe),zt=function(e){var n=e.product,t=e.product,a=t.name,c=t.description,o=t.image,l=t.rating,s=t.promo,u=t.active,m=Object(r.useState)(!1),d=Object(dt.a)(m,2),b=d[0],p=d[1],g=new Array(5).fill(!1,0,5).fill(!0,0,l),f=function(){p((function(e){return!e}))};return i.a.createElement(wt,null,i.a.createElement(kt,{isActive:u,src:o,alt:"".concat(a," image")}),s&&i.a.createElement(Ft,null,"Promo"),i.a.createElement(Pt,null,i.a.createElement(St,null,a),i.a.createElement(Ct,null,c),i.a.createElement(Tt,null,g.map((function(e,n){return e?i.a.createElement(Dt,{key:n,src:pt.a,alt:"Filled star"}):i.a.createElement(Dt,{key:n,src:ft.a,alt:"Empty Star"})}))),i.a.createElement(At,{onClick:function(){return u&&f()},isDisabled:!u},u?"Show details":"Unavailable"),i.a.createElement(xt,{product:n,toogleModal:f,isModalOpen:b})))},Mt=t(184),Rt=Ge.b.div(Un||(Un=Object(_e.a)(["\n  width: 100%;\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  max-height: 5rem;\n"]))),It=Ge.b.button(qn||(qn=Object(_e.a)(["\n  cursor: ",";\n  border: none;\n  background: transparent;\n  color: ",";\n  font-size: ",";\n  padding-bottom: 0.25rem;\n  height: 100%;\n\n  :hover {\n    color: ",";\n  }\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}),(function(e){return e.isDisabled&&Fe}),xe,(function(e){return!e.isDisabled&&Te})),Lt=Object(Ge.b)(Mt.a)(_n||(_n=Object(_e.a)(["\n  .ant-pagination-prev,\n  .ant-pagination-next {\n    display: none;\n  }\n\n  .ant-pagination-item {\n    border: none;\n    background: transparent;\n    font-family: ",";\n    min-width: 0;\n  }\n\n  .ant-pagination-item a {\n    :hover {\n      color: ",";\n    }\n  }\n\n  .ant-pagination-item-active a {\n    color: ",";\n    padding: 0 0.5rem;\n\n    :hover {\n      color: ",";\n    }\n  }\n"])),ye,Te,Te,Te),Ut=function(e){var n=e.fetchSpecificPage,t=e.productsMeta,a=t.totalItems,r=t.currentPage,c=t.itemsPerPage,o=t.totalPages,l=parseInt(r,10),s=1===l,u=l===o,m=function(e){window.scroll({top:0,left:0,behavior:"smooth"}),n(e)};return i.a.createElement(Rt,null,i.a.createElement(It,{isDisabled:1===l,onClick:function(){return!s&&m(1)}},"First"),i.a.createElement(Lt,{total:a,onChange:m,pageSize:parseInt(c),showSizeChanger:!1,current:l}),i.a.createElement(It,{isDisabled:l===o,onClick:function(){return!u&&m(o)}},"Last"))},qt=t(153),_t=t.n(qt),Gt=Ge.b.div(Gn||(Gn=Object(_e.a)(["\n  width: 40%;\n  height: 20rem;\n  background-color: ",";\n  margin: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.5rem;\n\n  "," {\n    width: 90%;\n    height: 30rem;\n  }\n"])),Pe,nn.medium),Bt=Ge.b.img(Bn||(Bn=Object(_e.a)(["\n  margin-bottom: 0.75rem;\n"]))),Ht=Ge.b.h3(Hn||(Hn=Object(_e.a)(["\n  font-size: ",";\n  margin: 0;\n"])),ke),Jt=Ge.b.p(Jn||(Jn=Object(_e.a)(["\n  color: ",";\n"])),Fe),Nt=function(){return i.a.createElement(Gt,null,i.a.createElement(Bt,{src:_t.a,alt:"Empty icon"}),i.a.createElement(Ht,null,"Ooops\u2026 It\u2019s empty here"),i.a.createElement(Jt,null,"There are no products on the list"))},Qt=Ge.b.main(Nn||(Nn=Object(_e.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 2rem;\n  padding: 3rem 10rem;\n\n  "," {\n    padding: 2rem 1rem;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  "," {\n    grid-template-columns: 1fr;\n  }\n"])),nn.big,nn.medium,nn.small),Wt=function(e){var n=e.products,t=e.productsMeta,a=e.fetchSpecificPage,r=n.length!==(null===t||void 0===t?void 0:t.totalItems);return n.length?i.a.createElement(Qt,null,n.map((function(e){return i.a.createElement(zt,{key:e.id,product:e})})),r&&t&&i.a.createElement(Ut,{productsMeta:t,fetchSpecificPage:a})):i.a.createElement(Nt,null,"empty")},Vt=Ge.b.div(Qn||(Qn=Object(_e.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),Xt=function(){var e=Object(u.c)(te),n=Object(u.c)(ae),t=Object(u.c)(re),a=Object(u.c)(ie),c=Object(u.b)(),o=Object(r.useCallback)((function(n){c(y.request(Object(U.a)(Object(U.a)({},e),{},{page:n})))}),[c,e]);return Object(r.useEffect)((function(){o(1)}),[o]),i.a.createElement(Vt,null,i.a.createElement(mt,{searchDetails:e,changeSearchDetails:function(e){c(x(e))}}),a?i.a.createElement($e,{src:dn.a,alt:"Loader"}):i.a.createElement(Wt,{products:n,productsMeta:t,fetchSpecificPage:o}))},$t=function(){return i.a.createElement(He.d,null,i.a.createElement(He.b,{path:Ee.home,exact:!0,component:Xt}),i.a.createElement(He.b,{path:Ee.login,component:un}),i.a.createElement(He.a,{to:Ee.home}))},Kt=function(){return i.a.createElement(u.a,{store:le},i.a.createElement(Be,null),i.a.createElement($t,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(s,null,i.a.createElement(Kt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);
//# sourceMappingURL=main.35e14d09.chunk.js.map