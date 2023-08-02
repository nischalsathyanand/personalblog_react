import{Link} from "react-router-dom/cjs/react-router-dom"

const NotFound = () => {
    return ( 
    <div className="not-found">
        <h1> SORRY.....!!!</h1>
        
        <p> PAGE IS NOT FOUND </p>
        <Link to="/">BACK TO HOME</Link>

    </div>
     );
}
 
export default NotFound;