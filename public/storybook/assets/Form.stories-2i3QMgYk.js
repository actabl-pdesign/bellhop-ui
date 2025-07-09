import{j as e}from"./jsx-runtime-B5W7bLQt.js";import{B as d}from"./Button-DO_l4KZZ.js";import{F as l,o,s as m}from"./Form-DvL67_rZ.js";import{I as r}from"./Input-BcO9Fqia.js";import{L as a}from"./Label-kzYG25AI.js";import"./iframe-Eqk540XJ.js";import"./index-C5rTDRtx.js";import"./utils-CCU0hLc8.js";import"./index-Cmm6BTU1.js";import"./createLucideIcon-SRGodXbP.js";import"./index-KZEi8YOh.js";import"./index-CkwiM_G9.js";const E={title:"pattern/Form",component:l,parameters:{layout:"centered"},tags:["autodocs"]},c=o({email:m().email("Please enter a valid email address"),password:m().min(8,"Password must be at least 8 characters")}),i={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(l,{onSubmit:s=>console.log("Form submitted:",s),children:[e.jsxs("div",{children:[e.jsx(a,{htmlFor:"name",children:"Full Name"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"name",type:"text",placeholder:"Enter your full name"})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"email",required:!0,children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),e.jsx("div",{children:e.jsx(d,{variant:"primary",type:"submit",children:"Submit"})})]})})},t={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(l,{schema:c,onSubmit:s=>console.log("Login submitted:",s),defaultValues:{email:"",password:""},children:[e.jsxs("div",{children:[e.jsx(a,{htmlFor:"email",children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"password",type:"password",placeholder:"Enter your password",required:!0})})]}),e.jsx("div",{children:e.jsx(d,{variant:"primary",type:"submit",className:"w-full",children:"Sign in"})})]})})},n={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(l,{onSubmit:s=>console.log("Register submitted:",s),children:[e.jsxs("div",{children:[e.jsx(a,{htmlFor:"firstName",children:"First Name"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"firstName",type:"text",placeholder:"Enter your first name",required:!0})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"lastName",children:"Last Name"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"lastName",type:"text",placeholder:"Enter your last name",required:!0})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"email",children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{id:"password",type:"password",placeholder:"Enter your password",required:!0})})]}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx(d,{type:"submit",variant:"primary",children:"Create account"}),e.jsx(d,{type:"button",variant:"outline",children:"Cancel"})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const L=["BasicForm","LoginForm","RegisterForm"];export{i as BasicForm,t as LoginForm,n as RegisterForm,L as __namedExportsOrder,E as default};
