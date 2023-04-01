import Header from '../components/Header'
import Aside from '../components/Aside'
import Footer from '../components/Footer'

function Dashboard() {
    return (
    <div className="container-fluid dashboard">
        <Header />
        <div className="row all-content">
            <Aside />
            <div className='col-10 content'>
                <div className='container-fluid all-dashboard-content'>
                    <div className='row'>
                        <div className='col top-label'>
                            <h6>Dashboard</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col project-details'>
                            <h6>My Projects Details</h6>
                            <div className='stadistics'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="119.524" height="156.751" viewBox="0 0 119.524 156.751">
                                <g id="_01" data-name="01" transform="translate(-432.25 -252.249)">
                                    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(432.25 256.25)" fill="none" stroke="#f3f6f9" stroke-linecap="round" stroke-width="8">
                                        <circle cx="57.75" cy="57.75" r="57.75" stroke="none"/>
                                        <circle cx="57.75" cy="57.75" r="53.75" fill="none"/>
                                    </g>
                                    <path id="Shape_11" data-name="Shape 11" d="M489.25,256.25s54.937-.563,58.5,57.75c0,0,1.212,30.413-24.831,47.312" fill="none" stroke="#468b98" stroke-linecap="round" stroke-width="8"/>
                                    <text id="_45" data-name="45" transform="translate(491 324)" fill="#468b98" font-size="24" font-family="Helvetica"><tspan x="-13.348" y="0">45</tspan></text>
                                    <text id="ActiveTasks" transform="translate(489 405)" fill="#464a53" font-size="18" font-family="Helvetica"><tspan x="-47.514" y="0">ActiveTasks</tspan></text>
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="124.073" height="154.752" viewBox="0 0 124.073 154.752">
                                <g id="_02" data-name="02" transform="translate(-674.679 -254.248)">
                                    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(679.25 258.25)" fill="none" stroke="#f3f6f9" stroke-linecap="round" stroke-width="8">
                                        <circle cx="57.75" cy="57.75" r="57.75" stroke="none"/>
                                        <circle cx="57.75" cy="57.75" r="53.75" fill="none"/>
                                    </g>
                                    <path id="Shape_11" data-name="Shape 11" d="M736.25,258.25s54.938-.562,58.5,57.75c0,0,.643,53.4-58.75,58,0,0-52,2.428-57-57" fill="none" stroke="#c2202a" stroke-linecap="round" stroke-width="8"/>
                                    <text id="_60" data-name="60" transform="translate(737 324)" fill="#c2202a" font-size="24" font-family="Helvetica"><tspan x="-13.348" y="0">60</tspan></text>
                                    <text id="PendingTasks" transform="translate(738 405)" fill="#464a53" font-size="18" font-family="Helvetica"><tspan x="-56.035" y="0">PendingTasks</tspan></text>
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="138" height="154.752" viewBox="0 0 138 154.752">
                                <g id="_03" data-name="03" transform="translate(-914 -254.248)">
                                    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(924.25 258.25)" fill="none" stroke="#f3f6f9" stroke-linecap="round" stroke-width="8">
                                        <circle cx="57.75" cy="57.75" r="57.75" stroke="none"/>
                                        <circle cx="57.75" cy="57.75" r="53.75" fill="none"/>
                                    </g>
                                    <path id="Shape_11" data-name="Shape 11" d="M981.25,258.25s54.937-.562,58.5,57.75c0,0,.143,18.851-8.75,29" fill="none" stroke="#ffa611" stroke-linecap="round" stroke-width="8"/>
                                    <text id="_30" data-name="30" transform="translate(982 324)" fill="#ffa611" font-size="24" font-family="Helvetica"><tspan x="-13.348" y="0">30</tspan></text>
                                    <text id="Completed_Tasks" data-name="Completed Tasks" transform="translate(983 405)" fill="#464a53" font-size="18" font-family="Helvetica"><tspan x="-68.871" y="0">Completed Tasks</tspan></text>
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="117.86" height="154.811" viewBox="0 0 117.86 154.811">
                                <g id="_04" data-name="04" transform="translate(-1172 -254.189)">
                                    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(1172.25 258.25)" fill="none" stroke="#f3f6f9" stroke-linecap="round" stroke-width="8">
                                        <circle cx="57.75" cy="57.75" r="57.75" stroke="none"/>
                                        <circle cx="57.75" cy="57.75" r="53.75" fill="none"/>
                                    </g>
                                    <path id="Shape_11" data-name="Shape 11" d="M1229.25,258.25s44.33-2.33,55.75,42.75" fill="none" stroke="#14231b" stroke-linecap="round" stroke-width="8"/>
                                    <text id="_13" data-name="13" transform="translate(1230 324)" fill="#14231b" font-size="24" font-family="Helvetica"><tspan x="-13.348" y="0">13</tspan></text>
                                    <text id="Deleted_Tasks" data-name="Deleted Tasks" transform="translate(1229 405)" fill="#464a53" font-size="18" font-family="Helvetica"><tspan x="-56.369" y="0">Deleted Tasks</tspan></text>
                                </g>
                            </svg>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col bids-details'>
                            <h6>Bids Details</h6>
                            <div className='bids-stadistics'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="715.16" height="340" viewBox="0 0 715.16 340">
                                    <g id="Group_4" data-name="Group 4" transform="translate(-402 -583)">
                                        <g id="Lines">
                                            <rect id="BG" width="13" height="274" rx="6.5" transform="translate(448 583)" fill="#f1f3f7"/>
                                            <rect id="BG_02" width="13" height="274" rx="6.5" transform="translate(495 583)" fill="#f1f3f7"/>
                                            <rect id="BG_03" width="13" height="274" rx="6.5" transform="translate(542 583)" fill="#f1f3f7"/>
                                            <rect id="BG_04" width="13" height="274" rx="6.5" transform="translate(589 583)" fill="#f1f3f7"/>
                                            <rect id="BG_05" width="13" height="274" rx="6.5" transform="translate(635 583)" fill="#f1f3f7"/>
                                            <rect id="BG_06" width="13" height="274" rx="6.5" transform="translate(682 583)" fill="#f1f3f7"/>
                                            <rect id="BG_07" width="13" height="274" rx="6.5" transform="translate(729 583)" fill="#f1f3f7"/>
                                            <rect id="BG_08" width="13" height="274" rx="6.5" transform="translate(776 583)" fill="#f1f3f7"/>
                                            <rect id="BG_09" width="13" height="274" rx="6.5" transform="translate(823 583)" fill="#f1f3f7"/>
                                            <rect id="BG_10" width="13" height="274" rx="6.5" transform="translate(870 583)" fill="#f1f3f7"/>
                                            <rect id="BG_11" width="13" height="274" rx="6.5" transform="translate(917 583)" fill="#f1f3f7"/>
                                            <rect id="BG_12" width="13" height="274" rx="6.5" transform="translate(963 583)" fill="#f1f3f7"/>
                                            <rect id="BG_13" width="13" height="274" rx="6.5" transform="translate(1010 583)" fill="#f1f3f7"/>
                                            <rect id="BG_14" width="13" height="274" rx="6.5" transform="translate(1057 583)" fill="#f1f3f7"/>
                                            <rect id="BG_15" width="13" height="274" rx="6.5" transform="translate(1104 583)" fill="#f1f3f7"/>
                                        </g>
                                        <g id="Color_Lines" data-name="Color Lines">
                                            <rect id="BG-2" data-name="BG" width="13" height="74" rx="6.5" transform="translate(448 783)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_02-2" data-name="BG_02" width="13" height="129" rx="6.5" transform="translate(495 728)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_03-2" data-name="BG_03" width="13" height="214" rx="6.5" transform="translate(542 643)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_04-2" data-name="BG_04" width="13" height="174" rx="6.5" transform="translate(589 683)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_05-2" data-name="BG_05" width="13" height="74" rx="6.5" transform="translate(635 783)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_06-2" data-name="BG_06" width="13" height="204" rx="6.5" transform="translate(682 653)" fill="#c24a25"/>
                                            <rect id="BG_07-2" data-name="BG_07" width="13" height="174" rx="6.5" transform="translate(729 683)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_08-2" data-name="BG_08" width="13" height="54" rx="6.5" transform="translate(776 803)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_09-2" data-name="BG_09" width="13" height="244" rx="6.5" transform="translate(823 613)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_10-2" data-name="BG_10" width="13" height="114" rx="6.5" transform="translate(870 743)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_11-2" data-name="BG_11" width="13" height="144" rx="6.5" transform="translate(917 713)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_12-2" data-name="BG_12" width="13" height="194" rx="6.5" transform="translate(963 663)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_13-2" data-name="BG_13" width="13" height="114" rx="6.5" transform="translate(1010 743)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_14-2" data-name="BG_14" width="13" height="224" rx="6.5" transform="translate(1057 633)" fill="#c24a25" opacity="0.502"/>
                                            <rect id="BG_15-2" data-name="BG_15" width="13" height="44" rx="6.5" transform="translate(1104 813)" fill="#c24a25" opacity="0.502"/>
                                        </g>
                                        <g id="Days">
                                            <text id="S" transform="translate(452 881)" fill="#6a707e" font-size="16" font-family="Helvetica"><tspan x="-5.336" y="0">S</tspan></text>
                                            <text id="M" transform="translate(499.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-6.664" y="0">M</tspan></text>
                                            <text id="T" transform="translate(546.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-4.887" y="0">T</tspan></text>
                                            <text id="W" transform="translate(593.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-7.551" y="0">W</tspan></text>
                                            <text id="T-2" data-name="T" transform="translate(640.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-4.887" y="0">T</tspan></text>
                                            <text id="F" transform="translate(687.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-4.887" y="0">F</tspan></text>
                                            <text id="S-2" data-name="S" transform="translate(734.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-5.336" y="0">S</tspan></text>
                                            <text id="S-3" data-name="S" transform="translate(782.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-5.336" y="0">S</tspan></text>
                                            <text id="M-2" data-name="M" transform="translate(829.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-6.664" y="0">M</tspan></text>
                                            <text id="T-3" data-name="T" transform="translate(876.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-4.887" y="0">T</tspan></text>
                                            <text id="W-2" data-name="W" transform="translate(923.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-7.551" y="0">W</tspan></text>
                                            <text id="T-4" data-name="T" transform="translate(970.16 881)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-4.887" y="0">T</tspan></text>
                                            <text id="F-2" data-name="F" transform="translate(1017.16 882)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-4.887" y="0">F</tspan></text>
                                            <text id="G" transform="translate(1064.16 882)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-6.223" y="0">G</tspan></text>
                                            <text id="S-4" data-name="S" transform="translate(1111.16 882)" fill="#6a707e" font-size="16" font-family="Helvetica" letter-spacing="0.02em"><tspan x="-5.336" y="0">S</tspan></text>
                                        </g>
                                        <g id="Counter">
                                            <text id="_0" data-name="0" transform="translate(429 858)" fill="#6a707e" font-size="16" font-family="Helvetica"><tspan x="-8.898" y="0">0</tspan></text>
                                            <text id="_100" data-name="100" transform="translate(429 807)" fill="#6a707e" font-size="16" font-family="Helvetica"><tspan x="-26.695" y="0">100</tspan></text>
                                            <text id="_200" data-name="200" transform="translate(429 755)" fill="#6a707e" font-size="16" font-family="Helvetica"><tspan x="-26.695" y="0">200</tspan></text>
                                            <text id="_300" data-name="300" transform="translate(429 704)" fill="#6a707e" font-size="16" font-family="Helvetica"><tspan x="-26.695" y="0">300</tspan></text>
                                            <text id="_400" data-name="400" transform="translate(429 652)" fill="#6a707e" font-size="16" font-family="Helvetica"><tspan x="-26.695" y="0">400</tspan></text>
                                            <text id="_500" data-name="500" transform="translate(429 601)" fill="#6a707e" font-size="16" font-family="Helvetica"><tspan x="-26.695" y="0">500</tspan></text>
                                        </g>
                                        <text id="Applicants_Day" data-name="Applicants / Day" transform="translate(783 919)" fill="#6a707e" font-size="18" font-family="Helvetica"><tspan x="-65.03" y="0">Applicants / Day</tspan></text>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col recent-files'>
                            <h6>Recent Files</h6>
                            <table>
                                <tr>
                                    <th>Title</th>
                                    <th>Posted</th>
                                    <th>Expires</th>
                                    <th>Type</th>
                                    <th>Location</th>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="" name="" />
                                        Survey of looking mountain
                                    </td>
                                    <td>06/14/2022</td>
                                    <td>06/24/2022</td>
                                    <td>.pdf</td>
                                    <td>/roads jobs</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="chk" name="checkbox" />
                                        Progress Indicator
                                    </td>
                                    <td>07/12/2022</td>
                                    <td>07/15/2022</td>
                                    <td>.doc</td>
                                    <td>/projects</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="chk" name="checkbox" />
                                        iOS Application
                                    </td>
                                    <td>09/12/2022</td>
                                    <td>09/21/2022</td>
                                    <td>.doc</td>
                                    <td>/projects</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Dashboard;