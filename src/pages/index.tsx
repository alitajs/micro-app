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

const Page: FC<PageProps> = () => {
  const [appList, setApplist] = useState<any>([]);

  return (<List
    renderHeader="原生能力"
  >
    <Item onPress={async () => {
      const res = await window.alita.device.getUserData();
      Modal.alert({
        title: '获取原生参数',
        content:
          JSON.stringify(res)
      })
    }}>
      获取原生参数
    </Item>
    <Item onPress={async () => {
      try {
        const res = await window.alita.device.scanCode({ onlyFromCamera: false });
        Modal.alert({
          title: '扫码解析',
          content:
            JSON.stringify(res),
        })
      } catch (error) {
        Modal.alert({
          title: '扫码解析错误',
          content:
            JSON.stringify(error),
        })
      }
      // Modal.alert({
      //   title: '扫码解析',
      //   content:
      //     JSON.stringify(res),
      // })
    }}>
      扫码解析
    </Item>
    <Item onPress={async () => {
      const res = await window.alita.media.chooseImage();
      Modal.alert({
        title: '获取相册',
        content:
          JSON.stringify(res),
      })
    }}>
      获取相册
    </Item>
    <Item onPress={async () => {
      const res = await window.alita.device.platform();
      Modal.alert({
        title: '获取系统信息',
        content:
          JSON.stringify(res),
      })
    }}>
      获取系统信息
    </Item>
    <Item onPress={async () => {
      const res = await window.alita.device.openWeb(`https://alitajs.com/`);
      Modal.alert({
        title: '打开web页面',
        content:
          JSON.stringify(res),
      })
    }}>
      打开web页面
    </Item>
    <Item onPress={async () => {
      const res = await window.alita.file.openDocument({ url: `https://alitajs.com/assets/pdf/2020%E5%B9%B4alita%E5%BE%AE%E5%BA%94%E7%94%A8%E6%96%B9%E6%A1%88%E4%BB%8B%E7%BB%8D.pdf` });
      Modal.alert({
        title: '打开文件',
        content:
          JSON.stringify(res),
      })
    }}>
      打开文件
    </Item>
    <Item onPress={async () => {
      const res = await window.alita.file.saveFile({ url: `https://alitajs.com/assets/pdf/2020%E5%B9%B4alita%E5%BE%AE%E5%BA%94%E7%94%A8%E6%96%B9%E6%A1%88%E4%BB%8B%E7%BB%8D.pdf` });
      Modal.alert({
        title: '下载保存文件到本地',
        content:
          JSON.stringify(res),
      })
    }}>
      下载保存文件到本地
    </Item>
    <Item onPress={async () => {
      const res = await window.alita.device.fetchMicroAppList();
      setApplist(res.list)
      Modal.alert({
        title: '获取微应用列表',
        content:
          JSON.stringify(res),
      })
    }}>
      获取微应用列表
    </Item>
    <Item onPress={async () => {
      if (!appList || !appList[0]) {
        Modal.alert({
          title: '打开微应用',
          content: '请先获取微应用列表'
        })
        return;
      }
      const res = await window.alita.device.openMicroApp({ app: {}, userData: {} });
      Modal.alert({
        title: '打开微应用',
        content:
          JSON.stringify(res),
      })
    }}>
      打开微应用
    </Item>
  </List>)
}

export default Page;