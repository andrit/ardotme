import React from 'react';

class Layout extends React.Component{
    // need to bring in list of sections as hpbSections
    // create <Header>
    // Create HPBubble --> have a switch that looks for section value and pulls in correct data/content
    render(){
        return(
            <Header />
            {hpbSections.map(section =>{
                <HPBubble />
            })}
        )
    }
}
