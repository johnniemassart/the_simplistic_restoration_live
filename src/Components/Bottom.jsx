import Clock from 'react-live-clock';

export const Bottom = () => {
    return (  
        <div className="home-bottom">
            <Clock format={'hh:mm:ss A'} ticking={true} timezone={'US/Eastern'} className="time"/>
        </div>
    );
}