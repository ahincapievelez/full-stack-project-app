import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { createContact } from "../../services/contactService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function NewContact() {

    const companyRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const phoneNumberRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(evt){
        evt.preventDefault()
        let contact = {
            company: companyRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phoneNumber: phoneNumberRef.current.value
        }
        await createContact(contact)
        navigate('/contacts')
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
                            <h6>Contacts/ New contact</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-blk'>
                            <h6>New Contact</h6>
                            <form className="details-box" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <label htmlFor="comp" class="col-sm-2 col-form-label">Company:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="comp" ref={companyRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="fnme" class="col-sm-2 col-form-label">First Name:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="fnme" ref={firstNameRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="lnme" class="col-sm-2 col-form-label">Last Name:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="lnme" ref={lastNameRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="email" class="col-sm-2 col-form-label">Email:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="email" ref={emailRef}/>
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <label htmlFor="phne" class="col-sm-2 col-form-label">Phone number:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="phne" ref={phoneNumberRef}/>
                                    </div>
                                </div>
                                <button className="create-btn">Create</button>
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
  
  export default NewContact;