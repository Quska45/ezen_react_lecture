const header = () => {
    return (
        <nav className='navbar navbar-inverse'>
            <div className='container'>
                <div className='navbar-header'>
                    <a className="navbar-brand" href="/">Hello Next</a>
                </div>
                <div id="navbar">
                    <ul className="nav navbar-nav">
                        <li><a href="/about">about(404)</a></li>
                        <li><a href="/about/hello">hello</a></li>
                        <li><a href="/about/world">world</a></li>

                        <li><a href="/intro/hello/2534">hello</a></li>
                        <li><a href="/intro/world/6321">world</a></li>
                        
                        <li><a href="/prods/lists/mans/outer/summer/12345">prods</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default header;
