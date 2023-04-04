function Header() {
    return (
    <div className="row header fixed-top">
        <div className="col-2 h-left d-flex align-items-center justify-content-start">
            <a href="roads">
                <img className="logo-roads" src="whitelogo.png" alt="Bostonian Post"/>
            </a>
        </div>
        <div className="col-10 h-right d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 search-bar">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.435" height="16.44" viewBox="0 0 13.435 13.44">
                                <path id="Icon" d="M386.467,55.034,383.2,51.768a5.734,5.734,0,1,0-.566.566L385.9,55.6a.406.406,0,0,0,.283.119.393.393,0,0,0,.283-.119A.4.4,0,0,0,386.467,55.034ZM373.95,48.01a4.925,4.925,0,1,1,4.925,4.929A4.931,4.931,0,0,1,373.95,48.01Z" transform="translate(-373.148 -42.279)" fill="#aaa"/>
                            </svg>
                        </div>
                        <input type="search" placeholder="Search..."></input>
                    </div>
                    <div className="col-7 icons text-end">
                        <a href="a">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.399" height="16" viewBox="0 0 22.399 16">
                                <path className="message" id="Icon-Mail" d="M1540.41,59a1.615,1.615,0,0,1-1.105-.435l7.924-6.791L1550,54.2l2.772-2.425,7.918,6.791a1.607,1.607,0,0,1-1.1.435Zm13.056-7.874L1561.2,44.4V57.7ZM1538.8,44.4l7.733,6.721L1538.8,57.7Zm.508-.968a1.606,1.606,0,0,1,1.1-.437h19.178a1.609,1.609,0,0,1,1.105.434L1550,52.6Z" transform="translate(-1538.8 -42.999)" fill="#aaa"/>
                            </svg>
                        </a>
                        <a href="a">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23">
                                <path className="bell" id="Color_Overlay" data-name="Color Overlay" d="M1604.644,58.7h4.7a2.353,2.353,0,0,1-4.7,0ZM1597,57.553V56.4l2.355-2.3V47.777a7.43,7.43,0,0,1,5.883-7.243v-.809a1.763,1.763,0,0,1,3.524,0v.809a7.43,7.43,0,0,1,5.881,7.243V54.1L1617,56.4v1.151Z" transform="translate(-1597 -38)" fill="#aaa"/>
                            </svg>
                        </a>
                        <a className="profile" href="a">
                            <img className="img-profile" src="/andres.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Header;


