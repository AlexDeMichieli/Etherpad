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
      <h1>Welcome to 1we1efgerfg</h1>
      <iframe src={`http://localhost/etherpad/p/${padId}#L4?showChat=false&showLineNumbers=false`} width='600' height='400' />

      <iframe
        title="Etherpad"
        src="http://localhost/etherpad/" // Replace this with the correct URL of your Etherpad server
        width="100%"
        height="600px"
        frameBorder="0"
      />
    </div>
  );
}

export default App;
