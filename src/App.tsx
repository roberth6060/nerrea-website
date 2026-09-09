import { Suspense } from "react";
import "./App.css";
import Routes from "./routes/Routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes />;
    </Suspense>
  );
}

export default App;
