const Launch = ({item}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = item;
    console.log(item);
    return (
        <div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};