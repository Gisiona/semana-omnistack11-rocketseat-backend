import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Profile(){
    return (
        <div className='profile-container'>
            <div className='content'>
                <header>
                    <img src={logoImg} alt='Be The Hero' />

                    <span>Bem vindo, Mao Branca</span>
                    
                    <Link to='/incident/new' className='button'> Cadastrar novo caso </Link>

                    <button type='submit'>
                        <FiPower size={18} color='#e02041' />                        
                    </button>
                </header>
                
                <h1>Casos Cadastrados</h1>
                <ul>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso Teste </p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Caso Teste </p>

                        <strong>VALOR:</strong>
                        <p>r$ 120,00 </p>

                        <button type='button'>
                            <FiTrash2 size={20} color='##a8a8b3' />                        
                        </button>
                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso Teste </p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Caso Teste </p>

                        <strong>VALOR:</strong>
                        <p>r$ 120,00 </p>

                        <button type='button'>
                            <FiTrash2 size={20} color='##a8a8b3' />                        
                        </button>
                    </li>


                    <li>
                        <strong>CASO:</strong>
                        <p>Caso Teste </p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Caso Teste </p>

                        <strong>VALOR:</strong>
                        <p>r$ 120,00 </p>

                        <button type='button'>
                            <FiTrash2 size={20} color='##a8a8b3' />                        
                        </button>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Profile;