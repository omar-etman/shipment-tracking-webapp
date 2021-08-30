import axios from "axios";

function fetchShipment(trackNum) {
    return(
        axios.get(`https://tracking.bosta.co/shipments/track/${trackNum}`)
    )
}

export default fetchShipment
