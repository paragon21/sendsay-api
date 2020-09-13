import Connector from '../_services/connector'

const sendsay = new Connector()

const initState = {
    loggedIn: {
        initialized: false,
        status: false,
    }
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case "INITIALIZE":
            return ({
                ...state,
                loggedIn.initialized: true
            })
    }
}

export default Reducer