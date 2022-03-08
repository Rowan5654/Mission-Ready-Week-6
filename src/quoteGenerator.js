const carMakes = {};

function quoteGenerator() {
    return (
        <>
            <div class="quote-generator-main-div">
                {/* Section 1 */}
                <p class="quote-generator-title">Get your quote now</p>
                <p class="quote-generator-subtitle">Please enter the <b>details</b> of the <b>vehicle you want to insure</b></p>
                
                <div class="quote-generator-div">
                    <textarea class="quote-generator-textarea" id="big-text" maxLength={6} placeholder='Licence Plate'></textarea>
                </div>

                <div class="quote-generator-div selectors">
                    <select class="quote-generator-select first-select" name="car-make">
                        <option class="first-option" value="0">Car Make</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select class="quote-generator-select" name="model">
                        <option value="first-option">Model</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                

                <div class="quote-generator-div selectors">
                    <select class="quote-generator-select first-select" name="body-style">
                        <option  class="first-option" value="0">Body Style</option>
                        <option value="1">Sedan</option>
                        <option value="2">Hatchback / Wagon</option>
                        <option value="3">Convertible</option>
                        <option value="4">SUV</option>
                        <option value="5">Mini Van</option>
                        <option value="6">Ute</option>
                    </select>
                    <select class="quote-generator-select" name="engine-size">
                        <option  class="first-option" value="0">Engine Size</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                
                <div class="quote-generator-div">
                    <textarea class="quote-generator-textarea" id="small-text" placeholder='Address'></textarea>
                </div>

                {/* Section 2 */}
                <p class="quote-generator-subtitle"><b>Does the car have any of the following features?</b></p>

                <div class="quote-generator-yes-no">
                    <div class="yes-no-text"> 
                        <p class="yes-no-title">An immobiliser:</p>
                        <p class="yes-no-description">[Security system that stops car from being driven when activated]</p>
                    </div>
                    <div class="yes-no-buttons">
                        <button class="yes-button">YES</button>
                        <button class="no-button">NO</button>
                    </div>
                </div>

                <div class="quote-generator-yes-no bottom-yes-no">
                    <div class="yes-no-text"> 
                        <p class="yes-no-title">Non factory modifications:</p>
                        <p class="yes-no-description">[See list of non insurable modifications below]</p>
                    </div>
                    <div class="yes-no-buttons">
                        <button class="yes-button">YES</button>
                        <button class="no-button">NO</button>
                    </div>
                </div>

                {/* Section 3 */}
                <p class="quote-generator-subtitle">Please enter the <b>details</b> of the <b>driver</b> you want to insure</p>
                <div class="section-3">
                    <div class="date-of-birth-grid first-select">
                        <div class="date-of-birth-text">
                            <p>Driver's<br></br>Date of Birth</p>
                        </div>
                        <div class="date-of-birth">
                            <input type="date"></input>
                        </div>
                    </div>
                    <div>
                        <select class="quote-generator-select gender-select" name="gender">
                            <option  class="first-option" value="0">Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Gender Diverse</option>
                        </select>
                    </div>
                </div>

                {/* Section 4 */}
                <button class="quote-generator-button">Submit</button>
            </div>
        </>
    );
}
                        {/* <textarea placeholder='Date of Birth' id="half-width-input"></textarea>
                        <textarea placeholder='Gender' id="half-width-input"></textarea> */}
export default quoteGenerator;