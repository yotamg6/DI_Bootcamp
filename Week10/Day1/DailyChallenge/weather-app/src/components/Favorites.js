const Favorites = () => {
  const favInStor = localStorage.getItem("favoriteCities");
  const fav = JSON.parse(favInStor);
  //   console.log("localstorage:", favInStor);

  return (
    <>
      <h1>My Favorites</h1>
      {fav ? (
        fav.map((city, i) => {
          return (
            <div key={i}>
              <h2>{city.name}</h2>
              <h3>Current temperature: {city.main.temp}</h3>
              <h3>Feels like: {city.main.feels_like}</h3>
            </div>
          );
        })
      ) : (
        <p>nothing here...</p>
      )}
    </>
  );
};

export default Favorites;
