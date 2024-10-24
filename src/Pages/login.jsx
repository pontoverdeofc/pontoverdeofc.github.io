import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Configurations/firebaseConfig";
import { ref, get, child, update } from "firebase/database";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    const emailKey = email.replace(".", "_");
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, `users/${emailKey}`));
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
          console.log("Login bem-sucedido!");
          await update(child(dbRef, `users/${emailKey}`), { logado: true });
          localStorage.setItem("userEmail", email);
          navigate("/dashboard");
        } else {
          console.log("Senha incorreta");
          alert("Senha incorreta");
        }
      } else {
        console.log("Usuário não encontrado");
        alert(
          "Usuário não encontrado. Redirecionando para a página de cadastro."
        );
        navigate("/signup");
      }
    } catch (error) {
      console.error("Erro ao verificar o usuário:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo: Formulário de Login */}
      <div className="flex flex-col justify-center w-full md:w-1/2 bg-white p-8 md:p-16">
        <div className="flex items-center mb-8">
          <div className="bg-blue-500 text-white rounded-full p-4">
            <i className="fas fa-plane"></i>
          </div>
          <h1 className="text-3xl font-bold ml-4">Login</h1>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password *
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                <i className="fas fa-eye"></i>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">
                Keep me logged in
              </label>
            </div>
            <button
              onClick={handlePasswordReset}
              className="text-blue-500 hover:underline"
            >
              Reset password
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            SEND
          </button>
        </form>
      </div>

      {/* Lado direito: Imagem */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
        }}
      ></div>
    </div>
  );
};

export default Login;
