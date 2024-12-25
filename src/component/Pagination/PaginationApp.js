import React,{Component} from "react";
// import Pagination from "./Pagination";
import Pagination from "./PaginationPage";
import SearchBlog from "../searchBlog/SearchBlog";

const PaginationApp = ()=>{
    
      const paginationData = [
        { id: 1, },
        { id: 2, },
        { id: 3,},
        { id: 4,},
        { id: 5,},
        // { id: 6,title:<SearchBlog/>},
        
        // { id: 7, title: "Testing React Applications" },
        // { id: 8, title: "Optimizing React Performance", content: "Optimizing React performance involves techniques like code splitting, memoization, and using the React DevTools. These practices can significantly improve the speed and efficiency of your React applications." },
      ];

      return (
        <>        <div className="app">
          {/* <h1>React Learning Journey</h1> */}
          <Pagination data={paginationData} />
        </div>
        
        </>

        
      );
    };
export default PaginationApp;