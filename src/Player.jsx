function Player({
  name = "Player Name",
  team = "Unattached",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  image = "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=85",
}) {
  return (
    <article className="card player-card h-100" style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid #e7e7e3" }}>
      <div className="player-photo-wrap">
        <img className="card-img-top player-photo" src={image} alt={`${name} on the pitch`} />
        <span className="jersey-badge">#{jerseyNumber}</span>
      </div>
      <div className="card-body d-flex flex-column">
        <p className="player-kicker">PLAYER PROFILE</p>
        <h2 className="card-title player-name">{name}</h2>
        <p className="team-name">{team}</p>
        <div className="player-details mt-auto">
          <div><span>Nationality</span><strong>{nationality}</strong></div>
          <div><span>Age</span><strong>{age}</strong></div>
          <div><span>Jersey</span><strong>#{jerseyNumber}</strong></div>
        </div>
      </div>
    </article>
  );
}

Player.defaultProps = {
  name: "Player Name",
  team: "Unattached",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=85",
};

export default Player;
