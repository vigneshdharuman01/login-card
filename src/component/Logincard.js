import React, { useState } from 'react'
import {FcSimCardChip} from 'react-icons/fc'
import {TbDirectionSignFilled} from 'react-icons/tb'


const Logincard = (props) => {
  const[value,setvalue] = useState('Holder Name')

  const {userData} = props
  // console.log(userData)
  
const validation =(event)=>{
    console.log(event.target.value.length);
   //console.log(event.target.value.replace(/[^abc]/ig,''))
   if(event.target.value.length === 4){

    userData.filter((data,index)=>{
       if(parseInt(event.target.value) === data.pin){
            setvalue(data.userName);
        }
    })
   
   }

   else if(event.target.value.length === 0){
      setvalue("'Holder Name")
   }
   
  else{
    setvalue("pin wrong")
  }


}

  return (
    <>
    <div>
      <div className="container">
        <div className="card-layer">
          <div className="card">
            <div className="row1">
              <div className="col1">
                <h2>
                  LOGIN<sup>360</sup>
                </h2>
              </div>
              <div className="col2">
                <p>Morning Batch</p>
              </div>
            </div>
            <div className="row2">
              <div className="sim">
                <FcSimCardChip />
              </div>
              <div className="wifi">
                <TbDirectionSignFilled />
              </div>
            </div>
            <div className="row3">
              <p>
                1111&nbsp; &nbsp; &nbsp; 2222&nbsp; &nbsp; &nbsp; 3333&nbsp;
                &nbsp; &nbsp;
                <span>
                  <input
                    onChange={(event)=>validation(event)}
                    type="text"
                    placeholder="****"
                    maxLength={4}
                  />
                </span>
              </p>
            </div>
            <div className="row4">
              <p>{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Logincard