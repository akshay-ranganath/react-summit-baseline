import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
const Banner = lazy(() => import("../components/carousel/Banner"));


class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {    
    
    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />

        
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="/category" className="text-decoration-none">
                <img
                  src="../images/workshop/pexels-the-lazy-artist-gallery-1300550.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6 whitelink">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/category" className="text-decoration-none">
                <img
                  src="../images/workshop/people-3142549_1280.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Women's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/category" className="text-decoration-none">
                <img
                  src="../images/workshop/pexels-lumn-322207.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Accessories</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/category" className="text-decoration-none">
                <img
                  src="../images/workshop/pexels-jordan-hyde-1032110.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Footwear</div>
              </Link>
            </div>            
          </div>
          <div className="row">
            <div className="col-md-12">
            <div style={{ float: 'right', lineHeight: '1.2em', fontSize: '28px', margin: 0, padding: 0, display: 'block', marginBlockStart: '0.83em', marginBlockEnd: '0.83em', marginInlineStart: '0em', marginInlineEnd: '0em', textAlign: 'left', letterSpacing: 0, background: 'hsla(0,0%,100%,.75)' }}>

<h3>Slow fashion is the new Fast Fashion</h3>
<p>Sustainable. Practical. Perfect for working from home.</p>
</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeView;
