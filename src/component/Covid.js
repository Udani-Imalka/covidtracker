import React, { useEffect, useState } from 'react'
import './Covid.css'

const Covid = () => {

    const[data,setData] = useState([]);

    const getCovidData= async () => {
        try {
            const res = await fetch('https://www.hpb.health.gov.lk/api/get-current-statistical');
            const actualData = await res.json();
            console.log(actualData.data[0]);
            setData(actualData.data);
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        getCovidData();
    },[]);
    
    return (
    
            <section className="section">
            <br></br>
            <h1>COVID-19 TRACKER</h1>

            <table align="center">
                <tr>
                    <td>
                <div className="card-container"> 
                    <div className="card card-1">

                            <p className="card__icon">Last update</p>
                            <br/>
                            <p className="card__title_a" >{data.update_date_time}</p>
                        
                    </div>
                </div>
                </td>
                <td>
                <div className="card-container"> 
                    <div className="card card-2">
                        
                            <p className="card__icon">New CASES</p>
                            <p className="card__title">{data.local_new_cases}</p>
                        
                    </div>
                </div>
                </td>
                <td>
                <div className="card-container"> 
                    <div className="card card-3">
                        
                            <p className="card__icon">Total CASES</p>
                            <p className="card__title">{data.local_total_cases}</p>
                        
                    </div>
                </div>
                </td>
                </tr>

                <tr>
                    <td>
                <div className="card-container"> 
                    <div className="card card-4">
                        
                            <p className="card__icon">New DEATH</p>
                            <p className="card__title">{data.local_new_deaths}</p>
                        
                    </div>
                </div>
                </td>
                <td>
                <div className="card-container"> 
                    <div className="card card-5">
                        
                            <p className="card__icon">Total DEATH</p>
                            <p className="card__title">{data.local_deaths}</p>
                        
                    </div>
                </div>
                </td>
                <td>
                <div className="card-container"> 
                    <div className="card card-4">
                        
                            <p className="card__icon">RECOVERED</p>
                            <p className="card__title">{data.local_recovered}</p>
                        
                    </div>
                </div>
                </td>
                </tr>
            </table>
            <br/>
            </section>
        
    )
}

export default Covid;