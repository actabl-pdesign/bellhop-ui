import{j as t,a as e}from"./utils-CG0zMHQs.js";import{C as c}from"./Checkbox-BKBvzHLM.js";import{L as o}from"./Label-uLo0VAuu.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-aS4jWOJ1.js";const E={title:"ui/Checkbox",component:c,tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}}},r={},d={args:{checked:!0}},a={args:{checked:"indeterminate"}},s={render:i=>t("div",{className:"flex flex-col gap-2",children:[t("div",{className:"flex items-center gap-2",children:[e(c,{...i,checked:!0})," ",e(o,{disabled:!0,children:"Checked"})]}),t("div",{className:"flex items-center gap-2",children:[e(c,{...i,checked:!1})," ",e(o,{disabled:!0,children:"Unchecked"})]}),t("div",{className:"flex items-center gap-2",children:[e(c,{...i,checked:"indeterminate"}),e(o,{disabled:!0,children:"Indeterminate"})]})]}),args:{disabled:!0}},n={render:()=>t("div",{className:"flex items-center justify-center gap-2",children:[e(c,{id:"r1"}),e(o,{htmlFor:"r1",children:"I'd like to be notified by SMS when my order is ready for collection."})]})};var l,m,p,h,b;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"The default form of the checkbox.",...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var u,k,f;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var g,x,v,y,L;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate"
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Use the `indeterminate` prop on parent checkboxes when its nested group is partially checked.",...(L=(y=a.parameters)==null?void 0:y.docs)==null?void 0:L.description}}};var C,N,S,I,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source},description:{story:"Use the `disabled` prop to disable the checkbox.",...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.description}}};var w,D,U;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">
        I'd like to be notified by SMS when my order is ready for collection.
      </Label>
    </div>
}`,...(U=(D=n.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const O=["Default","Checked","Indeterminate","Disabled","WithLabel"];export{d as Checked,r as Default,s as Disabled,a as Indeterminate,n as WithLabel,O as __namedExportsOrder,E as default};
