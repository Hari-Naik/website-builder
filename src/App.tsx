import Header from "./components/specific/Header";
import Home from "./pages/Home";
import Footer from "./components/specific/Footer";

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden overflow-y-auto">
      {/* header */}
      <Header />
      {/* maincomponent */}
      <Home />
      {/* footer */}
      <Footer />
    </main>
  );
}

export default App;
