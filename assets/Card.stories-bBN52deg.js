import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as u}from"./Badge-B8BpOcKs.js";import{c as d}from"./cn-BaF2GUMg.js";function n({className:r,elevated:s=!1,...m}){return e.jsx("div",{className:d("ds-card",s&&"ds-card--elevated",r),...m})}function i({className:r,...s}){return e.jsx("div",{className:d("ds-card__header",r),...s})}function p({className:r,...s}){return e.jsx("h3",{className:d("ds-card__title",r),...s})}function l({className:r,...s}){return e.jsx("div",{className:d("ds-card__content",r),...s})}n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{elevated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};p.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};l.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const _={title:"Components/Card",component:n,tags:["autodocs"]},a={render:()=>e.jsxs(n,{children:[e.jsxs(i,{children:[e.jsx(p,{children:"Workspace usage"}),e.jsx(u,{tone:"brand",children:"Pro"})]}),e.jsx(l,{children:e.jsx("p",{children:"42,800 events processed this month across three production projects."})})]})};var t,o,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Workspace usage</CardTitle>\r
        <Badge tone="brand">Pro</Badge>\r
      </CardHeader>\r
      <CardContent>\r
        <p>42,800 events processed this month across three production projects.</p>\r
      </CardContent>\r
    </Card>
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const j=["Basic"];export{a as Basic,j as __namedExportsOrder,_ as default};
