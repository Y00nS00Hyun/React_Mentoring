import { useState } from "react";

const Bulb = () => {
    const [light, setLight] = useState('off')

    return (
        <>
            {light === 'on' ? (<h1>ON</h1>) : (<h1>OFF</h1>)}

            <button onClick={() => { setLight(light === 'on' ? 'off' : 'on') }}>
                {light === 'on' ? '끄기' : '켜기'}
            </button>
        </>
    )
}

export default Bulb;