export const Static = () => {
    return (  
        <div className="static-container">
            <svg>
                <filter id="noise">
                    <feTurbulence id="turbulence">
                        <animate attributeName="baseFrequency" dur="5s" values="0.9 0.9; 0.8 0.8; 0.9 0.9" repeatCount="1"></animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
                </filter>
            </svg>
        </div>
    );
}