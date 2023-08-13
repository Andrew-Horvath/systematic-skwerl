import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = props => {
    return (
        <section className="bg-dark text-center min-vh-100 hero-section">
            <Header />
            <div className='hero-section--content'>
            <div className="py-5 w-100">
                <h1 className="display-5 hero-section--title">Systematik Skwerl</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-2 hero-section--text ">All of your recipes and items in one tree...place.</p>
                    
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          
                        <Button className="btn-custom-standard btn-custom-standard--signup me-sm-3" btnNavigate='/signup' btnText="sign up" />          
                            <Button className="btn-custom-standard" btnNavigate='/login' btnText="login" />
                            
                    </div>
                </div>
                </div>
                </div>
  </section>
            


            
        
    )
}

export default Home;