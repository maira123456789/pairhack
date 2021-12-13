import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { perfumesContext } from '../../context/perfumesContext';

const EditPerfume = () => {
    const navigate = useNavigate()

    const params = useParams()

    const {getOnePerfume, updatePerfume, onePerfume } = useContext(perfumesContext)

    useEffect(()=>{
        getOnePerfume(params.id)
    }, [])

    const [edited, setEdited] = useState({
        brand: '',
        model: '',
        description: '',
        price: '',
        image1: '',
        image2: '',
        male: '',
    })

    useEffect(()=>{
        setEdited(onePerfume)
    },[onePerfume])

    function handleValues(e){
        let values = {
            ...edited,
            [e.target.name]: e.target.value,
        };
        setEdited(values)
    }

    function checkValues(){
        if (
            !edited.brand ||
            !edited.model ||
            !edited.description ||
            !edited.price||
            !edited.image1||
            !edited.image2||
            !edited.male
          ) {
            alert("Заполните поля !");
            return;
          } else {
            updatePerfume(params.id, edited)
            navigate('/products')
          }
    }
    return (
        <>
        {edited? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        <div style={{border: 'grey solid 4px', borderRadius: '5%', marginTop: "120px", marginBottom: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', width:'400px'}}>
            <h3 style={{fontSize: '25px', fontWeight: 'bold'}}>Edit Perfumes</h3>
            <input value={edited.brand} onChange={handleValues} style={{height: '40px', margin: "2%", width: '300px'}} type="text" placeholder="Введите бренд" name="brand"/>
            <input value={edited.model} onChange={handleValues} style={{height: '40px', margin: "2%", width: '300px'}} type="text" placeholder="Введите модель" name="model"/>
            <input value={edited.description} onChange={handleValues} style={{height: '40px', margin: "2%", width: '300px'}} type="text" placeholder="Введите описание" name="description"/>
            <input value={edited.price} onChange={handleValues} style={{height: '40px', margin: "2%", width: '300px'}} type="number" placeholder="Введите цену" name="price" className="m-3 col-9"/>
            <input value={edited.image1} onChange={handleValues} style={{height: '40px', margin: "2%", width: '300px'}} type="text" placeholder="Введите url для первой картины" name="image1"/>
            <input value={edited.image2} onChange={handleValues} style={{height: '40px', margin: "2%", width: '300px'}} type="text" placeholder="Введите url второй картины" name="image2"/>
            <input value={edited.male} onChange={handleValues} style={{height: '40px', margin: "2%", width: '300px'}} type="text" placeholder="Введите мужской или женский" name="male"/>
            <button onClick={checkValues} style={{background: 'yellow', color: 'black', fontSize: '20px', fontWeight: '500', margin: '2%', width: '100px', borderRadius: '10px', cursor: 'pointer', border: '1px solid grey', height: '30px'}}>Save</button>
        </div> 
        </div>: <h1>Loading</h1>}
        </>
    );
};

export default EditPerfume;