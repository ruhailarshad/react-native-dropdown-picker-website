(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[7645],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(i,".").concat(m)]||u[m]||s[m]||r;return t?o.createElement(k,l(l({ref:n},d),{},{components:t})):o.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7694:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return d}});var o=t(2122),a=t(9756),r=(t(7294),t(3905)),l={id:"icons",title:"Icons"},c={unversionedId:"advanced/icons",id:"version-5.0.0/advanced/icons",isDocsHomePage:!1,title:"Icons",description:"Item Icon",source:"@site/versioned_docs/version-5.0.0/advanced/icons.md",sourceDirName:"advanced",slug:"/advanced/icons",permalink:"/react-native-dropdown-picker-website/docs/advanced/icons",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/versioned_docs/version-5.0.0/advanced/icons.md",version:"5.0.0",frontMatter:{id:"icons",title:"Icons"},sidebar:"version-5.0.0/someSidebar",previous:{title:"Placeholder",permalink:"/react-native-dropdown-picker-website/docs/advanced/placeholder"},next:{title:"Loading",permalink:"/react-native-dropdown-picker-website/docs/advanced/loading"}},i=[{value:"Item Icon",id:"item-icon",children:[]},{value:"Props",id:"props",children:[{value:"<code>showArrowIcon</code>",id:"showarrowicon",children:[]},{value:"<code>showTickIcon</code>",id:"showtickicon",children:[]},{value:"<code>ArrowUpIconComponent</code>",id:"arrowupiconcomponent",children:[]},{value:"<code>ArrowDownIconComponent</code>",id:"arrowdowniconcomponent",children:[]},{value:"<code>TickIconComponent</code>",id:"tickiconcomponent",children:[]},{value:"<code>CloseIconComponent</code>",id:"closeiconcomponent",children:[]}]},{value:"Styling",id:"styling",children:[{value:"<code>arrowIconStyle</code>",id:"arrowiconstyle",children:[]},{value:"<code>tickIconStyle</code>",id:"tickiconstyle",children:[]},{value:"<code>closeIconStyle</code>",id:"closeiconstyle",children:[]},{value:"<code>iconContainerStyle</code>",id:"iconcontainerstyle",children:[]},{value:"<code>arrowIconContainerStyle</code>",id:"arrowiconcontainerstyle",children:[]},{value:"<code>tickIconContainerStyle</code>",id:"tickiconcontainerstyle",children:[]},{value:"<code>closeIconContainerStyle</code>",id:"closeiconcontainerstyle",children:[]}]}],p={toc:i};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"item-icon"},"Item Icon"),(0,r.kt)("p",null,"Each item can have an icon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  label: 'Item',\n  value: 'item',\n  icon: () => <Image source={require('./assets/icon.png')} style={styles.iconStyle} />\n}\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"showarrowicon"},(0,r.kt)("inlineCode",{parentName:"h3"},"showArrowIcon")),(0,r.kt)("p",null,"Specifies if the arrow icons should be visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"showArrowIcon={true}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"showtickicon"},(0,r.kt)("inlineCode",{parentName:"h3"},"showTickIcon")),(0,r.kt)("p",null,"Specifies if the tick icon should be visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"showTickIcon={true}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"arrowupiconcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"ArrowUpIconComponent")),(0,r.kt)("p",null,"Changes the arrow-up icon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"ArrowUpIconComponent={({style}) => <MyArrowUpIcon style={style} />}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function")))),(0,r.kt)("h3",{id:"arrowdowniconcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"ArrowDownIconComponent")),(0,r.kt)("p",null,"Changes the arrow-down icon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"ArrowDownIconComponent={({style}) => <MyArrowDownIcon style={style} />}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function")))),(0,r.kt)("h3",{id:"tickiconcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"TickIconComponent")),(0,r.kt)("p",null,"Changes the tick icon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"TickIconComponent={({style}) => <MyTickIcon style={style} />}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function")))),(0,r.kt)("h3",{id:"closeiconcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"CloseIconComponent")),(0,r.kt)("p",null,"Changes the close icon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"CloseIconComponent={({style}) => <MyCloseIcon style={style} />}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function")))),(0,r.kt)("h2",{id:"styling"},"Styling"),(0,r.kt)("h3",{id:"arrowiconstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"arrowIconStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"arrowIconStyle={{\n  width: 20,\n  height: 20\n}}\n")),(0,r.kt)("h3",{id:"tickiconstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"tickIconStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"tickIconStyle={{\n  width: 20,\n  height: 20\n}}\n")),(0,r.kt)("h3",{id:"closeiconstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"closeIconStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"closeIconStyle={{\n  width: 30,\n  height: 30\n}}\n")),(0,r.kt)("h3",{id:"iconcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"iconContainerStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"iconContainerStyle={{\n  marginRight: 10\n}}\n")),(0,r.kt)("h3",{id:"arrowiconcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"arrowIconContainerStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"iconContainerStyle={{\n  marginRight: 10\n}}\n")),(0,r.kt)("h3",{id:"tickiconcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"tickIconContainerStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"iconContainerStyle={{\n  marginRight: 10\n}}\n")),(0,r.kt)("h3",{id:"closeiconcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"closeIconContainerStyle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"iconContainerStyle={{\n  marginRight: 10\n}}\n")))}d.isMDXComponent=!0}}]);