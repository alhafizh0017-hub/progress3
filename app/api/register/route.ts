export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return Response.json(
        { success: false, message: "Semua field wajib diisi!" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { success: false, message: "Email tidak valid!" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return Response.json(
        { success: false, message: "Password minimal 6 karakter!" },
        { status: 400 }
      );
    }

    return Response.json({ success: true, message: "Registrasi berhasil!" });
  } catch {
    return Response.json(
      { success: false, message: "Data tidak valid!" },
      { status: 400 }
    );
  }
}