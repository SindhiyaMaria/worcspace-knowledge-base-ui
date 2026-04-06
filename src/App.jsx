import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KnowledgeBase from './components/KnowledgeBase';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <KnowledgeBase />
      </div>
    </div>
  );
}

export default App;