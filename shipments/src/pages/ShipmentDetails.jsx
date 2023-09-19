import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import shipmentData from "../data/shipment.json";

function ShipmentDetails() {
  const [shipments, setShipments] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const [selectedShipment, setSelectedShipment] = useState(null);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setShipments(json);
      })
      .catch((err) => {
        setError(err);
        setShipments(shipmentData);
      });
  }, []);

  const handleOpenModal = (shipment) => {
    setSelectedShipment(shipment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedShipment(null);
    setShowModal(false);
  };

  const deleteShipment = (index) => {
    shipments.splice(index,1);
    setShipments(shipments.slice());
  }

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <Table striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th>Order No</th>
            <th>Delivery Date</th>
            <th>Customer</th>
            <th>Tracking No</th>
            <th>Status</th>
            <th>Consignee</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment, index) => (
            <tr key={index}>
              <td>{shipment.orderNo}</td>
              <td>{shipment.date}</td>
              <td>{shipment.customer}</td>
              <td>{shipment.trackingNo}</td>
              <td>{shipment.status}</td>
              <td>{shipment.consignee}</td>
              <td>
              <Button variant="light" onClick={() => handleOpenModal(shipment)}>More info</Button>
                <Button variant="light" onClick={() => deleteShipment(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Shipment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedShipment && (
            <div>
              <p>Order No: {selectedShipment.orderNo}</p>
              <p>Delivery Date: {selectedShipment.date}</p>
              <p>Customer: {selectedShipment.customer}</p>
              <p>Tracking number: {selectedShipment.trackingNo}</p>
              <p>Status: {selectedShipment.status}</p>
              <p>Consignee: {selectedShipment.consignee}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShipmentDetails;
