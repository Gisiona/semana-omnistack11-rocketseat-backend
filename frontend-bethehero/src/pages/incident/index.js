import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export default function Incident(){
    return (
        <div className='incident-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be The Hero' />

                    <h1>Cadastrar novo caso.</h1>
                    <p>Cadastre um novo caso de sua ONG.</p>

                    <Link to='/profile' className='back-link'>
                        <FiArrowLeft size={16} color='#e02041' />
                        Já tenho cadastro, voltar para o login.
                    </Link>
                </section>

                <form>
                    <input placeholder='Título do caso' />
                    <textarea placeholder='Descrição' />
                    <input placeholder='Valor em reais' />

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}