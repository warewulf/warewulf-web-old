"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[480],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,f=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3334:function(e,t,n){n.r(t),n.d(t,{default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"ipmi",title:"IPMI"},d={unversionedId:"enchiridion/ipmi",id:"enchiridion/ipmi",isDocsHomePage:!1,title:"IPMI",description:"It is possible to control the power or connect a console to your nodes being managed by Warewulf by connecting to the BMC through the use of IPMI. We will discuss how to set this up below.",source:"@site/docs/enchiridion/ipmi.md",sourceDirName:"enchiridion",slug:"/enchiridion/ipmi",permalink:"/docs/enchiridion/ipmi",editUrl:"https://github.com/hpcng/warewulf-web-old/edit/main/docs/enchiridion/ipmi.md",version:"current",frontMatter:{id:"ipmi",title:"IPMI"},sidebar:"someSidebar",previous:{title:"Node Provisioning",permalink:"/docs/enchiridion/provisioning"},next:{title:"Security",permalink:"/docs/enchiridion/security"}},p=[{value:"IPMI Settings",id:"ipmi-settings",children:[]},{value:"Reviewing Settings",id:"reviewing-settings",children:[{value:"Profile View",id:"profile-view",children:[]},{value:"Node View",id:"node-view",children:[]},{value:"Review Only IPMI Settings",id:"review-only-ipmi-settings",children:[]}]},{value:"Power Commands",id:"power-commands",children:[]},{value:"Console",id:"console",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"It is possible to control the power or connect a console to your nodes being managed by Warewulf by connecting to the BMC through the use of IPMI. We will discuss how to set this up below."),(0,l.kt)("h2",{id:"ipmi-settings"},"IPMI Settings"),(0,l.kt)("p",null,"The common settings for the IPMI interfaces on all nodes can be set on a Profile level.  The only field that would need to be assigned to each individual node would be the IP address."),(0,l.kt)("p",null,"If an individual node has different settings, you can set the IPMI settings for that specific node, overriding the default settings."),(0,l.kt)("p",null,"Here is a table outlining the fields on a Profile and Node level, along with the parameters that can be used when running ",(0,l.kt)("inlineCode",{parentName:"p"},"wwctl profile set")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"wwctl node set"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Profile"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Node"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IpmiIpaddr"),(0,l.kt)("td",{parentName:"tr",align:null},"--ipmi"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IpmiNetmask"),(0,l.kt)("td",{parentName:"tr",align:null},"--ipminetmask"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IpmiPort"),(0,l.kt)("td",{parentName:"tr",align:null},"--ipmiport"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"623")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IpmiGateway"),(0,l.kt)("td",{parentName:"tr",align:null},"--ipmigateway"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IpmiUserName"),(0,l.kt)("td",{parentName:"tr",align:null},"--ipmiuser"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IpmiPassword"),(0,l.kt)("td",{parentName:"tr",align:null},"--ipmipass"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IpmiInterface"),(0,l.kt)("td",{parentName:"tr",align:null},"--ipmiinterface"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"'lan' or 'lanplus'"),(0,l.kt)("td",{parentName:"tr",align:null},"lan")))),(0,l.kt)("h2",{id:"reviewing-settings"},"Reviewing Settings"),(0,l.kt)("p",null,"There are multiple ways to review the IPMI settings. They can be reviewed from a Profile level, all the way down to a specific Node."),(0,l.kt)("h3",{id:"profile-view"},"Profile View"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo wwctl profile list -a\n\n################################################################################\nPROFILE NAME         FIELD              VALUE\ndefault              Id                 default\ndefault              Comment            This profile is automatically included for each node\ndefault              Cluster            --\ndefault              Container          rocky\ndefault              Kernel             4.18.0-348.2.1.el8_5.x86_64\ndefault              KernelArgs         --\ndefault              Init               --\ndefault              Root               --\ndefault              RuntimeOverlay     --\ndefault              SystemOverlay      --\ndefault              Ipxe               --\ndefault              IpmiNetmask        255.255.255.0\ndefault              IpmiPort           --\ndefault              IpmiGateway        192.168.99.1\ndefault              IpmiUserName       admin\ndefault              IpmiInterface      lanplus\ndefault              eth0:IPADDR        --\ndefault              eth0:NETMASK       255.255.240.0\ndefault              eth0:GATEWAY       10.1.96.6\ndefault              eth0:HWADDR        --\ndefault              eth0:TYPE          --\ndefault              eth0:DEFAULT       false\n\n")),(0,l.kt)("h3",{id:"node-view"},"Node View"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo wwctl node list node0001      -a\n\n################################################################################\nNODE                 FIELD              PROFILE      VALUE\nnode0001             Id                 --           node0001     \nnode0001             Comment            default      This profile is automatically included for each node\nnode0001             Cluster            --           --\nnode0001             Profiles           --           default\nnode0001             Discoverable       --           false\nnode0001             Container          default      rocky\nnode0001             Kernel             default      4.18.0-348.2.1.el8_5.x86_64\nnode0001             KernelArgs         --           (quiet crashkernel=no vga=791 rootfstype=rootfs)\nnode0001             RuntimeOverlay     --           (default)\nnode0001             SystemOverlay      --           (default)\nnode0001             Ipxe               --           (default)\nnode0001             Init               --           (/sbin/init)\nnode0001             Root               --           (initramfs)\nnode0001             IpmiIpaddr         --           192.168.99.10\nnode0001             IpmiNetmask        --           255.255.255.0\nnode0001             IpmiPort           --           --\nnode0001             IpmiGateway        --           192.168.99.1\nnode0001             IpmiUserName       default      admin\nnode0001             IpmiInterface      default      lanplus\nnode0001             eth0:HWADDR        --           52:54:00:1a:08:60\nnode0001             eth0:IPADDR        --           192.168.100.152\nnode0001             eth0:NETMASK       default      255.255.255.0\nnode0001             eth0:GATEWAY       default      192.168.100.1\nnode0001             eth0:TYPE          --           --\nnode0001             eth0:DEFAULT       --           false\n\n")),(0,l.kt)("h3",{id:"review-only-ipmi-settings"},"Review Only IPMI Settings"),(0,l.kt)("p",null,"The above views show you everything that is set on a Profile or Node level. That is a lot of detail. If you want to view key IPMI connecton details for a node or all nodes, you can do the following."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo wwctl node list -i\n\nNODE NAME              IPMI IPADDR      IPMI PORT  IPMI USERNAME        IPMI PASSWORD        IPMI INTERFACE\n============================================================================================================\nnode0001               192.168.99.10    --         admin                supersecret          lanplus\nnode0002               192.168.99.11    --         admin                supersecret          lanplus\nnode0003               192.168.99.12    --         admin                supersecret          lanplus\n\n")),(0,l.kt)("h2",{id:"power-commands"},"Power Commands"),(0,l.kt)("p",null,"The following commands can be used to manage the current power state of your nodes through IPMI."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wwctl power [command]")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cycle"),(0,l.kt)("td",{parentName:"tr",align:null},"Turns the power off and then on")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"off"),(0,l.kt)("td",{parentName:"tr",align:null},"Turns the power off")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on"),(0,l.kt)("td",{parentName:"tr",align:null},"Turns the power on")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reset"),(0,l.kt)("td",{parentName:"tr",align:null},"Issues a reset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"soft"),(0,l.kt)("td",{parentName:"tr",align:null},"Shutdown gracefully")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows current power status")))),(0,l.kt)("h2",{id:"console"},"Console"),(0,l.kt)("p",null,"If your node is setup to use serial over lan (SOL), Warewulf can connect a console to the node."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo wwctl node console node0001")))}s.isMDXComponent=!0}}]);