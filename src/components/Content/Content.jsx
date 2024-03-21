import React from 'react'
import './styles.css'

export const Content = ({subTitle, text}) => {
    const texts = {
        paragraph1: "Na Tesla, acreditamos que dirigir é mais do que apenas ir do ponto A ao ponto B - é uma      experiência. A Cybertruck redefine a forma como você encara a estrada. Imagine-se na estrada, rodeado pelo futuro da mobilidade. A Cybertruck não é apenas um veículo; é uma declaração de vanguarda. Com seu design único e tecnologia inovadora, oferece uma nova perspectiva sobre o que um carro pode ser. A Cybertruck oferece opções personalizadas para atender suas preferências. Seu design robusto e elegante reflete um estilo de vida moderno e sustentável. Na Tesla, estamos comprometidos com a inovação e a preservação do meio ambiente. Cada detalhe da Cybertruck, desde sua concepção até a fabricação, reflete nosso compromisso com a excelência e a sustentabilidade. Então, da próxima vez que pensar em dar uma volta, experimente a emoção de dirigir a Cybertruck. Descubra a  revolução da condução com a Tesla's Cybertruck.",

        paragraph2: "Imagine-se navegando pelas estradas, imerso no que há de mais avançado em tecnologia automotiva. O Tesla Model S II não é apenas um carro; é uma manifestação de inovação e elegância. Seu design revolucionário e suas características técnicas pioneiras oferecem uma nova perspectiva sobre o que um veículo pode alcançar. Personalize sua experiência de condução com o Tesla Model S II, adaptando-o às suas preferências e estilo de vida. Seu design refinado e sua funcionalidade incomparável refletem um compromisso com a excelência e a sustentabilidade. Então, quando estiver pronto para explorar novos horizontes, entregue-se à emoção de conduzir o Tesla Model S II. Descubra uma nova era na estrada com o Tesla Model S II.",

        paragraph3: "Imagine-se navegando pelas estradas, envolto em luxo e inovação. O Tesla Model X não é apenas um veículo; é uma expressão de sofisticação e excelência técnica. Seu design incomparável e suas características vanguardistas oferecem uma visão totalmente nova do que um carro pode ser. Personalize sua jornada com o Tesla Model X, adaptando-o às suas preferências e necessidades individuais. Seja explorando a cidade ou aventurando-se além do asfalto, o Tesla Model X oferece o desempenho e a versatilidade que você espera de um veículo de classe mundial. Na Tesla, estamos comprometidos com a criação de um futuro mais sustentável e inspirador. Cada aspecto do   Tesla Model X, desde sua concepção até sua fabricação, reflete nosso compromisso com a inovação e a preservação do meio ambiente.",

        
      };

     
  return (
    <section id="informacoes" className="container-texto">
        <h2>{subTitle}</h2>
        <p>{texts[text]}</p>
    </section>
  )
}
