import {Link} from "react-router-dom"
import "./index.css"

const Headers=()=>(
    <div className="head-main" >
           <Link to="/get" className="lins" >
                <li className="lists" >
                    Get
                </li>

           </Link>

           <Link to="/stastics" className="lins" >
                    <li className="lists" >
                        Statastics
                    </li>
           </Link>

           <Link to="/bar" className="lins" >
                    <li className="lists" >
                        Bar
                    </li>
           </Link>

           <Link to="/pie" className="lins" >
                    <li className="lists" >
                        Pie
                    </li>
           </Link>
    </div>
)

export default (Headers)