import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', marginTop:'5px', float:'left'}}>
        
        <div style={{ display: 'flex',flexDirection:'column', width:'400px', height:'100%', marginRight:'20px'  }}>

          <div style={{ width:'400px', height:'300px', boxShadow: '0px 1px 2px gray', backgroundColor:'#fff',marginBottom:'20px'}}>
            <div className = 'divider' style={{ display: 'flex', width:'400px', height:'25%', backgroundColor:'#7cc7ff'}}></div>
            <div style={{ display: 'flex', width:'400px', height:'75%', backgroundColor:'#fff'}}></div>
          </div>

          <div style={{ display: 'flex',  width:'400px', height:'150px', boxShadow: '0px 1px 2px grey',backgroundColor:'#7cc8ff', marginBottom:'20px'}}>
          </div>

          <div style={{ display: 'flex',  width:'400px', height:'300px', boxShadow: '0px 1px 2px grey',backgroundColor:'#fff', marginBottom:'20px'}}>
          </div>

        </div>

        <div style={{ display: 'flex',flexDirection:'column', width:'400px', height:'100%', marginRight:'20px' }}>
          <div style={{ display: 'flex',  width:'400px', height:'300px', boxShadow: '0px 1px 2px grey',backgroundColor:'#fff', marginBottom:'20px'}}>
          </div>
          <div style={{width:'400px', height:'400px', boxShadow: '0px 1px 2px grey',backgroundColor:'#fff', marginBottom:'20px'}}>
            <div className = 'divider' style={{ display: 'flex', width:'400px', height:'36px', backgroundColor:'#7cc7ff'}}></div>
            <div style={{ display: 'flex', width:'400px', height:'75%', backgroundColor:'#fff'}}></div>
          </div>
          <div style={{ width:'400px', height:'125px', boxShadow: '0px 1px 2px grey',backgroundColor:'#fff', marginBottom:'20px'}}>
            <div className = 'divider' style={{ display: 'flex', width:'400px', height:'36px', backgroundColor:'#7cc7ff'}}></div>
            <div style={{ display: 'flex', width:'400px', height:'75%', backgroundColor:'#fff'}}></div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection:'column', width:'400px', height:'100%'  }}>
          <div style={{ display: 'flex',  width:'400px', height:'100px', boxShadow: '0px 1px 2px grey',backgroundColor:'#fff', marginBottom:'20px'}}>
          </div>
          <div style={{width:'400px', height:'180px', boxShadow: '0px 1px 2px grey',backgroundColor:'#fff', marginBottom:'20px'}}>
            <div className = 'divider' style={{ display: 'flex', width:'400px', height:'36px', backgroundColor:'#7cc7ff'}}></div>
            <div style={{ display: 'flex', width:'400px', height:'75%', backgroundColor:'#fff'}}></div>
          </div>
          <div style={{width:'400px', height:'345px', boxShadow: '0px 1px 2px grey',backgroundColor:'#fff',marginBottom:'20px'}}>
            <div className = 'divider' style={{ display: 'flex', width:'400px', height:'36px', backgroundColor:'#7cc7ff'}}></div>
            <div style={{ display: 'flex', width:'400px', height:'75%', backgroundColor:'#fff'}}></div>
          </div>
          <div style={{width:'400px', height:'150px', boxShadow: '0px 1px 2px grey',backgroundColor:'#fff',marginBottom:'20px'}}>
            <div className = 'divider' style={{ display: 'flex', width:'400px', height:'36px', backgroundColor:'#7cc7ff'}}></div>
            <div style={{ display: 'flex', width:'400px', height:'75%', backgroundColor:'#fff'}}></div>
          </div>
        </div>

      </div>
    );
  }
}
