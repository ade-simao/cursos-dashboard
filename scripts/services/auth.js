const supabase_url = "https://uczyzxljqufhfveatpqt.supabase.co";
const supabase_key = "sb_publishable_AyVULKC9lACjsKMYm1Karg_82It_wU1";
const supabase = window.supabase.createClient(supabase_url, supabase_key);

export const isLogged = async () => {
  const { data: { session } } = await supabase.auth.getSession();

  return session ? session.user : null;
};

export const register = async (email, password) => {
  // localStorage.setItem('token', JSON.stringify(user));

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (!error) {
    await supabase.from("profiles").insert([
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
