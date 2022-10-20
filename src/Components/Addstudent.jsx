import '../App.css'
import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent } from './assets/Action';



const Addstudent = () =>  {
    let count = useSelector(state => state.count);
    let dispatch = useDispatch();
    let temp = [];
    
    const update = () => {
        temp.push(count+1);

        dispatch(addStudent(temp));

    }

    
    return(
        <div>
            <div className='fields'>
                <div>
                    <fieldset><legend>Name</legend>
                        <input   id ="ip1" className='inp1' type="text" onChange={(e) => {temp[0] = e.target.value}}/>
                    </fieldset>
                </div>
                <div>
                    <fieldset><legend>Age</legend>
                    <input id ="ip2" className='inp1' type="text" onChange={(e) => {temp[1] = e.target.value}}/>
                    </fieldset>
                </div>
                <div>
                    <fieldset><legend>Course</legend>
                    <input id ="ip3" className='inp1' type="text" onChange={(e) => {temp[2] = e.target.value}}/>
                    </fieldset>
                </div>
                <div>
                    <fieldset><legend>Batch</legend>
                    <input id ="ip4" className='inp1' type="text" onChange={(e) => {temp[3] = e.target.value}}/>
                    </fieldset>
                </div>
            </div>

            <div className="f3">
                <Link to="/students"><button className='c3' id='student-add'>Cancel</button></Link>
                <Link to="/students"><button className='c4' onClick={update} id='student-add'>Update</button></Link>
            </div>
            

        </div>
    );
}

export default Addstudent;