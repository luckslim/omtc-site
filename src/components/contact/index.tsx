import { EnvelopeSimple, MapPin, WhatsappLogo } from "phosphor-react";
import { Container, ContainerContact, Map } from "./style";
export function Contact(){
    return (
        <Container>
            <ContainerContact>
                <span>
                    <div>
                        <h6>Whatsapp
                        </h6>
                        <WhatsappLogo size={23} weight="thin" color="#ffff"  />
                    </div>
                    <div><p>32342343</p></div>
                </span>
                <span>
                    <div>
                        <h6>Email
                        </h6>
                        <EnvelopeSimple size={23} weight="thin" />
                    </div>
                    <div><p>32342343</p></div>
                </span>
                <span>
                    <div>
                        <h6>Endereço
                        </h6>
                        <MapPin size={23} weight="thin" color="#ffff" />
                    </div>
                    <div><p>32342343</p></div>
                </span>
            </ContainerContact>
            <Map>
                <div className="map">
                <div className="elementor-element elementor-element-190e04f e-con-full e-flex e-con e-child" data-id="190e04f"
                    data-element_type="container">
                    <div className="elementor-element elementor-element-7493ff5 elementor-widget elementor-widget-google_maps"
                    data-id="7493ff5" data-element_type="widget" data-widget_type="google_maps.default">
                    <div className="elementor-widget-container">
                        <div className="elementor-custom-embed">
                        <iframe loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2867312950452!2d-43.188480725830054!3d-22.568376825862092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9909efc0d5366d%3A0x32fdf1067f08622d!2sTv.%20Joaquim%20Aguiar%2C%20182%20-%20Vila%20Mimosa%2C%20Mag%C3%A9%20-%20RJ%2C%2025900-000!5e0!3m2!1spt-BR!2sbr!4v1738081646741!5m2!1spt-BR!2sbr"
                            title="Sennacar Auto Peças Piabeta, R. Guarani, 369 - Piabetá, Magé - RJ, 25931-782"
                            aria-label="Sennacar Auto Peças Piabeta, R. Guarani, 369 - Piabetá, Magé - RJ, 25931-782"></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </Map>
        </Container>
    );
}