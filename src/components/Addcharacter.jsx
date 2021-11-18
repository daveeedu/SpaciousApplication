import React from "react";
import { HiPlusCircle } from "react-icons/hi";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";


const Addcharacter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <HiPlusCircle className="addbutton  btn-light" onClick={handleShow} />
      </div>
      <Modal className="add" show={show} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton> */}
        <Modal.Title className="pheader mx-5 my-3 display-6 fw-bold">
          Character
        </Modal.Title>
        {/* </Modal.Header> */}
        <Modal.Body>
          <Form action="" method="post">
            <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
              <Form.Label className="ptitle">Image</Form.Label>
              <Form.Control
                type=""
                placeholder=""
                className="border-0 bg-light text-dark"
              />
              <Form.Text className="text-muted">
                Paste the URL of a JPG or PNG of max 20 kb
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
              <Form.Label className="ptitle">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border-0 bg-light text-dark"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mx-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ptitle">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="border-0 bg-light text-dark"
              />
            </Form.Group >
            <Form.Group
              className="mb-3 mx-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ptitle">Friends</Form.Label>
              <Form.Select className="border-0 bg-light text-dark" aria-label="Floating label select example">
                <option>Jane Cooper</option>
                <option value="1"> Cameron Williamson</option>
                <option value="2">Guy Hawkins</option>
                <option value="3">Brooklyn Simmons</option>
              </Form.Select>
              </Form.Group >
          </Form>
        </Modal.Body>
        {/* <Modal.Footer> */}
        <div class="d-grid gap-2 d-md-flex justify-content-md-end m-3">
          <Button
            variant="secondary"
            className="text-uppercase btn btn-light me-md-2"
            type="submit"
            onClick={handleClose}
          >
            cancel
          </Button>
          <Button
            variant="primary"
            className="text-uppercase btn btn-light"
            type="submit"
            onClick={handleClose}
          >
            create planet
          </Button>
        </div>
        {/* </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Addcharacter;
