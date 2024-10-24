import { db } from './Configurations/firebaseConfig';
import { ref, set } from "firebase/database";

function signUpUser(email, userData) {
  const emailKey = email.replace('.', '_');
  set(ref(db, `users/${emailKey}`), userData)
    .then(() => {
      console.log('Usuário cadastrado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao cadastrar o usuário:', error);
    });
}

const newUser = {
  name: "Nome do Usuário",
  email: "usuario@example.com",
  password: "senhaSegura",
};

signUpUser(newUser.email, newUser);
