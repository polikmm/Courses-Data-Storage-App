import cross from "../../../../../assets/icons/cross.svg";
import trash from "../../../../../assets/icons/trash.svg";
import style from "./style.module.css";

export type Prop = {
  id: string;
  name: string;
  onAdd: (id: string, name: string) => void;
  onDelete: (id: string) => void;
};

export function Author({ id, name, onAdd, onDelete }: Prop) {
  return (
    <div className={style.authorsListItem}>
      <h5 id={id}>{name}</h5>
      <button
        type="button"
        className={style.buttonIcon}
        onClick={() => onAdd(id, name)}
      >
        <img src={cross} alt="add the author to the course authors list" />
      </button>
      <button
        type="button"
        className={style.buttonIcon}
        onClick={() => onDelete(id)}
      >
        <img src={trash} alt="delete the author from authors list" />
      </button>
    </div>
  );
}