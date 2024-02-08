import {useEffect, useState} from "react";

import {Launch} from "./Launche";
import {postServsises as launchService} from "../../servises/postServsises";
import {launchServises} from "../../servises/launchServises";


const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        launchServises.getAll().then(({data})=>{
            setLaunches(data.filter(data => data.launch_year !== "2020"))
        })
    }, []);
    console.log(launches)
    return (
        <div>
            {launches.map(launch=><Launch key={launch.launch_date_unix} item={launch}/>)}

        </div>
    );

};

export {Launches};