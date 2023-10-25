import Axios from 'axios';


const fetchGenericHome = async (api: string) => {
    try {
        const response = await Axios.get(`${api}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Home:', error);
        throw error;
    }
};
export {fetchGenericHome};
const fetchVideos = async (api: string) => {
    try {
        const response = await Axios.get(`${api}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching SummaryVideos:', error);
        throw error;
    }
};
export {fetchVideos};

const fetchSeries = async (api: string) => {
    try {
        const response = await Axios.get(`${api}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching SummaryVideos:', error);
        throw error;
    }
};
export {fetchSeries};

const fetchSummary = async (api: string) => {
    try {
        const response = await Axios.get(`${api}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching SummaryVideos:', error);
        throw error;
    }
};
export {fetchSummary};
const fetchSchedule = async (api: string) => {
    try {
        const response = await Axios.get(`${api}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching SummaryVideos:', error);
        throw error;
    }
};
export {fetchSchedule};

const fetchBlogs = async (page: number) => {
    try {
        const response = await Axios.get(`https://cwscoring.cricwick.net/api/news?page=${page}&per_page=6&app_name=CricwickWeb`);
        return response.data;
    } catch (error) {
        console.error('Error fetching BLogs:', error);
        throw error;
    }
};
export {fetchBlogs};
