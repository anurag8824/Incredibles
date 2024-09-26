import React, { useEffect, useState } from 'react'

import { json } from 'react-router-dom'
import Name from './CopyBoard/Name';
import Address from './CopyBoard/Address';
import PinCode from './CopyBoard/PinCode';



const Check = () => {

    // for set value 
    const [order, setOrder] = useState("");
    const [track, setTrack] = useState("");
    const [delivered, setDelivered] = useState("");
    const [flipdelivered, setFlipdelivered] = useState("");

    // for hide and show 
    const [checked, setChecked] = useState(true);
    const [tracked, setTracked] = useState(true);
    const [invoice, setInvoice] = useState(true);

    //for data save to local storage
    const [trackdata, setTrackdata] = useState(() => {
        // const savedData = localStorage.getItem('trackdata');
        // return savedData ? JSON.parse(savedData) : { track: '', delivered: '', flipdelivered: '' };
    });

    // Handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrackdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Save form data to localStorage when trackdata changes
    useEffect(() => {
        // localStorage.setItem('trackdata',trackdata);
    }, [trackdata]);


    //   const checking = OrderID.length > 0; 
    const showIdForm = (event) => {
        event.preventDefault();

        setOrder(order);
        setChecked(setChecked(false))
        localStorage.setItem('orderId', order);


    }


    const showTrackForm = (event) => {
        event.preventDefault();

        setTrack(track);
        setDelivered(delivered);
        setFlipdelivered(flipdelivered);

        setTracked(setTracked(true));
        localStorage.setItem('Data', JSON.stringify({
            TrackingId: track,
            deliveredId: delivered,
            support: flipdelivered
        }))


    }
    const Data = localStorage.getItem("Data");
    console.log(Data)

    const hideinvoice = (event) => {
        event.preventDefault();

        setTracked(false);
        setInvoice(false);




    }



    return (
        <div>
            dfsgh
        </div>
    )
}

export default Check