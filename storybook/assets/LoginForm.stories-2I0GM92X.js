import{a as e,j as s}from"./utils-CG0zMHQs.js";import{r as k}from"./index-BwDkhjyp.js";import{B as g}from"./Button-C8VoApxL.js";import{F as O,o as z,s as h}from"./Form-DVgMqbNc.js";import{I as w}from"./Input-C0LZzixI.js";import{L as f}from"./Label-uLo0VAuu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createLucideIcon-HMKsws72.js";import"./index-aS4jWOJ1.js";const G=z({email:h().email("Please enter a valid email address"),password:h().min(8,"Password must be at least 8 characters long")}),n=({onSubmit:r,loading:a=!1,error:u,className:C})=>{const[D,p]=k.useState(!1),B=async $=>{if(r){p(!0);try{await r($)}finally{p(!1)}}},i=a||D;return e("div",{className:C,children:s("div",{className:"space-y-6",children:[e("div",{children:e("h2",{className:"mt-6 text-center text-2xl font-semibold text-neutral-800",children:"Sign in to your account"})}),u&&e("div",{className:"rounded-md bg-red-50 p-4",children:e("div",{className:"flex",children:s("div",{className:"ml-3",children:[e("h3",{className:"text-sm font-medium text-red-700",children:"Authentication failed"}),e("div",{className:"mt-2 text-sm text-red-700",children:e("p",{children:u})})]})})}),s(O,{schema:G,onSubmit:B,defaultValues:{email:"",password:""},children:[s("div",{children:[e(f,{htmlFor:"email",children:"Email address"}),e("div",{className:"mt-1",children:e(w,{id:"email",name:"email",type:"email",placeholder:"Enter your email address",required:!0,disabled:i,"aria-describedby":"email-error"})})]}),s("div",{children:[e(f,{htmlFor:"password",children:"Password"}),e("div",{className:"mt-1",children:e(w,{id:"password",name:"password",type:"password",placeholder:"Enter your password",required:!0,disabled:i,"aria-describedby":"password-error"})}),e(g,{variant:"link",asChild:!0,children:e("a",{href:"#",children:"Forgot password?"})})]}),e("div",{children:e(g,{variant:"primary",type:"submit",disabled:i,className:"w-full","aria-label":i?"Signing in...":"Sign in",children:i?"Signing in...":"Sign in"})})]}),s("div",{className:"text-center text-sm text-neutral-600",children:["Don't have an account?"," ",e("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"Sign up here"})]})]})})};try{n.displayName="LoginForm",n.__docgenInfo={description:"",displayName:"LoginForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((data: { email: string; password: string; }) => void | Promise<void>) | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const Z={title:"Examples/LoginForm",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{loading:{control:"boolean"},error:{control:"text"}}},o={args:{onSubmit:r=>(console.log("Login submitted:",r),new Promise(a=>setTimeout(a,1e3)))}},t={args:{loading:!0,onSubmit:r=>(console.log("Login submitted:",r),new Promise(a=>setTimeout(a,1e3)))}},l={args:{error:"Invalid email or password. Please try again.",onSubmit:r=>(console.log("Login submitted:",r),new Promise(a=>setTimeout(a,1e3)))}},d={render:()=>e("div",{className:"flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12 sm:px-6 lg:px-8",children:e("div",{className:"w-full max-w-md space-y-8",children:e(n,{onSubmit:async r=>{console.log("Login submitted:",r),await new Promise(a=>setTimeout(a,2e3))},className:"rounded-lg bg-white p-8 shadow-lg"})})})},m={render:()=>e("div",{className:"flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4",children:e("div",{className:"w-full max-w-md rounded-2xl bg-white p-8 shadow-xl",children:e(n,{onSubmit:async r=>{console.log("Login submitted:",r),await new Promise(a=>setTimeout(a,1500))}})})})},c={render:()=>s("div",{className:"mx-auto max-w-md",children:[e(n,{onSubmit:async r=>{if(console.log("Form data:",r),r.email==="error@example.com")throw new Error("Invalid credentials");if(r.email==="admin@example.com"&&r.password==="password123"){alert("Login successful!");return}await new Promise(a=>setTimeout(a,1e3)),alert(`Welcome ${r.email}!`)}}),s("div",{className:"mt-6 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600",children:[e("h3",{className:"mb-2 font-medium",children:"Test accounts:"}),s("ul",{className:"space-y-1",children:[e("li",{children:"• admin@example.com / password123 (success)"}),e("li",{children:"• error@example.com / any password (error)"}),e("li",{children:"• Any other valid email/password combination"})]})]})]})};var b,v,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,S,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...(N=(S=t.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var L,P,T;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    error: "Invalid email or password. Please try again.",
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var F,I,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <LoginForm onSubmit={async data => {
        console.log("Login submitted:", data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      }} className="rounded-lg bg-white p-8 shadow-lg" />
      </div>
    </div>
}`,...(E=(I=d.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var _,j,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <LoginForm onSubmit={async data => {
        console.log("Login submitted:", data);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }} />
      </div>
    </div>
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var W,V,A;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <div className="mx-auto max-w-md">
        <LoginForm onSubmit={async data => {
        console.log("Form data:", data);

        // Simulate different responses
        if (data.email === "error@example.com") {
          throw new Error("Invalid credentials");
        }
        if (data.email === "admin@example.com" && data.password === "password123") {
          alert("Login successful!");
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert(\`Welcome \${data.email}!\`);
      }} />
        <div className="mt-6 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600">
          <h3 className="mb-2 font-medium">Test accounts:</h3>
          <ul className="space-y-1">
            <li>• admin@example.com / password123 (success)</li>
            <li>• error@example.com / any password (error)</li>
            <li>• Any other valid email/password combination</li>
          </ul>
        </div>
      </div>;
  }
}`,...(A=(V=c.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const ee=["Default","Loading","WithError","Styled","WithCustomStyling","Interactive"];export{o as Default,c as Interactive,t as Loading,d as Styled,m as WithCustomStyling,l as WithError,ee as __namedExportsOrder,Z as default};
