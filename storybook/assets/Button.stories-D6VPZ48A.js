import{j as Ue,a as g}from"./utils-CG0zMHQs.js";import{B as h}from"./Button-BP39CGKM.js";import{c as Me}from"./createLucideIcon-HMKsws72.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],De=Me("loader-circle",_e);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Ne=Me("mail",Ie),Pe={title:"ui/Button",component:h,tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered",docs:{description:{component:"Displays a button or a component that looks like a button."}}},args:{variant:"primary",size:"sm",children:"Button"}},s={},e={args:{variant:"secondary"}},r={args:{variant:"outline"}},a={args:{variant:"ghost"}},t={args:{variant:"destructive"}},o={args:{variant:"link"}},n={render:l=>Ue(h,{...l,children:[g(De,{className:"mr-2 h-4 w-4 animate-spin"}),"Button"]}),args:{...r.args,disabled:!0}},i={render:l=>Ue(h,{...l,children:[g(Ne,{className:"mr-2 h-4 w-4"})," Login with Email Button"]}),args:{...e.args}},c={args:{size:"sm"}},d={args:{size:"md"}},m={args:{size:"lg"}},p={args:{...e.args,size:"icon",title:"Mail",children:g(Ne,{})}},u={args:{disabled:!0}};var y,b,f,v,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:"The `primary` form of the button, used for primary actions and commands.",...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var z,k,w,B,L;e.parameters={...e.parameters,docs:{...(z=e.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(w=(k=e.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"Use the `secondary` button to call for less emphasized actions, styled to\ncomplement the primary button while being less conspicuous.",...(L=(B=e.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var x,U,M,N,_;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(M=(U=r.parameters)==null?void 0:U.docs)==null?void 0:M.source},description:{story:"Use the `outline` button to reduce emphasis on secondary actions, such as\ncanceling or dismissing a dialog.",...(_=(N=r.parameters)==null?void 0:N.docs)==null?void 0:_.description}}};var D,I,O,j,A;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(O=(I=a.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"Use the `ghost` button is minimalistic and subtle, for less intrusive\nactions.",...(A=(j=a.parameters)==null?void 0:j.docs)==null?void 0:A.description}}};var E,G,P,T,W;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...(P=(G=t.parameters)==null?void 0:G.docs)==null?void 0:P.source},description:{story:"Use the `destructive` button to indicate errors, alerts, or the need for\nimmediate attention.",...(W=(T=t.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};var C,$,q,F,H;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...(q=($=o.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:"Use the `link` button to reduce emphasis on tertiary actions, such as\nhyperlink or navigation, providing a text-only interactive element.",...(H=(F=o.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var J,K,Q,R,V;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>,
  args: {
    ...Outline.args,
    disabled: true
  }
}`,...(Q=(K=n.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Add the `disabled` prop to a button to prevent interactions and add a\nloading indicator, such as a spinner, to signify an in-progress action.",...(V=(R=n.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var X,Y,Z,ee,re;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email Button
    </Button>,
  args: {
    ...Secondary.args
  }
}`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Add an icon element to a button to enhance visual communication and
providing additional context for the action.`,...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var se,ae,te,oe,ne;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(te=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:te.source},description:{story:"Use the `sm` size for a smaller button, suitable for interfaces needing\ncompact elements without sacrificing usability.",...(ne=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ie,ce,de,me,pe;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(de=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Use the `sm` size for a smaller button, suitable for interfaces needing\ncompact elements without sacrificing usability.",...(pe=(me=d.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var ue,le,ge,he,ye;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(ge=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ge.source},description:{story:"Use the `lg` size for a larger button, offering better visibility and\neasier interaction for users.",...(ye=(he=m.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var be,fe,ve,Se,ze;p.parameters={...p.parameters,docs:{...(be=p.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Secondary.args,
    size: "icon",
    title: "Mail",
    children: <Mail />
  }
}`,...(ve=(fe=p.parameters)==null?void 0:fe.docs)==null?void 0:ve.source},description:{story:'Use the "icon" size for a button with only an icon.',...(ze=(Se=p.parameters)==null?void 0:Se.docs)==null?void 0:ze.description}}};var ke,we,Be,Le,xe;u.parameters={...u.parameters,docs:{...(ke=u.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(Be=(we=u.parameters)==null?void 0:we.docs)==null?void 0:Be.source},description:{story:"Add the `disabled` prop to prevent interactions with the button.",...(xe=(Le=u.parameters)==null?void 0:Le.docs)==null?void 0:xe.description}}};const Te=["Primary","Secondary","Outline","Ghost","Destructive","Link","Loading","WithIcon","Small","Medium","Large","Icon","Disabled"];export{t as Destructive,u as Disabled,a as Ghost,p as Icon,m as Large,o as Link,n as Loading,d as Medium,r as Outline,s as Primary,e as Secondary,c as Small,i as WithIcon,Te as __namedExportsOrder,Pe as default};
