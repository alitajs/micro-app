import * as React from 'react'
import {
  unstable_List as List,
  unstable_Avatar as Avatar
} from '@ant-design/mobile'
import '@/pages/mine/index.less'
import VIPCard from '@/assets/alipayIcon/vip.png'
import BillCard from '@/assets/alipayIcon/bill.png'
import AssetCard from '@/assets/alipayIcon/asset.png'
import RemainingCard from '@/assets/alipayIcon/remaining.png'
import RemainCard from '@/assets/alipayIcon/remain.png'
import SpendCard from '@/assets/alipayIcon/spend.png'
import BankCard from '@/assets/alipayIcon/bankcard.png'
import SesameCard from '@/assets/alipayIcon/sesame.png'
import InsuranceCard from '@/assets/alipayIcon/insurance.png'
import EachOtherCard from '@/assets/alipayIcon/eachother.png'
import BorrowCard from '@/assets/alipayIcon/borrow.png'
import Bank from '@/assets/alipayIcon/bank.png'
import PublicWelfareCard from '@/assets/alipayIcon/publicwelfare.png'
import SmallProgramCard from '@/assets/alipayIcon/smallprogram.png'
import ServiceCard from '@/assets/alipayIcon/service.png'

const { Item } = List
export default () => {
    const listData = {   
        listHeader:[
            {
              extra:"5积分即将消失",
              thumb:VIPCard,
              itemContent:"支付宝会员"
            }
        ],
        listTop:[
          {
            extra:"",
            thumb:BillCard,
            itemContent:"账单"
          },
          {
            extra:"资产安全保障中",
            thumb:AssetCard,
            itemContent:"总资产"
          },
          {
            extra:"0.00",
            thumb:RemainingCard,
            itemContent:"余额"
          },
          {
            extra:"",
            thumb:RemainCard,
            itemContent:"余额宝"
          },
          {
            extra:"",
            thumb:SpendCard,
            itemContent:"花呗"
          },
          {
            extra:"",
            thumb:BankCard,
            itemContent:"银行卡"
          },
        ],
        listMiddle:[
          {
            extra:"",
            thumb:SesameCard,
            itemContent:"芝麻信用"
          },
          {
            extra:"",
            thumb:InsuranceCard,
            itemContent:"蚂蚁保险"
          },
          {
            extra:"你收到一封信",
            thumb:EachOtherCard,
            itemContent:"相互宝"
          },
          {
            extra:"",
            thumb:BorrowCard,
            itemContent:"借呗"
          },
          {
            extra:"",
            thumb:Bank,
            itemContent:"网商银行"
          }
        ],
        listBottom:[
          {
            extra:"",
            thumb:SmallProgramCard,
            itemContent:"我的小程序"
          },
          {
            extra:"",
            thumb:PublicWelfareCard,
            itemContent:"我的公益"
          },
          {
            extra:"",
            thumb:ServiceCard,
            itemContent:"我的客服"
          }
        ],
    }
    
    return (
        <div>
            <div className="container">
                <div className="containerConter">
                    <div className="headerInfo">
                        <Avatar img="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608631024,509905351&fm=26&gp=0.jpg" name="佘智伟" description="173******80" />
                        <p>&gt;</p>
                    </div>
                    <div className="listOption">
                        <div className="listStyle"> 
                            {listData.listHeader.map((value)=>(
                                <List    
                                    key={Math.random()}      
                                >
                                    <Item thumb={value.thumb} extra={value.extra}  arrow="horizontal">
                                        {value.itemContent}
                                    </Item>
                                </List>
                            ))}
                        </div>
                        <div className="listStyle"> 
                            {listData.listTop.map((value)=>(
                                <List    
                                    key={Math.random()}       
                                >
                                    <Item thumb={value.thumb} extra={value.extra}  arrow="horizontal">
                                        {value.itemContent}
                                    </Item>
                                </List>
                            ))}
                        </div>
                        <div className="listStyle"> 
                            {listData.listMiddle.map((value)=>(
                                <List    
                                    key={Math.random()}       
                                >
                                    <Item thumb={value.thumb} extra={value.extra}  arrow="horizontal">
                                        {value.itemContent}
                                    </Item>
                                </List>
                            ))}
                        </div>
                        <div className="listStyle"> 
                            {listData.listBottom.map((value)=>(
                                <List    
                                    key={Math.random()}       
                                >
                                    <Item thumb={value.thumb} extra={value.extra}  arrow="horizontal">
                                        {value.itemContent}
                                    </Item>
                                </List>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}