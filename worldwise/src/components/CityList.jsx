import CityItem from "./CityItem";

import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCitiesContext } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCitiesContext();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message={"Add your first city by picking a city on the map"} />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.cityName} city={city} />
      ))}
    </ul>
  );
}

export default CityList;