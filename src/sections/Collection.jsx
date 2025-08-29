import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import collectionData from '../util/collection'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/sections/collection.scss"

import { Pagination, Navigation } from 'swiper/modules';

const Collection = () => {
    return (
        <div className='inner collection-inner'>
            <div className="t-wrap">
                <h2 className='tit'>
                    TOCOBO COLLECTION
                </h2>
                <p className="txt">
                    Shop By Category
                </p>
            </div>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
            type: 'progressbar',
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}

        >
        {collectionData.map((item)=>(
        <SwiperSlide key={item.id}>
            <a href="#">
                <div className="info-wrap">
                    <div className="info-tit">{item.title}</div>
                    <div className="name">{item.name}</div>
                    <div className="k-name">{item.kname}</div>
                </div>
                <div className="img-wrap">
                    <img src={item.image} alt={item.name} />
                </div>
            </a>
        </SwiperSlide>
        ))}
        </Swiper>
        </div>
    )
}

export default Collection