import React from 'react';
import './Form.scss';
import { useState, useEffect } from 'react';
import axios from "axios";
import InputMask from 'react-input-mask';


function Form({ t,textButton, buttonWidth, onFormSuccessSubmit, onFormFailSubmit }) {

    const [formValid, setFormvalid] = useState(false);

    const [nameError, setNameError] = useState('');
    const [telError, setTelError] = useState('');

    const [consent, setConsent] = useState(false);
    const [consentErrorState, setConsentErrorState] = useState('');
    const onToggleCheck = () => {
        setConsent(!consent);
        setConsentErrorState('');
    }

    const [name, setName] = useState('');
    const setNameHandler = (event) => {
        setName((prev) => {
            prev = event.target.value;
            if (prev.length <= 1) {
                setNameError('red')
            } else setNameError('')
            return prev;
        });
    };

    /*const [tel, setTel] = useState('');
    const setTelHandler = (event) => {
        setTel((prev) => {
            prev = event.target.value;
            if (prev.length <= 1) {
                setTelError('red')
            } else setTelError('')
            return prev;
        });
    };*/
    /*const [phoneValue, setPhoneValue] = useState('');
    const setPhoneHandler = (value) => {
        setPhoneValue((prev) => {
            prev = value;
            if (prev <= 5) {
                setTelError('red')
            } else setTelError('')
            return prev;
        });
    };*/

    const [surnameValue, setSurnameValue] = useState('');
    const setSurnameHandler = (event) => {
        setSurnameValue((prev) => {
            prev = event.target.value;
            if (prev <= 5) {
                setTelError('red')
            } else setTelError('')
            return prev;
        });
    };

    

    const [phoneNumberFieldState, setPhoneNumberFieldState] = useState("");
    const setPhoneNumberStateHandler = (event) => {
        setPhoneNumberFieldState((prev) => {
            prev = event.target.value;
            console.log(prev)
            return prev;
        });
    };

    useEffect(() => {
        if ((nameError === 'red' || name.length === 0) || (telError === 'red')) {
            setFormvalid(false)
        } else {
            setFormvalid(true)
        }
    }, [nameError, name.length, telError]);

    const cleanValues = (name,surname,tel) => {
        name('');
        surname('');
        tel('');
    }


    const onClickSendButtonHandler = () => {
        if (!consent) {
            setConsentErrorState('red');
        }
        if (formValid && consent) {
            console.log('ok');
            try {
                axios.post("https://biznesexpert.bitrix24.pl/rest/2237/qpmtdmxaymh3sd39/crm.lead.add.json", {
                  fields: {
                    "TITLE": "hipoteka.finexp.pl  | Contact Form",
                    "ASSIGNED_BY_ID": 8561,
                    "SOURCE_ID": "UC_44O805",
                    "NAME": name,
                    "LAST_NAME": surnameValue,
                    "STATUS_ID": "NEW",
                    "OPENED": "Y",
                    "PHONE": [{ "VALUE": phoneNumberFieldState, "VALUE_TYPE": "WORK" }],
                  }
                }).then(() => {
                cleanValues(setName,setSurnameValue,setPhoneNumberFieldState);
                onToggleCheck();
                onFormSuccessSubmit();
            }
                );
              } catch (e) {
                console.log(e);
              }
        } else console.log("????")
    }
    return (
        <div className="form-wrapper">
               <div className="main-form-header">
                 {t("main_form_capture")}
            </div>
            <form className='contact-form' method='post' onSubmit={(e) => e.preventDefault()}>
                <div id="form-inner">
                    <div className="form-input">
                        <input type="text" className={`${'input'} ${nameError}`}
                            onChange={setNameHandler}
                            id="name"
                            value={name}
                            placeholder={t("main_form_name_placeholder")} />
                    </div>
                    <div className="form-input">
                        <input type="text" className={`${'input'} ${nameError}`}
                            onChange={setSurnameHandler}
                            id="surname"
                            value={surnameValue}
                            placeholder={t("main_form_surname_placeholder")} />
                    </div>
                    <div className="phone-number-input">
                        <InputMask
                            mask="+48 999 999 999"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder={t("main_form_tel_placeholder")}
                            value={phoneNumberFieldState}
                            onChange={setPhoneNumberStateHandler}
                        />
                    </div>

                    <div className={`form-bottom ${consentErrorState}`}>
                        <div><input className='checkbox' checked={consent} onChange={onToggleCheck} type="checkbox" id='check' /></div>
                        <div className={`form-description `}>
                        {t("main_form_agreement")}
                        </div>
                    </div>
                    <div className='form-button'>
                        <button
                            disabled={!formValid && !consent}
                            type="submit"
                            className="form-button"

                            onClick={() => {
                                onClickSendButtonHandler();
                            }
                            } >{t("main_form_button")}</button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Form;