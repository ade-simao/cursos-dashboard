const supabase_url = "https://uczyzxljqufhfveatpqt.supabase.co";
const supabase_key = "sb_publishable_AyVULKC9lACjsKMYm1Karg_82It_wU1";
const supabase = window.supabase.createClient(supabase_url, supabase_key);

export const register = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (!error) {
    const result = await supabase.from("profiles").insert([
      {
        user_id: data.user.id,
        email: data.user.email,
      },
    ]);

    return {
      success: true,
      user: data.user,
    };
  }

  return {
    success: false,
    error: error.message,
  };
};

export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!error) {
    const {
      data: { role },
    } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", data.user.id)
      .single();

    return {
      success: true,
      role,
    };
  }

  return {
    success: false,
    error: error.message,
  };
};

export const logout = async () => {
  await supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", session.user.id)
    .single();

  return data;
};
