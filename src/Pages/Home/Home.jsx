import { useEffect, useState } from 'react';
import findMyLocation from '../../Helpers/geolocation';
import endpoints from '../../Helpers/endpoints';
import { requestToken, instance } from '../../DataService/dataService';
import { COOKIE } from '../../DataService/cookieService';
import { CurrWeatherCard } from '../../Components';

import styles from './Home.module.scss';

export default function Home() {
    const [currWeather, setCurrWeather] = useState(null);
    const [coords, setCoords] = useState(null);
    const [locationData, setLocationData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getCurrentWeather() {
        if (!coords) {
            return;
        }
        try {
            setIsLoading(true);
            const { data } = await instance.get(endpoints.CURR_WEATHER(coords));
            setCurrWeather(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    async function getLocationData() {
        if (!coords) {
            return;
        }
        try {
            setIsLoading(true);
            const { data } = await instance.get(endpoints.LOCATION_DATA(coords));
            setLocationData(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    async function tokenCheck() {
        const token = (await requestToken()) || COOKIE.loadToken();
        if (token) {
            COOKIE.saveToken(token);
        }
    }

    useEffect(async () => {
        await tokenCheck();
        findMyLocation(setCoords);
    }, []);

    useEffect(async () => {
        setIsLoading(true);
        await getCurrentWeather();
        await getLocationData();
        setIsLoading(false);
    }, [coords]);

    return (
        <div className={styles.container}>
            {!isLoading && locationData && (
                <CurrWeatherCard locationData={locationData} currWeather={currWeather} />
            )}
            {!isLoading && !locationData && <p>Loading...</p>}
            {isLoading && locationData && <p>Loading...</p>}
        </div>
    );
}
