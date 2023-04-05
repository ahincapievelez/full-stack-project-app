import { useEffect, useState } from "react"
import { getAllLeads } from "../../services/leadService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function IndexLead() {

    let [leads, setLeads] = useState([])

    useEffect(() => {

        async function loadData(){
            const data = await getAllLeads()
            setLeads(data)
        }
        loadData()

    }, [])

    console.log('Leads: ', leads)
    return (
<div className="container-fluid dashboard">
        <Header />
        <div className="row all-content">
            <Aside />
            <div className='col-10 content'>
                <div className='container-fluid all-dashboard-content'>
                    <div className='row'>
                        <div className='col top-label'>
                            <h6>Leads</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='new-lead'>
                                Add New Lead
                                <a href="a"><img className='add-lead' src='/plus.svg' alt='' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col leads-blk'>
                            <table className='leads-table'>
                                <thead>
                                    <tr>
                                        <th className='chkbox'><input type="checkbox" id="" name="" /></th>
                                        <th>Company</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads?.map((lead, index) =>
                                        <tr key={index}>
                                            <td className="chkbox"><input type="checkbox" id="" name="" /></td>
                                            <td>{lead.company}</td>
                                            <td>{lead.firstName}</td>
                                            <td>{lead.lastName}</td>
                                            <td>{lead.email}</td>
                                            <td>{lead.phoneNumber}</td>
                                            <td style={{fontWeight: '200', fontStyle: 'oblique'}}><a href={`/leads/${lead._id}`} style={{color: '#1A5F7A'}}>See details</a></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            {/* <Filter /> */}
        </div>
    </div>
    );
  }
  
  export default IndexLead;