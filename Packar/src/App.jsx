import { useCatFact } from "./hooks/useCatFact";
import "./App.css";

export default function App() {
  const { fact, refreshRandomFact } = useCatFact();

  const handleClick = async () => {
    refreshRandomFact();
  };

  return (
    <main>
      <header>
        <h1>Gatitolandia</h1>
      </header>
      <div className="content">
      <container>
        <button className="btn" onClick={handleClick}>Refresh</button>
        <div className="random-image">
        {fact && <img src={fact} alt="image-cat" height={400} width={600} />} 
        </div>
      </container>
      </div>
    </main>
  );
}
