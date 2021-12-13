import React, { useContext, useEffect } from 'react';
import { perfumesContext } from '../../context/perfumesContext';
import ProductsCard from './ProductsCard';
import ErrorIcon from '@mui/icons-material/Error';
const ProductsList = () => {
    const {perfumes, getPerfumes} = useContext(perfumesContext)
    useEffect(()=>{
        getPerfumes()
    },[])
    return (
        <>
        <div style={{width:'100%', height: '100px'}}></div>
        <div style={{display: "flex", flexWrap: "wrap",  justifyContent: 'center'}}>
            {perfumes.length > 0? (
                perfumes.map((item)=><ProductsCard item={item}/>)
            ):(
               <ErrorIcon/> 
            )}
        </div>
        </>
    );
};

export default ProductsList;