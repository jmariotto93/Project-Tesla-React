import React from 'react'
import './styles.css'

import { BannerMain } from '../bannerMain/BannerMain';
import { Content } from '../Content/Content';
import { Banners } from '../Banners/Banners';

export const Section = () => {
  return (
    <section>
        <BannerMain 
        className="container-parallax1"
        title={"TESLA CYBERTRUCK"}
      />
      <Content 
        subTitle={"DESCUBRA A INCRÍVEL EXPERIÊNCIA DE DIRIGIR A CYBERTRUCK DA TESLA!"}
        text={'paragraph1'}
      />
      <Banners 
        className="container-parallax2"
        subTitle={"TESLA MODEL S II"}
      />
      <Content 
        subTitle={"O FUTURO DA MOBILIDADE COM O TESLA MODEL S II!"}
        text={'paragraph2'}
      />
      <Banners
        className="container-parallax3"
        subTitle={"TESLA MODEL X"}
      />
      <Content 
        subTitle={"A REVOLUÇÃO DA MOBILIDADE COM O TESLA MODEL X!"}
        text={'paragraph3'}
      />
    </section>
  )
}
