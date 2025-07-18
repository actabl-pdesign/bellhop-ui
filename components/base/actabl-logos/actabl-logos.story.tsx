import { ActablLogos } from "@/components/base/actabl-logos/actabl-logos";


export default {
  title: "Base Components/Actabl Logos",
  decorators: [
    (Story: any) => (
      <div
        data-drag-constraint
        className="flex min-h-screen w-full flex-row justify-center items-center gap-8 bg-primary p-8"
      >
        <Story />
      </div>
    ),
  ],
};

export const ActablSymbols = () => (
  <>
    <ActablLogos variant="ActablSymbol" className="size-10 shrink-0"/>
    <ActablLogos variant="AlSymbol" className="size-10 shrink-0"/>
    <ActablLogos variant="HeSymbol" className="size-10 shrink-0"/>
    <ActablLogos variant="PsSymbol" className="size-10 shrink-0"/>
    <ActablLogos variant="TrSymbol" className="size-10 shrink-0"/>
  </>
);
ActablSymbols.storyName = "Actabl Symbols";

export const ActablLogo = () => (
  <>
    <ActablLogos variant="ActablFull" className="h-12"/>
  </>
);
ActablLogo.storyName = "Actabl Logos";