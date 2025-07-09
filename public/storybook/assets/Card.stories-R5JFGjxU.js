import{j as e}from"./jsx-runtime-B5W7bLQt.js";import{B as j}from"./Badge-CwdlPGfl.js";import{B as f}from"./Button-DO_l4KZZ.js";import{r as i}from"./iframe-Eqk540XJ.js";import{c as l}from"./utils-CCU0hLc8.js";import{I as u}from"./Input-BcO9Fqia.js";import{L as h}from"./Label-kzYG25AI.js";import{c as y}from"./createLucideIcon-SRGodXbP.js";import"./index-C5rTDRtx.js";import"./index-Cmm6BTU1.js";import"./index-KZEi8YOh.js";import"./index-CkwiM_G9.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],N=y("trending-up",_),t=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:l("rounded-xl border bg-white text-gray-800 shadow-sm",r),...a}));t.displayName="Card";const n=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:l("flex flex-col space-y-1.5 p-6",r),...a}));n.displayName="CardHeader";const o=i.forwardRef(({className:r,...a},s)=>e.jsx("h3",{ref:s,className:l("text-xl font-semibold leading-none tracking-tight text-gray-800",r),...a}));o.displayName="CardTitle";const c=i.forwardRef(({className:r,...a},s)=>e.jsx("p",{ref:s,className:l("text-sm text-gray-600",r),...a}));c.displayName="CardDescription";const d=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:l("p-6 pt-0",r),...a}));d.displayName="CardContent";const m=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:l("flex items-center p-6 pt-0",r),...a}));m.displayName="CardFooter";try{t.displayName="Card",t.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}try{d.displayName="CardContent",d.__docgenInfo={description:"",displayName:"CardContent",props:{}}}catch{}try{c.displayName="CardDescription",c.__docgenInfo={description:"",displayName:"CardDescription",props:{}}}catch{}try{m.displayName="CardFooter",m.__docgenInfo={description:"",displayName:"CardFooter",props:{}}}catch{}try{n.displayName="CardHeader",n.__docgenInfo={description:"",displayName:"CardHeader",props:{}}}catch{}try{o.displayName="CardTitle",o.__docgenInfo={description:"",displayName:"CardTitle",props:{}}}catch{}const S={title:"ui/Card",component:t},p={render:()=>e.jsxs(t,{className:"w-96",children:[e.jsx(n,{children:e.jsx(o,{children:"Sample title"})}),e.jsx(d,{children:"Sample text inside a card. "})]})},x={render:()=>e.jsxs(t,{className:"w-96",children:[e.jsxs(n,{children:[e.jsxs(c,{className:"flex flex-row justify-between",children:["Total Revenue",e.jsxs(j,{variant:"outline",size:"small",children:[e.jsx(N,{size:16}),"+12.5%"]})]}),e.jsx(o,{className:"text-2xl font-semibold tabular-nums lg:text-4xl",children:"$1,250.00"}),e.jsx(d,{})]}),e.jsxs(m,{className:"flex-col items-start gap-1 text-sm",children:[e.jsxs("div",{className:"line-clamp-1 flex gap-2 font-medium",children:["Trending up this month ",e.jsx(N,{className:"size-4"})]}),e.jsx("div",{className:"text-muted-foreground",children:"+10% guests for the last 6 months"})]})]})},C={render:()=>e.jsxs(t,{className:"w-[350px]",children:[e.jsxs(n,{children:[e.jsx(o,{children:"Create project"}),e.jsx(c,{children:"Deploy your new project in one-click."})]}),e.jsx(d,{children:e.jsx("form",{children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(h,{htmlFor:"name",children:"Name"}),e.jsx(u,{id:"name",placeholder:"Name of your project"})]}),e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(h,{htmlFor:"framework",children:"Framework"}),e.jsxs("select",{children:[e.jsx("option",{children:"Next.js"}),e.jsx("option",{children:"React"})]})]})]})})}),e.jsxs(m,{className:"flex justify-between",children:[e.jsx(f,{variant:"outline",children:"Cancel"}),e.jsx(f,{children:"Deploy"})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-96">
      <CardHeader>
        <CardTitle>Sample title</CardTitle>
      </CardHeader>
      <CardContent>Sample text inside a card. </CardContent>
    </Card>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-96">
      <CardHeader>
        <CardDescription className="flex flex-row justify-between">
          Total Revenue
          <Badge variant="outline" size="small">
            <TrendingUp size={16} />
            +12.5%
          </Badge>
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums lg:text-4xl">
          $1,250.00
        </CardTitle>
        <CardContent></CardContent>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          Trending up this month <TrendingUp className="size-4" />
        </div>
        <div className="text-muted-foreground">
          +10% guests for the last 6 months
        </div>
      </CardFooter>
    </Card>
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <select>
                <option>Next.js</option>
                <option>React</option>
              </select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
}`,...C.parameters?.docs?.source}}};const L=["SimpleCard","CompositeCard","CardWithForm"];export{C as CardWithForm,x as CompositeCard,p as SimpleCard,L as __namedExportsOrder,S as default};
