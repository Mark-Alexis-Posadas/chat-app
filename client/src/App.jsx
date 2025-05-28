import { Sidebar } from "./components/Sidebar";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
