import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [word, setword] = useState("");
  const [meaning, setmeaning] = useState([]);
  const DictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      setmeaning(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meaning);
  useEffect(() => {
    DictionaryApi();
  }, []);
  return (
    <div className="App" style={{height:"100vh",color:"white",backgroundColor:"#282c34"}}>
      <Container maxWidth="md" style={{display:"flex",flexDirection:"column",height:"100vh"}}>
        Dictionary
      </Container>
    </div>
  );
}

export default App;
