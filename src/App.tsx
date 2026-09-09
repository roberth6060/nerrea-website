import { Suspense } from "react";
import Routes from "./routes/Routes";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GlobalStyle />
      <Routes />
    </Suspense>
  );
}

export default App;
