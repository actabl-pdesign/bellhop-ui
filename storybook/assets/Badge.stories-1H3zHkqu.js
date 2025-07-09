import{j as e}from"./jsx-runtime-BzK0D5sF.js";import{B as i}from"./Badge-BCLbYwyz.js";import{C as R}from"./check-Cddz6Mao.js";import"./iframe-DKkCZFmw.js";import"./index-qfXV6w7r.js";import"./utils-Cq7e7suc.js";import"./index-DvZojH7i.js";import"./createLucideIcon-yMOlT9DU.js";const Q={title:"ui/Badge",component:i,tags:["autodocs"],argTypes:{variant:{options:["solid","soft","outline"],control:{type:"radio"}},color:{options:["brand","neutral","success","error","warning","purple","violet","rose","blue"],control:{type:"select"}},size:{options:["small","medium"],control:{type:"radio"}}},args:{variant:"solid",color:"brand",size:"medium",children:"Badge"},parameters:{layout:"centered",docs:{description:{component:"Displays a badge or a component that looks like a badge."}}}},r={args:{variant:"solid",color:"brand",size:"medium"}},s={args:{variant:"soft",color:"purple"}},o={args:{variant:"outline"}},a={args:{variant:"solid",color:"error"}},t={render:_=>e.jsxs(i,{..._,children:[e.jsx(R,{size:16}),"Success"]}),args:{variant:"soft",color:"success",size:"small"}},n={render:()=>e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(i,{size:"small",color:"rose",children:"Small"}),e.jsx(i,{size:"medium",color:"rose",children:"Medium"}),e.jsx(i,{size:"large",color:"rose",children:"Large"})]}),args:{variant:"soft"}};var c,d,l,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    color: "brand",
    size: "medium"
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source},description:{story:"The `solid` form of the badge, to call for urgency,\nwhen it needs to be highlighted in tu interface.",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var g,u,h,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "soft",
    color: "purple"
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Use the `soft` badge to call for less urgent information, blending\ninto the interface while still signaling minor updates or statuses.",...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var z,b,y,S,x;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Use the `outline` badge for overlaying without obscuring interface details,\nemphasizing clarity and subtlety..",...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.description}}};var B,j,w,k,I;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    color: "error"
  }
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"Use the `destructive` badge to  indicate errors, alerts, or the need for\nimmediate attention.",...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.description}}};var U,C,D,O,E;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <Badge {...args}>
      <CheckIcon size={16} />
      Success
    </Badge>,
  args: {
    variant: "soft",
    color: "success",
    size: "small"
  }
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"Use the `success` badge to  indicate completion.\nIt can also have a icon to reinforce the message.",...(E=(O=t.parameters)==null?void 0:O.docs)==null?void 0:E.description}}};var L,M,N,T,W;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(M=n.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"Badges can be used within the sizes `small` , `medium` and `large`.",...(W=(T=n.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};const V=["Solid","Soft","Outline","Destructive","WithIcon","Sizes"];export{a as Destructive,o as Outline,n as Sizes,s as Soft,r as Solid,t as WithIcon,V as __namedExportsOrder,Q as default};
