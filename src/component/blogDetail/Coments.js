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

                <div className="tag ">                
                {/* <Badge variant="primary" className="mr-2">
                    Primary
                </Badge> */}
                 <b>Tags:</b>
                <a href="#" class="badge badge-primary">mpu6050</a>
                <a href="#" class="badge badge-secondary">Arduino</a>
                <a href="#" class="badge badge-success">project</a>
                <a href="#" class="badge badge-danger">school</a>
                <a href="#" class="badge badge-warning">angle</a>
                <a href="#" class="badge badge-info">maping</a>
                </div>
                <span className="comt"style={{fontWeight:'700',fontSize:'20px'}}>
                   <u> Leave a Comment -</u>
                </span>

                <div className="name">
                        Your Name* <input type="text" />
                </div>
                <div className="Email">
                        Email * <input type="text" />
                </div>
                <div className="Coment">
                        Coments*  <input type="text" aria-atomic/>
                </div>
                
            </div>
            <button style={{width:'100%',height:'3rem',borderRadius:'5px',backgroundColor:'blue',color:'white',border:'none',fontSize:'20px'}}>
                Submit</button>                    
            </div>
        );
    }
}
 
export default Coments;