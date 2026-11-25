"use client";

import { useActionState } from "react";
import { editDiary, DiaryformState } from "@/app/action/editDiarys";
import Link from "next/link";
import EditDiaryButton from "@/app/_components/EditDiary";

type Props = {
  id: string;
  title: string;
  text: string;
};

const initialState: DiaryformState = {
  success: false,
  message: "",
};

export default function EditForm({ id, title, text }: Props) {
  const editDiaryWithid = editDiary.bind(null, id);
  const [state, formAction] = useActionState(editDiaryWithid, initialState);

  return (
    <>
      <h1>日記作成中...</h1>
      <form action={formAction}>
        <div>
          <label>タイトル</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            defaultValue={title}
            maxLength={100}
            placeholder="日記のタイトル"
          />
        </div>
        <div>
          <label>内容</label>
          <textarea
            id="text"
            name="text"
            required
            defaultValue={text}
            rows={15}
            placeholder="今日の出来事を日記に残そう"
          />
        </div>
        {state.message && (
          <p style={{ color: state.success ? "green" : "red" }}>
            {state.message}
          </p>
        )}
        <EditDiaryButton />
      </form>
    </>
  );
}
