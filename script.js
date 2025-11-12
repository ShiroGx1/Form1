document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "Admin" && password === "1234") {
        alert("Login berhasil ");
        window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"; // arahkan ke halaman lain
    } else {
        alert("Username atau password salah ");
    }
});
