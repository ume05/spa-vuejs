import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */ "./views/Home.vue");
const Users = () => import(/* webpackChunkName: "Users" */ "./views/Users.vue");
const UsersPosts = () => import(/* webpackChunkName: "UsersPosts" */ "./views/UsersPosts.vue");
const UsersProfile = () => import(/* webpackChunkName: "UserProfile" */ "./views/UsersProfile.vue");
const HeaderHome = () => import(/* webpackChunkName: "HeaderHome" */ "./views/HeaderHome.vue");
const HeaderUsers = () => import(/* webpackChunkName: "HeaderUsers" */ "./views/HeaderUsers.vue");

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        header:HeaderHome
      },
      // beforeEnter(to, from, next) {
      //   next(false);
      // }
    },
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      },
      children: [
        {
          path: "posts",
          component: UsersPosts
        },
        {
          path: "profile",
          component: UsersProfile,
          name: "users-id-profile"
        }
      ]
    },
    {
      path: '*',
      redirect: {
        path: '/'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      this.app.$root.$once('triggerScroll', () => {
        let position = {x: 0, y: 0}
        if(savedPosition) {
          position = savedPosition
        }
        if(to.hash) {
          position = {
            selector: to.hash,
            offset: {x: 0, y: 100}
          }
        }
        resolve(position)
      })
    })
    // return { x: 0 , y: 0 }
  }
})