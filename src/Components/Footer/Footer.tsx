const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} My To-Do Board. All rights reserved.</p>
            </div>

            <div className="container mx-auto text-center">
                <p className="text-sm">Powered by React and Redux Toolkit</p>
            </div>

            <div className="container mx-auto text-center">
                <p className="text-sm">Developed by Kirill Borisenko</p>
            </div>

            <div className="container mx-auto text-center">
                <p className="text-sm">Contact: kb314712@gmail.com</p>
            </div>

            <div className="container mx-auto text-center">
                <p className="text-sm">Version: 1.0.0</p>
            </div>
        </footer>
    );
};

export default Footer;