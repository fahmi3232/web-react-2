import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BannerComp from "../BlogComp/BannerComp";
import CategoryComp from "../BlogComp/CategoryComp";
import ProdukComp from "../BlogComp/ProdukComp";
import NavbarComp from "./NavbarComp";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tampil: true,
    };
  }

  render() {
    const { tampil } = this.state;
    return (
      <div>
        <NavbarComp />
        <BannerComp />
        <Container className="mt-4 text-center">
          <button onClick={() => this.setState({ tampil: !tampil })}>
            {tampil ? "Show Categpory" : "Hide Category"}
          </button>
          {!tampil && <CategoryComp />}
        </Container>
        <ProdukComp />
      </div>
    );
  }
}
