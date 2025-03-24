import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState({});

    const navigate = useNavigate();

    const getName = (name) => {
        const nameArr = name.trim().split("");
        if (nameArr.length === 1) return [nameArr[0], ""];
        const firstName = nameArr.pop();
        const lastName = nameArr.join(" ");
        return [firstName, lastName];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});

        if (!fullName || !email || !password || !passwordConfirm) {
            setError({ general: "Vui lòng điền đầy đủ thông tin." });
            return;
        }

        if (password.length < 6) {
            setError({ password: "Mật khẩu phải có ít nhất 6 ký tự." });
            return;
        }

        if (password !== passwordConfirm) {
            setError({ passwordConfirm: "Mật khẩu xác nhận không khớp." });
            return;
        }

        const [firstName, lastName] = getName(fullName);

        const requestData = {
            firstName,
            lastName,
            email,
            password,
            password_confirmation: passwordConfirm,
        };

        try {
            const res = await fetch(
                "https://api01.f8team.dev/api/auth/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(requestData),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw data;
            }

            alert("Đăng ký thành công!");
            localStorage.setItem("token", data.access_token);
            navigate("/");
        } catch (error) {
            console.log("Lỗi đăng ký:", error);
            const errorMessage = error.error || error.message || "";

            if (error.errors) {
                setError(error.errors);
            } else {
                let newError = {};
                if (errorMessage.includes("users_email_unique")) {
                    newError.email = "Email này đã được sử dụng.";
                }
                if (errorMessage.includes("users_username_unique")) {
                    newError.fullName =
                        "Tên người dùng đã được sử dụng. Vui lòng chọn tên khác.";
                }
                if (Object.keys(newError).length === 0) {
                    newError.general = "Lỗi hệ thống. Vui lòng thử lại sau.";
                }
                setError(newError);
            }
        }
    };

    return (
        <div>
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Họ và Tên:</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    {error.fullName && (
                        <p className="error">{error.fullName}</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {error.email && <p className="error">{error.email}</p>}
                </div>

                <div className="form-group">
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error.password && (
                        <p className="error">{error.password}</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Nhập lại mật khẩu:</label>
                    <input
                        type="password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                    />
                    {error.passwordConfirm && (
                        <p className="error">{error.passwordConfirm}</p>
                    )}
                </div>

                <button type="submit">Đăng ký</button>
                {error.general && <p className="error">{error.general}</p>}
            </form>
        </div>
    );
};

export default Register;
