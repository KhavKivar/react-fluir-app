

import Header from "./Header";
import Video from "./Video"
import '../style/main.css';


function Main(){
    return (
        <div className="container-fluid px-0">
            <Header></Header>
            <div className="content">
                <div className="video">
                    <div className="embed-responsive embed-responsive-4by3">
                        <Video></Video>
                 </div>
                </div>
        </div>
        </div>
    )
    ;
}


export default Main;