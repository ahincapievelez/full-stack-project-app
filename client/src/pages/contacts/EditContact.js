import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getContact, updateContact } from "../../services/contactService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function EditContact() {

    let [contact, setContact] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const companyRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const phoneNumberRef = useRef()

    useEffect(() => {

        getContact(params.id).then(data => setContact(data))

    }, [params.id])

    async function handleSubmit(evt){
        evt.preventDefault()
        let updatedContact = {
            company: companyRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phoneNumber: phoneNumberRef.current.value
        }
        await updateContact(contact._id, updatedContact)
        navigate(`/contacts/${contact._id}`)
    }

    return (
<div className="container-fluid dashboard">
        <Header />
        <div className="row all-content">
            <Aside />
            <div className='col-10 content'>
                <div className='container-fluid all-dashboard-content'>
                    <div className='row'>
                        <div className='col top-label'>
                            <h6>Contacts/ Edit contact</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-blk'>
                            <h6>Edit Contact</h6>
                            <form className="details-box" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <label htmlFor="comp" class="col-sm-2 col-form-label">Company:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="comp" defaultValue={contact.company} ref={companyRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="fnme" class="col-sm-2 col-form-label">First Name:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="fnme" defaultValue={contact.firstName} ref={firstNameRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="lnme" class="col-sm-2 col-form-label">Last Name:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="lnme" defaultValue={contact.lastName} ref={lastNameRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="email" class="col-sm-2 col-form-label">Email:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="email" defaultValue={contact.email} ref={emailRef}/>
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <label htmlFor="phne" class="col-sm-2 col-form-label">Phone number:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="phne" defaultValue={contact.phoneNumber} ref={phoneNumberRef}/>
                                    </div>
                                </div>
                                <button className="create-btn">Update</button>
                            </form>
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
  
  export default EditContact;