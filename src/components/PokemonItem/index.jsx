import "./styles.css";

export default function PokemonItem({ name, onClick, selected }) {
  return (
    <div
      className="pokemon-item-wrapper"
      onClick={onClick}
      style={selected ? { backgroundColor: "#ed1c24" } : {}}
    >
      <p
        className="pokemon-item-name"
        style={selected ? { color: "white" } : {}}
      >
        {name.toUpperCase()}
      </p>
    </div>
  );
}
