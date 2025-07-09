import{j as e}from"./jsx-runtime-B5W7bLQt.js";import{r as y}from"./iframe-Eqk540XJ.js";import{B as f}from"./Button-DO_l4KZZ.js";import{F as L,o as P,a as w,b,s as j}from"./Form-DvL67_rZ.js";import{I as S}from"./Input-BcO9Fqia.js";import{L as N}from"./Label-kzYG25AI.js";import"./index-C5rTDRtx.js";import"./utils-CCU0hLc8.js";import"./index-Cmm6BTU1.js";import"./createLucideIcon-SRGodXbP.js";import"./index-KZEi8YOh.js";import"./index-CkwiM_G9.js";const E=P({email:j().email("Please enter a valid email address"),password:j().min(8,"Password must be at least 8 characters long")}),i=({onSubmit:a,loading:s=!1,error:l,className:d,showHeading:m=!0})=>{const[o,c]=y.useState(!1),r=async t=>{if(a){c(!0);try{await a(t)}finally{c(!1)}}},n=s||o;return e.jsx("div",{className:d,children:e.jsxs("div",{className:"space-y-6",children:[m&&e.jsx("div",{children:e.jsx("h2",{className:"mt-6 text-center text-2xl font-semibold text-gray-800",children:"Sign in to your account"})}),l&&e.jsx("div",{className:"rounded-md bg-red-50 p-4",children:e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-red-700",children:"Authentication failed"}),e.jsx("div",{className:"mt-2 text-sm text-red-700",children:e.jsx("p",{children:l})})]})})}),e.jsxs(L,{schema:E,onSubmit:r,defaultValues:{email:"",password:""},children:[e.jsx(w,{name:"email",children:t=>e.jsxs("div",{children:[e.jsx(N,{htmlFor:"email",children:"Email address"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(S,{id:"email",type:"email",placeholder:"Enter your email address",required:!0,disabled:n,"aria-describedby":"email-error",hasError:t.error,...t}),e.jsx(b,{name:"email"})]})]})}),e.jsx(w,{name:"password",children:t=>e.jsxs("div",{children:[e.jsx(N,{htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(S,{id:"password",type:"password",placeholder:"Enter your password",required:!0,disabled:n,"aria-describedby":"password-error",hasError:t.error,...t}),e.jsx(b,{name:"password"})]}),e.jsx(f,{variant:"link",asChild:!0,children:e.jsx("a",{href:"#",children:"Forgot password?"})})]})}),e.jsx("div",{children:e.jsx(f,{variant:"primary",type:"submit",disabled:n,className:"w-full","aria-label":n?"Signing in...":"Sign in",children:n?"Signing in...":"Sign in"})})]}),e.jsxs("div",{className:"text-center text-sm text-gray-600",children:["Don't have an account? ",e.jsx("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"Sign up here"})]})]})})};try{i.displayName="LoginForm",i.__docgenInfo={description:"",displayName:"LoginForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((data: { email: string; password: string; }) => void | Promise<void>)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showHeading:{defaultValue:{value:"true"},description:"",name:"showHeading",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Examples/LoginForm",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{loading:{control:"boolean"},error:{control:"text"}}},u={args:{onSubmit:a=>(console.log("Login submitted:",a),new Promise(s=>setTimeout(s,1e3)))}},g={args:{loading:!0,onSubmit:a=>(console.log("Login submitted:",a),new Promise(s=>setTimeout(s,1e3)))}},p={args:{error:"Invalid email or password. Please try again.",onSubmit:a=>(console.log("Login submitted:",a),new Promise(s=>setTimeout(s,1e3)))}},x={parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"flex min-h-96 items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8",children:e.jsx("div",{className:"w-full max-w-md space-y-8 rounded-2xl",children:e.jsx(i,{onSubmit:async a=>{console.log("Login submitted:",a),await new Promise(s=>setTimeout(s,2e3))},className:"rounded-lg bg-white p-8 shadow-lg"})})})},h={parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"flex min-h-96 items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4",children:e.jsx("div",{className:"w-full max-w-md rounded-2xl bg-white p-6 shadow-xl",children:e.jsx(i,{onSubmit:async a=>{console.log("Login submitted:",a),await new Promise(s=>setTimeout(s,1500))}})})})},v={render:()=>{const[a,s]=y.useState(),[l,d]=y.useState(!1),[m,o]=y.useState(),c=async r=>{console.log("Form data:",r),s(void 0),o(void 0),d(!0);try{if(await new Promise(n=>setTimeout(n,1e3)),r.email==="error@example.com"){s("Invalid email or password. Please try again.");return}if(r.email==="admin@example.com"&&r.password==="password123"){o("Login successful! Welcome back, admin!");return}if(r.email==="user@example.com"&&r.password==="validpass123"){o("Login successful! Welcome back, user!");return}s("Invalid email or password. Please try again.")}catch{s("An unexpected error occurred. Please try again.")}finally{d(!1)}};return e.jsxs("div",{className:"mx-auto max-w-md",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{children:e.jsx("h2",{className:"mt-6 text-center text-2xl font-semibold text-gray-800",children:"Sign in to your account"})}),m&&e.jsx("div",{className:"rounded-md bg-green-50 p-4",children:e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-green-700",children:"Success!"}),e.jsx("div",{className:"mt-2 text-sm text-green-700",children:e.jsx("p",{children:m})})]})})}),e.jsx(i,{onSubmit:c,loading:l,error:a,showHeading:!1})]}),e.jsxs("div",{className:"mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Test accounts:"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• admin@example.com / password123 (success)"}),e.jsx("li",{children:"• error@example.com / any password (error)"}),e.jsx("li",{children:"• user@example.com / validpass123 (success)"}),e.jsx("li",{children:"• Any other combination will show validation errors"})]})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Invalid email or password. Please try again.",
    onSubmit: data => {
      console.log("Login submitted:", data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex min-h-96 items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl">
        <LoginForm onSubmit={async data => {
        console.log("Login submitted:", data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      }} className="rounded-lg bg-white p-8 shadow-lg" />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [error, setError] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | undefined>();
    const handleSubmit = async (data: {
      email: string;
      password: string;
    }) => {
      console.log("Form data:", data);
      setError(undefined);
      setSuccessMessage(undefined);
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate different responses based on email
        if (data.email === "error@example.com") {
          setError("Invalid email or password. Please try again.");
          return;
        }
        if (data.email === "admin@example.com" && data.password === "password123") {
          setSuccessMessage("Login successful! Welcome back, admin!");
          return;
        }
        if (data.email === "user@example.com" && data.password === "validpass123") {
          setSuccessMessage("Login successful! Welcome back, user!");
          return;
        }

        // For any other combination, show error
        setError("Invalid email or password. Please try again.");
      } catch {
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    return <div className="mx-auto max-w-md">
        <div className="space-y-6">
          <div>
            <h2 className="mt-6 text-center text-2xl font-semibold text-gray-800">
              Sign in to your account
            </h2>
          </div>

          {successMessage && <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-700">
                    Success!
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>{successMessage}</p>
                  </div>
                </div>
              </div>
            </div>}

          <LoginForm onSubmit={handleSubmit} loading={loading} error={error} showHeading={false} />
        </div>

        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
          <h3 className="mb-2 font-medium">Test accounts:</h3>
          <ul className="space-y-1">
            <li>• admin@example.com / password123 (success)</li>
            <li>• error@example.com / any password (error)</li>
            <li>• user@example.com / validpass123 (success)</li>
            <li>• Any other combination will show validation errors</li>
          </ul>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const B=["Default","Loading","WithError","Styled","WithCustomStyling","Interactive"];export{u as Default,v as Interactive,g as Loading,x as Styled,h as WithCustomStyling,p as WithError,B as __namedExportsOrder,D as default};
