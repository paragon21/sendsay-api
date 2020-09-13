import React, {useState, useEffect} from 'react'
import FadeLoader from '@bit/davidhu2000.react-spinners.fade-loader';
import Connector from '../../_services/connector'
import './LoginForm.css'

const LoginForm = () => {

    const [login, setLogin] = useState({value: ''})
    const [sublogin, setSublogin] = useState({value: ''})
    const [passwd, setPasswd] = useState({value: ''})
    const [disabledButtonStatus, setDisabledButtonStatus] = useState(true)
    const [loadingButtonStatus, setLoadingButtonStatus] = useState(false)

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




    return (
        <div className="login-form">
            <div className="login-form__text">API-консолька</div>
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
                    {!loadingButtonStatus? "Войти": "Загрузка"}
                    {/* <FadeLoader radius={10} radiusUnit="px" margin="2px" color="white" width={3} height={9} style="left: 50;"  /> */}
                </button>
            </form>
        </div>
        
    )
}

export default LoginForm