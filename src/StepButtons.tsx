import * as React from "react";
import { Group } from "reakit";
import GanttContainer from "./GanttContainer";

const StepButtons = () => (
  <GanttContainer>
    {({ incrementQuarter, decrementQuarter }) => (
      <Group>
        <button onClick={incrementQuarter}>+1</button>
        <button onClick={decrementQuarter}>-1</button>
      </Group>
    )}
  </GanttContainer>
);

export default StepButtons;
