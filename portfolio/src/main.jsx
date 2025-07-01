import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './styles/index.css'
import App from './App.jsx'
import WorkDetail from './components/WorkDetail.jsx'
import geoSmokeImg from './assets/geosmoke.png';
import shadeeImg from './assets/Shadee.png';

const worksData = [
  {
    id: 1,
    title: 'Geo Smoke',
    category: 'Mobile App',
    shortDescription: 'A mobile app to help users find designated smoking areas in Green Office Park.',
    tech: ['SwiftUI', 'MapKit', 'Core Location'],
    imageUrl: geoSmokeImg,
    repoLink: 'https://github.com/AgengT/GeoSmoke.git',
    problemStatement: `Green Office Park (GOP) currently lacks officially designated smoking areas. As a result, people often smoke in any available outdoor space, leading to issues such as cigarette litter and discomfort for smokers. Many smokers prefer specific conditions—like shaded areas or seating—which are often unavailable, making the experience less enjoyable and inconvenient for them. To address this issue, our team developed an app designed to help users locate proper smoking areas within the GOP. The app allows users to easily find the nearest smoking area or filter locations based on available facilities, such as seating, shelter, or distance.`,
    codeSnippet: `function example(arg) {
    console.log(arg);
  }`,
    developmentProcess: [
      'We used MapKit to render interactive maps within the app, allowing users to visually explore the GOP area and easily identify designated smoking zones. This framework enables the use of custom annotations and overlays, which we leveraged to differentiate smoking areas based on available facilities using distinct icons or colors. By embedding the map directly into the interface, users can intuitively navigate the area and select smoking zones that suit their preferences.',
      'To complement this, we implemented Core Location to accurately determine the users real-time location. This plays a key role in enabling distance-based filtering and helping users quickly find the nearest smoking area. With this integration, the app delivers a personalized experience by centering the map around the user\'s position and calculating distances to various locations, ensuring both efficiency and convenience.'
    ]
  },
  {
    id: 2,
    title: 'Shadee',
    category: 'Mobile App',
    shortDescription: 'An app for personalized makeup shade-matching using machine learning.',
    tech: ['SwiftUI', 'UIKit', 'Core ML', 'Create ML'],
    imageUrl: shadeeImg,
    repoLink: 'https://github.com/mirabellachn/Larva-Team.git',
    problemStatement: 'Shadee helps to analyze skin tone, undertone and create a personalized complexion shade-matching experience so that daily makeup users can identify their skin tone and undertone and find the right makeup shade quickly by using Machine Learning.',
    codeSnippet: `class PlayerController {
    update() {
    // ...
  }
}`,
    developmentProcess: [
      'We implemented a custom skin tone extraction pipeline starting with a photo taken from the front-facing camera. The face is detected and segmented, and we use UIKit to compute the average color of the skin while masking out non-skin regions such as the eyes, nostrils, and mouth. This filtered skin region is then passed into a Core ML model trained using Create ML, which classifies the user\'s skin tone based on labeled training data.',
      'For undertone detection, we extract the dominant skin color from the face and convert it into a hue value using UIKit\'s getHue method. This hue value is then used to infer the user\'s undertone category, such as warm, cool, or neutral, without relying on any external filters or visual effects.',
      'The final result presents users with a clear display of their detected skin tone, undertone, and a curated list of recommended shade matches.'
    ]
  },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App worksData={worksData} />,
  },
  {
    path: "/work/:workId",
    element: <WorkDetail works={worksData} />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
