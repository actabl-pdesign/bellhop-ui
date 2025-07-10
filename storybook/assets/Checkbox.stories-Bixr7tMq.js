import{j as e}from"./jsx-runtime-D_NlE7bE.js";import{C as a}from"./Checkbox-D7SeGqiY.js";import{L as o}from"./Label-D1L0zRoC.js";import"./iframe-TczdQGhE.js";import"./index-BEG6t_k7.js";import"./index-BSz_ARMN.js";import"./index-CA1ZrPjo.js";import"./index-CCAz7tpj.js";import"./index-3lzGfYqx.js";import"./index-BTAc1XBi.js";import"./index-DV_F3LRJ.js";import"./index-D0Y9YjnD.js";import"./utils-Cq7e7suc.js";const G={title:"ui/Checkbox",component:a,tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}}},r={},c={args:{checked:!0}},s={args:{checked:"indeterminate"}},t={render:i=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...i,checked:!0})," ",e.jsx(o,{disabled:!0,children:"Checked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...i,checked:!1})," ",e.jsx(o,{disabled:!0,children:"Unchecked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...i,checked:"indeterminate"}),e.jsx(o,{disabled:!0,children:"Indeterminate"})]})]}),args:{disabled:!0}},d={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(a,{id:"r1"}),e.jsx(o,{htmlFor:"r1",children:"I'd like to be notified by SMS when my order is ready for collection."})]})};var n,l,m,p,h;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"The default form of the checkbox.",...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var x,b,u;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(u=(b=c.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var k,f,g,j,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate"
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"Use the `indeterminate` prop on parent checkboxes when its nested group is partially checked.",...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};var y,L,C,N,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked={true} /> <Label disabled>Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked={false} /> <Label disabled>Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked="indeterminate" />
        <Label disabled>Indeterminate</Label>
      </div>
    </div>,
  args: {
    disabled: true
  }
}`,...(C=(L=t.parameters)==null?void 0:L.docs)==null?void 0:C.source},description:{story:"Use the `disabled` prop to disable the checkbox.",...(S=(N=t.parameters)==null?void 0:N.docs)==null?void 0:S.description}}};var I,w,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">
        I'd like to be notified by SMS when my order is ready for collection.
      </Label>
    </div>
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const H=["Default","Checked","Indeterminate","Disabled","WithLabel"];export{c as Checked,r as Default,t as Disabled,s as Indeterminate,d as WithLabel,H as __namedExportsOrder,G as default};
