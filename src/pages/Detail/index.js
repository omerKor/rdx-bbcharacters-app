import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';

import axios from 'axios';

function Detail() {

    const [char, setChar] = useState(null);
    const { char_id } = useParams();

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
            .then(res => res.data)
            .then(data => setChar(data[0]));
    }, [char_id])



    return (
        <div>
            {
                char && (
                    <>
                        <h1>
                            {char.name}
                        </h1>
                        <img src={char.img} alt="" style={{ width: "20%" }} />
                    </>
                )
            }
            <pre>
                <div style={{ width: "50%", whiteSpace: "break-spaces" }}>
                    {
                        char && (
                            JSON.stringify(char, null, 2)
                        )
                    }
                </div>
            </pre >
        </div >
    )
}

export default Detail