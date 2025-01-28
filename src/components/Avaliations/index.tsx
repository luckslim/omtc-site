import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Container, ContainerAvaible, ContainerTestimonial, InfoAvaible } from './style';
import { StyledSlide } from './style'
import Rute from '../../assets/alunos/Rute.jpeg'
import Google from '../../assets/google.png'
import { Star } from 'phosphor-react';

export const TestimonialSwiper = () => {
    return (
        <Container>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={300}
                    autoplay={{ delay: 4000 }}
                    slidesPerView="auto"
                    pagination={{ 
                        el: ".swiper-pagination", // Use a valid DOM element here
                        type: "bullets",
                        clickable: true,
                        bulletClass: "bg-amber-400",
                        bulletActiveClass: "#ffff",
                     }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    className="init-swiper"
                >
                    {/* Testimonial 1 */}
                    <SwiperSlide>
                        <StyledSlide>
                            <ContainerTestimonial>
                                <ContainerAvaible>
                                    <img
                                        
                                        src={Rute}
                                        className="testimonial-img"
                                        alt="Rute Lisboa"
                                    />
                                    <span>
                                    <img
                                        
                                        src={Google}
                                        alt="Google"
                                    />
                                    </span>

                                </ContainerAvaible>
                                <InfoAvaible>
                                    <h4>Rute Lisboa 
                                        <span>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                        </span>
                                     </h4>
                                    <small>Aluna-OMTC</small>
                                </InfoAvaible>
                                <div>
                                    <p>A OMTC é incrível! O ambiente é acolhedor e inspirador, perfeito para aprender música. O professor Cláudio Luciano é extremamente dedicado e possui uma didática excelente, que facilita muito o aprendizado. Recomendo para todos os amantes de música!</p>
                                </div>
                            </ContainerTestimonial>
                        </StyledSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledSlide>
                            <ContainerTestimonial>
                                <ContainerAvaible>
                                    <img
                                        
                                        src={Rute}
                                        className="testimonial-img"
                                        alt="Rute Lisboa"
                                    />
                                    <span>
                                    <img
                                        
                                        src={Google}
                                        alt="Google"
                                    />
                                    </span>

                                </ContainerAvaible>
                                <InfoAvaible>
                                    <h4>Rute Lisboa 
                                        <span>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                        </span>
                                     </h4>
                                    <small>Aluna-OMTC</small>
                                </InfoAvaible>
                                <div>
                                    <p>A OMTC é incrível! O ambiente é acolhedor e inspirador, perfeito para aprender música. O professor Cláudio Luciano é extremamente dedicado e possui uma didática excelente, que facilita muito o aprendizado. Recomendo para todos os amantes de música!</p>
                                </div>
                            </ContainerTestimonial>
                        </StyledSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledSlide>
                            <ContainerTestimonial>
                                <ContainerAvaible>
                                    <img
                                        
                                        src={Rute}
                                        className="testimonial-img"
                                        alt="Rute Lisboa"
                                    />
                                    <span>
                                    <img
                                        
                                        src={Google}
                                        alt="Google"
                                    />
                                    </span>

                                </ContainerAvaible>
                                <InfoAvaible>
                                    <h4>Rute Lisboa 
                                        <span>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                        </span>
                                     </h4>
                                    <small>Aluna-OMTC</small>
                                </InfoAvaible>
                                <div>
                                    <p>A OMTC é incrível! O ambiente é acolhedor e inspirador, perfeito para aprender música. O professor Cláudio Luciano é extremamente dedicado e possui uma didática excelente, que facilita muito o aprendizado. Recomendo para todos os amantes de música!</p>
                                </div>
                            </ContainerTestimonial>
                        </StyledSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledSlide>
                            <ContainerTestimonial>
                                <ContainerAvaible>
                                    <img
                                        
                                        src={Rute}
                                        className="testimonial-img"
                                        alt="Rute Lisboa"
                                    />
                                    <span>
                                    <img
                                        
                                        src={Google}
                                        alt="Google"
                                    />
                                    </span>

                                </ContainerAvaible>
                                <InfoAvaible>
                                    <h4>Rute Lisboa 
                                        <span>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                        </span>
                                     </h4>
                                    <small>Aluna-OMTC</small>
                                </InfoAvaible>
                                <div>
                                    <p>A OMTC é incrível! O ambiente é acolhedor e inspirador, perfeito para aprender música. O professor Cláudio Luciano é extremamente dedicado e possui uma didática excelente, que facilita muito o aprendizado. Recomendo para todos os amantes de música!</p>
                                </div>
                            </ContainerTestimonial>
                        </StyledSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledSlide>
                            <ContainerTestimonial>
                                <ContainerAvaible>
                                    <img
                                        
                                        src={Rute}
                                        className="testimonial-img"
                                        alt="Rute Lisboa"
                                    />
                                    <span>
                                    <img
                                        
                                        src={Google}
                                        alt="Google"
                                    />
                                    </span>

                                </ContainerAvaible>
                                <InfoAvaible>
                                    <h4>Rute Lisboa 
                                        <span>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                        </span>
                                     </h4>
                                    <small>Aluna-OMTC</small>
                                </InfoAvaible>
                                <div>
                                    <p>A OMTC é incrível! O ambiente é acolhedor e inspirador, perfeito para aprender música. O professor Cláudio Luciano é extremamente dedicado e possui uma didática excelente, que facilita muito o aprendizado. Recomendo para todos os amantes de música!</p>
                                </div>
                            </ContainerTestimonial>
                        </StyledSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledSlide>
                            <ContainerTestimonial>
                                <ContainerAvaible>
                                    <img
                                        
                                        src={Rute}
                                        className="testimonial-img"
                                        alt="Rute Lisboa"
                                    />
                                    <span>
                                    <img
                                        
                                        src={Google}
                                        alt="Google"
                                    />
                                    </span>

                                </ContainerAvaible>
                                <InfoAvaible>
                                    <h4>Rute Lisboa 
                                        <span>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                        </span>
                                     </h4>
                                    <small>Aluna-OMTC</small>
                                </InfoAvaible>
                                <div>
                                    <p>A OMTC é incrível! O ambiente é acolhedor e inspirador, perfeito para aprender música. O professor Cláudio Luciano é extremamente dedicado e possui uma didática excelente, que facilita muito o aprendizado. Recomendo para todos os amantes de música!</p>
                                </div>
                            </ContainerTestimonial>
                        </StyledSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledSlide>
                            <ContainerTestimonial>
                                <ContainerAvaible>
                                    <img
                                        
                                        src={Rute}
                                        className="testimonial-img"
                                        alt="Rute Lisboa"
                                    />
                                    <span>
                                    <img
                                        
                                        src={Google}
                                        alt="Google"
                                    />
                                    </span>

                                </ContainerAvaible>
                                <InfoAvaible>
                                    <h4>Rute Lisboa 
                                        <span>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                            <Star size={20}color="#ffee00f9"/>
                                        </span>
                                     </h4>
                                    <small>Aluna-OMTC</small>
                                </InfoAvaible>
                                <div>
                                    <p>A OMTC é incrível! O ambiente é acolhedor e inspirador, perfeito para aprender música. O professor Cláudio Luciano é extremamente dedicado e possui uma didática excelente, que facilita muito o aprendizado. Recomendo para todos os amantes de música!</p>
                                </div>
                            </ContainerTestimonial>
                        </StyledSlide>
                    </SwiperSlide>
                </Swiper>
                    <div className="swiper-pagination"></div>
            </div>
        </Container>

    );
};
