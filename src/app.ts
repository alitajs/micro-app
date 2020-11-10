import { ResponseError } from 'umi-request';
import { NavBarProps, TitleListItem, NavBarListItem, TabBarProps, TabBarListItem } from 'alita';

import HomeGary from './assets/demoIcon/home.png';
import HomeBlue from './assets/demoIcon/home1.png';
import ListGary from './assets/demoIcon/list.png';
import ListBlue from './assets/demoIcon/list1.png';


export const request = {
  prefix: '',
  method: 'post',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(error);
  },
};

const titleList: TitleListItem[] = [
  {
    pagePath: '/',
    title: '首页',
  },
  {
    pagePath: '/list',
    title: '列表',
  },
  {
    pagePath: '/settings',
    title: '设置',
  },
];
const navList: NavBarListItem[] = [];
const navBar: NavBarProps = {
  navList,
  fixed: true,
  onLeftClick: () => {
    // router.goBack();
  },
};
const tabList: TabBarListItem[] = [
  {
    pagePath: '/',
    text: '首页',
    iconPath: HomeGary,
    selectedIconPath: HomeBlue,
    title: '首页',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/dev',
    text: '开发',
    iconPath: ListGary,
    selectedIconPath: ListBlue,
    title: '开发',
    iconSize: '',
    badge: '',
  },
];

const tabBar: TabBarProps = {
  color: `#999999`,
  selectedColor: '#00A0FF',
  borderStyle: 'white',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};
