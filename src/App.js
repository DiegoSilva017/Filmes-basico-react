import Rotas from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer autoCLose={100}/>
      <Rotas/>
    </div>
  );
}

export default App;
