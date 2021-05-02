(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[4195],{6252:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p}});var n=t(2122),r=t(7294),c=t(4184),l=t.n(c),i=t(5421),s=t(6742),o=t(2263),u=t(4996),m={heroBanner:"heroBanner_3P7f",logo:"logo_2pRD",buttons:"buttons_1r9m",hero:"hero_2alu",header:"header_2zn2",tagLine:"tagLine_3_55",features:"features_3azU",featureImage:"featureImage_ZtzX"},d=[{title:"Customizable",imageUrl:"img/customizable.svg",description:r.createElement(r.Fragment,null,"Fully customizable components")},{title:"Themes",imageUrl:"img/theme.svg",description:r.createElement(r.Fragment,null,r.createElement("b",null,"LIGHT")," and ",r.createElement("b",null,"DARK")," themes")},{title:"Localizable",imageUrl:"img/localizable.svg",description:r.createElement(r.Fragment,null,"Localization and RTL Support")}];function h(e){var a=e.imageUrl,t=e.title,n=e.description,c=(0,u.Z)(a);return r.createElement("div",{className:l()("col col--4 text--center",m.feature)},c&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:m.featureImage,src:c,alt:t})),r.createElement("h3",null,t),r.createElement("p",null,n))}function p(){var e=(0,o.default)().siteConfig,a=void 0===e?{}:e;return r.createElement(i.Z,{description:"React Native Dropdown Picker is a single / multiple, categorizable, customizable, localizable and searchable item picker (drop-down) component for react native which supports both Android and iOS."},r.createElement("div",{className:m.hero},r.createElement("header",{className:m.header},r.createElement("img",{src:a.themeConfig.navbar.logo.src,className:m.logo}),r.createElement("h1",null,a.title),r.createElement("p",{className:m.tagLine},a.tagline),r.createElement("div",{className:m.buttons},r.createElement(s.Z,{to:(0,u.Z)("docs/")},"Get Started"))),r.createElement("main",null,d&&d.length>0&&r.createElement("section",{className:m.section},r.createElement("div",{className:m.features},d.map((function(e,a){return r.createElement(h,(0,n.Z)({key:a},e))})))))))}},6979:function(e,a,t){"use strict";var n=t(7294),r=t(4184),c=t.n(r),l=t(5977),i=t(2263);a.Z=function(e){var a=(0,n.useRef)(!1),r=(0,n.useRef)(null),s=(0,l.k6)(),o=(0,i.default)().siteConfig,u=(void 0===o?{}:o).baseUrl,m=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(9878),t.e(4452)]).then(t.bind(t,7780)),Promise.all([t.e(532),t.e(3343)]).then(t.bind(t,3343))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=u+t.url;document.createElement("a").href=n,s.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},d=(0,n.useCallback)((function(a){r.current.contains(a.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:d,onBlur:d,ref:r}))}}}]);