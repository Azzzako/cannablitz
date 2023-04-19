import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveNewProduct } from "../../redux/Actions/productActions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize, Button } from "@mui/material";
import './createProduct.css'

export const CreateProduct = () => {
    const [newProduct, setNewProduct] = useState({});
    const dispatch = useDispatch();
    const config = {
        headers: { "Content-Type": "multipart/form-data" },
    };

    const handleOnChange = (e) => {

        if (e.target.type === "file") {
            setNewProduct({
                ...newProduct,
                [e.target.name]: e.target.files[0], // Usar files[0] para obtener el archivo
            });
        } else {
            setNewProduct({
                ...newProduct,
                [e.target.name]: e.target.value,
            });
        }
    };

    const onSubmitProduct = (e) => {
        e.preventDefault();
        if (newProduct.name && newProduct.price && newProduct.description && newProduct.image) {
            dispatch(saveNewProduct(newProduct, config));
            setNewProduct({
                name: '',
                price: '',
                description: '',
                image: ''
            })
        } else {
            alert('Llena todos los campos')
        }

    };

    console.log(newProduct);

    return (
        <React.Fragment>
            <Box component='form'
                noValidate onSubmit={onSubmitProduct} className="form_container">

                <TextField
                    color={newProduct?.name?.length > 0 ? 'success' : 'error'}
                    id="outlined-basic"
                    label='Product Name'
                    value={newProduct.name}
                    name="name"
                    onChange={handleOnChange}
                />

                <TextField
                    color={newProduct?.price?.length > 0 ? 'success' : 'error'}
                    id="outlined-basic"
                    label='Product Price'
                    type="number"
                    value={newProduct.price}
                    name="price"
                    onChange={handleOnChange}
                />

                <TextField
                    color={newProduct?.stock?.length > 0 ? 'success' : 'error'}
                    id="outlined-basic"
                    label='Product Stock'
                    type="number"
                    value={newProduct.stock}
                    name="stock"
                    onChange={handleOnChange}
                />

                <TextareaAutosize
                    placeholder="Product Description"
                    value={newProduct.description}
                    name="description"
                    onChange={handleOnChange}
                    style={{ height: 200 }}
                />

                <input
                    type="file"
                    name="image"
                    onChange={handleOnChange}
                />
                <Button
                    variant="contained"
                    type="submit"
                >Enviar
                </Button>
            </Box>
        </React.Fragment>
    );
};
