
import React, { createContext, useEffect, useState } from "react"; 
import getState from "./flux";

export const Context = createContext(null);

const ContextAll = (Components) => {
	const StoreGlobal = (props) => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore) =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);
		useEffect(() => {
            state.actions.getAnswer()
        }, []);
		return (
			<Context.Provider value={state}>
				<Components {...props} />
			</Context.Provider>
		);
	};
	return StoreGlobal;
};

export default ContextAll;