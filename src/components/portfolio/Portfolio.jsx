/* eslint-disable jsx-a11y/anchor-is-valid */
import './portfolio.css'
import data from './portfolio-sample'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container ">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <h3>{title}<h6>(TODO: place link to the actual demo when hosting is online)</h6> </h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }




        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio sample1" />
            <h3>This is a portfolio item <h6>(TODO: place link to the actual demo when hosting is online)</h6> </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/business-thiem/project2-doggo-quiz" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="#" className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article> */}

      </div>
    </section>
  )
}
export default Portfolio