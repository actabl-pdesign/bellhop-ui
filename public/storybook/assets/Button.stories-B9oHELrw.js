import{j as u}from"./jsx-runtime-B5W7bLQt.js";import{B as h}from"./Button-DO_l4KZZ.js";import{c as y}from"./createLucideIcon-SRGodXbP.js";import"./iframe-Eqk540XJ.js";import"./index-C5rTDRtx.js";import"./utils-CCU0hLc8.js";import"./index-Cmm6BTU1.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],f=y("loader-circle",v);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],b=y("mail",S),M={title:"ui/Button",component:h,tags:["autodocs"],argTypes:{variant:{options:["primary","secondary","outline","ghost","destructive","link"],control:{type:"radio"}},size:{options:["small","medium","large","icon"],control:{type:"select"}},loading:{control:{type:"boolean"}},asChild:{table:{disable:!0}},ariaLabel:{table:{disable:!0}}},parameters:{layout:"centered",docs:{description:{component:"Displays a button or a component that looks like a button."}}},args:{variant:"primary",size:"small",children:"Button"}},s={},e={args:{variant:"secondary"}},r={args:{variant:"outline"}},a={args:{variant:"ghost"}},t={args:{variant:"destructive"}},o={args:{variant:"link"}},n={render:g=>u.jsxs(h,{...g,children:[u.jsx(f,{className:"mr-2 h-4 w-4 animate-spin"}),"Button"]}),args:{...r.args,disabled:!0}},i={render:g=>u.jsxs(h,{...g,children:[u.jsx(b,{className:"mr-2 h-4 w-4"})," Login with Email Button"]}),args:{...e.args}},c={args:{size:"small"}},d={args:{size:"medium"}},m={args:{size:"large"}},p={args:{...e.args,size:"icon",title:"Mail",children:u.jsx(b,{})}},l={args:{disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"The `primary` form of the button, used for primary actions and commands.",...s.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...e.parameters?.docs?.source},description:{story:"Use the `secondary` button to call for less emphasized actions, styled to\ncomplement the primary button while being less conspicuous.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...r.parameters?.docs?.source},description:{story:"Use the `outline` button to reduce emphasis on secondary actions, such as\ncanceling or dismissing a dialog.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...a.parameters?.docs?.source},description:{story:"Use the `ghost` button is minimalistic and subtle, for less intrusive\nactions.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...t.parameters?.docs?.source},description:{story:"Use the `destructive` button to indicate errors, alerts, or the need for\nimmediate attention.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...o.parameters?.docs?.source},description:{story:"Use the `link` button to reduce emphasis on tertiary actions, such as\nhyperlink or navigation, providing a text-only interactive element.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>,
  args: {
    ...Outline.args,
    disabled: true
  }
}`,...n.parameters?.docs?.source},description:{story:"Add the `disabled` prop to a button to prevent interactions and add a\nloading indicator, such as a spinner, to signify an in-progress action.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email Button
    </Button>,
  args: {
    ...Secondary.args
  }
}`,...i.parameters?.docs?.source},description:{story:`Add an icon element to a button to enhance visual communication and
providing additional context for the action.`,...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...c.parameters?.docs?.source},description:{story:"Use the `small` size for a smaller button, suitable for interfaces needing\ncompact elements without sacrificing usability.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...d.parameters?.docs?.source},description:{story:"Use the `medium` size for a medium button, suitable for interfaces needing\ncompact elements without sacrificing usability.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...m.parameters?.docs?.source},description:{story:"Use the `lg` size for a larger button, offering better visibility and\neasier interaction for users.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Secondary.args,
    size: "icon",
    title: "Mail",
    children: <Mail />
  }
}`,...p.parameters?.docs?.source},description:{story:'Use the "icon" size for a button with only an icon.',...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Add the `disabled` prop to prevent interactions with the button.",...l.parameters?.docs?.description}}};const j=["Primary","Secondary","Outline","Ghost","Destructive","Link","Loading","WithIcon","Small","Medium","Large","Icon","Disabled"];export{t as Destructive,l as Disabled,a as Ghost,p as Icon,m as Large,o as Link,n as Loading,d as Medium,r as Outline,s as Primary,e as Secondary,c as Small,i as WithIcon,j as __namedExportsOrder,M as default};
