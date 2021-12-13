import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { perfumesContext } from "../context/perfumesContext";
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate()
  const { createPerfume } = useContext(perfumesContext);
  const [newPerfume, setNewPerfume] = useState({
    brand: "",
    model: "",
    description: "",
    price: "",
    image1: "",
    image2: "",
    male: "",
  });

  function handleValues(e){
    let values ={
      ...newPerfume,
      [e.target.name]:e.target.value
    }
    setNewPerfume(values)
  }

  function checkValues() {
    if (
      !newPerfume.brand ||
      !newPerfume.model ||
      !newPerfume.description||
      !newPerfume.price||
      !newPerfume.image1||
      !newPerfume.image2||
      !newPerfume.male
    ) {
      alert("Please, fill in all fields!");
      return;
    } else {
        createPerfume(newPerfume);
        navigate("/products")
    }
}
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <div style={{ paddingTop: "210px", paddingBottom: "210px" }}>
      <Button onClick={handleOpen} variant="contained">
        Add Perfume
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Add Perfumes</h1>
          <TextField
            label="Enter brand"
            variant="outlined"
            className="inp-add"
            onChange={handleValues}
            name="brand"
          />
          <TextField
            label="Enter model"
            variant="outlined"
            className="inp-add"
            onChange={handleValues}
            name="model"
          />
          <TextField
            label="Enter description"
            variant="outlined"
            className="inp-add"
            onChange={handleValues}
            name="description"
          />
          <TextField
            label="Enter price"
            variant="outlined"
            className="inp-add"
            onChange={handleValues}
            name="price"
            type="number"
          />
          <TextField
            label="Enter url for image1"
            variant="outlined"
            className="inp-add"
            onChange={handleValues}
            name="image1"
          />
          <TextField
            label="Enter url for image2"
            variant="outlined"
            className="inp-add"
            onChange={handleValues}
            name="image2"
          />
          <TextField
            label="Enter male"
            variant="outlined"
            className="inp-add"
            onChange={handleValues}
            name="male"
          />
          <Button
            variant="contained"
            style={{ width: "150px", height: "40px" }}
            onClick={()=>checkValues()}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminPage;
