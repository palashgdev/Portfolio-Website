import React, { lazy, useContext, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AppContext } from '../app/App';
import { useScrollToTop } from '../utils/Hooks';
import Footer from '../components/Footer';
import { RouterButton } from '../components/Button';
import {
  ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectHeader, ProjectTextRow, ProjectSectionHeading, ProjectSectionText,
  Video, ProjectSectionColumns, SidebarImages, SidebarImage
} from '../components/Project';
import { media } from '../utils/StyleUtils';
import Render from '../assets/ARMTG/ARMTGWeb.mp4';
import RenderPlaceholder from '../assets/ARMTG/ARMTGWebPlaceHolder.png';
import NextProject from '../assets/Robotics/roboticsStill.webp';

const ARMTGScene = lazy(() => import('../scenes/ARMTGScene'));

const prerender = navigator.userAgent === 'ReactSnap';
const title = 'ARMTG';
const description = 'Bringing the future to the renowned card game: Magic, the Gathering.';
const roles = [
  'Front-end Development',
  'Back-end Development',
  'Software Development',
  'Visual & UI / UX Design',
  'Branding & Identity',
  'Creative Direction',
  '3D Modeling & Animation',
];

function ArMTG(props) {
  const { status, updateTheme, currentTheme } = useContext(AppContext);
  const currentThemeRef = useRef(currentTheme);
  useScrollToTop(status);

  useEffect(() => {
    currentThemeRef.current = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    if ((status === 'entered' || status === 'exiting')) {
      updateTheme({
        colorPrimary: 'rgba(101, 154, 247, 1)',
        colorAccent: 'rgba(101, 154, 247, 1)',
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
        <ARMTGScene />
        <ProjectHeader
          title={title}
          description={description}
          url="https://mtg.codyb.co"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage entered={!prerender}>
              <Video
                src={Render}
                placeholder={RenderPlaceholder}
                reveal
              />
            </ProjectImage>
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
              <ProjectSectionHeading>GCPS Robotics</ProjectSectionHeading>
              <RouterButton
                secondary
                icon="chevronRight"
                to="/projects/gcpsrobotics"
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

export default ArMTG;
