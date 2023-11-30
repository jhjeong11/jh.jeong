import ListView from '@/components/ListView'
import DetailView from '@/components/DetailView'

const routes = [
    {
        path: '/',
        name: 'ListView',
        component: ListView
    },
    {
        path: '/detail/:id',
        name: 'detailView',
        component: DetailView
    },
];

export default routes;