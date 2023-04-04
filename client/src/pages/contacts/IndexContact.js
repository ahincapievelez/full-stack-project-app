import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
// import Filter from '../components/Filter'

function IndexContact() {
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
                                <tr>
                                    <th className='chkbox'><input type="checkbox" id="" name="" /></th>
                                    <th>Company</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                                <tr>
                                    <td className="chkbox"><input type="checkbox" id="" name="" /></td>
                                    <td>Elenas Bakeshop</td>
                                    <td>Sebastian</td>
                                    <td>Londono</td>
                                    <td>info@elenasbakeshop.com</td>
                                    <td>7818667888</td>
                                </tr>
                                <tr>
                                    <td className="chkbox"><input type="checkbox" id="" name="" /></td>
                                    <td>El Mundo Boston</td>
                                    <td>Alberto</td>
                                    <td>Vasallo</td>
                                    <td>avasallo@elmundoboston.com</td>
                                    <td>6179090686</td>
                                </tr>
                                <tr>
                                    <td className="chkbox"><input type="checkbox" id="" name="" /></td>
                                    <td>Boston Coffe Bike</td>
                                    <td>Diego</td>
                                    <td>Alvarez</td>
                                    <td>diegoriveralvarez01@gmail.com</td>
                                    <td>8572009382</td>
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
  
  export default IndexContact;