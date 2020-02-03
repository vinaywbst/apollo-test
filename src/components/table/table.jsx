import React,{useEffect,useState} from 'react'
import { useMutation, useSubscription } from "@apollo/react-hooks"
import gql from "graphql-tag"
import TableSection from './table-section'
import "./table.css"

const Table = () => {
    const [tableData, setTableData] = useState([])

useEffect (() =>{
    

},[])

const handleSingleString = (string) =>{
if(string.toString().length === 1){
    return `0${string}`
}else{
    return string
}
}

const handleValue=(value)=>{
    if(value > 0){
        return `green`
    }else if(value < 0){
        return `red`
    } else {
        return ``
    }
     
}
const { loading, error, data } = useSubscription(
    gql`
        subscription { 
        betAdded  {
            time 
            bet 
            payout 
            profit 
            }
        }
    `
    );
    if (loading) {
    return <span style={{color:`#fff`}}>Loading...</span>;
    }
    if (error) {
    console.error(error);
    return <span>Error!</span>;
    }
    if (data) {
    let {time, bet, payout, profit} = data.betAdded;
    let timestamp = new Date(time)
    let datetime
    =
    `${handleSingleString(timestamp.getDate())}.
    ${handleSingleString(timestamp.getMonth())}.
    ${timestamp.getFullYear()} 
    ${handleSingleString(timestamp.getHours())} : 
    ${handleSingleString(timestamp.getMinutes())} : 
    ${handleSingleString(timestamp.getSeconds())}`
    let arr = tableData;
    let obj = {       
        TIME: datetime, 
        BET: bet/1000, 
        MULTIPLIER: payout/4, 
        PROFIT: profit/1000
    }
    if(arr.length === 10){
        let oldarr = [...tableData]
       oldarr.splice(0, 1);  
        setTableData([...oldarr])
    }else{
        arr.push(obj)
    }
    }

return <TableSection tabledata={tableData} handlevalue={handleValue}/>
   
};

export default Table;