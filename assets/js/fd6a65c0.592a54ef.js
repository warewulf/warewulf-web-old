"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[760],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1614:function(e,n,t){t.r(n),t.d(n,{default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],a={id:"kernel",title:"Kernel Management"},c={unversionedId:"enchiridion/kernel",id:"enchiridion/kernel",isDocsHomePage:!1,title:"Node Kernels",description:"Warewulf nodes require a Linux kernel to boot. There are multiple ways to do this, but the default, and easiest way is to install the kernel you wish to use for a particular container, into the container.",source:"@site/docs/enchiridion/kernel.md",sourceDirName:"enchiridion",slug:"/enchiridion/kernel",permalink:"/docs/enchiridion/kernel",editUrl:"https://github.com/hpcng/warewulf-web-old/edit/main/docs/enchiridion/kernel.md",version:"current",frontMatter:{id:"kernel",title:"Kernel Management"},sidebar:"someSidebar",previous:{title:"Container Management",permalink:"/docs/enchiridion/containers"},next:{title:"Node Configuration",permalink:"/docs/enchiridion/nodeconfig"}},s=[{value:"Listing All Imported Kernels",id:"listing-all-imported-kernels",children:[]}],u={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Warewulf nodes require a Linux kernel to boot. There are multiple ways to do this, but the default, and easiest way is to install the kernel you wish to use for a particular container, into the container."),(0,o.kt)("p",null,"Warewulf will locate the kernel automatically within the container and by default use that kernel for any node configured to use that container image."),(0,o.kt)("p",null,"You can see what kernel is included in a container by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"wwctl container list")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# wwctl container list\nCONTAINER NAME            NODES  KERNEL VERSION\nalpine                    0      \nrocky                     0      4.18.0-348.12.2.el8_5.x86_64\nrocky_updated             1      4.18.0-348.23.1.el8_5.x86_64\n")),(0,o.kt)("p",null,"Here you will notice the alpine contianer that was imported has no kernel within it, and each of the rocky containers include a kernel."),(0,o.kt)("p",null,"This model was introduced in Warewulf 4.3.0. Previously, Warewulf managed the kernel and the container separately, which made it hard to build and distribute containers that have custom drivers and/or configurations included (e.g. OFED, GPUs, etc.)."),(0,o.kt)("h1",{id:"kernel-overrides"},"Kernel Overrides"),(0,o.kt)("p",null,"It is still possible to specify a kernel to a container if it doesn't include it's own kernel, or if you wish to override the default kernel by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kernel override")," capability."),(0,o.kt)("p",null,"You can specify this option either within the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes.conf")," directly or via the command line with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--kerneloverride")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"wwctl node set")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"wwctl profile set")," commands."),(0,o.kt)("p",null,"In this case you will also need to import a kernel specifically into Warewulf for this purpose using the ",(0,o.kt)("inlineCode",{parentName:"p"},"wwctl kernel import")," command as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo wwctl kernel import $(uname -r)\n4.18.0-305.3.1.el8_4.x86_64: Done\n")),(0,o.kt)("p",null,"This process will import not only the kernel image itself, but also all of the kernel modules and firmware associated to this kernel. "),(0,o.kt)("h2",{id:"listing-all-imported-kernels"},"Listing All Imported Kernels"),(0,o.kt)("p",null,"Once the kernel has been imported, you can list them all with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo wwctl kernel list\nVNFS NAME                           NODES \n4.18.0-305.3.1.el8_4.x86_64              0\n")),(0,o.kt)("p",null,"Once a kernel has been imported and showing up in this list you can configure it to boot compute nodes."))}p.isMDXComponent=!0}}]);