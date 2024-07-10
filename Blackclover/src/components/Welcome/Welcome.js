import React from "react";
import './Welcome.css'; // Corrected path assuming Welcome.css is in the same directory
import imge1 from '../../assets/one.png';
import imge2 from '../../assets/two.png';
import imge3 from '../../assets/three.png';

function Welcome() {
    return (
        <div className="welcome">
            <p className="text-4xl mt-20 text-center welcomStore">WELCOME TO OUR STORE</p>
            <p className="heroDescription relative text-xl flex flex-wrap">
                The self-care brand that's setting a new standard. Natural products, to help you feel good in your own body.
            </p>
            <div className="heroPicHold flex flex-row">
                <img src={imge1} alt="..." className="w-20" />
                <img src={imge2} alt=".." className="w-20" />
                <img src={imge3} alt=".." className="w-20" />
            </div>
            <div class=" text-xl font-medium flex flex-row heroHeadingHold">
                <p> Powered By Nature </p>
                <p> Exceptional Quality </p>
                <p> Skin First Formulas </p>
                </div>
                <div class="heroDescHold flex-row flex relative text-base font-normal">
                <p>Inspired by nature</p>
                <p>Exceptional quality</p>
                <p> Puts on skin first</p>
                </div>
            </div>
    );
}

export default Welcome;
