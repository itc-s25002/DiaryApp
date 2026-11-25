import { supabase } from "@/lib/supabase";
import styles from "./index.module.css";
import Link from "next/link";

import DeleteDiaryButton from "../DeleteDiary";

export default async function DiaryList() {
  const { data: diaries, error } = await supabase
    .from("diary")
    .select("id,title, created_at");

  if (error) {
    return <p>日記の読み込みに失敗しました。</p>;
  }

  if (!diaries || diaries.length === 0) {
    return <p>日記がありません。</p>;
  }

  return (
    <main>
      <h1>日記一覧</h1>
      <ul className={styles.list}>
        {diaries.reverse().map((item, index) => (
          <li key={index} className={styles.item}>
            <Link href={`diarys/${item.id}`}>{item.title}</Link>
            <small>
              {new Date(item.created_at).toLocaleString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                timeZone: "Asia/Tokyo",
              })}
            </small>
            <Link href={`editDiary/${item.id}`}>日記を編集する</Link>
            <DeleteDiaryButton id={`${item.id}`} />
          </li>
        ))}
      </ul>
    </main>
  );
}
