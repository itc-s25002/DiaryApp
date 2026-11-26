"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export type DiaryformState = {
  success: boolean;
  message: string;
};

export async function deleteDiary(id: string): Promise<DiaryformState> {
  const { error } = await supabase
    .from("diary")
    .delete()
    .eq("id", id)
    .select("id")
    .single();

  if (error) {
    console.error(error.message);
    return {
      success: false,
      message: "日記の削除に失敗しました",
    };
  }

  revalidatePath("/");
  revalidatePath(`diarys/${id}`);

  return {
    success: true,
    message: "日記を削除しました",
  };
}
