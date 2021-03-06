import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PTable from './table';
import ContentTitleBar from './patientinfo_content_titlebar';
import lodashget from 'lodash.get';
import InfoNorecords from './info_norecords';

class App extends React.Component {


		componentDidMount(){

		}

		componentWillUnmount() {

		}
		onClickNew = ()=>{
			const {curpaientinfo} = this.props;
			this.props.history.push(`/newnursingmeasures/${curpaientinfo._id}/0`);
		}
		onClickViewPrint = ()=>{
			const {curpaientinfo} = this.props;
			this.props.history.push(`/viewprintrecordnursingmeasures/${curpaientinfo._id}`);
		}
		onClickEdit =(record)=>{
			const {curpaientinfo} = this.props;
			this.props.history.push(`/newnursingmeasures/${curpaientinfo._id}/${record._id}`);
		}

		renderTableRecord = (record)=>{
			const {users} = this.props;
			if(!!record){
				return [
					<span key={0}>{lodashget(record,'created_at','')}</span>,
					<span key={1}>评估护士:{lodashget(users[record.usercreatorid],'Staffname','')}</span>,
					<span key={3} onClick={()=>{this.onClickEdit(record);}}>详情</span>
				];
			};
			return [];
		}
  	render() {
			const {curpaientinfo,evaluatenursingmeasureslist,evaluatenursingmeasuress,permissionname} = this.props;
			if(!curpaientinfo){
				return <div>无病人信息</div>
			}
			let allrecords = [];
			for(let i = 0 ;i <  evaluatenursingmeasureslist.length; i ++){
				const record = evaluatenursingmeasuress[evaluatenursingmeasureslist[i]];
				allrecords.push(record);
			}

			const onClickNew = permissionname === '护理部主管'?undefined:this.onClickNew;
			if(allrecords.length === 0){
				return (<InfoNorecords btnTitle="新建护理" onClickNew={onClickNew} />);
			}

	    return (
	      	<div>
						<ContentTitleBar title="护理措施记录" titleNew="新建护理" titleView="查看&打印"
							onClickNew={onClickNew} onClickViewPrint={this.onClickViewPrint} />
						<PTable allrecords={allrecords} renderTableRecord={this.renderTableRecord} pagenumber={5} />
	      	</div>
	    );
  	}
}
const mapStateToProps = ({evaluatenursingmeasures,db},props) => {
		const {evaluatenursingmeasureslist} = evaluatenursingmeasures;
		const {evaluatenursingmeasuress,users} = db;
    return {evaluatenursingmeasureslist,evaluatenursingmeasuress,users};
}
App = withRouter(App);
export default connect(mapStateToProps)(App);
