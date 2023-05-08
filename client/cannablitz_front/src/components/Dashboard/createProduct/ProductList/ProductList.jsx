import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../redux/Actions/productActions";
import { DataGrid } from "@mui/x-data-grid";

export const ProductList = () => {

    const allProducts = useSelector(state => state.product.allProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'producto', headerName: 'Producto', width: 200, editable: true },
        { field: 'precio', headerName: 'Precio', width: 200 },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'categoria', headerName: 'Categoria', width: 200 },
        { field: 'descripcion', headerName: 'Descripcion', width: 200 }
    ]

    const row = allProducts?.map(product => {
        return {
            id: product.id,
            producto: product.name,
            precio: `$${product.price}`,
            stock: product.stock,
            categoria: product.category,
            descripcion: product.description
        }
    })

    console.log(allProducts);
    return (
        <>
            <h1>Lista de Productos dados de alta en el Sistema</h1>
            <div>
                <DataGrid
                    rows={row}
                    columns={columns}
                />
            </div>
        </>
    )
}
