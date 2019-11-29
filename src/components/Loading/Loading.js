import React from 'react'
import './Loading.scss'

/**
 * Animated loading spinner
 * 
 * @returns {React.Element}
 */
const Loading = () => {
    return (
        <div className="loading-container row">
            <div className="loading spinner-border">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading