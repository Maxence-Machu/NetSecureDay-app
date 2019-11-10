const FAVORITE_KEY = "nsd-favorite-2019";

export default class Favorite {
  /**
   * Get the favorites stored in local storage
   *
   * @returns {Array<String>}
   */
  static getFavorites = () => {
    const favorites = localStorage.getItem(FAVORITE_KEY);

    if (favorites) {
      return JSON.parse(favorites);
    } else {
      return [];
    }
  };

  /**
   * Save a the list of favorites.
   *
   * @param {Array<string>} favorites The list of favorites to save.
   */
  static setFavorites = favorites => {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
  };

  /**
   * Add the conference in the favorites.
   *
   * @param {string} id The identifier of the conference.
   */
  static addFavorite = id => {
    const favorites = Favorite.getFavorites();

    // If it is already a favorite, we do not add it again.
    if (favorites.includes(id)) {
      return;
    }

    favorites.push(id);

    Favorite.setFavorites(favorites);
  };

  /**
   * Check if the conference matching the identifier is a favorite.
   *
   * @param {string} id The identifier of the conference.
   */
  static isFavorite = id => {
    return Favorite.getFavorites().includes(id);
  };

  /**
   * Remove the conference matching identifier from the favorites.
   *
   * @param {string} id The identifier of the conference.
   */
  static removeFavorite = id => {
    const favorites = Favorite.getFavorites();

    const newFavorites = favorites.filter(favorite => favorite !== id);

    Favorite.setFavorites(newFavorites);
  };
}
