import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ onLoginSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "vibexio123" && password === "12345") {
            setError("");
            onLoginSuccess(); 
            navigate("/admindashboard");
        } else {
            setError("Invalid username or password!");
        }

    };


    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="bg-[#ffffff0e] p-8 rounded-lg shadow-lg w-full max-w-sm mt-10">
                <div className="flex justify-center mb-4">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Admin Avatar"
                        className="w-16 h-16 rounded-full"
                    />
                </div>
                <h2 className="text-center text-white text-lg font-semibold mb-6">
                    Admin Login
                </h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mb-4 p-2 border-b border-gray-600 bg-transparent text-white outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-6 p-2 border-b border-gray-600 bg-transparent text-white outline-none"
                    />
                    {error && (
                        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] 
              text-white text-[16px] sm:text-[14px] font-medium 
              px-[36px] py-[14px] sm:px-[28px] sm:py-[12px] 
              rounded-[40px] cursor-pointer 
              transition-all duration-500 ease-in-out 
              bg-[length:200%_200%] bg-left hover:bg-right"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
