import{j as e}from"./jsx-runtime-BzK0D5sF.js";import{c as v}from"./index-qfXV6w7r.js";import{r as n}from"./iframe-DKkCZFmw.js";import{a as o}from"./utils-Cq7e7suc.js";import{c as N}from"./createLucideIcon-yMOlT9DU.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]],s=N("apple",j),h=v("inline-flex items-center justify-center rounded-full",{variants:{variant:{primary:"bg-indigo-200 text-primary",neutral:"bg-gray-200 text-gray-600",danger:"bg-red-200 text-red-600",warning:"bg-amber-200 text-amber-600",success:"bg-green-200 text-green-600",info:"bg-indigo-200 text-primary",purple:"bg-purple-200 text-purple-600",outline:"bg-white text-gray-600 border border-gray-200 rounded-lg"},size:{sm:"h-8 w-8",md:"h-10 w-10"}},defaultVariants:{variant:"primary",size:"md"}}),a=n.forwardRef(({className:c,variant:x,size:i,icon:r,...u},g)=>{var l;const f=n.useMemo(()=>{switch(i){case"sm":return"h-4 w-4";case"md":return"h-5 w-5";default:return"h-5 w-5"}},[i]),y=n.isValidElement(r)?n.cloneElement(r,{className:o(f,(l=r.props)==null?void 0:l.className)}):null;return e.jsx("div",{ref:g,className:o(h({variant:x,size:i}),c),...u,children:y||r})});a.displayName="FeaturedIcon";try{a.displayName="FeaturedIcon",a.__docgenInfo={description:"",displayName:"FeaturedIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "outline" | "neutral" | "success" | "warning" | "purple" | "danger" | "info" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | null'}}}}}catch{}const F={title:"ui/FeaturedIcon",component:a,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"}},t={render:()=>e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:"primary",icon:e.jsx(s,{size:20})}),e.jsx("span",{className:"text-sm text-gray-500",children:"Primary"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:"neutral",icon:e.jsx(s,{size:20})}),e.jsx("span",{className:"text-sm text-gray-500",children:"Neutral"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:"danger",icon:e.jsx(s,{size:20})}),e.jsx("span",{className:"text-sm text-gray-500",children:"Danger"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:"warning",icon:e.jsx(s,{size:20})}),e.jsx("span",{className:"text-sm text-gray-500",children:"Warning"})]})]})};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon variant="primary" icon={<AppleIcon size={20} />} />
        <span className="text-sm text-gray-500">Primary</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon variant="neutral" icon={<AppleIcon size={20} />} />
        <span className="text-sm text-gray-500">Neutral</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon variant="danger" icon={<AppleIcon size={20} />} />
        <span className="text-sm text-gray-500">Danger</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon variant="warning" icon={<AppleIcon size={20} />} />
        <span className="text-sm text-gray-500">Warning</span>
      </div>
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const A=["Icons"];export{t as Icons,A as __namedExportsOrder,F as default};
