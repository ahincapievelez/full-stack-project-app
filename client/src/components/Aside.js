import { Link } from "react-router-dom";

function Aside() {
  
    return (
            <div className="col-2 aside">
                <Link to="/dashboard" className="active">
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                            <path className="nav-icon" id="_1" data-name="1" d="M54,207h7l0,8-7,0Zm-9,8,0-6h7v6Zm0-8,0-8,7,0v8Zm9-2v-6l7,0,0,6Z" transform="translate(-45 -198.999)" fill="#aaa"/>
                        </svg>
                    </div>
                    Dasboard
                </Link>
                <Link to="/leads">
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 13">
                            <path className="nav-icon" id="Shape_1" data-name="Shape 1" d="M53.667,1287v-4.756l1.609-1.743-1.609-1.743V1274h6A1.394,1.394,0,0,1,61,1275.444v10.111A1.394,1.394,0,0,1,59.666,1287Zm.666-3.611a.7.7,0,0,0,.667.722h2.667a.725.725,0,0,0,0-1.444H55A.7.7,0,0,0,54.333,1283.388Zm1.334-2.889a.7.7,0,0,0,.667.722h2a.724.724,0,0,0,0-1.444h-2A.7.7,0,0,0,55.667,1280.5Zm-1.334-2.889a.7.7,0,0,0,.667.722h2.667a.725.725,0,0,0,0-1.445H55A.7.7,0,0,0,54.333,1277.61Zm-8,9.389A1.393,1.393,0,0,1,45,1285.555v-10.111A1.393,1.393,0,0,1,46.333,1274h6v5.354l1.057,1.146-1.057,1.146V1287Zm.667-3.611a.7.7,0,0,0,.667.722h2.667a.725.725,0,0,0,0-1.444H47.667A.7.7,0,0,0,47,1283.388Zm.667-2.889a.7.7,0,0,0,.667.722H51a.724.724,0,0,0,0-1.444H48.334A.7.7,0,0,0,47.667,1280.5ZM47,1277.61a.7.7,0,0,0,.667.722h2.667a.725.725,0,0,0,0-1.445H47.667A.7.7,0,0,0,47,1277.61Z" transform="translate(-45 -1274)" fill="#aaa"/>
                        </svg>
                    </div>
                    Leads
                </Link>
                <Link to="/contacts">
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.003" height="18.004" viewBox="0 0 16.003 16.004">
                            <path className="svg-icon" id="_3" data-name="3" d="M61,596.091A2.094,2.094,0,0,0,58.908,594H47.092A2.094,2.094,0,0,0,45,596.091v11.816A2.094,2.094,0,0,0,47.092,610H58.908A2.094,2.094,0,0,0,61,607.907Zm-8.045,1.619a2.042,2.042,0,1,1-2.042,2.042A2.042,2.042,0,0,1,52.957,597.71Zm3.308,9.452H49.792a1.123,1.123,0,0,1-1.117-1.124,4.21,4.21,0,0,1,2.627-3.9,2.9,2.9,0,0,0,3.361-.037,4.211,4.211,0,0,1,2.72,3.938A1.123,1.123,0,0,1,56.265,607.161Z" transform="translate(-44.998 -593.997)" fill="#aaa"/>
                        </svg>
                    </div>
                    Contacts
                </Link>
                <Link to="/projects">
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 16 19">
                            <path className="nav-icon" id="_5" data-name="5" d="M59.769,701.374H56.077c-.364-1.033-.763-2.375-2.461-2.375-2.545,0-3.328,1.341-3.692,2.375H46.231c-.982,0-1.231,1.391-1.231,2.375v12.469A1.779,1.779,0,0,0,46.778,718H59.222A1.779,1.779,0,0,0,61,716.218V703.749C61,702.765,60.751,701.374,59.769,701.374ZM53,701.968a.891.891,0,1,1-.889.891A.89.89,0,0,1,53,701.968ZM55,715H48v-2h7Zm3-4H48v-2H58Zm0-4H48v-2H58Z" transform="translate(-45 -698.999)" fill="#aaa"/>
                        </svg>
                    </div>
                    Projects
                </Link>
                <Link to="/bids">
                    <div className="aside-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.009" height="20" viewBox="0 0 16.009 19">
                            <path id="Shape_1" data-name="Shape 1" d="M55.187,893.928,53,892.827l-2.188,1.1a.612.612,0,0,1-.551,0l-2.187-1.1-2.188,1.1a.615.615,0,0,1-.6-.027.622.622,0,0,1-.292-.527V875.613a.617.617,0,0,1,.616-.619H60.389a.618.618,0,0,1,.616.619v17.761a.622.622,0,0,1-.292.527.616.616,0,0,1-.6.027l-2.188-1.1-2.188,1.1a.61.61,0,0,1-.551,0Zm-1.571-4.685a1.847,1.847,0,1,0,1.848-1.859A1.855,1.855,0,0,0,53.616,889.243Zm1.561-5.545-5.224,5.258a.622.622,0,0,0,0,.876.613.613,0,0,0,.871,0l5.224-5.257a.623.623,0,0,0,0-.877.613.613,0,0,0-.871,0Zm-6.486.589a1.847,1.847,0,1,0,1.847-1.859A1.854,1.854,0,0,0,48.69,884.287Zm1.231-3.718a.618.618,0,0,0,.616.62h7.389a.62.62,0,0,0,0-1.239H50.537A.618.618,0,0,0,49.921,880.569Zm-2.463,0a.616.616,0,1,0,.617-.619A.618.618,0,0,0,47.458,880.569Zm2.463-2.478a.618.618,0,0,0,.616.619h7.389a.619.619,0,0,0,0-1.238H50.537A.618.618,0,0,0,49.921,878.091Zm-2.463,0a.616.616,0,1,0,.617-.619A.618.618,0,0,0,47.458,878.091ZM54.84,889.24a.62.62,0,1,1,.62.62A.62.62,0,0,1,54.84,889.24Zm-4.919-4.95a.62.62,0,1,1,.62.62A.619.619,0,0,1,49.92,884.29Z" transform="translate(-44.996 -874.994)" fill="#aaa"/>
                        </svg>
                    </div>
                    Bids
                </Link>
            </div>
    );
  }
  
  export default Aside;