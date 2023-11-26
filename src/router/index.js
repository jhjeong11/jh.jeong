import ListView from '@/components/ListView'
import DetailView from '@/components/DetailView'

const routes = [
    {
        path: '/',
        name: 'ListView',
        component: ListView
    },
    {
        path: '/detail',
        name: 'DetailView',
        component: DetailView
    },
];

export default routes;