import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getContact, deleteContact } from "../../services/contactService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function ShowContact() {

    let [contact, setContact] = useState([])

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {

        async function loadData(){
            const data = await getContact(params.id)
            setContact(data)
        }
        loadData()

    }, [params.id])

    console.log('Contact: ', contact)

    return (
<div className="container-fluid dashboard">
        <Header />
        <div className="row all-content">
            <Aside />
            <div className='col-10 content'>
                <div className='container-fluid all-dashboard-content'>
                    <div className='row'>
                        <div className='col top-label'>
                            <h6>Contacts/ {contact.firstName} {contact.lastName}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='new-lead'>
                                Edit Contact
                                <a href="a"><img className='add-lead' src='/plus.svg' alt='' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-blk'>
                            <h6>Contact Info</h6>
                            <div className="details-box">
                                <p><span>Company: </span>{contact.company}</p>
                                <p><span>First Name: </span> {contact.firstName}</p>
                                <p><span>Last Name: </span> {contact.lastName}</p>
                                <p><span>Email: </span> {contact.email}</p>
                                <p><span>Phone Number: </span> {contact.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-blk'>
                            <h6>Projects</h6>
                            <table className='contact-table'>
                                <tr>
                                    <th className='chkbox'><input type="checkbox" id="" name="" /></th>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                    <th>Tasks</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                                <tr>
                                    <td className="chkbox"><input type="checkbox" id="" name="" /></td>
                                    <td>Elenas Bakeshop</td>
                                    <td>
                                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-success" style={{width: "50%"}}>In Progress</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-warning" style={{width: "25%"}}>25%</div>
                                        </div>
                                    </td>
                                    <td>04/01/2023</td>
                                    <td>04/06/2023</td>
                                </tr>
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
  
  export default ShowContact;

