import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hamilton PPT Homepage</title>
        <meta property="og:title" content="Hamilton PPT Homepage" />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <span className="home-hamilton-passport-intranet">
          Hamilton Passport Intranet
        </span>
        <div className="home-separator"></div>
        <span className="home-text">
          The official website of Hamilton Passport
        </span>
      </header>
      <img
        alt="image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Passport_Flat_Icon_Vector.svg/240px-Passport_Flat_Icon_Vector.svg.png"
        className="home-image"
      />
      <footer className="home-footer">
        <span className="home-text001">
          Copyright © Government of Canada. All rights reserved.
        </span>
        <img
          alt="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Government_of_Canada_signature.svg/640px-Government_of_Canada_signature.svg.png"
          className="home-image1"
        />
        <img
          alt="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Canada_wordmark.svg/320px-Canada_wordmark.svg.png"
          className="home-image2"
        />
      </footer>
      <div className="home-div">
        <DangerousHTML
          html={`<a class="weatherwidget-io" href="https://forecast7.com/en/43d26n79d87/hamilton/" data-label_1="HAMILTON" data-label_2="WEATHER" data-font="Arial Black" data-icons="Climacons Animated" data-theme="orange" >HAMILTON WEATHER</a>
<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
</script>`}
        ></DangerousHTML>
      </div>
      <div data-thq="thq-dropdown" className="home-my-hr list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle">
          <span className="home-text002">
            <span>My HR / Info</span>
            <br></br>
          </span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
          <li data-thq="thq-dropdown" className="home-finances list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle001"
            >
              <span className="home-text005">Finances</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow01"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list01">
              <a
                href="https://phenix-phoenix.tpsgc-pwgsc.gc.ca/psp/PAYPRD01/?cmd=start&amp;languageCd=ENG"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li data-thq="thq-dropdown" className="home-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle002"
                  >
                    <span className="home-text006">Phoenix Pay System</span>
                  </div>
                </li>
              </a>
              <a
                href="https://mapayegc-mygcpay.tpsgc-pwgsc.gc.ca/en"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle003"
                  >
                    <span className="home-text007">My GCPay</span>
                  </div>
                </li>
              </a>
              <a
                href="https://awr-cwa.tpsgc-pwgsc.gc.ca/Pay-paystub_prod/identifiant-login.do?language=E"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown02 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle004"
                  >
                    <span className="home-text008">
                      CWA Pay Stubs and Tax Slips
                    </span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li data-thq="thq-dropdown" className="home-training list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle005"
            >
              <span className="home-text009">Training</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow02"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list02">
              <a
                href="https://esdc.sabacloud.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown03 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle006"
                  >
                    <span className="home-text010">SABA</span>
                  </div>
                </li>
              </a>
              <a
                href="https://app.csps-efpc.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown04 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle007"
                  >
                    <span className="home-text011">CSPS</span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li data-thq="thq-dropdown" className="home-hr-services list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle008"
            >
              <span className="home-text012">HR Services</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow03"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list03">
              <a
                href="https://iservice.prv/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle009"
                  >
                    <span className="home-text013">iService</span>
                  </div>
                </li>
              </a>
              <a
                href="https://masge-myems-peoplesoft.service.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle010"
                  >
                    <span className="home-text014">myEMS (PeopleSoft)</span>
                  </div>
                </li>
              </a>
              <a
                href="https://masge-myems.service.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown07 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle011"
                  >
                    <span className="home-text015">myEMS (SAP)</span>
                  </div>
                </li>
              </a>
              <a
                href="https://hrsc-csrh.service.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown08 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle012"
                  >
                    <span className="home-text016">HRSC</span>
                  </div>
                </li>
              </a>
              <a
                href="https://iservice.prv/eng/eap/index.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown09 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle013"
                  >
                    <span className="home-text017">
                      Employee Assistance Program
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://portal-portail.tbs-sct.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown10 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle014"
                  >
                    <span className="home-text018">TBS Application Portal</span>
                  </div>
                </li>
              </a>
              <a
                href="https://njdb-bden.service.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown11 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle015"
                  >
                    <span className="home-text019">
                      National Job Descriptions Bank
                    </span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li data-thq="thq-dropdown" className="home-im-it list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle016"
            >
              <span className="home-text020">IM / IT</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow04"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list04">
              <a
                href="https://iservice.prv/eng/imit/nsd/index.shtml"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown12 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle017"
                  >
                    <span className="home-text021">NSD</span>
                  </div>
                </li>
              </a>
              <a
                href="https://fimsvc.hrdc-drhc.net/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown13 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle018"
                  >
                    <span className="home-text022">
                      <span>Group Management Portal</span>
                      <br></br>
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eajl-orca.securise-secure.gc.ca/O/vw/bienvenue-welcome-eng.pub"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown14 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle019"
                  >
                    <span className="home-text025">ORCA (myKEY)</span>
                  </div>
                </li>
              </a>
              <a
                href="https://nscc-clients-pwgsc.gc.ca"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown15 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle020"
                  >
                    <span className="home-text026">NSCC</span>
                  </div>
                </li>
              </a>
              <a
                href="http://srmis-sigdi-iagent.prv/AppPortal/en"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown16 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle021"
                  >
                    <span className="home-text027">Application Catalogue</span>
                  </div>
                </li>
              </a>
              <a
                href="http://amp-pga.prv/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown17 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle022"
                  >
                    <span className="home-text028">
                      Access Management Portal
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://iservice.prv/eng/imit/catalogue/software_application/microsoft365/index.shtml"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown18 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle023"
                  >
                    <span className="home-text029">Office 365 Products</span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li
            data-thq="thq-dropdown"
            className="home-employee-contact-info list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle024"
            >
              <span className="home-text030">
                <span>Employee Contact Info</span>
                <br></br>
              </span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow05"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list05">
              <a
                href="https://offices-bureaux.service.gc.ca/FSCO-TBSC/eng/Home/View"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown19 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle025"
                  >
                    <span className="home-text033">Office Profiles</span>
                  </div>
                </li>
              </a>
              <a
                href="https://file:///S:/Common/Data%20Page/INFORMATION%20PHONE%20NUMBERS.docx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown20 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle026"
                  >
                    <span className="home-text034">Other Contact Info</span>
                  </div>
                </li>
              </a>
              <a
                href="https://file:///S:/Common/Passport%20Forms/1a%20Mountain%20Contact%20List%20-%20Updated%20List.docx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown21 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle027"
                  >
                    <span className="home-text035">
                      Hamilton Mountain Employee Info
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://file:///S:/Common/Passport%20Forms/1a%20East%20Contact%20List.docx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown22 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle028"
                  >
                    <span className="home-text036">
                      Hamilton East Employee Info
                    </span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li data-thq="thq-dropdown" className="home-insurance list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle029"
            >
              <span className="home-text037">Insurance</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow06"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list06">
              <a
                href="https://gwl.greatwestlife.com/sign-in"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown23 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle030"
                  >
                    <span className="home-text038">CanadaLife</span>
                  </div>
                </li>
              </a>
              <a
                href="https://www.sunnet.sunlife.com/signin/mysunlife/home.wca"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown24 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle031"
                  >
                    <span className="home-text039">Sunlife</span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </div>
      <div data-thq="thq-dropdown" className="home-websites list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle032">
          <span className="home-text040">Websites</span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow07">
            <svg viewBox="0 0 1024 1024" className="home-icon14">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list07">
          <li data-thq="thq-dropdown" className="home-locations list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle033"
            >
              <span className="home-text041">Locations</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow08"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list08">
              <a
                href="https://www.canadapost-postescanada.ca/information/app/fpo/personal/findpostoffice"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown25 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle034"
                  >
                    <span className="home-text042">Canada Post</span>
                  </div>
                </li>
              </a>
              <a
                href="https://atio.on.ca/directory/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown26 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle035"
                  >
                    <span className="home-text043">A.T.I.O. Directory</span>
                  </div>
                </li>
              </a>
              <a
                href="https://www.ontario.ca/locations/serviceontario"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown27 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle036"
                  >
                    <span className="home-text044">Service Ontario</span>
                  </div>
                </li>
              </a>
              <a
                href="https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown28 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle037"
                  >
                    <span className="home-text045">Service Canada</span>
                  </div>
                </li>
              </a>
              <a
                href="https://www.ontario.ca/locations/courts"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown29 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle038"
                  >
                    <span className="home-text046">
                      <span>Ontario Courts</span>
                      <br></br>
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://travel.gc.ca/assistance/embassies-consulates"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown30 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle039"
                  >
                    <span className="home-text049">Canadian Embassy</span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li
            data-thq="thq-dropdown"
            className="home-daily-work-related list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle040"
            >
              <span className="home-text050">
                <span>Daily Work Related</span>
                <br></br>
              </span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow09"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list09">
              <a
                href="https://lwr-ser.service.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown31 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle041"
                  >
                    <span className="home-text053">LWR</span>
                  </div>
                </li>
              </a>
              <a
                href="https://gsrcp-icmtr.service.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown32 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle042"
                  >
                    <span className="home-text054">ATOM</span>
                  </div>
                </li>
              </a>
              <a
                href="https://sr-ds.crm3.dynamics.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown33 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle043"
                  >
                    <span className="home-text055">MSD</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.ppt.gc.ca/operations/okc/index.aspx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown34 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle044"
                  >
                    <span className="home-text056">
                      Operations Knowledge Centre
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.ppt.gc.ca/asp_apps/operations/rpr/intro_e.asp"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown35 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle045"
                  >
                    <span className="home-text057">Returned PPT Registry</span>
                  </div>
                </li>
              </a>
              <a
                href="https://cosmos/COSMOSNG/loginform.aspx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown36 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle046"
                  >
                    <span className="home-text058">COSMOS</span>
                  </div>
                </li>
              </a>
              <a
                href="https://impact.prv"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown37 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle047"
                  >
                    <span className="home-text059">IMPACT</span>
                  </div>
                </li>
              </a>
              <a
                href="https://passage.ci.gc.ca"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown38 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle048"
                  >
                    <span className="home-text060">Passage</span>
                  </div>
                </li>
              </a>
              <a
                href="https://validation.ircc.gslb-gcc.global.gc.ca/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown39 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle049"
                  >
                    <span className="home-text061">CIC Validation Portal</span>
                  </div>
                </li>
              </a>
              <a
                href="https://owa.hrdc-drhc.net/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown40 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle050"
                  >
                    <span className="home-text062">Outlook (Web Based)</span>
                  </div>
                </li>
              </a>
              <a
                href="https://teams.microsoft.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown41 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle051"
                  >
                    <span className="home-text063">
                      Microsoft Teams (Web Based)
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="http://www.fallingrain.com/world/index.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown42 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle052"
                  >
                    <span className="home-text064">Country/City Directory</span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </div>
      <div data-thq="thq-dropdown" className="home-knowledge-forms list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle053">
          <span className="home-text065">
            <span>Knowledge/Forms</span>
            <br></br>
          </span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow10">
            <svg viewBox="0 0 1024 1024" className="home-icon20">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list10">
          <li data-thq="thq-dropdown" className="home-remarks list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle054"
            >
              <span className="home-text068">Remarks</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow11"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list11">
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/standardremarks-eng.htm"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown43 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle055"
                  >
                    <span className="home-text069">
                      Standard Remarks - Regional Offices
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations.okc/mail-standardremarks-eng.htm"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown44 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle056"
                  >
                    <span className="home-text070">
                      Standard Remarks - GPPC (Mail Environment)
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/ren-standardremarks-eng.htm"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown45 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle057"
                  >
                    <span className="home-text071">
                      Standard Remarks - GPPC (Renewal - Mail Environment)
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/scc-cso-standardremarks-eng.htm"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown46 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle058"
                  >
                    <span className="home-text072">
                      Standard Remarks - Service Canada Centres
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/boxid-eng.htm"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown47 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle059"
                  >
                    <span className="home-text073">
                      Virtual WLM - IRIS Box ID
                    </span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li data-thq="thq-dropdown" className="home-forms list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle060"
            >
              <span className="home-text074">
                <span>Forms</span>
                <br></br>
              </span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow12"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list12">
              <a
                href="https://file:///S:/Common/Passport%20Forms/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown48 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle061"
                  >
                    <span className="home-text077">Essential Work Slips</span>
                  </div>
                </li>
              </a>
              <a
                href="https://passage.ci.gc.ca/en/forms/index.aspx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown49 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle062"
                  >
                    <span className="home-text078">PPT Forms</span>
                  </div>
                </li>
              </a>
              <a
                href="https://file:///S:/Common/Data%20Page/Bar%20Code%20Reader%20Forms"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown50 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle063"
                  >
                    <span className="home-text079">Barcode Reader Forms</span>
                  </div>
                </li>
              </a>
              <a
                href="https://passage.ci.gc.ca/assets-passage/procedures/on-reg-eng.docx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown51 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle064"
                  >
                    <span className="home-text080">Vital Statistics Form</span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li data-thq="thq-dropdown" className="home-job-aids list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle065"
            >
              <span className="home-text081">Job Aids</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow13"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list13">
              <a
                href="https://eclipse.pptc.gc.ca/procedures/ppm-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown52 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle066"
                  >
                    <span className="home-text082">Passport Policy Manual</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/procedures/decb/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown53 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle067"
                  >
                    <span className="home-text083">DEC Book</span>
                  </div>
                </li>
              </a>
              <a
                href="https://laws-lois.justice.gc.ca/eng/regulations/SI-81-86/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown54 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle068"
                  >
                    <span className="home-text084">
                      Canadian Passport Order
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://esdc.prv/en/service-canada/service-delivery/tool/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown55 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle069"
                  >
                    <span className="home-text085">Age Calculator</span>
                  </div>
                </li>
              </a>
              <a
                href="https://esdc.prv/en/service-canada/service-delivery/passport-agent/tools/travel-date-tool.shtml"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown56 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle070"
                  >
                    <span className="home-text086">
                      PPT Travel Date Calculator
                    </span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </div>
      <div data-thq="thq-dropdown" className="home-policies list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle071">
          <span className="home-text087">Policies</span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow14">
            <svg viewBox="0 0 1024 1024" className="home-icon28">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list14">
          <li data-thq="thq-dropdown" className="home-names list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle072"
            >
              <span className="home-text088">Names</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow15"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon30">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list15">
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/ppds/Name_ID_QA-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown57 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle073"
                  >
                    <span className="home-text089">
                      Q&amp;A on Names / Supp.ID / Core Docs
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://file:///S:/Common/Data%20Page/Names,%20Names%20Interim%20Measures,%20SNV's%20Links/Names%20Interim%20Measures%201-5%20Revised%202017-01-20.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown58 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle074"
                  >
                    <span className="home-text090">Names Interim Measures</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/jobaids/names_matrix-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown59 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle075"
                  >
                    <span className="home-text091">Names and ID Matrix</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/jobaids/different-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown60 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle076"
                  >
                    <span className="home-text092">Not-Same-As Flowchart</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/jobaids/ManuallyAddedSNV-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown61 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle077"
                  >
                    <span className="home-text093">SNV Grid</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/communiques/Comm-Single_Name_Applicant-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown62 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle078"
                  >
                    <span className="home-text094">
                      Single Name Applicants (XXX)
                    </span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li data-thq="thq-dropdown" className="home-ircc-sl list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle079"
            >
              <span className="home-text095">IRCC / SL</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow16"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon32">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list16">
              <a
                href="https://file:///S:/Common/Passport%20Forms/11%20Security%20Email%20templates.docx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown63 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle080"
                  >
                    <span className="home-text096">
                      IRCC Security Email Template
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/docs/cicreferral/sl-codes-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown64 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle081"
                  >
                    <span className="home-text097">SL Codes Chart</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/docs/cicreferral/damaged-mutilated-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown65 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle082"
                  >
                    <span className="home-text098">
                      Damaged / Mutilated
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/cicreferral/care-procedure-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown66 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle083"
                  >
                    <span className="home-text099">Multiple Incidents</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/jobaids/CRM-Requirements%20for%20Duplicate%20passport%20vs%20Inaccessible%20passport-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown67 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle084"
                  >
                    <span className="home-text100">
                      Duplicate / Inaccessible
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/procedures/ppds-addingDOBandPOB-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown68 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle085"
                  >
                    <span className="home-text101">
                      DOB / POB Variations
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/docs/cicreferral/approval-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown69 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle086"
                  >
                    <span className="home-text102">IRCC Referall Types</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/docs/cicreferral/tracking-grid-forgery-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown70 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle087"
                  >
                    <span className="home-text103">Guarantor Forgery Grid</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/okc/docs/cicreferral/parental_forgery_grid-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown71 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle088"
                  >
                    <span className="home-text104">Parental Forgery Grid</span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
          <li data-thq="thq-dropdown" className="home-other list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle089"
            >
              <span className="home-text105">Other</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow17"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon34">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list17">
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/procedures/Translations-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown72 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle090"
                  >
                    <span className="home-text106">
                      Translation of Documents
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/jobaids/signature-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown73 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle091"
                  >
                    <span className="home-text107">
                      Signatures on PPT Applications
                    </span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/jobaids/pick-up-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown74 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle092"
                  >
                    <span className="home-text108">PPT Pickup Process</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/procedures/NASF-FileTransferProcedure-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown75 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle093"
                  >
                    <span className="home-text109">Transfer of Files</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/procedures/SRAPhase2Procedure-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown76 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle094"
                  >
                    <span className="home-text110">SRA Process</span>
                  </div>
                </li>
              </a>
              <a
                href="https://eclipse.pptc.gc.ca/operations/OKC/docs/jobaids/PhotoJobAid-eng.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown77 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle095"
                  >
                    <span className="home-text111">Photos</span>
                  </div>
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </div>
      <div data-thq="thq-dropdown" className="home-unions list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle096">
          <span className="home-text112">Unions</span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow18">
            <svg viewBox="0 0 1024 1024" className="home-icon36">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list18">
          <a href="https://unesen.ca" target="_blank" rel="noreferrer noopener">
            <li data-thq="thq-dropdown" className="home-une">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle097"
              >
                <span className="home-text113">U.N.E.</span>
              </div>
            </li>
          </a>
          <a
            href="https://psacunion.ca"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li data-thq="thq-dropdown" className="home-psac">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle098"
              >
                <span className="home-text114">P.S.A.C.</span>
              </div>
            </li>
          </a>
          <a
            href="https://www.ceiu-seic.ca"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li data-thq="thq-dropdown" className="home-ceiu">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle099"
              >
                <span className="home-text115">
                  <span>C.E.I.U.</span>
                  <br></br>
                </span>
              </div>
            </li>
          </a>
        </ul>
      </div>
      <img
        alt="image"
        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Blur_%286702217207%29.jpg"
        className="home-image3"
      />
      <a
        href="https://nationaltoday.com/what-is-today/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link81"
      >
        <img
          alt="image"
          src="https://www.nationaldaystoday.com/wp-content/uploads/2019/06/National-Days-Today-Logo.png"
          className="home-image4"
        />
      </a>
    </div>
  )
}

export default Home
