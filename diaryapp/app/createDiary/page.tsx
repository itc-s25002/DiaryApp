"use client";

import { useActionState } from "react";
import CreateDiaryButton from "../_components/CreateDiary";
import { createDiary, DiaryformState } from "../action/createDiary";

const initialState: DiaryformState = {
  success: false,
  message: "",
};

export default function Page() {
  const [state, formAction] = useActionState(createDiary, initialState);

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
            rows={15}
            placeholder="今日の出来事を日記に残そう"
          />
        </div>
        {state.message && (
          <p style={{ color: state.success ? "green" : "red" }}>
            {state.message}
          </p>
        )}
        <CreateDiaryButton />
      </form>
    </>
  );
}
