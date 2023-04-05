import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function IndexProject() {
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
                        <div className='col'>
                            <div className='new-lead'>
                                Add New Project
                                <a href="a"><img className='add-lead' src='/plus.svg' alt='' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col leads-blk'>
                            <table className='projects-table'>
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
  
  export default IndexProject;