import{N as a}from"./WpTable.6ebd2781.js";import"./default-i18n.ab92175e.js";import"./constants.449145d5.js";import{_ as l,r as c,o as u,c as p,d as m}from"./_plugin-vue_export-helper.1252226d.js";import"./index.fef507ce.js";import"./SaveChanges.03404395.js";const _={emits:["selected-site"],mixins:[a],props:{showNetwork:Boolean},data(){return{site:null,network:{value:"network",label:this.$t.__("Network Admin (no site)",this.$td)}}},watch:{site(e){let t=this.$aioseo.data.network.sites.sites.find(o=>this.getUniqueSiteId(o)===e.value);e.value==="network"&&(t={blog_id:"network"}),this.$emit("selected-site",t)}},computed:{sites(){const e=this.getSites.filter(t=>!t.parentDomain).map(t=>({value:this.getUniqueSiteId(t),label:`${t.domain}${t.path}`}));return this.showNetwork?[this.network].concat(e):e}},created(){this.showNetwork&&(this.site=this.network)}},d={class:"aioseo-network-site-selector"};function f(e,t,o,h,s,n){const i=c("base-select");return u(),p("div",d,[m(i,{size:"medium",modelValue:s.site,"onUpdate:modelValue":t[0]||(t[0]=r=>s.site=r),options:n.sites},null,8,["modelValue","options"])])}const $=l(_,[["render",f]]);export{$ as C};
