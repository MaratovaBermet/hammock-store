import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Sales from "../pages/Sales";
import Delivery from "../pages/Delivery";
import Blog from "../pages/Blog";
import Post from "../pages/Post";


const Routers = () => {
    return (
   <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/catalog' element={<Catalog/>}/>
           <Route path='/catalog/:productId' element={<Detail/>}/>
           <Route path='/sales' element={<Sales/>}/>
           <Route path='/deliver' element={<Delivery/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path='/blog/:postId' element={<Post/>}/>
       </Routes>
   </BrowserRouter>
)
};

export default Routers