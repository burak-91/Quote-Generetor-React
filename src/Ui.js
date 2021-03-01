import React from 'react'



const Ui = ({getNewQuotes,author,text,goToTweeter}) => {
    return (
        <div>
            <div className="quote-container" id="quote-container">
            <div className="quote-text">
            <i className="fas fa-quote-left"></i>
            <span id="quote">{text}</span>
        </div>
        <div className="quote-author">
            <span id="author">{author}</span>
        </div>
        <div className="button-container">
            <button onClick={()=>goToTweeter()} className="twitter-button" id="twitter" title="Tweet">
                <i className="fab fa-twitter"></i>
            </button>
            <button onClick={()=>getNewQuotes()} id="new-quote">New Quote</button>
        </div>
    </div>
        </div>
    )
}

export default Ui
