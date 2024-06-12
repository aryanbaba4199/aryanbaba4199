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
    <div class="py-6 md:px-16 px-4 md:mx-8 mx-2 rounded-md bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 filter mt-8 relative"> <Slider {...settings}>
    {data.map(({ _id, name, feedback, rating }) => (
      <div key={_id} class="p-4 shadow-2xl shadow-black">
        <div class="bg-slate-900 text-white  p-6 rounded-lg shadow-lg shadow-black flex flex-col justify-center items-center">
          <div class="mb-4">
            <p class="font-semibold">{name}</p>
          </div>
          <div class="mb-4">
            {[...Array(5)].map((_, index) => (
              <StarComponent key={index} filled={index < rating} />
            ))}
          </div>
          <div class="text-gray-600 italic">{feedback}</div>
        </div>
      </div>
    ))}
  </Slider>
  <div class="animate-spin absolute inset-70 filter backdrop-blur-4xl bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 opacity-75 blur-2xl"></div> </div>

  );
};

export default FeedbackSlider;
