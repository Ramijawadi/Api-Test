
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Contenu from './Contenu';

function App() {
  const [data, setData] = useState([]);

  const getData = () => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err))


  }

  useEffect(() => {

    getData();

  }, [])

  return (
    <div>
      <h2 className="App"> hello api</h2>

      {data
         .slice(0, 3)
        .map((user) =>
          <Contenu key={user.id} user={user} className="col" />
        )}


    </div>
  );
}

export default App;
