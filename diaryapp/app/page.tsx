import styles from "./page.module.css";
import Image from "next/image";

import DiaryList from "./_components/DiaryList";
import { Diary } from "./_libs/microcms";

export default function HomePage() {
  const testdiary: { content: Diary[] } = {
    content: [
      {
        id: "1",
        tittle: "test",
        text: "test",
        createdat: "11月19日",
      },
    ],
  };
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>日記アプリ</h1>
        </div>
        <Image
          className={styles.bgimg}
          src="/35332624_m.jpg"
          alt=""
          width={4000}
          height={1200}
          loading="eager"
        />
      </section>
      <nav>
        <a href="/createDiary">日記作成</a>
      </nav>
      <DiaryList diary={testdiary.content} />
    </>
  );
}
