import axios from "axios";

const url_host = process.env.REACT_APP_HOST

const getState = ({ getStore, getActions, setStore }:any) => {
	return {
		store: {
            news: [],
            params: {
                search: 'latest'
            }
		},

		actions: {
            getAnswer: async () => {
                const queries = getStore().params 
				 await axios.get(`${url_host}/news/search`, { params:queries }).then(async({data})=>{
					setStore({ news: data.articles });
				})
			},
 
			setQueries: (newQueries:any) => {
                setStore({ params: newQueries });
            }, 

        }
	};
};

export default getState;