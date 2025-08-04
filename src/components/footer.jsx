export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-auto">
            <hr className="my-4" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-danger">TELEFLIX</h5>
                        <p className="mb-0 text-secondary">raccolta film del mondo</p>
                    </div>
                    <div className="col-md-3">
                        <h6>Link Utili</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-light text-decoration-none">i nostri film</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6>Seguici</h6>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-light">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-light">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-light">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-light">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-0">&copy; 2025 <span className="text-danger">TELEFLIX</span> . Tutti i diritti riservati.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <a href="#" className="text-light text-decoration-none me-3">Privacy Policy</a>
                        <a href="#" className="text-light text-decoration-none">Termini di Servizio</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}