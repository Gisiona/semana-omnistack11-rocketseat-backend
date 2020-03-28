import React from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='login-container'>
            <section className='form'>
                <img src={logoImg} alt='Be The Hero' />
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder='Seu ID' />
                    <button type='submit' className='button'>Entrar</button>
                    
                    <Link to='/register' className='back-link'>
                        <FiLogIn size={16} color='#e02041' />
                        Não tenho cadastro 
                    </Link>

                </form>
            </section>
            <img src={heroesImg} alt='Heroes' />
        </div>
    );
}

export default Login;