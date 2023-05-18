import LinkBtn from "./LinkBtn";

export default function Nav({navPges}) {
  return (
    
      <nav className="PageNav">
        {navPges.map(pges => (
          <LinkBtn  key={pges.id}
                    lnk={pges.clas}
                    cls={"navLink"}
                    name={pges.nav} 
                     />))}
      </nav>
  );
}
