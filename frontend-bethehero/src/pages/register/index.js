import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function Register() {

    const [nome , setNome] =useState('');
    const [email , setEmail] = useState('');
    const [whatsapp , setWhatsapp] = useState('');
    const [city , setCity] = useState('');
    const [uf , setUf] = useState('');
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            email,
            whatsapp,
            city,
            uf
        };

        console.log(nome, email, whatsapp, city, uf);

        try {
            const response = await (await api.post('http://localhost:5000/ongs', data)).data;
            console.log('DATA ID:' + response.data);
            alert(`Seu id de Acesso: ${response.data}`);

            history.push('/');
        } catch (e) {
            alert('Erro ao cadastrar ONG. Tente novamente mais tarde.');
        }
    }

    function validarData(data){
        if(data.nome === null || data.nome === ''){
            console.log("Campo nome não pode ser nulo.");
            alert("Campo nome não pode ser nulo.");
            return;
        }
    }

    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be The Hero' />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to='/' className='back-link'>
                        <FiArrowLeft size={16} color='#e02041' />
                        Já tenho cadastro, voltar para o login.
                    </Link>
                </section>

                <form onSubmit={ handleRegister }>
                    <input placeholder='Nome da ONG' 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />

                    <input type='email' placeholder='e-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <input placeholder='WhatsApp'
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} 
                    />

                    <div className='input-group'>
                        <input placeholder='Cidade'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input placeholder='UF' style={{ width: 80}} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />                        
                    </div>

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;