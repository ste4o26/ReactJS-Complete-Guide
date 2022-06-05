import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useHttp from './hooks/use-http';

const FIREBASE_DB = `https://react-http-dff3e-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`;

function App() {
  const [tasks, setTasks] = useState([]);

  const modifyTasks = useCallback(data => {
    const loadedTasks = [];
    for (const taskKey in data) {
      const task = { id: taskKey, text: data[taskKey].text }
      loadedTasks.push(task);
    }

    setTasks(loadedTasks);
  }, [])

  const { isLoading, error, sendHttpRequest } = useHttp();
  useEffect(() => { sendHttpRequest(FIREBASE_DB, modifyTasks) }, [sendHttpRequest, modifyTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendHttpRequest}
      />
    </React.Fragment>
  );
}

export default App;
