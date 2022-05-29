import CharCard from "../CharCard";
import style from "./style.module.css";

const Characters = ({ characterList }) => {
  return (
    <div className={style.tela}>
      <h1 className={style.title}>Meus personagens</h1>
      <ul className={style.list}>
        {characterList.map(({ name, id, image, species, status }) => (
          <CharCard
            key={id}
            name={name}
            image={image}
            species={species}
            status={status}
          />
        ))}
      </ul>
    </div>
  );
};

export default Characters;
