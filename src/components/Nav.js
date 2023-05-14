import LinkBtn from "./LinkBtn";

export default function Nav({navPges}) {
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
  );
}
