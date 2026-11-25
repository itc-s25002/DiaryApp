"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteDiary } from "@/app/action/deleteDiary";

type Props = {
  id: string;
};

export default function DeleteDiaryButton({ id }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  function handleDelete() {
    // 削除前の確認
    const confirmed = window.confirm("本当にこの日記を削除しますか？");

    // キャンセルした場合は何もしない
    if (!confirmed) return;

    setMessage("");

    startTransition(async () => {
      const result = await deleteDiary(id);

      if (!result.success) {
        setMessage(result.message);
        return;
      }

      // 削除成功時は一覧ページへ移動
      router.push("/");
      router.refresh();
    });
  }

  return (
    <div>
      <button type="button" onClick={handleDelete} disabled={isPending}>
        {isPending ? "削除中..." : "削除"}
      </button>

      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}
