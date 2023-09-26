import styles from './Banner_principal.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const estilo1 = {
    backgroundColor: 'red',
    width: '100%',
    height: '100%'
}

const estilo2 = {
    backgroundColor: 'green',
    width: '100%',
    height: '100%'
}

const estilo3 = {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%'
}

const estilo4 = {
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
}

export default function Banner_Principal(){
    return (
        <div className={styles.destaque}>
            <div>
                <Swiper className={styles.swiper} spaceBetween={0} slidesPerView={1} loop={true}>
                    <SwiperSlide><div style={estilo1}></div></SwiperSlide>
                    <SwiperSlide><div style={estilo2}></div></SwiperSlide>
                    <SwiperSlide><div style={estilo3}></div></SwiperSlide>
                    <SwiperSlide><div style={estilo4}></div></SwiperSlide>
                </Swiper>
            </div>
        </div>
      );
}
