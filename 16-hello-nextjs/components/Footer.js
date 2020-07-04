const Footer = () => {
    return (
        <div>
            <div className="footer">
                <p className="pull-left">React on next.js Sample</p>
                <p className="pull-right">copyright&copy;2020</p>
            </div>
            
            {/* CSS적용 방법(2) - jsx사용 */}
            <style jsx>{`
                .footer {
                    padding: 10px 20px;
                    background-color: #000;
                    color: #fff;
                }

                .footer .pull-left {
                    float: left;
                }

                .footer .pull-right {
                    float: right;
                }

                .footer:after {
                    display: block;
                    content: '';
                    clear: both;
                    float: none;
                }
            `}</style>
        </div>
    );
};

export default Footer;