import * as React from "react";
import { render } from "react-dom";
import Gantt from "./GanttChart";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Gantt
      team="Team"
      epics={[
        {
          name: "Task 1",
          start: new Date(2018, 10, 16),
          end: new Date(2018, 12, 25)
        },
        {
          name: "Fun Task #2",
          start: new Date(2018, 10, 30),
          end: new Date(2018, 11, 30)
        }
      ]}
    />
  </div>
);

render(<App />, document.getElementById("root"));
