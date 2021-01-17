

import Header from "./Header";
import '../style/main.css';


function Main(){
    return (
        <div className="container-fluid px-0">
            <Header></Header>
            <div className="content">
                <div className="video">
                    <div className="embed-responsive embed-responsive-4by3">
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/CghQjc2vDrY" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                 </div>
                 </div>
                </div>
        </div>
    )
    ;
}


export default Main;