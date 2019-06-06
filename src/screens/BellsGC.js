import React, { lazy, useContext, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AppContext } from '../app/App';
import ProgressiveImage from '../components/ProgressiveImage';
import { useScrollToTop } from '../utils/Hooks';
import Footer from '../components/Footer';
import { RouterButton } from '../components/Button';
import {
  ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectSectionHeading, ProjectHeader, ProjectTextRow, ProjectSectionText,
  ProjectSectionColumns, SidebarImagesText, SidebarImages, SidebarImage
} from '../components/Project';
import { media } from '../utils/StyleUtils';
import Render from '../assets/BellsGC/BellsGC.webp';
import RenderPlaceholder from '../assets/BellsGC/BellsGCPlaceholder.png';
import BrandingDark from '../assets/BellsGC/brandingDark.webp';
import BrandingDarkPlaceholder from '../assets/BellsGC/brandingDarkPlaceholder.png';
import BrandingLight from '../assets/BellsGC/brandingLight.webp'
import BrandingLightPlaceholder from '../assets/BellsGC/brandingLightPlaceholder.png';
import Splash from '../assets/BellsGC/Splash.webp';
import SplashPlaceholder from '../assets/BellsGC/SplashPlaceholder.png';
import Home from '../assets/BellsGC/Home.webp';
import Store from '../assets/BellsGC/Store.webp';
import StorePlaceholder from '../assets/BellsGC/StorePlaceholder.png';
import Events from '../assets/BellsGC/Events.webp';
import EventsPlaceholder from '../assets/BellsGC/EventsPlaceholder.png';
import About from '../assets/BellsGC/About.webp';
import AboutPlaceholder from '../assets/BellsGC/AboutPlaceholder.png';
import NextProject from '../assets/MystGang/MystGangStill.webp';

const BellsScene = lazy(() => import('../scenes/BellsScene'));

const prerender = navigator.userAgent === 'ReactSnap';
const title = 'Bell\'s GC';
const description = 'A website featuring a storefront, events calendar, and games\' dashboard for a local game store.';
const roles = [
  'Front-end Development',
  'Back-end Development',
  'Visual Design',
  'UI / UX Design',
  'Branding & Identity',
  'Creative Direction',
];

function BellsGC(props) {
  const { status, updateTheme, currentTheme } = useContext(AppContext);
  const currentThemeRef = useRef(currentTheme);
  useScrollToTop(status);

  useEffect(() => {
    currentThemeRef.current = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    if ((status === 'entered' || status === 'exiting')) {
      updateTheme({
        colorPrimary: 'rgba(251, 201, 98, 1)',
        colorAccent: 'rgba(251, 201, 98, 1)',
        custom: true,
      });
    }
  }, [updateTheme, status, currentTheme.id])

  return (
    <React.Fragment>
      <Helmet
        title={`Projects | ${title}`}
        meta={[{ name: 'description', content: description, }]}
      />
      <ProjectContainer>
        <BellsScene />
        <ProjectHeader
          title={title}
          description={description}
          url="https://bells.gq"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage entered={!prerender}>
              <ProgressiveImage
                srcSet={`${Render}`}
                placeholder={RenderPlaceholder}
                alt=""
                sizes={`(max-width: ${media.mobile}) 100vw, (max-width: ${media.tablet}) 90vw, 80vw`}
                reveal
              />
            </ProjectImage>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <SidebarImagesText>
              <ProjectSectionHeading>Visual Identity</ProjectSectionHeading>
            </SidebarImagesText>
            <SidebarImages>
              <SidebarImage
                srcSet={`${currentTheme.id === 'dark' ? BrandingDark : BrandingLight}`}
                placeholder={`${currentTheme.id === 'dark' ? BrandingDarkPlaceholder : BrandingLightPlaceholder}`}
                alt=""
                sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
              />
            </SidebarImages>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Website</ProjectSectionHeading>
            </ProjectTextRow>
            <ProgressiveImage
              srcSet={`${Splash}`}
              placeholder={SplashPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
            />
            <ProgressiveImage
              srcSet={`${Home}`}
              placeholder={RenderPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
            />
            <ProgressiveImage
              srcSet={`${Store}`}
              placeholder={StorePlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
            />
            <ProgressiveImage
              srcSet={`${Events}`}
              placeholder={EventsPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
            />
            <ProgressiveImage
              srcSet={`${About}`}
              placeholder={AboutPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns light>
            <SidebarImages>
              <SidebarImage
                srcSet={`${NextProject}`}
                alt=""
                reveal
                sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
              />
            </SidebarImages>
            <ProjectTextRow center>
              <ProjectSectionText>
                Next Project
              </ProjectSectionText>
              <ProjectSectionHeading>MystGang 2019</ProjectSectionHeading>
              <RouterButton
                secondary
                icon="chevronRight"
                to="/projects/mystgang"
              >
                View Project
              </RouterButton>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </React.Fragment>
  );
}

export default BellsGC;
