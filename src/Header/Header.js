import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between px-10 text-yellow-50 bg-slate-500 py-5'>
                <div>
                    <h1 className='font-bold'>Quiz Tooker</h1>
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