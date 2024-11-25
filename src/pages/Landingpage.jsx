import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <>
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={6}>
        <h3>Welcome to <span className='text-warning'> Media Player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem velit, beatae dolor voluptatum repellat voluptate ipsam quia esse error magnam suscipit modi deserunt eaque. Harum, ea? Animi aliquam in sequi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur autem expedita eveniet hic nam et, iure necessitatibus, maiores ducimus laborum, molestias ea incidunt assumenda eos commodi. Consequatur nisi modi eveniet.</p>
        <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>

        <Col sm={12} md={6} >
        <img src="https://cdn.dribbble.com/users/793057/screenshots/4220268/music_visualisation.gif" alt="no image" className='w-75'/>
        </Col>
      </Row>
    </Container>

    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h4 className='text-center'>Features</h4>
          <div className="row  mt-5">
            <div className="col-md-4">
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.makeagif.com/media/4-19-2023/ppv6Gz.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4 mt-4 mt-md-0">
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/b8/c4/4cb8c4cfc86c8b4df29625386afe3c8e.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4 mt-4 mt-md-0">
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
     
    <Container>
        <Row>
          <Col md={6}>
          <h3 className='text-warning'>Simple fast and powerful</h3>
          <p><span style={{fontSize:'40px' ,textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          <p><span style={{fontSize:'40px', textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          <p><span style={{fontSize:'40px', textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          </Col>
          <Col md={6}>
          <iframe width="560" height="440" src="https://www.youtube.com/embed/roz9sXFkTuE?si=yjvgH1WEV08Bs1VP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landingpage