import { rectSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import {
  ContainerConfig,
  MultipleContainers,
} from "./components/multiplecontainers";

export const Story = () => {
  const [containers, setContainers] = useState<ContainerConfig[]>([
    {
      id: "1",
      title: "Container A",
      items: [
        {
          id: "A1",
          component: () => {
            return <h2>A1</h2>;
          },
          location: {
            x: 0,
            y: 0,
            width: 1,
            height: 1,
          },
        },
        {
          id: "A2",
          component: () => {
            return <h2>A2</h2>;
          },
          location: {
            x: 1,
            y: 0,
            width: 1,
            height: 1,
          },
        },
        {
          id: "A3",
          component: () => {
            return <h2>A3</h2>;
          },
          location: {
            x: 2,
            y: 0,
            width: 1,
            height: 1,
          },
        },
        {
          id: "A4",
          component: () => {
            return <h2>A4</h2>;
          },
          location: {
            x: 2,
            y: 0,
            width: 1,
            height: 1,
          },
        },
      ],
    },
    {
      id: "2",
      title: "Container B",
      items: [
        {
          id: "B1",
          component: () => {
            return <h2>B1</h2>;
          },
          location: {
            x: 0,
            y: 0,
            width: 1,
            height: 1,
          },
        },
        {
          id: "B2",
          component: () => {
            return <h2>B2</h2>;
          },
          location: {
            x: 1,
            y: 0,
            width: 1,
            height: 1,
          },
        },
        {
          id: "B3",
          component: () => {
            return <h2>B3</h2>;
          },
          location: {
            x: 2,
            y: 0,
            width: 1,
            height: 1,
          },
        },
        {
          id: "B4",
          component: () => {
            return <h2>B4</h2>;
          },
          location: {
            x: 2,
            y: 0,
            width: 1,
            height: 1,
          },
        },
        {
          id: "B5",
          component: () => {
            return <h2>B5</h2>;
          },
          location: {
            x: 2,
            y: 0,
            width: 1,
            height: 1,
          },
        },
      ],
    },
  ]);

  return (
    <MultipleContainers
      containers={containers}
      setContainers={setContainers}
      columns={8}
      strategy={rectSortingStrategy}
      wrapperStyle={() => ({
        width: 150,
        height: 150,
      })}
      vertical
    />
  );
};
