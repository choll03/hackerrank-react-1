import React, { useState } from 'react';

function Slides({slides}) {

    const [slideActive, setSildeActive] = useState(0);

    const handleReset = () => {
        setSildeActive(0);
    }

    const handleNext = () => {
        setSildeActive((slideActive+1));
    }

    const handlePrev = () => {
        setSildeActive((slideActive-1));
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={handleReset} disabled={slideActive === 0}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={handlePrev} disabled={slideActive === 0}>Prev</button>
                <button data-testid="button-next" className="small" onClick={handleNext} disabled={(slideActive+1) === slides.length}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slideActive].title}</h1>
                <p data-testid="text">{slides[slideActive].text}</p>
            </div>
        </div>
    );

}

export default Slides;
