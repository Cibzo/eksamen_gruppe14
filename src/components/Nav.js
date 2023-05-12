import LinkBtn from "./LinkBtn";

export default function Nav({navPges}) {
  return (
    
      <nav>
        {navPges.map(pges => (
          <LinkBtn  key={pges.id}
                    atr={pges.id}
                    name={pges.nav}
                    link={pges.clas} />))}
      
      </nav>
  );
}
      


