export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { success: false, message: "Email dan password wajib diisi!" },
        { status: 400 }
      );
    }

    if (email.includes("@") && password.length >= 6) {
      return Response.json({ success: true, message: "Login berhasil!" });
    }

    return Response.json(
      { success: false, message: "Email atau password salah!" },
      { status: 401 }
    );
  } catch {
    return Response.json(
      { success: false, message: "Data tidak valid!" },
      { status: 400 }
    );
  }
}