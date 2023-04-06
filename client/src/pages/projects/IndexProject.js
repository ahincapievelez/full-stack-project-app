import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProjects } from "../../services/projectService"
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function IndexProject() {

    let [projects, setProjects] = useState([])

    useEffect(() => {

        async function loadData(){
            const data = await getAllProjects()
            setProjects(data)
        }
        loadData()

    }, [])

    console.log('Contacts: ', projects)

    return (
<div className="container-fluid dashboard">
        <Header />
        <div className="row all-content">
            <Aside />
            <div className='col-10 content'>
                <div className='container-fluid all-dashboard-content'>
                    <div className='row'>
                        <div className='col top-label'>
                            <h6>Projects</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col index-btns-box'>
                            <Link to='/projects/new'>
                                    <button className='edit-btn'>Add New project</button>
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col contact-blk'>
                            <div className='col project-btns-box'>
                                <h6>Projects</h6>
                                {/* <Link to={`/projects/c/${project._id}/new`}>
                                    <button className='edit-btn'>Add New Project</button>
                                </Link> */}
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
                                        <th>Company</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects?.map((project, index) =>
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
                                            <td>{project.contacts?.map((contact, index) => contact.company)}</td>
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
  
  export default IndexProject;