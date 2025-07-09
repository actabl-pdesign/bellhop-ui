import{j as e}from"./jsx-runtime-B5W7bLQt.js";import{R as b}from"./iframe-Eqk540XJ.js";import{B as h}from"./Button-DO_l4KZZ.js";import{I as r}from"./Input-BcO9Fqia.js";import{L as a}from"./Label-kzYG25AI.js";import"./index-C5rTDRtx.js";import"./utils-CCU0hLc8.js";import"./index-Cmm6BTU1.js";import"./createLucideIcon-SRGodXbP.js";import"./index-KZEi8YOh.js";import"./index-CkwiM_G9.js";const P={title:"ui/Input",component:r,tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered"}},s={render:()=>e.jsx(r,{})},t={render:()=>e.jsx(r,{disabled:!0})},n={render:()=>e.jsx(r,{placeholder:"With Placeholder"})},o={render:()=>e.jsxs("form",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx(r,{placeholder:"Enter password",id:"password",name:"password",type:"password"})]})},c={render:()=>e.jsxs("form",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"search",children:"Search"}),e.jsx(r,{disabled:!0,placeholder:"Enter search",id:"search",name:"search",type:"search"})," "]})},l={render:()=>e.jsxs("form",{className:"flex flex-col gap-2",children:[e.jsx("p",{children:"Non capitalized characters only"}),e.jsx(a,{htmlFor:"secret",children:"Secret"}),e.jsx(r,{required:!0,id:"secret",name:"secret",type:"text",placeholder:"Non-capitalized only",pattern:"[a-z]+"}),e.jsx(h,{type:"submit",variant:"secondary",children:"Submit"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"number",children:"Upload you resume"}),e.jsx(r,{id:"upload",name:"upload",type:"file"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"number",children:"Enter Salary"}),e.jsx(r,{id:"number",name:"number",type:"number"})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(r,{hasError:!0,placeholder:"Enter your email",id:"full_name",name:"full_name",type:"text",enableStepper:!0})]})},i={render:()=>e.jsxs("form",{className:"inline-flex items-center gap-1",children:[e.jsx(r,{required:!0,id:"secret",name:"secret",type:"text",placeholder:"Non-capitalized only",pattern:"[a-z]+"}),e.jsx(h,{variant:"secondary",children:"Submit"})]})},u={render:function(){const[x,f]=b.useState("");return e.jsxs("form",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"File",children:"Search"}),e.jsx(r,{placeholder:"Enter search",id:"search",name:"search",type:"search",value:x,onChange:y=>f(y.target.value)}),e.jsx(h,{type:"submit",variant:"secondary",children:"Submit"}),e.jsx("p",{children:x})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Input />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Input disabled />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Input placeholder="With Placeholder" />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <form className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </form>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <form className="space-y-2">
      <Label htmlFor="search">Search</Label>
      <Input disabled placeholder="Enter search" id="search" name="search" type="search" />{" "}
    </form>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col gap-2">
      <p>Non capitalized characters only</p>
      <Label htmlFor="secret">Secret</Label>
      <Input required id="secret" name="secret" type="text" placeholder="Non-capitalized only" pattern="[a-z]+" />
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </form>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="number">Upload you resume</Label>
      <Input id="upload" name="upload" type="file" />
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="number">Enter Salary</Label>
      <Input id="number" name="number" type="number" />
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input hasError placeholder="Enter your email" id="full_name" name="full_name" type="text" enableStepper />
    </div>
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <form className="inline-flex items-center gap-1">
      <Input required id="secret" name="secret" type="text" placeholder="Non-capitalized only" pattern="[a-z]+" />
      <Button variant="secondary">Submit</Button>
    </form>
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function ControlledInput() {
    const [search, setSearch] = React.useState("");
    return <form className="flex flex-col gap-2">
        <Label htmlFor="File">Search</Label>
        <Input placeholder="Enter search" id="search" name="search" type="search" value={search} onChange={event => setSearch(event.target.value)} />
        <Button type="submit" variant="secondary">
          Submit
        </Button>
        <p>{search}</p>
      </form>;
  }
}`,...u.parameters?.docs?.source}}};const T=["Default","Disabled","WithPlaceholder","TypePassword","TypeSearchDisabled","RequiredAndPattern","TypeFile","TypeNumber","HasError","InputWithButton","Controlled"];export{u as Controlled,s as Default,t as Disabled,m as HasError,i as InputWithButton,l as RequiredAndPattern,d as TypeFile,p as TypeNumber,o as TypePassword,c as TypeSearchDisabled,n as WithPlaceholder,T as __namedExportsOrder,P as default};
