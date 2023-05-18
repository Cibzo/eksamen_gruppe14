import { Link } from "react-router-dom";

export default function LinkBtn ({lnk, name, hide, cls}) {
    let hid = hide === undefined ? false : hide
    return <Link 
                to={lnk} 
                reloadDocument >
                    <button 
                        hidden={hid} 
                        className={cls}>
                            {name}
                    </button>
                    </Link>
    
}

