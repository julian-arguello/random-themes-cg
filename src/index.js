import open from 'open';
const top10 = [
    "Nos Siguen Pegando Abajo - ♬ listen on spotify -> https://open.spotify.com/track/4VikOud5ZmdmHH6h7uQeDB?si=bd3b429ce4eb4496",
    "Demoliendo Hoteles - ♬ listen on spotify -> https://open.spotify.com/track/29iIRrSuANyjnwag69PHOJ?si=eea29ea788de4704",
    "No Voy en Tren - ♬ listen on spotify -> https://open.spotify.com/track/0rliTXrA8nLBuJcxDuueWU?si=617e84d4246442a9",
    "Hablando a Tu Corazón - ♬ listen on spotify -> https://open.spotify.com/track/3k9dGCm2R2Y70e87aMHYC3?si=6da3f9ff522c47d9",
    "Promesas Sobre EI Bidet - ♬ listen on spotify -> https://open.spotify.com/track/2MXqrO1RBfek6RoijghYYp?si=726d69d89e7b45f7",
    "Tu Amor - ♬ listen on spotify -> https://open.spotify.com/track/3obYcaXHdTB1EvZE3PVQhd?si=1753564452bf4ffd",
    "No Me Dejan Salir - ♬ listen on spotify -> https://open.spotify.com/track/6P6rudfmKr7FyArdyEs0Mk?si=a43a72a5f6924d5f",
    "Me Siento Mucho Mejor - ♬ listen on spotify -> https://open.spotify.com/track/3C5OdJjudhoDye8E5mU3nI?si=2fd72b95362f4714",
    "Rezo por Vos - ♬ listen on spotify -> https://open.spotify.com/track/6dOzqs6o4DNzXs4jF2v1Yq?si=851315d7de1a42e2",
    "Raros Peinados Nuevos - ♬ listen on spotify -> https://open.spotify.com/track/7mnf5omGMUwSfpwZrt5AZ0?si=f40eb3da25134695"
  ];
  
  export function getTheme() {
    const theme = top10[Math.floor(Math.random() * top10.length)];
    console.log(`\x1b[36m${theme}\x1b[89m`);
    const url = theme.match(/https:\/\/open\.spotify\.com\/track\/\w+/);
    if (url) {
      open(url[0]);
    }
  }
  