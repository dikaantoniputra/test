import React from "react";
import { Link } from "react-router-nav";

const Isi = () => {
  return (
    <section>
      <div class="container">
        <h2 class="text-center title2">CONTACT US</h2>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-8">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,10}$"
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Text
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-info text-white" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Isi;
