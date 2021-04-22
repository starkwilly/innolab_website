import React, { lazy, Suspense } from "react";
import  {Card ,Container} from 'react-bootstrap'
import Hero from '../Hero/Hero'

const Dashboard = () => {
    // TODO: get the gdpr value from the correct source
    const gdprDate = localStorage.getItem("gdprDate");
    const GdprDialog =
        gdprDate === null
            ? lazy(() => import("../../common/GdprDialog"))
            : null;

    const cardInfo = [
        { header:"BlaBLa1", title: "titulo1", text: "text1"},
        { header:"BlaBLa2",title: "titulo2", text: "text2"},
        { header:"BlaBLa3" ,title: "titulo3", text: "text3"}    
    ]    
    
    const renderCard = ( card , index ) =>{
        return(
            <Card className='card' key={index}>
                <Card.Header as="h5">{card.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text> 
                </Card.Body>
            </Card>
        )
    }

    return (
        <>         
          <Hero  />
          <Container>
            <h2>News</h2>
            <Container id="news" className="news" fluid>
            {cardInfo.map(renderCard)}
            </Container>

            <h2>aboutus</h2>
            <Container className="aboutus" fluid  >
            {cardInfo.map(renderCard)}
            </Container>

            <h2>products</h2>
            <Container className="products" fluid  >
            {cardInfo.map(renderCard)}
            </Container>

            <h2>services</h2>
            <Container className="services" fluid  >
            {cardInfo.map(renderCard)}
            </Container>

            <h2>innovate</h2>
            <Container className="innovate" fluid  >
            {cardInfo.map(renderCard)}
            </Container>

            <h2>contaUs</h2>
            <Container className="contaUs" fluid  >
            {cardInfo.map(renderCard)}
            </Container>
            
          </Container>
        <Suspense fallback={<></>}>{GdprDialog && <GdprDialog />}</Suspense>
        </>
    );
};

export default Dashboard;
