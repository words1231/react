import loadable from '@loadable/component';

const Demo = loadable(()=>import('./Demo'));
const Demo1 = loadable(()=>import('./Demo1'));
const Demo2 = loadable(()=>import('./Demo2'));
const Demo3 = loadable(()=>import('./Demo3'));
const Demo4 = loadable(()=>import('./Demo4'));
const Demo5 = loadable(()=>import('./Demo5'));

export default [
    {
      id: 1,
      path: "/demo",
      component: Demo,
      text: "首页",
    },
    {
        id: 2,
        path: "/demo1",
        component: Demo1,
        text: "首页1",
      },
      {
        id: 3,
        path: "/demo2",
        component: Demo2,
        text: "首页2",
      },
      {
        id: 4,
        path: "/demo3",
        component: Demo3,
        text: "首页3",
      },
      {
        id: 5,
        path: "/demo4",
        component: Demo4,
        text: "首页4",
      },
      {
        id: 6,
        path: "/demo5",
        component: Demo5,
        text: "首页5",
      },
  ];
  