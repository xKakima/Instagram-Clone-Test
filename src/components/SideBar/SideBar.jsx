import { Col } from "react-bootstrap";
import SideBarButton from "./SideBarButton";

export default function SideBar() {
    return (
      <Col
        sm={1}
        className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
        style={{ position: "sticky", top: 0 }}
      >
        <SideBarButton
          buttonVariant={"light my-4"}
          icon={"bi bi-instagram"}
        ></SideBarButton>
        <SideBarButton icon={"bi bi-house"} />
        <SideBarButton icon={"bi bi-search"} />
        <SideBarButton icon={"bi bi-compass"} />
        <SideBarButton icon={"bi bi-film"} />
        <SideBarButton icon={"bi bi-heart"} />
        <SideBarButton icon={"bi bi-plus-square"} />
        <SideBarButton icon={"bi bi-person-circle"} />
        <SideBarButton buttonVariant={"light mt-auto mb-3"} icon={"bi bi-list"} />
      </Col>
    );
  }
  