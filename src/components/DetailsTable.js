import React from 'react'
import Table from 'react-bootstrap/Table'
import fetchShipment from '../utils/API';

function DetailsTable() {

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await fetchShipment(trackingNumber);
    //         console.log(request)
    //         setRepos(request.data.items);
    //         setPageNum(pageNum+1)
    //     }
    //     fetchData();
    // }, [])

    return (
        <div>
            <h3>Shipment Information</h3>
            <Table 
                striped bordered hover size="sm"  
            >
                <thead>
                    <tr>
                        <th width="140">Branch</th>
                        <th width="140">Date</th>
                        <th width="140">Time</th>
                        <th width="170">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rakesh</td>
                        <td>1123</td>
                        <td>CSE</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td>Jackson</td>
                        <td>1124</td>
                        <td>ECE</td>
                        <td>Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Keshav</td>
                        <td>1124</td>
                        <td>CSE</td>
                        <td>Chennai</td>
                    </tr>
                    <tr>
                        <td>Neilesh Jain</td>
                        <td>1125</td>
                        <td>EEE</td>
                        <td>Gwalior</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DetailsTable
