import{j as e}from"./jsx-runtime-DeussEn5.js";import{B as d}from"./Button-BuIkWvVT.js";import{F as l,o as b,s as m}from"./Form-CIPieCgf.js";import{I as r}from"./Input-CBN-jLgw.js";import{L as a}from"./Label-If0v0ig4.js";import"./iframe-BkoCep_H.js";import"./index-qfXV6w7r.js";import"./utils-Cq7e7suc.js";import"./index-_Ku1bwhf.js";import"./createLucideIcon-DUlmydWR.js";import"./index-DroN4xqQ.js";import"./index-DToJw900.js";const C={title:"patterns/Form",component:l,parameters:{layout:"centered"},tags:["autodocs"]},N=b({email:m().email("Please enter a valid email address"),password:m().min(8,"Password must be at least 8 characters")}),i={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(l,{onSubmit:s=>console.log("Form submitted:",s),children:[e.jsxs("div",{children:[e.jsx(a,{htmlFor:"name",children:"Full Name"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"name",type:"text",placeholder:"Enter your full name"})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"email",required:!0,children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),e.jsx("div",{children:e.jsx(d,{variant:"primary",type:"submit",children:"Submit"})})]})})},t={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(l,{schema:N,onSubmit:s=>console.log("Login submitted:",s),defaultValues:{email:"",password:""},children:[e.jsxs("div",{children:[e.jsx(a,{htmlFor:"email",children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"password",type:"password",placeholder:"Enter your password",required:!0})})]}),e.jsx("div",{children:e.jsx(d,{variant:"primary",type:"submit",className:"w-full",children:"Sign in"})})]})})},n={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(l,{onSubmit:s=>console.log("Register submitted:",s),children:[e.jsxs("div",{children:[e.jsx(a,{htmlFor:"firstName",children:"First Name"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"firstName",type:"text",placeholder:"Enter your first name",required:!0})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"lastName",children:"Last Name"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"lastName",type:"text",placeholder:"Enter your last name",required:!0})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"email",children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"password",type:"password",placeholder:"Enter your password",required:!0})})]}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx(d,{type:"submit",variant:"primary",children:"Create account"}),e.jsx(d,{type:"button",variant:"outline",children:"Cancel"})]})]})})};var o,c,u;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <Form onSubmit={data => console.log("Form submitted:", data)}>
        <div>
          <Label htmlFor="name">Full Name</Label>
          <div className="mt-1">
            <Input id="name" type="text" placeholder="Enter your full name" />
          </div>
        </div>
        <div>
          <Label htmlFor="email" required>
            Email address
          </Label>
          <div className="mt-1">
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
        </div>
        <div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,v,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <Form schema={loginSchema} onSubmit={data => console.log("Login submitted:", data)} defaultValues={{
      email: "",
      password: ""
    }}>
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="mt-1">
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="mt-1">
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
        </div>
        <div>
          <Button variant="primary" type="submit" className="w-full">
            Sign in
          </Button>
        </div>
      </Form>
    </div>
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,y,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <Form onSubmit={data => console.log("Register submitted:", data)}>
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <div className="mt-1">
            <Input id="firstName" type="text" placeholder="Enter your first name" required />
          </div>
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <div className="mt-1">
            <Input id="lastName" type="text" placeholder="Enter your last name" required />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="mt-1">
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="mt-1">
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Button type="submit" variant="primary">
            Create account
          </Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const T=["BasicForm","LoginForm","RegisterForm"];export{i as BasicForm,t as LoginForm,n as RegisterForm,T as __namedExportsOrder,C as default};
