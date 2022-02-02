"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[667],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4271:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"Install Realm",sidebar_position:2},p=void 0,s={unversionedId:"install",id:"install",title:"Install Realm",description:"Prerequisites",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/flutter-sdk-docs/install",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install Realm",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Flutter SDK (Alpha)",permalink:"/flutter-sdk-docs/"},next:{title:"Quick Start",permalink:"/flutter-sdk-docs/quick-start"}},d=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"1. Create a Flutter Project",id:"1-create-a-flutter-project",children:[],level:3},{value:"2. Add Realm to the Project",id:"2-add-realm-to-the-project",children:[],level:3},{value:"3. Import Realm Package",id:"3-import-realm-package",children:[],level:3}],level:2},{value:"Dart Standalone Installation",id:"dart-standalone-installation",children:[{value:"1. Create a Dart Project",id:"1-create-a-dart-project",children:[],level:3},{value:"2. Add Realm to the Project",id:"2-add-realm-to-the-project-1",children:[],level:3},{value:"3. Install Realm into Application",id:"3-install-realm-into-application",children:[],level:3},{value:"4. Import Realm Package",id:"4-import-realm-package",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/get-started/install"},"Install Flutter in your development\nenvironment"),". You must\nuse Flutter version 2.8 or later and Dart version 2.15.0 or later.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Follow these steps to add the Realm Flutter SDK to your Flutter project."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Use Realm with Only Dart")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In addition to using Realm with Flutter, you can also use Realm only\nwith Dart, like a CLI application or web server."),(0,l.kt)("p",{parentName:"div"},"The usage for Realm with Dart is the same as the Flutter SDK, except you\nmust install and set up a separate package."),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"#dart-standalone-installation"},"Learn how to set up Realm in your Dart\nproject.")))),(0,l.kt)("h3",{id:"1-create-a-flutter-project"},"1. Create a Flutter Project"),(0,l.kt)("p",null,"Create a Flutter project. Follow the instructions in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/get-started/test-drive?tab=terminal"},"Flutter\ndocumentation"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"flutter create <app_name>\ncd <app_name>\n")),(0,l.kt)("h3",{id:"2-add-realm-to-the-project"},"2. Add Realm to the Project"),(0,l.kt)("p",null,"To add the ",(0,l.kt)("a",{parentName:"p",href:"https://pub.dev/packages/realm"},"Realm Flutter SDK")," to your\nproject, run the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"flutter pub add realm\n")),(0,l.kt)("p",null,"This downloads the ",(0,l.kt)("inlineCode",{parentName:"p"},"realm")," package and adds it to your project. In your\n",(0,l.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file, you should see:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  realm: <latest_version>\n")),(0,l.kt)("h3",{id:"3-import-realm-package"},"3. Import Realm Package"),(0,l.kt)("p",null,"To use the Realm Flutter SDK within your app, import the package into\nfiles where you will use it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:realm/realm.dart';\n")),(0,l.kt)("h2",{id:"dart-standalone-installation"},"Dart Standalone Installation"),(0,l.kt)("p",null,"To use Realm with Dart but not Flutter, there is a separate Dart SDK\npackage with its own installation process. The Dart SDK can be used for\nCLI applications or when running Dart in a server environment. The Dart\nstandalone package ",(0,l.kt)("inlineCode",{parentName:"p"},"realm_dart")," has the same usage as the Flutter\npackage."),(0,l.kt)("h3",{id:"1-create-a-dart-project"},"1. Create a Dart Project"),(0,l.kt)("p",null,"Create a Dart project."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Using Dart without Flutter")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The official Dart docs have helpful getting started material for using\nDart without Flutter for CLI and server use cases."),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://dart.dev/server"},"See the official documentation.")))),(0,l.kt)("h3",{id:"2-add-realm-to-the-project-1"},"2. Add Realm to the Project"),(0,l.kt)("p",null,"To add the ",(0,l.kt)("a",{parentName:"p",href:"https://pub.dev/packages/realm_dart"},"Realm Dart SDK")," to your\nproject, run the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dart pub add realm_dart\n")),(0,l.kt)("p",null,"This downloads the ",(0,l.kt)("inlineCode",{parentName:"p"},"realm_dart")," package and adds it to your project. In\nyour ",(0,l.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file, you should see:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  realm_dart: <latest_version>\n")),(0,l.kt)("h3",{id:"3-install-realm-into-application"},"3. Install Realm into Application"),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"realm_dart")," package into the application. This downloads\nand copies the required native binaries to the app directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dart run realm_dart install\n")),(0,l.kt)("h3",{id:"4-import-realm-package"},"4. Import Realm Package"),(0,l.kt)("p",null,"To use the Realm Dart SDK within your app, import the package into files\nwhere you will use it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:realm_dart/realm.dart';\n")))}u.isMDXComponent=!0}}]);