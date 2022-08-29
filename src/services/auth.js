import https from "./https";

export const signUp = async (param) => {
  try {
    await https.POST("auth/sign-up", null, { ...param });
  } catch (error) {
    return false;
  }
  return true;
};

export const signIn = async (param) => {
  try {
    await https.GET("auth", null, { ...param });
  } catch (error) {
    return false;
  }
  return true;
};
