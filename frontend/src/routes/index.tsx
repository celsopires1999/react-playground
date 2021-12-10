import {RouteProps} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CategoryList from '../pages/category/PageList';
import CategoryCreate from '../pages/category/PageForm';
import MemberList from '../pages/member/PageList';
import GenreList from '../pages/genre/PageList';
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
        component: CategoryCreate,
        exact: true
    },
    {
        name: 'members.list',
        label: 'Listar Membros de Elenco',
        path: '/members',
        component: MemberList,
        exact: true
    },
    {
        name: 'genres.list',
        label: 'Listar Gêneros',
        path: '/genres',
        component: GenreList,
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
