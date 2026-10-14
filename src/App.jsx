import PlayersList from "./PlayersList.jsx";

function App() {
  return (
    <main className="showcase-page">
      <div className="container py-5">
        <header className="showcase-header mb-5">
          <div className="eyebrow"><span /> THE BEAUTIFUL GAME</div>
          <h1>Legends <em>in play.</em></h1>
          <p>Meet the names shaping football, one match at a time.</p>
        </header>
        <PlayersList />
        <footer className="showcase-footer">FOOTBALL IS MORE THAN A GAME <span>✦</span></footer>
      </div>
    </main>
  );
}

export default App;
