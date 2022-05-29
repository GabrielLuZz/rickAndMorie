import style from "./style.module.css";

const CharCard = ({ name, image, species, status }) => {
  let newName = "";

  if (name.length > 12) {
    newName = name.slice(0, 12) + "...";
  } else {
    newName = name;
  }
  return (
    <div
      className={style.card}
      style={{ backgroundColor: status === "Alive" ? "#f1f7ff" : "#f8ccce" }}
    >
      <h2
        style={{ color: status === "Alive" ? "#83bfcc" : "#c08796" }}
        className={style.title}
      >
        {newName}
      </h2>
      <img className={style.image} src={image} alt="" />
      <div className={style.info}>
        <span className={style.specie}>{species}</span>
      </div>
    </div>
  );
};

export default CharCard;
