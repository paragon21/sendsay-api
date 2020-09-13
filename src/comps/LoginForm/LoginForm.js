import React, {useState, useEffect} from 'react'
import './LoginForm.css'

const LoginForm = () => {

    const [login, setLogin] = useState({value: ''})
    const [sublogin, setSublogin] = useState({value: ''})
    const [passwd, setPasswd] = useState({value: ''})
    const [disabledButtonStatus, setButtonStatus] = useState(true)

    useEffect( () => console.log(login), [login])

    // Контроллируем состояние формы
    const formChangeHandler = (e) => {
        e.persist()
        switch (e.target.id) {
            case 'login':
                validateLogin (e.target.value)
                setLogin(prev => {
                    return {
                        ...prev,
                        value: e.target.value
                    }
                })
                break;
            case 'sublogin':
                setSublogin(prev => {
                    return {
                        ...prev,
                        value: e.target.value
                    }
                })
                break;
            case 'passwd':
                setPasswd(prev => {
                    return {
                        ...prev,
                        value: e.target.value
                    }
                })
                break;
            default:
                return null  
        }
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

    const validateLogin = (text = '') => {
        if (text.match(/^.*[а-я].*$/ig) || text.match(/^.*ё.*$/ig)) {
            setLogin(prev => ({...prev, isValid: false}))
        } else {
            setLogin(prev => ({...prev, isValid: true})) 
        }
    }

    


    return (
        <div className="login-form">
            <div className="login-form__text">API-консолька</div>
            <form className="login-form__form">
                <label className="login-form__label" htmlFor="login">Логин</label>
                <input onChange={formChangeHandler} type="text" id="login" value={login.value} className="login-form__input" />

                <label className="login-form__label" htmlFor="sublogin">Сублогин</label>
                <input onChange={formChangeHandler} type="text" id="sublogin" value={sublogin.value} className="login-form__input" />

                <label className="login-form__label" htmlFor="passwd">Пароль</label>
                <input onChange={formChangeHandler} type="password" id="passwd" value={passwd.value} className="login-form__input" />

                <button
                    type="submit" 
                    disabled={disabledButtonStatus ? true : false} 
                    className={disabledButtonStatus ? "login-form__button login-form__button_disabled" : "login-form__button"}
                >Войти</button>
            </form>
        </div>
        
    )
}

export default LoginForm