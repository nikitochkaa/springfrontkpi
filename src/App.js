import {BrowserRouter as Router} from "react-router-dom";
import TopNav from "./components/TopNav";
import useRoutes from "./routes";

function App() {
    const routes = useRoutes(false)
  return (
    <Router>
      <div className="App">
        <TopNav/>
          {routes}
      </div>
    </Router>
  );
}

export default App;