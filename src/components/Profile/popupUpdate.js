import React from 'react';
import PropTypes from 'prop-types';
import './profile.css'


function popupUpdate(props) {
     function handleUpdate(){
         console.log('aaa')
     }
    return (props.trigger) ? (
        <div className="popup__Update">
             <div className="main-update">
                        <h5 className="title__update">Cập nhật thông tin</h5>
                 
                        <input type="text" name="email"   placeholder="Email"
                            className="email popU" id="" />
                            
                        <input type="text" name="username"  placeholder="username"
                            className="username popU" id="" />
                        <input type="text" name="password"  placeholder="password"
                            className="password popU" id="" />
                        {/* {error && <div className="error">{error}</div>} */}
                     

                        <div className="pp-btn-update">

                            <button onClick={handleUpdate} type="button" className="btn btn-danger ">Update</button>
                        </div>

                    </div>
                    <p  type="button" className=" pp__close" onClick={()=>props.setTrigger(false)} ><i class="fas fa-times-circle"></i></p>
            
        </div>
    ):"";
}

export default popupUpdate;