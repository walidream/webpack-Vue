import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 *  路由懒加载,webpackChunkName可以分组
 *  */

const Bp = () => import(/* webpackChunkName: "Bp"*/ 'Components/bp/bp.vue');
const Layer = () => import(/* webpackChunkName: "Bp"*/ 'Components/layer/layer.vue');

const routes = [
  {path: '/bp', component: Bp},
  {path: '/layer', component: Layer},
];

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});


export default router;
