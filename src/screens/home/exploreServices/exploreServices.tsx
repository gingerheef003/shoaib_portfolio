import React from 'react';
import './exploreServices.scss'

import webDev from '../../../assets/icons/webDev.png'
import appDev from '../../../assets/icons/appDev.png'
import brandMarketing from '../../../assets/icons/brandMarketing.png'
import contentWriting from '../../../assets/icons/contentWriting.png'
import DMS from '../../../assets/icons/DMS.png'

type ExploreServicesProps = {
    
};

const ExploreServices:React.FC<ExploreServicesProps> = () => {
    
    return <div className='explore-services'>
        <div className='title'>Explore Our Services</div>
        <div className='services-cards'>
            
            <div className='explore-card web'>
                <img src={webDev} alt="" className="service-icon" />
                <div className='service-name'>Web Development</div>
            </div>

            <div className='explore-card app'>
                <img src={appDev} alt="" className="service-icon" />
                <div className='service-name'>App Development</div>
            </div>

            <div className='explore-card dms'>
                <img src={DMS} alt="" className="service-icon" />
                <div className='service-name'>Digital Marketing Services</div>
            </div>

            <div className='explore-card brandMarketing'>
                <img src={brandMarketing} alt="" className="service-icon" />
                <div className='service-name'>Brand Marketing</div>
            </div>

            <div className='explore-card contentWriting'>
                <img src={contentWriting} alt="" className="service-icon" />
                <div className='service-name'>Content Writing</div>
            </div>
        </div>
    </div>
}
export default ExploreServices;