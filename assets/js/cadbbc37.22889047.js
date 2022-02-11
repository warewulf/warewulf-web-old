"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[19],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6565:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"overlays",title:"Warewulf Overlays"},s={unversionedId:"enchiridion/overlays",id:"enchiridion/overlays",isDocsHomePage:!1,title:"Warewulf Overlays",description:"So at this point, we have discussed how Warewulf is designed to scalably provision and manage thousands of cluster nodes by utilizing identical stateless boot images. And there-in lies a problem to solve. If these boot images are completely identical, then how do we configure things like hostnames? IP addresses? Or any other node specific custom configurations?",source:"@site/docs/enchiridion/overlays.md",sourceDirName:"enchiridion",slug:"/enchiridion/overlays",permalink:"/docs/enchiridion/overlays",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/enchiridion/overlays.md",version:"current",frontMatter:{id:"overlays",title:"Warewulf Overlays"},sidebar:"someSidebar",previous:{title:"Node Profiles",permalink:"/docs/enchiridion/profiles"},next:{title:"Node Provisioning",permalink:"/docs/enchiridion/provisioning"}},c=[{value:"System Overlay",id:"system-overlay",children:[]},{value:"Runtime Overlay",id:"runtime-overlay",children:[]},{value:"Templates",id:"templates",children:[]},{value:"Using Overlays",id:"using-overlays",children:[]},{value:"Viewing the Files Within an Overlay",id:"viewing-the-files-within-an-overlay",children:[]},{value:"Creating a New File Within an Overlay",id:"creating-a-new-file-within-an-overlay",children:[]},{value:"Building Overlays",id:"building-overlays",children:[]},{value:"Other Overlay Actions",id:"other-overlay-actions",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So at this point, we have discussed how Warewulf is designed to scalably provision and manage thousands of cluster nodes by utilizing identical stateless boot images. And there-in lies a problem to solve. If these boot images are completely identical, then how do we configure things like hostnames? IP addresses? Or any other node specific custom configurations?"),(0,a.kt)("p",null,"While some of this can be managed by services like DHCP, and other bits by configuration management, which can absolutely be done with Warewulf and many people choose to do, these are heavy-weight solutions to a simple problem to solve."),(0,a.kt)("p",null,"Warewulf solves this with overlays and uses overlays in different ways through the provisioning process. Two of these overlays are exposed to the users, the ",(0,a.kt)("strong",{parentName:"p"},"system overlay")," and the ",(0,a.kt)("strong",{parentName:"p"},"runtime overlay"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"note: Another overlay that isn't directly exposed is the ",(0,a.kt)("strong",{parentName:"p"},"kmods overlay"),' which contains all of the kernel modules to match the configured kernel. Because this overlay is used "behind the scenes" it is outside the scope of this document.')),(0,a.kt)("h2",{id:"system-overlay"},"System Overlay"),(0,a.kt)("p",null,"The System Overlay is used by the core of Warewulf to setup the environment on the node necessary for provisioning. The default system overlay is called ",(0,a.kt)("inlineCode",{parentName:"p"},"wwinit"),". Generally speaking, it will not be necessary to make changes to this overlay, but it is possible to change or configure this overlay to meet site specific needs if necessary."),(0,a.kt)("h2",{id:"runtime-overlay"},"Runtime Overlay"),(0,a.kt)("p",null,"The Runtime Overlay is the overlay that is responsible for most of the typical system administration configurations. Here you will make changes necessary to support your operating system as well as application configurations."),(0,a.kt)("p",null,"Once the system is provisioned and booted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"wwclient")," program (which is provisioned as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"wwinit")," system overlay) will continuously update the node with updates in the runtime overlay."),(0,a.kt)("h2",{id:"templates"},"Templates"),(0,a.kt)("p",null,"Templates allow you to create dynamic content such that the files downloaded for each node will be customized for that node. Templates allow you to insert everything from variables, to including files from the control node, as well as conditional content and loops."),(0,a.kt)("p",null,"Warewulf uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"text/template")," engine to facilitate implementing dynamic content in a simple and standardized manner."),(0,a.kt)("p",null,"All template files will end with the suffix of ",(0,a.kt)("inlineCode",{parentName:"p"},".ww"),". That tells Warewulf that when building a file, that it should parse that file as a template. When it does that, the resulting file is static and can have node customizations that are obtained from the node configuration attributes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"note: When the file is persisted within the built overlay, the ",(0,a.kt)("inlineCode",{parentName:"p"},".ww")," will be dropped, so ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts.ww")," will end up being ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),".")),(0,a.kt)("h2",{id:"using-overlays"},"Using Overlays"),(0,a.kt)("p",null,"Warewulf includes a command group for manipulating overlays (",(0,a.kt)("inlineCode",{parentName:"p"},"wwctl overlay"),"). With this you can add, edit, remove, change ownership, permissions, etc."),(0,a.kt)("p",null,"The general syntax is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wwctl overlay [action] [overlay name] ...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"action"),": the overlay subcommand you are invoking"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"overlay name"),": the name of the overlay in question within a given type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"..."),": additional arguments are action specific")),(0,a.kt)("p",null,'By default there is one overlay in each of the system and runtime overlay types. Both overlays are called "default". To say it differently, there are two default overlays, one is a system overlay and one is a runtime overlay.'),(0,a.kt)("h2",{id:"viewing-the-files-within-an-overlay"},"Viewing the Files Within an Overlay"),(0,a.kt)("p",null,"Overlays can be viewed with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"wwctl overlay list"),". You can see the files within an overlay by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"-a")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-l")," options as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo wwctl overlay list -l generic\nPERM MODE    UID GID   OVERLAY    FILE PATH\n-rwxr-xr-x     0 0     generic            /etc/\n-rw-r--r--     0 0     generic            /etc/group.ww\n-rw-r--r--     0 0     generic            /etc/hosts.ww\n-rw-r--r--     0 0     generic            /etc/passwd.ww\n-rwxr-xr-x     0 0     generic            /root/\n-rwxr-xr-x     0 0     generic            /root/.ssh/\n-rw-r--r--     0 0     generic            /root/.ssh/authorized_keys.ww\n")),(0,a.kt)("h2",{id:"creating-a-new-file-within-an-overlay"},"Creating a New File Within an Overlay"),(0,a.kt)("p",null,"Just like any file on the system, you can create and edit a file at the same time. So to do that, you simple ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," a new file as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo wwctl overlay edit [overlay name] [file path]\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo wwctl overlay edit generic /etc/testfile\n")),(0,a.kt)("p",null,"and you can validate that the file is there with the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo wwctl overlay list generic -l\nPERM MODE    UID GID   RUNTIME-OVERLAY    FILE PATH\n-rwxr-xr-x     0 0     generic            /etc/\n-rw-r--r--     0 0     generic            /etc/group.ww\n-rw-r--r--     0 0     generic            /etc/hosts.ww\n-rw-r--r--     0 0     generic            /etc/passwd.ww\n-rwxr-xr-x     0 0     generic            /etc/testfile\n-rwxr-xr-x     0 0     generic            /root/\n-rwxr-xr-x     0 0     generic            /root/.ssh/\n-rw-r--r--     0 0     generic            /root/.ssh/authorized_keys.ww\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"note: To create a template file, simply name the file with the suffix ",(0,a.kt)("inlineCode",{parentName:"p"},".ww"),". This suffix will tell Warewulf that the file should be parsed by the templating engine and written into the overlay with the suffix stripped off.")),(0,a.kt)("h2",{id:"building-overlays"},"Building Overlays"),(0,a.kt)("p",null,"By default Warewulf will build/update and cache overlays as needed (configurable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"warewulf.conf"),")."),(0,a.kt)("p",null,"You can however build overlays by hand, and in some cases this will be advantageous (like if you are freshly booting thousands of compute nodes in parallel). The command to do that is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# wwctl overlay build n00[00-10]\nBuilding overlays for n0000: [wwinit, generic]\nBuilding overlays for n0001: [wwinit, generic]\nBuilding overlays for n0002: [wwinit, generic]\nBuilding overlays for n0003: [wwinit, generic]\nBuilding overlays for n0004: [wwinit, generic]\nBuilding overlays for n0005: [wwinit, generic]\nBuilding overlays for n0006: [wwinit, generic]\nBuilding overlays for n0007: [wwinit, generic]\nBuilding overlays for n0008: [wwinit, generic]\nBuilding overlays for n0009: [wwinit, generic]\nBuilding overlays for n0010: [wwinit, generic]\n")),(0,a.kt)("h2",{id:"other-overlay-actions"},"Other Overlay Actions"),(0,a.kt)("p",null,"Warewulf includes a number of overlay action commands to interact with the overlays in a programmatic and controlled manner. All of the commands use very similar usage structure and work as the above examples do. A summary of all of the overlay actions are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"build"),": (Re)build an overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chmod"),": Change file permissions within an overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chown"),": Change file ownership within an overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"create"),": Initialize a new Overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"delete"),": Delete Warewulf Overlay or files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"edit"),": Edit/Create a file within a Warewulf Overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"import"),": Import a file into a Warewulf Overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"list"),": List Warewulf Overlays and files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mkdir"),": Create a new directory within an Overlay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"show"),": Show (cat) a file within a Warewulf Overlay")))}d.isMDXComponent=!0}}]);