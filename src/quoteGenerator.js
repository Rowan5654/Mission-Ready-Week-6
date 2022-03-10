import profile from "./quoteSelects.json";

function appendOption(element, firstOption, value, text, select) {
    const newOption = document.createElement(element);
    newOption.className = (firstOption) ? "first-option" : "";
    newOption.value = value;
    newOption.text = text;
    select.appendChild(newOption);
}

function ToggleButtons(topButtons, yesClicked) {
    let yesbtn;
    let nobtn;

    if (topButtons)
    {
        yesbtn = document.getElementById("top-yes-button");
        nobtn = document.getElementById("top-no-button");
    }
    else {
        yesbtn = document.getElementById("bottom-yes-button");
        nobtn = document.getElementById("bottom-no-button");
    }

    //if yes button clicked
    if (yesClicked)
    {
        if (yesbtn.className == "yes-button-active")
        {
            yesbtn.className = "yes-button-inactive";
            yesbtn.value = "inactive";
        }
        else {
            yesbtn.className = "yes-button-active";
            yesbtn.value = "active";
        }

        nobtn.className = "no-button-inactive";
        nobtn.value = "inactive";
    }
    else {
        if (nobtn.className == "no-button-active")
        {
            nobtn.className = "no-button-inactive";
            nobtn.value = "inactive";
        }
        else {
            nobtn.className = "no-button-active";
            nobtn.value = "active";
        }

        yesbtn.className = "yes-button-inactive";
        yesbtn.value = "inactive";
    }
}

function quoteGenerator() {
    //Triggered whenever the user changes the "Car Make" option
    function handleChange() {
        //Get's the make and model selector elements
        const carMakeSelect = document.getElementById('car-make');
        const carModelSelect = document.getElementById('car-model');
        //enables the car model selector
        carModelSelect.disabled = carMakeSelect.value == "-1";

        //Removes the current model selection
        while ( carModelSelect.childNodes.length >= 1 )
        {
            carModelSelect.removeChild(carModelSelect.firstChild);       
        }

        //Repopulates the model selection
        appendOption('option', true, -1, "Model", carModelSelect);

        for (var index = 0; index < profile.values[carMakeSelect.value].models.length; index++)
        {
            appendOption('option', false, index, profile.values[carMakeSelect.value].models[index], carModelSelect);
        }
    }

    //Return html
    return (
        <>
            <div className="quote-generator-main-div">
                {/* Section 1 */}
                <p className="quote-generator-title">Get your quote now</p>
                <p className="quote-generator-subtitle">Please enter the <b>details</b> of the <b>vehicle you want to insure</b></p>

                <div className="quote-generator-div">
                    <textarea className="quote-generator-textarea" id="big-text" maxLength={6} placeholder='Licence Plate'></textarea>
                </div>

                <div className="quote-generator-div selectors">
                    <select className="quote-generator-select first-select" name="car-make" id="car-make" onChange={handleChange}>
                        <option className="first-option" value="-1">Car Make</option>
                        { profile.values.map((item, index) => <option key={index} value={index}>{item.make}</option>) }
                    </select>
                    <select className="quote-generator-select" name="model" id="car-model" disabled>
                        <option className="first-option" value="-1">Model</option>
                    </select>
                </div>

                <div className="quote-generator-div selectors">
                    <select className="quote-generator-select first-select" name="body-style">
                        <option className="first-option" value="-1">Body Style</option>
                        { profile.bodyStyles.map((item, index) => <option key={index} value={index}>{item}</option>) }
                    </select>
                    <select className="quote-generator-select" name="engine-size">
                        <option  className="first-option" value="-1">Engine Size</option>
                        { profile.engineSizes.map((item, index) => <option key={index} value={index}>{item}</option>) }
                    </select>
                </div>

                <div className="quote-generator-div">
                    <textarea className="quote-generator-textarea" id="small-text" placeholder='Address'></textarea>
                </div>

                {/* Section 2 */}
                <p className="quote-generator-subtitle"><b>Does the car have any of the following features?</b></p>

                <div className="quote-generator-yes-no">
                    <div className="quote-generator-yes-no" id="immobiliser">
                        <div className="yes-no-text">
                            <p className="yes-no-title">An immobiliser:</p>
                            <p className="yes-no-description">[Security system that stops car from being driven when activated]</p>
                        </div>
                        <div className="yes-no-buttons">
                            <button className="yes-button-inactive" value="inactive" id="top-yes-button" onClick={() => ToggleButtons(true, true)}>YES</button>
                            <button className="no-button-inactive" value="inactive" id="top-no-button" onClick={() => ToggleButtons(true, false)}>NO</button>
                        </div>
                    </div>
                </div>

                <div className="quote-generator-yes-no yes-no-dropdown bottom-yes-no" id="modifications">
                    <div className="yes-no-text"> 
                        <p className="yes-no-title">Non factory modifications:</p>
                        <p className="yes-no-description">[See list of non insurable modifications below]</p>
                    </div>
                    <div className="yes-no-buttons">
                        <button className="yes-button-inactive" value="inactive" id="bottom-yes-button" onClick={() => ToggleButtons(false, true)}>YES</button>
                        <button className="no-button-inactive" value="inactive" id="bottom-no-button" onClick={() => ToggleButtons(false, false)}>NO</button>
                    </div>
                    <div className="yes-no-dropdown-content">
                        <p className="yes-no-dropdown-content-text"><b>Boost Controller</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Internal Engine Modifications</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Modified Emgine Management Systems</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Aftermarket Fitted Turbocharges</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Carbon Fibre Panels</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Door Modifications</b></p>
                        <p className="yes-no-dropdown-content-text"><b>External Wastegate</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Fuel Modifications</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Gearbox Upgrade</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Roll Cage</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Fitted Racing Harness</b></p>
                        <p className="yes-no-dropdown-content-text"><b>Specialised Paint, Paint Effects and Interior</b></p>
                        <p className="yes-no-dropdown-content-bottom-text">If your car has any modifications please select YES. For assistance call <b>0800 887 637</b></p>
                    </div>
                </div>

                {/* Section 3 */}
                <p className="quote-generator-subtitle">Please enter the <b>details</b> of the <b>driver</b> you want to insure</p>
                <div className="section-3">
                    <div className="date-of-birth-grid first-select">
                        <div className="date-of-birth-text">
                            <p>Driver's<br></br>Date of Birth</p>
                        </div>
                        <div className="date-of-birth">
                            <input type="date"></input>
                        </div>
                    </div>
                    <div>
                        <select className="quote-generator-select gender-select" name="gender">
                            <option  className="first-option" value="0">Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Gender Diverse</option>
                        </select>
                    </div>
                </div>

                {/* Section 4 */}
                <button className="quote-generator-button">Submit</button>
            </div>
        </>
    );
}

export default quoteGenerator;