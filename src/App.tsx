import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/tauri';
import './App.css';

function App() {
    const [greetMsg, setGreetMsg] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke('greet', { name }));
    }

    const welcome = async () => {
        setWelcomeMessage(await invoke('welcome', { name, surname }));
    };

    return (
        <div className="container">
            <h1>Welcome to Tauri!</h1>

            <div className="row">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo vite" alt="Vite logo" />
                </a>
                <a href="https://tauri.app" target="_blank">
                    <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <p>Click on the Tauri, Vite, and React logos to learn more.</p>

            <div className="row">
                <div>
                    <div>
                        <input
                            id="greet-input"
                            onChange={(e) => setName(e.currentTarget.value)}
                            placeholder="Enter a name..."
                        />
                        <input
                            id="greet-input"
                            onChange={(e) => setSurname(e.currentTarget.value)}
                            placeholder="Enter a surname..."
                        />
                    </div>

                    <button type="button" onClick={() => welcome()}>
                        Greet
                    </button>
                </div>
            </div>
            <p>{welcomeMessage}</p>
        </div>
    );
}

export default App;
