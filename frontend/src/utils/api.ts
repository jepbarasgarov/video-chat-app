class Api {
  static async post(url: string, data: FormData) {
    try {
      const response = await fetch(url, { method: "POST", body: data });
      return { success: true as const, data: (await response.json()).data };
    } catch (err) {
      console.error(err);
      return { success: false, data: null };
    }
  }
}

export { Api as api };
