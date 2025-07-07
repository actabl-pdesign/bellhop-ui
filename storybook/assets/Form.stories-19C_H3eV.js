import{a as e,j as r}from"./utils-CG0zMHQs.js";import{B as l}from"./Button-C8VoApxL.js";import{F as m,o as w,s as o}from"./Form-DVgMqbNc.js";import{I as a}from"./Input-C0LZzixI.js";import{L as i}from"./Label-DgNIIwf2.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createLucideIcon-HMKsws72.js";import"./index-aS4jWOJ1.js";const P={title:"Components/Form",component:m,parameters:{layout:"centered"},tags:["autodocs"]},g=w({email:o().email("Please enter a valid email address"),password:o().min(8,"Password must be at least 8 characters")}),n={render:()=>e("div",{className:"w-96",children:r(m,{onSubmit:t=>console.log("Form submitted:",t),children:[r("div",{children:[e(i,{htmlFor:"name",children:"Full Name"}),e("div",{className:"mt-1",children:e(a,{id:"name",type:"text",placeholder:"Enter your full name"})})]}),r("div",{children:[e(i,{htmlFor:"email",required:!0,children:"Email address"}),e("div",{className:"mt-1",children:e(a,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),e("div",{children:e(l,{variant:"primary",type:"submit",children:"Submit"})})]})})},d={render:()=>e("div",{className:"w-96",children:r(m,{schema:g,onSubmit:t=>console.log("Login submitted:",t),defaultValues:{email:"",password:""},children:[r("div",{children:[e(i,{htmlFor:"email",children:"Email address"}),e("div",{className:"mt-1",children:e(a,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),r("div",{children:[e(i,{htmlFor:"password",children:"Password"}),e("div",{className:"mt-1",children:e(a,{id:"password",type:"password",placeholder:"Enter your password",required:!0})})]}),e("div",{children:e(l,{variant:"primary",type:"submit",className:"w-full",children:"Sign in"})})]})})},s={render:()=>e("div",{className:"w-96",children:r(m,{onSubmit:t=>console.log("Register submitted:",t),children:[r("div",{children:[e(i,{htmlFor:"firstName",children:"First Name"}),e("div",{className:"mt-1",children:e(a,{id:"firstName",type:"text",placeholder:"Enter your first name",required:!0})})]}),r("div",{children:[e(i,{htmlFor:"lastName",children:"Last Name"}),e("div",{className:"mt-1",children:e(a,{id:"lastName",type:"text",placeholder:"Enter your last name",required:!0})})]}),r("div",{children:[e(i,{htmlFor:"email",children:"Email address"}),e("div",{className:"mt-1",children:e(a,{id:"email",type:"email",placeholder:"Enter your email",required:!0})})]}),r("div",{children:[e(i,{htmlFor:"password",children:"Password"}),e("div",{className:"mt-1",children:e(a,{id:"password",type:"password",placeholder:"Enter your password",required:!0})})]}),r("div",{className:"flex items-center justify-between gap-2",children:[e(l,{type:"submit",variant:"primary",children:"Create account"}),e(l,{type:"button",variant:"outline",children:"Cancel"})]})]})})};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,h,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,N,F;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(F=(N=s.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const C=["BasicForm","LoginForm","RegisterForm"];export{n as BasicForm,d as LoginForm,s as RegisterForm,C as __namedExportsOrder,P as default};
