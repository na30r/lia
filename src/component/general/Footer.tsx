import { Image, Col, Row, Divider } from "antd";
import React from "react";
import Logo from "../../assets/images/Logo.png";
import Insta from "../../assets/images/Insta.png";
import Telegram from "../../assets/images/Telegram.png";
import Aparat from "../../assets/images/Aparat.png";
import { FOOTER_FOLLOWUS, FOOTER_NO_DEPENDENCIES, FOOTER_PHONE, FOOTER_RIGHTS } from "../../constants/staticTexts";

export default function Footer() {
  return (
    <>
      <Row className="footer-container">
        <Col lg={5} sm={12}>
          <Image src={Logo} preview={false} width={75.73} height={99} />
        </Col>
        <Col lg={12} sm={12} className="footer-rights">
          <span>{FOOTER_RIGHTS}</span>
        </Col>
        <Col lg={5} sm={12}>
          <Row gutter={[0, 20]}>
            <Col span={24}>{FOOTER_FOLLOWUS}</Col>
            <Col span={24}>
              <Row gutter={20}>
                <Col span={8}>
                  {" "}
                  <Image src={Insta} preview={false} width={24} height={24} />
                </Col>
                <Col span={8}>
                  {" "}
                  <Image src={Telegram} preview={false} width={24} height={24} />
                </Col>
                <Col span={8}>
                  {" "}
                  <Image src={Aparat} preview={false} width={24} height={24} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
        </Col>
        <Col span={12}>{FOOTER_NO_DEPENDENCIES}</Col>
        <Col span={12}>{FOOTER_PHONE}</Col>
      </Row>
    </>
  );
}
