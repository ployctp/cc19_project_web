import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ContentCarousel = () => {
    const [data, setData] = useState([
        { imageUrl: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { imageUrl: "https://images.unsplash.com/photo-1571867424485-369464ed33cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { imageUrl: "https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
       
    ]);

    return (
        <div className="bg-white min-h-screen">
        <div style={{ width: '100%', height: '50vh' }}> 
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ width: '100%', height: '100%' }} 
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={item.imageUrl}
                            alt={`Slide ${i}`}
                            style={{
                                width: '100%',   
                                height: '100%',  
                                objectFit: 'cover', 
                                 
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
    );
};

export default ContentCarousel;
