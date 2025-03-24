import useQuery from "@/hooks/useQuery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({ email: "", password: "" });
    const [successMessage, setSuccessMessage] = useState("");

    const query = useQuery();
    const navigate = useNavigate();

    const setFieldValue = (e) => {
        setErrors({});
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        setSuccessMessage("");

        try {
            const res = await fetch("https://api01.f8team.dev/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await res.json();

            if (data.status === "success") {
                localStorage.setItem("token", data.access_token);
                setSuccessMessage("Đăng nhập thành công!");
                setTimeout(() => {
                    navigate(query.get("continue") || "/");
                }, 1500);
                return;
            }

            setErrors({ other: data.message || "Đăng nhập thất bại!" });
        } catch (error) {
            setErrors({ other: "Lỗi kết nối, vui lòng thử lại!" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email:{" "}
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={setFieldValue}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:{" "}
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={setFieldValue}
                            required
                        />
                    </label>
                </div>
                {errors.other && <p>{errors.other}</p>}
                {successMessage && <p>{successMessage}</p>}{" "}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Đang xử lý..." : "Đăng nhập"}
                </button>
            </form>
        </div>
    );
};

export default Login;
