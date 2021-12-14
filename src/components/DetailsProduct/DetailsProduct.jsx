import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { perfumesContext } from '../../context/perfumesContext';
import './DetailsProduct.css'

const DetailsProduct = () => {
    const { id } = useParams();
    const{getOnePerfume, onePerfume} = useContext(perfumesContext)
    const [perfume, setPerfume] = useState({})
    useEffect(() => {
        getOnePerfume(id);
      }, []);
    useEffect(()=>{
        setPerfume(onePerfume)
    }, [onePerfume])
    return (
        <div style={{paddingBottom: '100px', backgroundImage:'url(https://kartinkin.net/uploads/posts/2021-07/1626837549_5-kartinkin-com-p-persikovaya-tekstura-krasivo-6.jpg)', backgroundSize:'cover' }}>
        <div style={{width:'100%', height: '200px'}}></div>
            {perfume?(
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
                <div>
                    <img className="details-img" width="400px" src={perfume.image2} alt="" />
                </div>
                <div style={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', height:'300px'}}>
                    <h1>{perfume.brand}</h1>
                    <h2>{perfume.model}</h2>
                    <div style={{width: '300px'}}>
                    <p style={{fontSize: '18px'}}>{perfume.description}</p>
                    </div>
                    <h2>{"For  " +perfume.male}</h2>
                    <h3>{"Price:  " +perfume.price + "  $"}</h3>
                </div>
                </div>
            
            ):(<h1>loading</h1>)}
        </div>
    );
};

export default DetailsProduct;