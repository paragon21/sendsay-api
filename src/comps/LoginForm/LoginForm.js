import React, {useState, useEffect} from 'react'
import FadeLoader from '@bit/davidhu2000.react-spinners.fade-loader';
import Connector from '../../_services/connector'
import './LoginForm.css'
import LoadSpinner from '../LoadSpinner'

const LoginForm = () => {

    const [login, setLogin] = useState({value: ''})
    const [sublogin, setSublogin] = useState({value: ''})
    const [passwd, setPasswd] = useState({value: ''})
    const [disabledButtonStatus, setDisabledButtonStatus] = useState(true)
    const [loadingButtonStatus, setLoadingButtonStatus] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({err: false, err_text: ''})

    useEffect( () => {
        if (login.isValid && passwd.isValid) {
            setDisabledButtonStatus(false)
        } else {
            setDisabledButtonStatus(true)
        }
    }, [login, passwd])

    const validateLogin = (text = '') => {
        if (text.match(/^.*[а-я].*$/gi) || text.match(/^.*ё.*$/gi) || text.match(/^.* .*$/gi)) {
            setLogin(prev => ({...prev, isValid: false}))
        } else {
            setLogin(prev => ({...prev, isValid: true})) 
        }
    }

    const validatePassword = (text = '') => {
        if (text.match(/^.*[а-я].*$/gi) || text.match(/^.*ё.*$/gi)) {
            setPasswd(prev => ({...prev, isValid: false}))
        } else {
            setPasswd(prev => ({...prev, isValid: true}))
        }
    }

    // Контроллируем состояние формы
    const formChangeHandler = e => {
        e.persist()
        switch (e.target.id) {
            case 'login':
                if (e.target.value === "") {
                    setLogin(prev => ({...prev, isValid: false, value: e.target.value}))
                } else {
                    validateLogin (e.target.value)
                    setLogin(prev => ({ ...prev, value: e.target.value }))
                }
                break;
            case 'sublogin':
                setSublogin(prev => ({ ...prev, value: e.target.value }))
                break;
            case 'passwd':
                if (e.target.value === "") {
                    setPasswd(prev => ({...prev, isValid: false, value: e.target.value}))
                } else {
                    validatePassword(e.target.value)
                    setPasswd(prev => ({ ...prev, value: e.target.value }))
                }
                break;
            default:
                return null  
        }
    }

    const formSubmitHandler = e => {
        e.preventDefault()

    }

    // Функции валидации
    // Проверка не пусты ли обязательные поля
    const validateMandatoryFields = () => {
        if (login.value.length === 0) {
            setLogin(prev => ({...prev, isValidToSubmit: false}))
        } else {
            setLogin(prev => ({...prev, isValidToSubmit: false}))
        }
        
        if (passwd.value.length === 0) {
            setPasswd(prev => ({...prev, isValidToSubmit: false}))
        } else {
            setPasswd(prev => ({...prev, isValidToSubmit: true}))
        }       
    }

    const errElement = (
        <div className="login-form__error">
            <div className="login-form__error-status">
                <svg className="login-form__error-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#CF2C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 15H16" stroke="#CF2C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 9H9.01" stroke="#CF2C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 9H15.01" stroke="#CF2C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
                <div className="login-form__error-title">Вход не вышел</div>
            </div>
            <div className="login-form__error-msg">{submitStatus.err_text}</div>
        </div>
    )




    return (
        <div className="login-form">
            <div className="login-form__text">API-консолька</div>
            {/* Error messages here */}
            { submitStatus.err ? errElement : null }
            {/* Form starts here    */}
            <form onSubmit={formSubmitHandler} className="login-form__form">
                <label className="login-form__label" htmlFor="login">Логин</label>
                <input onChange={formChangeHandler} 
                    className="login-form__input" 
                    type="text" id="login" value={login.value} 
                />

                <label className="login-form__label" htmlFor="sublogin">Сублогин</label>
                <input onChange={formChangeHandler} type="text" id="sublogin" value={sublogin.value} className="login-form__input" />

                <label className="login-form__label" htmlFor="passwd">Пароль</label>
                <input onChange={formChangeHandler} 
                    className="login-form__input" 
                    type="password" id="passwd" value={passwd.value}  
                />

                <button
                    type="submit" 
                    //disabled={disabledButtonStatus ? true : false} 
                    className={disabledButtonStatus ? "login-form__button login-form__button_disabled" : "login-form__button"}
                >
                    {!loadingButtonStatus? <LoadSpinner />: "Войти"}
                    {/* <FadeLoader radius={10} radiusUnit="px" margin="2px" color="white" width={3} height={9} style="left: 50;"  /> */}
                </button>
            </form>
        </div>
        
    )
}

export default LoginForm