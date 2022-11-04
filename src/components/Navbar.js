import React from 'react';
import { Navbar, Nav, Container,Form } from 'react-bootstrap';

function Navigation() {   

    return (
        <>
        <Navbar expand='lg'>
            <Container fluid>
                <Navbar>
                    <h1> <img class="profilepic" src="./images/me.jpg" />Christopher Burnside</h1>
                </Navbar>
 
                <Navbar.Toggle aria-controls='navbar' />
                <Navbar.Collapse id='navbar'>
                   

                    <Nav className='sea'>     
                                <Nav >Welcome!</Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
         <>


                <section class="form-row">
                 
                      <div className="row">
                         
                     
                         
                          
                              <div class="col-5 card">

                                  <a href="https://fanreact.herokuapp.com/">
                                      <img src="./images/Fan1.PNG" class="img1" alt="Fan Reacts" title="Fan reacts - Click to see application"/>
                                          <img src="./images/Fan2.PNG" class="img2" alt="Fan Reacts" title="Fan reacts - Click to see application" />
                                              <div class="text">Ever had a hard time finding a movie? You're in the right place. Use this mern app to create an account, find a movie, and save it to a list of your favorites. Enjoy! *Click here to navigate to application*
                                              </div>

                                          </a>

                                </div>
                    <div class="col-5 card">

                        <a href="https://cburnside1385.github.io/Password_Genny/">
                            <img src="./images/Password_Gen1.PNG" class="img1" alt="Password Generator"/>
                                <img src="./images/Password_Gen2.PNG" class="img2" alt="Fan Reacts" title="Password Genny - Click to see application"/>
                                    <div class="text">Need a new password? Check this app out! *Click here to navigate to application*
                                    </div>
                                </a>

                            </div>
                        
                    
                                 
                             
               
                <div class="row">
                    <div class="col-5 card">

                        <a href="https://ntparker.github.io/Weather-Map-App/">
                            <img src="./images/Weather.PNG" class="img1" alt="Weather"/>
                                <img src="./images/Weather2.PNG" class="img2" alt="Fan Reacts" title="Weather app - Click to see application"/>
                                    <div class="text">Neeed to know the weather locally or across the Global?!? *Click here to navigate to application*
                                    </div>
                                </a>

                            </div>
                            <div class="col-5 card">

                                <a href="https://fanreact.herokuapp.com/">
                                    <img src="./images/Capture1.PNG" class="img1" alt="Employee tracker"/>
                                        <img src="./images/Capture2.PNG" class="img2" alt="Fan Reacts" title="Employee Tracker - Click to see application"/>
                                            <div class="text"> Need to track your employees dept/salaries etc? *Click here to navigate to Git*
                                            </div>
                                        </a>

                                    </div>





                    </div>
                    </div>
                </section>
            
            </>
        </>
  );
}

export default Navigation;