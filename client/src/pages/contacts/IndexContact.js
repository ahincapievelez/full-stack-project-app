import { useEffect, useState } from "react"
import { getAllContacts } from "../../services/contactService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function IndexContact() {

    let [contacts, setContacts] = useState([])

    useEffect(() => {

        async function loadData(){
            const data = await getAllContacts()
            setContacts(data)
        }
        loadData()

    }, [])

    console.log('Contacts: ', contacts)

    return (
<div className="container-fluid dashboard">
        <Header />
        <div className="row all-content">
            <Aside />
            <div className='col-10 content'>
                <div className='container-fluid all-dashboard-content'>
                    <div className='row'>
                        <div className='col top-label'>
                            <h6>Contacts</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='new-lead'>
                                Add New Contact
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
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts?.map((contact, index) =>
                                        <tr key={index}>
                                            <td className="chkbox"><input type="checkbox" id="" name="" /></td>
                                            <td>{contact.company}</td>
                                            <td>{contact.firstName}</td>
                                            <td>{contact.lastName}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phoneNumber}</td>
                                            <td style={{fontWeight: '200', fontStyle: 'oblique'}}><a href={`/contacts/${contact._id}`} style={{color: '#1A5F7A', textDecoration: 'none'}}>View Contact</a></td>
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
  
  export default IndexContact;