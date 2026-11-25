"use client";

import { useFormStatus } from "react-dom";

export default function EditDiaryButton() {
  //フォームが送信中か判別
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "保存中..." : "日記を保存する"}
    </button>
  );
}
