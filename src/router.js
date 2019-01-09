// 路由文件
import VueRouter from "vue-router"

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcartContainer from './components/tabbar/ShopcartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// 创建一个路由对象
let router = new VueRouter({
    routes:[
      {path: '/home',component: HomeContainer},
      {path: '/member',component: MemberContainer},
      {path: '/shopcart',component: ShopcartContainer},
      {path: '/search',component: SearchContainer},
      {path: '/home/newslist',component: NewsList},
      {path: '/home/newsinfo/:id',component: NewsInfo}
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类,改为mui已有的类名
})

export default router