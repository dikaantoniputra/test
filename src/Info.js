import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <section>
      <div class="container">
        <h2 class="text-center title">OUR VALUES</h2>
        <div class="row">
          <div class="col-lg-4  ">
            <img src="/img/merah.png" class="img-fluid" />
          </div>

          <div class="col-lg-4  ">
            <img src="/img/hijau.png" class="img-fluid" />
          </div>

          <div class="col-lg-4  ">
            <img src="/img/biru.png" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Info;
