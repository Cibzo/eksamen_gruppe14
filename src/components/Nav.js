import LinkBtn from "./LinkBtn";

export default function Nav({navPges}) {
  return (
    
      <nav>
        {navPges.map(pges => (
          <LinkBtn  name={pges.nav}
                    key={pges.id}
                    link={pges.clas} />))}
      
      </nav>
  );
}
