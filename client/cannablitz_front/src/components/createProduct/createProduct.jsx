import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveNewProduct } from "../../redux/Actions/productActions";

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
        dispatch(saveNewProduct(newProduct, config));
        setNewProduct({})
    };

    console.log(newProduct);

    return (
        <React.Fragment>
            <form onSubmit={onSubmitProduct}>
                <label>Name: </label>{" "}
                <input
                    placeholder="Product Name"
                    value={newProduct.name}
                    name="name"
                    onChange={handleOnChange}
                />
                <label>Price: </label>{" "}
                <input
                    type="number"
                    placeholder="Product Price"
                    value={newProduct.price}
                    name="price"
                    onChange={handleOnChange}
                />
                <label>Description: </label>{" "}
                <textarea
                    placeholder="Product Description"
                    value={newProduct.description}
                    name="description"
                    onChange={handleOnChange}
                />
                <label>Image: </label>{" "}
                <input
                    type="file"
                    name="image"
                    onChange={handleOnChange}
                />
                <button type="submit">Enviar</button>
            </form>
        </React.Fragment>
    );
};
