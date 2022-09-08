import React, { useContext } from 'react'

import loadingGif from '../images/gif/loading-arrow.gif'

const Loading = ()=> {

    return (
        <div className="Loading">

            <h4>room data loading...</h4>

            <img src={loadingGif} alt="loading"/>

        </div>
    )
}

export default Loading