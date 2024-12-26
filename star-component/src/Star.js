import {useState} from 'react'
const Star=()=>{
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);
    return(
        <div>
            {
                [1,2,3,4,5].map((num,index)=>(
                    <span onClick={(num)=>{
                      setRating(num);
                    }}
                    onMouseEnter={()=>{
                        setHover(num)
                    }}
                    className={rating-num>0 || hover<= num ?'on':'off'}
                    key={num}
                    >&#9733;</span>
                ))
            }
        </div>
    )

}

export default Star;