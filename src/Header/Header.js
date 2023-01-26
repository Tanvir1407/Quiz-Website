import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className='flex justify-between px-10 text-yellow-50 bg-slate-500 py-5'>
                <div>
                    <h1 className='font-bold cursor-pointer' onClick={()=>{navigate('/')}} >Quiz Tooker</h1>
                </div>
                <div>
                    <Link className="p-4" to="/">Home</Link>
                    <Link className="p-4" to="/statics">Statics</Link>
                    <Link className="p-4" to="/topics">Topics</Link>
                    <Link className="p-4" to="/blog">Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;