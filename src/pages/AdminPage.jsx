import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { perfumesContext } from "../context/perfumesContext";
import { brandsContext } from "../context/brandsContext";
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const { createBrand } = useContext(brandsContext);
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

  const [newBrand, setNewBrand] = useState({
    brand: "",
    logo: "",
  });

  function handleValues(e) {
    let values = {
      ...newPerfume,
      [e.target.name]: e.target.value,
    };
    setNewPerfume(values);
  }

  function handleValuesBrand(e) {
    let values = {
      ...newBrand,
      [e.target.name]: e.target.value,
    };
    setNewBrand(values);
  }

  function checkValues() {
    if (
      !newPerfume.brand ||
      !newPerfume.model ||
      !newPerfume.description ||
      !newPerfume.price ||
      !newPerfume.image1 ||
      !newPerfume.image2 ||
      !newPerfume.male
    ) {
      alert("Please, fill in all fields!");
      return;
    } else {
      createPerfume(newPerfume);
      navigate("/products");
    }
  }

  function checkValuesBrand() {
    if (!newBrand.brand || !newBrand.logo) {
      alert("Please, fill in all fields!");
      return;
    } else {
      createBrand(newBrand);
      navigate("/brands");
    }
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openBrand, setOpenBrand] = useState(false);
  const handleOpenBrand = () => setOpenBrand(true);
  const handleCloseBrand = () => setOpenBrand(false);

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
    <div className="admin" style={{display:"flex", justifyContent:"center", alignItems:"center",paddingTop: "310px", paddingBottom: "210px"}}>
      <div style={{margin:"10px" }}>
        <Button onClick={handleOpen} variant="contained" style={{backgroundColor:"honeydew",color:"black"}}>
          Add Perfume
        </Button>
        <Modal 
         
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal" sx={style}>
            <div className="items-list">
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
              onClick={() => checkValues()}
            >
              Add
            </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <div>
        <Button onClick={handleOpenBrand} variant="contained" style={{backgroundColor:"mistyrose",color:"black"}}>
          Add Brand
        </Button>
        <Modal 
          open={openBrand}
          onClose={handleCloseBrand}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal" sx={style}>
          <div className="items-list">
            <h1>Add Brand</h1>
            <TextField
              label="Enter brand"
              variant="outlined"
              className="inp-add"
              onChange={handleValuesBrand}
              name="brand"
            />
            <TextField
              label="Enter logo URL"
              variant="outlined"
              className="inp-add"
              onChange={handleValuesBrand}
              name="logo"
            />
            <Button
              variant="contained"
              style={{ width: "150px", height: "40px" }}
              onClick={() => checkValuesBrand()}
            >
              Add
            </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AdminPage;
