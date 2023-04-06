import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProjectFromContact, updateProjectOfIdFromContact } from "../../services/projectService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function EditContact() {

    let [project, setProject] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const projectNameRef = useRef()
    const statusRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const tasksRef = useRef()

    useEffect(() => {

        getProjectFromContact(params.id, params.cid).then(data => setProject(data))

    }, [params.cid, params.id])

    async function handleSubmit(evt){
        evt.preventDefault()
        let updatedProject = {
            projectName: projectNameRef.current.value,
            status: statusRef.current.value,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            tasks: tasksRef.current.value
        }
        await updateProjectOfIdFromContact(updatedProject, params.id, params.cid )
        navigate(`/contacts/${params.cid}`)
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
                                    <label htmlFor="pronme" class="col-sm-2 col-form-label">Project Name:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="pronme" defaultValue={project.projectName} ref={projectNameRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="sta" class="col-sm-2 col-form-label">Status:</label>
                                    <div class="col-sm-4">
                                    <select class="form-select" aria-label="Default select example" id="sta" defaultValue={project.status}>
                                        <option ref={statusRef}>To Do</option>
                                        <option ref={statusRef}>In Progress</option>
                                        <option ref={statusRef}>On Hold</option>
                                        <option ref={statusRef}>Completed</option>
                                        <option ref={statusRef}>Delayed</option>
                                        <option ref={statusRef}>Cancelled</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="tsk" class="col-sm-2 col-form-label">Task:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="number" id="tsk" name='tsk' defaultValue={project.tasks} ref={tasksRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="strdt" class="col-sm-2 col-form-label">Start Date:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="datetime-local" id="strdt" defaultValue={new Date(project.startDate).toLocaleDateString()} ref={startDateRef}/>
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <label htmlFor="enddt" class="col-sm-2 col-form-label">End Date:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="datetime-local" id="enddt" defaultValue={project.endDate} ref={endDateRef}/>
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