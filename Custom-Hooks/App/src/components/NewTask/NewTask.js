import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const FIREBASE_DB = `https://react-http-dff3e-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`;

const NewTask = (props) => {
  const transformData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    console.log(createdTask);
    props.onAddTask(createdTask);
  }

  const { isLoading, error, sendHttpRequest } = useHttp();

  const enterTaskHandler = (taskText) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { text: taskText }
    }

    sendHttpRequest(FIREBASE_DB, transformData.bind(null, taskText), options);
  }

  // const enterTaskHandler = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(FIREBASE_DB,
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({ text: taskText }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     if (!response.ok) throw new Error('Request failed!');
  //     const data = await response.json();

  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
