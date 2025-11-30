import React from "react";
import CustomSlider from "../common/CustomSlider";

const MovieCompany = () => {
    return (
        <div>
            <CustomSlider>
                <div className="h-20 bg-red-500">Slide 1</div>
                <div className="h-20 bg-blue-500">Slide 2</div>
                <div className="h-20 bg-green-500">Slide 3</div>
            </CustomSlider>
        </div>
    );
};

export default MovieCompany;
