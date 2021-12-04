import {RouteProps} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CategoryList from '../pages/category/List';
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
        name: 'categories.list',
        label: 'Editar Categorias',
        path: '/categories/:id/edit',
        component: CategoryList,
        exact: true
    },
    {
        name: 'categories.list',
        label: 'Editar Nome',
        path: '/categories/:id/edit/:name',
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
