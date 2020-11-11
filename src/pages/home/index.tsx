import * as React from 'react'
import {
	unstable_Popover as Popover,
	unstable_SearchBar as SearchBar,
	unstable_Swiper as Swiper,
	unstable_TabBar as TabBar,
	unstable_List as List,
} from '@ant-design/mobile'
import '@/pages/home/index.css'

import HeaderMore from '@/assets/Alipaydemo/add.png'
import ScanCard from '@/assets/Alipaydemo/scan.png'
import PayCard from '@/assets/Alipaydemo/pay.png'
import NavigationCard from '@/assets/Alipaydemo/navigation.png'
import BagCard from '@/assets/Alipaydemo/bag.png'
import ElementCard from '@/assets/Alipaydemo/element.png'
import AllCard from '@/assets/Alipaydemo/all.png'
import AlipayCard from '@/assets/Alipaydemo/alipay.png'
import MounthCard from '@/assets/Alipaydemo/mouth.png'
import ZhuCard from '@/assets/Alipaydemo/feizhu.png'
import MovieCard from '@/assets/Alipaydemo/movie.png'

import {
	ScanCode,
	Help,
	Qr,
	Gift,
	KoubeiFill,
	MoneyCircle,
	Chat,
    Person,
    Alipay
} from '@ant-design/mobile-icons'

const TabBarItem = TabBar.Item

const Item = Popover.Item
const { SwiperItem } = Swiper

export default () => {
	const [visible, setVisible] = React.useState(false)
    const [activeTab,setActiveTab] = React.useState("alipay")
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
						<Item
							key="scan"
							value="scan"
							icon={ScanCode}
							data-seed="logId"
						>
							扫一扫
						</Item>,
						<Item
							key="special"
							value="special"
							badge={{ dot: true }}
							icon={Qr}
						>
							收款
						</Item>,
						<Item key="car" value="car" icon={Help}>
							乘车码
						</Item>,
						<Item
							key="assistant"
							value="assistant"
							badge={{ text: 123 }}
							icon={Gift}
						>
							智能助理
						</Item>,
						<Item key="life" value="life" icon={Help}>
							会生活
						</Item>,
					]}
					align={{
						overflow: { adjustY: 0, adjustX: 0 },
						offset: [-10, 0],
					}}
					onVisibleChange={(visible) => handleVisibleChange(visible)}
					onSelect={(opt) => select(opt)}
				>				
					<img src={HeaderMore} width={60}/>				
				</Popover>
			</div>
			<div className="header_card">
				<div>
					<img src={ScanCard} width={60} />
					<span>扫一扫</span>
				</div>
				<div>
					<img src={PayCard} width={60} />
					付钱/收款
				</div>
				<div>
					<img src={NavigationCard} width={60} />
					出行
				</div>
				<div>
					<img src={BagCard} width={60} />
					卡包
				</div>
			</div>
			<div className="content_card">
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={MounthCard} width={55} />
					<span>口碑</span>
				</div>
				<div>
					<img src={ZhuCard} width={55} />
					<span>飞猪酒店</span>
				</div>
				<div>
					<img src={MovieCard} width={55} />
					<span>电影演出</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={ElementCard} width={55} />
					<span>饿了么</span>
				</div>
				<div>
					<img src={AllCard} width={55} />
					<span>全部</span>
				</div>
			</div>
			<div className="content_list">
				<div className="recent_new">
					<List radius={true}>
						<Item onPress={() => null}>
							<ul>
								<li>
									<span className="recent_new_info">
										付款成功 ¥100
									</span>
									<span className="recent_new_time">
										3小时前
									</span>
								</li>
								<li>
									<span className="recent_new_info">
										你有一张券即将到期
									</span>
									<span className="recent_new_time">
										5小时前
									</span>
								</li>
							</ul>
						</Item>
					</List>
				</div>
				<div className="swiper">
					<Swiper
						className="a-swiper"
						key={Math.random()}
						indicator={true}
						loop={true}
						autoplay={true}
					>
						<SwiperItem>
							<p
								className="swiper-p"
								style={{ background: 'red' }}
							>
								1
							</p>
						</SwiperItem>
						<SwiperItem>
							<p
								className="swiper-p"
								style={{ background: 'blue' }}
							>
								2
							</p>
						</SwiperItem>
						<SwiperItem>
							<p
								className="swiper-p"
								style={{ background: 'green' }}
							>
								3
							</p>
						</SwiperItem>
						<SwiperItem>
							<p
								className="swiper-p"
								style={{ background: '#ccc' }}
							>
								4
							</p>
						</SwiperItem>
					</Swiper>
				</div>
				<div className="easy_pay">
					<div className="easy_pay_header">
						<b>惠支付</b>
					</div>
					<div className="easy_pay_content">
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
            <div className="footer" >
                <div className="demo-tabbar-wrap">
                    <div className="demo-tabbar-2">
                        <TabBar>
                            <TabBarItem
                                activeClassName="active-tab"
                                key="alipay"
                                value="alipay"
                                icon={Alipay}
                                activeIcon={Alipay}
                                title="首页"
                                onPress={() => {
                                    setActiveTab('alipay')
                                 }}
                                active={activeTab === 'alipay'}
                                
                            ></TabBarItem>
                            <TabBarItem
                                activeClassName="active-tab"
                                key="money"
                                value="money"
                                icon={MoneyCircle}
                                activeIcon={MoneyCircle}
                                title="理财"
                                onPress={() => {
                                    setActiveTab('money')
                                 }}
                                active={activeTab === 'money'}
                                
                            ></TabBarItem>
                            <TabBarItem
                                activeClassName="active-tab"
                                key="mouth"
                                value="mouth"
                                icon={KoubeiFill}
                                activeIcon={KoubeiFill}
                                title="口碑"
                                onPress={() => {
                                    setActiveTab('mouth')
                                 }}
                                active={activeTab === 'mouth'}
                            ></TabBarItem>
                            <TabBarItem
                                activeClassName="active-tab"
                                key="info"
                                value="info"
                                icon={Chat}
                                activeIcon={Chat}
                                title="消息"
                                onPress={() => {
                                    setActiveTab('info')
                                 }}
                                active={activeTab === 'info'}
                            ></TabBarItem>
                            <TabBarItem
                                activeClassName="active-tab"
                                key="mine"
                                value="mine"
                                icon={Person}
                                activeIcon={Person}
                                title="我的"
                                onPress={() => {
                                    setActiveTab('mine')
                                 }}
                                active={activeTab === 'mine'}
                            ></TabBarItem>
                        </TabBar>
                    </div>
                </div>
            </div>
		</div>
	)
}
