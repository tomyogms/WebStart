import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <div>
        <div style={{backgroundColor:'#eff9ff', height:'100px', width:'100%' }}>
        </div>
        <div style={{backgroundColor:'#eff9ff', height:'100vw', width:'200px',float:'left' }}>
            <div style={{height:'20px', width:'150px',float:'center', paddingLeft:'30px', marginTop:'20px' }}>Current Call</div>
            <div style={{height:'20px', width:'150px',float:'center', paddingLeft:'30px', marginTop:'30px' }}>Dashboard</div>
            <div style={{height:'20px', width:'150px',float:'center', paddingLeft:'30px', marginTop:'30px' }}>Search</div>
        </div>
        
        <div style={{ display: 'flex', backgroundColor:'#eff9ff', height:'100%', width:'80%' }}>
            <Provider store={createStoreWithMiddleware(reducers)}>
                <App />
            </Provider>
        </div>
    </div>
  , document.querySelector('.container1'));
