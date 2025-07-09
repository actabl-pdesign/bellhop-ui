import{j as e}from"./jsx-runtime-B5W7bLQt.js";import{C as d}from"./Checkbox-KHgU3lzQ.js";import{I as c}from"./Input-BcO9Fqia.js";import{L as t}from"./Label-kzYG25AI.js";import"./iframe-Eqk540XJ.js";import"./index-Cmm6BTU1.js";import"./index-Da9jUEym.js";import"./index-Bdj5mvxQ.js";import"./index-ClkcLjfE.js";import"./index-BCN0BQQa.js";import"./index-BjujI8WA.js";import"./index-KZEi8YOh.js";import"./index-CkwiM_G9.js";import"./utils-CCU0hLc8.js";import"./createLucideIcon-SRGodXbP.js";const F={title:"ui/Label",component:t,tags:["autodocs"],argTypes:{children:{control:"text",disabled:{control:"boolean"}}},parameters:{layout:"centered"}},r={args:{children:"Label"}},a={render:()=>e.jsxs("form",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"password",children:"Password"}),e.jsx(c,{placeholder:"Enter password",id:"password",name:"password",type:"password"})]})},s={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{id:"r1"}),e.jsx(t,{htmlFor:"r1",children:"Accept terms and conditions"})]})},o={render:()=>e.jsx(t,{disabled:!0,"data-testid":"label-disabled",htmlFor:"search",children:"Search"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Label"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <form className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </form>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">Accept terms and conditions</Label>
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Label disabled data-testid="label-disabled" htmlFor="search">
      Search
    </Label>
}`,...o.parameters?.docs?.source}}};const S=["Default","LabelWithInput","LabelWithCheckbox","Disabled"];export{r as Default,o as Disabled,s as LabelWithCheckbox,a as LabelWithInput,S as __namedExportsOrder,F as default};
