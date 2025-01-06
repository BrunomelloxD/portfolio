import { useQuery } from 'react-query';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

import Loading from '../components/templates/LoadingTemplate';
import ProfileAbout from '../components/templates/ProfileAbout';
import ProfileHomeTemplate from '../components/templates/ProfileHomeTemplate';
import ProfilePersonalInformation from '../components/templates/ProfilePersonalInformation';
import ProfileWorks from '../components/templates/ProfileWorks';
import ServerError from '../components/templates/ServerError';

import { useGitHubUserData } from '../hooks/useGitHubUserData';
import { GitHubUserData } from '../types/GitHubUserData';

import api from '../services/api';

const VITE_GITHUB_USER = import.meta.env.VITE_GITHUB_USER;
const fetchGitHubData = async () => {
  const response = await api.get<GitHubUserData>(`${VITE_GITHUB_USER}`);
  return response.data;
};

const Landing = () => {
  const { setAvatarUrl, setCompany, setLocation, setName } =
    useGitHubUserData();
  const { data, isLoading, isError, isSuccess } = useQuery(
    'githubProfilePicture',
    fetchGitHubData
  );

  useEffect(() => {
    if (isSuccess) {
      setAvatarUrl(data?.avatar_url);
      setCompany(data?.company);
      setLocation(data?.location);
      setName(data?.name);
    }

    let latitude = '';
    let longitude = '';

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude = position.coords.latitude.toString();
          longitude = position.coords.longitude.toString();
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    }

    const userAgent = navigator.userAgent;
    const appName = navigator.appName;
    const appVersion = navigator.appVersion;
    const platform = navigator.platform;
    const language = navigator.language;

    const message = `Latitude: ${latitude}, Longitude: ${longitude || 'Localização não disponível'}, 
      User Agent: ${userAgent}, 
      App Name: ${appName}, 
      App Version: ${appVersion}, 
      Platform: ${platform}, 
      Language: ${language}`;

    emailjs.send(
      'service_l9gh4io',
      'template_9glmxg6',
      {
        message: message,
      },
      '_BM_m6y_iJjxDI60q'
    )
  }, [isSuccess, data, setAvatarUrl, setCompany, setLocation, setName]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ServerError />;
  }

  return (
    <main className="px-5">
      <ProfileHomeTemplate />
      <ProfilePersonalInformation />
      <ProfileAbout />
      <ProfileWorks />
    </main>
  );
};

export default Landing;
