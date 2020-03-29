import React , { useEffect, useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


function Profile(){

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    //console.log('Profile ONGID: ' + ongId);

    const [ incidents, setIncidents ] = useState([]);

    useEffect(() => {
        api.get('http://localhost:5000/profiles', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            console.log(response.data.data);
            setIncidents(response.data.data);
        })
    } , [ongId]);


    async function handleDeleteIncident(id){
        try {
            await api.delete('http://localhost:5000/incidents/' + id, {
                headers: {
                    Authorization: ongId,
                }
            });
            
            // Recarrega os dados da pagina
            setIncidents(incidents.filter(incident => incident.id != id ));
            alert("Incidente excluído com sucesso.");
        } catch (error) {
            alert('Erro ao excluir incidente. Tente novamente mais tarde.');
        }        
     }

     function handleLogaut(){

        localStorage.clear();
        history.push('/');
     }

    return (
        <div className='profile-container'>
            <div className='content'>
                <header>
                    <img src={logoImg} alt='Be The Hero' />

                    <span>Bem vindo, { ongName }</span>
                    
                    <Link to='/incident/new' className='button'> Cadastrar novo caso </Link>

                    <button type='submit' onClick={handleLogaut}>
                        <FiPower size={18} color='#e02041' />                        
                    </button>
                </header>
                
                <h1>Casos Cadastrados</h1>
                <ul>
                   {incidents.map(incident => (
                       
                        <li key={ incident.id }>
                            <strong>CASO:</strong>
                            <p> { incident.title } </p>

                            <strong>DESCRIÇÃO:</strong>
                            <p> { incident.description } </p>

                            <strong>VALOR:</strong>
                            <p> { Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( incident.value ) } </p>

                            <button type='button' onClick={ () => handleDeleteIncident(incident.id) } >
                                <FiTrash2 size={20} color='##a8a8b3' />                        
                            </button>
                        </li>                      
                   ))}

                </ul>
            </div>
        </div>
    );
}

export default Profile;