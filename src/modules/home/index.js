import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Image,
  Row,
  Stack
} from "react-bootstrap";
import NavigationBar from "../../components/navbar";
import { BsArrowRight } from "react-icons/bs";

const Index = () => {
  return (
    <div>
      <NavigationBar />
      <Row>
        <Col md="7" className="mx-0 px-0">
          <br />

          <Container style={{ paddingLeft: "78px", paddingRight: "65px" }}>
            <Stack
              direction="horizontal"
              className="d-flex align-items-end"
              gap={3}
            >
              <div
                className="display-4 mb-0 pb-0 "
                style={{ fontWeight: "700" }}
              >
                Hi! I Am
              </div>
              <Button
                className="py-2 px-3 mb-2"
                style={{
                  borderRadius: 0,
                  fontWeight: 600,
                  fontSize: 15,
                  backgroundColor: "#5562f",
                  color: "white",
                  borderColor: "#5562f",
                  borderRadius: "50px"
                }}
              >
                Dev
              </Button>
            </Stack>
            <div className="display-4 mb-0 pb-0 " style={{ fontWeight: "700" }}>
              John Chuma
            </div>
            <p
              className="pt-2"
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#000000"
              }}
            >
              I develop full-stack{" "}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "650",
                  color: "#000000"
                }}
              >
                websites
              </span>{" "}
              and web applications, I also
              <br />
              develop android and IOS{" "}
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "650",
                  color: "#000000"
                }}
              >
                mobile apps.
              </span>{" "}
            </p>

            <Stack direction="horizontal" gap={2}>
              <Button
                style={{
                  borderRadius: 0,
                  fontWeight: 600,
                  borderColor: "#fe481c",
                  fontSize: 15,
                  padding: "12px 40px",
                  backgroundColor: "#fe481c",
                  color: "white"
                }}
              >
                Hire Me
              </Button>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "650",
                  color: "#000000"
                }}
              >
                projects
              </div>
            </Stack>
            <div
              className="pt-3"
              style={{
                fontSize: "30px",
                fontWeight: "650",
                color: "#000000"
              }}
            >
              20
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#000000"
              }}
            >
              Web projects done
              <br />
            </div>
            <Row>
              <Col md="5">
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "650",
                    color: "#000000"
                  }}
                >
                  30
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#000000"
                  }}
                >
                  Mobile apps projects done <br />
                  <br />
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "650",
                    color: "#000000"
                  }}
                >
                  Contacts
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#000000"
                  }}
                >
                  project@johnchuma.com
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <div className="py-5" style={{ backgroundColor: "#262626" }}>
            <Container style={{ paddingLeft: "70px" }}>
              <Row>
                <Col md="4">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "650",
                      color: "white"
                    }}
                  >
                    Project <br />
                    statistics 2022
                  </div>
                  <br />
                  <Button
                    style={{
                      borderRadius: 0,
                      fontWeight: 600,
                      borderColor: "yellow",
                      fontSize: 15,
                      padding: "7px 30px",
                      backgroundColor: "yellow",
                      color: "black"
                    }}
                  >
                    Learn more
                  </Button>
                </Col>
                <Col md="4">
                  <Stack
                    direction="horizontal"
                    className="d-flex justify-content-between mb-2"
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "white"
                      }}
                    >
                      Website projects
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "white"
                      }}
                    >
                      20
                    </div>
                  </Stack>
                  <Stack
                    direction="horizontal"
                    className="d-flex justify-content-between mb-2"
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "white"
                      }}
                    >
                      Android apps projects
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "white"
                      }}
                    >
                      13
                    </div>
                  </Stack>
                  <Stack
                    direction="horizontal"
                    className="d-flex justify-content-between mb-2"
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "white"
                      }}
                    >
                      IOS apps projects
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "white"
                      }}
                    >
                      20
                    </div>
                  </Stack>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col
          className="mx-0 px-0 text-start"
          style={{ backgroundColor: "#ded1c1", height: "121vh" }}
        >
          <br />
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <p
                className=""
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#000000"
                }}
              >
                Do your business{" "}
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "650",
                    color: "#000000"
                  }}
                >
                  project
                </span>{" "}
                <br />
                with me, quality is guaranteed
              </p>
            </Col>
            <Col md="3"></Col>
          </Row>

          <Image className="ps-3" src="babe.png" />
          <Row>
            <Col md={2}></Col>
            <Col>
              <Stack>
                <div
                  style={{
                    height: "50px",
                    backgroundColor: "white",
                    fontSize: "14px",
                    fontWeight: "600"
                  }}
                  className="d-flex align-items-center justify-content-center px-2"
                >
                  Subscribe to my newsletter
                  <div
                    className="ms-auto d-flex justify-content-center align-items-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      color: "white",
                      backgroundColor: "#262626"
                    }}
                  >
                    <BsArrowRight />
                  </div>
                </div>
              </Stack>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
