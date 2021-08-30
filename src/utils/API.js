import axios from "axios";

export function fetchShipment(trackingNumber) {
    return(
        axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
    )
}