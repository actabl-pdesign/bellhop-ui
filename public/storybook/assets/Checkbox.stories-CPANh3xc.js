import{j as e}from"./jsx-runtime-B5W7bLQt.js";import{C as a}from"./Checkbox-KHgU3lzQ.js";import{L as o}from"./Label-kzYG25AI.js";import"./iframe-Eqk540XJ.js";import"./index-Cmm6BTU1.js";import"./index-Da9jUEym.js";import"./index-Bdj5mvxQ.js";import"./index-ClkcLjfE.js";import"./index-BCN0BQQa.js";import"./index-BjujI8WA.js";import"./index-KZEi8YOh.js";import"./index-CkwiM_G9.js";import"./utils-CCU0hLc8.js";const y={title:"ui/Checkbox",component:a,tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}}},r={},c={args:{checked:!0}},s={args:{checked:"indeterminate"}},t={render:i=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...i,checked:!0})," ",e.jsx(o,{disabled:!0,children:"Checked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...i,checked:!1})," ",e.jsx(o,{disabled:!0,children:"Unchecked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{...i,checked:"indeterminate"}),e.jsx(o,{disabled:!0,children:"Indeterminate"})]})]}),args:{disabled:!0}},d={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(a,{id:"r1"}),e.jsx(o,{htmlFor:"r1",children:"I'd like to be notified by SMS when my order is ready for collection."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"The default form of the checkbox.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate"
  }
}`,...s.parameters?.docs?.source},description:{story:"Use the `indeterminate` prop on parent checkboxes when its nested group is partially checked.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Use the `disabled` prop to disable the checkbox.",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">
        I'd like to be notified by SMS when my order is ready for collection.
      </Label>
    </div>
}`,...d.parameters?.docs?.source}}};const L=["Default","Checked","Indeterminate","Disabled","WithLabel"];export{c as Checked,r as Default,t as Disabled,s as Indeterminate,d as WithLabel,L as __namedExportsOrder,y as default};
