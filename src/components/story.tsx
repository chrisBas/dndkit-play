import {
  DndContext,
  KeyboardSensor,
  Modifiers,
  MouseSensor,
  PointerActivationConstraint,
  TouchSensor,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { createSnapModifier } from "@dnd-kit/modifiers";
import type { Coordinates } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";

import { Draggable } from "./draggable/draggable";
import { Grid } from "./grid/grid";

export function Story() {
  const [gridSize, setGridSize] = useState(30);
  const style = {
    alignItems: "flex-start",
  };
  const snapToGrid = useMemo(() => createSnapModifier(gridSize), [gridSize]);

  return (
    <>
      <DraggableStory modifiers={[snapToGrid]} style={style} key={gridSize} />
      <Grid size={gridSize} onSizeChange={setGridSize} />
    </>
  );
}

interface Props {
  activationConstraint?: PointerActivationConstraint;
  handle?: boolean;
  modifiers?: Modifiers;
  style?: React.CSSProperties;
}

function DraggableStory({ activationConstraint, modifiers, style }: Props) {
  const [coordinates, setCoordinates] = useState<
    { id: number; coord: Coordinates }[]
  >([
    { id: 1, coord: { x: 0, y: 0 } },
    { id: 2, coord: { x: 4 * 30, y: 0 * 30 } },
  ]);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint,
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={(event) => {
        const {
          active: { id },
          delta,
        } = event;
        setCoordinates((prev) => {
          return prev.map((coord) => {
            if (coord.id === id) {
              return {
                ...coord,
                coord: {
                  ...coord.coord,
                  x: coord.coord.x + delta.x,
                  y: coord.coord.y + delta.y,
                },
              };
            }
            return coord;
          });
        });
      }}
      modifiers={modifiers}
    >
      {coordinates.map(({ id, coord: { x, y } }) => {
        return (
          <DraggableItem key={id} id={id} top={y} left={x} style={style}>
            <div
              style={{
                width: `${3 * 30}px`,
                height: `${1 * 30}px`,
              }}
            >
              <div>Drag Me</div>
            </div>
          </DraggableItem>
        );
      })}
    </DndContext>
  );
}

interface DraggableItemProps {
  id: number;
  style?: React.CSSProperties;
  top?: number;
  left?: number;
  children: React.ReactNode;
}

function DraggableItem({ id, style, top, left, children }: DraggableItemProps) {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: id,
    });

  return (
    <Draggable
      ref={setNodeRef}
      dragging={isDragging}
      listeners={listeners}
      style={{ ...style, top, left }}
      transform={transform}
      {...attributes}
    >
      {children}
    </Draggable>
  );
}
