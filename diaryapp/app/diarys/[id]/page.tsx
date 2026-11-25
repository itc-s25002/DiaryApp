import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DetailPage({ params }: Props) {
  const { id } = await params;

  const { data: diary, error } = await supabase
    .from("diary")
    .select("id,title,text,created_at")
    .eq("id", id)
    .single();

  if (error || !diary) {
    return (
      <main>
        <p>日記が見つかりません</p>
        <Link href="/">一覧に戻る</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{diary.title}</h1>
      <small>
        {new Date(diary.created_at).toLocaleString("ja-JP", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          timeZone: "Asia/Tokyo",
        })}
      </small>
      <div>{diary.text}</div>
      <Link href="/">一覧に戻る</Link>
    </main>
  );
}
