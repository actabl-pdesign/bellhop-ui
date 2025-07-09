import{j as u}from"./jsx-runtime-BOs0cLQj.js";import{B as h}from"./Button-COJJdvFz.js";import{c as Ue}from"./createLucideIcon-Bg_QJIuc.js";import"./iframe-Ck4IQaKq.js";import"./index-qfXV6w7r.js";import"./utils-Cq7e7suc.js";import"./index-B1bhzFGd.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ne=Ue("loader-circle",je);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Me=Ue("mail",_e),Pe={title:"ui/Button",component:h,tags:["autodocs"],argTypes:{variant:{options:["primary","secondary","outline","ghost","destructive","link"],control:{type:"radio"}},size:{options:["small","medium","large","icon"],control:{type:"select"}},loading:{control:{type:"boolean"}},asChild:{table:{disable:!0}},ariaLabel:{table:{disable:!0}}},parameters:{layout:"centered",docs:{description:{component:"Displays a button or a component that looks like a button."}}},args:{variant:"primary",size:"small",children:"Button"}},s={},e={args:{variant:"secondary"}},r={args:{variant:"outline"}},a={args:{variant:"ghost"}},t={args:{variant:"destructive"}},o={args:{variant:"link"}},n={render:g=>u.jsxs(h,{...g,children:[u.jsx(Ne,{className:"mr-2 h-4 w-4 animate-spin"}),"Button"]}),args:{...r.args,disabled:!0}},i={render:g=>u.jsxs(h,{...g,children:[u.jsx(Me,{className:"mr-2 h-4 w-4"})," Login with Email Button"]}),args:{...e.args}},c={args:{size:"small"}},d={args:{size:"medium"}},m={args:{size:"large"}},p={args:{...e.args,size:"icon",title:"Mail",children:u.jsx(Me,{})}},l={args:{disabled:!0}};var y,b,v,f,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"The `primary` form of the button, used for primary actions and commands.",...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var z,k,x,L,w;e.parameters={...e.parameters,docs:{...(z=e.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(x=(k=e.parameters)==null?void 0:k.docs)==null?void 0:x.source},description:{story:"Use the `secondary` button to call for less emphasized actions, styled to\ncomplement the primary button while being less conspicuous.",...(w=(L=e.parameters)==null?void 0:L.docs)==null?void 0:w.description}}};var B,U,M,j,N;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(M=(U=r.parameters)==null?void 0:U.docs)==null?void 0:M.source},description:{story:"Use the `outline` button to reduce emphasis on secondary actions, such as\ncanceling or dismissing a dialog.",...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var _,D,I,E,O;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(I=(D=a.parameters)==null?void 0:D.docs)==null?void 0:I.source},description:{story:"Use the `ghost` button is minimalistic and subtle, for less intrusive\nactions.",...(O=(E=a.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var A,C,G,P,T;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...(G=(C=t.parameters)==null?void 0:C.docs)==null?void 0:G.source},description:{story:"Use the `destructive` button to indicate errors, alerts, or the need for\nimmediate attention.",...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};var W,R,$,q,F;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...($=(R=o.parameters)==null?void 0:R.docs)==null?void 0:$.source},description:{story:"Use the `link` button to reduce emphasis on tertiary actions, such as\nhyperlink or navigation, providing a text-only interactive element.",...(F=(q=o.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var H,J,K,Q,V;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>,
  args: {
    ...Outline.args,
    disabled: true
  }
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Add the `disabled` prop to a button to prevent interactions and add a\nloading indicator, such as a spinner, to signify an in-progress action.",...(V=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};var X,Y,Z,ee,re;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email Button
    </Button>,
  args: {
    ...Secondary.args
  }
}`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Add an icon element to a button to enhance visual communication and
providing additional context for the action.`,...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var se,ae,te,oe,ne;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(te=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:te.source},description:{story:"Use the `sm` size for a smaller button, suitable for interfaces needing\ncompact elements without sacrificing usability.",...(ne=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ie,ce,de,me,pe;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...(de=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Use the `sm` size for a smaller button, suitable for interfaces needing\ncompact elements without sacrificing usability.",...(pe=(me=d.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var le,ue,ge,he,ye;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...(ge=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:ge.source},description:{story:"Use the `lg` size for a larger button, offering better visibility and\neasier interaction for users.",...(ye=(he=m.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var be,ve,fe,Se,ze;p.parameters={...p.parameters,docs:{...(be=p.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Secondary.args,
    size: "icon",
    title: "Mail",
    children: <Mail />
  }
}`,...(fe=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:'Use the "icon" size for a button with only an icon.',...(ze=(Se=p.parameters)==null?void 0:Se.docs)==null?void 0:ze.description}}};var ke,xe,Le,we,Be;l.parameters={...l.parameters,docs:{...(ke=l.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(Le=(xe=l.parameters)==null?void 0:xe.docs)==null?void 0:Le.source},description:{story:"Add the `disabled` prop to prevent interactions with the button.",...(Be=(we=l.parameters)==null?void 0:we.docs)==null?void 0:Be.description}}};const Te=["Primary","Secondary","Outline","Ghost","Destructive","Link","Loading","WithIcon","Small","Medium","Large","Icon","Disabled"];export{t as Destructive,l as Disabled,a as Ghost,p as Icon,m as Large,o as Link,n as Loading,d as Medium,r as Outline,s as Primary,e as Secondary,c as Small,i as WithIcon,Te as __namedExportsOrder,Pe as default};
