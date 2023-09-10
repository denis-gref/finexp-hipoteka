import React from 'react';
import "./CreditWorthinessPage.scss";


function CreditWorthinessPage(props) {
    return (
        <div className="creditWorthines">
            <div className="creditWorthines-capture">
                {props.t("creditWorthiness_page_capture")}
            </div>
            <div class="lendi-widget"
                data-query="&primaryColor=%2334A573&secondaryColor=%2334A573&dark=false&agentId=21323&description=W%20razie%20pyta%C5%84%20lub%20w%C4%85tpliwo%C5%9Bci%20zach%C4%99cam%20do%20skorzystania%20z%20bezp%C5%82atnej%20konsultacji%20w%20moim%20%E2%98%95%20biurze%20lub%20%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%20online.&mode=0&utm_owner=21323&utm_fp_source_id=799&utm_fp_partner_id=1268"
                data-widget-name="CreditWorthinessOffersWidget"
                data-height="1900">
            </div>
        </div>

    );
}

export default CreditWorthinessPage;