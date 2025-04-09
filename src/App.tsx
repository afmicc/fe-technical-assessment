import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { StaticDataProvider } from "./context";

function App() {
  return (
    <Layout>
      <StaticDataProvider>
        <Home />
      </StaticDataProvider>
    </Layout>
  );
}

export default App;
