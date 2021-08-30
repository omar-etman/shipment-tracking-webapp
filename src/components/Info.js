import React from 'react'
import Table from 'react-bootstrap/Table'
import Moment from 'react-moment'

function Info(props) {

    const {steps} = props
    const ignoredSteps = [
        "IN_TRANSIT",
        "NOT_YET_SHIPPED",
        "WAITING_FOR_CUSTOMER_ACTION"
    ]

    return (
        <div>
            <h3>Shipment Information</h3>
            <Table 
                striped bordered hover size="sm"  
            >
                <thead>
                    <tr>
                        <th width="140">الفرع</th>
                        <th width="140">اليوم</th>
                        <th width="140">الوقت</th>
                        <th width="170">التفاصيل</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {steps && steps.map(step => (
                        ignoredSteps.indexOf(step.state) < 0 &&
                        <tr>
                            <td>{step.hub || "-"}</td>
                            <td><Moment format="YYYY/MM/DD">{step.timestamp}</Moment></td>
                            <td><Moment format="hh:mm:ss">{step.timestamp}</Moment></td>
                            <td>{step.state}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    )
}

export default Info
