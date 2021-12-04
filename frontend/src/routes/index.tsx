import {RouteProps} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CategoryList from '../pages/category/PageList';
import Playground from '../pages/Playground';

export interface MyRouteProps extends RouteProps {
    name: string,
    label: string
}

const routes: MyRouteProps[] = [
    {
        name: 'dashboard',
        label: 'Dashboard',
        path: '/',
        component: Dashboard,
        exact: true
    },
    {
        name: 'categories.list',
        label: 'Listar Categorias',
        path: '/categories',
        component: CategoryList,
        exact: true
    },
    {
        name: 'categories.create',
        label: 'Criar Categoria',
        path: '/categories/create',
        component: CategoryList,
        exact: true
    },
    {
        name: 'playground',
        label: 'Just Playing Around',
        path: '/playground',
        component: Playground,
        exact: true
    },
];

export default routes;
