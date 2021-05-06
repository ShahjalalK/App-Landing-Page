
import { FormControl, FormControlLabel, FormHelperText, Input, InputLabel, makeStyles } from '@material-ui/core'
import { PowerInputOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import "./Tranding.css"
import JesonData from '../../MOCK_DATA.json'



const Tranding = () => {
    const [searchTerm, setSearchTarm] = useState('')
    const changeHandeler = (e) => {
            setSearchTarm(e.target.value)
    }
    return (
        <>
        <form action="">
            <input type="text" placeholder="Search Heare...."  onChange={changeHandeler}/>
        </form>
            <div className="Tranding">            
            <br />
            {JesonData.filter((val) => {
                if(searchTerm == ""){
                    return val
                }else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val, key) => {
                return(
                    <>
                        <div className="data"  key={key}><p>{val.first_name}</p></div>
                    </>
                )
            })}       
            
            
            </div>
        </>

    )
}

export default Tranding
