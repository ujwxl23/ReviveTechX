import React, { useState } from 'react';
import Navbar from '../componets/Navbar'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, update } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SellPage() {

  const firebaseConfig = {
  apiKey: "AIzaSyAK6jGldivi_kEIzwoADcEPaPOheluRp0g",
  authDomain: "revivetech-59b40.firebaseapp.com",
  databaseURL: "https://revivetech-59b40-default-rtdb.firebaseio.com",
  projectId: "revivetech-59b40",
  storageBucket: "revivetech-59b40.appspot.com",
  messagingSenderId: "659508121680",
  appId: "1:659508121680:web:8450a79a60e22bad750155",
  measurementId: "G-8HM1MZPRPQ"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const storage = getStorage(app);



  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    modelNumber: '',
    dateOfManufacture: '',
    dateOfPurchase: '',
    condition: '',
    expectedToken: 0,
    productImage: null,
    receiptImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle file inputs separately
    if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSave = async() => {

    const productsRef = ref(database, 'products');
    const newProductRef = push(productsRef);

    await set(newProductRef, { ...formData, productImage: null, receiptImage: null });

    if (formData.productImage) {
      const productImageRef = storageRef(storage, `productImages/${newProductRef.key}`);
      await uploadBytes(productImageRef, formData.productImage);
      const productImageURL = await getDownloadURL(productImageRef);
      await update(newProductRef, { productImage: productImageURL });
    }

    if (formData.receiptImage) {
      const receiptImageRef = storageRef(storage, `receiptImages/${newProductRef.key}`);
      await uploadBytes(receiptImageRef, formData.receiptImage);
      const receiptImageURL = await getDownloadURL(receiptImageRef);
      await update(newProductRef, { receiptImage: receiptImageURL });
    }

    toast.success('Form Submitted Successfully');

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
          <Typography variant="h6" component="div" style={{ marginRight: '45px' }}>
            Expected Tokens
          </Typography>
          <TextField
            name="expectedToken"
            label="Tokens"
            variant="outlined"
            type="number" 
            value={formData.expectedToken}
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
            <VisuallyHiddenInput 
              type="file" 
              name="productImage"
              onChange={handleChange}
              accept="image/*,video/*"
              />
          </Button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '46px', justifyContent:"center" }}>
          <Typography variant="h6" component="div" style={{ marginRight: '135px' }}>
            Reciept Image:
          </Typography>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload Reciept
            <VisuallyHiddenInput 
              type="file" 
              name="receiptImage"
              onChange={handleChange}
              accept="image/*,video/*" />
          </Button>
        </div>

        <Button variant="contained" color="primary" onClick={handleSave} marginTop="50px">
          Save Details
        </Button>
      </div>

      <ToastContainer />

    </div>
  )
}

export default SellPage
