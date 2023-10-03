import Axios from 'axios';


const fetchGenericHome = async (api: string) => {
    try {
        const response = await Axios.get(`${api}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shifts:', error);
        throw error;
    }
};
export {fetchGenericHome};
