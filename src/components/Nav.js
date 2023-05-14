import LinkBtn from "./LinkBtn";

export default function Nav({navPges}) {
  return (
    
      <nav className="PageNav">
        {navPges.map(pges => (
          <LinkBtn  key={pges.id}
                    atr={pges.id}
                    name={pges.nav}
                    lnk={pges.clas} 
                    linkCls={"navLink"} />))}
      
      </nav>
  );
}
