"use server";

import { supabase } from "@/lib/supabase";

export type DiaryformState = {
  success: boolean;
  message: string;
};

function getString(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function editDiary(
  id: string,
  status: DiaryformState,
  formData: FormData,
): Promise<DiaryformState> {
  const title = getString(formData, "title");
  const text = getString(formData, "text");

  if (!title || !text) {
    return {
      success: false,
      message: "タイトルと本文を入力してください",
    };
  }

  const { error } = await supabase
    .from("diary")
    .update({
      title: title.trim(),
      text: text.trim(),
    })
    .eq("id", id)
    .select("id")
    .single();

  if (error) {
    console.error(error.message);
    return {
      success: false,
      message: "日記の保存に失敗しました",
    };
  }

  return {
    success: true,
    message: "日記を保存しました",
  };
}
