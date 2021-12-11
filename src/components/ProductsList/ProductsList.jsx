import React, { useContext } from 'react';
import { perfumesContext } from '../../context/perfumesContext';
import ProductsCard from './ProductsCard';
import ErrorIcon from '@mui/icons-material/Error';
const ProductsList = () => {
    const {perfumes} = useContext(perfumesContext)
    return (
        <div>
            {perfumes.length > 0? (
                perfumes.map((item)=><ProductsCard item={item}/>)
            ):(
               <ErrorIcon/> 
            )}
        </div>
    );
};

export default ProductsList;