/*import Btn from "./Btn";
import { randIndex } from "./Functions";
import ProductCard from "./ProductCard";
import Titles from "./Titles";
export default function PageSection({libaryName, enterBtn, Games, antall, show}) {
    return (
            <>
            <section className={enterBtn}>
                <Title text={libaryName}/>
                <Btn name={enterBtn}/>
                {randIndex.map(randIndex => (
                <ul key={Games[randIndex].id}>
                    <ProductCard 
                        title={Games[randIndex].title}
                        generes={Games[randIndex].genres}
                        bilde={Games[randIndex].img}/>
                    <Btn atr={Games[randIndex].id} link={Games[randIndex].link} name={"Buy"} hide={show} />
                </ul>)).slice(0, antall)
                }
            </section>
            </>
    )
}

export default function ShopSection({secName}) {
    return (
            <>
            <section className={secName}>
                <Title titleName={"Gameshop"}/>
                <Btn name={"Visit Gameshop"}/>
                {randIndex.map(randIndex => (
                <ul key={store[randIndex].id}>
                    <ProductCard 
                        title={store[randIndex].title}
                        generes={store[randIndex].genres}
                        bilde={store[randIndex].img}/>
                    <Btn atr={store[randIndex].id} link={store[randIndex].link} name={"Buy"} />
                </ul>)).slice(0, 3)
                }
            </section>
            </>
    )
}

/*title: 
      id: 
      released: 
      genres: 
      link: 
      img:*/
      
