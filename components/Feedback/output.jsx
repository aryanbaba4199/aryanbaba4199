import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Star } from "@mui/icons-material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const StarComponent = ({ filled }) => (
  <Star className={filled ? "text-yellow-500" : "text-gray-300"} />
);

const FeedbackSlider = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/feedback/feedback`);
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };

  return (
    <div className="p-8 md:mx-8 mx-2 rounded-md px-24 bg-gray-800 mt-8 ">
      <Slider {...settings}>
        {data.map(({ _id, name, feedback, rating }) => (
          <div key={_id} className="p-4">
            <div className=" text-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
              <div className="mb-4">
                <p className="font-semibold">{name}</p>
              </div>
              <div className="mb-4">
                {[...Array(5)].map((_, index) => (
                  <StarComponent key={index} filled={index < rating} />
                ))}
              </div>
              <div className="text-gray-200 italic">{feedback}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
