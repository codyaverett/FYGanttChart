import * as React from 'react';
import { render } from 'react-dom';
import Gantt from './GanttChart';

const App = () => (
    <Gantt
      team="Team"
      epics={[
        {
          name: 'Task 1',
          start: new Date(2018, 10, 16),
          end: new Date(2018, 12, 25)
        },
        {
          name: 'Fun Task #2',
          start: new Date(2018, 10, 30),
          // tslint:disable-next-line:object-literal-sort-keys
          end: new Date(2018, 11, 30)
        }
      ]}
    />
);

render(<App />, document.getElementById('root'));
