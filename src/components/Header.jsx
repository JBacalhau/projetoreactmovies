//importação da imagem é necessário por que senão perde-se quando se fizer o bilding
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';


export function Header() {
    return (
        <header className='bg-brand-blue-900 flex flex-col gap-y-3 md:flex-row justify-between items-center p-6'>

            <Link to="/">
                <img src={logo} alt='Logotipo' />
            </Link>

            <nav className='text-white flex gap-x-16'>
                <Link to="/" className='hover:text-brand-blue-200'>Início</Link>
                <Link to="/filmes" className='hover:text-brand-blue-200'>Filmes</Link>
                <Link to="/series" className='hover:text-brand-blue-200'>Séries</Link>
            </nav>

        </header>


    )
}