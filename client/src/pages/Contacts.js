import Header from '../components/Header'
import Aside from '../components/Aside'

function Contacts() {
    return (
    <div className="container-fluid contacts">
        <Header />
        <div className="row">
            <Aside />
            <div className="col-10 content">
                <h1>Contacts</h1>
            </div>
        </div>
    </div>
    );
  }
  
  export default Contacts;