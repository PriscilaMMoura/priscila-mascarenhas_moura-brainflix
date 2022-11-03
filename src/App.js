import Header from "./components/header/Header";
import MainContent from "./components/maincontent/MainContent";

function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <main>
        <MainContent />
      </main>
    </div>
  );
}

export default App;
