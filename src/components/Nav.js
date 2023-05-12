import LinkBtn from "./LinkBtn";

export default function Nav({navPges}) {
  return (
    
      <nav>
        {navPges.map(pges => (
          <LinkBtn  name={pges.nav}
                    atr={pges.id}
                    link={pges.clas} />))}
      
      </nav>
  );
}
