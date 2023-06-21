import WeatherCard from './conpomnents/WeatherCard';

function App() {
  const cities = [
    {cityName:'Tokyo',style:{colorName:'blue', gradietion:'background: -webkit-linear-gradient(left, #FFC778, #FFF)'}},
    {cityName:'London', style:{colorName:'green', gradietion:'background: -webkit-linear-gradient(left, #FFC778, #FFF)'}},
    {cityName:'Paris', style:{colorName:'red', gradietion:'background: -webkit-linear-gradient(left, #FFC778, #FFF)'}},
    {cityName:'Los Angeles', style:{colorName:'black', gradietion:'background: -webkit-linear-gradient(left, #FFC778, #FFF)'}}
  ]

  return (
    <div className="App">
      <div className="cardBack">
        {cities.map((v,i) => {
          let gradietion;
          switch(i){
            case 0:
              gradietion = 'blue';
              break;
            case 1:
              gradietion = 'green';
              break;
            case 2:
              gradietion = 'red';
              break;
            case 3:
              gradietion = 'black';
              break;
            default:
              gradietion = '';
              break;
          }
          return(
            <WeatherCard key = {i} className = {gradietion} cityName = {v.cityName} style = {v.style.gradietion}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
