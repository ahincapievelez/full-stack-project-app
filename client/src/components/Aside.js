import { Link } from "react-router-dom";
// import { useState } from "react";

function Aside() {

    // let [activeTag, setActiveTag] = useState()

    const handleChange = (evt) => {
        if(evt.target.className === ''){
            evt.target.className = 'active'
        }
        console.dir(evt.target)
    }
  
    return (
            <div className="col-2 aside">
                <Link to="/dashboard" className="active" onClick={handleChange}>
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                            <path className="nav-icon" id="_1" data-name="1" d="M54,207h7l0,8-7,0Zm-9,8,0-6h7v6Zm0-8,0-8,7,0v8Zm9-2v-6l7,0,0,6Z" transform="translate(-45 -198.999)" fill="#aaa"/>
                        </svg>
                    </div>
                    Dasboard
                </Link>
                {/* <Link to="/leads" onClick={handleChange}>
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 13">
                            <path className="nav-icon" id="Shape_1" data-name="Shape 1" d="M53.667,1287v-4.756l1.609-1.743-1.609-1.743V1274h6A1.394,1.394,0,0,1,61,1275.444v10.111A1.394,1.394,0,0,1,59.666,1287Zm.666-3.611a.7.7,0,0,0,.667.722h2.667a.725.725,0,0,0,0-1.444H55A.7.7,0,0,0,54.333,1283.388Zm1.334-2.889a.7.7,0,0,0,.667.722h2a.724.724,0,0,0,0-1.444h-2A.7.7,0,0,0,55.667,1280.5Zm-1.334-2.889a.7.7,0,0,0,.667.722h2.667a.725.725,0,0,0,0-1.445H55A.7.7,0,0,0,54.333,1277.61Zm-8,9.389A1.393,1.393,0,0,1,45,1285.555v-10.111A1.393,1.393,0,0,1,46.333,1274h6v5.354l1.057,1.146-1.057,1.146V1287Zm.667-3.611a.7.7,0,0,0,.667.722h2.667a.725.725,0,0,0,0-1.444H47.667A.7.7,0,0,0,47,1283.388Zm.667-2.889a.7.7,0,0,0,.667.722H51a.724.724,0,0,0,0-1.444H48.334A.7.7,0,0,0,47.667,1280.5ZM47,1277.61a.7.7,0,0,0,.667.722h2.667a.725.725,0,0,0,0-1.445H47.667A.7.7,0,0,0,47,1277.61Z" transform="translate(-45 -1274)" fill="#aaa"/>
                        </svg>
                    </div>
                    Leads
                </Link> */}
                <Link to="/contacts" onClick={handleChange}>
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.003" height="18.004" viewBox="0 0 16.003 16.004">
                            <path className="svg-icon" id="_3" data-name="3" d="M61,596.091A2.094,2.094,0,0,0,58.908,594H47.092A2.094,2.094,0,0,0,45,596.091v11.816A2.094,2.094,0,0,0,47.092,610H58.908A2.094,2.094,0,0,0,61,607.907Zm-8.045,1.619a2.042,2.042,0,1,1-2.042,2.042A2.042,2.042,0,0,1,52.957,597.71Zm3.308,9.452H49.792a1.123,1.123,0,0,1-1.117-1.124,4.21,4.21,0,0,1,2.627-3.9,2.9,2.9,0,0,0,3.361-.037,4.211,4.211,0,0,1,2.72,3.938A1.123,1.123,0,0,1,56.265,607.161Z" transform="translate(-44.998 -593.997)" fill="#aaa"/>
                        </svg>
                    </div>
                    Contacts
                </Link>
                <Link to="/projects" onClick={handleChange}>
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 16 19">
                            <path className="nav-icon" id="_5" data-name="5" d="M59.769,701.374H56.077c-.364-1.033-.763-2.375-2.461-2.375-2.545,0-3.328,1.341-3.692,2.375H46.231c-.982,0-1.231,1.391-1.231,2.375v12.469A1.779,1.779,0,0,0,46.778,718H59.222A1.779,1.779,0,0,0,61,716.218V703.749C61,702.765,60.751,701.374,59.769,701.374ZM53,701.968a.891.891,0,1,1-.889.891A.89.89,0,0,1,53,701.968ZM55,715H48v-2h7Zm3-4H48v-2H58Zm0-4H48v-2H58Z" transform="translate(-45 -698.999)" fill="#aaa"/>
                        </svg>
                    </div>
                    Projects
                </Link>
            </div>
    );
  }
  
  export default Aside;