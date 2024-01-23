import React, { useState } from 'react';
import Navbar from '../componets/Navbar'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function SellPage() {

  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    modelNumber: '',
    dateOfManufacture: '',
    dateOfPurchase: '',
    condition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
  };

  const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
  });

  return (
    <div>
      <Navbar/>
      <h2>Tell Us about your Device!!</h2>

      <div style={{textAlign:"center", alignContent:"center"}}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '60px' }}>
            Product Name:
          </Typography>
          <TextField
            name="productName"
            label="Product Name"
            variant="outlined"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '90px' }}>
            Description:  
          </Typography>
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '60px' }}>
            Model Number:
          </Typography>
          <TextField
            name="modelNumber"
            label="Model Number"
            variant="outlined"
            value={formData.modelNumber}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '10px' }}>
            Date of Manufacture:
          </Typography>
          <TextField
            name="dateOfManufacture"
            label="Date Of Manufacture"
            variant="outlined"
            value={formData.dateOfManufacture}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '40px' }}>
            Date of Purchase:
          </Typography>
          <TextField
            name="dateOfPurchase"
            label="Date Of Purchase"
            variant="outlined"
            value={formData.dateOfPurchase}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '110px' }}>
            Condition:
          </Typography>
          <TextField
            name="condition"
            label="Condition"
            variant="outlined"
            value={formData.condition}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '50px' }}>
            Image/Video of Product:
          </Typography>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '46px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '135px' }}>
            Reciept Image:
          </Typography>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>

        <Button variant="contained" color="primary" onClick={handleSave} marginTop="50px">
          Save Details
        </Button>
      </div>

      

    </div>
  )
}

export default SellPage
