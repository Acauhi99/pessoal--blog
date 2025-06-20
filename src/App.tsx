import { Layout } from "./components/layout/Layout";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}
