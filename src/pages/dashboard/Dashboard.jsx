import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
              <div>
                <h4 className="mb-3">Product List</h4>
                <p className="mb-0">
                  The product list effectively dictates product presentation and provides space
                  <br />
                  to list your products and offering in the most appealing way.
                </p>
              </div>
              <a href="page-add-product.html" className="btn btn-primary add-list">
                <i className="las la-plus mr-3"></i>Add Product
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="table-responsive rounded mb-3">
              <table className="data-tables table mb-0 tbl-server-info">
                <thead className="bg-white text-uppercase">
                  <tr className="ligth ligth-data">
                    <th>
                      <div className="checkbox d-inline-block">
                        <input type="checkbox" className="checkbox-input" id="checkbox1" />
                        <label htmlFor="checkbox1" className="mb-0"></label>
                      </div>
                    </th>
                    <th>Product</th>
                    <th>Code</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Brand Name</th>
                    <th>Cost</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="ligth-body">
                  {/* Example Row */}
                  <tr>
                    <td>
                      <div className="checkbox d-inline-block">
                        <input type="checkbox" className="checkbox-input" id="checkbox2" />
                        <label htmlFor="checkbox2" className="mb-0"></label>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/images/table/product/01.jpg"
                          className="img-fluid rounded avatar-50 mr-3"
                          alt="image"
                        />
                        <div>
                          Organic Cream
                          <p className="mb-0">
                            <small>This is test Product</small>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>CREM01</td>
                    <td>Beauty</td>
                    <td>$25.00</td>
                    <td>Lakme</td>
                    <td>$10.00</td>
                    <td>10.0</td>
                    <td>
                      <div className="d-flex align-items-center list-action">
                        <a className="badge badge-info mr-2" href="#">
                          <i className="ri-eye-line mr-0"></i>
                        </a>
                        <a className="badge bg-success mr-2" href="#">
                          <i className="ri-pencil-line mr-0"></i>
                        </a>
                        <a className="badge bg-warning mr-2" href="#">
                          <i className="ri-delete-bin-line mr-0"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox d-inline-block">
                        <input type="checkbox" className="checkbox-input" id="checkbox2" />
                        <label htmlFor="checkbox2" className="mb-0"></label>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/images/table/product/01.jpg"
                          className="img-fluid rounded avatar-50 mr-3"
                          alt="image"
                        />
                        <div>
                          Organic Cream
                          <p className="mb-0">
                            <small>This is test Product</small>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>CREM01</td>
                    <td>Beauty</td>
                    <td>$25.00</td>
                    <td>Lakme</td>
                    <td>$10.00</td>
                    <td>10.0</td>
                    <td>
                      <div className="d-flex align-items-center list-action">
                        <a className="badge badge-info mr-2" href="#">
                          <i className="ri-eye-line mr-0"></i>
                        </a>
                        <a className="badge bg-success mr-2" href="#">
                          <i className="ri-pencil-line mr-0"></i>
                        </a>
                        <a className="badge bg-warning mr-2" href="#">
                          <i className="ri-delete-bin-line mr-0"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox d-inline-block">
                        <input type="checkbox" className="checkbox-input" id="checkbox2" />
                        <label htmlFor="checkbox2" className="mb-0"></label>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/images/table/product/01.jpg"
                          className="img-fluid rounded avatar-50 mr-3"
                          alt="image"
                        />
                        <div>
                          Organic Cream
                          <p className="mb-0">
                            <small>This is test Product</small>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>CREM01</td>
                    <td>Beauty</td>
                    <td>$25.00</td>
                    <td>Lakme</td>
                    <td>$10.00</td>
                    <td>10.0</td>
                    <td>
                      <div className="d-flex align-items-center list-action">
                        <a className="badge badge-info mr-2" href="#">
                          <i className="ri-eye-line mr-0"></i>
                        </a>
                        <a className="badge bg-success mr-2" href="#">
                          <i className="ri-pencil-line mr-0"></i>
                        </a>
                        <a className="badge bg-warning mr-2" href="#">
                          <i className="ri-delete-bin-line mr-0"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox d-inline-block">
                        <input type="checkbox" className="checkbox-input" id="checkbox2" />
                        <label htmlFor="checkbox2" className="mb-0"></label>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/images/table/product/01.jpg"
                          className="img-fluid rounded avatar-50 mr-3"
                          alt="image"
                        />
                        <div>
                          Organic Cream
                          <p className="mb-0">
                            <small>This is test Product</small>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>CREM01</td>
                    <td>Beauty</td>
                    <td>$25.00</td>
                    <td>Lakme</td>
                    <td>$10.00</td>
                    <td>10.0</td>
                    <td>
                      <div className="d-flex align-items-center list-action">
                        <a className="badge badge-info mr-2" href="#">
                          <i className="ri-eye-line mr-0"></i>
                        </a>
                        <a className="badge bg-success mr-2" href="#">
                          <i className="ri-pencil-line mr-0"></i>
                        </a>
                        <a className="badge bg-warning mr-2" href="#">
                          <i className="ri-delete-bin-line mr-0"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
