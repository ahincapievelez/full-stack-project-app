import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getContact, deleteContact } from "../../services/contactService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import { deleteProjectFromContact } from "../../services/projectService"
// import Filter from '../components/Filter'

function ShowContact() {

    let [contact, setContact] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {

        async function loadData(){
            const data = await getContact(params.id)
            setContact(data)
        }
        loadData()

    }, [params.id])

    // console.log('Contact: ', contact)

    async function handleDeleteContact() {
        await deleteContact(contact._id)
        navigate('/contacts')
    }

    async function handleDeleteProject(project) {
        await deleteProjectFromContact(project._id, contact._id)
        let updateContact = { ...contact }
        updateContact.projects = updateContact.projects.filter(p => p._id !== project._id)
        setContact(updateContact)
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
                            <h6>Contacts/ {contact.firstName} {contact.lastName}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-btns-box'>
                            <button className='delete-btn' onClick={handleDeleteContact}>Delete Contact</button>
                            <Link to={`/contacts/${contact._id}/edit`}>
                                <button className='edit-btn'>Edit Contact</button>
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-blk'>
                            <h6>Contact Info</h6>
                            <div className="details-box">
                                <p className="details-pgrahp"><span>Company: </span>{contact.company}</p>
                                <p className="details-pgrahp"><span>First Name: </span> {contact.firstName}</p>
                                <p className="details-pgrahp"><span>Last Name: </span> {contact.lastName}</p>
                                <p className="details-pgrahp"><span>Email: </span> {contact.email}</p>
                                <p className="details-pgrahp"><span>Phone Number: </span> {contact.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-blk'>
                            <div className='col project-btns-box'>
                                <h6>Projects</h6>
                                <Link to={`/projects/c/${contact._id}/new`}>
                                    <button className='edit-btn'>Add New Project</button>
                                </Link>
                            </div>
                            <table className='contact-table'>
                                <thead>
                                    <tr>
                                        <th className='chkbox'><input type="checkbox" id="" name="" /></th>
                                        <th>Project Name</th>
                                        <th>Status</th>
                                        <th>Tasks</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contact.projects?.map((project, index) =>
                                        <tr key={index}>
                                            <td className="chkbox"><input type="checkbox" id="" name="" /></td>
                                            <td>{project.projectName}</td>
                                            <td>
                                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar bg-success" style={{width: "25%"}}>{project.status}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar bg-warning" style={{width: "100%"}}>{`${project.tasks}`}</div>
                                                </div>
                                            </td>
                                            <td>{new Date(project.startDate).toLocaleDateString()}</td>
                                            <td>{project.endDate? new Date(project.endDate).toLocaleDateString() : ""}</td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className='btn-group'>
                                                    <button className='delete-project-btn' onClick={() => handleDeleteProject(project)}>X</button>
                                                    <Link to={`/projects/c/${contact._id}/p/${project._id}/edit`}>
                                                        <button className='delete-project-btn'>Edit</button>
                                                    </Link>
                                                </div>
                                            </td>
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
  
  export default ShowContact;

