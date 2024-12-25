import React,{Component} from "react";
// import "../styles/blog/BlogList.css";
import "../../component/styles/blog/BlogList.css";

import CardList from "../../component/blogList/CardList";
import SearchBlog from "../../component/searchBlog/SearchBlog";
import PaginationApp from "../../component/Pagination/PaginationApp";
import SearchSlide from "../../component/searchBlog/SearchSlide";
class BlogList extends Component {
    state = {  } 
    render() { 
        return (
            <>           
            <div className="container-fluid bloglistFirstPage " style={{width:"100%"}}>
               
                <div style={{width:'100%', color:'#333333'}}>
                <div className="row">
                    <div className="col-12">
                    <h1 className="fly-M text-center text-md-start mb-3">FlyRobo Blog</h1>
                    <hr className="mb-4" />
                    </div>
                </div>
                    {/* <hr style={{width:"100%",marginLeft:"0px",marginRight:"0px",marginTop:"-1px",marginBottom:"35px"}}/> */}
                    <div className="d-flex cardMainList justify-content-between">
                    <div >
                        < CardList/>
                    </div>
                    
                    <div className="blogSearch md-8">
                        <SearchBlog />
                    </div>
                    
                    
                    </div>
                </div>   
                <div className="pagination "style={{width:"76.1%",backgroundColor:"#9bd4aa"}}>
                <SearchSlide/>
                <div id="SlideNo">
                    
                     Showing 1 to 10 of 146 (15 Pages)
                </div>
                    
                        {/* <PaginationApp/> */}
                    </div> 
            </div>
            </>

        );
    }
}
 
export default BlogList;