var mysqlConn = require("../database/database");

const fs = require("fs");

module.exports = class Booking {
  constructor(newDateFrom, newDateTo, newUserId) {
    this.dateFrom = newDateFrom;
    this.dateTo = newDateTo;
    this.userId = newUserId;
  }
  create(booking) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO bookings set ?", booking, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from bookings", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  getById(id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from bookings where id = ? ",
        id,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
  updateByID(id, status) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE bookings SET name = ?, location = ?, imgUrl = ?, price = ? WHERE id = ?",
        [status.name, status.location, status.imgUrl, status.price, id],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
  remove(id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM bookings WHERE id = ?", id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
