import{j as a}from"./jsx-runtime-B5W7bLQt.js";import{A as e,a as c,b as o}from"./Avatar-BX70uCzC.js";import{c as i}from"./createLucideIcon-SRGodXbP.js";import"./iframe-Eqk540XJ.js";import"./index-Da9jUEym.js";import"./index-Cb0Vfi1P.js";import"./index-KZEi8YOh.js";import"./index-CkwiM_G9.js";import"./index-Cmm6BTU1.js";import"./utils-CCU0hLc8.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],d=i("user",m),k={title:"ui/Avatar",component:e,tags:["autodocs"],argTypes:{},render:n=>a.jsxs(e,{...n,children:[a.jsx(c,{src:"./avatars/actabl.png"}),a.jsx(o,{children:"CN"})]}),parameters:{layout:"centered",docs:{description:{component:"An image element with a fallback for representing the user."}}}},r={render:()=>a.jsxs(e,{children:[a.jsx(c,{src:"./avatars/actabl.png"}),a.jsx(o,{children:"AD"})]})},t={render:()=>a.jsxs(e,{children:[a.jsx(c,{src:"0"}),a.jsx(o,{children:"AD"})]})},s={render:()=>a.jsx(e,{children:a.jsx(d,{size:24})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="./avatars/actabl.png" />
      <AvatarFallback>AD</AvatarFallback>
    </Avatar>
}`,...r.parameters?.docs?.source},description:{story:"The default form of the avatar.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="0" />
      <AvatarFallback>AD</AvatarFallback>
    </Avatar>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <UserIcon size={24} />
    </Avatar>
}`,...s.parameters?.docs?.source}}};const f=["WithImage","WithFallback","WithIcon"];export{t as WithFallback,s as WithIcon,r as WithImage,f as __namedExportsOrder,k as default};
