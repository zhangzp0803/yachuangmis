import React from 'react';
import { notification, Icon } from 'antd';

// import moment from 'moment';
import { DatePicker } from 'antd';
//https://github.com/fkhadra/react-toastify
const popConfirmSign = (initmoment,callback)=>{
	notification.open({
		placement: 'topLeft',
		duration:null,
		message: '确定需要签名吗,请选择签名日期',
		description: <div>
			<DatePicker
				defaultValue={initmoment}
				format="YYYY-MM-DD HH:mm:ss"
				showTime
				onChange={(date, dateString)=>{
					initmoment = date;
				}}
				onPanelChange={this.handlePanelChange}
			/>
		</div>,
		icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
		onClose:()=>{
			console.log(`curdate-->${initmoment.format('YYYY-MM-DD HH:mm:ss')}`)
			callback(initmoment);
		}
	});
}

export default popConfirmSign;
//
// class PopconfirmSign extends React.Component {
// 		constructor(props) {
// 				super(props);
// 				this.state = {
// 					singedtime:moment()
// 				}
// 		}
//
// 		componentDidMount(){
//
// 		}
//
// 		componentWillUnmount() {
//
// 		}
//
// 		showModal = () => {
// 			let curdate = moment();
// 			notification.open({
// 				placement: 'topLeft',
// 				duration:null,
// 		    message: '确定需要签名吗',
// 		    description: <div>
// 					<DatePicker
// 		        mode='time'
// 		        showTime
// 		        onChange={(date, dateString)=>{
// 							curdate = date;
// 						}}
// 		        onPanelChange={this.handlePanelChange}
// 		      />
// 				</div>,
// 		    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
// 				onClose:()=>{
// 					console.log(`curdate-->${curdate.format('YYYY-MM-DD HH:mm:ss')}`)
// 					this.props.onConfirm(curdate);
// 				}
// 		  });
// 	  }
//
// 		render() {
// 			let MYY = '';
// 			let MMM = '';
// 			let MDD = '';
// 			let MHH = '';
// 			let Mmm = '';
// 			const Staffname = `张三`;
//
// 			const momenttime = moment();
// 			MYY = momenttime.format('YYYY');
// 			MMM = momenttime.format('MM');
// 			MDD = momenttime.format('DD');
// 			MHH = momenttime.format('HH');
// 			Mmm = momenttime.format('mm');
// 			return (
// 				<tr onClick={this.showModal}>
// 			      <td>主管部门签字：<input type="text" readOnly value={Staffname}/>
// 					  </td>
// 			      <td className="w-50">日期：
// 			          <input type="text" readOnly value={MYY}/>年
// 			          <input type="text" readOnly value={MMM}/>月
// 			          <input type="text" readOnly value={MDD}/>日
// 			          <input type="text" readOnly value={MHH}/>:
// 			          <input type="text" readOnly value={Mmm}/>
// 			      </td>
// 			    </tr>
// 						);
// 		}
//
// }
//
//
// export default PopconfirmSign;
