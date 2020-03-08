import React from 'react'
//Example For JSX style
const HeaderBar = () => {
    return React.createElement(
        'div',
        {id ='bar', className: 'dummyclass'},
        React.createElement('h1', null, 'HEY HEY')
    )
}

export default HeaderBar