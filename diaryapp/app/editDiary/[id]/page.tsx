import { supabase } from "@/lib/supabase";
import EditForm from "./editform";
import Link from "next/link";

// プリレンダリングをブロックしてリクエスト時に動的取得することを許可
export const instant = false;

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
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
    <>
      <h1>日記編集中...</h1>
      <EditForm
        id={`${diary.id}`}
        title={`${diary.title}`}
        text={`${diary.text}`}
      />
      <Link href="/">一覧に戻る</Link>
    </>
  );
}
