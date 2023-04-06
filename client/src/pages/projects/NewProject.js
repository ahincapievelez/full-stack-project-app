import { useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createProjectForContact } from "../../services/projectService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function NewProject() {

    const projectNameRef = useRef()
    const statusRef = useRef()
    const tasksRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()

    const params = useParams()
    const navigate = useNavigate()

    async function handleSubmit(evt){
        evt.preventDefault()
        let project = {
            projectName: projectNameRef.current.value,
            status: statusRef.current.value,
            tasks: tasksRef.current.value,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            contacts: params.cid
        }
        await createProjectForContact(project, params.cid)
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
                            <h6>Contacts/ New project</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-blk'>
                            <h6>New Project</h6>
                            <form className="details-box" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <label htmlFor="nmeproj" class="col-sm-2 col-form-label">Project Name:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="text" id="nmeproj" ref={projectNameRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="sta" class="col-sm-2 col-form-label">Status:</label>
                                    <div class="col-sm-4">
                                    <select class="form-select" aria-label="Default select example" id="sta">
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
                                    <label htmlFor="tsk" class="col-sm-2 col-form-label">Tasks:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="number" id="tsk" name="tsk" ref={tasksRef}/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label htmlFor="strtdt" class="col-sm-2 col-form-label">Start Date:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="datetime-local" id="strdt" ref={startDateRef}/>
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <label htmlFor="enddt" class="col-sm-2 col-form-label">End Date:</label>
                                    <div class="col-sm-4">
                                    <input class="form-control" type="datetime-local" id="enddt" ref={endDateRef}/>
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
  
  export default NewProject;