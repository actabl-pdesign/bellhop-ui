import{j as w,a as e}from"./utils-Bn2vSSmN.js";import{C as x}from"./Checkbox-BPDOrvS1.js";import{I as g}from"./Input-DcsFtu-Q.js";import{L as t}from"./Label-C0fbN7WM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createLucideIcon-HMKsws72.js";import"./index-aS4jWOJ1.js";const W={title:"ui/Label",component:t,tags:["autodocs"],argTypes:{children:{control:"text",disabled:{control:"boolean"}}},parameters:{layout:"centered"}},r={args:{children:"Label"}},a={render:()=>w("form",{className:"space-y-2",children:[e(t,{htmlFor:"password",children:"Password"}),e(g,{placeholder:"Enter password",id:"password",name:"password",type:"password"})]})},s={render:()=>w("div",{className:"flex items-center gap-2",children:[e(x,{id:"r1"}),e(t,{htmlFor:"r1",children:"Accept terms and conditions"})]})},o={render:()=>e(t,{disabled:!0,"data-testid":"label-disabled",htmlFor:"search",children:"Search"})};var d,c,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var u,L,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Label disabled data-testid="label-disabled" htmlFor="search">
      Search
    </Label>
}`,...(f=(L=o.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const j=["Default","LabelWithInput","LabelWithCheckbox","Disabled"];export{r as Default,o as Disabled,s as LabelWithCheckbox,a as LabelWithInput,j as __namedExportsOrder,W as default};
