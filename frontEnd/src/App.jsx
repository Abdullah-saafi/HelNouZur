import { FormDataProvider } from "./components/FormDataContest";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <FormDataProvider>
      <AppRoutes />
    </FormDataProvider>
  );
}

export default App;
