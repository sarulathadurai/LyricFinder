import React from 'react';
import Tracks from "../layouts/Tracks/Tracks";
import Search from "../layouts/Tracks/Search";
const Index = () => {
    return ( 
        <React.Fragment>
            <Search />
            <Tracks />
        </React.Fragment>
     );
}

export default Index;