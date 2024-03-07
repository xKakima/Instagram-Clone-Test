import { Col, Row } from "react-bootstrap";
import SideBar from "./components/SideBar/SideBar";
import ProfileHeader from "./components/MainPage/ProfileHeader";


export default function App() {
  return (
    <Row>
      <SideBar />
      <Col sm={11}>
        <ProfileHeader/>
      </Col>
    </Row>
  );
}

