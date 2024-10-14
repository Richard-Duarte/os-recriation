import React, { useState, useRef } from 'react';
import logo from './Logo.png';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputValueEmpresa, setInputValueEmpresa] = useState('');
  const [token, setToken] = useState(''); // Para armazenar o access_token gerado
  const [message, setMessage] = useState(''); // Para armazenar a mensagem de sucesso
  const inputRef = useRef(null);

  const handleInputChangeIds = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChangeEmpresa = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setInputValueEmpresa(value);
    }
  };

  const handleInputFocus = () => {
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Função para autenticação e geração do access_token
  const fetchToken = async () => {
    const url = 'https://api.primebuilder.com.br/main/auth';
    const credentials = new URLSearchParams({
      username: 'integracao',
      password: '2024',
      workspace: inputValueEmpresa, // Empresa digitada no front-end
      grant_type: 'password'
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: credentials.toString(),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const accessToken = data.access_token; // Pegando apenas o access_token
      setToken(accessToken); // Armazenando o access_token no estado
      console.log('Access token fetched:', accessToken);
      return accessToken;
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  // Função para buscar os dados da OS com o access_token
  const fetchMovementTask = async (id) => {
    const url = `http://api.primebuilder.com.br/Main/v1/movement/tasks/${id}`;
    
    console.log('Usando o token:', token); // Verifique o valor do token

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Passando o token aqui
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Função para recriar as OSs usando os IDs informados
  const handleRecreate = async () => {
    const idsArray = inputValue.split(',').map((id) => id.trim()); // Dividindo os IDs por vírgula

    // Gera o token antes de realizar as requisições
    const tokenGenerated = await fetchToken(); // Garante que o token foi gerado

    if (!tokenGenerated) {
      console.error('Erro ao gerar o token');
      return; // Não prossegue se o token não foi gerado
    }

    // Fazendo requisições para cada ID
    Promise.all(
      idsArray.map(async (id) => {
        const os_old = await fetchMovementTask(id); // Requisição para buscar dados da OS antiga
        if (os_old) {
          const os_new = {
            Code: os_old.Code + '####',
            UserName: os_old.User.Code,
            Observation: os_old.Observation,
            OfficeCode: os_old.Office.Code,
            Address: {
              Street: os_old.Address.Street,
              Number: os_old.Address.Number,
              Complement: os_old.Address.Complement,
              Neighborhood: os_old.Address.Neighborhood,
              City: os_old.Address.City,
              StateAcronym: os_old.Address.StateAcronym,
              CountryAcronym: os_old.Address.CountryAcronym,
              PostalCode: os_old.Address.PostalCode,
              Latitude: os_old.Address.Latitude,
              Longitude: os_old.Address.Longitude,
            },
            CustomerCode: os_old.Customer.Code,
            WorkflowCode: os_old.Workflow.Code,
            GroupCode: os_old.Group.Code,
            Fields: os_old.Fields,
          };

          const requestOptions = {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${tokenGenerated}`, // Usa o token gerado
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(os_new),
            redirect: 'follow',
          };

          try {
            const response = await fetch('https://api.primebuilder.com.br/Main/v1/movement/tasks/', requestOptions);
            const result = await response.text();
            console.log(`Result for ID ${id}:`, result);
          } catch (error) {
            console.error(`Error processing ID ${id}:`, error);
          }
        }
      })
    ).then(() => {
      setMessage("OS's recriadas com sucesso!"); // Exibe a mensagem de sucesso
      console.log('All IDs processed');
    });
  };

  return (
    <div className="Page">
      <div className="Menu">
        <h1>
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
        <div className="recriacao">
          <h2>Recriação de OS's</h2>
        </div>
      </div>
      <div className="App">
        <header className="App-header">
          <h1 className="Titulo">Recriação de OS's no PrimeBuilder</h1>

          <div>
            <h2>Empresa:</h2>
            <form className="form">
              <input
                id="empresa"
                type="text"
                value={inputValueEmpresa}
                onChange={handleInputChangeEmpresa}
                onFocus={handleInputFocus}
                className="input-field"
                autoComplete="off"
                maxLength={4}
                required
                ref={inputRef}
              />
              <label className="label" htmlFor="empresa">
                <span className="span">Empresa</span>
              </label>
            </form>
          </div>

          <div>
            <h2>Informe os ID's separados por vírgula:</h2>
            <form className="form">
              <input
                id="ids"
                type="text"
                value={inputValue}
                onChange={handleInputChangeIds}
                className="input-field"
                autoComplete="off"
                required
                ref={inputRef}
                onFocus={handleInputFocus}
              />
              <label className="label" htmlFor="ids">
                <span className="span">ID's</span>
              </label>
            </form>
          </div>

          <div className="wrapper">
            <div className="link_wrapper">
              <button className="styled-button" onClick={handleRecreate}>
                Confirmar
              </button>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Exibe a mensagem de sucesso */}
          {message && <p className="success-message">{message}</p>}

          <br />
          <p>Você informou:</p>
          <div>
            <br />
            {inputValue}
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;