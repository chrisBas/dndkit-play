import { rectSortingStrategy } from "@dnd-kit/sortable";
import { MultipleContainers } from "./multiplecontainers";

export const Story = () => {
  return (
    <MultipleContainers
      columns={2}
      itemCount={5}
      strategy={rectSortingStrategy}
      wrapperStyle={() => ({
        width: 150,
        height: 150,
      })}
      vertical
    />
  );
};
