import{j as e}from"./jsx-runtime-BOs0cLQj.js";import{C as f}from"./Checkbox-CTUD1q36.js";import{I as w}from"./Input-DdBpRLcF.js";import{L as t}from"./Label-BULs7ekR.js";import"./iframe-Ck4IQaKq.js";import"./index-B1bhzFGd.js";import"./index-pV0pftnm.js";import"./index-Spq-bki2.js";import"./index-DpKzAOqh.js";import"./index-DpCbMoGV.js";import"./index-DanUeC4r.js";import"./index-BhYCuPEW.js";import"./index-ChiA7tRe.js";import"./utils-Cq7e7suc.js";import"./createLucideIcon-Bg_QJIuc.js";const _={title:"ui/Label",component:t,tags:["autodocs"],argTypes:{children:{control:"text",disabled:{control:"boolean"}}},parameters:{layout:"centered"}},r={args:{children:"Label"}},a={render:()=>e.jsxs("form",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"password",children:"Password"}),e.jsx(w,{placeholder:"Enter password",id:"password",name:"password",type:"password"})]})},s={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(f,{id:"r1"}),e.jsx(t,{htmlFor:"r1",children:"Accept terms and conditions"})]})},o={render:()=>e.jsx(t,{disabled:!0,"data-testid":"label-disabled",htmlFor:"search",children:"Search"})};var d,c,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Label"
  }
}`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,p,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <form className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </form>
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,b,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">Accept terms and conditions</Label>
    </div>
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var u,x,L;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Label disabled data-testid="label-disabled" htmlFor="search">
      Search
    </Label>
}`,...(L=(x=o.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const O=["Default","LabelWithInput","LabelWithCheckbox","Disabled"];export{r as Default,o as Disabled,s as LabelWithCheckbox,a as LabelWithInput,O as __namedExportsOrder,_ as default};
