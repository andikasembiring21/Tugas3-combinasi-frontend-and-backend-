import { createRouter , createWebHistory } from 'vue-router'; 

const routes = [
    // {
    //     path: '/',
    //     name: 'transaksi.index',
    //     component:()=> import('../views/transaksi/index.vue')
    // },
    // {
    //     path: '/create',
    //     name: 'transaksi.create',
    //     component:()=> import('../views/transaksi/create.vue')
    // },
    // {
    //     path: '/edit/:id',
    //     name: 'transaksi.edit',
    //     component:()=> import('../views/transaksi/edit.vue')
    // },
    // {
    //     path: '/hello',
    //     name: 'components.HelloWorld',
    //     component:()=> import('../components/HelloWorld.vue')
    // },
    // {
    //     path: '/post',
    //     name: 'transaksi.post',
    //     component:()=> import('../views/transaksi/post.vue')
    // },
    // {
    //     path: '/realtimechat',
    //     name: 'transaksi.realtimechat',
    //     component:()=> import('../views/transaksi/realtimechat.vue')
    // },
    // {
    //     path : '/tugas2',
    //     name : 'transaksi.tugas2',
    //     component:()=> import('../views/transaksi/tugas2.vue')
    // },
    {
        path : '/tugas3',
        name : 'transaksi.tugas3',
        component:()=> import('../views/transaksi/tugas3.vue')
    },
    {
        path : '/tugas4',
        name : 'transaksi.tugas4',
        component:()=> import('../views/transaksi/tugas4.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;