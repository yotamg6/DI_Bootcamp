import UserBreedFavs from "./UserBreedFavs";
import UserDogFavs from "./UserDogFavs";
const Favorites = () => {
  return (
    <>
      <div>
        <h1>My Favorites</h1>
        <UserBreedFavs />
        <UserDogFavs />
      </div>
    </>
  );
};

export default Favorites;
