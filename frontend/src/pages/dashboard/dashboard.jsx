import React from 'react'
import { Container, Row, Col } from "reactstrap";
import './dashboard.scss';
import Lupe from './assets/suche.png';

const Dashboard = () => {
  return (
    <>
      <section>
        <Container fluid className="dashboard-header-container">
          <Row className="dashboard-header-row">
            <Col>
              <h4>Dashboard</h4>
            </Col>
            <Col>
              <p>Profil</p>
            </Col>
            <Col>
              <p>zu verschenkende Dinge / Dienstleistungen</p>
            </Col>
            <Col>
              <p>Chat</p>
            </Col>
            <Col>
              <form className="search-bar">
                <input type='text' placeholder='Suchen...' />
              </form>
            </Col>
            <Col>
              <p>EXIT- Log Out!</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="dashboard-body-container">
        <Container fluid >
        <Row>
        <Col className="dashboard-side-bar" sm={2}>
            <p>Kategorien</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo optio culpa suscipit omnis provident perspiciatis maiores eius fuga, expedita commodi fugit ab dolor? Ipsum facere suscipit fuga! Consequatur, voluptatum magni. Libero officia sed error quaerat cupiditate dolorum facilis facere consequuntur quam dolor delectus, aperiam accusantium? Architecto alias odio ab. Nostrum nisi harum odio est error mollitia ratione nulla nam soluta, asperiores voluptatem eos. Quis fugiat asperiores quos, quaerat deleniti labore ad. Illum, sint iusto dolorum vero beatae dolor veniam autem id, ipsam dolorem laudantium sapiente voluptatum eligendi totam fugiat, esse molestias eius rerum suscipit aliquid reprehenderit. Id, nulla consectetur?</p>
        </Col>
        <Col className="dashboard-body" sm={10}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus. Expedita ducimus vitae magnam excepturi doloremque, similique mollitia. Deleniti porro nobis nam distinctio laboriosam cumque id quas, magnam, saepe tempore quaerat voluptas. Officia dolorum ullam molestias deserunt autem iure fugit nulla tempore repudiandae. Recusandae nostrum voluptate, eos pariatur amet eaque natus iste neque enim fugiat nam quas a, ipsum sequi mollitia deleniti hic. Ducimus explicabo doloremque autem, ex quisquam ratione, nulla accusantium earum harum maxime quasi vel? Praesentium modi perspiciatis inventore nam, ipsum harum, est et, autem beatae voluptatem enim deleniti voluptatum quae voluptas recusandae porro! Nemo esse omnis nam odit, temporibus explicabo alias expedita voluptates iusto optio suscipit ad inventore nisi quibusdam aut doloribus ut commodi? Exercitationem obcaecati dolorem perspiciatis fuga perferendis tempora praesentium reprehenderit dolor minima ducimus? Voluptate non delectus voluptatum, veritatis expedita dolor saepe. Tempora quae suscipit optio magnam nam iusto eveniet asperiores debitis sit et dicta unde blanditiis eos, libero, perspiciatis consequatur. Dolor, laborum praesentium quis nostrum libero asperiores quasi excepturi molestias, saepe, harum ut alias commodi repudiandae voluptate expedita aperiam quaerat voluptatum laudantium. Impedit omnis sit ullam, possimus qui aut vel nihil necessitatibus est eum magnam eaque reprehenderit neque dolorum nobis. Optio modi perferendis doloremque?</p>
        </Col>
        </Row>
        </Container>
      </section>
   </>
  )
}

export default Dashboard