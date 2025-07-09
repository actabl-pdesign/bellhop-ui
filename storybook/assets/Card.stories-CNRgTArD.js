import{j as e}from"./jsx-runtime-BOs0cLQj.js";import{B as F}from"./Badge-BfUOfC9h.js";import{B as f}from"./Button-COJJdvFz.js";import{r as i}from"./iframe-Ck4IQaKq.js";import{a as l}from"./utils-Cq7e7suc.js";import{I as D}from"./Input-DdBpRLcF.js";import{L as N}from"./Label-BULs7ekR.js";import{c as R}from"./createLucideIcon-Bg_QJIuc.js";import"./index-qfXV6w7r.js";import"./index-B1bhzFGd.js";import"./index-BhYCuPEW.js";import"./index-ChiA7tRe.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],h=R("trending-up",k),t=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:l("rounded-xl border bg-white text-gray-800 shadow-sm",r),...a}));t.displayName="Card";const n=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:l("flex flex-col space-y-1.5 p-6",r),...a}));n.displayName="CardHeader";const o=i.forwardRef(({className:r,...a},s)=>e.jsx("h3",{ref:s,className:l("text-xl font-semibold leading-none tracking-tight text-gray-800",r),...a}));o.displayName="CardTitle";const c=i.forwardRef(({className:r,...a},s)=>e.jsx("p",{ref:s,className:l("text-sm text-gray-600",r),...a}));c.displayName="CardDescription";const d=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:l("p-6 pt-0",r),...a}));d.displayName="CardContent";const p=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:l("flex items-center p-6 pt-0",r),...a}));p.displayName="CardFooter";try{t.displayName="Card",t.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}try{d.displayName="CardContent",d.__docgenInfo={description:"",displayName:"CardContent",props:{}}}catch{}try{c.displayName="CardDescription",c.__docgenInfo={description:"",displayName:"CardDescription",props:{}}}catch{}try{p.displayName="CardFooter",p.__docgenInfo={description:"",displayName:"CardFooter",props:{}}}catch{}try{n.displayName="CardHeader",n.__docgenInfo={description:"",displayName:"CardHeader",props:{}}}catch{}try{o.displayName="CardTitle",o.__docgenInfo={description:"",displayName:"CardTitle",props:{}}}catch{}const A={title:"ui/Card",component:t},m={render:()=>e.jsxs(t,{className:"w-96",children:[e.jsx(n,{children:e.jsx(o,{children:"Sample title"})}),e.jsx(d,{children:"Sample text inside a card. "})]})},x={render:()=>e.jsxs(t,{className:"w-96",children:[e.jsxs(n,{children:[e.jsxs(c,{className:"flex flex-row justify-between",children:["Total Revenue",e.jsxs(F,{variant:"outline",size:"small",children:[e.jsx(h,{size:16}),"+12.5%"]})]}),e.jsx(o,{className:"text-2xl font-semibold tabular-nums lg:text-4xl",children:"$1,250.00"}),e.jsx(d,{})]}),e.jsxs(p,{className:"flex-col items-start gap-1 text-sm",children:[e.jsxs("div",{className:"line-clamp-1 flex gap-2 font-medium",children:["Trending up this month ",e.jsx(h,{className:"size-4"})]}),e.jsx("div",{className:"text-muted-foreground",children:"+10% guests for the last 6 months"})]})]})},C={render:()=>e.jsxs(t,{className:"w-[350px]",children:[e.jsxs(n,{children:[e.jsx(o,{children:"Create project"}),e.jsx(c,{children:"Deploy your new project in one-click."})]}),e.jsx(d,{children:e.jsx("form",{children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(N,{htmlFor:"name",children:"Name"}),e.jsx(D,{id:"name",placeholder:"Name of your project"})]}),e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(N,{htmlFor:"framework",children:"Framework"}),e.jsxs("select",{children:[e.jsx("option",{children:"Next.js"}),e.jsx("option",{children:"React"})]})]})]})})}),e.jsxs(p,{className:"flex justify-between",children:[e.jsx(f,{variant:"outline",children:"Cancel"}),e.jsx(f,{children:"Deploy"})]})]})};var y,j,u;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card className="w-96">
      <CardHeader>
        <CardTitle>Sample title</CardTitle>
      </CardHeader>
      <CardContent>Sample text inside a card. </CardContent>
    </Card>
}`,...(u=(j=m.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var _,g,w;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(g=x.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,T,b;C.parameters={...C.parameters,docs:{...(v=C.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(T=C.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const G=["SimpleCard","CompositeCard","CardWithForm"];export{C as CardWithForm,x as CompositeCard,m as SimpleCard,G as __namedExportsOrder,A as default};
