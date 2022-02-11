"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[616],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3315:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"el7",title:"EL7 Quickstart (CentOS and RHEL)"},s={unversionedId:"quickstart/el7",id:"quickstart/el7",isDocsHomePage:!1,title:"EL7 Quickstart (CentOS and RHEL)",description:"Install Warewulf and dependencies",source:"@site/docs/quickstart/el7.md",sourceDirName:"quickstart",slug:"/quickstart/el7",permalink:"/docs/quickstart/el7",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/quickstart/el7.md",version:"current",frontMatter:{id:"el7",title:"EL7 Quickstart (CentOS and RHEL)"},sidebar:"someSidebar",previous:{title:"Templating",permalink:"/docs/enchiridion/templating"},next:{title:"EL8 Quickstart (Rocky and RHEL)",permalink:"/docs/quickstart/el8"}},d=[{value:"Install Warewulf and dependencies",id:"install-warewulf-and-dependencies",children:[]},{value:"Configure firewalld",id:"configure-firewalld",children:[]},{value:"Configure the controller",id:"configure-the-controller",children:[]},{value:"Start and enable the Warewulf service",id:"start-and-enable-the-warewulf-service",children:[]},{value:"Configure system services automatically",id:"configure-system-services-automatically",children:[]},{value:"Pull and build the VNFS container and kernel",id:"pull-and-build-the-vnfs-container-and-kernel",children:[]},{value:"Set up the default node profile",id:"set-up-the-default-node-profile",children:[]},{value:"Add a node",id:"add-a-node",children:[]},{value:"Turn on your compute node and watch it boot!",id:"turn-on-your-compute-node-and-watch-it-boot",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install-warewulf-and-dependencies"},"Install Warewulf and dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install golang tftp-server dhcp nfs-utils\n\ngit clone https://github.com/hpcng/warewulf.git\ncd warewulf\nmake all\nsudo make install\n")),(0,o.kt)("h2",{id:"configure-firewalld"},"Configure firewalld"),(0,o.kt)("p",null,"Restart firewalld to register the added service file, add the service to the default zone, and reload."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart firewalld\nsudo firewall-cmd --permanent --add-service warewulf\nsudo firewall-cmd --permanent --add-service nfs\nsudo firewall-cmd --permanent --add-service tftp\nsudo firewall-cmd --reload\n")),(0,o.kt)("h2",{id:"configure-the-controller"},"Configure the controller"),(0,o.kt)("p",null,"Edit the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/warewulf/warewulf.conf")," and ensure that you've set the appropriate\nconfiguration parameters. Here are some of the defaults for reference assuming that ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.200.1"),"\nis the IP address of your cluster's private network interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ipaddr: 192.168.200.1\nnetmask: 255.255.255.0\nwarewulf:\n  port: 9873\n  secure: false\n  update interval: 60\ndhcp:\n  enabled: true\n  range start: 192.168.200.10\n  range end: 192.168.200.99\n  template: default\n  systemd name: dhcpd\ntftp:\n  enabled: true\n  tftproot: /var/lib/tftpboot\n  systemd name: tftp\nnfs:\n  systemd name: nfs-server\n  exports:\n    - /home\n    - /var/warewulf\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The DHCP range ends at ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.200.99")," and as you will see below, the first node static IP\naddress (post boot) is configured to ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.200.100"),"."))),(0,o.kt)("h2",{id:"start-and-enable-the-warewulf-service"},"Start and enable the Warewulf service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the group the warewulfd service will run as\nsudo groupadd -r warewulf\n\n# Reload system services\nsudo systemctl daemon-reload\n\n# Start and enable the warewulfd service\nsudo systemctl enable --now warewulfd\n")),(0,o.kt)("h2",{id:"configure-system-services-automatically"},"Configure system services automatically"),(0,o.kt)("p",null,"There are a number of services and configurations that Warewulf relies on to operate.\nIf you wish to configure all services, you can do so individually (omitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"--all"),")\nwill print a help and usage instructions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl configure --all\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"note: If you just installed the system fresh and have SELinux enforcing, you may need to reboot the system at this stage to properly set the contexts of the TFTP contents. After rebooting, you might also need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ sudo restorecon -Rv /var/lib/tftpboot/")," if there are errors with TFTP still.")),(0,o.kt)("h2",{id:"pull-and-build-the-vnfs-container-and-kernel"},"Pull and build the VNFS container and kernel"),(0,o.kt)("p",null,'This will pull a basic VNFS container from Docker Hub and import the default running kernel from the controller node and set both in the "default" node profile.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl container import docker://warewulf/centos-7 centos-7 --setdefault\nsudo wwctl kernel import $(uname -r) --setdefault\n")),(0,o.kt)("h2",{id:"set-up-the-default-node-profile"},"Set up the default node profile"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--setdefault")," arguments above will automatically set those entries in the default profile, but if you wanted to set them by hand to something different, you can do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl profile set -y default -K $(uname -r) -C centos-7\n")),(0,o.kt)("p",null,"Next we set some default networking configurations for the first ethernet device. On modern Linux distributions, the name of the device is not critical, as it will be setup according to the HW address. Because all nodes will share the netmask and gateway configuration, we can set them in the default profile as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl profile set -y default --netname default --netmask 255.255.255.0 --gateway 192.168.200.1\nsudo wwctl profile list\n")),(0,o.kt)("h2",{id:"add-a-node"},"Add a node"),(0,o.kt)("p",null,"Adding nodes can be done while setting configurations in one command. Here we are setting the IP address of ",(0,o.kt)("inlineCode",{parentName:"p"},"eth0")," and setting this node to be discoverable, which will then automatically have the HW address added to the configuration as the node boots."),(0,o.kt)("p",null,"Node names must be unique. If you have node groups and/or multiple clusters, designate them using dot notation."),(0,o.kt)("p",null,"Note that the full node configuration comes from both cascading profiles and node configurations which always supersede profile configurations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl node add n0000.cluster --netname default -I 192.168.200.100 --discoverable\nsudo wwctl node list -a n0000\n")),(0,o.kt)("h2",{id:"turn-on-your-compute-node-and-watch-it-boot"},"Turn on your compute node and watch it boot!"))}c.isMDXComponent=!0}}]);