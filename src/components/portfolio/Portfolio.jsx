/* eslint-disable jsx-a11y/anchor-is-valid */
import './portfolio.css'
import IMG1 from '../../assets/web1.png'
import IMG2 from '../../assets/web2.png'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container ">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio sample1" />
            <h3>This is a portfolio item <h6>(TODO: place link to the actual demo when hosting is online)</h6> </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/business-thiem/project2-doggo-quiz" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="#" className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio sample2" />
            <h3>This is a portfolio item <h6>(TODO: place link to the actual demo when hosting is online)</h6> </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/business-thiem/project2-doggo-quiz" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="#" className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio sample1" />
            <h3>This is a portfolio item <h6>(TODO: place link to the actual demo when hosting is online)</h6> </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/business-thiem/project2-doggo-quiz" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="#" className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio sample2" />
            <h3>This is a portfolio item <h6>(TODO: place link to the actual demo when hosting is online)</h6> </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/business-thiem/project2-doggo-quiz" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="#" className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio sample1" />
            <h3>This is a portfolio item <h6>(TODO: place link to the actual demo when hosting is online)</h6> </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/business-thiem/project2-doggo-quiz" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="#" className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio sample2" />
            <h3>This is a portfolio item <h6>(TODO: place link to the actual demo when hosting is online)</h6> </h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/business-thiem/project2-doggo-quiz" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="#" className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Portfolio