import{a as e,j as a}from"./utils-CG0zMHQs.js";import{R as Z}from"./index-BwDkhjyp.js";import{B as f}from"./Button-BP39CGKM.js";import{I as r}from"./Input-C0LZzixI.js";import{L as t}from"./Label-uLo0VAuu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createLucideIcon-HMKsws72.js";import"./index-aS4jWOJ1.js";const le={title:"ui/Input",component:r,tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered"}},n={render:()=>e(r,{})},s={render:()=>e(r,{disabled:!0})},o={render:()=>e(r,{placeholder:"With Placeholder"})},c={render:()=>a("form",{className:"space-y-2",children:[e(t,{htmlFor:"password",children:"Password"}),e(r,{placeholder:"Enter password",id:"password",name:"password",type:"password"})]})},l={render:()=>a("form",{className:"space-y-2",children:[e(t,{htmlFor:"search",children:"Search"}),e(r,{disabled:!0,placeholder:"Enter search",id:"search",name:"search",type:"search"})," "]})},d={render:()=>a("form",{className:"flex flex-col gap-2",children:[e("p",{children:"Non capitalized characters only"}),e(t,{htmlFor:"secret",children:"Secret"}),e(r,{required:!0,id:"secret",name:"secret",type:"text",placeholder:"Non-capitalized only",pattern:"[a-z]+"}),e(f,{type:"submit",variant:"secondary",children:"Submit"})]})},p={render:()=>a("div",{className:"flex gap-1",children:[e(r,{id:"upload",name:"upload",type:"file"}),e(r,{id:"upload",name:"upload"}),e(r,{id:"upload",name:"upload",type:"password"})]})},m={render:()=>a("div",{className:"flex flex-col gap-2",children:[e(t,{htmlFor:"number",children:"Enter Salary"}),e(r,{id:"number",name:"number",type:"number"})]})},i={render:()=>a("div",{className:"flex flex-col gap-2",children:[e(t,{htmlFor:"email",children:"Email"}),e(r,{hasError:!0,placeholder:"Enter full name",id:"full_name",name:"full_name",type:"text",enableStepper:!0})]})},u={render:()=>a("form",{className:"inline-flex items-center gap-1",children:[e(f,{children:"Submit"}),e(r,{required:!0,id:"secret",name:"secret",type:"text",placeholder:"Non-capitalized only",pattern:"[a-z]+"}),e(f,{variant:"secondary",children:"Submit"})]})},h={render:function(){const[y,X]=Z.useState("");return a("form",{className:"flex flex-col gap-2",children:[e(t,{htmlFor:"File",children:"Search"}),e(r,{placeholder:"Enter search",id:"search",name:"search",type:"search",value:y,onChange:Y=>X(Y.target.value)}),e(f,{type:"submit",variant:"secondary",children:"Submit"}),e("p",{children:y})]})}};var b,S,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Input />
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var g,N,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Input disabled />
}`,...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var I,E,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Input placeholder="With Placeholder" />
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var F,L,B;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <form className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </form>
}`,...(B=(L=c.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var z,P,T;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <form className="space-y-2">
      <Label htmlFor="search">Search</Label>
      <Input disabled placeholder="Enter search" id="search" name="search" type="search" />{" "}
    </form>
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,C,D;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col gap-2">
      <p>Non capitalized characters only</p>
      <Label htmlFor="secret">Secret</Label>
      <Input required id="secret" name="secret" type="text" placeholder="Non-capitalized only" pattern="[a-z]+" />
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </form>
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var W,_,R;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex gap-1">
      <Input id="upload" name="upload" type="file" />
      <Input id="upload" name="upload" />
      <Input id="upload" name="upload" type="password" />
    </div>
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var j,A,H;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="number">Enter Salary</Label>
      <Input id="number" name="number" type="number" />
    </div>
}`,...(H=(A=m.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var O,k,G;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input hasError placeholder="Enter full name" id="full_name" name="full_name" type="text" enableStepper />
    </div>
}`,...(G=(k=i.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var J,K,M;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <form className="inline-flex items-center gap-1">
      <Button>Submit</Button>
      <Input required id="secret" name="secret" type="text" placeholder="Non-capitalized only" pattern="[a-z]+" />
      <Button variant="secondary">Submit</Button>
    </form>
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,V;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const de=["Default","Disabled","WithPlaceholder","TypePassword","TypeSearchDisabled","RequiredAndPattern","TypeFile","TypeNumber","HasError","InputWithButton","Controlled"];export{h as Controlled,n as Default,s as Disabled,i as HasError,u as InputWithButton,d as RequiredAndPattern,p as TypeFile,m as TypeNumber,c as TypePassword,l as TypeSearchDisabled,o as WithPlaceholder,de as __namedExportsOrder,le as default};
