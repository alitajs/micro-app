// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'umi';
import { plugin } from '../core/umiExports';

export default (props) => {
  const layoutConfig = plugin.applyPlugins({
    key: 'mobileLayout',
    type: ApplyPluginsType.modify,
    initialValue: {},
  }) || {};
  return React.createElement(require('/Users/xiaohuoni/Desktop/micro-demo/node_modules/@alitajs/layout/lib/layout/index.js').default, {
    layoutConfig,
    hasKeepAlive: false,
    ...props,
    hideNavBar:false,
  })
}
