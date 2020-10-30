import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'
import "./Faq.css"

class Faq extends Component {

    render() {
        
        return (
            <ReactBootStrap.Container className="top-space" style={{ marginBottom:'110px'}}>
            <div className="faq-display">
        
            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h2 class="faq"><b id="fade">F</b>requently <b id="fade">A</b>sked <b id="fade">Q</b>uestions</h2>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'20px', marginTop:'1px'}}>
                <i id="explanation">Here are some questions collected here and there by our 
                musicians and our team about dans l'Jardin and how it works: </i>
                       </ReactBootStrap.Col>
                       </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>1. What do you mean by a <b id="low">“small committee”</b> audience?<hr></hr></h3>
                <div id="high">
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}}>The services in the Garden are indicated for an audience of 1 to approx. 14 people,
                     usually family members, friends, institutions or work colleagues.
                     In addition to this, you need to know more about it. We do not offer musicians to play for 
                     background entertainment, for official events or for wedding aperitifs.
                      On the other hand, if the future groom wants to offer a musical surprise to 
                      his future wife and his bridesmaids on the day of the wedding dress fitting, great!</ReactBootStrap.Col>
                      </div>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>
            
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col ><h3>2. Why does a performance only last <b id="low">20 minutes</b>?<hr></hr></h3>
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}} id="high" >Except in special cases, we offer a 20-minute format with
                 a soloist or a duo of musicians. This duration is, in our opinion, ideal for all.</ReactBootStrap.Col>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>3. I don't have a garden, is it possible to play <b id="low">inside</b> ? <hr></hr></h3>
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}} id="high">Yes of course ! It is possible to play in any room of a house, a private home or an institution. 
                The places we avoid are too public spaces such as multipurpose rooms, large squares, etc.</ReactBootStrap.Col>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>4. How is <b id="low">the distribution of earnings</b> from a service carried out ? <hr></hr></h3>
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}} id="high">We try to have the most honest and fair price for the musicians. 
                The breakdown is as follows: <br></br><br></br>
                80% - Artist<br></br>
  
                10% - Marketing - Maintenance<br></br>
              

                7% - Administration - Order management<br></br>
               
        
                3% - Online payment commission  </ReactBootStrap.Col>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h3>5. I would like to <b id="low">cancel</b> due to bad weather or other unforeseen circumstances, what should I do?<hr></hr></h3>
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}} id="high">Music is a professional activity. Like every profession, 
                the payment of a service must be honored and will not be reimbursed. We are however 
                ready to find solutions and, depending on the artist's agenda, find a solution. 
                It has so far always been possible to find one and we will do everything possible to keep it that way.</ReactBootStrap.Col>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h3>6. Why can't we <b id="low">choose the artist from list</b>  ?<hr></hr></h3>
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}} id="high">
                    The platform is dependent on the availability and location of the artists.
                     All musicians from dans l'Jardin have their own musical activities outside of the platform.
                      This is why we are always looking for a person available and located in the 
                      region and on the requested date. It is currently not possible to keep such a list up to 
                      date in real time and therefore to offer it.  </ReactBootStrap.Col>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h3>7. In <b id="low">which region</b>  is the platform available in the Garden?<hr></hr></h3>
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}} id="high">
                Our musical field of action is based throughout French-speaking Switzerland.
                 The cities are much more populated with musicians, but it is also important 
                 to us to offer the possibility of offering musicians in more isolated regions. 
                 We do our best to cover a wide territory with the artists registered on the platform. 
                 It is certainly a challenge, but we believe that everyone has the right to listen to music.</ReactBootStrap.Col>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h3>8. Is it possible to <b id="low">tip</b>  musicians?<hr></hr></h3>
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}} id="high">
                If you liked the performance of the musicians, feel free to tip them. 
                They will be all the more grateful to you in these difficult times in the cultural field.
                 You have no obligation to do so, but if it does, we will be very happy and the exchange 
                 is between you and the artist.</ReactBootStrap.Col>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h3>9. How to ensure that the musician will be present at the <b id="low">indicated time</b>  ?<hr></hr></h3>
                <ReactBootStrap.Col className="fontcol" style={{marginLeft:'10px', marginTop:'1px'}} id="high">
                Contrary to what one might think, musicians are punctual. To make sure everything goes well, 
                we invite you to confirm the address and time again via a short text message the same day. 
                We insist on the fact that it is important, out of respect for the artists, not to change,
                 unless there is a major problem, the schedule agreed with the artist. </ReactBootStrap.Col>
               </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col className="fontcol" style={{fontSize:'25px'}} >
                <h3>Did not find what you were looking for ?</h3>
                <ReactBootStrap.Col className="fontcol" id="high" style={{marginLeft:'5px',fontSize:'21px'}}>
                
                Do not hesitate to contact us at <i id="low">info@dansljardin.ch</i> ,
                in addition to answering you, your question may be useful to us in order to complete this list.
                       </ReactBootStrap.Col>
                       </ReactBootStrap.Col>
                       </ReactBootStrap.Row>

                       


                </div>
            </ReactBootStrap.Container>

        )
    };
};

export default Faq