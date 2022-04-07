"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[939],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),v=l,m=d["".concat(i,".").concat(v)]||d[v]||s[v]||a;return t?r.createElement(m,u(u({ref:n},p),{},{components:t})):r.createElement(m,u({ref:n},p))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,u=new Array(a);u[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var c=2;c<a;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1197:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),u=["components"],o={id:"jdk",sidebar_position:2},i="JDK",c={unversionedId:"setup/jdk",id:"setup/jdk",title:"JDK",description:"MacOS",source:"@site/docs/setup/110.jdk.md",sourceDirName:"setup",slug:"/setup/jdk",permalink:"/dev-docs/docs/setup/jdk",tags:[],version:"current",lastUpdatedAt:1649335423,formattedLastUpdatedAt:"4/7/2022",sidebarPosition:2,frontMatter:{id:"jdk",sidebar_position:2},sidebar:"setup",previous:{title:"MySQL",permalink:"/dev-docs/docs/setup/mysql"}},p=[{value:"MacOS",id:"macos",children:[{value:"zulu11",id:"zulu11",children:[],level:3},{value:"zulu17",id:"zulu17",children:[],level:3},{value:"jenv",id:"jenv",children:[],level:3},{value:"direnv",id:"direnv",children:[],level:3}],level:2}],s={toc:p};function d(e){var n=e.components,t=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jdk"},"JDK"),(0,a.kt)("h2",{id:"macos"},"MacOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/cask/zulu"},"https://formulae.brew.sh/cask/zulu"))),(0,a.kt)("h3",{id:"zulu11"},"zulu11"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install --cask zulu11\n")),(0,a.kt)("h3",{id:"zulu17"},"zulu17"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install --cask zulu\n")),(0,a.kt)("h3",{id:"jenv"},"jenv"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"java \uc5ec\ub7ec\uac1c \uc124\uce58\uc2dc, \ubc84\uc804\uc744 \uace8\ub77c\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jenv/jenv"},"https://github.com/jenv/jenv"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install jenv\n")),(0,a.kt)("p",null,"\uae30\ubcf8\uc124\uc815 (~/.zprofile)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'export JENV_PATH=$HOME/.jenv\nexport PATH=$JENV_PATH/bin:$PATH\neval "$(jenv init -)"\n')),(0,a.kt)("p",null,"\uc0ac\uc6a9\ubc29\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \ub4f1\ub85d\njenv add /Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home\njenv add /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home\n\n# \ubaa9\ub85d \ud655\uc778\njenv versions\n\nsystem\n11\n11.0\n11.0.13\n17\n17.0\n17.0.1\nzulu64-11.0.13\n* zulu64-17.0.1 (set by /Users/rxcats/.jenv/version)\n\n# Global \ubc84\uc804 \uc124\uc815\njenv global zulu64-17.0.1\n\n# Local \ubc84\uc804 \uc124\uc815\njenv local zulu64-11.0.13\n")),(0,a.kt)("h3",{id:"direnv"},"direnv"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub514\ub809\ud1a0\ub9ac\ubcc4 \ud658\uacbd\ubcc0\uc218 \uc124\uc815\uc73c\ub85c \ub514\ub809\ud1a0\ub9ac\ubcc4\ub85c java \ubc84\uc804 \uad00\ub9ac"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://direnv.net"},"https://direnv.net"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install direnv\n")),(0,a.kt)("p",null,"\uae30\ubcf8\uc124\uc815 (~/.zprofile)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'eval "$(direnv hook zsh)"\n')),(0,a.kt)("p",null,"\ub514\ub809\ud1a0\ub9ac\ubcc4 \uc124\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \ub514\ub809\ud1a0\ub9ac \uc548\uc5d0 .envrc \ud30c\uc77c \uc0dd\uc131 \ud6c4 \uc124\uc815 (\ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac\uc5d0 jdk 11 \ubc84\uc804 \uc801\uc6a9)\njenv local zulu64-11.0.13\n\n# \ud574\ub2f9 \uacbd\ub85c\uc5d0\uc11c \uc124\uc815 \uc801\uc6a9\ud558\uae30\ndirenv allow .\n\n# \uc124\uc815 \ud6c4 \ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc9c4\uc785\ud558\uba74 \uc544\ub798\uc640 \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ub098\uc628\ub2e4\ndirenv: loading .envrc\ndirenv: export +JAVA_HOME ~PATH\n")))}d.isMDXComponent=!0}}]);