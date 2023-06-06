import{A as f,k as g}from"./js/_plugin-vue_export-helper.1252226d.js";import{c as h,a as y}from"./js/vue-router.ed7000bb.js";import{e as k,l as E}from"./js/index.512f21c4.js";import{l as b}from"./js/index.c8bcf9e5.js";import{l as _}from"./js/index.0b123ab1.js";import{g as v,m as d,T as A}from"./js/postContent.d5640333.js";import{s as i}from"./js/index.fef507ce.js";import{i as $}from"./js/isEqual.8d0db5de.js";import{i as I}from"./js/isEmpty.a37ce9c8.js";import{s,_ as r}from"./js/default-i18n.ab92175e.js";import{A as a}from"./js/App.126fe95f.js";import"./js/client.4d177be2.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/vuex.esm-bundler.2e787911.js";import"./js/helpers.de7566d0.js";import"./js/constants.449145d5.js";import"./js/isArrayLikeObject.da221b94.js";import"./js/Caret.21cdd163.js";import"./js/cleanForSlug.3cf2e377.js";import"./js/html.14f2a8b9.js";import"./js/_baseIsEqual.7ca684b6.js";import"./js/_getAllKeys.cdde2cc1.js";import"./js/_getTag.2bfb1432.js";/* empty css                */import"./js/params.597cd0f5.js";import"./js/WpTable.6ebd2781.js";import"./js/Index.25975920.js";import"./js/Row.3c6833bf.js";import"./js/RequiresUpdate.52f5acf2.js";import"./js/Index.67d5329e.js";import"./js/JsonValues.870a4901.js";import"./js/SaveChanges.03404395.js";import"./js/SettingsRow.f70a9906.js";import"./js/Checkbox.01664e13.js";import"./js/Checkmark.b071baa5.js";import"./js/LicenseKeyBar.9186083c.js";import"./js/LogoGear.764f01c9.js";import"./js/Tabs.ac7026b6.js";import"./js/TruSeoScore.76897846.js";import"./js/Information.c2ec1d40.js";import"./js/Slide.8b22672f.js";import"./js/Portal.f89d3d99.js";import"./js/MaxCounts.12b45bab.js";import"./js/Tooltip.ce066015.js";import"./js/Plus.95ac3054.js";import"./js/Editor.ad30dcf7.js";import"./js/Blur.fd3c040c.js";import"./js/RadioToggle.1c64b0f9.js";import"./js/GoogleSearchPreview.d41ba555.js";import"./js/HtmlTagsEditor.4fdf34d5.js";import"./js/UnfilteredHtml.e3853a14.js";import"./js/popup.b60b699f.js";import"./js/Table.9acc0e22.js";import"./js/PostTypes.9ab32454.js";import"./js/InternalOutbound.4bc7d887.js";import"./js/RequiredPlans.7747ff8a.js";import"./js/Image.63de964a.js";import"./js/Img.3acee209.js";import"./js/FacebookPreview.d12aa53e.js";import"./js/Profile.ed40f51b.js";import"./js/TwitterPreview.f7805412.js";import"./js/Book.600bead4.js";import"./js/Settings.d8683fad.js";import"./js/Build.7acf33fd.js";import"./js/Redirects.61a6580d.js";import"./js/Index.4d718445.js";import"./js/strings.d9eaf1a3.js";import"./js/isString.1ed890fc.js";import"./js/ProBadge.5deae80b.js";import"./js/External.e319cd0f.js";import"./js/Exclamation.b493e7b4.js";import"./js/Gear.a5ac87f6.js";import"./js/Card.8a160590.js";import"./js/Eye.e17b7365.js";class C extends window.$e.modules.hookUI.Base{constructor(o,n,t){super(),this.hook=o,this.id=n,this.callback=t}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class S extends window.$e.modules.hookData.Base{constructor(o,n,t){super(),this.hook=o,this.id=n,this.callback=t}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function m(e,o,n){window.$e.hooks.registerUIAfter(new C(e,o,n))}function D(e,o,n){window.$e.hooks.registerDataAfter(new S(e,o,n))}let p={};const l=()=>{const e=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(e.config.type))return;const o={...p},n=v();$(o,n)||(p=n,d())},O=()=>{I(i.state.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&i.dispatch("saveCurrentPost",i.state.currentPost)},P=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},x=()=>{m("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",l),m("document/save/set-is-modified","aioseo-content-scraper-on-modified",l),D("document/save/save","aioseo-save",O),k.on("postSettingsUpdated",P)},B=()=>{if(window.elementor.config.user.introduction["aioseo-introduction"]===!0)return;const e=new window.elementorModules.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:s(r("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:s(r("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:r("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{e.setViewed(),e.getDialog().hide()}}});e.show()},U=()=>{let e=window.elementor.getPreferences("ui_theme")||"auto";e==="auto"&&(e=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(o=>{o.startsWith("aioseo-elementor-")&&document.body.classList.remove(o)}),document.body.classList.add("aioseo-elementor-"+e)},H=()=>{window.$e.routes.on("run:after",function(e,o){U(),o==="panel/page-settings/aioseo"&&c("#elementor-panel-page-settings-controls")}),window.elementor.modules.layouts.panel.pages.menu.Menu.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+window.elementor.getPreferences("ui_theme"),title:"All in One SEO",type:"page",callback:()=>{try{window.$e.routes.run("panel/page-settings/aioseo")}catch{window.$e.routes.run("panel/page-settings/settings"),window.$e.routes.run("panel/page-settings/aioseo")}}},"more"),window.elementor.once("preview:loaded",function(){window.$e.components.get("panel/elements").addTab("aioseo",{title:"AIOSEO"})}),window.elementor.hooks.addFilter("panel/elements/regionViews",e=>(e.aioseo={region:e.global.region,view:window.Marionette.ItemView.extend({template:!1,id:"elementor-panel-aioseo",className:"aioseo-elementor aioseo-sidebar-panel",initialize(){document.getElementById("elementor-panel-elements-search-area").hidden=!0},onShow(){c("#elementor-panel-aioseo")},onDestroy(){document.getElementById("elementor-panel-elements-search-area").hidden=!1}}),options:{}},e))},c=e=>{const o=document.querySelector(e);o.classList.add("edit-post-sidebar","aioseo-elementor-panel"),o.appendChild(document.createElement("div"));const n=h({history:y(),routes:[{path:"/",component:a}]});let t=f({data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>g(a)});t=E(t),t=b(t),t=_(t),t.use(n),t.use(i),i._vm=t,n.app=t,t.config.globalProperties.$truSeo=new A,t.mount(`${e} > div`),d()},u=()=>{H(),B(),x()};let w=!1;window.elementor&&(setTimeout(u),w=!0);(function(e){w||e(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(u)})})})(window.jQuery);
