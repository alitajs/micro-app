import React, { FC, useState, useEffect } from 'react';
import {
  unstable_List as List,
  unstable_Toast as Toast,
  unstable_Switch as Switch,
  unstable_Button as Button,
  unstable_Modal as Modal,
} from '@ant-design/mobile';
const { Item } = List

interface PageProps {

}
const microData = {
  type: 'dev',
  url: 'http://192.168.50.236:8000',
  initData: {

  },
  appId: 'abc',
}
interface MicroApp {
  id: string;
  appid: string;  // 微应用appid
  appsecret: string;
  appName: string;  // 微应用名称
  appDesc: string;
  appIconUrl: string; // 微应用图标
  versionId: string;  // 微应用版本id
}

interface MicroAppProps {
  type: string;
  url?: string;
  initData?: any;
  app?: MicroApp;
}

const openMicroByQrCode = async (data: MicroAppProps) => {
  if (!data || !data.type) {
    Modal.alert({
      title: '提示',
      content: '二维码错误，请扫码后台的二维码或者开发日志中的二维码',
    });
    return;
  }
  if (data.type === 'dev') {
    await window.alita.device.openMicroApp({ appURL: data.url, userData: data.initData });
    return;
  }
  await window.alita.device.openMicroApp({ app: data.app!, userData: data.initData });
}

const Page: FC<PageProps> = () => {
  return (<List
    renderHeader="开发能力"
  >
    <Item onPress={async () => {
      const res = await window.alita.device.scanCode({ onlyFromCamera: false });
      if (res.result) {
        openMicroByQrCode(JSON.parse(res.result))
      }
    }}>
      扫码调试
    </Item>
  </List>)
}

export default Page;
