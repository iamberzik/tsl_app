import {createRouter, createWebHistory} from 'vue-router'
import UsersView from "@/views/UsersView";
import UserView from "@/views/UserView";
import NotFoundView from "@/views/NotFoundView";
import loginView from "@/views/LoginView";
import store from "@/store";
import guestView from "@/views/GuestView";

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: () => { return '/users' },
    meta: {
      private: false
    }
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
    meta: {
      private: true
    }
  },
  {
    path: '/users/:id/edit',
    name: 'profileEdit',
    component: UserView,
    meta: {
      private: true
    }
  },
  {
    path: '/users/create',
    name: 'profileCreate',
    component: UserView,
    meta: {
      private: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: loginView,
    meta: {
      private: false
    }
  },
  {
    path: '/guest',
    name: 'guest',
    component: guestView,
    meta: {
      private: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name:'notFound',
    component: NotFoundView,
    meta: {
      private: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.private)) {

    if (store.getters.isUserAuth) {
      next();
    } else {
      next("/guest");
    }
  } else {
    next();
  }
});

export default router

