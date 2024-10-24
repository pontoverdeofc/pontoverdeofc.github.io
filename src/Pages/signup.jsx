import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../Configurations/firebaseConfig';
import { ref, set } from "firebase/database";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    birthDate: '',
    email: '',
    password: '',
    password2: '',
    cep: '',
    logradouro: '',
    number: '',
    neighborhood: '',
    city: '',
    uf: '',
    complement: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (validateForm1()) {
        setStep(2);
      } else {
        alert('Por favor, preencha todos os campos corretamente.');
      }
    } else {
      signUpUser();
    }
  };

  const handleBackStep = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const signUpUser = () => {
    const user = {
      id: Date.now().toString(),
      name: formData.name,
      cpf: formData.cpf,
      birthDate: formData.birthDate,
      email: formData.email,
      password: formData.password,
      address: {
        cep: formData.cep,
        logradouro: formData.logradouro,
        number: formData.number,
        neighborhood: formData.neighborhood,
        city: formData.city,
        uf: formData.uf,
        complement: formData.complement,
      },
      logado: false,
      pacotes: [],
    };

    set(ref(db, `users/${formData.email.replace('.', '_')}`), user)
      .then(() => {
        alert('Cadastro realizado com sucesso!');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Erro ao salvar o usuário:', error);
        alert('Erro ao cadastrar usuário. Tente novamente.');
      });
  };

  const validateForm1 = () => {
    const { name, cpf, birthDate, email, password, password2 } = formData;
    return name && cpf && birthDate && email && password && password === password2;
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo: Imagem */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')" }}></div>
      
      {/* Lado direito: Formulário de Cadastro */}
      <div className="flex flex-col justify-center w-full md:w-1/2 bg-white p-8 md:p-16">
        <div className="flex items-center mb-8">
          <div className="bg-blue-500 text-white rounded-full p-4">
            <i className="fas fa-user-plus"></i>
          </div>
          <h1 className="text-3xl font-bold ml-4">Sign Up</h1>
        </div>

        <form onSubmit={handleNextStep}>
          {step === 1 && (
            <div>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="cpf" className="block text-gray-700 mb-2">CPF</label>
                <input 
                  type="text" 
                  id="cpf" 
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="123.456.789-00" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="birthDate" className="block text-gray-700 mb-2">Data de Nascimento</label>
                <input 
                  type="text" 
                  id="birthDate" 
                  value={formData.birthDate}
                  onChange={handleChange}
                  placeholder="DD/MM/AAAA" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seuemail@dominio.com" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">Senha</label>
                <input 
                  type="password" 
                  id="password" 
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="8 a 16 caracteres" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
                <div className="text-sm text-gray-600">Deve conter entre 8 a 16 caracteres</div>
              </div>

              <div className="mb-6">
                <label htmlFor="password2" className="block text-gray-700 mb-2">Confirmar Senha</label>
                <input 
                  type="password" 
                  id="password2" 
                  value={formData.password2}
                  onChange={handleChange}
                  placeholder="Repita a senha" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                  Próximo
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-6">
                <label htmlFor="cep" className="block text-gray-700 mb-2">CEP</label>
                <input 
                  type="text" 
                  id="cep" 
                  value={formData.cep}
                  onChange={handleChange}
                  placeholder="12345-678" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                />
                <div className="text-sm text-gray-600">Em caso de não haver CEP, deixar em branco</div>
              </div>

              <div className="mb-6">
                <label htmlFor="logradouro" className="block text-gray-700 mb-2">Logradouro</label>
                <input 
                  type="text" 
                  id="logradouro" 
                  value={formData.logradouro}
                  onChange={handleChange}
                  placeholder="Logradouro" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="number" className="block text-gray-700 mb-2">Número</label>
                <input 
                  type="text" 
                  id="number" 
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Número" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                />
              </div>

              <div className="mb-6">
                <label htmlFor="neighborhood" className="block text-gray-700 mb-2">Bairro</label>
                <input 
                  type="text" 
                  id="neighborhood" 
                  value={formData.neighborhood}
                  onChange={handleChange}
                  placeholder="Bairro" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="city" className="block text-gray-700 mb-2">Cidade</label>
                <input 
                  type="text" 
                  id="city" 
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Cidade" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="uf" className="block text-gray-700 mb-2">UF</label>
                <input 
                  type="text" 
                  id="uf" 
                  value={formData.uf}
                  onChange={handleChange}
                  placeholder="UF" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="complement" className="block text-gray-700 mb-2">Complemento</label>
                <input 
                  type="text" 
                  id="complement" 
                  value={formData.complement}
                  onChange={handleChange}
                  placeholder="Complemento" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                />
              </div>

              <div className="flex justify-between">
                <button onClick={handleBackStep} className="bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600 transition duration-300">
                  Voltar
                </button>
                <button type="submit" className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition duration-300">
                  Cadastrar
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
