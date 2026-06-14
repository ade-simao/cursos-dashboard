import { supabase } from "./supabase.js";

export async function getStudents() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "student")
    .order("created_at", { ascending: false });

  if (error) throw error;

  console.log(data);


  return data;
}