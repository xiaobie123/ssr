import React from 'react';
import {Route,Redirect,withRouter,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoading from '../Components/PageLoading';
import Full from '../Components/Full';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PropTypes} from 'prop-types';
import PhotoSwipe from './PhotoSwipe';

import {initialRequest} from 'react-ssr-request';
import * as ListActs from '../actions/postList';

const LoadableTab=Loadable({
  loader: () => import(/* webpackChunkName: 'Tab' */ './Tab'),
  loading:PageLoading
});
const LoadableUser = Loadable({
  loader: () => import(/* webpackChunkName: 'User' */ './User'),
  loading:PageLoading
});

class App extends React.Component{
	componentWillMount(){
	
	}
	render(){
		return(
			<Full>
				<Switch>
				<Route exact path="/user/:uid" component={LoadableUser}/>
				<Route path="/"  component={LoadableTab}/>
				</Switch>
				<PhotoSwipe />
			</Full>
			)
	}
};



const mapStateToProps=(state)=>({
	
})

const test=()=>{
  console.log('aaaaaa')
  return {type:"TEST"}
}

const initialDispatchs=(state)=>[
  test()
]
export default initialRequest(initialDispatchs)(withRouter(connect(mapStateToProps)(App)));