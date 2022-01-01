import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import ProfileAlumno from '../pages/ProfileAlumno';
import ProfileTutor from '../pages/ProfileTutor';
import Tutos from '../pages/Tutos';
import MisTutos from '../pages/MisTutos';
import NotFoundPage from '../pages/NotFoundPage';
import IniciarSesion from '../pages/IniciarSesion';
import Registro from '../pages/Registro';
import Start from '../components/Start';
import Question from '../components/Question';
import MisSesionesAlumno from '../pages/MisSesionesAlumno';
import MisSesionesTutor from '../pages/MisSesionesTutor';
import { useState, useEffect } from 'react';
import TutosCreados from '../pages/TutosCreados';
import CrearTutos from '../pages/CrearTutos';
import Resultados from '../pages/Resultados';
import Chatbot from '../components/Chatbot';
import EditarTuto from '../pages/EditarTuto';
import VerTuto from '../pages/VerTuto';
import Tutorial from '../pages/Tutorial';
import MisAlumnos from '../pages/MisAlumnos';

import quizData from '../data/quiz.json';
import tutoData from '../data/tuto.json';



const AppRouter = () => {
    const [sesion, setSesion] = useState(0);
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [userCurrent, setUserCurrent] = useState("");

    useEffect(() => {
        //let user = localStorage.getItem("user") ?? null;
        let user = localStorage.getItem("user") !== "" ? localStorage.getItem("user") : "";
        //console.log("print user", user)
        setUserCurrent(user);
        //window.location.reload(false);
        console.log("sesion -->", sesion)
    }, [sesion])


    //let userCurrent = localStorage.getItem("user");
    //userCurrent = localStorage.getItem("user");
    //userCurrent = userCurrent !== null ? JSON.parse(userCurrent) : "";

    //console.log("user  App", userCurrent)
    const quizStartHandler = ()=>{
        setStep(2);
    }

    return(
        <Router>
            <div>
            {userCurrent ? (
                <div>
                    <Navbar onCollapse={(s) => {setSesion(s)}} session={sesion} />
                    <Switch>
                        <Route path='/' exact component={Home} />

                        <Route path='/start'>
                            {step===1 && <Start onQuizStart={quizStartHandler} />}
                            {step===2 && <Question 
                                data = {quizData.data[activeQuestion]}
                                onAnswerUpdate={setAnswers}
                                numberOfQuestions={quizData.data.length}
                                activeQuestion={activeQuestion}
                                onSetActiveQuestion={setActiveQuestion}
                                onSetStep={setStep}
                            />}
                        </Route>

                        <Route path='/perfilalumno' component={ProfileAlumno} />
                        <Route path='/perfiltutor' component={ProfileTutor} />

                        <Route path='/vertuto/:tuto'>
                            <VerTuto
                                data={tutoData.data[0]}
                            />
                        </Route>
                        {/* <Route path='/inicio'>
                            <Registro onCollapse={(sesion) => {setSesion(sesion)}} />
                        </Route>
                        <Route path='/inicio' component={IniciarSesion} />*/}

                        <Route path="/tutos">
                            <Tutos/>
                        </Route>

                        <Route path='/tutoriales/:tuto'>
                            <Tutorial
                                data={tutoData.data[0]}
                            />
                        </Route>

                        <Route path='/mistutos' component={MisTutos} />
                        <Route path='/resultados' component={Resultados} />
                        <Route path='/tutoscreados' component={TutosCreados} />
                        <Route path='/creartutos' component={CrearTutos} />
                        <Route path='/misSesiones' component={MisSesionesAlumno}/> 
                        <Route path='/misSesionesTutor' component={MisSesionesTutor}/>
                        <Route path='/misalumnos' component={MisAlumnos}/>
                        <Route path='/editartuto/:tuto'>
                            <EditarTuto
                                data={tutoData.data[0]}
                            />
                        </Route>


                        <Route path='*' component={NotFoundPage} />

                    </Switch>
                </div>

            ) : (
                <Route path='*'>
                    <Registro onCollapse={(s) => {setSesion(s)}} session={sesion}/>
                </Route> 
            )}
            <Chatbot/>
            </div>
        </Router>
    )
}

export default AppRouter;