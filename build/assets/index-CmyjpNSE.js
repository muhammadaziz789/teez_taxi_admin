import{j as e}from"./index-Cc7Ts1A1.js";import{H as d,C as m}from"./index-F_NuWqk8.js";import{g as u,F as p,C as h}from"./index-C0WO42ht.js";import{A as x}from"./AddButton-DvslRZhb.js";import{u as g}from"./index-Yw4k6OJc.js";import"./colorManipulator-BykWYqqe.js";import"./Popover-PouvY3q6.js";import"./useTheme-ThoE0Umr.js";import"./index-CHVO1S-d.js";import"./Button-wy8c-1p1.js";const C=[{label:"Yo'lovchilar",link:"/passenger/list"},{label:"Ro‘yxat"}],F=()=>({headColumns:[{title:"",id:"index"},{title:"Sarlavha",id:"full_name"},{title:"tavsif",id:"birthday"},{title:"Actions",id:"actions",actions:["edit","delete"]}]}),j=()=>{const{data:t,isLoading:r}=g({key:"GET_PASSENGER_NEWS",endpoint:"/rider-news-list",params:{}});return{bodyData:t??{},isLoading:r}},R=()=>{const{filterParams:t}=u({}),{collectFilter:r,storeFilters:o}=p({store:!0,filterParams:t}),{headColumns:n}=F(),{bodyData:s,isLoading:l}=j(),a=i=>{o(i)},c=i=>{r({type:"q",val:i}),a({...t,q:i,page:1})};return e.jsxs(e.Fragment,{children:[e.jsx(d,{extra:e.jsx(m,{items:C,progmatic:!0,type:"link",handleSearch:c,defaultValue:t==null?void 0:t.q}),children:e.jsx("div",{children:e.jsx(x,{text:"Yangilik qo'shish"})})}),e.jsx("div",{className:"container",children:e.jsx(h,{headColumns:n,bodyColumns:s==null?void 0:s.data,meta:s==null?void 0:s.meta,isLoading:l,filterParams:t,handleFilterParams:a,clickable:!0})})]})};export{R as default};
