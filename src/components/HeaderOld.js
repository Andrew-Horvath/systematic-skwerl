import React from "react";
import Button from "./Button";

//standard button component
const HeaderMain = props => {
    return (
        <header className="header-main">
            <div className="d-flex flex-column min-vh-100 bg-black-50 pt-md-8 pb-7 pb-md-0">
                <div className="container my-auto">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            <h1 className="header-main-title mb-2">Systematic Skwerl</h1>
                            <p className="header-main-text">All of your recipes and items in one tree...place...</p>

                            <Button btnClass="btn-custom-standard btn-custom-standard--signup" btnText="sign up">
                            </Button>
                            <Button btnClass="btn-custom-standard" btnText="login">
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain