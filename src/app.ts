import { ResponseError } from 'umi-request';
import { NavBarProps, TitleListItem, NavBarListItem, TabBarProps, TabBarListItem } from 'alita';

import HomeGary from './assets/demoIcon/home.png';
import HomeBlue from './assets/demoIcon/home1.png';
import ListGary from './assets/demoIcon/list.png';
import ListBlue from './assets/demoIcon/list1.png';
import Alipay from './assets/alipayIcon/alipay.png';
import AlipayBlue from './assets/alipayIcon/alipayblue.png';
import Money from './assets/alipayIcon/money.png';
import MouthGrey from './assets/alipayIcon/mouthgrey.png';
import MouthBlue from './assets/alipayIcon/mouthblue.png';
import MoneyBlue from './assets/alipayIcon/moneyblue.png';
import Mouth from './assets/alipayIcon/mouth.png';
import Chat from './assets/alipayIcon/chat.png';
import ChatBlue from './assets/alipayIcon/chatblue.png';
import Person from './assets/alipayIcon/person.png';
import PersonBlue from './assets/alipayIcon/personblue.png';
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
  }
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
  {
    pagePath: '/home',
    text: '首页',
    iconPath: Alipay,
    selectedIconPath: AlipayBlue,
    title: '首页',
  },
  {
    pagePath: '/money',
    text: '理财',
    iconPath: Money,
    selectedIconPath: MoneyBlue,
    title: '理财',
    iconSize: '',
    badge: ''
  },
  {
    pagePath: '/koubei',
    text: '口碑',
    iconPath: MouthGrey,
    selectedIconPath: MouthBlue,
    title: '口碑',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/chat',
    text: '消息',
    iconPath: Chat,
    selectedIconPath: ChatBlue,
    title: '消息',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/mine',
    text: '我的',
    iconPath: Person,
    selectedIconPath: PersonBlue,
    title: '我的',
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
