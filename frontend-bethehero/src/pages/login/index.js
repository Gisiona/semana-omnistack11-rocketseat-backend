import React, { useState } from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


function Login() {
    
    const history = useHistory();
    const [id, setId ] = useState('');

    const data = {
        id
    };

    async function handleLogin (e){
        e.preventDefault();
        
        try {
            const response = await (await api.post('http://localhost:5000/sessions', data)).data;

            console.log('DATA ID:' + response.data.nome);
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.nome);

            history.push('/profile');
        } catch (e) {
            alert('Falha ao fazer login. Tente novamente mais tarde.');
        }
    }

    return (
        <div className='login-container'>
            <section className='form'>
                <img src={logoImg} alt='Be The Hero' />
                <form onSubmit={ handleLogin }>
                    <h1>Faça seu login</h1>
                    <input placeholder='Seu ID'
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
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