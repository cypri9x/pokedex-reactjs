import "./styles.css";

export default function CardPokemon({ imageUrl, name, pokemonsInfo = {} }) {
  return (
    <div className="card-wrapper">
      <img className="card-image" src={imageUrl} />
      <p className="card-title">{name.toUpperCase()}</p>
      <div className="card-info">
        {Object.entries(pokemonsInfo).map(([key, value]) => (
          <p className="card-text">
            {key.toString().toUpperCase()}: {value.toString().toUpperCase()}
          </p>
        ))}
      </div>
    </div>
  );
}
