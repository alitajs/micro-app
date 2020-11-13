import * as React from 'react'
import {
	unstable_Popover as Popover,
	unstable_SearchBar as SearchBar,
	unstable_Swiper as Swiper,
	unstable_List as List,
} from '@ant-design/mobile'
import '@/pages/home/index.less'

import HeaderMore from '@/assets/alipayIcon/add.png'
import ScanCard from '@/assets/alipayIcon/scan.png'
import PayCard from '@/assets/alipayIcon/pay.png'
import NavigationCard from '@/assets/alipayIcon/navigation.png'
import BagCard from '@/assets/alipayIcon/bag.png'
import ElementCard from '@/assets/alipayIcon/element.png'
import AllCard from '@/assets/alipayIcon/all.png'
import MounthCard from '@/assets/alipayIcon/mouth.png'
import ZhuCard from '@/assets/alipayIcon/feizhu.png'
import MovieCard from '@/assets/alipayIcon/movie.png'

import {
	ScanCode,
	Help,
	Qr,
    Gift,
    Location
} from '@ant-design/mobile-icons'
const PopoverItem = Popover.Item
const { SwiperItem } = Swiper
const { Item } = List

export default () => {
	const [visible, setVisible] = React.useState(false)
    const cardListData = [
      {
        src:ScanCard,
        describe:"扫一扫"
      },
      {
        src:PayCard,
        describe:"付钱/收款"
      },
      {
        src:NavigationCard,
        describe:"出行"
      },
      {
        src:BagCard,
        describe:"卡包"
      }
    ];
    const swiperItemData = [
      {
        background:"red",
        content:"1"
      },
      {
        background:"blue",
        content:"2"
      },
      {
        background:"green",
        content:"3"
      },
      {
        background:"#ccc",
        content:"4"
      }
    ];
    const labelListData = [
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:MounthCard,
        describe:"口碑"
      },
      {
        src:ZhuCard,
        describe:"飞猪酒店"
      },
      {
        src:MovieCard,
        describe:"电影演出"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:ElementCard,
        describe:"饿了么"
      },
      {
        src:AllCard,
        describe:"全部"
      }
    ];
    const popoverItemData = [
      {
        value:"scan",
        icon:ScanCode,
        content:"扫一扫",
        badge:""
      },
      {
        value:"collection",
        icon:Qr,
        content:"收款",
        badge:"true"
      },
      {
        value:"car",
        icon:ScanCode,
        content:"收款",
        badge:""
      },
      {
        value:"assistant",
        icon:Gift,
        content:"智能助理",
        badge:""
      },
      {
        value:"life",
        icon:Location,
        content:"会生活",
        badge:""
      },
    ]
	const handleVisibleChange = (visible: boolean) => {
        console.log(visible);    
		setVisible(visible)
	}
	const select = (opt: any) => {
		setVisible(false)
		console.log('the visible', visible)
    }
    
	return (
		<div className="container" >
            <div className="containerContent">
                <div className="header">
                    <div className="weather">福州<br/>多云</div>
                    <SearchBar
                        placeholder="双十一全场五折起"
                        showCancelButton
                        borderColor="green"
                        maxLength={24}
                    />
                    <Popover
                        mask
                        visible={visible}
                        overlay={[
                            popoverItemData.map((value)=>(
                                <PopoverItem
                                    key={Math.random()}
                                    value={value.value}
                                    icon={value.icon}>
                                        {value.content}
                                </PopoverItem>
                            ))
                        ]}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                        }}
                        onVisibleChange={(visible) => handleVisibleChange(visible)}
                        onSelect={(opt) => select(opt)}
                    >				
                        <img src={HeaderMore} width={50}/>				
                    </Popover>
                </div>
                <div className="headerCard">
                    {cardListData.map((value) =>(
                            <div key={Math.random()}>
                                <img src={value.src} width={60} />
                                <span>{value.describe}</span>
                            </div>
                    ))}			
                </div>
                <div className="contentCard">
                    {labelListData.map((value)=>(
                        <div key={Math.random()}>
                            <img src={value.src} width={55} />
                            <span>{value.describe}</span>
                        </div>
                    ))}
                </div>
                <div className="contentList">
                    <div className="recentNew">
                        <List radius={true}>
                            <Item onPress={() => null}>
                                <ul>
                                    <li>
                                        <span className="recentNewInfo">
                                            付款成功 ¥100
                                        </span>
                                        <span className="recentNewTime">
                                            3小时前
                                        </span>
                                    </li>
                                    <li>
                                        <span className="recentNewInfo">
                                            你有一张券即将到期
                                        </span>
                                        <span className="recentNewTime">
                                            5小时前
                                        </span>
                                    </li>
                                </ul>
                            </Item>
                        </List>
                    </div>
                    <div className="swiper">
                        <Swiper
                            className="aSwiper"				
                            indicator={true}
                            loop={true}
                            autoplay={true}
                        >   
                            {swiperItemData.map((value)=>(
                                <SwiperItem key={Math.random()}>
                                    <p
                                        className="swiperP"
                                        style={{ background: value.background }}
                                    >
                                        {value.content}
                                    </p>
                                </SwiperItem>
                            ))}
                        </Swiper>
                    </div>
                    <div className="easyPay">
					<div className="easyPayHeader">
						<b>惠支付</b>
					</div>
					<div className="easyPayContent">
						<div>
							<b>天天抽奖</b>
							<br />
							今日限量免费抽
						</div>
						<div>
							<b>邀好友</b>
							<b>赚红包</b>
							<br />
							每天可赚100个
						</div>
					</div>
				</div>
			    </div>
            </div>
		</div>
	)
}
