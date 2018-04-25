import React from 'react';
import { connect } from 'react-redux';
import { Layout,Button } from 'antd';
import lodashget from 'lodash.get';


class App extends React.Component {


		componentDidMount(){

		}

		componentWillUnmount() {

		}

  	render() {
			const {curpaientinfo} = this.props;
			if(!curpaientinfo){
				return <div>无病人信息</div>
			}
	    return (
	      	<Layout>
						<div>头部标题栏</div>
						<span><Button onClick={
							()=>{
								this.props.history.goBack();
							}
						}>返回上页</Button></span>
						<div>修改表单</div>
						<div>
							<Button onClick={
								()=>{
									this.props.history.goBack();
								}
							}>保存更改</Button>
						</div>
	      	</Layout>
	    );
  	}
}

const mapStateToProps = ({paientinfo},props) => {
		const {paientinfos} = paientinfo;
		const id = lodashget(props,'match.params.pid');
		let curpaientinfo = paientinfos[id];
    return {curpaientinfo};
}
export default connect(mapStateToProps)(App);