import { EmptyState } from "@/components/application/empty-state/empty-state";
import { Button } from "@/components/base/buttons/button";

export default {
  title: "Application/Empty State",
  decorators: [
    (Story: any) => (
      <div
        data-drag-constraint
        className="flex min-h-screen w-full flex-col items-center gap-12 bg-primary p-8"
      >
        <Story />
      </div>
    ),
  ],
};

export const SearchFailed = () => (
  <>
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
  </>
);
SearchFailed.storyName = "Search with no results";

export const Celebration = () => (
  <>
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
  </>
);
Celebration.storyName = "Success message";

export const SomethingWrong = () => (
  <>
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
  </>
);
SomethingWrong.storyName = "Something went worng";
