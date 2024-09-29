import { useNavigate } from 'react-router-dom';

export function Header() {
    
    const irHome = useNavigate();
    const reload = () => {
        irHome('/');
    }

    return (
        <header className="fixed flex bg-secondary w-screen h-14 gap-16 border-y-1 border-zinc-900">
            <div className="flex flex-col w-16 items-center text-primary font-bold text-xs py-1 pl-6">
                <button onClick={reload}>LEGENDS</button>
                <button onClick={reload}>NEVER</button>
                <button onClick={reload}>DIE</button>
            </div>

            <div className="flex gap-6 text-primary font-bold">
                <button className="hover:text-tertiary transition-colors">RANKING</button>
                <button className="hover:text-tertiary transition-colors">BASES</button>
                <button className="hover:text-tertiary transition-colors">BAIXAR</button>
                <button className="hover:text-tertiary transition-colors">CONTATO</button>
            </div>
        </header>
    );
}