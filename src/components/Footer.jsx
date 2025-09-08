import React from 'react';
import { logoData, companyData, customerCenterData, footerMenus } from "../util/footer";
import Nav from './Nav';
import "../styles/components/footer.scss"
import "../util/footer"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner foot-inner">
        <div className="left">
          <h3>
            <a href="#">
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>

          <ul className="foot-lst-1">
            {companyData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}

          </ul>

        </div>

        <div className="center">
          <div className="foot-menus">
            {footerMenus.map((menu, index) => (
              <div key={index}>
                <h4>{menu.title}</h4>
                <ul>
                    {menu.items.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* 오른쪽 영역(비워둠 / SNS 등 넣을 자리) */}
        <div className="right">

          {/* 고객센터 */}
          <div>
            <h4>{customerCenterData.title}</h4>
            <p className='cs-box'>
              <a href={customerCenterData.phoneHref}>
                {customerCenterData.phone}
              </a>
            </p>
            <p>{customerCenterData.hours}</p>
            <p>{customerCenterData.notice}</p>
            <a className='talk-btn' href={customerCenterData.talkHref}>
              {customerCenterData.talkLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;