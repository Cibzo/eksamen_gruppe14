import Btn from "./Btn";

export default function Nav({pges}) {
  return (
    <>
      <nav>
      {pges.map(pges => (
            <Btn  name={pges.nav} 
                  atr={pges.id} 
                  link={pges.clas}/>))}
      </nav>
      {/*<nav>
        <Link to="GameShop">
          <button>Shop</button>
        </Link>
        <Link to="MyGames">
          <button>My Games</button>
        </Link>
        <Link to="MyFavourites">
          <button>Favourites</button>
        </Link>
      </nav>*/}
    </>
  );
}
      


