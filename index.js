import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';
import eventos from './modules/eventos';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...frentes,
  ...eventos,
};

export default CamaraAPI;
