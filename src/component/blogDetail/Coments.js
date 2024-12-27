import React,{Component} from "react";
import '../styles/blog/BlogDetail.css';
import 'bootstrap/dist/css/bootstrap.css';
class Coments extends Component {
    state = {  } 
    render() { 
        return (
            <div className="Coment-Box">
               <div className="carts">
                {/* 3 carts call */}
               </div>   

                <div className="Coments">

                   
                    <span className="comt"style={{fontWeight:'700',fontSize:'20px'}}>
                        <u> Leave a Comment -</u>
                    </span>
                    <div className="UserInput">
                        <div className="name">
                                Your Name* <input type="text" style={{marginLeft:"1rem"}}/>
                        </div>
                        <br/>
                        <div className="Email">
                                Email * <input type="text" style={{marginLeft:"3.2rem"}}/>
                        </div>
                        <br/>
                        <div className="Coment">
                                Coments*  <input type="text" aria-atomic style={{marginLeft:"2rem"}}/>
                        </div>
                    </div>
                    
                
            </div>
            <button style={{width:'100%',height:'3rem',borderRadius:'5px',backgroundColor:'blue',color:'white',border:'none',fontSize:'20px'}}>
                Submit
            </button>          
            
        </div>
        );
    }
}
 
export default Coments;