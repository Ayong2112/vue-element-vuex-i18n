const routes = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['../view/home/home'], resolve)
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/view/home/home'], resolve)
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: resolve => require(['@/components/HelloWorld'], resolve)
  },
]
export default routes
