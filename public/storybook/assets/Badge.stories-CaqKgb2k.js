import{j as e}from"./jsx-runtime-B5W7bLQt.js";import{B as i}from"./Badge-CwdlPGfl.js";import{C as d}from"./check-O2aI7dwY.js";import"./iframe-Eqk540XJ.js";import"./index-C5rTDRtx.js";import"./utils-CCU0hLc8.js";import"./index-Cmm6BTU1.js";import"./createLucideIcon-SRGodXbP.js";const z={title:"ui/Badge",component:i,tags:["autodocs"],argTypes:{variant:{options:["solid","soft","outline"],control:{type:"radio"}},color:{options:["brand","neutral","success","error","warning","purple","violet","rose","blue"],control:{type:"select"}},size:{options:["small","medium"],control:{type:"radio"}}},args:{variant:"solid",color:"brand",size:"medium",children:"Badge"},parameters:{layout:"centered",docs:{description:{component:"Displays a badge or a component that looks like a badge."}}}},r={args:{variant:"solid",color:"brand",size:"medium"}},s={args:{variant:"soft",color:"purple"}},o={args:{variant:"outline"}},a={args:{variant:"solid",color:"error"}},t={render:c=>e.jsxs(i,{...c,children:[e.jsx(d,{size:16}),"Success"]}),args:{variant:"soft",color:"success",size:"small"}},n={render:()=>e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(i,{size:"small",color:"rose",children:"Small"}),e.jsx(i,{size:"medium",color:"rose",children:"Medium"}),e.jsx(i,{size:"large",color:"rose",children:"Large"})]}),args:{variant:"soft"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    color: "brand",
    size: "medium"
  }
}`,...r.parameters?.docs?.source},description:{story:"The `solid` form of the badge, to call for urgency,\nwhen it needs to be highlighted in tu interface.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "soft",
    color: "purple"
  }
}`,...s.parameters?.docs?.source},description:{story:"Use the `soft` badge to call for less urgent information, blending\ninto the interface while still signaling minor updates or statuses.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...o.parameters?.docs?.source},description:{story:"Use the `outline` badge for overlaying without obscuring interface details,\nemphasizing clarity and subtlety..",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    color: "error"
  }
}`,...a.parameters?.docs?.source},description:{story:"Use the `destructive` badge to  indicate errors, alerts, or the need for\nimmediate attention.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Badge {...args}>
      <CheckIcon size={16} />
      Success
    </Badge>,
  args: {
    variant: "soft",
    color: "success",
    size: "small"
  }
}`,...t.parameters?.docs?.source},description:{story:"Use the `success` badge to  indicate completion.\nIt can also have a icon to reinforce the message.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-row items-center gap-2">
      <Badge size="small" color="rose">
        Small
      </Badge>
      <Badge size="medium" color="rose">
        Medium
      </Badge>
      <Badge size="large" color="rose">
        Large
      </Badge>
    </div>,
  args: {
    variant: "soft"
  }
}`,...n.parameters?.docs?.source},description:{story:"Badges can be used within the sizes `small` , `medium` and `large`.",...n.parameters?.docs?.description}}};const b=["Solid","Soft","Outline","Destructive","WithIcon","Sizes"];export{a as Destructive,o as Outline,n as Sizes,s as Soft,r as Solid,t as WithIcon,b as __namedExportsOrder,z as default};
