import { useState } from 'react';
import './Home.css'
import iconList from '../assets/icon-list.svg';
import successImg from '../assets/icon-success.svg';



const Home = () => {
    const [inputText, setInputText] = useState('');
    const [emptyInputTxt, setemptyInputTxt] = useState('');
    const [isVisible, setIsVisible] = useState(true);


    const handleEmail = () => {
        inputText == '' ? (setemptyInputTxt('Insira um valor válido!')) : (setIsVisible(false));
    }

    const finishSubscritpionProccess = () => {
        setIsVisible(true);
        setInputText('');
        setemptyInputTxt('');
    }
    return (
        <div>
            {
                isVisible ? (
                    <div className='homePage'>
                        <div className='mainTxt'>
                            <h1>Mantenha-se atualizado!</h1>
                            <p> Se junte a mais de 60.000 gerentes de produção recebendo atualizações em: </p>
                            <ul>
                                <li>
                                    <img src={iconList} alt="checked icon" className='listICon' />
                                    Descoberta de produtos e construção do que importa
                                </li>
                                <li>
                                    <img src={iconList} alt="checked icon" className='listICon' />
                                    Mantendo constância nas atualizações é a chave do sucesso
                                </li>
                                <li>
                                    <img src={iconList} alt="checked icon" className='listICon' />
                                    E muito mais!
                                </li>
                            </ul>
                            <form>
                                <label>
                                    <span>Email </span>
                                    <span className='emptyInputTxt'>   {emptyInputTxt}</span>
                                    <input type='email' placeholder='email@company.com' className='inputText' required onChange={(e) => setInputText(e.target.value)} />
                                    <button onClick={handleEmail} type="submit"> Inscreva-se</button>
                                </label>
                            </form>
                        </div>



                        <div className='illustrationDesktop'> </div>


                    </div >) : (<div className="thankYouDiv">



                        <div>
                            <img src={successImg} alt="" />
                            <h1>Obrigado por se inscrever!</h1>
                            <p>Um email de confirmação foi enviado para <span className="enderecoEmail"> {inputText} </span>. Por favor, abra e clique no botão no corpo do email para confirmar sua inscrição.</p>
                            <button onClick={finishSubscritpionProccess} className='dismissBtn'> Dispensar mensagem </button>
                        </div>
                    </div>)}


        </div>




    )
}

export default Home