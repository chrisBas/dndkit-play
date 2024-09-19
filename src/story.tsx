import { rectSortingStrategy } from "@dnd-kit/sortable";
import { MultipleContainers } from "./components/multiplecontainers";

export const Story = () => {
  return (
    <MultipleContainers
      columns={4}
      itemCount={3}
      strategy={rectSortingStrategy}
      wrapperStyle={() => ({
        width: 150,
        height: 150,
      })}
      vertical
    />
  );
};
