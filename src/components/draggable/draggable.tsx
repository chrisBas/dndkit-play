import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";
import classNames from "classnames";
import React, { forwardRef } from "react";

import styles from "./draggable.module.css";
interface Props {
  dragging?: boolean;
  listeners?: DraggableSyntheticListeners;
  style?: React.CSSProperties;
  transform?: Transform | null;
  children: React.ReactNode;
}

export const Draggable = forwardRef<HTMLDivElement, Props>(function Draggable(
  { dragging, listeners, style, transform, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={classNames(styles.Draggable, dragging && styles.dragging)}
      style={
        {
          ...style,
          "--translate-x": `${transform?.x ?? 0}px`,
          "--translate-y": `${transform?.y ?? 0}px`,
        } as React.CSSProperties
      }
      {...listeners}
      {...props}
    >
      {children}
    </div>
  );
});
