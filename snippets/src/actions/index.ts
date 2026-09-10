"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  redirect("/");
}
