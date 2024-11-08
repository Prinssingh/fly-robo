import React,{Component} from "react";
import CardList from "../../component/blogList/CardList";
import SearchBlog from "../../component/searchBlog/SearchBlog";
import Pagination from "../../component/Pagination/Pagination";
class BlogList extends Component {
    state = {  } 
    render() { 
        return (
<<<<<<< HEAD
            <div className="" >
=======
            <div className=" " >
>>>>>>> shubhashni
               <div className="d-flex justify-content-between">
                <div >
                    < CardList/>
                </div>
                <div className="blogSearch ">
                    < SearchBlog/>
                </div>
                <div className="pagination ">
                    {/* <Pagination/> */}
                </div>
                </div>
         </div>
        );
    }
}
 
export default BlogList;