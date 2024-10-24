import { ref, set, get } from "firebase/database";
import { db } from './firebaseConfig';
import { flightDeals } from '../data/dataCards';

const loadDataToFirebase = () => {
  flightDeals.forEach(deal => {
    set(ref(db, `flightDeals/${deal.id}`), deal)
      .then(() => {
        console.log(`Dados do ${deal.title} carregados com sucesso!`);
      })
      .catch((error) => {
        console.error('Erro ao carregar os dados:', error);
      });
  });
};

export const checkAndLoadData = async () => {
  const dealsRef = ref(db, 'flightDeals');
  
  try {
    const snapshot = await get(dealsRef);
    
    if (!snapshot.exists()) {
      console.log('Banco de dados vazio. Carregando dados...');
      loadDataToFirebase();
    } else {
      console.log('Dados já carregados no banco de dados.');
    }
  } catch (error) {
    console.error('Erro ao verificar o banco de dados:', error);
  }
};
