import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as m}from"./IconButton-CZ_du5a6.js";import{r as n}from"./index-BxXVWNx3.js";import{c as u}from"./cn-BaF2GUMg.js";import{c as f}from"./createLucideIcon-D2aoXYj9.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=f("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function s({content:c,children:l,side:d="top"}){const o=n.useId(),p=n.cloneElement(l,{"aria-describedby":o});return t.jsxs("span",{className:u("ds-tooltip",`ds-tooltip--${d}`),children:[p,t.jsx("span",{className:"ds-tooltip__content",role:"tooltip",id:o,children:c})]})}s.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},side:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}}}};const j={title:"Components/Tooltip",component:s,tags:["autodocs"]},e={args:{content:"More information",children:t.jsx(m,{label:"More information",variant:"outlined",children:t.jsx(h,{})})}};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    content: "More information",
    children: <IconButton label="More information" variant="outlined">\r
        <Info />\r
      </IconButton>
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const v=["Basic"];export{e as Basic,v as __namedExportsOrder,j as default};
