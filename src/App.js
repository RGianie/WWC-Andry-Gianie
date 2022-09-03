import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <>
      <AppLayout leftComponent={<Left />} rightComponent={<Right />} />
    </>
  );
}

export default App;
