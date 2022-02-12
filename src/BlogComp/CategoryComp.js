import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CategoryComp = () => {

    useEffect(() => {
        
        return () => {
            console.log('oke bos')
        }
    }, [])

    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/02577b74fe168f6dabd57eab9c2f8f21_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/1c2d1181b1f5306ce2c41803617e7446_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/5bbc23650006cd766b8838f55d53aac7_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/04dba508f1ad19629518defb94999ef9_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/8465b33b83d571b2dbac57481622002e_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/b912e9726dc8cb5e9447a7738a68479c_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/fd68904a717156196d809cab264a4f4e_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/02577b74fe168f6dabd57eab9c2f8f21_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/962e5544f481d1032bd1dfd3137c4355_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/b98756cdb31eabe3d7664599e24ccc29_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/02577b74fe168f6dabd57eab9c2f8f21_tn" alt="" />
                    </Col>
                    <Col lg={1} xs={3} md={6}>
                        <img style={{width: 80}} src="https://cf.shopee.co.id/file/dc4d827babe0d4215dfcf287dd277507_tn" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CategoryComp
