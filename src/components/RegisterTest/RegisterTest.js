import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./RegisterTest.css"

class Test extends Component {

    render() {

      function ShowHideDiv(btnPassport) {
        var dvPassport = document.getElementById("dvPassport");
        dvPassport.style.display = btnPassport.value == "Yes" ? "block" : "none";   
      }
      function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

      function my() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "block") {
          x.style.display = "none";
        } 
      }
        return (
           
             <div className="s">
                       <div className="radio">
        <label><input type="radio" name="optradio" onClick={my}/>Option 1</label>
            </div>

            <div className="radio">
  <label><input type="radio" name="optradio" onClick={my}/>Option 2</label>
</div>
<div className="radio">
  <label><input type="radio" name="optradio" onClick={myFunction} />Option 3</label>
</div>

            
                        
                {/* <div>
                <p>Do you have Passport?</p>
                <input type="button" value="Yes" onclick="ShowHideDiv(this)" />
                <input type="button" value="No" onclick="ShowHideDiv(this)" />
                <hr />
                <div id="dvPassport" style="display: none">
                    Passport Number:
                    <input type="text" id="txtPassportNumber" />
                </div>
                </div> */}


              <button onClick={myFunction}>Click Me</button>

              <div id="myDIV">
                This is my DIV element.
              </div>

                </div>
          
          

        )
    };
};

export default Test