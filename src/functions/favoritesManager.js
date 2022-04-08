//Manage charactersFavorites

export const favoritesManager = (
  characterData,
  favoritesCharacters,
  setFavoritesCharacters,
  isFavoriteId
) => {
  const newArr = [...favoritesCharacters];
  //If Array favoritesCharacters is not existing in localStorage
  if (newArr.length === 0) {
    // console.log("manager 1 : Array is not existing");
    newArr.push(characterData);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
    setFavoritesCharacters(newArr);
    return;
  }
  //If Array favoritesCharacters is existing in localStorage
  //If id is already in the favorites characters ==> remove it
  if (isFavoriteId || isFavoriteId >= 0) {
    // console.log("manager 2 : is already in array");

    newArr.splice(isFavoriteId, 1);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
    // console.log("remove from localStorage");
    setFavoritesCharacters(newArr);
  } else {
    // console.log("manager 3 : is not in array");
    newArr.push(characterData);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
    // console.log("push in array");
    setFavoritesCharacters(newArr);
  }
};
