const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();

  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }

  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const url = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

  const resposta = await fetch(url);
  const info = await resposta.json();

  if (Array.isArray(info)) {
    const { location, current } = data[0];
    const { name, country } = location;
    return {
      name,
      country,
      temp: current.temp_c,
      condition: current.condition.text,
      icon: current.condition.icon,
    };
  }
  const { location, current } = info;
  const { name, country } = location;
  return {
    name,
    country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
  };
};
