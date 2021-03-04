interface initialStateI {
    rooms?: any
}

const initialState: initialStateI = {
    rooms: []
};
export default function reducer(state: initialStateI = initialState, action:{type:string, payload:any}) {
    switch (action.type) {
        default: {
            return state
        }
    }
}