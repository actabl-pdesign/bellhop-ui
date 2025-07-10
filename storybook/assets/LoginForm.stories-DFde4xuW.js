import{j as e}from"./jsx-runtime-D_NlE7bE.js";import{r as $}from"./iframe-TczdQGhE.js";import{B as p}from"./Button-DIl7_-aD.js";import{F as k,o as O,s as g}from"./Form-BGxnOqaF.js";import{I as x}from"./Input-BJLB-S5m.js";import{L as h}from"./Label-D1L0zRoC.js";import"./index-qfXV6w7r.js";import"./utils-Cq7e7suc.js";import"./index-BEG6t_k7.js";import"./createLucideIcon-CLyNMukn.js";import"./index-DV_F3LRJ.js";import"./index-D0Y9YjnD.js";const R=O({email:g().email("Please enter a valid email address"),password:g().min(8,"Password must be at least 8 characters long")}),r=({onSubmit:s,loading:a=!1,error:c,className:A})=>{const[C,u]=$.useState(!1),D=async B=>{if(s){u(!0);try{await s(B)}finally{u(!1)}}},n=a||C;return e.jsx("div",{className:A,children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{children:e.jsx("h2",{className:"mt-6 text-center text-2xl font-semibold text-neutral-800",children:"Sign in to your account"})}),c&&e.jsx("div",{className:"rounded-md bg-red-50 p-4",children:e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-red-700",children:"Authentication failed"}),e.jsx("div",{className:"mt-2 text-sm text-red-700",children:e.jsx("p",{children:c})})]})})}),e.jsxs(k,{schema:R,onSubmit:D,defaultValues:{email:"",password:""},children:[e.jsxs("div",{children:[e.jsx(h,{htmlFor:"email",children:"Email address"}),e.jsx("div",{className:"mt-1",children:e.jsx(x,{id:"email",name:"email",type:"email",placeholder:"Enter your email address",required:!0,disabled:n,"aria-describedby":"email-error"})})]}),e.jsxs("div",{children:[e.jsx(h,{htmlFor:"password",children:"Password"}),e.jsx("div",{className:"mt-1",children:e.jsx(x,{id:"password",name:"password",type:"password",placeholder:"Enter your password",required:!0,disabled:n,"aria-describedby":"password-error"})}),e.jsx(p,{variant:"link",asChild:!0,children:e.jsx("a",{href:"#",children:"Forgot password?"})})]}),e.jsx("div",{children:e.jsx(p,{variant:"primary",type:"submit",disabled:n,className:"w-full","aria-label":n?"Signing in...":"Sign in",children:n?"Signing in...":"Sign in"})})]}),e.jsxs("div",{className:"text-center text-sm text-neutral-600",children:["Don't have an account? ",e.jsx("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"Sign up here"})]})]})})};try{r.displayName="LoginForm",r.__docgenInfo={description:"",displayName:"LoginForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((data: { email: string; password: string; }) => void | Promise<void>)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const se={title:"Examples/LoginForm",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{loading:{control:"boolean"},error:{control:"text"}}},t={args:{onSubmit:s=>(console.log("Login submitted:",s),new Promise(a=>setTimeout(a,1e3)))}},o={args:{loading:!0,onSubmit:s=>(console.log("Login submitted:",s),new Promise(a=>setTimeout(a,1e3)))}},i={args:{error:"Invalid email or password. Please try again.",onSubmit:s=>(console.log("Login submitted:",s),new Promise(a=>setTimeout(a,1e3)))}},l={parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"flex min-h-96 items-center justify-center bg-neutral-50 px-4 py-12 sm:px-6 lg:px-8",children:e.jsx("div",{className:"w-full max-w-md space-y-8 rounded-2xl",children:e.jsx(r,{onSubmit:async s=>{console.log("Login submitted:",s),await new Promise(a=>setTimeout(a,2e3))},className:"rounded-lg bg-white p-8 shadow-lg"})})})},d={parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"flex min-h-96 items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4",children:e.jsx("div",{className:"w-full max-w-md rounded-2xl bg-white p-6 shadow-xl",children:e.jsx(r,{onSubmit:async s=>{console.log("Login submitted:",s),await new Promise(a=>setTimeout(a,1500))}})})})},m={render:()=>e.jsxs("div",{className:"mx-auto max-w-md",children:[e.jsx(r,{onSubmit:async s=>{if(console.log("Form data:",s),s.email==="error@example.com")throw new Error("Invalid credentials");if(s.email==="admin@example.com"&&s.password==="password123"){alert("Login successful!");return}await new Promise(a=>setTimeout(a,1e3)),alert(`Welcome ${s.email}!`)}}),e.jsxs("div",{className:"mt-6 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Test accounts:"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• admin@example.com / password123 (success)"}),e.jsx("li",{children:"• error@example.com / any password (error)"}),e.jsx("li",{children:"• Any other valid email/password combination"})]})]})]})};var w,b,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,y,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,N,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    error: "Invalid email or password. Please try again.",
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...(L=(N=i.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var P,T,F;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex min-h-96 items-center justify-center bg-neutral-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl">
        <LoginForm onSubmit={async data => {
        console.log("Login submitted:", data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      }} className="rounded-lg bg-white p-8 shadow-lg" />
      </div>
    </div>
}`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var E,I,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex min-h-96 items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <LoginForm onSubmit={async data => {
        console.log("Login submitted:", data);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }} />
      </div>
    </div>
}`,...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,W,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(W=m.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const ae=["Default","Loading","WithError","Styled","WithCustomStyling","Interactive"];export{t as Default,m as Interactive,o as Loading,l as Styled,d as WithCustomStyling,i as WithError,ae as __namedExportsOrder,se as default};
