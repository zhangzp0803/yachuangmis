import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch } from 'react-router-dom';
import Index from './index';
import IndexDetail from './patientinfo/index_detail';
import IndexDetailEdit from './patientinfo/edit';
import IndexInfo from './patientinfo/index_info';

import NewBarden from './evaluate/newbarden';
import NewNursingmeasures from './evaluate/newnursingmeasures';
import NewWoundsurface from './evaluate/newwoundsurface';
import NewLapseto from './evaluate/newlapseto';

import ViewPrintRecordBarden from './evaluate/recordbarden';
import ViewPrintRecordNursingmeasures from './evaluate/recordnursingmeasures';
import ViewPrintRecordWoundsurface from './evaluate/recordwoundsurface';

import DefineTurnover from './smartdevice/defineturnover';

import Datastat from './datastat';
import Datastatdetail from './datastat/detaillist';
import Review from './review/reviewlist';

import SearchPaientinfo from './index/index_search';

import Login from './login';
import './antd.css';
import {requireAuthentication} from './requireauthentication';




class AppRoot extends React.Component {
  componentWillMount() {

  }

    componentWillUnmount() {

    }
    render() {
      return (
              <div className="container">
                <Switch>
                  <Route exact path="/" component={requireAuthentication(Index)} />
                  <Route exact path="/indexdetail/:pid" component={requireAuthentication(IndexDetail)} />
                  <Route exact path="/indexdetailedit/:pid" component={requireAuthentication(IndexDetailEdit)} />
                  <Route exact path="/indexinfo/:pid" component={requireAuthentication(IndexInfo)} />
                  <Route exact path="/newbarden/:pid/:id" component={requireAuthentication(NewBarden)} />
                  <Route exact path="/newnursingmeasures/:pid/:id" component={requireAuthentication(NewNursingmeasures)} />
                  <Route exact path="/newwoundsurface/:pid/:id" component={requireAuthentication(NewWoundsurface)} />
                  <Route exact path="/newlapseto/:pid/:id" component={requireAuthentication(NewLapseto)} />

                  <Route exact path="/viewprintrecordbarden/:pid" component={requireAuthentication(ViewPrintRecordBarden)} />
                  <Route exact path="/viewprintrecordnursingmeasures/:pid" component={requireAuthentication(ViewPrintRecordNursingmeasures)} />
                  <Route exact path="/viewprintrecordwoundsurface/:pid" component={requireAuthentication(ViewPrintRecordWoundsurface)} />

                  <Route exact path="/defineturnover/:pid/:bid" component={requireAuthentication(DefineTurnover)} />

                  <Route exact path="/searchpaientinfo" component={requireAuthentication(SearchPaientinfo)} />
                  <Route exact path="/datastat" component={requireAuthentication(Datastat)} />
                  <Route exact path="/datastatdetail/:flag" component={requireAuthentication(Datastatdetail)} />
                  <Route exact path="/review" component={requireAuthentication(Review)} />

                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>

      );
  }
}
export default connect()(AppRoot);
