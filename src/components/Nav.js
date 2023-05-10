import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="PageNav">
        <Link to="GameShop" className="navLink">
          Shop
        </Link>
        <Link to="MyGames" className="navLink">
          My Games
        </Link>
        <Link to="MyFavourites" className="navLink">
          Favourites
        </Link>
      </nav>
    </>
  );
}
