import React from 'react'
import {PageArea} from './styled'
import useAPI from '../../helpers/OlxAPI'
import {doLogin} from '../../helpers/AuthHandler'

import {PageContainer, PageTitle, ErrorMessage} from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();

    const [name, setName] = React.useState('');
    const [stateLoc, setStateLoc] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassWord] = React.useState('');

    const [stateList, setStateList] = React.useState('')


    const[disabled, setDisabled] = React.useState(false)
    const[error, setError] = React.useState('')

    React.useEffect(()=>{
        const getStates = async()=>{
            const slist = await api.getStates();
            
            setStateList(slist)
        }
        getStates();
    },[])
    console.log("é um " + typeof(stateList))

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password !==confirmPassword){
            setError('Senhas não batem');
            setDisabled(false);
            return;
        }
        const json = await api.register(name, email, password, stateLoc);

        if(json.error){
            setError(json.error)
        }else{
            doLogin(json.token);
            window.location.href = '/';
        }

        setDisabled(false);
    }

    
    return(
        <PageContainer>
            <PageTitle>Cadastrar</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                disabled={disabled}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select value={stateLoc}onChange={e=>setStateLoc(e.target.value)} required>                                
                              { stateList &&
                               stateList.map((i,k) =>
                                    <option key={k}  value={i._id}>{i.name}</option>
                              
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                disabled={disabled}
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Confirmar Senha</div>
                        <div className="area--input">
                            <input 
                            type="password" 
                            disabled={disabled}
                            value={confirmPassword}
                            onChange={e=> setConfirmPassWord(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}
export default Page