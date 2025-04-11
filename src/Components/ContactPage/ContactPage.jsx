// ContactPage.js
import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="imf-header">
  

      <h2>How to Contact the IMF</h2>
      
      <p>
        For more information about access and directions to the IMF headquarters buildings, 
        please see <a href="/directions">Directions and Access to IMF Headquarters</a>.
      </p>

      <div className="contact-info">
        <h3>Headquarters 1 (HQ1):</h3>
        <p>International Monetary Fund, 700 19th Street, N.W., Washington, D.C. 20431</p>
        
        <h3>Headquarters 2 (HQ2):</h3>
        <p>International Monetary Fund, 1900 Pennsylvania Ave NW, Washington, DC, 20431</p>
        
        <p><strong>Telephone Operator:</strong> +1 (405) 210-3255 · <strong>Fax:</strong> +1 (405) 210-3255</p>
        <p><strong>Email:</strong> michealp.kortan@gmail.com·</p>
        
        
        <p><strong>SWIFT:</strong> IMFDUS3WXXX</p>
      </div>

      <div className="business-hours">
        <h3>Business Hours</h3>
        <ul>
          <li>Monday-Friday: 8:30 a.m. to 6:00 p.m. (ET).</li>
          <li>
            Saturdays, Sundays, and holidays*: closed.
            <br />
            <small>*For holiday schedule, please see the <a href="/holidays">IMF Business Hours, Holidays, and Emergency Closures</a> page.</small>
          </li>
        </ul>
      </div>

      <p className="webmaster">
        Comments or questions about the IMF's website: <a href="mailto:webmaster@imf.org">contact IMF Webmaster</a>
      </p>
    </div>
  );
};

export default ContactPage;