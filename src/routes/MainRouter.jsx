import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    }
])
export default MainRouter;