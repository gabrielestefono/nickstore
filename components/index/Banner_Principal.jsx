import styles from './Banner_principal.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Banner_Principal(){
    return (
        <div className={styles.destaque}>
            <div>
                <Swiper className={styles.swiper} spaceBetween={0} slidesPerView={1} loop={true}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
      );
}
