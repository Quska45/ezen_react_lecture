const header = () => {
    return (
        <nav className='navbar navbar-inverse'>
            <div className='container'>
                <div className='navbar-header'>
                    <a className="navbar-brand" href="/">Hello Next</a>
                </div>
                <div id="navbar">
                    <ul className="nav navbar-nav">
                        <li><a href="/department/list">학과관리</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default header;
