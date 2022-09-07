import pictures from '../assets/vectors/day-pack/index';

export const getPictureByWeathercode = (weathercode: number | string) => {
  return weathercode === 0 ?
    pictures.wc0 :
    weathercode >= 1 && weathercode <= 3 ?
      pictures.wc1_3 :
      weathercode >= 45 && weathercode <= 48 ?
        pictures.wc45_48 :
        weathercode >= 51 && weathercode <= 56 ?
          pictures.wc51_56 :
          weathercode >= 61 && weathercode <= 67 ?
            pictures.wc61_67 :
            weathercode >= 71 && weathercode <= 99 ?
              pictures.wc71_99 :
              ''
};
