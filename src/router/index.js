import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import entity from '@/components/entity'
import entitySon from '@/components/entitySon'
import triple from '@/components/triple'
import questionAnswer from '@/components/questionAnswer'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entity',
      component: entity
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/qa',
      name: 'questionAnswer',
      component: questionAnswer
    },
    {
      path: '/entity',
      name: 'entity',
      component: entity
    },
    {
      path: '/entiySon',
      name: 'entitySon',
      component: entitySon 
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/triple',
      name: 'triple',
      component: triple
    }
  ]
})
