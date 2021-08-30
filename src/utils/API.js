import axios from "axios";

function fetchShipment(trackingNumber) {
    return(
        axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
    )
}

export default fetchShipment