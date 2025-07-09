import{j as e}from"./jsx-runtime-sJVgDHcV.js";import{r as g,R as d}from"./iframe-B-1rx676.js";import{c as re,u as we}from"./index-B6BpIX7a.js";import{c as ke,u as _e,C as Se}from"./index-CFr5Kyi-.js";import{u as se}from"./index-88ELBDC4.js";import{u as $,c as ie}from"./index-BmrmoHzC.js";import{P as _}from"./index-I8PcPoWV.js";import{P as Re}from"./index-CYuBjOW3.js";import{u as ce}from"./index-BJTDgxrC.js";import{c as k,f as Te}from"./utils-Cq7e7suc.js";import{c as P}from"./createLucideIcon-ZDCb0XEU.js";import"./index-vSuUsCkh.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Me=P("arrow-left",Pe);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],De=P("circle-plus",Ee);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ve=P("square-check-big",Oe);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],qe=P("ticket",ze);var M="Collapsible",[Fe,le]=re(M),[Le,H]=Fe(M),de=g.forwardRef((n,r)=>{const{__scopeCollapsible:o,open:t,defaultOpen:s,disabled:a,onOpenChange:i,...l}=n,[p,m]=$({prop:t,defaultProp:s??!1,onChange:i,caller:M});return e.jsx(Le,{scope:o,disabled:a,contentId:ce(),open:p,onOpenToggle:g.useCallback(()=>m(x=>!x),[m]),children:e.jsx(_.div,{"data-state":B(p),"data-disabled":a?"":void 0,...l,ref:r})})});de.displayName=M;var pe="CollapsibleTrigger",me=g.forwardRef((n,r)=>{const{__scopeCollapsible:o,...t}=n,s=H(pe,o);return e.jsx(_.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":B(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...t,ref:r,onClick:ie(n.onClick,s.onOpenToggle)})});me.displayName=pe;var Y="CollapsibleContent",ge=g.forwardRef((n,r)=>{const{forceMount:o,...t}=n,s=H(Y,n.__scopeCollapsible);return e.jsx(Re,{present:o||s.open,children:({present:a})=>e.jsx($e,{...t,ref:r,present:a})})});ge.displayName=Y;var $e=g.forwardRef((n,r)=>{const{__scopeCollapsible:o,present:t,children:s,...a}=n,i=H(Y,o),[l,p]=g.useState(t),m=g.useRef(null),x=se(r,m),u=g.useRef(0),j=u.current,v=g.useRef(0),S=v.current,A=i.open||l,C=g.useRef(A),N=g.useRef(void 0);return g.useEffect(()=>{const c=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(c)},[]),we(()=>{const c=m.current;if(c){N.current=N.current||{transitionDuration:c.style.transitionDuration,animationName:c.style.animationName},c.style.transitionDuration="0s",c.style.animationName="none";const I=c.getBoundingClientRect();u.current=I.height,v.current=I.width,C.current||(c.style.transitionDuration=N.current.transitionDuration,c.style.animationName=N.current.animationName),p(t)}},[i.open,t]),e.jsx(_.div,{"data-state":B(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!A,...a,ref:x,style:{"--radix-collapsible-content-height":j?`${j}px`:void 0,"--radix-collapsible-content-width":S?`${S}px`:void 0,...n.style},children:A&&s})});function B(n){return n?"open":"closed"}var He=de,Ye=me,Be=ge,f="Accordion",Ge=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[G,Ke,Ue]=ke(f),[E,bn]=re(f,[Ue,le]),K=le(),xe=d.forwardRef((n,r)=>{const{type:o,...t}=n,s=t,a=t;return e.jsx(G.Provider,{scope:n.__scopeAccordion,children:o==="multiple"?e.jsx(Qe,{...a,ref:r}):e.jsx(Ze,{...s,ref:r})})});xe.displayName=f;var[ue,We]=E(f),[fe,Je]=E(f,{collapsible:!1}),Ze=d.forwardRef((n,r)=>{const{value:o,defaultValue:t,onValueChange:s=()=>{},collapsible:a=!1,...i}=n,[l,p]=$({prop:o,defaultProp:t??"",onChange:s,caller:f});return e.jsx(ue,{scope:n.__scopeAccordion,value:d.useMemo(()=>l?[l]:[],[l]),onItemOpen:p,onItemClose:d.useCallback(()=>a&&p(""),[a,p]),children:e.jsx(fe,{scope:n.__scopeAccordion,collapsible:a,children:e.jsx(he,{...i,ref:r})})})}),Qe=d.forwardRef((n,r)=>{const{value:o,defaultValue:t,onValueChange:s=()=>{},...a}=n,[i,l]=$({prop:o,defaultProp:t??[],onChange:s,caller:f}),p=d.useCallback(x=>l((u=[])=>[...u,x]),[l]),m=d.useCallback(x=>l((u=[])=>u.filter(j=>j!==x)),[l]);return e.jsx(ue,{scope:n.__scopeAccordion,value:i,onItemOpen:p,onItemClose:m,children:e.jsx(fe,{scope:n.__scopeAccordion,collapsible:!0,children:e.jsx(he,{...a,ref:r})})})}),[Xe,D]=E(f),he=d.forwardRef((n,r)=>{const{__scopeAccordion:o,disabled:t,dir:s,orientation:a="vertical",...i}=n,l=d.useRef(null),p=se(l,r),m=Ke(o),u=_e(s)==="ltr",j=ie(n.onKeyDown,v=>{var W;if(!Ge.includes(v.key))return;const S=v.target,A=m().filter(F=>{var J;return!((J=F.ref.current)!=null&&J.disabled)}),C=A.findIndex(F=>F.ref.current===S),N=A.length;if(C===-1)return;v.preventDefault();let c=C;const I=0,V=N-1,z=()=>{c=C+1,c>V&&(c=I)},q=()=>{c=C-1,c<I&&(c=V)};switch(v.key){case"Home":c=I;break;case"End":c=V;break;case"ArrowRight":a==="horizontal"&&(u?z():q());break;case"ArrowDown":a==="vertical"&&z();break;case"ArrowLeft":a==="horizontal"&&(u?q():z());break;case"ArrowUp":a==="vertical"&&q();break}const Ie=c%N;(W=A[Ie].ref.current)==null||W.focus()});return e.jsx(Xe,{scope:o,disabled:t,direction:s,orientation:a,children:e.jsx(G.Slot,{scope:o,children:e.jsx(_.div,{...i,"data-orientation":a,ref:p,onKeyDown:t?void 0:j})})})}),T="AccordionItem",[en,U]=E(T),ye=d.forwardRef((n,r)=>{const{__scopeAccordion:o,value:t,...s}=n,a=D(T,o),i=We(T,o),l=K(o),p=ce(),m=t&&i.value.includes(t)||!1,x=a.disabled||n.disabled;return e.jsx(en,{scope:o,open:m,disabled:x,triggerId:p,children:e.jsx(He,{"data-orientation":a.orientation,"data-state":je(m),...l,...s,ref:r,disabled:x,open:m,onOpenChange:u=>{u?i.onItemOpen(t):i.onItemClose(t)}})})});ye.displayName=T;var be="AccordionHeader",ve=d.forwardRef((n,r)=>{const{__scopeAccordion:o,...t}=n,s=D(f,o),a=U(be,o);return e.jsx(_.h3,{"data-orientation":s.orientation,"data-state":je(a.open),"data-disabled":a.disabled?"":void 0,...t,ref:r})});ve.displayName=be;var L="AccordionTrigger",Ae=d.forwardRef((n,r)=>{const{__scopeAccordion:o,...t}=n,s=D(f,o),a=U(L,o),i=Je(L,o),l=K(o);return e.jsx(G.ItemSlot,{scope:o,children:e.jsx(Ye,{"aria-disabled":a.open&&!i.collapsible||void 0,"data-orientation":s.orientation,id:a.triggerId,...l,...t,ref:r})})});Ae.displayName=L;var Ce="AccordionContent",Ne=d.forwardRef((n,r)=>{const{__scopeAccordion:o,...t}=n,s=D(f,o),a=U(Ce,o),i=K(o);return e.jsx(Be,{role:"region","aria-labelledby":a.triggerId,"data-orientation":s.orientation,...i,...t,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...n.style}})});Ne.displayName=Ce;function je(n){return n?"open":"closed"}var nn=xe,on=ye,tn=ve,an=Ae,rn=Ne;const O=nn;O.displayName="AccordionItem";const h=d.forwardRef(({className:n,children:r,...o},t)=>e.jsx(tn,{className:"flex",children:e.jsxs(an,{className:k("group flex flex-1 cursor-pointer items-center justify-between px-2 py-3 text-left text-sm font-semibold leading-none [&[data-state=open]>svg]:rotate-180","text-gray-800","hover:bg-gray-100","data-disabled:cursor-default data-disabled:text-gray-400","focus-visible:outline-hidden focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-600",n),...o,ref:t,children:[r,e.jsx(Se,{className:k("size-4 shrink-0 transition-transform duration-200","text-gray-400","group-data-disabled:text-gray-300"),"aria-hidden":"true",focusable:"false"})]})}));h.displayName="AccordionTrigger";const y=d.forwardRef(({className:n,children:r,...o},t)=>e.jsx(rn,{ref:t,className:k("data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open transform-gpu"),...o,children:e.jsx("div",{className:k("overflow-hidden px-2 pb-4 pt-1 text-sm","text-gray-700",n),children:r})}));y.displayName="AccordionContent";const b=d.forwardRef(({className:n,...r},o)=>e.jsx(on,{ref:o,className:k("overflow-hidden border-b first:mt-0","border-gray-200",...Te,n),...r}));b.displayName="AccordionItem";try{b.displayName="AccordionItem",b.__docgenInfo={description:"",displayName:"AccordionItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{y.displayName="AccordionContent",y.__docgenInfo={description:"",displayName:"AccordionContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="AccordionTrigger",h.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const vn={title:"ui/Accordion",component:O,tags:["autodocs"],argTypes:{},args:{type:"single",collapsible:!0},parameters:{layout:"centered",docs:{description:{component:`A vertically stacked set of interactive headings that each reveal a section
of content.`}}}},w={render:()=>e.jsx("div",{className:"mx-auto mt-3 w-96",children:e.jsxs(O,{type:"single",className:"mx-auto mt-3 max-w-sm",collapsible:!0,children:[e.jsxs(b,{value:"item-1",children:[e.jsx(h,{children:"In the app"}),e.jsx(y,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 1:"})," ","Tap the Inbox icon and then tap Add receipts."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 2:"})," ","Tap the + symbol to attach a photo or PDF of the receipt for our system to match."]})]})})]}),e.jsxs(b,{value:"item-2",children:[e.jsx(h,{children:"Via browser extension"}),e.jsx(y,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 1:"})," ",e.jsx("span",{className:"underline",children:"Download"})," the browser extension for Chrome or Safari. (Firefox support is coming soon.)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 2:"})," ","Click the extension icon at the top of your browser. Under the Receipts tab, upload an image or click Screenshot current tab to automatically attach the receipt to the expense."]})]})})]}),e.jsxs(b,{value:"item-3",disabled:!0,children:[e.jsx(h,{children:"Via email forwarding"}),e.jsx(y,{children:"Yes! You can animate the Accordion with CSS or JavaScript."})]})]})})},R={render:()=>e.jsxs("div",{className:"mx-auto mt-3 w-96",children:[e.jsx("h1",{className:"text-md font-semibold text-gray-800",children:"Managing Your Booking Online"}),e.jsxs(O,{type:"multiple",className:"mt-3",children:[e.jsxs(b,{value:"item-1",children:[e.jsx(h,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(qe,{className:"size-4 text-indigo-600"}),"Access Your Booking"]})}),e.jsx(y,{children:e.jsx("p",{children:'Simply navigate to the "My Trips" section on our website and input your booking reference and last name to view your itinerary details.'})})]}),e.jsxs(b,{value:"item-2",children:[e.jsx(h,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(Me,{className:"size-4 text-indigo-600"}),"Change Flights"]})}),e.jsx(y,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 1:"})," ",'Within your booking details, select "Change Flights."']}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 2:"})," ","Follow the prompts to select new flight options and confirm the changes."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 3:"})," ","Review your new flight details and any fare differences."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 4:"})," ","Complete the change and receive your updated itinerary via email."]})]})})]}),e.jsxs(b,{value:"item-3",children:[e.jsx(h,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(De,{className:"size-4 text-indigo-600"}),"Add Special Requests"]})}),e.jsx(y,{children:e.jsx("p",{children:'Look for the "Special Requests" option within your booking to specify any meal preferences, seating arrangements, or assistance services you may require during your flight.'})})]}),e.jsxs(b,{value:"item-4",children:[e.jsx(h,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(Ve,{className:"size-4 text-indigo-600"}),"Check-In Online"]})}),e.jsx(y,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 1:"})," ",'Starting 48 hours before your flight, access the "Check-In" option.']}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800 dark:text-gray-50",children:"Step 2:"})," ","Confirm your details and select your seats to complete the online check-in process."]})]})})]})]})]})};var Z,Q,X,ee,ne;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="mx-auto mt-3 w-96">
      <Accordion type="single" className="mx-auto mt-3 max-w-sm" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>In the app</AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Tap the Inbox icon and then tap Add receipts.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Tap the + symbol to attach a photo or PDF of the receipt for our
                system to match.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Via browser extension</AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                <span className="underline">Download</span> the browser
                extension for Chrome or Safari. (Firefox support is coming
                soon.)
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Click the extension icon at the top of your browser. Under the
                Receipts tab, upload an image or click Screenshot current tab to
                automatically attach the receipt to the expense.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" disabled>
          <AccordionTrigger>Via email forwarding</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"The default behavior of the accordion allows only one item to be open.",...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.description}}};var oe,te,ae;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="mx-auto mt-3 w-96">
      <h1 className="text-md font-semibold text-gray-800">
        Managing Your Booking Online
      </h1>
      <Accordion type="multiple" className="mt-3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <TicketIcon className="size-4 text-indigo-600" />
              Access Your Booking
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Simply navigate to the "My Trips" section on our website and input
              your booking reference and last name to view your itinerary
              details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ArrowLeftIcon className="size-4 text-indigo-600" />
              Change Flights
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Within your booking details, select "Change Flights."
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Follow the prompts to select new flight options and confirm the
                changes.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 3:
                </span>{" "}
                Review your new flight details and any fare differences.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 4:
                </span>{" "}
                Complete the change and receive your updated itinerary via
                email.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <PlusCircleIcon className="size-4 text-indigo-600" />
              Add Special Requests
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Look for the "Special Requests" option within your booking to
              specify any meal preferences, seating arrangements, or assistance
              services you may require during your flight.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <CheckSquareIcon className="size-4 text-indigo-600" />
              Check-In Online
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Starting 48 hours before your flight, access the "Check-In"
                option.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Confirm your details and select your seats to complete the
                online check-in process.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(ae=(te=R.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const An=["Default","WithIcons"];export{w as Default,R as WithIcons,An as __namedExportsOrder,vn as default};
