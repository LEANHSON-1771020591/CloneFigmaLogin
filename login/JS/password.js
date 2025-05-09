document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    if (!email && !password) {
        errorMessage.textContent = "Tất cả các trường không được để trống!";
        return;
    }
    if (!email) {
        errorMessage.textContent = "Trống email!";
        return;
    }
    if (!password) {
        errorMessage.textContent = "Trống password!";
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Địa chỉ email không hợp lệ!";
        return;
    }
    if (password.length < 8) {
        errorMessage.textContent = "Mật khẩu phải có ít nhất 8 ký tự!";
        return;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (specialCharRegex.test(password)) {
        errorMessage.textContent = "Mật khẩu không được chứa ký tự đặc biệt!";
        return;
    }

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    errorMessage.textContent = "";
    alert("Đăng nhập thành công!");
});
