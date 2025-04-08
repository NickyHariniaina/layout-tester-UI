import { Navbar } from "../../Navbar/Navbar"
import { Link } from "react-router"
import "./Home.css"
export const Home = () => {
    return <div className="home">
        <header className="home__header d-flex flex-row align-items-center justify-content-around py-2 sticky-top">
            <h1 className="text-dark">Layoutester</h1>
            <Navbar 
                option1="Home"
                link1="/"
                option2="Start testing"
                link2="/keyboard"
                option3="Documentation"
                link3="/documentation"
                option4="About us"
                link4="/about_us"/>
        </header>
        <section className="home__section my-5 d-flex flex-row align-item-center justify-content-around">
            <div className="home__section_left-section ">
                <img src= "./keyboard-template.png" alt="Keyboard" className="img-fluid"draggable="false"/>
            </div>
            <div className="home__section_right-section d-flex flex-column justify-content-center">
                <h2>Welcome to <span>Layoutester</span>...</h2>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner p-2">
                        <div class="carousel-item active">
                            <p className="d-block w-100">Try some weird layout</p>
                        </div>
                        <div class="carousel-item">
                            <p className="d-block w-100">Customize your own test</p>
                        </div>
                        <div class="carousel-item">
                            <p className="d-block w-100">Read the docs !</p>
                        </div>
                        <div class="carousel-item">
                            <p className="d-block w-100">Almost +50 layout</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <aside className="">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h3 className="">Start typing now...</h3>
                <p>You can start by using our predefined test or even creating yours.</p>
                <Link to="/keyboard" className="text-dark"><i className="bx bxs-keyboard bx-tada display-3"></i></Link>
                <p>Click me !</p>
            </div>
            <hr className="mx-auto my-5"/>
            <div className="d-flex flex-column align-items-center justify-content-center ">
                <h3 className="">Or you can also read the docs...</h3>
                <p>Browse into a thousand type of keyboard and layout.</p>
                <Link to="/documentation" className="text-dark"><i class='bx bxs-book-bookmark bx-tada display-3' ></i></Link>
                <p>Click me !</p>
            </div>
        </aside>
    </div>
}