import React,{useState,useEffect,useRef} from 'react'

const TableSection = ({tabledata,handlevalue}) =>{
    const [active,setActive] = useState(false)

useEffect(()=>{

},[tabledata.length])
    return (
        <div className="table-section">
            <div className="table-content">
                <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                        <th>TIME</th>
                        <th>BET</th>
                        <th>MULTIPLIER</th>
                        <th>PROFIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabledata.map((el, i,array)=>{
                            return(<tr key={i + 1} className={array.length - 1 === i ? `active` : ``} >
                                    <td>{el.TIME}</td>
                                    <td className="bold-text"><span>₿</span>{el.BET}</td>
                                    <td className="bold-text">{el.MULTIPLIER}</td>
                                    <td className={`bold-text ${handlevalue(el.PROFIT)}`}>
                                        <span>₿</span>
                                        {handlevalue(el.PROFIT) === `green` ? `+${el.PROFIT}` : el.PROFIT}
                                    </td>
                                    </tr>)
                            })}
                       
                    </tbody>
                    </table>


                </div>
            </div>       
        </div>
        
    );
}
export default TableSection;