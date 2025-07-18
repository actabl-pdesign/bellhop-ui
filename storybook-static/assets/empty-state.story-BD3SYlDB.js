import{j as t}from"./iframe-DcsACL-T.js";import{E as e}from"./empty-state-CmlgFZq0.js";import{B as a}from"./button-C18z1beY.js";import"./FileIcon-CgXA8Fn2.js";import"./SearchLg-CApr8Yvw.js";import"./featured-icons-gEIXbYjC.js";import"./cx-X4VLeaWk.js";import"./is-react-component-B7Ah2fih.js";import"./UploadCloud02-Dl7RXFO-.js";import"./Button-bxb_fpyI.js";import"./useFocusRing-CRLlfMnZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKNvk6Fw.js";import"./useButton-To3C-UuU.js";import"./usePress-A8tq1RUv.js";import"./index-DS_oXwaa.js";import"./Link-DbZl0tbK.js";const f={title:"Application/Empty State",decorators:[s=>t.jsx("div",{"data-drag-constraint":!0,className:"flex min-h-screen w-full flex-col items-center gap-12 bg-primary p-8",children:t.jsx(s,{})})]},r=()=>t.jsx(t.Fragment,{children:t.jsxs(e,{size:"sm",children:[t.jsx(e.Header,{pattern:"grid",children:t.jsx(e.Illustration,{type:"search-fail",size:"lg"})}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{children:"No projects found"}),t.jsx(e.Description,{children:"Your search “Capex” did not match any project. Please try again or create add a new project."})]}),t.jsxs(e.Footer,{children:[t.jsx(a,{size:"md",color:"secondary",children:"Clear search"}),t.jsx(a,{size:"md",children:"New project"})]})]})});r.storyName="Search with no results";const n=()=>t.jsx(t.Fragment,{children:t.jsxs(e,{size:"sm",children:[t.jsx(e.Header,{pattern:"circle",children:t.jsx(e.Illustration,{type:"celebrate",size:"lg"})}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{children:"All tasks finished!"}),t.jsx(e.Description,{children:"Your completed all of your tasks. How about finding mates that need help? Check the open tasks."})]}),t.jsx(e.Footer,{children:t.jsx(a,{size:"md",color:"secondary",children:"View open tasks"})})]})});n.storyName="Success message";const o=()=>t.jsx(t.Fragment,{children:t.jsxs(e,{size:"sm",children:[t.jsx(e.Header,{pattern:"circle",children:t.jsx(e.Illustration,{type:"astronaut-lost",size:"lg"})}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{children:"Something went wrong"}),t.jsx(e.Description,{children:"We were unable to connect to the service. Click Retry to try again or View log to learn what happened."})]}),t.jsxs(e.Footer,{children:[t.jsx(a,{size:"md",color:"secondary",children:"View logs"}),t.jsx(a,{size:"md",color:"primary",children:"Rerty"})]})]})});o.storyName="Something went worng";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <>
    <EmptyState size="sm">
      <EmptyState.Header pattern="grid">
        <EmptyState.Illustration type="search-fail" size="lg" />
      </EmptyState.Header>

      <EmptyState.Content>
        <EmptyState.Title>No projects found</EmptyState.Title>
        <EmptyState.Description>
          Your search “Capex” did not match any project. Please try again or
          create add a new project.
        </EmptyState.Description>
      </EmptyState.Content>

      <EmptyState.Footer>
        <Button size="md" color="secondary">
          Clear search
        </Button>
        <Button size="md">New project</Button>
      </EmptyState.Footer>
    </EmptyState>
  </>`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <>
    <EmptyState size="sm">
      <EmptyState.Header pattern="circle">
        <EmptyState.Illustration type="celebrate" size="lg" />
      </EmptyState.Header>

      <EmptyState.Content>
        <EmptyState.Title>All tasks finished!</EmptyState.Title>
        <EmptyState.Description>
          Your completed all of your tasks. How about finding mates that need help? Check the open tasks.
        </EmptyState.Description>
      </EmptyState.Content>

      <EmptyState.Footer>
        <Button size="md" color="secondary">
          View open tasks
        </Button>
      </EmptyState.Footer>
    </EmptyState>
  </>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <>
    <EmptyState size="sm">
      <EmptyState.Header pattern="circle">
        <EmptyState.Illustration type="astronaut-lost" size="lg" />
      </EmptyState.Header>

      <EmptyState.Content>
        <EmptyState.Title>Something went wrong</EmptyState.Title>
        <EmptyState.Description>
          We were unable to connect to the service. Click Retry to try again or View log to learn what happened.
        </EmptyState.Description>
      </EmptyState.Content>

      <EmptyState.Footer>
        <Button size="md" color="secondary">
          View logs
        </Button>
        <Button size="md" color="primary">
          Rerty
        </Button>
      </EmptyState.Footer>
    </EmptyState>
  </>`,...o.parameters?.docs?.source}}};export{n as Celebration,r as SearchFailed,o as SomethingWrong,f as default};
