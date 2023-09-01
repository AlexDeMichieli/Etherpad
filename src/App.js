import { useEffect, useState } from "react";

const App = () => {
  const [padId, setPadId] = useState('');

  useEffect(() => {
    createPad();
  }, []);

  const createPad = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const response = await fetch("http://localhost:3001/api/create", requestOptions);
      const result = await response.json();
      setPadId(result.padID);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <h1>Welcome</h1>
      <iframe src={`http://localhost/etherpad/p/${padId}#L4?showChat=false&showLineNumbers=false`} width='600' height='400' />
    </div>
  );
}

export default App;
