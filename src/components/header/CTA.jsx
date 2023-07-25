import resume from '../../assets/THresumev2.1.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={resume} download className='btn'>Download Resume</a>
        <a href="contact" className="btn btn-primary">Let's Connect!</a>
    </div>
  )
}
export default CTA