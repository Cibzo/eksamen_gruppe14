import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <Link to="GameShop">
          <button>Shop</button>
        </Link>
        <Link to="MyGames">
          <button>My Games</button>
        </Link>
        <Link to="MyFavourites">
          <button>Favourites</button>
        </Link>
      </nav>
    </>
  );
}
