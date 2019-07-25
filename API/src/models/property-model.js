var mysqlConn = require("../database/database");

const fs = require("fs");

module.exports = class Property {
  constructor(newName, newLocation, newImgUrl, newPrice) {
    this.name = newName;
    this.location = newLocation;
    this.imgUrl = newImgUrl;
    this.price = newPrice;
  }
  create(property) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO listings set ?", property, (err, res) => {
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
      mysqlConn.query("Select * from listings", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  getById(Id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from listings where id = ? ",
        Id,
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
  updateByID(Id, listing) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE listings SET name = ?, location = ?, imgUrl = ?, price = ? WHERE id = ?",
        [listing.name, listing.location, listing.imgUrl, listing.price, Id],
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
  remove(Id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM listings WHERE id = ?", Id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
