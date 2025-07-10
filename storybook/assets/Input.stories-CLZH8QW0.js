import{j as e}from"./jsx-runtime-DeussEn5.js";import{R as Y}from"./iframe-BkoCep_H.js";import{B as h}from"./Button-BuIkWvVT.js";import{I as r}from"./Input-CBN-jLgw.js";import{L as a}from"./Label-If0v0ig4.js";import"./index-qfXV6w7r.js";import"./utils-Cq7e7suc.js";import"./index-_Ku1bwhf.js";import"./createLucideIcon-DUlmydWR.js";import"./index-DroN4xqQ.js";import"./index-DToJw900.js";const pe={title:"ui/Input",component:r,tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered"}},s={render:()=>e.jsx(r,{})},t={render:()=>e.jsx(r,{disabled:!0})},n={render:()=>e.jsx(r,{placeholder:"With Placeholder"})},o={render:()=>e.jsxs("form",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx(r,{placeholder:"Enter password",id:"password",name:"password",type:"password"})]})},c={render:()=>e.jsxs("form",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"search",children:"Search"}),e.jsx(r,{disabled:!0,placeholder:"Enter search",id:"search",name:"search",type:"search"})," "]})},l={render:()=>e.jsxs("form",{className:"flex flex-col gap-2",children:[e.jsx("p",{children:"Non capitalized characters only"}),e.jsx(a,{htmlFor:"secret",children:"Secret"}),e.jsx(r,{required:!0,id:"secret",name:"secret",type:"text",placeholder:"Non-capitalized only",pattern:"[a-z]+"}),e.jsx(h,{type:"submit",variant:"secondary",children:"Submit"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"number",children:"Upload you resume"}),e.jsx(r,{id:"upload",name:"upload",type:"file"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"number",children:"Enter Salary"}),e.jsx(r,{id:"number",name:"number",type:"number"})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(r,{hasError:!0,placeholder:"Enter your email",id:"full_name",name:"full_name",type:"text",enableStepper:!0})]})},i={render:()=>e.jsxs("form",{className:"inline-flex items-center gap-1",children:[e.jsx(r,{required:!0,id:"secret",name:"secret",type:"text",placeholder:"Non-capitalized only",pattern:"[a-z]+"}),e.jsx(h,{variant:"secondary",children:"Submit"})]})},u={render:function(){const[x,V]=Y.useState("");return e.jsxs("form",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"File",children:"Search"}),e.jsx(r,{placeholder:"Enter search",id:"search",name:"search",type:"search",value:x,onChange:X=>V(X.target.value)}),e.jsx(h,{type:"submit",variant:"secondary",children:"Submit"}),e.jsx("p",{children:x})]})}};var f,y,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Input />
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,j,g;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Input disabled />
}`,...(g=(j=t.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var N,v,E;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Input placeholder="With Placeholder" />
}`,...(E=(v=n.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var F,I,L;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <form className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </form>
}`,...(L=(I=o.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var w,z,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <form className="space-y-2">
      <Label htmlFor="search">Search</Label>
      <Input disabled placeholder="Enter search" id="search" name="search" type="search" />{" "}
    </form>
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,T,q;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col gap-2">
      <p>Non capitalized characters only</p>
      <Label htmlFor="secret">Secret</Label>
      <Input required id="secret" name="secret" type="text" placeholder="Non-capitalized only" pattern="[a-z]+" />
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </form>
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var C,D,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="number">Upload you resume</Label>
      <Input id="upload" name="upload" type="file" />
    </div>
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,_,A;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="number">Enter Salary</Label>
      <Input id="number" name="number" type="number" />
    </div>
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var H,U,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input hasError placeholder="Enter your email" id="full_name" name="full_name" type="text" enableStepper />
    </div>
}`,...(O=(U=m.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var k,G,J;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <form className="inline-flex items-center gap-1">
      <Input required id="secret" name="secret" type="text" placeholder="Non-capitalized only" pattern="[a-z]+" />
      <Button variant="secondary">Submit</Button>
    </form>
}`,...(J=(G=i.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const me=["Default","Disabled","WithPlaceholder","TypePassword","TypeSearchDisabled","RequiredAndPattern","TypeFile","TypeNumber","HasError","InputWithButton","Controlled"];export{u as Controlled,s as Default,t as Disabled,m as HasError,i as InputWithButton,l as RequiredAndPattern,d as TypeFile,p as TypeNumber,o as TypePassword,c as TypeSearchDisabled,n as WithPlaceholder,me as __namedExportsOrder,pe as default};
