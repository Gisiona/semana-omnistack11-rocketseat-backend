import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Incident(){

    const [title , setTitle] =useState('');
    const [description , setDescription] = useState('');
    const [value , setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleCriarIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        console.log(title, description, value);

        try {

            api.post('http://localhost:5000/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            }).then(response => {
                console.log(response.data.data);
            });

            alert('Incidente cadastrado com sucesso');

            history.push('/profile');
        } catch (e) {
            alert('Erro ao criar incidente. Tente novamente mais tarde.');
        }
    }

    return (
        <div className='incident-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be The Hero' />

                    <h1>Cadastrar novo caso.</h1>
                    <p>Cadastre um novo caso de sua ONG.</p>

                    <Link to='/profile' className='back-link'>
                        <FiArrowLeft size={16} color='#e02041' />
                        Voltar para home.
                    </Link>
                </section>

                <form onSubmit={handleCriarIncident }>
                    <input placeholder='Título do caso' 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder='Descrição' 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder='Valor em reais'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}