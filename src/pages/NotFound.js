import { useNavigate } from "react-router-dom"; //KILDE: https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=1319s

export default function NotFound () {
    //KILDE: https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=1319s
    const navigate = useNavigate()    
        setTimeout(() => {navigate(-1)}, 3000)
   
    return ( 
            <div>
                <h1>Not found</h1>
                <p>This page doesn’t exist.</p>
            </div>
    )
}