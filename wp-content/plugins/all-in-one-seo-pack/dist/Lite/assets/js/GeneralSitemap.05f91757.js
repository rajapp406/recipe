import{m as P}from"./vuex.esm-bundler.2e787911.js";import{C as R}from"./CommonSitemap.bfe9fab6.js";import w from"./AdditionalPages.da73e899.js";import{B as M}from"./Checkbox.01664e13.js";import{B as D}from"./RadioToggle.1c64b0f9.js";import{C as B}from"./index.c8bcf9e5.js";import{C as N}from"./Card.8a160590.js";import{C}from"./ExcludePosts.b4e0f9a7.js";import{C as H}from"./PostTypeOptions.198aafd7.js";import"./WpTable.6ebd2781.js";import"./default-i18n.ab92175e.js";import"./constants.449145d5.js";import{_ as G,r as d,o as m,c as b,d as t,w as o,y as l,t as r,F as U,G as E,b as u,f as c,a}from"./_plugin-vue_export-helper.1252226d.js";import"./index.fef507ce.js";import{J as x}from"./JsonValues.870a4901.js";import"./SaveChanges.03404395.js";import{T as q,a as z}from"./Row.4078cfc9.js";import{C as F}from"./SettingsRow.f70a9906.js";import{S as J}from"./External.e319cd0f.js";import"./Date.461dc30a.js";import"./Caret.21cdd163.js";import"./Exclamation.b493e7b4.js";import"./helpers.de7566d0.js";import"./DatePicker.b55bde46.js";import"./_commonjsHelpers.f84db168.js";import"./cleanForSlug.3cf2e377.js";import"./isArrayLikeObject.da221b94.js";import"./isUndefined.6aa45a19.js";import"./_getAllKeys.cdde2cc1.js";import"./_getTag.2bfb1432.js";import"./debounce.6bfba81c.js";import"./toNumber.d6fd2789.js";import"./isEqual.8d0db5de.js";import"./_baseIsEqual.7ca684b6.js";import"./Index.67d5329e.js";import"./Table.9acc0e22.js";import"./Tooltip.ce066015.js";import"./Slide.8b22672f.js";import"./Checkmark.b071baa5.js";import"./AddPlus.3f8747f1.js";import"./HighlightToggle.c35043b5.js";import"./Radio.42b6d623.js";import"./Row.3c6833bf.js";import"./Index.25975920.js";import"./RequiresUpdate.52f5acf2.js";import"./postContent.d5640333.js";import"./html.14f2a8b9.js";const Y={components:{TableColumn:q,TableRow:z},mixins:[x],props:{priority:{type:Object,required:!0},rows:{type:Array,required:!0},labels:{type:Object,default(){return{}}}},data(){return{strings:{postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),priority:this.$t.__("Priority",this.$td),frequency:this.$t.__("Frequency",this.$td),homePage:this.$t.__("Home Page",this.$td),archive:this.$t.__("Date Archive Pages",this.$td),author:this.$t.__("Author Pages",this.$td)}}},computed:{...P(["options"]),getFrequencyOptions(){return[{label:this.$t.__("default",this.$td),value:"default"}].concat(this.$constants.FREQUENCY_OPTIONS)},getPriorityOptions(){return[{label:this.$t.__("default",this.$td),value:"default"}].concat(this.$constants.PRIORITY_OPTIONS)},filteredRows(){let e=this.rows;return this.options.sitemap.general.date||(e=e.filter(n=>n!=="archive")),this.options.sitemap.general.author||(e=e.filter(n=>n!=="author")),e}},methods:{getLabel(e){return this.labels[e]||this.strings[e]}}},X={class:"aioseo-priority-score"};function j(e,n,S,V,s,y){const g=d("table-column"),p=d("table-row"),L=d("base-select");return m(),b("div",X,[t(p,{class:"header-row"},{default:o(()=>[t(g),t(g,null,{default:o(()=>[l(r(s.strings.priority),1)]),_:1}),t(g,null,{default:o(()=>[l(r(s.strings.frequency),1)]),_:1})]),_:1}),(m(!0),b(U,null,E(y.filteredRows,(h,f)=>(m(),u(p,{key:f},{default:o(()=>[t(g,null,{default:o(()=>[l(r(y.getLabel(h)),1)]),_:2},1024),t(g,null,{default:o(()=>[t(L,{size:"medium",options:y.getPriorityOptions,modelValue:e.getJsonValue(S.priority[h].priority),"onUpdate:modelValue":_=>S.priority[h].priority=e.setJsonValue(_)},null,8,["options","modelValue","onUpdate:modelValue"])]),_:2},1024),t(g,null,{default:o(()=>[t(L,{size:"medium",options:y.getFrequencyOptions,modelValue:e.getJsonValue(S.priority[h].frequency),"onUpdate:modelValue":_=>S.priority[h].frequency=e.setJsonValue(_)},null,8,["options","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))])}const K=G(Y,[["render",j]]);const W={mixins:[R],components:{AdditionalPages:w,BaseCheckbox:M,BaseRadioToggle:D,CoreAlert:B,CoreCard:N,CoreExcludePosts:C,CorePostTypeOptions:H,CorePriorityScore:K,CoreSettingsRow:F,SvgExternal:J},data(){return{pagePostOptions:[],strings:{general:this.$t.__("General Sitemap",this.$td),description:this.$t.sprintf(this.$t.__("An XML Sitemap is a list of all your content that search engines use when they crawl your site. This is an essential part of SEO because it contains some important pieces of information that search engines need when crawling your site. The XML Sitemap created by %1$s tells search engines where to find all of the content on your site.",this.$td),"All in One SEO"),enableSitemap:this.$t.__("Enable Sitemap",this.$td),sitemapSettings:this.$t.__("Sitemap Settings",this.$td),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$td),sitemapIndexes:this.$t.__("Organize sitemap entries into distinct files in your sitemap. We recommend you enable this setting if your sitemap contains more than 1,000 URLs.",this.$td),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),openSitemap:this.$t.__("Open Sitemap",this.$td),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$td),automaticallyPingSearchEngines:this.$t.__("Automatically Ping Search Engines",this.$td),postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),dateArchiveSitemap:this.$t.__("Date Archive Sitemap",this.$td),includeDateArchives:this.$t.__("Include Date Archives in your sitemap.",this.$td),authorSitemap:this.$t.__("Author Sitemap",this.$td),includeAuthorArchives:this.$t.__("Include Author Archives in your sitemap.",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap.",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded from your sitemap.",this.$td),priorityScore:this.$t.__("Priority Score",this.$td),grouped:this.$t.__("Grouped",this.$td),priorityScorePostTypes:this.$t.__("Post Type Priority Score",this.$td),priorityScoreTaxonomies:this.$t.__("Taxonomy Priority Score",this.$td),excludeImages:this.$t.__("Exclude Images",this.$td),excludeImagesDescription:this.$t.__("Exclude Images from your sitemap.",this.$td),dynamicallyGenerate:this.$t.__("Dynamically Generate",this.$td),dynamicallyGenerateDescription:this.$t.__("Dynamically creates the XML Sitemap instead of using a static file.",this.$td),warningLinksPerSitemap:this.$t.__("We recommend setting the amount of URLs per sitemap index to 1,000 or less. The more links, the longer it will take for the sitemap to load.",this.$td),warningStaticRegeneration:this.$t.__("Your static sitemap is currently being regenerated. This may take some time based on the size of your site. This may also cause the sitemap content to look outdated.",this.$td)}}},computed:{...P(["options","dynamicOptions","internalOptions"]),getPostTypeRows(){return this.$aioseo.postData.postTypes.map(e=>e.name)},getPostTypeLabels(){const e={};return this.$aioseo.postData.postTypes.forEach(n=>{e[n.name]=n.label}),e},getTaxonomyRows(){return this.$aioseo.postData.taxonomies.map(e=>e.name)},getTaxonomyLabels(){const e={};return this.$aioseo.postData.taxonomies.forEach(n=>{e[n.name]=n.label}),e}}},Q={class:"aioseo-general-sitemap"},Z={class:"aioseo-settings-row aioseo-section-description"},ee=["innerHTML"],te={class:"aioseo-sitemap-preview"},se={class:"aioseo-description"},ne=["innerHTML"],oe={class:"aioseo-description"},ie=["innerHTML"],ae={class:"aioseo-description"},re=["innerHTML"],le={class:"aioseo-description"},pe=["innerHTML"],me={class:"aioseo-description"},de=["innerHTML"],ue={class:"aioseo-description"},ce=["innerHTML"],ge={class:"aioseo-description"},ye=["innerHTML"],he={class:"aioseo-description"},_e={class:"aioseo-description"},Se=["innerHTML"],Te={class:"aioseo-description"},$e=["innerHTML"];function Le(e,n,S,V,s,y){const g=d("base-toggle"),p=d("core-settings-row"),L=d("svg-external"),h=d("base-button"),f=d("core-alert"),_=d("core-card"),T=d("base-radio-toggle"),I=d("base-input"),v=d("base-checkbox"),k=d("core-post-type-options"),O=d("AdditionalPages"),A=d("core-exclude-posts"),$=d("core-priority-score");return m(),b("div",Q,[t(_,{slug:"generalSitemap","header-text":s.strings.general},{default:o(()=>[a("div",Z,[l(r(s.strings.description)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"xmlSitemaps",!0)},null,8,ee)]),t(p,{name:s.strings.enableSitemap},{content:o(()=>[t(g,{modelValue:e.options.sitemap.general.enable,"onUpdate:modelValue":n[0]||(n[0]=i=>e.options.sitemap.general.enable=i)},null,8,["modelValue"])]),_:1},8,["name"]),e.options.sitemap.general.enable?(m(),u(p,{key:0,name:e.$constants.GLOBAL_STRINGS.preview},{content:o(()=>[a("div",te,[t(h,{size:"medium",type:"blue",tag:"a",href:e.$aioseo.urls.generalSitemapUrl,target:"_blank"},{default:o(()=>[t(L),l(" "+r(s.strings.openSitemap),1)]),_:1},8,["href"])]),a("div",se,[l(r(s.strings.noIndexDisplayed)+" "+r(s.strings.doYou404)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,ne)]),!e.options.deprecated.sitemap.general.advancedSettings.dynamic&&e.$aioseo.scheduledActions&&e.$aioseo.scheduledActions.sitemap&&e.$aioseo.scheduledActions.sitemap.includes("staticSitemapRegeneration")?(m(),u(f,{key:0,class:"static-regeneration-notice",type:"blue"},{default:o(()=>[l(r(s.strings.warningStaticRegeneration),1)]),_:1})):c("",!0)]),_:1},8,["name"])):c("",!0)]),_:1},8,["header-text"]),e.options.sitemap.general.enable?(m(),u(_,{key:0,slug:"generalSitemapSettings","header-text":s.strings.sitemapSettings},{default:o(()=>[t(p,{name:s.strings.enableSitemapIndexes},{content:o(()=>[t(T,{modelValue:e.options.sitemap.general.indexes,"onUpdate:modelValue":n[1]||(n[1]=i=>e.options.sitemap.general.indexes=i),name:"sitemapIndexes",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),a("div",oe,[l(r(s.strings.sitemapIndexes)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0)},null,8,ie)])]),_:1},8,["name"]),e.options.sitemap.general.indexes?(m(),u(p,{key:0,name:s.strings.linksPerSitemap},{content:o(()=>[t(I,{modelValue:e.options.sitemap.general.linksPerIndex,"onUpdate:modelValue":n[2]||(n[2]=i=>e.options.sitemap.general.linksPerIndex=i),class:"aioseo-links-per-site",type:"number",size:"medium",min:1,max:5e4,onKeyup:e.validateLinksPerIndex},null,8,["modelValue","onKeyup"]),a("div",ae,[l(r(s.strings.maxLinks)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0)},null,8,re)]),e.options.sitemap.general.indexes&&1e3<e.options.sitemap.general.linksPerIndex?(m(),u(f,{key:0,class:"index-notice",type:"yellow"},{default:o(()=>[l(r(s.strings.warningLinksPerSitemap),1)]),_:1})):c("",!0)]),_:1},8,["name"])):c("",!0),t(p,{name:s.strings.postTypes},{content:o(()=>[t(v,{size:"medium",modelValue:e.options.sitemap.general.postTypes.all,"onUpdate:modelValue":n[3]||(n[3]=i=>e.options.sitemap.general.postTypes.all=i)},{default:o(()=>[l(r(s.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.options.sitemap.general.postTypes.all?c("",!0):(m(),u(k,{key:0,options:e.options.sitemap.general,type:"postTypes"},null,8,["options"])),a("div",le,[l(r(s.strings.selectPostTypes)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypes",!0)},null,8,pe)])]),_:1},8,["name"]),t(p,{name:s.strings.taxonomies},{content:o(()=>[t(v,{size:"medium",modelValue:e.options.sitemap.general.taxonomies.all,"onUpdate:modelValue":n[4]||(n[4]=i=>e.options.sitemap.general.taxonomies.all=i)},{default:o(()=>[l(r(s.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),e.options.sitemap.general.taxonomies.all?c("",!0):(m(),u(k,{key:0,options:e.options.sitemap.general,type:"taxonomies"},null,8,["options"])),a("div",me,[l(r(s.strings.selectTaxonomies)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypes",!0)},null,8,de)])]),_:1},8,["name"]),t(p,{name:s.strings.dateArchiveSitemap},{content:o(()=>[t(T,{modelValue:e.options.sitemap.general.date,"onUpdate:modelValue":n[5]||(n[5]=i=>e.options.sitemap.general.date=i),name:"dateArchiveSitemap",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),a("div",ue,[l(r(s.strings.includeDateArchives)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeArchivePages",!0)},null,8,ce)])]),_:1},8,["name"]),t(p,{name:s.strings.authorSitemap},{content:o(()=>[t(T,{modelValue:e.options.sitemap.general.author,"onUpdate:modelValue":n[6]||(n[6]=i=>e.options.sitemap.general.author=i),name:"authorSitemap",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),a("div",ge,[l(r(s.strings.includeAuthorArchives)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeArchivePages",!0)},null,8,ye)])]),_:1},8,["name"])]),_:1},8,["header-text"])):c("",!0),t(O),e.options.sitemap.general.enable?(m(),u(_,{key:1,slug:"advancedSettings",toggles:e.options.sitemap.general.advancedSettings.enable},{header:o(()=>[t(g,{modelValue:e.options.sitemap.general.advancedSettings.enable,"onUpdate:modelValue":n[7]||(n[7]=i=>e.options.sitemap.general.advancedSettings.enable=i)},null,8,["modelValue"]),a("span",null,r(s.strings.advancedSettings),1)]),default:o(()=>[t(p,{name:s.strings.excludePostsPages,class:"aioseo-exclude-pages-posts"},{content:o(()=>[t(A,{options:e.options.sitemap.general.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),t(p,{name:s.strings.excludeTerms,class:"aioseo-exclude-terms"},{content:o(()=>[t(A,{options:e.options.sitemap.general.advancedSettings,type:"terms"},null,8,["options"]),a("div",he,r(s.strings.excludeTermsDescription),1)]),_:1},8,["name"]),t(p,{name:s.strings.priorityScore,align:""},{content:o(()=>[t($,{priority:e.options.sitemap.general.advancedSettings.priority,rows:["homePage","archive","author"]},null,8,["priority"])]),_:1},8,["name"]),t(p,{name:s.strings.priorityScorePostTypes,align:""},{content:o(()=>[t(g,{modelValue:e.options.sitemap.general.advancedSettings.priority.postTypes.grouped,"onUpdate:modelValue":n[8]||(n[8]=i=>e.options.sitemap.general.advancedSettings.priority.postTypes.grouped=i)},{default:o(()=>[l(r(s.strings.grouped),1)]),_:1},8,["modelValue"]),e.options.sitemap.general.advancedSettings.priority.postTypes.grouped?(m(),u($,{key:0,priority:e.options.sitemap.general.advancedSettings.priority,rows:["postTypes"]},null,8,["priority"])):c("",!0),e.options.sitemap.general.advancedSettings.priority.postTypes.grouped?c("",!0):(m(),u($,{key:1,priority:e.dynamicOptions.sitemap.priority.postTypes,rows:y.getPostTypeRows,labels:y.getPostTypeLabels},null,8,["priority","rows","labels"]))]),_:1},8,["name"]),t(p,{name:s.strings.priorityScoreTaxonomies,align:""},{content:o(()=>[t(g,{modelValue:e.options.sitemap.general.advancedSettings.priority.taxonomies.grouped,"onUpdate:modelValue":n[9]||(n[9]=i=>e.options.sitemap.general.advancedSettings.priority.taxonomies.grouped=i)},{default:o(()=>[l(r(s.strings.grouped),1)]),_:1},8,["modelValue"]),e.options.sitemap.general.advancedSettings.priority.taxonomies.grouped?(m(),u($,{key:0,priority:e.options.sitemap.general.advancedSettings.priority,rows:["taxonomies"]},null,8,["priority"])):c("",!0),e.options.sitemap.general.advancedSettings.priority.taxonomies.grouped?c("",!0):(m(),u($,{key:1,priority:e.dynamicOptions.sitemap.priority.taxonomies,rows:y.getTaxonomyRows,labels:y.getTaxonomyLabels},null,8,["priority","rows","labels"]))]),_:1},8,["name"]),e.internalOptions.internal.deprecatedOptions.includes("staticSitemap")?(m(),u(p,{key:0,name:s.strings.dynamicallyGenerate},{content:o(()=>[t(T,{modelValue:e.options.deprecated.sitemap.general.advancedSettings.dynamic,"onUpdate:modelValue":n[10]||(n[10]=i=>e.options.deprecated.sitemap.general.advancedSettings.dynamic=i),name:"dynamic",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),a("div",_e,[l(r(s.strings.dynamicallyGenerateDescription)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"dynamicallyGenerate",!0)},null,8,Se)])]),_:1},8,["name"])):c("",!0),t(p,{name:s.strings.excludeImages},{content:o(()=>[t(T,{modelValue:e.options.sitemap.general.advancedSettings.excludeImages,"onUpdate:modelValue":n[11]||(n[11]=i=>e.options.sitemap.general.advancedSettings.excludeImages=i),name:"excludeImages",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),a("div",Te,[l(r(s.strings.excludeImagesDescription)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"excludeImages",!0)},null,8,$e)])]),_:1},8,["name"])]),_:1},8,["toggles"])):c("",!0)])}const yt=G(W,[["render",Le]]);export{yt as default};
