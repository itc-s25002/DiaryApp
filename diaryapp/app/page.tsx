import styles from "./page.module.css";
import Image from "next/image";

import DiaryList from "@/_components/DiaryList";
import { Suspense } from "react";

export default function HomePage() {
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
      <Suspense fallback={<p>日記を取得中...</p>}>
        <DiaryList />
      </Suspense>
    </>
  );
}
