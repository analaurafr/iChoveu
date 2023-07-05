const TOKEN = import.meta.env.VITE_TOKEN;
const API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=`;

export const searchCities = async (term) => {
  const response = await fetch(API + term);
  const data = await response.json();

  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }

  return data;
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
