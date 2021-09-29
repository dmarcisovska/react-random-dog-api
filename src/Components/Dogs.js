import React from 'react'


const Dogs = ({dogs}) => {
    return (
        <div className='gallery'>     
            {
                dogs.map((dog, index) => (
               <div className="dogs"> <img src={dog} alt="dog" key={index} /> </div>
                ))
            }
 
        </div>
    )
}

export default Dogs
