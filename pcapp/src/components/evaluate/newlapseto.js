import React from 'react';
import { connect } from 'react-redux';
import lodashget from 'lodash.get';
import { Layout } from 'antd';
// import TitleDetail from '../patientinfo/patientinfo_content_title_detail';
// import ContentTitleBar from '../patientinfo/patientinfo_content_titlebar';
import PageForm from './form_lapseto_barden';
import {getdefaultlapseto_barden} from '../../util';
import {createformreviewlapseto_request,editformreviewlapseto_request} from '../../actions';

const { Header } = Layout;

class App extends React.Component {


		componentDidMount(){

		}

		componentWillUnmount() {

		}

		onClickSubmit = (values)=>{
			const {curpaientinfo,isnew,curformreviewlapseto} = this.props;
			if(isnew){
				values.userpatientid = curpaientinfo._id;
				this.props.dispatch(createformreviewlapseto_request(values));
			}
			else{
				let newcurformreviewlapseto = {...curformreviewlapseto,...values};
				this.props.dispatch(editformreviewlapseto_request(newcurformreviewlapseto));
			}
		}
  	render() {
			const {curpaientinfo,db,curformreviewlapseto,isnew,app,userlogin} = this.props;
			if(!curpaientinfo){
				return <div>无病人信息</div>
			}
			let formname = 'NewLapsetoForm';
			let formvalues;
			if(!isnew){
				formvalues = curformreviewlapseto;
			}
			else{
				const {evaluatebardens,evaluatewoundsurfaces} = db;
				const score = lodashget(evaluatebardens,`${curpaientinfo.firstevaluatebardenid}.score`,0);
				const cmlist = lodashget(evaluatewoundsurfaces,`${curpaientinfo.firstevaluatewoundsurfaceid}.evaluateWoundsurfaces`,[]);
				formvalues = getdefaultlapseto_barden(score,curpaientinfo.Diseaseclassification,cmlist);
			}
			const title = isnew?'新建':'编辑';
	    return (
				<Layout>
					<Header>
						<span><img src="index.png" className="icon-index" alt=""/>{title}审阅转归申请表</span>
					</Header>
					<div className="content-box">
					<div className="content assess">
						<h2>{lodashget(curpaientinfo,'Patientno','')}<span>{lodashget(curpaientinfo,'Patientname','')}</span>
							<button className="return" onClick={
								()=>{
									this.props.history.goBack();
								}
							}><img src="return.png" alt=""/></button>
							<div className="clearfix"></div>
						</h2>

						{/* <TitleDetail curpaientinfo={curpaientinfo} db={db}/> */}

						<PageForm onClickSubmit={this.onClickSubmit}
							curpaientinfo={curpaientinfo}
							app={app}
							db={db}
							userlogin={userlogin}
							formname={formname}
							formvalues={formvalues}/>
						</div>
					</div>
					</Layout>
	    );
  	}
}


// const mapStateToProps = ({db},props) => {
// 		let curpaientinfo = props.curpaientinfo;
// 		const {formreviewlapsetos} = db;
// 		let isnew = true;
// 		let curformreviewlapseto;
// 		if(!!curpaientinfo.formreviewlapsetoid){
// 			curformreviewlapseto = formreviewlapsetos[curpaientinfo.formreviewlapsetoid];
// 			if(!!curformreviewlapseto){
// 				isnew = false;
// 			}
// 		}
// 		return {curpaientinfo,isnew,curformreviewlapseto,db};
// }

const mapStateToProps = ({db,app,userlogin},props) => {
		const {paientinfos,formreviewlapsetos} = db;
		const id = lodashget(props,'match.params.pid');
		const formreviewlapsetoid = lodashget(props,'match.params.id');
		let isnew = formreviewlapsetoid === '0';
		const curpaientinfo = paientinfos[id];
		let curformreviewlapseto;

		if(!!curpaientinfo){
			if(!!curpaientinfo.formreviewlapsetoid){
				curformreviewlapseto = formreviewlapsetos[curpaientinfo.formreviewlapsetoid];
				if(!!curformreviewlapseto){
					isnew = false;
				}
			}
		}
		if(isnew){
			return {curpaientinfo,isnew,db,app,userlogin};
		}
		return {curpaientinfo,isnew,curformreviewlapseto,db,app,userlogin};
}

export default connect(mapStateToProps)(App);
