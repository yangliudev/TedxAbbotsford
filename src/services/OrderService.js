import http from "../http_common";

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

const getAll = () => {
  return http.get("/orders");

  // let orders;

  // http.get("/orders")
  // .then((response) => {
  //   orders = response.data;
  //   //console.log("orders = " + JSON.stringify(orders));
  //   return orders;
  // })
  // .catch((e) => {
  //   console.log(e);
  // });
  // console.log('ordersYANG = ' + JSON.stringify(orders));
  // return orders;

  // let promise = http.get("/orders");
  // let orders = null;
  // promise.then(response => { orders = response.data });
  // let maxCount = 10;
  // let count = 0;

  // while (orders == null || orders != null && orders.length == 0 && count < maxCount) {
  //   sleep(1000);
  //   promise.then(response => { orders = response.data });
  //   count = count + 1;
  // }

  // return orders;
};

const get = id => {
  return http.get(`/orders/${id}`);
};

const create = data => {
  return http.post("/orders", data);
};

const update = (id, data) => {
  return http.put(`/orders/${id}`, data);
};

const remove = id => {
  return http.delete(`/orders/${id}`);
};

const removeAll = () => {
  return http.delete(`/orders`);
};

const findByTitle = title => {
  return http.get(`/orders?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};