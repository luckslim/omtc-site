import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Container } from './style';
import { StyledSlide } from './style'

export const TestimonialSwiper = () => {
    return (
        <Container>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView="auto"
                    pagination={{ clickable: true }}
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
                        
                            <div className="testimonial-item">
                                <div className="avaible">
                                    <img
                                        style={{ width: '50px' }}
                                        src="assets/img/thiagoduque.png"
                                        className="testimonial-img"
                                        alt="Thiago Duque"
                                    />
                                    <img
                                        style={{ width: '30px', height: '30px' }}
                                        src="assets/img/Google.png"
                                        alt="Google"
                                    />
                                </div>
                                <h3>Thiago Duque</h3>
                                <h4>Cliente</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>Ótimos preços e excelente atendimento.</span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </StyledSlide>
                    </SwiperSlide>

                    {/* Testimonial 2 */}
                    <SwiperSlide>
                    <StyledSlide>
                    <div className="testimonial-item">
                            <div className="avaible">
                                <img
                                    style={{ width: '50px' }}
                                    src="assets/img/erickfonseca.png"
                                    className="testimonial-img"
                                    alt="Erick Fonseca"
                                />
                                <img
                                    style={{ width: '30px', height: '30px' }}
                                    src="assets/img/Google.png"
                                    alt="Google"
                                />
                            </div>
                            <h3>Erick Fonseca</h3>
                            <h4>Cliente</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>Ótimos preço e excelente atendimento, recomendo !</span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </StyledSlide>

                    </SwiperSlide>

                    {/* Testimonial 3 */}
                    <SwiperSlide>
                        <StyledSlide>
                                                    <div className="testimonial-item">
                            <div className="avaible">
                                <img
                                    style={{ width: '50px' }}
                                    src="assets/img/unnamed.png"
                                    className="testimonial-img"
                                    alt="Nicolas Gonçalves"
                                />
                                <img
                                    style={{ width: '30px', height: '30px' }}
                                    src="assets/img/Google.png"
                                    alt="Google"
                                />
                            </div>
                            <h3>Nicolas Gonçalves</h3>
                            <h4>Cliente</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>Ótimos preços e excelente atendimento</span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                        </StyledSlide>

                    </SwiperSlide>

                    {/* Testimonial 4 */}
                    <SwiperSlide>
                        <StyledSlide>
                                                    <div className="testimonial-item">
                            <div className="avaible">
                                <img
                                    style={{ width: '50px' }}
                                    src="assets/img/gabrielfire.png"
                                    className="testimonial-img"
                                    alt="Gabriel Fire"
                                />
                                <img
                                    style={{ width: '30px', height: '30px' }}
                                    src="assets/img/Google.png"
                                    alt="Google"
                                />
                            </div>
                            <h3>Gabriel Fire</h3>
                            <h4>Cliente</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>Ótimo, fui muito bem atendido, produtos originais.</span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                        </StyledSlide>

                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </Container>

    );
};
