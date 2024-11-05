import React from 'react'
import deva from '../images/deva.png'
import sam from '../images/sam.png'
import sunny from '../images/sunny.png'
import mia from '../images/mia.png'
import rashmika from '../images/rashmika.png'
function Clone() {

    let person =[
        
        {
            name:'Rashmika',
            pic: rashmika,
            tittle:"Hey there i'm using Whats's app Love U :)",
            star:"⭐⭐⭐⭐⭐",
            time:'9:40 AM'
    
        }
        
        
        ,{

        name:'sheyam',
        pic: sam,
        tittle:"Hey there i'm using Whats's app",
        star:"⭐⭐⭐",
        time:'8:40 AM'
    }
,

{
    name:'Mia Khalifa',
    pic: mia,
    tittle:"Hey there i'm using Whats's app Call Me 🥵",
    star:"⭐⭐⭐⭐⭐",
    time:'9:40 AM'

}
   , {

        name:'Deva',
        pic: deva,
        tittle:"Hey there i'm using Whats's app",
        star:"⭐⭐⭐",
        time:'9:40 AM'
    },

    
    {

        name:'Sunny Leone',
        pic: sunny,
        tittle:"Hey there i'm using Whats's app 🥵😍",
        star:"⭐⭐⭐⭐⭐",
        time:'9:40 AM'
    },


]

  return (
    <>
    {
        person.map((item,index )=>
         { 

          return (
          <div key={index} className='group'>
<div className='tgroup'>
            <img src={item.pic} alt='pic'/>
        <div className='agroup'>
          <h3>{item.name}</h3>
          <h6>{item.tittle}</h6>
          </div>
          </div>
          <div className='sgroup'>
          <p>{item.star}</p>
          <p>{item.time}</p>
          </div>
          </div>
         ) }


    
    
    
    
    )
    }
    
    
    </>
  )
}

export default Clone