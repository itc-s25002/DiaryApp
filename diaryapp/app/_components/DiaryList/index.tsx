import { Diary } from "../../_libs/microcms";
import styles from "./index.module.css";

type Props = {
  diary: Diary[];
};

export default function DiaryList({ diary }: Props) {
  if (diary.length === 0) {
    return <p>日記がありません。</p>;
  }

  return (
    <ul className={styles.list}>
      {diary.map((item) => (
        <li key={item.id} className={styles.item}>
          <h3>{item.createdat}</h3>
          <h2>{item.tittle}</h2>
        </li>
      ))}
    </ul>
  );
}
