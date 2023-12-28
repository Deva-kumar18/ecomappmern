import {createBrowserRouter} from 'react-router-dom'
import LayoutPage from './Pages/LayoutPage/LayoutPage'
import Users from './Pages/UserDetails/Users'
import AddNewProduct from './Pages/AddNewProduct/AddNewProduct'
import AddNewUser from './Pages/AddNewUser/AddNewUser'
import OrderDetails from './Pages/OrderDetails/OrderDetails'
import OrderList from './Pages/OrderList/OrderList'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import ProductList from './Pages/ProductList/ProductList'
import UserList from './Pages/UserList/UserList'
import Admin from './Pages/Admin/Admin'



export const router = createBrowserRouter([{
    path:"/",
    element:<LayoutPage/>,
    children:[{
        path:"/admin/users/:userId",
        element:<Users/>
    },{
        path:"/admin/products/new",
        element:<AddNewProduct/>
    },
    {
        path:"/admin/users/new",
        element:<AddNewUser/>
    },
    {
        path:"/admin/orders/:orderId",
        element:<OrderDetails/>
    },
    {
        path:"/admin/orders",
        element:<OrderList/>
    },
    {
        path:"/admin/products/:productId",
        element:<ProductDetails/>
    },
    {
        path:"/admin/products",
        element:<ProductList/>
    },
    {
        path:"/admin/users",
        element:<UserList/>
    },
{path:"/admin",
element:<Admin/>}]
}])